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
                <!-- ref 模版引用, ref 是一个特殊的 attribute，和 v-for 章节中提到的 key 类似。它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用 -->
                <el-form
                    ref="formRef"
                    :model="baTable.form.items"
                    :label-position="config.layout.shrink ? 'top' : 'right'"
                    :label-width="baTable.form.labelWidth + 'px'"
                    :rules="rules"
                    v-if="!baTable.form.loading"
                >
                    <el-form-item prop="username" :label="t('shop.user.User name')">
                        <el-input
                            v-model="baTable.form.items!.username"
                            type="string"
                            :placeholder="t('Please input field', { field: t('shop.user.User name') + '(' + t('shop.user.Login account') + ')' })"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="nickname" :label="t('shop.user.nickname')">
                        <el-input
                            v-model="baTable.form.items!.nickname"
                            type="string"
                            :placeholder="t('Please input field', { field: t('shop.user.nickname') })"
                        ></el-input>
                    </el-form-item>
                    <FormItem
                        type="remoteSelect"
                        :label="t('shop.user.grouping')"
                        v-model="baTable.form.items!.group_id"
                        prop="group_id"
                        :placeholder="t('shop.user.grouping')"
                        :input-attr="{
                            params: { isTree: true, search: [{ field: 'status', val: '1', operator: 'eq' }] },
                            field: 'name',
                            remoteUrl: '/admin/user.Group/index',
                        }"
                    />
                    <FormItem :label="t('shop.user.head portrait')" type="image" v-model="baTable.form.items!.avatar" />
                    <el-form-item prop="mobile" :label="t('shop.user.mobile')">
                        <el-input
                            v-model="baTable.form.items!.mobile"
                            type="string"
                            :placeholder="t('Please input field', { field: t('shop.user.mobile') })"
                        ></el-input>
                    </el-form-item>
                    <FormItem
                        :label="t('shop.user.Gender')"
                        v-model="baTable.form.items!.gender"
                        type="radio"
                        :input-attr="{
                            border: true,
                            content: { 0: t('Unknown'), 1: t('shop.user.male'), 2: t('shop.user.female') },
                        }"
                    />
                    <FormItem
                        :label="t('State')"
                        v-model="baTable.form.items!.status"
                        type="radio"
                        :input-attr="{
                            border: true,
                            content: {
                                enable: t('Enable'),
                                disable: t('Disable'),
                            },
                        }"
                    />
                    <!-- 兜底显示：如果组件无法匹配，或者作为编辑时的参考 -->
                    <el-form-item
                        v-if="baTable.form.operate === 'Edit' && (baTable.form.items?.province_name || baTable.form.items?.city_name)"
                        label=" "
                    >
                        <span style="color: #999; font-size: 12px">
                            {{ t('shop.user.Current selected Region') }}:
                            {{ baTable.form.items?.province_name || '' }}
                            {{ baTable.form.items?.city_name || '' }}
                            {{ baTable.form.items?.district_name || '' }}
                        </span>
                    </el-form-item>
                    <FormItem
                        :label="t('shop.user.Region')"
                        type="city"
                        v-model="regionValue"
                        :input-attr="{
                            level: 3,
                            requestApi: 'region',
                        }"
                    />
                    <el-form-item prop="password" :label="t('shop.user.password')">
                        <el-input
                            v-model="baTable.form.items!.password"
                            type="password"
                            :placeholder="
                                baTable.form.operate == 'Add'
                                    ? t('Please input field', { field: t('shop.user.password') })
                                    : t('shop.user.Please leave blank if not modified')
                            "
                        ></el-input>
                    </el-form-item>
                    <FormItem
                        :label="t('shop.user.Services Methods')"
                        v-model="baTable.form.items!.profile!.services_methods"
                        type="radio"
                        :input-attr="{
                            border: true,
                            content: {
                                1: t('shop.user.Online Booking'),
                                2: t('shop.user.Add as Friend — No Invitation Required'),
                            },
                        }"
                    />
                    <el-form-item :label="t('shop.user.Wechat Account')">
                        <el-input
                            v-model="baTable.form.items!.profile!.wechat_account"
                            type="string"
                            :placeholder="t('Please input field', { field: t('shop.user.Wechat Account') })"
                        ></el-input>
                    </el-form-item>
                    <FormItem
                        :label="t('shop.user.Wechat Contact QRCode')"
                        type="image"
                        v-model="baTable.form.items!.profile!.wechat_contact_qr_code"
                    />
                    <el-form-item :label="t('shop.user.Introduction')">
                        <el-input
                            @keyup.enter.stop=""
                            @keyup.ctrl.enter="baTable.onSubmit(formRef)"
                            v-model="baTable.form.items!.introduction"
                            type="textarea"
                            :placeholder="t('Please input field', { field: t('shop.user.Introduction') })"
                        ></el-input>
                    </el-form-item>
                    <FormItem
                        :label="t('shop.user.Take Orders')"
                        v-model="baTable.form.items!.profile!.is_take_orders"
                        type="radio"
                        :input-attr="{
                            border: true,
                            content: { 0: t('no'), 1: t('yes') },
                        }"
                    />
                    <FormItem
                        :label="t('shop.user.Operational Star')"
                        v-model="baTable.form.items!.profile!.operational_star"
                        type="radio"
                        :input-attr="{
                            border: true,
                            content: { 0: t('no'), 1: t('yes') },
                        }"
                    />
                    <FormItem
                        v-if="baTable.form.operate === 'Edit'"
                        :label="t('shop.user.Review Result')"
                        v-model="baTable.form.items!.profile!.status"
                        type="radio"
                        :input-attr="{
                            border: true,
                            content: {
                                pending: t('shop.user.Pending'),
                                enable: t('Enable'),
                                disable: t('Disable'),
                            },
                        }"
                    />
                    <FormItem
                        :label="t('shop.user.Readme')"
                        type="editor"
                        v-model="baTable.form.items!.profile!.readme"
                        :input-attr="{
                            editorType: 'wang',
                        }"
                    />
                    <el-form-item :label="t('shop.user.Video')" v-if="baTable.form.items?.profile?.media_video">
                        <elVideo
                            :src="fullUrl(baTable.form.items!.profile.media_video)"
                            ref="myvideo"
                            fit="fill"
                            width="70"
                            height="70"
                            :enablePreview="true"
                            :customPreview="false"
                        >
                        </elVideo>
                    </el-form-item>
                    <FormItem
                        :label="t('shop.user.Video')"
                        v-model="baTable.form.items!.profile!.media_video"
                        type="file"
                        :input-attr="{ accept: 'video/*', limit: 1 }"
                    />
                    <FormItem
                        :label="t('shop.user.Photo')"
                        v-model="baTable.form.items!.profile!.media_img"
                        type="images"
                        :input-attr="{
                            limit: 9,
                            accept: 'image/*',
                            listType: 'picture-card',
                        }"
                    />
                </el-form>
            </div>
        </el-scrollbar>
        <template #footer>
            <div :style="'width: calc(100% - ' + baTable.form.labelWidth! / 1.8 + 'px)'">
                <el-button @click="baTable.toggleForm('')">{{ t('Cancel') }}</el-button>
                <el-button v-blur :loading="baTable.form.submitLoading" @click="submitForm(formRef)" type="primary">
                    {{ baTable.form.operateIds && baTable.form.operateIds.length > 1 ? t('Save and edit next item') : t('Save') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, inject, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type baTableClass from '/@/utils/baTable'
import { fullUrl } from '/@/utils/common'
import type { FormInstance, FormItemRule } from 'element-plus'
import FormItem from '/@/components/formItem/index.vue'
import elVideo from './video.vue'
import router from '/@/router/index'
import { regularPassword, buildValidatorData } from '/@/utils/validate'
import { useConfig } from '/@/stores/config'

const config = useConfig()
const formRef = ref<FormInstance>()
const baTable = inject('baTable') as baTableClass

const { t } = useI18n()

// 计算属性：将分散的地区代码转换为 region 数组格式
const regionValue = computed({
    get: () => {
        const items = baTable.form.items
        if (!items) return null

        const codes: number[] = []
        const provinceCode = Number(items.province_code)
        const cityCode = Number(items.city_code)
        const districtCode = Number(items.district_code)
        if (!Number.isNaN(provinceCode) && provinceCode > 0) codes.push(provinceCode)
        if (!Number.isNaN(cityCode) && cityCode > 0) codes.push(cityCode)
        if (!Number.isNaN(districtCode) && districtCode > 0) codes.push(districtCode)

        return codes.length > 0 ? codes : null
    },
    set: (val: any[] | null) => {
        if (!val || val.length === 0) {
            baTable.form.items!.province_code = null
            baTable.form.items!.city_code = null
            baTable.form.items!.district_code = null
        } else {
            baTable.form.items!.province_code = val[0] ? Number(val[0]) : null
            baTable.form.items!.city_code = val.length > 1 && val[1] ? Number(val[1]) : null
            baTable.form.items!.district_code = val.length > 2 && val[2] ? Number(val[2]) : null
        }
    },
})

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    username: [
        buildValidatorData({ name: 'required', title: t('shop.user.User name') }),
        {
            validator: (rule: any, val: string, callback: Function) => {
                if (!val) return callback()
                // 简单的手机号正则 (中国大陆)
                const isMobile = /^1[3-9]\d{9}$/.test(val)
                // 简单的账号正则 (字母开头，允许字母数字下划线，4-16位) - 您可以根据实际需求调整
                const isAccount = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/.test(val)

                if (isMobile || isAccount) {
                    return callback()
                }
                return callback(new Error(t('Please enter a valid account or mobile number')))
            },
            trigger: 'blur',
        },
    ],
    nickname: [buildValidatorData({ name: 'required', title: t('shop.user.nickname') })],
    group_id: [buildValidatorData({ name: 'required', message: t('Please select field', { field: t('shop.user.grouping') }) })],
    email: [buildValidatorData({ name: 'email', title: t('shop.user.email') })],
    mobile: [buildValidatorData({ name: 'mobile' })],
    password: [
        {
            validator: (rule: any, val: string, callback: Function) => {
                if (baTable.form.operate == 'Add') {
                    if (!val) {
                        return callback(new Error(t('Please input field', { field: t('shop.user.password') })))
                    }
                } else {
                    if (!val) {
                        return callback()
                    }
                }
                if (!regularPassword(val)) {
                    return callback(new Error(t('validate.Please enter the correct password')))
                }
                return callback()
            },
            trigger: 'blur',
        },
    ],
})

// const changeAccount = (type: string) => {
//     baTable.toggleForm()
//     router.push({
//         name: type == 'money' ? 'user/moneyLog' : 'user/scoreLog',
//         query: {
//             user_id: baTable.form.items!.id,
//         },
//     })
// }

const normalizeMediaImg = (mediaImg: unknown): string[] => {
    if (Array.isArray(mediaImg)) {
        return mediaImg.filter((item): item is string => typeof item === 'string' && item.trim() !== '').map((item) => item.trim())
    }
    if (typeof mediaImg === 'string') {
        return mediaImg
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item !== '')
    }
    return []
}

// 自定义提交方法，处理 profile 字段
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return

    // 手动触发验证
    await formEl.validate((valid) => {
        if (valid) {
            baTable.form.submitLoading = true

            // 深拷贝一份数据用于提交，避免污染表单的响应式数据
            let submitData = JSON.parse(JSON.stringify(baTable.form.items))
            const profileData = submitData.profile || {}
            submitData.profile = {
                ...profileData,
                media_img: normalizeMediaImg(profileData.media_img),
                services_methods:
                    profileData.services_methods === '' || profileData.services_methods === undefined || profileData.services_methods === null
                        ? null
                        : Number(profileData.services_methods),
            }

            // 如果是编辑操作，确保提交数据中包含 id
            if (baTable.form.operate === 'Edit') {
                if (!submitData.id && baTable.form.operateIds && baTable.form.operateIds.length > 0) {
                    submitData.id = baTable.form.operateIds[0]
                }
            }

            // 调用 API 提交数据 (submitData 中的 profile 已经是一个 JSON 对象)
            baTable.api
                .postData(baTable.form.operate!, submitData)
                .then((res) => {
                    baTable.onTableHeaderAction('refresh', {})
                    baTable.form.submitLoading = false
                    baTable.form.operateIds?.shift()
                    if (baTable.form.operateIds && baTable.form.operateIds.length > 0) {
                        baTable.toggleForm('Edit', baTable.form.operateIds)
                    } else {
                        baTable.toggleForm()
                    }
                })
                .catch(() => {
                    baTable.form.submitLoading = false
                })
        } else {
            // 如果验证失败，可以在这里打印日志，方便排查是哪个字段没通过
            console.warn('表单验证未通过，请检查必填项或格式')
        }
    })
}

// 用于观察响应式数据的变化。当被观察的数据发生变化时，会执行指定的回调函数。
watch(
    () => baTable.form.operate,
    (newVal) => {
        rules.password![0].required = newVal == 'Add'
        if (newVal === 'Add' && baTable.form.items) {
            baTable.form.items.status = 'enable'
            if (!baTable.form.items.profile) baTable.form.items.profile = {}
            if (!baTable.form.items.profile.services_methods) baTable.form.items.profile.services_methods = 1
        }
    }
)
</script>

<style scoped lang="scss">
.avatar-uploader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: var(--el-border-radius-small);
    box-shadow: var(--el-box-shadow-light);
    border: 1px dashed var(--el-border-color);
    cursor: pointer;
    overflow: hidden;
    width: 110px;
    height: 110px;
}
.avatar-uploader:hover {
    border-color: var(--el-color-primary);
}
.avatar {
    width: 110px;
    height: 110px;
    display: block;
}
.image-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
