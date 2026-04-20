<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'unfold', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('shop.topic.User name') + '/' + t('shop.topic.nickname') })"
        />

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef" />

        <!-- 表单 -->
        <PopupForm />
        <UserEdit />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { url, userEdit } from '/@/api/backend/shop/topic'
import PopupForm from './popupForm.vue'
import UserEdit from './userEdit.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import { defaultOptButtons } from '/@/components/table/index'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
defineOptions({
    name: 'shop/topic',
})

const { t } = useI18n()
const tableRef = ref()
const isParentRow = (row: TableRow) => Object.prototype.hasOwnProperty.call(row, 'children')

const onParentEdit = (id: string | number) => {
    baTable.form.loading = true
    baTable.form.items = {}
    baTable.form.operate = 'UserEdit'
    baTable.form.operateIds = [String(id)]
    userEdit(id)
        .then((res: any) => {
            baTable.form.items = res.data.row
        })
        .catch(() => {
            baTable.toggleForm()
        })
        .finally(() => {
            baTable.form.loading = false
        })
}

let optButtons: OptButton[] = [
    {
        render: 'tipButton',
        name: 'topic-edit',
        title: 'Edit',
        text: '',
        type: 'primary',
        icon: 'fa fa-pencil',
        class: 'table-row-edit',
        disabledTip: false,
        click: (row: TableRow) => {
            if (isParentRow(row)) {
                onParentEdit(row.id)
                return
            }
            baTable.onTableAction('edit', { row })
        },
    },
]
optButtons = optButtons.concat(defaultOptButtons(['delete']))

const baTable = new baTableClass(
    new baTableApi(url),
    {
        expandAll: true,
        column: [
            { type: 'selection', align: 'center' },
            // { label: t('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: t('Id'), width: 70 },
            { label: t('shop.topic.User ID'), prop: 'id', align: 'center', width: 70 },
            {
                label: t('shop.topic.User name'),
                prop: 'username',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('shop.topic.nickname'),
                prop: 'nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('shop.topic.topic'),
                prop: 'title',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
                showOverflowTooltip: true,
            },
            {
                label: t('Create time'),
                prop: 'create_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
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
        dblClickNotEditColumn: ['all'],
    },
    {
        defaultItems: {
            shop_user_id: 0,
            topic: '',
        },
    },
    {}
)

provide('baTable', baTable)

onMounted(() => {
    baTable.table.ref = tableRef.value
    baTable.mount()
    baTable.getIndex()
})
</script>

<style scoped lang="scss"></style>
