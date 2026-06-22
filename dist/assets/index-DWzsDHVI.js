import { e as c, v as f, p as b, au as m, C as _, m as A, o as u, h, O as D, W as l, l as i } from './vue-Rh7pEvFB.js'
import { b as g, T, a as k } from './index-cU5Tpy6g.js'
import { a4 as w, _ as v } from './index-BfqXFxxp.js'
import { u as y, A as C } from './auditDialog-D2arfMh1.js'
import './index-BL7XGxgx.js'
import './marked.esm-GmWPvxak.js'
const x = c({
        name: 'posts/audit',
        __name: 'index',
        setup(d, { expose: n }) {
            n()
            const { t: e } = f.useI18n(),
                o = b()
            let r = [
                {
                    render: 'tipButton',
                    name: 'goAudit',
                    title: e('posts.postAuditDrafts.Go Audit'),
                    text: e('posts.postAuditDrafts.Go Audit'),
                    type: 'primary',
                    icon: 'fa fa-eye',
                    class: 'table-row-audit',
                    disabledTip: !1,
                    click: (a) => {
                        s(a)
                    },
                },
            ]
            const t = new g(
                    new w(y),
                    {
                        pk: 'post_id',
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('posts.postAuditDrafts.Post ID'), prop: 'post_id', align: 'center', operator: '=', width: 90 },
                            {
                                label: e('posts.postAuditDrafts.Content Type'),
                                prop: 'post_type',
                                align: 'center',
                                width: 100,
                                render: 'tag',
                                replaceValue: { 1: e('posts.postAuditDrafts.Topic'), 2: e('posts.postAuditDrafts.Resource') },
                                comSearchRender: 'select',
                                custom: { 1: '', 2: 'warning' },
                            },
                            {
                                label: e('posts.postAuditDrafts.Author Info'),
                                prop: 'user_nickname',
                                align: 'center',
                                operator: 'LIKE',
                                width: 150,
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('posts.postAuditDrafts.Draft Title'),
                                prop: 'title',
                                align: 'left',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('posts.postAuditDrafts.Version'),
                                prop: 'version',
                                align: 'center',
                                operator: !1,
                                width: 80,
                                formatter: (a) => 'v' + a.version,
                            },
                            {
                                label: e('posts.postAuditDrafts.Submit Time'),
                                prop: 'update_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            {
                                label: e('posts.postAuditDrafts.Status'),
                                prop: 'audit_status',
                                align: 'center',
                                width: 100,
                                render: 'tag',
                                replaceValue: {
                                    1: e('posts.postAuditDrafts.Pending'),
                                    2: e('posts.postAuditDrafts.Approved'),
                                    3: e('posts.postAuditDrafts.Rejected'),
                                },
                                comSearchRender: 'select',
                                custom: { 1: 'warning', 2: 'success', 3: 'danger' },
                            },
                            { label: e('posts.postAuditDrafts.Operate'), align: 'center', width: '130', render: 'buttons', buttons: r, operator: !1 },
                        ],
                        dblClickNotEditColumn: ['all'],
                    },
                    {},
                    {}
                ),
                s = (a) => {
                    t.runBefore('openAuditDialog', { row: a }) !== !1 &&
                        ((t.form.operate = 'Info'),
                        (t.form.loading = !0),
                        (t.form.items = { post_id: a.post_id }),
                        (t.form.extend = {}),
                        t.runAfter('openAuditDialog', { row: a }))
                }
            m('baTable', t),
                _(() => {
                    var a
                    t.mount(),
                        (a = t.getIndex()) == null ||
                            a.then(() => {
                                t.table.showComSearch = !0
                            })
                })
            const p = {
                t: e,
                tableRef: o,
                get optButtons() {
                    return r
                },
                set optButtons(a) {
                    r = a
                },
                baTable: t,
                openAuditDialog: s,
                Table: k,
                TableHeader: T,
                AuditDialog: C,
            }
            return Object.defineProperty(p, '__isScriptSetup', { enumerable: !1, value: !0 }), p
        },
    }),
    B = { class: 'default-main ba-table-box' }
function S(d, n, e, o, r, t) {
    const s = A('el-alert')
    return (
        u(),
        h('div', B, [
            o.baTable.table.remark
                ? (u(), D(s, { key: 0, class: 'ba-table-alert', title: o.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : l('v-if', !0),
            l(' 表格顶部菜单 '),
            i(
                o.TableHeader,
                {
                    buttons: ['refresh', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': o.t('Quick search placeholder', { fields: o.t('posts.postAuditDrafts.Draft Title') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            l(' 表格 '),
            i(o.Table, { ref: 'tableRef' }, null, 512),
            l(' 审核详情弹窗 '),
            i(o.AuditDialog),
        ])
    )
}
const j = v(x, [
    ['render', S],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/posts/audit/index.vue'],
])
export { j as default }
