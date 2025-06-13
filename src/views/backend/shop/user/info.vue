<template>
    <el-dialog
        class="ba-operate-dialog"
        :close-on-click-modal="false"
        :destroy-on-close="true"
        :model-value="baTable.form.operate ? true : false"
        @close="baTable.toggleForm"
    >
        <template #header>
            <div class="title" v-drag="['.ba-operate-dialog', '.el-dialog__header']" v-zoom="'.ba-operate-dialog'">{{ t('Info') }}</div>
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
                    :model="baTable.form.extend!.info"
                    :label-position="config.layout.shrink ? 'top' : 'right'"
                    :label-width="baTable.form.labelWidth + 'px'"
                    v-if="!baTable.form.loading"
                >
                    <el-descriptions v-if="!isEmpty(baTable.form.extend!.info)" :column="2" border>
                        <el-descriptions-item :label="t('shop.user.head portrait')" :rowspan="2">
                            <el-image style="width: 50px; height: 50px" :src="fullUrl(baTable.form.extend!.info.avatar)" />
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('Id')">
                            {{ baTable.form.extend!.info.id }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('shop.user.nickname')">
                            {{ baTable.form.extend!.info.nickname }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('shop.user.Join Time')">
                            {{ timeFormat(baTable.form.extend!.info.join_time) }}
                        </el-descriptions-item>
                        <div v-if="!isEmpty(baTable.form.extend!.info!.profile)">
                            <el-descriptions-item :label="t('shop.user.Gender')">
                                {{ baTable.form.extend!.info.gender }}
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('shop.user.City')">
                                {{ baTable.form.extend!.info.province_name + baTable.form.extend!.info.city_name }}
                            </el-descriptions-item>

                            <el-descriptions-item :label="t('shop.user.Create Time')">
                                {{ timeFormat(baTable.form.extend!.info.create_time) }}
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('shop.user.Account') + t('State')">
                                <el-tag
                                    v-if="baTable.form.extend!.info.status !== ''"
                                    :type="baTable.form.extend!.info.status === 'enable' ? 'success' : 'danger'"
                                    effect="light"
                                    size="default"
                                >
                                    {{ stateReplaceValue[baTable.form.extend!.info.status] }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('shop.user.Take Orders')">
                                <el-tag
                                    :type="baTable.form.extend!.info.profile?.is_take_orders === '1' ? 'success' : 'danger'"
                                    effect="light"
                                    size="default"
                                >
                                    {{
                                        typeof baTable.form.extend!.info.profile?.is_take_orders !== 'undefined'
                                            ? yesNoValue[baTable.form.extend!.info.profile.is_take_orders] ??
                                              baTable.form.extend!.info.profile.is_take_orders
                                            : baTable.form.extend!.info.profile.is_take_orders
                                    }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('shop.user.Operational Star')">
                                <el-tag
                                    v-if="baTable.form.extend!.info.profile?.operational_star !== ''"
                                    :type="baTable.form.extend!.info.profile?.operational_star === '1' ? 'success' : 'danger'"
                                    effect="light"
                                    size="default"
                                >
                                    {{
                                        typeof baTable.form.extend!.info.profile.operational_star !== 'undefined'
                                            ? yesNoValue[baTable.form.extend!.info.profile?.operational_star] ??
                                              baTable.form.extend!.info.profile?.operational_star
                                            : baTable.form.extend!.info.profile?.operational_star
                                    }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item :width="120" :span="2" :label="t('shop.user.Introduction')">
                                {{ baTable.form.extend!.info.introduction }}
                            </el-descriptions-item>
                            <el-descriptions-item :width="120" :span="2" :label="t('shop.user.Readme')">
                                {{ baTable.form.extend!.info.profile?.readme }}
                            </el-descriptions-item>
                            <el-descriptions-item
                                :width="120"
                                :span="2"
                                :label="t('shop.user.Video')"
                                v-if="!isEmpty(baTable.form.extend!.info.profile?.media_video)"
                            >
                                <elVideo
                                    :src="fullUrl(baTable.form.extend!.info.profile?.media_video)"
                                    ref="myvideo"
                                    fit="fill"
                                    width="70"
                                    height="70"
                                    :enablePreview="true"
                                    :customPreview="false"
                                >
                                </elVideo>
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('shop.user.Photo')" span="2" v-if="!isEmpty(baTable.form.items!.profile?.media_img)">
                                <el-image
                                    style="width: 100px; height: 100px"
                                    v-for="url in baTable.form.items!.profile?.media_img"
                                    :key="fullUrl(url)"
                                    :src="fullUrl(url)"
                                    :preview-src-list="baTable.form.items!.profile?.media_img.map((url) => fullUrl(url))"
                                    fit="cover"
                                    lazy
                                    show-progress
                                />
                            </el-descriptions-item>
                            <el-descriptions-item :label="t('shop.user.Topic')" span="2">
                                <el-row class="ba-array-item" v-for="(item, idx) in baTable.form.extend!.info.topic" :gutter="10" :key="idx">
                                    <el-col :span="24">
                                        {{ item.title }}
                                    </el-col>
                                </el-row>
                            </el-descriptions-item>
                        </div>
                    </el-descriptions>

                    <el-descriptions
                        title=""
                        v-if="!isEmpty(baTable.form.extend!.info?.review)"
                        :column="1"
                        direction="vertical"
                        style="margin-top: 20px"
                        border
                    >
                        <el-descriptions-item :label="t('shop.user.Review Record')">
                            <el-row class="ba-array-item" v-for="(data, rid) in baTable.form.extend.info.review" :gutter="10" :key="rid">
                                <el-col :span="24" v-if="data.type === 0"> <b>申请时间:</b> {{ timeFormat(data.create_time) }} </el-col>
                                <el-col :span="24" v-else="data.type === 1">
                                    <b>审核时间:</b> {{ timeFormat(data.update_time) }} <b>审核结果:</b> {{ reviewReplaceValue[data.status] }}
                                    <b>审核员:</b> {{ data.admin_name }}
                                    <span v-if="data.status == 'disable'"><b>修改指引:</b> {{ data.remark }}</span></el-col
                                >
                            </el-row>
                        </el-descriptions-item>
                    </el-descriptions>

                    <el-descriptions title="信息变更记录" v-if="!isEmpty(baTable.form.extend!.info?.log)" :column="1" style="margin-top: 20px" border>
                        <el-descriptions-item :label="t('shop.user.Price')">
                            {{ baTable.form.extend!.info.chat?.chat_price }}
                        </el-descriptions-item>
                    </el-descriptions>
                    <el-descriptions :column="1" style="margin-top: 20px" border v-if="!isEmpty(baTable.form.extend!.info.profile)">
                        <el-descriptions-item :label="t('shop.user.Review Result')">
                            <FormItem
                                label=""
                                type="radio"
                                v-model="baTable.form.extend.info.profile.status"
                                :input-attr="{
                                    border: false,
                                    content: { enable: t('shop.user.pass'), disable: t('shop.user.failed') },
                                    onChange: onChangeRemark,
                                }"
                            />
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('shop.user.Remark')" v-if="baTable.form.extend!.info.profile.status === 'disable'">
                            <el-input
                                v-model="baTable.form.extend.info.profile.remark"
                                :rows="3"
                                maxlength="100"
                                show-word-limit
                                type="textarea"
                                :placeholder="t('shop.user.Review Guide')"
                            />
                        </el-descriptions-item>
                        <el-descriptions-item :label="t('shop.user.Operational Star')">
                            <el-checkbox
                                v-model="baTable.form.extend.info.profile.operational_star"
                                :checked="isChecked"
                                label=""
                                true-value="1"
                                false-value="0"
                            />
                        </el-descriptions-item>
                    </el-descriptions>
                    <div class="mb-4" style="margin-top: 10px; text-align: center" v-if="!isEmpty(baTable.form.extend!.info?.profile)">
                        <el-button v-blur :loading="baTable.form.submitLoading" @click="baTable.onSubmit(formRefInfo)" type="success"
                            >审核通过</el-button
                        >
                    </div>
                </el-form>
            </div>
        </el-scrollbar>

        <template #footer> </template>
    </el-dialog>
    <VideoDialog />
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
import elVideo from './video.vue'
import { useConfig } from '/@/stores/config'
import { autoResetRef } from '@vueuse/core'
import VideoDialog from './video.vue'
import { changeState } from '/@/api/backend/module'
import { el } from 'element-plus/es/locales.mjs'

const config = useConfig()

const baTable = inject('baTable') as baTableClass
const formRefInfo = ref<FormInstance>()
const { t } = useI18n()
const stateReplaceValue = { disable: t('Disable'), enable: t('Enable') }
const reviewReplaceValue = { disable: t('shop.user.failed'), enable: t('shop.user.pass') }
const yesNoValue = { '0': t('no'), '1': t('yes') }
const isChecked = computed(() => (baTable.form.extend.info!.profile.operational_star == 1 ? true : false))
const remark = ref('')
const onChangeRemark = () => {
    if (baTable.form.extend.info.profile?.status === 'enable') {
        remark.value = baTable.form.extend.info.profile.remark
        baTable.form.extend.info.profile.remark = ''
    } else {
        baTable.form.extend.info.profile.remark = remark.value
    }
}
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
