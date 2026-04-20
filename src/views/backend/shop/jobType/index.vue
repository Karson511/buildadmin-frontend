<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('shop.jobType.User name') + '/' + t('shop.jobType.nickname') })"
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
import { url } from '/@/api/backend/shop/jobType'
import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import TableHeader from '/@/components/table/header/index.vue'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import { defaultOptButtons } from '/@/components/table/index'

defineOptions({
    name: 'shop/jobType',
})

const { t } = useI18n()
const tableRef = ref()

const baTable: baTableClass = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: t('Id'), width: 70 },
            { label: t('shop.jobType.User ID'), prop: 'id', align: 'center', width: 100 },
            { label: t('shop.jobType.User name'), prop: 'username', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            {
                label: t('shop.jobType.nickname'),
                prop: 'nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            {
                label: t('shop.jobType.serviceType'),
                prop: 'service_type',
                align: 'center',
                render: 'tags',
                operator: false,
                formatter: (row) => ((row.service_type || []) as any[]).map((item) => item.name),
            },
            {
                label: t('shop.jobType.JobType'),
                prop: 'job_type',
                align: 'center',
                render: 'tags',
                operator: false,
                formatter: (row) => ((row.job_type || []) as any[]).map((item) => item.name),
            },
            {
                label: t('Operate'),
                align: 'center',
                width: '120',
                render: 'buttons',
                buttons: defaultOptButtons(['edit', 'delete']),
                operator: false,
            },
        ],
        dblClickNotEditColumn: ['all'],
    },
    {},
    {
        requestEdit: ({ id }) => {
            baTable.form.loading = true
            baTable.form.items = {}
            baTable.api
                .edit({ [baTable.table.pk!]: id })
                .then((res: any) => {
                    const data = res.data || {}
                    baTable.form.items = data.row || data.data || data
                })
                .catch(() => {
                    baTable.toggleForm()
                })
                .finally(() => {
                    baTable.form.loading = false
                })
            return false
        },
    }
)

baTable.mount()
baTable.getIndex()

provide('baTable', baTable)
</script>

<style scoped lang="scss"></style>
