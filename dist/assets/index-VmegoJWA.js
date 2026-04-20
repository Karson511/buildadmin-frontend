import { e as p, v as b, aB as m, au as h, as as f, m as _, o as s, h as g, O as y, W as u, l as i } from './vue-Rh7pEvFB.js'
import { d as w, b as T, T as E, a as L } from './index-1fitz5rj.js'
import { a4 as k, ak as I, _ as F } from './index-BinDduO1.js'
import v from './info-CYCHn2Up.js'
import './index-CY7HLGeR.js'
const z = p({
        name: 'auth/adminLog',
        __name: 'index',
        setup(c, { expose: d }) {
            d()
            const { t: e } = b.useI18n()
            let a = [
                {
                    render: 'tipButton',
                    name: 'info',
                    title: 'Info',
                    text: '',
                    type: 'primary',
                    icon: 'fa fa-search-plus',
                    class: 'table-row-edit',
                    disabledTip: !1,
                    click: (t) => {
                        o(t)
                    },
                },
            ]
            a = m(a, w(['delete']))
            const r = new T(
                new k('/admin/auth.AdminLog/'),
                {
                    column: [
                        { type: 'selection', align: 'center', operator: !1 },
                        { label: e('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                        {
                            label: e('auth.adminLog.admin_id'),
                            prop: 'admin_id',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                            width: 70,
                        },
                        {
                            label: e('auth.adminLog.username'),
                            prop: 'username',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                            width: 160,
                        },
                        { label: e('auth.adminLog.title'), prop: 'title', align: 'center', operator: 'LIKE', operatorPlaceholder: e('Fuzzy query') },
                        {
                            show: !1,
                            label: e('auth.adminLog.data'),
                            prop: 'data',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                            showOverflowTooltip: !0,
                        },
                        {
                            label: e('auth.adminLog.url'),
                            prop: 'url',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                            showOverflowTooltip: !0,
                            render: 'url',
                        },
                        {
                            label: e('auth.adminLog.ip'),
                            prop: 'ip',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                            render: 'tag',
                        },
                        {
                            label: e('auth.adminLog.useragent'),
                            prop: 'useragent',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                            showOverflowTooltip: !0,
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
                        { label: e('Operate'), align: 'center', width: '100', render: 'buttons', buttons: a, operator: !1 },
                    ],
                    dblClickNotEditColumn: [void 0],
                },
                {},
                { onTableDblclick: ({ row: t }) => (o(t), !1) }
            )
            r.mount(), r.getIndex(), h('baTable', r)
            const o = (t) => {
                    if (!t) return
                    let n = f(t)
                    ;(n.data = n.data ? [{ label: '点击展开', children: I(JSON.parse(n.data)) }] : []),
                        (r.form.extend.info = n),
                        (r.form.operate = 'Info')
                },
                l = {
                    t: e,
                    get optButtons() {
                        return a
                    },
                    set optButtons(t) {
                        a = t
                    },
                    baTable: r,
                    infoButtonClick: o,
                    Table: L,
                    TableHeader: E,
                    Info: v,
                }
            return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
        },
    }),
    C = { class: 'default-main ba-table-box' }
function x(c, d, e, a, r, o) {
    const l = _('el-alert')
    return (
        s(),
        g('div', C, [
            a.baTable.table.remark
                ? (s(), y(l, { key: 0, class: 'ba-table-alert', title: a.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : u('v-if', !0),
            u(' 表格顶部菜单 '),
            i(
                a.TableHeader,
                {
                    buttons: ['refresh', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': a.t('Quick search placeholder', { fields: a.t('auth.adminLog.title') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            u(' 表格 '),
            u(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            i(a.Table),
            i(a.Info),
        ])
    )
}
const A = F(z, [
    ['render', x],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/auth/adminLog/index.vue'],
])
export { A as default }
