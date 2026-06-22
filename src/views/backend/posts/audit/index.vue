<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('posts.postAuditDrafts.Draft Title') })"
        />

        <!-- 表格 -->
        <Table ref="tableRef" />

        <!-- 审核详情弹窗 -->
        <AuditDialog />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import baTableClass from '/@/utils/baTable'
import { baTableApi } from '/@/api/common'
import { url } from '/@/api/backend/posts/postAuditDrafts'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import AuditDialog from './auditDialog.vue'
import { useI18n } from 'vue-i18n'

defineOptions({
    name: 'posts/audit',
})

const { t } = useI18n()
const tableRef = ref()

let optButtons: OptButton[] = [
    {
        render: 'tipButton',
        name: 'goAudit',
        title: t('posts.postAuditDrafts.Go Audit'),
        text: t('posts.postAuditDrafts.Go Audit'),
        type: 'primary',
        icon: 'fa fa-eye',
        class: 'table-row-audit',
        disabledTip: false,
        click: (row: TableRow) => {
            openAuditDialog(row)
        },
    },
]

const baTable = new baTableClass(
    new baTableApi(url),
    {
        pk: 'post_id',
        column: [
            { type: 'selection', align: 'center', operator: false },
            {
                label: t('posts.postAuditDrafts.Post ID'),
                prop: 'post_id',
                align: 'center',
                operator: '=',
                width: 90,
            },
            {
                label: t('posts.postAuditDrafts.Content Type'),
                prop: 'post_type',
                align: 'center',
                width: 100,
                render: 'tag',
                replaceValue: { '1': t('posts.postAuditDrafts.Topic'), '2': t('posts.postAuditDrafts.Resource') },
                comSearchRender: 'select',
                custom: { '1': '', '2': 'warning' },
            },
            {
                label: t('posts.postAuditDrafts.Author Info'),
                prop: 'user_nickname',
                align: 'center',
                operator: 'LIKE',
                width: 150,
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('posts.postAuditDrafts.Draft Title'),
                prop: 'title',
                align: 'left',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('posts.postAuditDrafts.Version'),
                prop: 'version',
                align: 'center',
                operator: false,
                width: 80,
                formatter: (row: TableRow) => 'v' + row.version,
            },
            {
                label: t('posts.postAuditDrafts.Submit Time'),
                prop: 'update_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
            },
            {
                label: t('posts.postAuditDrafts.Status'),
                prop: 'audit_status',
                align: 'center',
                width: 100,
                render: 'tag',
                replaceValue: {
                    '1': t('posts.postAuditDrafts.Pending'),
                    '2': t('posts.postAuditDrafts.Approved'),
                    '3': t('posts.postAuditDrafts.Rejected'),
                },
                comSearchRender: 'select',
                custom: { '1': 'warning', '2': 'success', '3': 'danger' },
            },
            {
                label: t('posts.postAuditDrafts.Operate'),
                align: 'center',
                width: '130',
                render: 'buttons',
                buttons: optButtons,
                operator: false,
            },
        ],
        dblClickNotEditColumn: ['all'],
    },
    {},
    {}
)

/**
 * 打开审核弹窗：加载详情数据
 */
const openAuditDialog = (row: TableRow) => {
    if (baTable.runBefore('openAuditDialog', { row }) === false) return
    baTable.form.operate = 'Info'
    baTable.form.loading = true
    baTable.form.items = { post_id: row.post_id }
    baTable.form.extend = {}
    baTable.runAfter('openAuditDialog', { row })
}

provide('baTable', baTable)

onMounted(() => {
    baTable.mount()
    baTable.getIndex()?.then(() => {
        baTable.table.showComSearch = true
    })
})
</script>

<style scoped lang="scss"></style>
