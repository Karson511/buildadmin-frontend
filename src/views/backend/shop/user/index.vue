<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />
        <!-- 表格顶部菜单 -->
        <!-- 'add', 'edit', 'delete', -->
        <TableHeader
            :buttons="['refresh', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('shop.user.User name') + '/' + t('shop.user.nickname') })"
        >
            <template #refreshAppend>
                <!-- <el-tooltip placement="top" :content="t('shop.user.Pending approval')">
                    <el-button v-blur @click="approvalClick.call()" class="table-header-operate" type="success">
                        <span class="table-header-operate-text">{{ t('shop.user.Pending approval') }}</span>
                    </el-button>
                </el-tooltip>
                <el-tooltip placement="top" :content="t('shop.user.Approved')">
                    <el-button v-blur @click="onAction('refresh', { loading: true })" class="table-header-operate" type="danger">
                        <span class="table-header-operate-text">{{ t('shop.user.Approved') }}</span>
                    </el-button>
                </el-tooltip> -->
                <el-tooltip placement="top" :content="t('shop.user.Registration submitted')">
                    <el-button v-blur @click="baTable.onTableHeaderAction('refresh', { loading: true })" class="table-header-operate" type="danger">
                        <span class="table-header-operate-text">{{ t('shop.user.Registration submitted') }}</span>
                    </el-button>
                </el-tooltip>
                <el-tooltip placement="top" :content="t('shop.user.Registration not submitted')">
                    <el-button v-blur @click="noProfileClick()" class="table-header-operate" type="danger">
                        <span class="table-header-operate-text">{{ t('shop.user.Registration not submitted') }}</span>
                    </el-button>
                </el-tooltip>
            </template>
        </TableHeader>

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef">
            <!-- 示例核心代码(1/4) -->
            <template #topic>
                <el-table-column label="话题" width="160" align="left" header-align="center">
                    <template #default="scope">
                        <template v-for="(item, idx) in scope.row.topic" :key="idx">
                            <p align="left" vertical-align="top">
                                <el-link type="primary">{{ idx + 1 }}.{{ item.title }}</el-link>
                            </p>
                        </template>
                    </template>
                </el-table-column>
            </template>
        </Table>
        <InfoDialog />
        <!-- 表单 -->
        <PopupForm />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { info, url } from '/@/api/backend/shop/user'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import Tabs from '/@/components/tabs/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import InfoDialog from './info.vue'

import { defaultOptButtons } from '/@/components/table/index'
import { baTableApi } from '/@/api/common'
import { buildJsonToElTreeData } from '/@/utils/common'
import { useI18n } from 'vue-i18n'
// import { ItemStyleMixin } from 'echarts/types/src/model/mixin/itemStyle.js'

defineOptions({
    name: 'shop/user',
})
const value = ref('')
const { t } = useI18n()
const tableRef = ref()

const onRestore = (ids: string[]) => {
    // Restore functionality placeholder
    console.log('onRestore called with:', ids)
    baTable.onTableHeaderAction('refresh', {})
}

const onRestoreAction = () => {
    onRestore(baTable.getSelectionIds())
}

let optButtons: OptButton[] = [
    {
        render: 'tipButton',
        name: 'info',
        title: 'Info',
        text: '',
        type: 'primary',
        icon: 'fa fa-info-circle',
        class: 'table-row-info',
        disabledTip: false,
        click: (row: TableRow) => {
            infoButtonClick(row[baTable.table.pk!])
        },
    },
]

// optButtons = optButtons.concat(defaultOptButtons(['edit', 'delete']))
const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: t('Id'), width: 70 },
            // { label: t('shop.user.User name'), prop: 'username', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            { label: t('shop.user.nickname'), prop: 'nickname', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            { label: t('shop.user.head portrait'), prop: 'avatar', align: 'center', render: 'image', operator: false },
            {
                label: t('shop.user.Gender'),
                prop: 'gender',
                align: 'center',
                render: 'tag', // 对应fieldRender目录下的组件
                custom: { '0': 'info', '1': '', '2': 'success' }, // 不同样式
                replaceValue: { '0': t('Unknown'), '1': t('shop.user.male'), '2': t('shop.user.female') },
            },
            { label: t('shop.user.Province'), prop: 'province', align: 'center', operator: false },
            { label: t('shop.user.City'), prop: 'city', align: 'center', operator: false },
            { label: t('shop.user.Introduction'), prop: 'introduction', showOverflowTooltip: true, align: 'center', operator: false, width: 200 },
            // { label: t('shop.user.Readme'), prop: 'profile.readme', 'show-overflow-tooltip': true, align: 'center', operator: false, width: 200 },
            // { render: 'slot', slotName: 'topic', operator: false },
            // { label: t('shop.user.mobile'), prop: 'mobile', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            {
                label: t('shop.user.Job occupation'),
                prop: 'job_type',
                align: 'center',
                operator: false, //'LIKE',
                //operatorPlaceholder: t('Fuzzy query'),
                render: 'tags',
            },

            {
                label: t('shop.user.Operational Star'),
                prop: 'profile.operational_star',
                align: 'center',
                render: 'tag',
                custom: { '0': 'danger', '1': 'success' },
                replaceValue: { '0': t('no'), '1': t('yes') },
            },
            {
                label: t('shop.user.Take Orders'),
                prop: 'profile.is_take_orders',
                align: 'center',
                render: 'tag',
                custom: { '0': 'danger', '1': 'success' },
                replaceValue: { '0': t('no'), '1': t('yes') },
            },
            {
                label: t('shop.user.Review Result'),
                prop: 'profile.status',
                align: 'center',
                render: 'tag',
                custom: { pending: 'warning', disable: 'danger', enable: 'success' },
                replaceValue: { pending: t('shop.user.Pending approval'), disable: t('shop.user.Not approved'), enable: t('shop.user.Approved') },
            },
            {
                label: t('shop.user.Registration time'),
                prop: 'create_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
            },
            {
                label: t('shop.user.Application time'),
                prop: 'profile.create_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
            },
            {
                label: t('State'),
                prop: 'status',
                align: 'center',
                render: 'tag',
                custom: { disable: 'danger', enable: 'success' },
                replaceValue: { disable: t('Disable'), enable: t('Enable') },
            },
            {
                label: t('Operate'),
                align: 'center',
                width: '120',
                render: 'buttons',
                buttons: optButtons,
                operator: false,
            },
        ],
        // 不允许双击编辑的列的prop
        dblClickNotEditColumn: [undefined],
    },
    {
        defaultItems: {
            gender: 0,
            money: '0',
            score: '0',
            status: 'enable',
        },
    },
    {
        onTableDblclick: ({ row }) => {
            infoButtonClick(row[baTable.table.pk!])
            return false
        },
    }
)

const infoButtonClick = (id: string) => {
    if (baTable.runBefore('infoButtonClick', { id }) === false) return
    baTable.form.extend!['info'] = {}
    baTable.form.operate = 'Info'
    baTable.form.loading = true
    return info(id)
        .then((res) => {
            // res.data.row.data = res.data.row.data
            //     ? [{ label: t('shop.user.Click to expand'), children: buildJsonToElTreeData(res.data.row.data) }]
            //     : []
            baTable.form.extend!['info'] = res.data.row
            // info form post data
            baTable.form.items = res.data.row
            baTable.form.loading = false
            baTable.toggleForm('review')
        })
        .catch((err) => {
            console.log('info', err)
            baTable.toggleForm()
            //baTable.runAfter('info', { err })
        })
        .finally(() => {
            baTable.table.loading = false
        })
}
const noProfileClick = () => {
    baTable.form.loading = true
    let searchData = baTable.getComSearchData()
    searchData.push({ field: 'profile.shop_user_id', val: '', operator: 'NULL', render: 'tag' })
    baTable.api
        .index({ search: searchData })
        .then((res) => {
            // res.data.row.data =
            baTable.table.data = res.data.list
            baTable.table.total = res.data.total
            baTable.table.remark = res.data.remark
        })
        .finally(() => {
            baTable.table.loading = false
        })
}
onMounted(() => {
    // 表格的onMounted, 可以在页面onMounted时执行。
    baTable.mount()
    // 获取数据，可以在页面的onMounted时执行，也可以比如先请求一个API，再执行获取数据
    baTable.getIndex()?.then(() => {
        // 数据加载完成后打开公共搜索
        baTable.table.showComSearch = true
    })
})

// 为子组件中提供的数据
provide('baTable', baTable)
</script>

<style scoped lang="scss"></style>
