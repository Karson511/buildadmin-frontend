<template>
    <el-dialog v-model="dialogVisible" :title="t('posts.posts.Off')" width="500px" :close-on-click-modal="false" destroy-on-close>
        <!-- 快捷下架标签 -->
        <div class="off-templates">
            <span class="off-templates-label">{{ t('posts.posts.Quick reject templates') }}：</span>
            <el-tag v-for="tpl in offTemplates" :key="tpl" class="off-template-tag" effect="plain" @click="applyTemplate(tpl)">
                {{ tpl }}
            </el-tag>
        </div>
        <el-input
            v-model="offReason"
            type="textarea"
            :rows="4"
            :placeholder="t('posts.posts.Please enter off reason')"
            maxlength="500"
            show-word-limit
        />
        <template #footer>
            <el-button @click="dialogVisible = false">{{ t('posts.posts.Cancel') }}</el-button>
            <el-button type="warning" :disabled="!offReason.trim()" @click="confirmOff">
                {{ t('posts.posts.Confirm') }}
            </el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { inject, ref, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import type baTableClass from '/@/utils/baTable'
import { off } from '/@/api/backend/posts/posts'
import { useI18n } from 'vue-i18n'

const baTable = inject('baTable') as baTableClass
const { t } = useI18n()

const offReason = ref('')

/**
 * 控制弹窗显示
 */
const dialogVisible = computed({
    get: () => !!baTable.form.extend?.['offDialogVisible'],
    set: (val: boolean) => {
        if (!val) {
            baTable.form.extend!['offDialogVisible'] = false
        }
    },
})

/**
 * 当前下架的帖子 ID 数组
 */
const offPostIds = computed(() => baTable.form.extend?.['offPostIds'] as number[] | undefined)

/**
 * 快捷下架标签
 */
const offTemplates = computed(() => [
    t('posts.posts.Contains WeChat contact for traffic diversion'),
    t('posts.posts.Contains politically sensitive words'),
    t('posts.posts.Content is vulgar or spam'),
    t('posts.posts.Contains false advertising'),
    t('posts.posts.Involves personal privacy leakage'),
])

/**
 * 弹窗打开时重置
 */
watch(dialogVisible, (val) => {
    if (val) {
        offReason.value = ''
    }
})

/**
 * 点击快捷标签
 */
const applyTemplate = (tpl: string) => {
    offReason.value = offReason.value ? offReason.value + '；' + tpl : tpl
}

/**
 * 确认下架
 */
const confirmOff = () => {
    if (!offPostIds.value?.length || !offReason.value.trim()) return
    off(offPostIds.value, offReason.value.trim()).then(() => {
        ElMessage.success(t('posts.posts.Offlined'))
        dialogVisible.value = false
        baTable.onTableHeaderAction('refresh', {})
    })
}
</script>

<style scoped lang="scss">
.off-templates {
    margin-bottom: 12px;
}

.off-templates-label {
    display: block;
    margin-bottom: 8px;
    font-size: 13px;
    color: var(--el-text-color-secondary);
}

.off-template-tag {
    cursor: pointer;
    margin: 0 6px 6px 0;
    transition: all 0.2s;

    &:hover {
        color: var(--el-color-warning);
        border-color: var(--el-color-warning);
    }
}
</style>
