import { e as c, v as m, p as u, au as d, m as b, o as s, h as _, O as f, W as t, l as n } from './vue-Rh7pEvFB.js'
import { b as h, d as g, T as y, a as k } from './index-cU5Tpy6g.js'
import T from './popupForm-IJRqlNdy.js'
import { a4 as w, _ as C } from './index-BfqXFxxp.js'
import './index-BL7XGxgx.js'
import './index-B8bcfeaY.js'
import './validate-CJqnmgV4.js'
const E = '/admin/membership.Configs/',
    v = c({
        name: 'membership/configs',
        __name: 'index',
        setup(l, { expose: i }) {
            i()
            const { t: e } = m.useI18n(),
                r = u(),
                a = new h(
                    new w(E),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                            {
                                label: e('membership.configs.name'),
                                prop: 'name',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('membership.configs.member_type'),
                                prop: 'member_type',
                                align: 'center',
                                render: 'tag',
                                custom: { 1: 'warning', 2: 'success' },
                                replaceValue: { 1: e('membership.configs.member_type_gold'), 2: e('membership.configs.member_type_diamond') },
                            },
                            {
                                label: e('membership.configs.duration_type'),
                                prop: 'duration_type',
                                align: 'center',
                                render: 'tag',
                                replaceValue: {
                                    1: e('membership.configs.duration_type_month'),
                                    2: e('membership.configs.duration_type_quarter'),
                                    3: e('membership.configs.duration_type_half_year'),
                                    4: e('membership.configs.duration_type_year'),
                                    5: e('membership.configs.duration_type_custom'),
                                },
                            },
                            { label: e('membership.configs.duration_days'), prop: 'duration_days', align: 'center', operator: !1 },
                            { label: e('membership.configs.origin_price'), prop: 'origin_price', align: 'center', operator: !1 },
                            { label: e('membership.configs.sale_price'), prop: 'sale_price', align: 'center', operator: !1 },
                            {
                                label: e('State'),
                                prop: 'status',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'danger', 1: 'success' },
                                replaceValue: { 0: e('membership.configs.status_off'), 1: e('membership.configs.status_on') },
                            },
                            {
                                label: e('membership.configs.created_time'),
                                prop: 'created_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            {
                                label: e('membership.configs.updated_time'),
                                prop: 'updated_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            { label: e('Operate'), align: 'center', width: '100', render: 'buttons', buttons: g(['edit', 'delete']), operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0],
                    },
                    { defaultItems: { member_type: 1, duration_type: 1, duration_days: 31, status: 1 } }
                )
            a.mount(), a.getIndex(), d('baTable', a)
            const o = { t: e, tableRef: r, baTable: a, PopupForm: T, Table: k, TableHeader: y }
            return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
        },
    }),
    F = { class: 'default-main ba-table-box' }
function x(l, i, e, r, a, o) {
    const p = b('el-alert')
    return (
        s(),
        _('div', F, [
            r.baTable.table.remark
                ? (s(), f(p, { key: 0, class: 'ba-table-alert', title: r.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : t('v-if', !0),
            t(' 表格顶部菜单 '),
            n(
                r.TableHeader,
                {
                    buttons: ['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': r.t('Quick search placeholder', { fields: r.t('membership.configs.name') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            t(' 表格 '),
            t(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            n(r.Table, { ref: 'tableRef' }, null, 512),
            t(' 表单 '),
            n(r.PopupForm),
        ])
    )
}
const V = C(v, [
    ['render', x],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/membership/configs/index.vue'],
])
export { V as default }
