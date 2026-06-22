import {
    e as P,
    v as A,
    p as I,
    au as E,
    C as R,
    ai as g,
    m as h,
    X as S,
    o as u,
    h as V,
    O as _,
    W as b,
    l as a,
    P as n,
    _ as w,
    k as T,
    U as D,
} from './vue-Rh7pEvFB.js'
import { b as N, T as H, a as j } from './index-cU5Tpy6g.js'
import { a4 as q, _ as F } from './index-BfqXFxxp.js'
import { u as z, p as C, a as y } from './posts-CUZwLQo2.js'
import G from './detailDialog-BvFoEwLb.js'
import K from './offDialog-BAIlkoDm.js'
import './index-BL7XGxgx.js'
import './marked.esm-GmWPvxak.js'
const L = P({
        name: 'posts/posts',
        __name: 'index',
        setup(k, { expose: B }) {
            B()
            const { t: e } = A.useI18n(),
                s = I()
            let m = [
                {
                    render: 'tipButton',
                    name: 'viewDetail',
                    title: e('posts.posts.View Detail'),
                    text: e('posts.posts.View Detail'),
                    type: 'primary',
                    icon: 'fa fa-eye',
                    class: 'table-row-view',
                    disabledTip: !1,
                    click: (t) => {
                        p(t)
                    },
                },
                {
                    render: 'confirmButton',
                    name: 'off',
                    title: e('posts.posts.Off'),
                    text: e('posts.posts.Off'),
                    type: 'warning',
                    icon: 'fa fa-arrow-down',
                    class: 'table-row-off',
                    popconfirm: {
                        confirmButtonText: e('posts.posts.Confirm'),
                        cancelButtonText: e('posts.posts.Cancel'),
                        title: e('posts.posts.Off Confirm'),
                    },
                    disabledTip: !1,
                    display(t) {
                        return t.status === 2
                    },
                    click: (t) => {
                        l(t)
                    },
                },
                {
                    render: 'confirmButton',
                    name: 'on',
                    title: e('posts.posts.On'),
                    text: e('posts.posts.On'),
                    type: 'success',
                    icon: 'fa fa-arrow-up',
                    class: 'table-row-on',
                    popconfirm: {
                        confirmButtonText: e('posts.posts.Confirm'),
                        cancelButtonText: e('posts.posts.Cancel'),
                        title: e('posts.posts.On Confirm'),
                    },
                    disabledTip: !1,
                    display(t) {
                        return t.status === 4
                    },
                    click: (t) => {
                        r([t.id])
                    },
                },
                {
                    render: 'confirmButton',
                    name: 'delete',
                    title: e('posts.posts.Delete'),
                    text: e('posts.posts.Delete'),
                    type: 'danger',
                    icon: 'fa fa-trash',
                    class: 'table-row-delete',
                    popconfirm: {
                        confirmButtonText: e('posts.posts.Confirm'),
                        cancelButtonText: e('posts.posts.Cancel'),
                        confirmButtonType: 'danger',
                        title: e('posts.posts.Delete Confirm'),
                    },
                    disabledTip: !1,
                    click: (t) => {
                        i([t.id])
                    },
                },
            ]
            const o = new N(
                    new q(z),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('posts.posts.Post ID'), prop: 'id', align: 'center', operator: '=', width: 90 },
                            {
                                label: e('posts.posts.Content Type'),
                                prop: 'post_type',
                                align: 'center',
                                width: 100,
                                render: 'tag',
                                replaceValue: { 1: e('posts.posts.Topic'), 2: e('posts.posts.Resource') },
                                comSearchRender: 'select',
                                custom: { 1: '', 2: 'warning' },
                            },
                            {
                                label: e('posts.posts.Author Info'),
                                prop: 'user_nickname',
                                align: 'center',
                                operator: 'LIKE',
                                width: 150,
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('posts.posts.Online Title'),
                                prop: 'title',
                                align: 'left',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('posts.posts.Global Status'),
                                prop: 'status',
                                align: 'center',
                                width: 160,
                                render: 'tag',
                                replaceValue: {
                                    1: e('posts.posts.First Review'),
                                    2: e('posts.posts.Published'),
                                    3: e('posts.posts.Rejected'),
                                    4: e('posts.posts.Offlined'),
                                    5: e('posts.posts.New Review'),
                                    6: e('posts.posts.New Rejected'),
                                },
                                comSearchRender: 'select',
                                custom: { 1: 'warning', 2: 'success', 3: 'danger', 4: 'info', 5: 'warning', 6: 'danger' },
                            },
                            {
                                label: e('posts.posts.Publish Time'),
                                prop: 'update_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            { label: e('posts.posts.Operate'), align: 'center', width: 250, render: 'buttons', buttons: m, operator: !1 },
                        ],
                        dblClickNotEditColumn: ['all'],
                    },
                    {},
                    { onTableDblclick: ({ row: t }) => (p(t), !1) }
                ),
                p = (t) => {
                    o.runBefore('openDetailDialog', { row: t }) !== !1 &&
                        ((o.form.operate = 'Detail'),
                        (o.form.loading = !0),
                        (o.form.items = { id: t.id }),
                        (o.form.extend = {}),
                        o.runAfter('openDetailDialog', { row: t }))
                },
                l = (t) => {
                    ;(o.form.extend.offPostIds = [t.id]), (o.form.extend.offDialogVisible = !0)
                },
                r = (t) => {
                    C(t).then(() => {
                        o.onTableHeaderAction('refresh', {})
                    })
                },
                i = (t) => {
                    y(t).then(() => {
                        o.onTableHeaderAction('refresh', {})
                    })
                },
                c = () => {
                    const t = o.table.selection
                    if (!t.length) {
                        g.warning(e('posts.posts.Please select records'))
                        return
                    }
                    const d = t.map((f) => f.id)
                    ;(o.form.extend.offPostIds = d), (o.form.extend.offDialogVisible = !0)
                },
                O = () => {
                    const t = o.table.selection
                    if (!t.length) {
                        g.warning(e('posts.posts.Please select records'))
                        return
                    }
                    const d = t.map((f) => f.id)
                    C(d).then(() => {
                        o.onTableHeaderAction('refresh', {})
                    })
                },
                v = () => {
                    const t = o.table.selection
                    if (!t.length) {
                        g.warning(e('posts.posts.Delete Confirm'))
                        return
                    }
                    const d = t.map((f) => f.id)
                    y(d).then(() => {
                        o.onTableHeaderAction('refresh', {})
                    })
                }
            E('baTable', o),
                R(() => {
                    var t
                    o.mount(),
                        (t = o.getIndex()) == null ||
                            t.then(() => {
                                o.table.showComSearch = !0
                            })
                })
            const x = {
                t: e,
                tableRef: s,
                get optButtons() {
                    return m
                },
                set optButtons(t) {
                    m = t
                },
                baTable: o,
                openDetailDialog: p,
                openOffDialog: l,
                onPost: r,
                onDelete: i,
                onBatchOff: c,
                onBatchOn: O,
                onBatchDelete: v,
                Table: j,
                TableHeader: H,
                DetailDialog: G,
                OffDialog: K,
            }
            return Object.defineProperty(x, '__isScriptSetup', { enumerable: !1, value: !0 }), x
        },
    }),
    M = { class: 'default-main ba-table-box' },
    U = { class: 'table-header-operate-text' },
    Q = { class: 'table-header-operate-text' },
    W = { class: 'table-header-operate-text' }
function X(k, B, e, s, m, o) {
    const p = h('el-alert'),
        l = h('Icon'),
        r = h('el-button'),
        i = h('el-tooltip'),
        c = S('blur')
    return (
        u(),
        V('div', M, [
            s.baTable.table.remark
                ? (u(), _(p, { key: 0, class: 'ba-table-alert', title: s.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : b('v-if', !0),
            b(' 表格顶部菜单 '),
            a(
                s.TableHeader,
                {
                    buttons: ['refresh', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': s.t('Quick search placeholder', { fields: s.t('posts.posts.Online Title') }),
                },
                {
                    refreshAppend: n(() => [
                        a(
                            i,
                            { content: s.t('posts.posts.Off'), placement: 'top' },
                            {
                                default: n(() => [
                                    w(
                                        (u(),
                                        _(
                                            r,
                                            {
                                                disabled: !(s.baTable.table.selection.length > 0),
                                                class: 'table-header-operate',
                                                type: 'warning',
                                                onClick: s.onBatchOff,
                                            },
                                            {
                                                default: n(() => [a(l, { name: 'fa fa-arrow-down' }), T('span', U, D(s.t('posts.posts.Off')), 1)]),
                                                _: 1,
                                            },
                                            8,
                                            ['disabled']
                                        )),
                                        [[c]]
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ['content']
                        ),
                        a(
                            i,
                            { content: s.t('posts.posts.On'), placement: 'top' },
                            {
                                default: n(() => [
                                    w(
                                        (u(),
                                        _(
                                            r,
                                            {
                                                disabled: !(s.baTable.table.selection.length > 0),
                                                class: 'table-header-operate',
                                                type: 'success',
                                                onClick: s.onBatchOn,
                                            },
                                            { default: n(() => [a(l, { name: 'fa fa-arrow-up' }), T('span', Q, D(s.t('posts.posts.On')), 1)]), _: 1 },
                                            8,
                                            ['disabled']
                                        )),
                                        [[c]]
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ['content']
                        ),
                        a(
                            i,
                            { content: s.t('posts.posts.Delete'), placement: 'top' },
                            {
                                default: n(() => [
                                    w(
                                        (u(),
                                        _(
                                            r,
                                            {
                                                disabled: !(s.baTable.table.selection.length > 0),
                                                class: 'table-header-operate',
                                                type: 'danger',
                                                onClick: s.onBatchDelete,
                                            },
                                            {
                                                default: n(() => [a(l, { name: 'fa fa-trash' }), T('span', W, D(s.t('posts.posts.Delete')), 1)]),
                                                _: 1,
                                            },
                                            8,
                                            ['disabled']
                                        )),
                                        [[c]]
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ['content']
                        ),
                    ]),
                    _: 1,
                },
                8,
                ['quick-search-placeholder']
            ),
            b(' 表格 '),
            a(s.Table, { ref: 'tableRef' }, null, 512),
            b(' 帖子详情弹窗 '),
            a(s.DetailDialog),
            b(' 下架弹窗 '),
            a(s.OffDialog),
        ])
    )
}
const ae = F(L, [
    ['render', X],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/posts/posts/index.vue'],
])
export { ae as default }
