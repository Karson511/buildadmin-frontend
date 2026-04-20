<template>
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :model-value="['Add', 'Edit'].includes(baTable.form.operate!)"
        @close="baTable.toggleForm"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ baTable.form.operate ? t(baTable.form.operate) : '' }}
            </div>
        </template>
        <el-scrollbar v-loading="baTable.form.loading" class="ba-table-form-scrollbar">
            <div
                class="ba-operate-form"
                :class="'ba-' + baTable.form.operate + '-form'"
                :style="config.layout.shrink ? '' : 'width: calc(100% - ' + baTable.form.labelWidth! / 2 + 'px)'"
            >
                <el-form
                    ref="formRef"
                    @keyup.enter="submitForm()"
                    :model="baTable.form.items"
                    :label-position="config.layout.shrink ? 'top' : 'right'"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                    v-if="!baTable.form.loading"
                >
                    <el-form-item :label="t('shop.topic.User ID')">
                        <el-input :model-value="baTable.form.items?.shop_user_id ?? baTable.form.items?.user_id ?? ''" disabled />
                    </el-form-item>
                    <el-form-item :label="t('shop.topic.User name')">
                        <el-input :model-value="baTable.form.items?.username ?? ''" disabled />
                    </el-form-item>
                    <el-form-item :label="t('shop.topic.nickname')">
                        <el-input :model-value="baTable.form.items?.nickname ?? ''" disabled />
                    </el-form-item>
                    <el-form-item prop="title" :label="t('shop.topic.topic')">
                        <el-input
                            v-model="baTable.form.items!.title"
                            type="textarea"
                            :rows="3"
                            :placeholder="t('Please input field', { field: t('shop.topic.topic') })"
                        />
                    </el-form-item>
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm('')">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="submitForm()" type="primary">
                    {{ t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import type { FormInstance, FormItemRule } from 'element-plus'
import { buildValidatorData } from '/@/utils/validate'
import { useConfig } from '/@/stores/config'

const config = useConfig()
const { t } = useI18n()
const baTable = inject('baTable') as baTableClass
const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    title: [buildValidatorData({ name: 'required', title: t('shop.topic.topic') })],
})

const formRef = ref<FormInstance>()
const submitForm = () => {
    const formEl = formRef.value
    const items = baTable.form.items
    if (!formEl || !items) return
    formEl.validate((valid: boolean) => {
        if (!valid) return
        const submitData = {
            id: items.id,
            shop_user_id: items.shop_user_id ?? items.user_id,
            title: items.title,
        }
        baTable.form.submitLoading = true
        baTable.api
            .postData('edit', submitData)
            .then(() => {
                baTable.onTableHeaderAction('refresh', {})
                baTable.toggleForm()
            })
            .finally(() => {
                baTable.form.submitLoading = false
            })
    })
}
</script>

<style scoped lang="scss">
.preview-img {
    width: 60px;
    height: 60px;
}
</style>
