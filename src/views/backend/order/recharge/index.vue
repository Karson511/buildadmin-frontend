<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader :buttons="['refresh', 'comSearch', 'columnDisplay']"> </TableHeader>

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef" />

        <!-- 表单 -->
        <!-- <PopupForm /> -->
    </div>
</template>

<script setup lang="ts">
import { isEmpty, parseInt } from 'lodash-es'
import { ref, provide, reactive, watch } from 'vue'
import baTableClass from '/@/utils/baTable'
import { url } from '/@/api/backend/order/recharge'
// import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import { baTableApi } from '/@/api/common'
import { useRoute } from 'vue-router'
// import { add } from '/@/api/backend/user/scoreLog'
import { useI18n } from 'vue-i18n'

defineOptions({
    name: 'order/recharge',
})

const { t } = useI18n()
const tableRef = ref()
const route = useRoute()
const defalutUser = (route.query.user_id ?? '') as string
const state: {
    userInfo: anyObj
} = reactive({
    userInfo: {},
})

const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: false, width: 70 },
            { label: t('order.recharge.User ID'), prop: 'user_id', align: 'center', operator: '=', operatorPlaceholder: t('Id'), width: 70 },
            {
                label: t('order.recharge.User nickname'),
                prop: 'user.nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('order.recharge.Transaction ID'),
                prop: 'transaction_id',
                align: 'center',
                operator: false,
                //operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('order.recharge.Blogger ID'),
                prop: 'shop_user_id',
                align: 'center',
                operator: '=',
                operatorPlaceholder: t('order.recharge.Blogger ID'),
            },
            {
                label: t('order.recharge.Blogger nickname'),
                prop: 'shopUser.nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            { label: t('order.recharge.Pay amount'), prop: 'price', align: 'center', operator: false },
            {
                label: t('order.recharge.Paid'),
                prop: 'paid',
                align: 'center',
                operator: '=',
                operatorPlaceholder: t('order.recharge.Paid'),
                render: 'tag',
                custom: { '0': 'danger', '1': 'success' },
                replaceValue: { '0': t('no'), '1': t('yes') },
            },
            {
                label: t('order.recharge.Pay time'),
                prop: 'pay_time',
                align: 'center',
                render: 'datetime',
                //sortable: 'custom',
                operator: false,
                width: 160,
            },
        ],
        dblClickNotEditColumn: ['all'],
    },
    {
        defaultItems: {
            user_id: defalutUser,
            memo: '',
        },
    },
    {},
    {
        onSubmit: () => {
            //getUserInfo(baTable.comSearch.form.user_id)
        },
    }
)

baTable.mount()
baTable.getIndex()?.then(() => {
    //baTable.initSort()
    //baTable.initComSearch()
    baTable.table.showComSearch = true
})

provide('baTable', baTable)

// const getUserInfo = (userId: string) => {
//     if (userId && parseInt(userId) > 0) {
//         add(userId).then((res) => {
//             state.userInfo = res.data.user
//         })
//     } else {
//         state.userInfo = {}
//     }
// }

// getUserInfo(baTable.comSearch.form.user_id)

// watch(
//     () => baTable.comSearch.form.user_id,
//     (newVal) => {
//         baTable.form.defaultItems!.user_id = newVal
//         getUserInfo(newVal)
//     }
// )
</script>

<style scoped lang="scss"></style>
