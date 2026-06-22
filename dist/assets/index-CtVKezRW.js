import { e as b, v as f, p as i, au as y, C as _, m as h, o as s, h as g, O as E, W as r, l } from './vue-Rh7pEvFB.js'
import { b as R, d as F, T as k, a as C } from './index-cU5Tpy6g.js'
import { c as T, a4 as v, _ as w } from './index-BfqXFxxp.js'
import x from './popupForm-BPx6gk6t.js'
import './index-BL7XGxgx.js'
import './index-B8bcfeaY.js'
import './validate-CJqnmgV4.js'
const d = '/admin/security.DataRecycle/'
function I() {
    return T({ url: d + 'add', method: 'get' })
}
const z = b({
        name: 'security/dataRecycle',
        __name: 'index',
        setup(p, { expose: n }) {
            n()
            const { t: e } = f.useI18n(),
                a = i(),
                c = i(),
                t = new R(
                    new v(d),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: 'ID', prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                            {
                                label: e('security.dataRecycle.Rule name'),
                                prop: 'name',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.dataRecycle.controller'),
                                prop: 'controller',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            { label: e('Connection'), prop: 'connection', align: 'center', operator: 'LIKE', operatorPlaceholder: e('Fuzzy query') },
                            {
                                label: e('security.dataRecycle.data sheet'),
                                prop: 'data_table',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.dataRecycle.Data table primary key'),
                                prop: 'primary_key',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                                width: 100,
                            },
                            {
                                label: e('State'),
                                prop: 'status',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'danger', 1: 'success' },
                                replaceValue: { 0: e('Disable'), 1: e('security.dataRecycle.Deleting monitoring') },
                            },
                            {
                                label: e('Update time'),
                                prop: 'update_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            {
                                label: e('Create time'),
                                prop: 'create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            { label: e('Operate'), align: 'center', width: '130', render: 'buttons', buttons: F(['edit', 'delete']), operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0, 'status'],
                    },
                    { defaultItems: { status: '1' } },
                    {
                        toggleForm: ({ operate: u }) => {
                            ;(u == 'Add' || u == 'Edit') &&
                                ((t.form.loading = !0),
                                I().then((m) => {
                                    ;(t.form.extend.controllerList = m.data.controllers), (t.form.loading = !1)
                                }))
                        },
                    }
                )
            y('baTable', t),
                _(() => {
                    ;(t.table.ref = a.value), t.mount(), t.getIndex()
                })
            const o = { t: e, tableRef: a, formRef: c, baTable: t, PopupForm: x, Table: C, TableHeader: k }
            return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
        },
    }),
    P = { class: 'default-main ba-table-box' }
function q(p, n, e, a, c, t) {
    const o = h('el-alert')
    return (
        s(),
        g('div', P, [
            a.baTable.table.remark
                ? (s(), E(o, { key: 0, class: 'ba-table-alert', title: a.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : r('v-if', !0),
            r(' 表格顶部菜单 '),
            l(
                a.TableHeader,
                {
                    buttons: ['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': a.t('Quick search placeholder', { fields: a.t('security.dataRecycle.Rule name') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            r(' 表格 '),
            r(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            l(a.Table, { ref: 'tableRef' }, null, 512),
            r(' 表单 '),
            l(a.PopupForm, { ref: 'formRef' }, null, 512),
        ])
    )
}
const O = w(z, [
    ['render', q],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/security/dataRecycle/index.vue'],
])
export { O as default }
