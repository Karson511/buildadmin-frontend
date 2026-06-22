<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('membership.configs.name') })"
        />

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef" />

        <!-- 表单 -->
        <PopupForm />
    </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import baTableClass from '/@/utils/baTable'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import { defaultOptButtons } from '/@/components/table'
import { url } from '/@/api/backend/membership/configs'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'

defineOptions({
    name: 'membership/configs',
})

const { t } = useI18n()
const tableRef = ref()
const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: t('Id'), width: 70 },
            { label: t('membership.configs.name'), prop: 'name', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            {
                label: t('membership.configs.member_type'),
                prop: 'member_type',
                align: 'center',
                render: 'tag',
                custom: { '1': 'warning', '2': 'success' },
                replaceValue: { '1': t('membership.configs.member_type_gold'), '2': t('membership.configs.member_type_diamond') },
            },
            {
                label: t('membership.configs.duration_type'),
                prop: 'duration_type',
                align: 'center',
                render: 'tag',
                replaceValue: {
                    '1': t('membership.configs.duration_type_month'),
                    '2': t('membership.configs.duration_type_quarter'),
                    '3': t('membership.configs.duration_type_half_year'),
                    '4': t('membership.configs.duration_type_year'),
                    '5': t('membership.configs.duration_type_custom'),
                },
            },
            { label: t('membership.configs.duration_days'), prop: 'duration_days', align: 'center', operator: false },
            { label: t('membership.configs.origin_price'), prop: 'origin_price', align: 'center', operator: false },
            { label: t('membership.configs.sale_price'), prop: 'sale_price', align: 'center', operator: false },
            {
                label: t('State'),
                prop: 'status',
                align: 'center',
                render: 'tag',
                custom: { '0': 'danger', '1': 'success' },
                replaceValue: { '0': t('membership.configs.status_off'), '1': t('membership.configs.status_on') },
            },
            {
                label: t('membership.configs.created_time'),
                prop: 'created_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
            },
            {
                label: t('membership.configs.updated_time'),
                prop: 'updated_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
            },
            {
                label: t('Operate'),
                align: 'center',
                width: '100',
                render: 'buttons',
                buttons: defaultOptButtons(['edit', 'delete']),
                operator: false,
            },
        ],
        dblClickNotEditColumn: [undefined],
    },
    {
        defaultItems: {
            member_type: 1,
            duration_type: 1,
            duration_days: 31,
            status: 1,
        },
    }
)

baTable.mount()
baTable.getIndex()

provide('baTable', baTable)
</script>

<style scoped lang="scss"></style>
