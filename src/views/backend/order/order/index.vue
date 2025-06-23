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
import { url } from '/@/api/backend/order/order'
// import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import { baTableApi } from '/@/api/common'
import { useRoute } from 'vue-router'
// import { add } from '/@/api/backend/user/scoreLog'
import { useI18n } from 'vue-i18n'

defineOptions({
    name: 'order/order',
})

const { t } = useI18n()
const tableRef = ref()
const route = useRoute()
// const defalutUser = (route.query.user_id ?? '') as string
// const state: {
//     userInfo: anyObj
// } = reactive({
//     userInfo: {},
// })

const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: false, width: 70 },
            { label: t('order.order.User ID'), prop: 'user_id', align: 'center', operator: '=', operatorPlaceholder: t('Id'), width: 70 },
            {
                label: t('order.order.User nickname'),
                prop: 'user.nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('order.order.Blogger ID'),
                prop: 'shop_user_id',
                align: 'center',
                operator: '=',
                operatorPlaceholder: t('order.order.Blogger ID'),
                width: 70,
            },
            {
                label: t('order.order.Blogger nickname'),
                prop: 'shopUser.nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('order.order.Order sn'),
                prop: 'order_sn',
                align: 'center',
                operator: false,
                //operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('order.order.Topic'),
                render: 'customTemplate',
                customTemplate: (row, field, cellValue, column, index) => {
                    return row.topic?.title ?? '-'
                },
                prop: 'topic.title',
                align: 'center',
                operator: false,
            },
            { label: t('order.order.Remark'), prop: 'remark', align: 'center', show: false, operator: false },
            {
                label: t('order.order.Status'),
                prop: 'status',
                align: 'center',
                operator: '=',
                operatorPlaceholder: t('order.order.Status'),
                render: 'tag',
                custom: { '-1': 'danger', '0': 'warning', '1': 'primary', '2': 'success' },
                replaceValue: {
                    '-1': t('order.order.Order cancelled'),
                    '0': t('order.order.Order pending'),
                    '1': t('order.order.Order calling'),
                    '2': t('order.order.Order completed'),
                },
            },
            {
                label: t('order.order.Create time'),
                prop: 'create_time',
                align: 'center',
                render: 'datetime',
                //sortable: 'custom',
                operator: false,
            },
            {
                label: t('order.order.Accept time'),
                prop: 'accept_time',
                align: 'center',
                render: 'datetime',
                show: false,
                //sortable: 'custom',
                operator: false,
            },
            {
                label: t('order.order.Complete time'),
                prop: 'complete_time',
                align: 'center',
                render: 'datetime',
                //sortable: 'custom',
                operator: false,
                show: false,
            },
            {
                label: t('order.order.Cancel time'),
                prop: 'cancel_time',
                align: 'center',
                render: 'datetime',
                show: false,
                //sortable: 'custom',
                operator: false,
            },
        ],
        dblClickNotEditColumn: ['all'],
    },
    {
        defaultItems: {
            // user_id: defalutUser,
            // memo: '',
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
