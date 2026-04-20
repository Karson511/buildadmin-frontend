<template>
    <el-dialog class="ba-operate-dialog" :close-on-click-modal="false" :model-value="baTable.form.operate === 'UserEdit'" @close="baTable.toggleForm">
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">
                {{ t('Edit') }}
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
                    v-if="!baTable.form.loading"
                >
                    <el-form-item :label="t('shop.topic.User ID')">
                        <el-input :model-value="baTable.form.items?.user?.id ?? ''" disabled />
                    </el-form-item>
                    <el-form-item :label="t('shop.topic.User name')">
                        <el-input :model-value="baTable.form.items?.user?.username ?? ''" disabled />
                    </el-form-item>
                    <el-form-item :label="t('shop.topic.nickname')">
                        <el-input :model-value="baTable.form.items?.user?.nickname ?? ''" disabled />
                    </el-form-item>
                    <el-form-item :label="t('Operate')">
                        <el-button type="primary" plain @click="addTopicInput()">{{ t('Add') }}</el-button>
                    </el-form-item>
                    <el-form-item
                        v-for="(topic, index) in baTable.form.items?.topics || []"
                        :key="topic.id || topic.__tempKey || index"
                        :label="`${t('shop.topic.topic')} #${Number(index) + 1}`"
                    >
                        <div class="topic-edit-row">
                            <el-input
                                v-model="topic.title"
                                type="textarea"
                                :rows="2"
                                :placeholder="t('Please input field', { field: t('shop.topic.topic') })"
                            />
                            <el-button type="danger" plain @click="removeTopic(index)">{{ t('Delete') }}</el-button>
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
import { ref, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import type { FormInstance } from 'element-plus'
import { useConfig } from '/@/stores/config'

const config = useConfig()
const { t } = useI18n()
const baTable = inject('baTable') as baTableClass
const formRef = ref<FormInstance>()

const getTopics = () => {
    if (!baTable.form.items) return []
    if (!Array.isArray(baTable.form.items.topics)) {
        baTable.form.items.topics = []
    }
    return baTable.form.items.topics
}

const addTopicInput = () => {
    const topics = getTopics()
    topics.unshift({
        id: 0,
        title: '',
        __tempKey: `new-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    })
}

const removeTopic = (index: number | string) => {
    if (!baTable.form.items) return
    const topics = getTopics()
    topics.splice(Number(index), 1)
}

const submitForm = () => {
    if (!baTable.form.items || !baTable.form.items.user) return
    const topic = (baTable.form.items.topics || []).map((item: anyObj) => ({
        id: item.id ? Number(item.id) : 0,
        title: item.title,
    }))
    const submitData = {
        id: baTable.form.items.user.id,
        topic,
    }
    baTable.form.submitLoading = true
    baTable.api
        .postData('userEdit', submitData)
        .then(() => {
            baTable.onTableHeaderAction('refresh', {})
            baTable.toggleForm()
        })
        .finally(() => {
            baTable.form.submitLoading = false
        })
}
</script>

<style scoped lang="scss">
.preview-img {
    width: 60px;
    height: 60px;
}
.topic-edit-row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 12px;
}
</style>
