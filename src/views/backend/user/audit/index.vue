<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('user.audit.Audit no') })"
        />

        <!-- 表格 -->
        <Table ref="tableRef">
            <!-- 版本号列：存在显示 vN，不存在不显示 -->
            <template #version>
                <el-table-column :label="t('user.audit.Version')" width="90" align="center">
                    <template #default="scope">
                        <el-tag v-if="scope.row.version" size="small" type="info">v{{ scope.row.version }}</el-tag>
                    </template>
                </el-table-column>
            </template>

            <!-- 待审核字段列：展示待审核字段列表 -->
            <template #pendingFields>
                <el-table-column :label="t('user.audit.Pending fields')" align="left" header-align="center">
                    <template #default="scope">
                        <template v-if="scope.row.pending_fields && scope.row.pending_fields.length">
                            <el-tag v-for="(field, idx) in scope.row.pending_fields" :key="idx" class="pending-field-tag" type="warning" size="small">
                                {{ field }}
                            </el-tag>
                        </template>
                        <span v-else class="text-gray">-</span>
                    </template>
                </el-table-column>
            </template>

            <!-- 审核状态列：显示 audit_status_text -->
            <template #auditStatus>
                <el-table-column :label="t('user.audit.Status')" width="100" align="center">
                    <template #default="scope">
                        <el-tag v-if="scope.row.status_text" :type="statusTagType(scope.row.status)" size="small">
                            {{ scope.row.status_text }}
                        </el-tag>
                    </template>
                </el-table-column>
            </template>
        </Table>

        <!-- 审核详情弹窗 -->
        <InfoDialog />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import { type TagProps } from 'element-plus'
import baTableClass from '/@/utils/baTable'
import { edit, url } from '/@/api/backend/user/audit'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import InfoDialog from './info.vue'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'

defineOptions({
    name: 'user/audit',
})

const { t } = useI18n()
const tableRef = ref()

/**
 * 审核状态对应的 tag 类型
 */
const statusTagType = (status: number): TagProps['type'] => {
    const map: Record<number, TagProps['type']> = {
        1: 'warning',
        2: 'warning',
        3: 'success',
        4: 'danger',
        5: 'info',
    }
    return map[status] || 'info'
}

let optButtons: OptButton[] = [
    {
        render: 'tipButton',
        name: 'info',
        title: 'Info',
        text: t('user.audit.Audit detail'),
        type: 'primary',
        icon: 'fa fa-info-circle',
        class: 'table-row-info',
        disabledTip: false,
        click: (row: TableRow) => {
            infoButtonClick(row.audit_no)
        },
    },
]

const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: false, width: 70 },
            {
                label: t('user.audit.Audit no'),
                prop: 'audit_no',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
                width: 200,
            },
            {
                label: t('user.audit.Nickname'),
                prop: 'user.nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('user.audit.Mobile'),
                prop: 'mobile',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
                width: 130,
            },
            {
                label: t('user.audit.Version'),
                prop: 'version',
                align: 'center',
                render: 'slot',
                slotName: 'version',
                operator: false,
                width: 90,
            },
            { render: 'slot', slotName: 'pendingFields', operator: false },
            {
                label: t('user.audit.Status'),
                prop: 'status',
                align: 'center',
                render: 'slot',
                slotName: 'auditStatus',
                comSearchRender: 'select',
                replaceValue: {
                    '0': t('user.audit.All'),
                    '1': t('user.audit.Pending'),
                    '2': t('user.audit.Partial approved'),
                    '3': t('user.audit.Approved'),
                    '4': t('user.audit.Rejected'),
                    '5': t('user.audit.Cancelled'),
                },
            },
            {
                label: t('user.audit.Modify time'),
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
                width: '140',
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
            infoButtonClick(row.audit_no)
            return false
        },
    }
)

/**
 * 查看审核详情：调用 edit 接口（按 audit_no），获取完整审核单信息
 */
const infoButtonClick = (audit_no: string) => {
    if (baTable.runBefore('infoButtonClick', { audit_no }) === false) return
    baTable.form.operate = 'Info'
    baTable.form.loading = true
    edit(audit_no)
        .then((res) => {
            baTable.form.items = res.data.master
            baTable.form.extend!['master'] = res.data.master
            baTable.form.extend!['details'] = res.data.details
            baTable.form.extend!['user'] = res.data.user
            baTable.form.loading = false
            baTable.toggleForm('info', [audit_no])
        })
        .catch((err) => {
            console.log('info', err)
            baTable.toggleForm()
        })
        .finally(() => {
            baTable.table.loading = false
        })
}

provide('baTable', baTable)

onMounted(() => {
    baTable.mount()
    // 审核状态默认筛选「全部」(status=0)
    baTable.setComSearchData({ status: '0' })
    baTable.getIndex()?.then(() => {
        baTable.table.showComSearch = true
    })
})
</script>

<style scoped lang="scss">
.pending-field-tag {
    margin: 2px 4px 2px 0;
}
</style>
