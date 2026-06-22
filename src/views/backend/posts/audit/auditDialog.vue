<template>
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :destroy-on-close="true"
        :model-value="baTable.form.operate === 'Info'"
        @close="baTable.toggleForm"
        width="960px"
        top="5vh"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ t('posts.postAuditDrafts.Audit Detail') }}
            </div>
        </template>

        <el-scrollbar v-loading="loading" class="ba-table-form-scrollbar">
            <div v-if="!loading && detailData" class="audit-dialog-content">
                <!-- ====== 视图 A：首次发布（status = 1）====== -->
                <template v-if="viewMode === 'first'">
                    <div class="first-publish-view">
                        <!-- 作者信息 -->
                        <el-descriptions :column="2" border class="mb-20">
                            <el-descriptions-item :label="t('posts.postAuditDrafts.Author Nickname')">
                                <div class="author-info-cell">
                                    <el-image
                                        v-if="detailData.user?.avatar"
                                        :src="fullUrl(detailData.user.avatar)"
                                        class="author-avatar"
                                        fit="cover"
                                    />
                                    <span>{{ detailData.user?.nickname || '-' }}</span>
                                </div>
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('posts.postAuditDrafts.Post Type')">
                                <el-tag :type="detailData.draft?.post_type === 1 ? 'primary' : 'warning'" size="small">
                                    {{ detailData.draft?.post_type === 1 ? t('posts.postAuditDrafts.Topic') : t('posts.postAuditDrafts.Resource') }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('posts.postAuditDrafts.Draft Title')" :span="2">
                                <span class="draft-title">{{ detailData.draft?.title }}</span>
                            </el-descriptions-item>
                        </el-descriptions>

                        <!-- 提审正文 -->
                        <el-divider content-position="left">{{ t('posts.postAuditDrafts.Draft Content') }}</el-divider>
                        <div class="content-preview" v-html="renderMarkdown(detailData.draft?.content)"></div>
                    </div>
                </template>

                <!-- ====== 视图 B：内容变更（status = 5）—— 左右分栏对比 ===== -->
                <template v-else-if="viewMode === 'diff'">
                    <el-descriptions :column="2" border class="mb-20">
                        <el-descriptions-item :label="t('posts.postAuditDrafts.Author Nickname')">
                            <div class="author-info-cell">
                                <el-image v-if="detailData.user?.avatar" :src="fullUrl(detailData.user.avatar)" class="author-avatar" fit="cover" />
                                <span>{{ detailData.user?.nickname || '-' }}</span>
                            </div>
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('posts.postAuditDrafts.Version')"> v{{ detailData.draft?.version }} </el-descriptions-item>
                    </el-descriptions>

                    <div class="diff-view">
                        <!-- 左栏：线上老版本（只读） -->
                        <div class="diff-panel diff-panel-old">
                            <div class="diff-panel-header">
                                <el-tag type="info" size="small">{{ t('posts.postAuditDrafts.Online Version (Read Only)') }}</el-tag>
                            </div>
                            <div class="diff-panel-body">
                                <h3 class="diff-title">{{ detailData.post?.title || '-' }}</h3>
                                <el-divider />
                                <div class="content-preview" v-html="renderMarkdown(detailData.post?.content)"></div>
                            </div>
                        </div>

                        <!-- 右栏：提审新版本 -->
                        <div class="diff-panel diff-panel-new">
                            <div class="diff-panel-header">
                                <el-tag type="warning" size="small">{{ t('posts.postAuditDrafts.New Version (Under Review)') }}</el-tag>
                            </div>
                            <div class="diff-panel-body">
                                <h3 class="diff-title new-title">{{ detailData.draft?.title || '-' }}</h3>
                                <el-divider />
                                <div class="content-preview" v-html="renderMarkdown(detailData.draft?.content)"></div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </el-scrollbar>

        <!-- 底部操作按钮 -->
        <template #footer>
            <div class="dialog-footer" v-if="detailData?.draft?.audit_status === 1">
                <el-button type="danger" @click="onReject">
                    {{ t('posts.postAuditDrafts.Reject') }}
                </el-button>
                <el-button type="success" @click="onApprove">
                    {{ t('posts.postAuditDrafts.Approve') }}
                </el-button>
            </div>
        </template>
    </el-dialog>

    <!-- 拒绝弹窗 -->
    <el-dialog v-model="rejectDialogVisible" :title="t('posts.postAuditDrafts.Reject')" width="500px" :close-on-click-modal="false" destroy-on-close>
        <!-- 快捷驳回标签 -->
        <div class="reject-templates">
            <span class="reject-templates-label">{{ t('posts.postAuditDrafts.Quick reject templates') }}：</span>
            <el-tag v-for="tpl in rejectTemplates" :key="tpl" class="reject-template-tag" effect="plain" @click="applyRejectTemplate(tpl)">
                {{ tpl }}
            </el-tag>
        </div>
        <el-input
            v-model="rejectReason"
            type="textarea"
            :rows="4"
            :placeholder="t('posts.postAuditDrafts.Please enter rejection reason')"
            maxlength="500"
            show-word-limit
        />
        <template #footer>
            <el-button @click="rejectDialogVisible = false">{{ t('posts.postAuditDrafts.Cancel') }}</el-button>
            <el-button type="danger" :disabled="!rejectReason.trim()" @click="confirmReject">
                {{ t('posts.postAuditDrafts.Confirm') }}
            </el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { inject, ref, computed, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type baTableClass from '/@/utils/baTable'
import { fullUrl } from '/@/utils/common'
import { detail, approve, reject } from '/@/api/backend/posts/postAuditDrafts'
import { useI18n } from 'vue-i18n'
import { Marked } from 'marked'

const marked = new Marked()
const renderMarkdown = (content: string | null | undefined): string => {
    if (!content) return ''
    // 如果内容包含 HTML 标签（富文本编辑器产出），直接返回；否则当 Markdown 解析
    if (/<[a-zA-Z][^>]*>/.test(content)) return content
    return marked.parse(content) as string
}

const baTable = inject('baTable') as baTableClass
const { t } = useI18n()

const loading = ref(false)
const detailData = ref<any>(null)
const rejectDialogVisible = ref(false)
const rejectReason = ref('')

/**
 * 快捷驳回标签
 */
const rejectTemplates = computed(() => [
    t('posts.postAuditDrafts.Contains WeChat contact for traffic diversion'),
    t('posts.postAuditDrafts.Contains politically sensitive words'),
    t('posts.postAuditDrafts.Content is vulgar or spam'),
    t('posts.postAuditDrafts.Contains false advertising'),
    t('posts.postAuditDrafts.Involves personal privacy leakage'),
])

/**
 * 视图模式：first=首次发布 / diff=内容变更
 */
const viewMode = computed<'first' | 'diff'>(() => {
    if (!detailData.value?.post) return 'first'
    // status=5 表示内容变更审核
    return detailData.value.post.status === 5 ? 'diff' : 'first'
})

/**
 * 监听 form.operate 变化，加载审核详情
 */
watch(
    () => baTable.form.operate,
    (val) => {
        if (val === 'Info' && baTable.form.items?.post_id) {
            loadDetail(baTable.form.items.post_id)
        }
    }
)

/**
 * 加载审核详情
 */
const loadDetail = (post_id: number) => {
    loading.value = true
    detailData.value = null
    detail(post_id)
        .then((res) => {
            detailData.value = res.data
        })
        .catch(() => {
            ElMessage.error('Failed to load audit detail')
            baTable.toggleForm()
        })
        .finally(() => {
            loading.value = false
        })
}

/**
 * 点击快捷驳回标签
 */
const applyRejectTemplate = (tpl: string) => {
    rejectReason.value = rejectReason.value ? rejectReason.value + '；' + tpl : tpl
}

/**
 * 审核通过
 */
const onApprove = () => {
    if (!detailData.value?.draft?.post_id) return
    ElMessageBox.confirm(t('posts.postAuditDrafts.Approve confirm'), t('posts.postAuditDrafts.Approve'), {
        confirmButtonText: t('posts.postAuditDrafts.Confirm'),
        cancelButtonText: t('posts.postAuditDrafts.Cancel'),
        type: 'success',
    })
        .then(() => {
            approve(detailData.value!.draft!.post_id, detailData.value!.draft!.version).then(() => {
                ElMessage.success(t('posts.postAuditDrafts.Approved'))
                baTable.toggleForm()
                baTable.onTableHeaderAction('refresh', {})
            })
        })
        .catch(() => {})
}

/**
 * 打开拒绝弹窗
 */
const onReject = () => {
    rejectReason.value = ''
    rejectDialogVisible.value = true
}

/**
 * 确认拒绝
 */
const confirmReject = () => {
    if (!detailData.value?.draft?.post_id || !rejectReason.value.trim()) return
    reject(detailData.value.draft.post_id, rejectReason.value.trim(), detailData.value.draft.version).then(() => {
        ElMessage.success(t('posts.postAuditDrafts.Rejected'))
        rejectDialogVisible.value = false
        baTable.toggleForm()
        baTable.onTableHeaderAction('refresh', {})
    })
}
</script>

<style scoped lang="scss">
.audit-dialog-content {
    padding: 0 10px;
}

.author-info-cell {
    display: flex;
    align-items: center;
    gap: 8px;
}

.author-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex-shrink: 0;
}

.draft-title {
    font-weight: bold;
    font-size: 16px;
}

.content-preview {
    line-height: 1.8;
    word-break: break-word;
    min-height: 60px;
    padding: 16px;
    background-color: var(--el-fill-color-lighter);
    border-radius: 4px;
    font-size: 14px;
    color: var(--el-text-color-primary);

    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
        margin: 16px 0 8px;
        font-weight: 600;
        line-height: 1.4;
    }

    :deep(h1) {
        font-size: 24px;
    }

    :deep(h2) {
        font-size: 20px;
    }

    :deep(h3) {
        font-size: 18px;
    }

    :deep(h4) {
        font-size: 16px;
    }

    :deep(p) {
        margin: 0 0 12px;
    }

    :deep(img) {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin: 8px 0;
    }

    :deep(a) {
        color: var(--el-color-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    :deep(blockquote) {
        margin: 12px 0;
        padding: 8px 16px;
        border-left: 4px solid var(--el-color-primary-light-5);
        background-color: var(--el-fill-color);
        color: var(--el-text-color-secondary);
        border-radius: 0 4px 4px 0;
    }

    :deep(ul),
    :deep(ol) {
        margin: 8px 0;
        padding-left: 24px;
    }

    :deep(li) {
        margin: 4px 0;
    }

    :deep(table) {
        width: 100%;
        border-collapse: collapse;
        margin: 12px 0;

        th,
        td {
            border: 1px solid var(--el-border-color-lighter);
            padding: 8px 12px;
            text-align: left;
        }

        th {
            background-color: var(--el-fill-color);
            font-weight: 600;
        }
    }

    :deep(pre) {
        margin: 12px 0;
        padding: 12px;
        background-color: var(--el-fill-color);
        border-radius: 4px;
        overflow-x: auto;
        font-size: 13px;
        line-height: 1.6;
    }

    :deep(code) {
        padding: 2px 6px;
        background-color: var(--el-fill-color);
        border-radius: 3px;
        font-size: 13px;
    }

    :deep(pre code) {
        padding: 0;
        background: none;
    }

    :deep(hr) {
        border: none;
        border-top: 1px solid var(--el-border-color-lighter);
        margin: 16px 0;
    }

    :deep(strong) {
        font-weight: 600;
    }

    :deep(em) {
        font-style: italic;
    }

    :deep(video) {
        max-width: 100%;
        border-radius: 4px;
    }
}

// 左右分栏对比视图
.diff-view {
    display: flex;
    gap: 16px;
    margin-top: 10px;
}

.diff-panel {
    flex: 1;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 6px;
    overflow: hidden;
}

.diff-panel-header {
    padding: 8px 12px;
    background-color: var(--el-fill-color);
    border-bottom: 1px solid var(--el-border-color-lighter);
}

.diff-panel-body {
    padding: 12px;
    max-height: 500px;
    overflow-y: auto;
}

.diff-title {
    margin: 0 0 8px;
    font-size: 15px;
    font-weight: bold;
}

.new-title {
    color: var(--el-color-warning);
}

.diff-panel-old {
    .diff-panel-header {
        background-color: var(--el-color-info-light-9);
    }
}

.diff-panel-new {
    border-color: var(--el-color-warning-light-5);

    .diff-panel-header {
        background-color: var(--el-color-warning-light-9);
    }
}

// 拒绝弹窗样式
.reject-templates {
    margin-bottom: 12px;
}

.reject-templates-label {
    display: block;
    margin-bottom: 8px;
    font-size: 13px;
    color: var(--el-text-color-secondary);
}

.reject-template-tag {
    cursor: pointer;
    margin: 0 6px 6px 0;
    transition: all 0.2s;

    &:hover {
        color: var(--el-color-danger);
        border-color: var(--el-color-danger);
    }
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

.mb-20 {
    margin-bottom: 20px;
}
</style>
