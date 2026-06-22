<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('posts.posts.Online Title') })"
        >
            <template #refreshAppend>
                <el-tooltip :content="t('posts.posts.Off')" placement="top">
                    <el-button
                        v-blur
                        :disabled="baTable.table.selection!.length > 0 ? false : true"
                        class="table-header-operate"
                        type="warning"
                        @click="onBatchOff"
                    >
                        <Icon name="fa fa-arrow-down" />
                        <span class="table-header-operate-text">{{ t('posts.posts.Off') }}</span>
                    </el-button>
                </el-tooltip>
                <el-tooltip :content="t('posts.posts.On')" placement="top">
                    <el-button
                        v-blur
                        :disabled="baTable.table.selection!.length > 0 ? false : true"
                        class="table-header-operate"
                        type="success"
                        @click="onBatchOn"
                    >
                        <Icon name="fa fa-arrow-up" />
                        <span class="table-header-operate-text">{{ t('posts.posts.On') }}</span>
                    </el-button>
                </el-tooltip>
                <el-tooltip :content="t('posts.posts.Delete')" placement="top">
                    <el-button
                        v-blur
                        :disabled="baTable.table.selection!.length > 0 ? false : true"
                        class="table-header-operate"
                        type="danger"
                        @click="onBatchDelete"
                    >
                        <Icon name="fa fa-trash" />
                        <span class="table-header-operate-text">{{ t('posts.posts.Delete') }}</span>
                    </el-button>
                </el-tooltip>
            </template>
        </TableHeader>

        <!-- 表格 -->
        <Table ref="tableRef" />

        <!-- 帖子详情弹窗 -->
        <DetailDialog />

        <!-- 下架弹窗 -->
        <OffDialog />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import baTableClass from '/@/utils/baTable'
import { baTableApi } from '/@/api/common'
import { url, del, publish } from '/@/api/backend/posts/posts'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import DetailDialog from './detailDialog.vue'
import OffDialog from './offDialog.vue'
import { useI18n } from 'vue-i18n'

defineOptions({
    name: 'posts/posts',
})

const { t } = useI18n()
const tableRef = ref()

let optButtons: OptButton[] = [
    {
        render: 'tipButton',
        name: 'viewDetail',
        title: t('posts.posts.View Detail'),
        text: t('posts.posts.View Detail'),
        type: 'primary',
        icon: 'fa fa-eye',
        class: 'table-row-view',
        disabledTip: false,
        click: (row: TableRow) => {
            openDetailDialog(row)
        },
    },
    {
        render: 'confirmButton',
        name: 'off',
        title: t('posts.posts.Off'),
        text: t('posts.posts.Off'),
        type: 'warning',
        icon: 'fa fa-arrow-down',
        class: 'table-row-off',
        popconfirm: {
            confirmButtonText: t('posts.posts.Confirm'),
            cancelButtonText: t('posts.posts.Cancel'),
            title: t('posts.posts.Off Confirm'),
        },
        disabledTip: false,
        display(row: TableRow) {
            // 仅 status=2（已发布）可下架
            return row.status === 2
        },
        click: (row: TableRow) => {
            openOffDialog(row)
        },
    },
    {
        render: 'confirmButton',
        name: 'on',
        title: t('posts.posts.On'),
        text: t('posts.posts.On'),
        type: 'success',
        icon: 'fa fa-arrow-up',
        class: 'table-row-on',
        popconfirm: {
            confirmButtonText: t('posts.posts.Confirm'),
            cancelButtonText: t('posts.posts.Cancel'),
            title: t('posts.posts.On Confirm'),
        },
        disabledTip: false,
        display(row: TableRow) {
            // 仅 status=4（已下架）可上架
            return row.status === 4
        },
        click: (row: TableRow) => {
            onPost([row.id])
        },
    },
    {
        render: 'confirmButton',
        name: 'delete',
        title: t('posts.posts.Delete'),
        text: t('posts.posts.Delete'),
        type: 'danger',
        icon: 'fa fa-trash',
        class: 'table-row-delete',
        popconfirm: {
            confirmButtonText: t('posts.posts.Confirm'),
            cancelButtonText: t('posts.posts.Cancel'),
            confirmButtonType: 'danger',
            title: t('posts.posts.Delete Confirm'),
        },
        disabledTip: false,
        click: (row: TableRow) => {
            onDelete([row.id])
        },
    },
]

const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            {
                label: t('posts.posts.Post ID'),
                prop: 'id',
                align: 'center',
                operator: '=',
                width: 90,
            },
            {
                label: t('posts.posts.Content Type'),
                prop: 'post_type',
                align: 'center',
                width: 100,
                render: 'tag',
                replaceValue: { '1': t('posts.posts.Topic'), '2': t('posts.posts.Resource') },
                comSearchRender: 'select',
                custom: { '1': '', '2': 'warning' },
            },
            {
                label: t('posts.posts.Author Info'),
                prop: 'user_nickname',
                align: 'center',
                operator: 'LIKE',
                width: 150,
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('posts.posts.Online Title'),
                prop: 'title',
                align: 'left',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('posts.posts.Global Status'),
                prop: 'status',
                align: 'center',
                width: 160,
                render: 'tag',
                replaceValue: {
                    '1': t('posts.posts.First Review'),
                    '2': t('posts.posts.Published'),
                    '3': t('posts.posts.Rejected'),
                    '4': t('posts.posts.Offlined'),
                    '5': t('posts.posts.New Review'),
                    '6': t('posts.posts.New Rejected'),
                },
                comSearchRender: 'select',
                custom: {
                    '1': 'warning',
                    '2': 'success',
                    '3': 'danger',
                    '4': 'info',
                    '5': 'warning',
                    '6': 'danger',
                },
            },
            {
                label: t('posts.posts.Publish Time'),
                prop: 'update_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
            },
            {
                label: t('posts.posts.Operate'),
                align: 'center',
                width: 250,
                render: 'buttons',
                buttons: optButtons,
                operator: false,
            },
        ],
        dblClickNotEditColumn: ['all'],
    },
    {},
    {
        onTableDblclick: ({ row }) => {
            openDetailDialog(row)
            return false
        },
    }
)

/**
 * 打开详情弹窗
 */
const openDetailDialog = (row: TableRow) => {
    if (baTable.runBefore('openDetailDialog', { row }) === false) return
    baTable.form.operate = 'Detail'
    baTable.form.loading = true
    baTable.form.items = { id: row.id }
    baTable.form.extend = {}
    baTable.runAfter('openDetailDialog', { row })
}

/**
 * 打开下架弹窗
 */
const openOffDialog = (row: TableRow) => {
    baTable.form.extend!['offPostIds'] = [row.id]
    baTable.form.extend!['offDialogVisible'] = true
}

/**
 * 上架
 */
const onPost = (ids: number[]) => {
    publish(ids).then(() => {
        baTable.onTableHeaderAction('refresh', {})
    })
}

/**
 * 单条删除
 */
const onDelete = (ids: number[]) => {
    del(ids).then(() => {
        baTable.onTableHeaderAction('refresh', {})
    })
}

/**
 * 批量下架
 */
const onBatchOff = () => {
    const selection = baTable.table.selection!
    if (!selection.length) {
        ElMessage.warning(t('posts.posts.Please select records'))
        return
    }
    const ids = selection.map((row: TableRow) => row.id)
    baTable.form.extend!['offPostIds'] = ids
    baTable.form.extend!['offDialogVisible'] = true
}

/**
 * 批量上架
 */
const onBatchOn = () => {
    const selection = baTable.table.selection!
    if (!selection.length) {
        ElMessage.warning(t('posts.posts.Please select records'))
        return
    }
    const ids = selection.map((row: TableRow) => row.id)
    publish(ids).then(() => {
        baTable.onTableHeaderAction('refresh', {})
    })
}

/**
 * 批量删除
 */
const onBatchDelete = () => {
    const selection = baTable.table.selection!
    if (!selection.length) {
        ElMessage.warning(t('posts.posts.Delete Confirm'))
        return
    }
    const ids = selection.map((row: TableRow) => row.id)
    del(ids).then(() => {
        baTable.onTableHeaderAction('refresh', {})
    })
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
