import { e as b, v as d, p as m, au as f, m as h, o as i, h as _, O as y, W as l, l as s } from './vue-Rh7pEvFB.js'
import { b as T, d as k, T as g, a as j } from './index-cU5Tpy6g.js'
import { a4 as v, _ as F } from './index-BfqXFxxp.js'
import E from './popupForm-CgJRamGu.js'
import './index-BL7XGxgx.js'
const w = '/admin/shop.jobType/',
    C = b({
        name: 'shop/jobType',
        __name: 'index',
        setup(u, { expose: c }) {
            c()
            const { t: e } = d.useI18n(),
                o = m(),
                a = new T(
                    new v(w),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                            { label: e('shop.jobType.User ID'), prop: 'id', align: 'center', width: 100 },
                            {
                                label: e('shop.jobType.User name'),
                                prop: 'username',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('shop.jobType.nickname'),
                                prop: 'nickname',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('shop.jobType.serviceType'),
                                prop: 'service_type',
                                align: 'center',
                                render: 'tags',
                                operator: !1,
                                formatter: (r) => (r.service_type || []).map((t) => t.name),
                            },
                            {
                                label: e('shop.jobType.JobType'),
                                prop: 'job_type',
                                align: 'center',
                                render: 'tags',
                                operator: !1,
                                formatter: (r) => (r.job_type || []).map((t) => t.name),
                            },
                            { label: e('Operate'), align: 'center', width: '120', render: 'buttons', buttons: k(['edit', 'delete']), operator: !1 },
                        ],
                        dblClickNotEditColumn: ['all'],
                    },
                    {},
                    {
                        requestEdit: ({ id: r }) => (
                            (a.form.loading = !0),
                            (a.form.items = {}),
                            a.api
                                .edit({ [a.table.pk]: r })
                                .then((t) => {
                                    const p = t.data || {}
                                    a.form.items = p.row || p.data || p
                                })
                                .catch(() => {
                                    a.toggleForm()
                                })
                                .finally(() => {
                                    a.form.loading = !1
                                }),
                            !1
                        ),
                    }
                )
            a.mount(), a.getIndex(), f('baTable', a)
            const n = { t: e, tableRef: o, baTable: a, PopupForm: E, Table: j, TableHeader: g }
            return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
        },
    }),
    x = { class: 'default-main ba-table-box' }
function I(u, c, e, o, a, n) {
    const r = h('el-alert')
    return (
        i(),
        _('div', x, [
            o.baTable.table.remark
                ? (i(), y(r, { key: 0, class: 'ba-table-alert', title: o.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : l('v-if', !0),
            l(' 表格顶部菜单 '),
            s(
                o.TableHeader,
                {
                    buttons: ['refresh', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': o.t('Quick search placeholder', {
                        fields: o.t('shop.jobType.User name') + '/' + o.t('shop.jobType.nickname'),
                    }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            l(' 表格 '),
            l(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            s(o.Table, { ref: 'tableRef' }, null, 512),
            l(' 表单 '),
            s(o.PopupForm),
        ])
    )
}
const A = F(C, [
    ['render', I],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/jobType/index.vue'],
])
export { A as default }
