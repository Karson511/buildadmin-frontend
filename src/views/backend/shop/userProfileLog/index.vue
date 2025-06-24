<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />
        <!-- 表格顶部菜单 -->
        <!-- 'add', 'edit', 'delete', -->
        <TableHeader
            :buttons="['refresh', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('shop.userProfileLog.nickname') })"
        >
            <template #refreshAppend> </template>
        </TableHeader>

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef">
            <!-- 示例核心代码(1/4) -->
            <template #modifyContent>
                <el-table-column label="修改后内容" width="160" align="left" header-align="center">
                    <template #default="scope">
                        <div>
                            <el-image
                                v-if="scope.row.modify_field_type === 'image'"
                                :hide-on-click-modal="true"
                                :preview-teleported="true"
                                :preview-src-list="[fullUrl(scope.row.modify_content)]"
                                :src="fullUrl(scope.row.modify_content)"
                                class="ba-table-render-image"
                            ></el-image>
                            <template
                                v-else-if="
                                    scope.row.modify_field_type === 'images' && isArray(scope.row.modify_content) && scope.row.modify_content.length
                                "
                            >
                                <el-image
                                    v-for="(item, idx) in scope.row.modify_content"
                                    :key="idx"
                                    :initial-index="idx"
                                    :preview-teleported="true"
                                    :preview-src-list="arrayFullUrl(scope.row.modify_content)"
                                    class="ba-table-render-images-item"
                                    :src="fullUrl(item)"
                                    :hide-on-click-modal="true"
                                ></el-image>
                            </template>
                            <template v-else-if="scope.row.modify_field_type === 'video' && scope.row.modify_content">
                                <elVideo
                                    :src="fullUrl(scope.row.modify_content)"
                                    width="70"
                                    height="70"
                                    fit="fill"
                                    :enablePreview="true"
                                    :customPreview="false"
                                />
                            </template>
                            <template v-else-if="scope.row.modify_field_type === 'topic' && isArray(scope.row.modify_content)">
                                <el-space direction="vertical" alignment="flex-start">
                                    <el-text v-for="(itemData, keyId) in scope.row.modify_content" :key="keyId">
                                        {{ keyId + 1 }}. <span v-html="itemData.title"></span>
                                    </el-text>
                                </el-space>
                            </template>
                            <template v-else><span v-html="scope.row.modify_content"></span></template>
                        </div>
                    </template>
                </el-table-column>
            </template>

            <template #originContent>
                <el-table-column label="原内容" width="160" align="left" header-align="center">
                    <template #default="scope">
                        <div>
                            <el-image
                                v-if="scope.row.modify_field_type === 'image'"
                                :hide-on-click-modal="true"
                                :preview-teleported="true"
                                :preview-src-list="[fullUrl(scope.row.original_content)]"
                                :src="fullUrl(scope.row.original_content)"
                                class="ba-table-render-image"
                            ></el-image>
                            <template
                                v-else-if="
                                    scope.row.modify_field_type === 'images' &&
                                    isArray(scope.row.original_content) &&
                                    scope.row.original_content.length
                                "
                            >
                                <el-image
                                    v-for="(item, idx) in scope.row.original_content"
                                    :key="idx"
                                    :initial-index="idx"
                                    :preview-teleported="true"
                                    :preview-src-list="arrayFullUrl(scope.row.original_content)"
                                    class="ba-table-render-images-item"
                                    :src="fullUrl(item)"
                                    :hide-on-click-modal="true"
                                ></el-image>
                            </template>
                            <template v-else-if="scope.row.modify_field_type === 'video' && scope.row.original_content">
                                <elVideo
                                    :src="fullUrl(scope.row.original_content)"
                                    width="70"
                                    height="70"
                                    fit="fill"
                                    :enablePreview="true"
                                    :customPreview="false"
                                />
                            </template>
                            <template v-else-if="scope.row.modify_field_type === 'topic' && isArray(scope.row.original_content)">
                                <el-space direction="vertical" alignment="flex-start">
                                    <el-text v-for="(itemData, keyId) in scope.row.original_content" :key="keyId">
                                        {{ keyId + 1 }}. <span v-html="itemData.title"></span>
                                    </el-text>
                                </el-space>
                            </template>
                            <template v-else><span v-html="scope.row.original_content"></span></template>
                        </div>
                    </template>
                </el-table-column>
            </template>
        </Table>
        <InfoDialog />
        <!-- 表单 -->
        <!-- <PopupForm /> -->
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import baTableClass from '/@/utils/baTable'
import { isArray } from 'lodash-es'
import { reject, approve, info, url } from '/@/api/backend/shop/userProfileLog'
import { fullUrl, arrayFullUrl } from '/@/utils/common'
// import PopupForm from './popupForm.vue'
import Table from '/@/components/table/index.vue'
import Tabs from '/@/components/tabs/index.vue'
import TableHeader from '/@/components/table/header/index.vue'

import { defaultOptButtons } from '/@/components/table/index'
import { baTableApi } from '/@/api/common'
import { useI18n } from 'vue-i18n'
import elVideo from './video.vue'
import InfoDialog from './info.vue'
// import { ItemStyleMixin } from 'echarts/types/src/model/mixin/itemStyle.js'

defineOptions({
    name: 'shop/userProfileLog',
})
const value = ref('')
const { t } = useI18n()
const tableRef = ref()
const tableKey = ref(0)

const onRestore = (ids: string[]) => {
    restore(ids).then(() => {
        baTable.onTableHeaderAction('refresh', {})
    })
}

const onRestoreAction = () => {
    onRestore(baTable.getSelectionIds())
}

let optButtons: OptButton[] = [
    {
        render: 'confirmButton',
        name: 'approved',
        title: t('shop.userProfileLog.Approved'),
        text: t('shop.userProfileLog.Approved'),
        type: 'success',
        icon: '',
        class: 'table-row-info',
        popconfirm: {
            confirmButtonText: t('shop.userProfileLog.Confirm'),
            cancelButtonText: t('Cancel'),
            confirmButtonType: 'danger',
            title: t('shop.userProfileLog.Once content has been approved,it cannot be rolled back,Are you sure you want to approve?'),
        },
        disabledTip: true,
        display(row: TableRow) {
            return row.status === 'pending'
        },
        click: (row: TableRow) => {
            approveButtonClick(row[baTable.table.pk!])
        },
    },
    {
        render: 'basicButton',
        name: 'reject',
        title: 'Reject',
        text: '不通过',
        type: 'danger',
        icon: '',
        class: 'table-row-info',
        display(row: TableRow) {
            return row.status === 'pending'
        },
        disabledTip: false,
        click: (row: TableRow) => {
            rejectButtonClick(row[baTable.table.pk!], row)
        },
    },
    {
        render: 'tipButton',
        name: 'info',
        title: 'Info',
        text: '',
        type: 'primary',
        icon: 'fa fa-info-circle',
        class: 'table-row-info',
        disabledTip: false,
        display(row: TableRow) {
            return row.status !== 'pending'
        },
        click: (row: TableRow) => {
            infoButtonClick(row[baTable.table.pk!])
        },
    },
]

//optButtons = optButtons.concat(defaultOptButtons(['edit', 'delete']))
const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: false, width: 70 },
            {
                label: t('shop.userProfileLog.User ID'),
                prop: 'shop_user_id',
                align: 'center',
                operator: '=',
                operatorPlaceholder: t('shop.userProfileLog.User ID'),
                width: 100,
            },
            {
                label: t('shop.userProfileLog.nickname'),
                prop: 'user.nickname',
                align: 'center',
                operator: 'LIKE',
                operatorPlaceholder: t('Fuzzy query'),
            },
            { label: t('shop.userProfileLog.Modify field'), prop: 'modify_field_name', align: 'center', operator: false },
            { render: 'slot', slotName: 'originContent', operator: false },
            { render: 'slot', slotName: 'modifyContent', operator: false },
            {
                label: t('shop.userProfileLog.Review'),
                prop: 'status',
                align: 'center',
                render: 'tag',
                custom: { pending: 'warning', disable: 'danger', enable: 'success' },
                replaceValue: {
                    pending: t('shop.userProfileLog.Pending'),
                    disable: t('shop.userProfileLog.Reject'),
                    enable: t('shop.userProfileLog.Approved'),
                },
            },
            {
                label: t('shop.userProfileLog.Application time'),
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
                width: '160',
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

const disabledx = () => {
    return true
}
const approveButtonClick = (id: string) => {
    if (baTable.runBefore('approveButtonClick', { id }) === false) return
    approve(id).then((res) => {
        baTable.onTableHeaderAction('refresh', {})
        baTable.runAfter('approveButtonClick', { res })
    })
}
const rejectButtonClick = (id: number, data: TableRow) => {
    if (baTable.runBefore('rejectButtonClick', { id, data }) === false) return
    ElMessageBox.prompt('请录入原因', data.user.nickname + '[' + data.modify_field_name + ']', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: /^.{1,255}$/,
        inputErrorMessage: '请录入内容',
        inputPlaceholder: '请输入不通过原因',
        inputValue: '',
        inputType: 'textarea',
        // inputValidator: (value) => {
        //     if (!value) {
        //         return '请输入内容'
        //     }
        // },
    })
        .then(({ value }) => {
            reject(id, value).then((res) => {
                baTable.onTableHeaderAction('refresh', {})
                baTable.runAfter('rejectButtonClick', { res })
            })
        })
        .catch(() => {
            ElMessage({ type: 'info', message: 'cancel' })
        })
    // if (baTable.runBefore('rejectButtonClick', { id }) === false) return
    // baTable.form.extend!['info'] = {}
    // baTable.form.operate = 'Reject'
    // baTable.form.loading = true
    // return reject(id).then((res) => {
    //     baTable.form.extend!['info'] = res.data.row
    // })
}
const infoButtonClick = (id: number) => {
    if (baTable.runBefore('infoButtonClick', { id }) === false) return
    //baTable.form.extend!['info'] = {}
    baTable.form.operate = 'Info'
    baTable.form.loading = true
    info(id)
        .then((res) => {
            // res.data.row.data = res.data.row.data
            //     ? [{ label: t('shop.user.Click to expand'), children: buildJsonToElTreeData(res.data.row.data) }]
            //     : []
            // baTable.form.extend!['info'] = res.data.row
            // info form post data
            baTable.form.items = res.data.row
            baTable.form.loading = false
            baTable.toggleForm('info', [id.toString()])
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
const approvalClick = () => {
    baTable.form.loading = true
    baTable.api
        .index({ search: [{ field: 'profile.review', val: '1', operator: 'eq', render: 'tag' }] })
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

<style scoped lang="scss">
.ba-table-render-buttons-item {
    .text {
    }
}
</style>
