import { e as f, v as h, p as _, au as E, C as k, m as g, o as d, h as y, O as T, W as l, l as n } from './vue-Rh7pEvFB.js'
import { d as w, b as F, T as C, a as v } from './index-cU5Tpy6g.js'
import { c as x, a4 as B, _ as I } from './index-BfqXFxxp.js'
import P from './popupForm-CJwAB-nY.js'
import A from './userEdit-D5tvAmnc.js'
import './index-BL7XGxgx.js'
import './validate-CJqnmgV4.js'
const m = '/admin/shop.topic/'
function O(i) {
    return x({ url: m + 'userEdit', method: 'get', params: { id: i } })
}
const U = f({
        name: 'shop/topic',
        __name: 'index',
        setup(i, { expose: p }) {
            p()
            const { t: o } = h.useI18n(),
                t = _(),
                s = (a) => Object.prototype.hasOwnProperty.call(a, 'children'),
                c = (a) => {
                    ;(e.form.loading = !0),
                        (e.form.items = {}),
                        (e.form.operate = 'UserEdit'),
                        (e.form.operateIds = [String(a)]),
                        O(a)
                            .then((b) => {
                                e.form.items = b.data.row
                            })
                            .catch(() => {
                                e.toggleForm()
                            })
                            .finally(() => {
                                e.form.loading = !1
                            })
                }
            let r = [
                {
                    render: 'tipButton',
                    name: 'topic-edit',
                    title: 'Edit',
                    text: '',
                    type: 'primary',
                    icon: 'fa fa-pencil',
                    class: 'table-row-edit',
                    disabledTip: !1,
                    click: (a) => {
                        if (s(a)) {
                            c(a.id)
                            return
                        }
                        e.onTableAction('edit', { row: a })
                    },
                },
            ]
            r = r.concat(w(['delete']))
            const e = new F(
                new B(m),
                {
                    expandAll: !0,
                    column: [
                        { type: 'selection', align: 'center' },
                        { label: o('shop.topic.User ID'), prop: 'id', align: 'center', width: 70 },
                        {
                            label: o('shop.topic.User name'),
                            prop: 'username',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: o('Fuzzy query'),
                        },
                        {
                            label: o('shop.topic.nickname'),
                            prop: 'nickname',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: o('Fuzzy query'),
                        },
                        {
                            label: o('shop.topic.topic'),
                            prop: 'title',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: o('Fuzzy query'),
                            showOverflowTooltip: !0,
                        },
                        {
                            label: o('Create time'),
                            prop: 'create_time',
                            align: 'center',
                            render: 'datetime',
                            sortable: 'custom',
                            operator: 'RANGE',
                            width: 160,
                        },
                        { label: o('Operate'), align: 'center', width: '120', render: 'buttons', buttons: r, operator: !1 },
                    ],
                    dblClickNotEditColumn: ['all'],
                },
                { defaultItems: { shop_user_id: 0, topic: '' } },
                {}
            )
            E('baTable', e),
                k(() => {
                    ;(e.table.ref = t.value), e.mount(), e.getIndex()
                })
            const u = {
                t: o,
                tableRef: t,
                isParentRow: s,
                onParentEdit: c,
                get optButtons() {
                    return r
                },
                set optButtons(a) {
                    r = a
                },
                baTable: e,
                PopupForm: P,
                UserEdit: A,
                Table: v,
                TableHeader: C,
            }
            return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
        },
    }),
    q = { class: 'default-main ba-table-box' }
function z(i, p, o, t, s, c) {
    const r = g('el-alert')
    return (
        d(),
        y('div', q, [
            t.baTable.table.remark
                ? (d(), T(r, { key: 0, class: 'ba-table-alert', title: t.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : l('v-if', !0),
            l(' 表格顶部菜单 '),
            n(
                t.TableHeader,
                {
                    buttons: ['refresh', 'unfold', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': t.t('Quick search placeholder', {
                        fields: t.t('shop.topic.User name') + '/' + t.t('shop.topic.nickname'),
                    }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            l(' 表格 '),
            l(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            n(t.Table, { ref: 'tableRef' }, null, 512),
            l(' 表单 '),
            n(t.PopupForm),
            n(t.UserEdit),
        ])
    )
}
const H = I(U, [
    ['render', z],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/topic/index.vue'],
])
export { H as default }
