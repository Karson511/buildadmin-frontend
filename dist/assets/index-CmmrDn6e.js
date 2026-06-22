import {
    e as k,
    v,
    p as T,
    au as x,
    C,
    m as f,
    o as i,
    h as m,
    O as p,
    W as u,
    l as d,
    P as o,
    V as b,
    U as _,
    Z as I,
    Y as S,
} from './vue-Rh7pEvFB.js'
import { b as B, T as z, a as A } from './index-cU5Tpy6g.js'
import { u as F, e as N, I as E } from './info-CX2icM6G.js'
import { a4 as P, _ as D } from './index-BfqXFxxp.js'
import './index-BL7XGxgx.js'
const V = k({
        name: 'user/audit',
        __name: 'index',
        setup(w, { expose: g }) {
            g()
            const { t: a } = v.useI18n(),
                r = T(),
                h = (e) => ({ 1: 'warning', 2: 'warning', 3: 'success', 4: 'danger', 5: 'info' })[e] || 'info'
            let c = [
                {
                    render: 'tipButton',
                    name: 'info',
                    title: 'Info',
                    text: a('user.audit.Audit detail'),
                    type: 'primary',
                    icon: 'fa fa-info-circle',
                    class: 'table-row-info',
                    disabledTip: !1,
                    click: (e) => {
                        n(e.audit_no)
                    },
                },
            ]
            const t = new B(
                    new P(F),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: a('Id'), prop: 'id', align: 'center', operator: !1, width: 70 },
                            {
                                label: a('user.audit.Audit no'),
                                prop: 'audit_no',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: a('Fuzzy query'),
                                width: 200,
                            },
                            {
                                label: a('user.audit.Nickname'),
                                prop: 'user.nickname',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: a('Fuzzy query'),
                            },
                            {
                                label: a('user.audit.Mobile'),
                                prop: 'mobile',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: a('Fuzzy query'),
                                width: 130,
                            },
                            {
                                label: a('user.audit.Version'),
                                prop: 'version',
                                align: 'center',
                                render: 'slot',
                                slotName: 'version',
                                operator: !1,
                                width: 90,
                            },
                            { render: 'slot', slotName: 'pendingFields', operator: !1 },
                            {
                                label: a('user.audit.Status'),
                                prop: 'status',
                                align: 'center',
                                render: 'slot',
                                slotName: 'auditStatus',
                                comSearchRender: 'select',
                                replaceValue: {
                                    0: a('user.audit.All'),
                                    1: a('user.audit.Pending'),
                                    2: a('user.audit.Partial approved'),
                                    3: a('user.audit.Approved'),
                                    4: a('user.audit.Rejected'),
                                    5: a('user.audit.Cancelled'),
                                },
                            },
                            {
                                label: a('user.audit.Modify time'),
                                prop: 'create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            { label: a('Operate'), align: 'center', width: '140', render: 'buttons', buttons: c, operator: !1 },
                        ],
                        dblClickNotEditColumn: ['all'],
                    },
                    {},
                    { onTableDblclick: ({ row: e }) => (n(e.audit_no), !1) }
                ),
                n = (e) => {
                    t.runBefore('infoButtonClick', { audit_no: e }) !== !1 &&
                        ((t.form.operate = 'Info'),
                        (t.form.loading = !0),
                        N(e)
                            .then((l) => {
                                ;(t.form.items = l.data.master),
                                    (t.form.extend.master = l.data.master),
                                    (t.form.extend.details = l.data.details),
                                    (t.form.extend.user = l.data.user),
                                    (t.form.loading = !1),
                                    t.toggleForm('info', [e])
                            })
                            .catch((l) => {
                                console.log('info', l), t.toggleForm()
                            })
                            .finally(() => {
                                t.table.loading = !1
                            }))
                }
            x('baTable', t),
                C(() => {
                    var e
                    t.mount(),
                        t.setComSearchData({ status: '0' }),
                        (e = t.getIndex()) == null ||
                            e.then(() => {
                                t.table.showComSearch = !0
                            })
                })
            const s = {
                t: a,
                tableRef: r,
                statusTagType: h,
                get optButtons() {
                    return c
                },
                set optButtons(e) {
                    c = e
                },
                baTable: t,
                infoButtonClick: n,
                Table: A,
                TableHeader: z,
                InfoDialog: E,
            }
            return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
        },
    }),
    q = { class: 'default-main ba-table-box' },
    R = { key: 1, class: 'text-gray' }
function j(w, g, a, r, h, c) {
    const t = f('el-alert'),
        n = f('el-tag'),
        s = f('el-table-column')
    return (
        i(),
        m('div', q, [
            r.baTable.table.remark
                ? (i(), p(t, { key: 0, class: 'ba-table-alert', title: r.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : u('v-if', !0),
            u(' 表格顶部菜单 '),
            d(
                r.TableHeader,
                {
                    buttons: ['refresh', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': r.t('Quick search placeholder', { fields: r.t('user.audit.Audit no') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            u(' 表格 '),
            d(
                r.Table,
                { ref: 'tableRef' },
                {
                    version: o(() => [
                        d(
                            s,
                            { label: r.t('user.audit.Version'), width: '90', align: 'center' },
                            {
                                default: o((e) => [
                                    e.row.version
                                        ? (i(),
                                          p(
                                              n,
                                              { key: 0, size: 'small', type: 'info' },
                                              { default: o(() => [b('v' + _(e.row.version), 1)]), _: 2 },
                                              1024
                                          ))
                                        : u('v-if', !0),
                                ]),
                                _: 1,
                            },
                            8,
                            ['label']
                        ),
                    ]),
                    pendingFields: o(() => [
                        d(
                            s,
                            { label: r.t('user.audit.Pending fields'), align: 'left', 'header-align': 'center' },
                            {
                                default: o((e) => [
                                    e.row.pending_fields && e.row.pending_fields.length
                                        ? (i(!0),
                                          m(
                                              I,
                                              { key: 0 },
                                              S(
                                                  e.row.pending_fields,
                                                  (l, y) => (
                                                      i(),
                                                      p(
                                                          n,
                                                          { key: y, class: 'pending-field-tag', type: 'warning', size: 'small' },
                                                          { default: o(() => [b(_(l), 1)]), _: 2 },
                                                          1024
                                                      )
                                                  )
                                              ),
                                              128
                                          ))
                                        : (i(), m('span', R, '-')),
                                ]),
                                _: 1,
                            },
                            8,
                            ['label']
                        ),
                    ]),
                    auditStatus: o(() => [
                        d(
                            s,
                            { label: r.t('user.audit.Status'), width: '100', align: 'center' },
                            {
                                default: o((e) => [
                                    e.row.status_text
                                        ? (i(),
                                          p(
                                              n,
                                              { key: 0, type: r.statusTagType(e.row.status), size: 'small' },
                                              { default: o(() => [b(_(e.row.status_text), 1)]), _: 2 },
                                              1032,
                                              ['type']
                                          ))
                                        : u('v-if', !0),
                                ]),
                                _: 1,
                            },
                            8,
                            ['label']
                        ),
                    ]),
                    _: 1,
                },
                512
            ),
            u(' 审核详情弹窗 '),
            d(r.InfoDialog),
        ])
    )
}
const U = D(V, [
    ['render', j],
    ['__scopeId', 'data-v-f2c2d2ab'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/user/audit/index.vue'],
])
export { U as default }
