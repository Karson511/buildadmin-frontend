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
                    @keyup.enter="submitForm()"
                    :model="baTable.form.items"
                    :label-position="config.layout.shrink ? 'top' : 'right'"
                    :label-width="baTable.form.labelWidth + 'px'"
                    v-if="!baTable.form.loading"
                >
                    <el-form-item :label="t('shop.jobType.User ID')">
                        <el-input :model-value="baTable.form.items?.user?.id ?? ''" disabled />
                    </el-form-item>
                    <el-form-item :label="t('shop.jobType.User name')">
                        <el-input :model-value="baTable.form.items?.user?.username ?? ''" disabled />
                    </el-form-item>
                    <el-form-item :label="t('shop.jobType.nickname')">
                        <el-input :model-value="baTable.form.items?.user?.nickname ?? ''" disabled />
                    </el-form-item>

                    <el-form-item :label="t('shop.jobType.serviceType')">
                        <div class="tag-wrap">
                            <el-tag
                                v-for="item in baTable.form.items?.service_type || []"
                                :key="item.id"
                                class="click-tag"
                                :type="selectedServiceTypeId === Number(item.id) ? 'success' : 'info'"
                                :effect="selectedServiceTypeId === Number(item.id) ? 'dark' : 'plain'"
                                @click="selectServiceType(item.id)"
                            >
                                {{ item.name }}
                            </el-tag>
                        </div>
                    </el-form-item>

                    <el-form-item :label="t('shop.jobType.JobType')">
                        <div class="job-type-wrap">
                            <div class="job-category" v-for="category in baTable.form.items?.channel_categories || []" :key="category.id">
                                <div class="job-category-title">{{ category.name }}</div>
                                <div class="tag-wrap">
                                    <el-tag
                                        v-for="child in category.children || []"
                                        :key="child.id"
                                        class="click-tag"
                                        :type="selectedJobTypeIds.has(Number(child.id)) ? 'success' : 'info'"
                                        :effect="selectedJobTypeIds.has(Number(child.id)) ? 'dark' : 'plain'"
                                        @click="toggleJobType(child.id)"
                                    >
                                        {{ child.name }}
                                    </el-tag>
                                </div>
                            </div>
                        </div>
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
import { ref, inject, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import { ElMessage } from 'element-plus'
import { useConfig } from '/@/stores/config'

const config = useConfig()
const { t } = useI18n()
const baTable = inject('baTable') as baTableClass
const selectedServiceTypeId = ref<number | null>(null)
const selectedJobTypeIds = ref<Set<number>>(new Set())

const initSelectedData = () => {
    const user = baTable.form.items?.user
    if (!user) {
        selectedServiceTypeId.value = null
        selectedJobTypeIds.value = new Set()
        return
    }
    const selectedService = Array.isArray(user.service_type) && user.service_type.length > 0 ? user.service_type[0] : null
    selectedServiceTypeId.value = selectedService ? Number(selectedService.id) : null
    const userJobTypes = Array.isArray(user.job_type) ? user.job_type : []
    selectedJobTypeIds.value = new Set(userJobTypes.map((item: anyObj) => Number(item.id)))
}

const selectServiceType = (id: number | string) => {
    selectedServiceTypeId.value = Number(id)
}

const toggleJobType = (id: number | string) => {
    const value = Number(id)
    if (selectedJobTypeIds.value.has(value)) {
        selectedJobTypeIds.value.delete(value)
    } else {
        selectedJobTypeIds.value.add(value)
    }
}

const submitForm = () => {
    const user = baTable.form.items?.user
    if (!user) return
    if (!selectedServiceTypeId.value) {
        ElMessage.warning(t('Please select field', { field: t('shop.jobType.serviceType') }))
        return
    }
    const submitData = {
        id: user.id,
        service_type_id: selectedServiceTypeId.value,
        job_type_ids: Array.from(selectedJobTypeIds.value),
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
}

watch(
    () => baTable.form.items,
    (items: anyObj) => {
        if (items) initSelectedData()
    }
)
</script>

<style scoped lang="scss">
.tag-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.click-tag {
    cursor: pointer;
}
.job-type-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.job-category-title {
    margin-bottom: 8px;
    color: var(--el-text-color-primary);
    font-weight: 600;
}
</style>
