<template>
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :destroy-on-close="true"
        :model-value="baTable.form.operate === 'Detail'"
        @close="() => baTable.toggleForm()"
        width="800px"
        top="5vh"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ t('posts.posts.Post Detail') }}
            </div>
        </template>

        <el-scrollbar v-loading="loading" class="ba-table-form-scrollbar">
            <div v-if="!loading && detailData" class="detail-dialog-content">
                <!-- 帖子基本信息 -->
                <el-descriptions :column="2" border class="mb-20">
                    <el-descriptions-item :label="t('posts.posts.Post ID')">
                        {{ detailData.post?.id }}
                    </el-descriptions-item>
                    <el-descriptions-item :label="t('posts.posts.Post Type')">
                        <el-tag :type="detailData.post?.post_type === 1 ? 'primary' : 'warning'" size="small">
                            {{ detailData.post?.post_type === 1 ? t('posts.posts.Topic') : t('posts.posts.Resource') }}
                        </el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item :label="t('posts.posts.Author Nickname')">
                        <div class="author-info-cell">
                            <el-image v-if="detailData.user?.avatar" :src="fullUrl(detailData.user.avatar)" class="author-avatar" fit="cover" />
                            <span>{{ detailData.user?.nickname || '-' }}</span>
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item :label="t('posts.posts.Status')">
                        <el-tag :type="postStatusTagType(detailData.post?.status)" size="small">
                            {{ detailData.post?.status_text || '-' }}
                        </el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item :label="t('posts.posts.Title')" :span="2">
                        {{ detailData.post?.title || '-' }}
                    </el-descriptions-item>
                    <el-descriptions-item :label="t('posts.posts.Create Time')">
                        {{ timeFormat(detailData.post?.create_time) }}
                    </el-descriptions-item>
                    <el-descriptions-item :label="t('posts.posts.Update Time')">
                        {{ timeFormat(detailData.post?.update_time) }}
                    </el-descriptions-item>
                </el-descriptions>

                <!-- 帖子正文 -->
                <el-divider content-position="left">{{ t('posts.posts.Content') }}</el-divider>
                <div class="content-preview" v-html="renderMarkdown(detailData.post?.content)"></div>

                <!-- 拒绝/下架原因 -->
                <template v-if="detailData.post?.refuse_remark">
                    <el-divider content-position="left">{{ t('posts.posts.Refuse Remark') }}</el-divider>
                    <el-alert :title="detailData.post.refuse_remark" type="error" :closable="false" show-icon />
                </template>

                <!-- 草稿信息（如有） -->
                <template v-if="detailData.draft">
                    <el-divider content-position="left">{{ t('posts.posts.Draft Info') }}</el-divider>
                    <el-descriptions :column="3" border size="small">
                        <el-descriptions-item :label="t('posts.posts.Draft Status')">
                            <el-tag :type="draftStatusTagType(detailData.draft.audit_status)" size="small">
                                {{ detailData.draft.audit_status_text }}
                            </el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('posts.posts.Draft Version')"> v{{ detailData.draft.version }} </el-descriptions-item>
                        <el-descriptions-item :label="t('posts.posts.Update Time')">
                            {{ timeFormat(detailData.draft.update_time) }}
                        </el-descriptions-item>
                    </el-descriptions>
                </template>
                <template v-else>
                    <el-divider content-position="left">{{ t('posts.posts.Draft Info') }}</el-divider>
                    <el-text type="info">{{ t('posts.posts.No draft record') }}</el-text>
                </template>
            </div>
        </el-scrollbar>

        <template #footer>
            <el-button @click="() => baTable.toggleForm()">{{ t('posts.posts.Cancel') }}</el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type baTableClass from '/@/utils/baTable'
import type { TagProps } from 'element-plus'
import { timeFormat, fullUrl } from '/@/utils/common'
import { detail } from '/@/api/backend/posts/posts'
import { useI18n } from 'vue-i18n'
import { Marked } from 'marked'

const marked = new Marked()
const renderMarkdown = (content: string | null | undefined): string => {
    if (!content) return ''
    if (/<[a-zA-Z][^>]*>/.test(content)) return content
    return marked.parse(content) as string
}

const baTable = inject('baTable') as baTableClass
const { t } = useI18n()

const loading = ref(false)
const detailData = ref<any>(null)

/**
 * 帖子状态 tag 类型
 */
const postStatusTagType = (status?: number): TagProps['type'] => {
    const map: Record<number, TagProps['type']> = {
        1: 'warning',
        2: 'success',
        3: 'danger',
        4: 'info',
        5: 'warning',
        6: 'danger',
    }
    return map[status!] || 'info'
}

/**
 * 草稿状态 tag 类型
 */
const draftStatusTagType = (status?: number): TagProps['type'] => {
    const map: Record<number, TagProps['type']> = {
        1: 'warning',
        2: 'success',
        3: 'danger',
    }
    return map[status!] || 'info'
}

/**
 * 监听 form.operate 变化，加载详情
 */
watch(
    () => baTable.form.operate,
    (val) => {
        if (val === 'Detail' && baTable.form.items?.id) {
            loadDetail(baTable.form.items.id)
        }
    }
)

/**
 * 加载帖子详情
 */
const loadDetail = (id: number) => {
    loading.value = true
    detailData.value = null
    detail(id)
        .then((res) => {
            detailData.value = res.data
        })
        .catch(() => {
            ElMessage.error('Failed to load post detail')
            baTable.toggleForm()
        })
        .finally(() => {
            loading.value = false
        })
}
</script>

<style scoped lang="scss">
.detail-dialog-content {
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

.mb-20 {
    margin-bottom: 20px;
}
</style>
