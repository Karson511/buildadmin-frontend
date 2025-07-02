<template>
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :destroy-on-close="true"
        :model-value="baTable.form.operate ? true : false"
        @close="baTable.toggleForm"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ t('shop.userProfileLog.Audit log') }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="config.layout.shrink ? '' : 'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <el-form
                    ref="formRefInfo"
                    @keyup.enter="baTable.onSubmit(formRefInfo)"
                    :model="baTable.form.items"
                    :label-position="config.layout.shrink ? 'top' : 'right'"
                    :label-width="baTable.form.labelWidth + 'px'"
                    v-if="!baTable.form.loading"
                >
                    <el-descriptions v-if="!isEmpty(baTable.form.items)" :column="2" border>
                        <el-descriptions-item :label="t('shop.userProfileLog.reviewer')">
                            {{ baTable.form.items!.review.reviewer }}
                        </el-descriptions-item>
                        <el-descriptions-item v-if="baTable.form.items!.review.reviewer" :label="t('shop.userProfileLog.Review time')">
                            {{ timeFormat(baTable.form.items!.review.create_time) }}
                        </el-descriptions-item>
                        <el-descriptions-item v-if="baTable.form.items!.status == 'disable'" :label="t('shop.userProfileLog.Rejection reason')">
                            {{ baTable.form.items!.review.remark }}
                        </el-descriptions-item>
                    </el-descriptions>
                </el-form>
            </div>
        </el-scrollbar>

        <template #footer> </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { inject, ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import { timeFormat, fullUrl } from '/@/utils/common'
import { isEmpty } from 'lodash-es'
import { ElMessageBox } from 'element-plus'
import type { FormInstance, FormItemRule } from 'element-plus'
import FormItem from '/@/components/formItem/index.vue'
import { useConfig } from '/@/stores/config'
import { autoResetRef } from '@vueuse/core'
import { changeState } from '/@/api/backend/module'
import { el } from 'element-plus/es/locales.mjs'

const config = useConfig()

const baTable = inject('baTable') as baTableClass
const formRefInfo = ref<FormInstance>()
const { t } = useI18n()
// const stateReplaceValue = { disable: t('Disable'), enable: t('Enable') }
// const reviewReplaceValue = { disable: t('shop.user.failed'), enable: t('shop.user.pass') }
// const yesNoValue = { '0': t('no'), '1': t('yes') }
// const isChecked = computed(() => (baTable.form.extend.info!.profile.operational_star == 1 ? true : false))
</script>

<style scoped lang="scss">
:deep(.color-red) {
    color: var(--el-color-danger) !important;
}
.table-el-tree {
    :deep(.el-tree-node) {
        white-space: unset;
    }
    :deep(.el-tree-node__content) {
        display: block;
        align-items: unset;
        height: unset;
    }
}
</style>
