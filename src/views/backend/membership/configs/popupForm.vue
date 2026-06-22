<template>
    <!-- 对话框表单 -->
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :destroy-on-close="true"
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
                    @keyup.enter="baTable.onSubmit(formRef)"
                    :model="baTable.form.items"
                    :label-position="config.layout.shrink ? 'top' : 'right'"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                    v-if="!baTable.form.loading"
                >
                    <el-form-item prop="name" :label="t('membership.configs.name')">
                        <el-input
                            v-model="baTable.form.items!.name"
                            type="string"
                            :placeholder="t('Please input field', { field: t('membership.configs.name') })"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="member_type" :label="t('membership.configs.member_type')">
                        <el-select
                            v-model="baTable.form.items!.member_type"
                            class="w100"
                            :placeholder="t('Please select field', { field: t('membership.configs.member_type') })"
                        >
                            <el-option :label="t('membership.configs.member_type_gold')" :value="1" />
                            <el-option :label="t('membership.configs.member_type_diamond')" :value="2" />
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="duration_type" :label="t('membership.configs.duration_type')">
                        <el-select
                            v-model="baTable.form.items!.duration_type"
                            class="w100"
                            :placeholder="t('Please select field', { field: t('membership.configs.duration_type') })"
                        >
                            <el-option :label="t('membership.configs.duration_type_month')" :value="1" />
                            <el-option :label="t('membership.configs.duration_type_quarter')" :value="2" />
                            <el-option :label="t('membership.configs.duration_type_half_year')" :value="3" />
                            <el-option :label="t('membership.configs.duration_type_year')" :value="4" />
                            <el-option :label="t('membership.configs.duration_type_custom')" :value="5" />
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="duration_days" :label="t('membership.configs.duration_days')">
                        <el-input-number
                            v-model="baTable.form.items!.duration_days"
                            :min="1"
                            :placeholder="t('Please input field', { field: t('membership.configs.duration_days') })"
                            class="w100"
                        />
                    </el-form-item>
                    <el-form-item prop="origin_price" :label="t('membership.configs.origin_price')">
                        <el-input-number
                            v-model="baTable.form.items!.origin_price"
                            :min="0"
                            :precision="2"
                            :placeholder="t('Please input field', { field: t('membership.configs.origin_price') })"
                            class="w100"
                        />
                    </el-form-item>
                    <el-form-item prop="sale_price" :label="t('membership.configs.sale_price')">
                        <el-input-number
                            v-model="baTable.form.items!.sale_price"
                            :min="0"
                            :precision="2"
                            :placeholder="t('Please input field', { field: t('membership.configs.sale_price') })"
                            class="w100"
                        />
                    </el-form-item>
                    <FormItem
                        :label="t('State')"
                        v-model="baTable.form.items!.status"
                        type="radio"
                        :input-attr="{
                            border: true,
                            content: { 0: t('membership.configs.status_off'), 1: t('membership.configs.status_on') },
                        }"
                    />
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm('')">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="baTable.onSubmit(formRef)" type="primary">
                    {{ baTable.form.operateIds && baTable.form.operateIds.length > 1 ? t('Save and edit next item') : t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import type { FormInstance, FormItemRule } from 'element-plus'
import FormItem from '/@/components/formItem/index.vue'
import { buildValidatorData } from '/@/utils/validate'
import { useConfig } from '/@/stores/config'

const config = useConfig()
const formRef = ref<FormInstance>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    name: [buildValidatorData({ name: 'required', title: t('membership.configs.name') })],
    member_type: [buildValidatorData({ name: 'required', message: t('Please select field', { field: t('membership.configs.member_type') }) })],
    duration_type: [buildValidatorData({ name: 'required', message: t('Please select field', { field: t('membership.configs.duration_type') }) })],
    duration_days: [buildValidatorData({ name: 'required', title: t('membership.configs.duration_days') })],
    origin_price: [buildValidatorData({ name: 'required', title: t('membership.configs.origin_price') })],
    sale_price: [buildValidatorData({ name: 'required', title: t('membership.configs.sale_price') })],
})
</script>

<style scoped lang="scss"></style>
