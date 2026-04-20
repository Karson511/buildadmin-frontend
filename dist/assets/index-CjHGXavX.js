import { e as c, v as p, p as d, au as b, m, o as s, h as _, O as f, W as t, l } from './vue-Rh7pEvFB.js'
import { b as g, d as h, T as k, a as E } from './index-1fitz5rj.js'
import y from './popupForm-BkgI8dXE.js'
import { a4 as F, _ as T } from './index-BinDduO1.js'
import './index-CY7HLGeR.js'
import './validate-CtRz3DDh.js'
import './index-DL4HVtqZ.js'
const v = c({
        name: 'user/user',
        __name: 'index',
        setup(u, { expose: n }) {
            n()
            const { t: e } = p.useI18n(),
                r = d(),
                a = new g(
                    new F('/admin/user.User/'),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                            {
                                label: e('user.user.User name'),
                                prop: 'username',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('user.user.nickname'),
                                prop: 'nickname',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('user.user.mobile'),
                                prop: 'mobile',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('user.user.grouping'),
                                prop: 'group.name',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                                render: 'tag',
                            },
                            { label: e('user.user.head portrait'), prop: 'avatar', align: 'center', render: 'image', operator: !1 },
                            {
                                label: e('user.user.Gender'),
                                prop: 'gender',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'info', 1: '', 2: 'success' },
                                replaceValue: { 0: e('Unknown'), 1: e('user.user.male'), 2: e('user.user.female') },
                            },
                            {
                                label: e('user.user.Last login IP'),
                                prop: 'last_login_ip',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                                render: 'tag',
                            },
                            {
                                label: e('user.user.Last login'),
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
                                custom: { disable: 'danger', enable: 'success' },
                                replaceValue: { disable: e('Disable'), enable: e('Enable') },
                            },
                            { label: e('Operate'), align: 'center', width: '100', render: 'buttons', buttons: h(['edit', 'delete']), operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0],
                    },
                    { defaultItems: { gender: 0, money: '0', score: '0', status: 'enable' } }
                )
            a.mount(), a.getIndex(), b('baTable', a)
            const o = { t: e, tableRef: r, baTable: a, PopupForm: y, Table: E, TableHeader: k }
            return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
        },
    }),
    w = { class: 'default-main ba-table-box' }
function C(u, n, e, r, a, o) {
    const i = m('el-alert')
    return (
        s(),
        _('div', w, [
            r.baTable.table.remark
                ? (s(), f(i, { key: 0, class: 'ba-table-alert', title: r.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : t('v-if', !0),
            t(' 表格顶部菜单 '),
            l(
                r.TableHeader,
                {
                    buttons: ['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': r.t('Quick search placeholder', {
                        fields: r.t('user.user.User name') + '/' + r.t('user.user.nickname'),
                    }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            t(' 表格 '),
            t(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            l(r.Table, { ref: 'tableRef' }, null, 512),
            t(' 表单 '),
            l(r.PopupForm),
        ])
    )
}
const S = T(v, [
    ['render', C],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/user/user/index.vue'],
])
export { S as default }
