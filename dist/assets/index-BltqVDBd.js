import {
    e as B,
    p as C,
    v as F,
    C as R,
    au as D,
    m as d,
    X as E,
    o as p,
    h as _,
    O as k,
    W as s,
    l,
    P as n,
    _ as T,
    k as x,
    U as b,
    Z as I,
    Y as P,
    V as S,
} from './vue-Rh7pEvFB.js'
import { d as V, b as N, T as O, a as U } from './index-tUPoOQPz.js'
import { c as j, a4 as q, _ as H } from './index-BBRbF7Py.js'
import L from './popupForm-BcYi6OSZ.js'
import G from './info-DNcJ8Qgm.js'
import './index-pVkqPv71.js'
import './index--JHPdKE_.js'
import './video-DOmNtNHZ.js'
import './play-CnVQomD0.js'
import './validate-D9h_hteB.js'
const A = '/admin/shop.user/'
function z(m) {
    return j({ url: A + 'info', method: 'get', params: { id: m } })
}
const J = B({
        name: 'shop/user',
        __name: 'index',
        setup(m, { expose: i }) {
            i()
            const v = C(''),
                { t: e } = F.useI18n(),
                w = C(),
                f = (a) => {
                    console.log('onRestore called with:', a), t.onTableHeaderAction('refresh', {})
                },
                h = () => {
                    f(t.getSelectionIds())
                }
            let r = [
                {
                    render: 'tipButton',
                    name: 'info',
                    title: 'Info',
                    text: '',
                    type: 'primary',
                    icon: 'fa fa-info-circle',
                    class: 'table-row-info',
                    disabledTip: !1,
                    click: (a) => {
                        c(a[t.table.pk])
                    },
                },
            ]
            r = r.concat(V(['edit', 'delete']))
            const t = new N(
                    new q(A),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                            {
                                label: e('shop.user.nickname'),
                                prop: 'nickname',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            { label: e('shop.user.head portrait'), prop: 'avatar', align: 'center', render: 'image', operator: !1 },
                            {
                                label: e('shop.user.Gender'),
                                prop: 'gender',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'info', 1: '', 2: 'success' },
                                replaceValue: { 0: e('Unknown'), 1: e('shop.user.male'), 2: e('shop.user.female') },
                            },
                            { label: e('shop.user.Province'), prop: 'province', align: 'center', operator: !1 },
                            { label: e('shop.user.City'), prop: 'city', align: 'center', operator: !1 },
                            {
                                label: e('shop.user.Introduction'),
                                prop: 'introduction',
                                showOverflowTooltip: !0,
                                align: 'center',
                                operator: !1,
                                width: 200,
                            },
                            { label: e('shop.user.Job occupation'), prop: 'job_type', align: 'center', operator: !1, render: 'tags' },
                            {
                                label: e('shop.user.Operational Star'),
                                prop: 'profile.operational_star',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'danger', 1: 'success' },
                                replaceValue: { 0: e('no'), 1: e('yes') },
                            },
                            {
                                label: e('shop.user.Take Orders'),
                                prop: 'profile.is_take_orders',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'danger', 1: 'success' },
                                replaceValue: { 0: e('no'), 1: e('yes') },
                            },
                            {
                                label: e('shop.user.Review Result'),
                                prop: 'profile.status',
                                align: 'center',
                                render: 'tag',
                                custom: { pending: 'warning', disable: 'danger', enable: 'success' },
                                replaceValue: {
                                    pending: e('shop.user.Pending approval'),
                                    disable: e('shop.user.Not approved'),
                                    enable: e('shop.user.Approved'),
                                },
                            },
                            {
                                label: e('shop.user.Registration time'),
                                prop: 'create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            {
                                label: e('shop.user.Application time'),
                                prop: 'profile.create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            {
                                label: e('State'),
                                prop: 'status',
                                align: 'center',
                                render: 'tag',
                                custom: { disable: 'danger', enable: 'success' },
                                replaceValue: { disable: e('Disable'), enable: e('Enable') },
                            },
                            { label: e('Operate'), align: 'center', width: '120', render: 'buttons', buttons: r, operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0],
                    },
                    {
                        defaultItems: {
                            gender: 0,
                            status: 'pending',
                            province_code: null,
                            city_code: null,
                            district_code: null,
                            introduction: '',
                            profile: { is_take_orders: 1, operational_star: 0, readme: '', media_video: '', media_img: '' },
                        },
                    },
                    { onTableDblclick: ({ row: a }) => (c(a[t.table.pk]), !1) }
                ),
                c = (a) => {
                    if (t.runBefore('infoButtonClick', { id: a }) !== !1)
                        return (
                            (t.form.extend.info = {}),
                            (t.form.operate = 'Info'),
                            (t.form.loading = !0),
                            z(a)
                                .then((o) => {
                                    ;(t.form.extend.info = o.data.row), (t.form.items = o.data.row), (t.form.loading = !1), t.toggleForm('review')
                                })
                                .catch((o) => {
                                    console.log('info', o), t.toggleForm()
                                })
                                .finally(() => {
                                    t.table.loading = !1
                                })
                        )
                },
                g = () => {
                    t.form.loading = !0
                    let a = t.getComSearchData()
                    a.push({ field: 'profile.shop_user_id', val: '', operator: 'NULL', render: 'tag' }),
                        t.api
                            .index({ search: a })
                            .then((o) => {
                                ;(t.table.data = o.data.list), (t.table.total = o.data.total), (t.table.remark = o.data.remark)
                            })
                            .finally(() => {
                                t.table.loading = !1
                            })
                }
            R(() => {
                var a
                t.mount(),
                    (a = t.getIndex()) == null ||
                        a.then(() => {
                            t.table.showComSearch = !0
                        })
            }),
                D('baTable', t)
            const u = {
                value: v,
                t: e,
                tableRef: w,
                onRestore: f,
                onRestoreAction: h,
                get optButtons() {
                    return r
                },
                set optButtons(a) {
                    r = a
                },
                baTable: t,
                infoButtonClick: c,
                noProfileClick: g,
                PopupForm: L,
                Table: U,
                TableHeader: O,
                InfoDialog: G,
            }
            return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
        },
    }),
    K = { class: 'default-main ba-table-box' },
    M = { class: 'table-header-operate-text' },
    Q = { class: 'table-header-operate-text' }
function W(m, i, v, e, w, f) {
    const h = d('el-alert'),
        r = d('el-button'),
        t = d('el-tooltip'),
        c = d('el-link'),
        g = d('el-table-column'),
        u = E('blur')
    return (
        p(),
        _('div', K, [
            e.baTable.table.remark
                ? (p(), k(h, { key: 0, class: 'ba-table-alert', title: e.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : s('v-if', !0),
            s(' 表格顶部菜单 '),
            s(" 'add', 'edit', 'delete', "),
            l(
                e.TableHeader,
                {
                    buttons: ['refresh', 'add', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': e.t('Quick search placeholder', {
                        fields: e.t('shop.user.User name') + '/' + e.t('shop.user.nickname'),
                    }),
                },
                {
                    refreshAppend: n(() => [
                        s(` <el-tooltip placement="top" :content="t('shop.user.Pending approval')">
                    <el-button v-blur @click="approvalClick.call()" class="table-header-operate" type="success">
                        <span class="table-header-operate-text">{{ t('shop.user.Pending approval') }}</span>
                    </el-button>
                </el-tooltip>
                <el-tooltip placement="top" :content="t('shop.user.Approved')">
                    <el-button v-blur @click="onAction('refresh', { loading: true })" class="table-header-operate" type="danger">
                        <span class="table-header-operate-text">{{ t('shop.user.Approved') }}</span>
                    </el-button>
                </el-tooltip> `),
                        l(
                            t,
                            { placement: 'top', content: e.t('shop.user.Registration submitted') },
                            {
                                default: n(() => [
                                    T(
                                        (p(),
                                        k(
                                            r,
                                            {
                                                onClick: i[0] || (i[0] = (a) => e.baTable.onTableHeaderAction('refresh', { loading: !0 })),
                                                class: 'table-header-operate',
                                                type: 'danger',
                                            },
                                            { default: n(() => [x('span', M, b(e.t('shop.user.Registration submitted')), 1)]), _: 1 }
                                        )),
                                        [[u]]
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ['content']
                        ),
                        l(
                            t,
                            { placement: 'top', content: e.t('shop.user.Registration not submitted') },
                            {
                                default: n(() => [
                                    T(
                                        (p(),
                                        k(
                                            r,
                                            { onClick: i[1] || (i[1] = (a) => e.noProfileClick()), class: 'table-header-operate', type: 'danger' },
                                            { default: n(() => [x('span', Q, b(e.t('shop.user.Registration not submitted')), 1)]), _: 1 }
                                        )),
                                        [[u]]
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
            s(' 表格 '),
            s(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            l(
                e.Table,
                { ref: 'tableRef' },
                {
                    topic: n(() => [
                        l(
                            g,
                            { label: '话题', width: '160', align: 'left', 'header-align': 'center' },
                            {
                                default: n((a) => [
                                    (p(!0),
                                    _(
                                        I,
                                        null,
                                        P(
                                            a.row.topic,
                                            (o, y) => (
                                                p(),
                                                _('p', { key: y, align: 'left', 'vertical-align': 'top' }, [
                                                    l(c, { type: 'primary' }, { default: n(() => [S(b(y + 1) + '.' + b(o.title), 1)]), _: 2 }, 1024),
                                                ])
                                            )
                                        ),
                                        128
                                    )),
                                ]),
                                _: 1,
                            }
                        ),
                    ]),
                    _: 1,
                },
                512
            ),
            l(e.InfoDialog),
            s(' 表单 '),
            l(e.PopupForm),
        ])
    )
}
const ne = H(J, [
    ['render', W],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/user/index.vue'],
])
export { ne as default }
