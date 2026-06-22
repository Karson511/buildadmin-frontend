import { e as c, v as p, au as m, m as b, o as u, h, O as _, W as t, l as n } from './vue-Rh7pEvFB.js'
import { d as f, b as g, T as k, a as E } from './index-cU5Tpy6g.js'
import y from './popupForm-BZ0zDDX_.js'
import { w as F, a4 as T, _ as v } from './index-BfqXFxxp.js'
import './index-BL7XGxgx.js'
import './validate-CJqnmgV4.js'
import './index-B8bcfeaY.js'
const w = c({
        name: 'auth/admin',
        __name: 'index',
        setup(s, { expose: i }) {
            i()
            const { t: e } = p.useI18n(),
                a = F(),
                o = f(['edit', 'delete'])
            o[1].display = (d) => d.id != a.id
            const r = new g(
                new T('/admin/auth.Admin/'),
                {
                    column: [
                        { type: 'selection', align: 'center', operator: !1 },
                        { label: e('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                        {
                            label: e('auth.admin.username'),
                            prop: 'username',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                        },
                        {
                            label: e('auth.admin.nickname'),
                            prop: 'nickname',
                            align: 'center',
                            operator: 'LIKE',
                            operatorPlaceholder: e('Fuzzy query'),
                        },
                        { label: e('auth.admin.grouping'), prop: 'group_name_arr', align: 'center', operator: !1, render: 'tags' },
                        { label: e('auth.admin.head portrait'), prop: 'avatar', align: 'center', render: 'image', operator: !1 },
                        { label: e('auth.admin.mailbox'), prop: 'email', align: 'center', operator: 'LIKE', operatorPlaceholder: e('Fuzzy query') },
                        { label: e('auth.admin.mobile'), prop: 'mobile', align: 'center', operator: 'LIKE', operatorPlaceholder: e('Fuzzy query') },
                        {
                            label: e('auth.admin.Last login'),
                            prop: 'last_login_time',
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
                        {
                            label: e('State'),
                            prop: 'status',
                            align: 'center',
                            render: 'tag',
                            custom: { 0: 'danger', 1: 'success' },
                            replaceValue: { 0: e('Disable'), 1: e('Enable') },
                        },
                        { label: e('Operate'), align: 'center', width: '100', render: 'buttons', buttons: o, operator: !1 },
                    ],
                    dblClickNotEditColumn: [void 0, 'status'],
                },
                { defaultItems: { status: '1' } }
            )
            m('baTable', r), r.mount(), r.getIndex()
            const l = { t: e, adminInfo: a, optButtons: o, baTable: r, PopupForm: y, Table: E, TableHeader: k }
            return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l
        },
    }),
    C = { class: 'default-main ba-table-box' }
function I(s, i, e, a, o, r) {
    const l = b('el-alert')
    return (
        u(),
        h('div', C, [
            a.baTable.table.remark
                ? (u(), _(l, { key: 0, class: 'ba-table-alert', title: a.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : t('v-if', !0),
            t(' 表格顶部菜单 '),
            n(
                a.TableHeader,
                {
                    buttons: ['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': a.t('Quick search placeholder', {
                        fields: a.t('auth.admin.username') + '/' + a.t('auth.admin.nickname'),
                    }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            t(' 表格 '),
            t(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            n(a.Table),
            t(' 表单 '),
            n(a.PopupForm),
        ])
    )
}
const L = v(w, [
    ['render', I],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/auth/admin/index.vue'],
])
export { L as default }
