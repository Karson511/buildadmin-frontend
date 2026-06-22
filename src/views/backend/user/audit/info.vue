<template>
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :destroy-on-close="true"
        :model-value="baTable.form.operate ? true : false"
        @close="baTable.toggleForm"
        width="900px"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ t('user.audit.Audit detail') }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="config.layout.shrink ? '' : 'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <div v-if="!baTable.form.loading && !isEmpty(master)">
                    <!-- 审核单基本信息 -->
                    <el-descriptions :column="2" border class="mb-20">
                        <el-descriptions-item :label="t('user.audit.Audit no')" :span="2">
                            {{ master.audit_no }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('user.audit.User ID')">
                            {{ master.user_id }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('user.audit.Nickname')">
                            {{ user?.nickname }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('user.audit.Mobile')">
                            {{ user?.mobile }}
                        </el-descriptions-item>
                        <el-descriptions-item v-if="master.version" :label="t('user.audit.Version')"> v{{ master.version }} </el-descriptions-item>
                        <el-descriptions-item :label="t('user.audit.Status')">
                            <el-tag :type="statusTagType(master.status)" v-if="master.status_text">
                                {{ master.status_text }}
                            </el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('user.audit.Modify time')">
                            {{ timeFormat(master.create_time) }}
                        </el-descriptions-item>
                        <el-descriptions-item v-if="master.status === 4 && master.reject_reason" :label="t('user.audit.Rejection reason')" :span="2">
                            <span class="color-red">{{ master.reject_reason }}</span>
                        </el-descriptions-item>
                    </el-descriptions>

                    <!-- 审核单所有字段变更明细（文字字段，不含照片） -->
                    <el-divider v-if="textDetails && textDetails.length">{{ t('user.audit.Field changes') }}</el-divider>
                    <el-table v-if="textDetails && textDetails.length" :data="textDetails" border stripe size="small">
                        <el-table-column prop="field_name" :label="t('user.audit.Field name')" width="120" align="center" />
                        <el-table-column :label="t('user.audit.Original content')" min-width="160" align="center">
                            <template #default="scope">
                                <!-- 使用 display 字段：单图 -->
                                <el-image
                                    v-if="isImageField(scope.row.field_key) && extractImageSrc(scope.row.old_value_display)"
                                    :hide-on-click-modal="true"
                                    :preview-teleported="true"
                                    :preview-src-list="[fullUrl(extractImageSrc(scope.row.old_value_display)!)]"
                                    :src="fullUrl(extractImageSrc(scope.row.old_value_display)!)"
                                    style="width: 60px; height: 60px"
                                ></el-image>
                                <template v-else-if="scope.row.old_value">
                                    <span v-html="scope.row.old_value"></span>
                                </template>
                                <template v-else>-</template>
                            </template>
                        </el-table-column>
                        <el-table-column :label="t('user.audit.Modified content')" min-width="160" align="center">
                            <template #default="scope">
                                <!-- 使用 display 字段：单图 -->
                                <el-image
                                    v-if="isImageField(scope.row.field_key) && extractImageSrc(scope.row.new_value_display)"
                                    :hide-on-click-modal="true"
                                    :preview-teleported="true"
                                    :preview-src-list="[fullUrl(extractImageSrc(scope.row.new_value_display)!)]"
                                    :src="fullUrl(extractImageSrc(scope.row.new_value_display)!)"
                                    style="width: 60px; height: 60px"
                                ></el-image>
                                <template v-else-if="scope.row.new_value">
                                    <span v-html="scope.row.new_value"></span>
                                </template>
                                <template v-else>-</template>
                            </template>
                        </el-table-column>
                        <el-table-column :label="t('user.audit.Status')" width="100" align="center">
                            <template #default="scope">
                                <el-tag :type="detailStatusTagType(scope.row.audit_status)" size="small">
                                    {{ scope.row.audit_status_text }}
                                </el-tag>
                            </template>
                        </el-table-column>
                        <!-- 是否被用户修改标记列 -->
                        <el-table-column :label="t('user.audit.Field modified')" width="110" align="center">
                            <template #default="scope">
                                <el-tooltip v-if="scope.row.is_modified" :content="t('user.audit.Field modified tip')" placement="top">
                                    <el-tag type="danger" size="small">{{ t('user.audit.Field modified') }}</el-tag>
                                </el-tooltip>
                                <span v-else class="text-gray">-</span>
                            </template>
                        </el-table-column>
                        <!-- 驳回理由列 -->
                        <el-table-column :label="t('user.audit.Rejection reason')" min-width="160" align="center">
                            <template #default="scope">
                                <span v-if="scope.row.reject_reason" class="color-red">{{ scope.row.reject_reason }}</span>
                                <span v-else class="text-gray">-</span>
                            </template>
                        </el-table-column>
                        <!-- 单行明细操作列：仅待审核可整行操作（照片已在独立表格） -->
                        <el-table-column :label="t('Operate')" width="160" align="center" fixed="right">
                            <template #default="scope">
                                <template v-if="scope.row.audit_status === 1">
                                    <el-button type="success" size="small" @click="onRowApprove(scope.row)">
                                        {{ t('user.audit.Approve') }}
                                    </el-button>
                                    <el-button type="danger" size="small" @click="onRowReject(scope.row)">
                                        {{ t('user.audit.Reject') }}
                                    </el-button>
                                </template>
                                <span v-else class="text-gray">-</span>
                            </template>
                        </el-table-column>
                    </el-table>

                    <!-- 照片审核（独立表格，一图一行） -->
                    <el-divider v-if="mediaImgDetails.length">{{ t('user.audit.Media audit') }}</el-divider>
                    <el-table v-if="mediaImgDetails.length" :data="mediaImgDetails" border stripe size="small">
                        <el-table-column :label="t('user.audit.Sort')" width="70" align="center">
                            <template #default="scope">#{{ scope.$index + 1 }}</template>
                        </el-table-column>
                        <el-table-column :label="t('user.audit.Photo')" min-width="120" align="center">
                            <template #default="scope">
                                <el-image
                                    :preview-teleported="true"
                                    :preview-src-list="mediaImgDetails.map((m: any) => fullUrl(m.url))"
                                    :src="fullUrl(scope.row.url)"
                                    :hide-on-click-modal="true"
                                    style="width: 60px; height: 60px"
                                ></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column :label="t('user.audit.Status')" width="100" align="center">
                            <template #default="scope">
                                <el-tag :type="detailStatusTagType(scope.row.items_audit_status)" size="small">
                                    {{ scope.row.items_audit_status_text }}
                                </el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column :label="t('user.audit.Rejection reason')" min-width="160" align="center">
                            <template #default="scope">
                                <span v-if="scope.row.items_reject_reason" class="color-red">{{ scope.row.items_reject_reason }}</span>
                                <span v-else class="text-gray">-</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="t('Operate')" width="160" align="center" fixed="right">
                            <template #default="scope">
                                <template v-if="scope.row.items_audit_status === 1">
                                    <el-button type="success" size="small" @click="onItemApprove(scope.row)">
                                        {{ t('user.audit.Approve') }}
                                    </el-button>
                                    <el-button type="danger" size="small" @click="onItemReject(scope.row)">
                                        {{ t('user.audit.Reject') }}
                                    </el-button>
                                </template>
                                <span v-else class="text-gray">-</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-scrollbar>

        <template #footer>
            <div v-if="!baTable.form.loading && hasPending" class="audit-all-footer">
                <el-button class="audit-refresh-btn" @click="reloadDetail">
                    <Icon name="fa fa-refresh" />
                    <span class="ml-4">{{ t('user.audit.Refresh') }}</span>
                </el-button>
                <el-popconfirm
                    @confirm="onApproveAll"
                    :confirm-button-text="t('user.audit.Confirm')"
                    :cancel-button-text="t('Cancel')"
                    confirmButtonType="success"
                    :title="t('user.audit.Approve all confirm')"
                >
                    <template #reference>
                        <el-button type="success">
                            <Icon name="fa fa-check" />
                            <span class="ml-4">{{ t('user.audit.Approve all') }}</span>
                        </el-button>
                    </template>
                </el-popconfirm>
                <el-button type="danger" @click="onRejectAll">
                    <Icon name="fa fa-times" />
                    <span class="ml-4">{{ t('user.audit.Reject all') }}</span>
                </el-button>
                <el-button @click="baTable.toggleForm()">{{ t('Cancel') }}</el-button>
            </div>
            <div v-else class="audit-all-footer">
                <el-button class="audit-refresh-btn" @click="reloadDetail">
                    <Icon name="fa fa-refresh" />
                    <span class="ml-4">{{ t('user.audit.Refresh') }}</span>
                </el-button>
                <el-button @click="baTable.toggleForm()">{{ t('Cancel') }}</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage, ElMessageBox, type TagProps } from 'element-plus'
import type baTableClass from '/@/utils/baTable'
import { timeFormat, fullUrl } from '/@/utils/common'
import { isEmpty } from 'lodash-es'
import { useConfig } from '/@/stores/config'
import { audit, auditItem, batchApproveAll, batchRejectAll, edit } from '/@/api/backend/user/audit'

const config = useConfig()
const baTable = inject('baTable') as baTableClass
const { t } = useI18n()

const master = computed<any>(() => {
    return baTable.form.extend?.['master'] || {}
})

const user = computed<any>(() => {
    return baTable.form.extend?.['user'] || {}
})

const details = computed<any[]>(() => {
    return baTable.form.extend?.['details'] || []
})

/**
 * 文字字段明细（排除 media_img，主明细表数据源）
 */
const textDetails = computed<any[]>(() => {
    return details.value.filter((d: any) => !isImagesField(d.field_key))
})

/**
 * 照片明细（media_img 各行的 media_items 展平，照片表数据源）
 */
const mediaImgDetails = computed<any[]>(() => {
    return details.value.filter((d: any) => isImagesField(d.field_key)).flatMap((d: any) => d.media_items || [])
})

/**
 * 是否存在待审核明细或照片（控制一键全单按钮显示）
 */
const hasPending = computed(() => {
    const hasDetailPending = details.value.some((item: any) => item.audit_status === 1)
    const hasPhotoPending = mediaImgDetails.value.some((item: any) => item.items_audit_status === 1)
    return hasDetailPending || hasPhotoPending
})

const isImageField = (fieldKey: string) => {
    return ['avatar', 'wechat_contact_qr_code', 'wechat_contact_qr_code_id'].includes(fieldKey)
}

const isImagesField = (fieldKey: string) => {
    return ['media_img'].includes(fieldKey)
}

/**
 * 明细行级状态（1待审核/2通过/3驳回）对应的 tag 类型
 */
const detailStatusTagType = (status: number): TagProps['type'] => {
    const map: Record<number, TagProps['type']> = {
        1: 'warning',
        2: 'success',
        3: 'danger',
    }
    return map[status] || 'info'
}

/**
 * 从 display 值中提取图片 URL
 * 兼容格式：字符串路径 | {id, url} 对象 | null
 */
const extractImageSrc = (displayValue: any): string | null => {
    if (!displayValue) return null
    if (typeof displayValue === 'string') return displayValue
    if (typeof displayValue === 'object' && displayValue.url) return displayValue.url
    return null
}

const statusTagType = (status: number): TagProps['type'] => {
    const map: Record<number, TagProps['type']> = {
        1: 'warning',
        2: 'warning',
        3: 'success',
        4: 'danger',
        5: 'info',
    }
    return map[status] || 'info'
}

/**
 * 审核成功后统一处理：提示 + 刷新详情（不关弹窗，保持连续审核）+ 刷新列表
 */
const onAuditSuccess = (msg: string) => {
    ElMessage.success(msg)
    reloadDetail()
    baTable.onTableHeaderAction('refresh', {})
}

/**
 * 刷新详情：重新拉取当前审核单的 master + details
 */
const reloadDetail = () => {
    if (!master.value || !master.value.audit_no) return
    baTable.form.loading = true
    edit(master.value.audit_no)
        .then((res) => {
            baTable.form.items = res.data.master
            baTable.form.extend!['master'] = res.data.master
            baTable.form.extend!['details'] = res.data.details
            baTable.form.extend!['user'] = res.data.user
        })
        .finally(() => {
            baTable.form.loading = false
        })
}

/**
 * 单行明细通过
 */
const onRowApprove = (row: any) => {
    audit(row.id, 'approve', master.value.version, row.details_version).then(() => {
        onAuditSuccess(t('user.audit.Approve success'))
    })
}

/**
 * 单行明细驳回（弹窗录入原因）
 */
const onRowReject = (row: any) => {
    ElMessageBox.prompt(t('user.audit.Please enter rejection reason'), row.field_name, {
        confirmButtonText: t('user.audit.Confirm'),
        cancelButtonText: t('Cancel'),
        inputErrorMessage: t('user.audit.Please enter content'),
        inputPlaceholder: t('user.audit.Please enter rejection reason'),
        inputValue: '',
        inputType: 'textarea',
    })
        .then(({ value }) => {
            audit(row.id, 'reject', master.value.version, row.details_version, value).then(() => {
                onAuditSuccess(t('user.audit.Reject success'))
            })
        })
        .catch(() => {
            ElMessage({ type: 'info', message: t('Cancel') })
        })
}

/**
 * 单张图片通过（media_img 的某一张）
 * @param item 单图对象 media_items[i]（含 id、items_version）
 */
const onItemApprove = (item: any) => {
    auditItem(item.id, 'approve', item.items_version).then(() => {
        onAuditSuccess(t('user.audit.Approve success'))
    })
}

/**
 * 单张图片驳回（弹窗录入原因）
 */
const onItemReject = (item: any) => {
    ElMessageBox.prompt(t('user.audit.Please enter rejection reason'), t('user.audit.Reject'), {
        confirmButtonText: t('user.audit.Confirm'),
        cancelButtonText: t('Cancel'),
        inputErrorMessage: t('user.audit.Please enter content'),
        inputPlaceholder: t('user.audit.Please enter rejection reason'),
        inputValue: '',
        inputType: 'textarea',
    })
        .then(({ value }) => {
            auditItem(item.id, 'reject', item.items_version, value).then(() => {
                onAuditSuccess(t('user.audit.Reject success'))
            })
        })
        .catch(() => {
            ElMessage({ type: 'info', message: t('Cancel') })
        })
}

/**
 * 一键通过全单
 */
const onApproveAll = () => {
    batchApproveAll(master.value.audit_no, master.value.version).then(() => {
        onAuditSuccess(t('user.audit.Approve success'))
    })
}

/**
 * 一键驳回全单（弹窗录入原因）
 */
const onRejectAll = () => {
    ElMessageBox.prompt(t('user.audit.Please enter rejection reason'), t('user.audit.Reject all'), {
        confirmButtonText: t('user.audit.Confirm'),
        cancelButtonText: t('Cancel'),
        inputErrorMessage: t('user.audit.Please enter content'),
        inputPlaceholder: t('user.audit.Please enter rejection reason'),
        inputValue: '',
        inputType: 'textarea',
    })
        .then(({ value }) => {
            batchRejectAll(master.value.audit_no, master.value.version, value).then(() => {
                onAuditSuccess(t('user.audit.Reject success'))
            })
        })
        .catch(() => {
            ElMessage({ type: 'info', message: t('Cancel') })
        })
}
</script>

<style scoped lang="scss">
:deep(.color-red) {
    color: var(--el-color-danger) !important;
}
.mb-20 {
    margin-bottom: 20px;
}
.audit-all-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
}
.audit-refresh-btn {
    margin-right: auto;
}
.ml-4 {
    margin-left: 4px;
}
</style>
