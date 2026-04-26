import { e as g, v as k, p as b, au as C, C as x, m as T, o as h, h as v, O as F, W as l, l as d } from './vue-Rh7pEvFB.js'
import y from './popupForm-CikN4X3Y.js'
import { g as E } from './group-C0R2CYFY.js'
import { a4 as w, y as R, _ as I } from './index-C3vonoRT.js'
import { b as A, d as S, a as N, T as q } from './index-DQwP9Y7u.js'
import './index-BC54TMpd.js'
import './validate-Dr-o2ZDb.js'
import './index-CK3pnx59.js'
const B = g({
        name: 'user/group',
        __name: 'index',
        setup(_, { expose: m }) {
            m()
            const { t } = k.useI18n(),
                r = b(),
                u = b(),
                e = new A(
                    new w('/admin/user.Group/'),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: t('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: t('Id'), width: 70 },
                            {
                                label: t('user.group.Group name'),
                                prop: 'name',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: t('Fuzzy query'),
                            },
                            {
                                label: t('State'),
                                prop: 'status',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'danger', 1: 'success' },
                                replaceValue: { 0: t('Disable'), 1: t('Enable') },
                            },
                            {
                                label: t('Update time'),
                                prop: 'update_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            {
                                label: t('Create time'),
                                prop: 'create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            { label: t('Operate'), align: 'center', width: '130', render: 'buttons', buttons: S(['edit', 'delete']), operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0],
                    },
                    { defaultItems: { status: '1' } },
                    {
                        onSubmit: ({ formEl: a, operate: s, items: n }) => {
                            let p = () => {
                                ;(e.form.submitLoading = !0),
                                    e.api
                                        .postData(s, { ...n, rules: u.value.getCheckeds() })
                                        .then((i) => {
                                            var f
                                            e.onTableHeaderAction('refresh', {}),
                                                (e.form.submitLoading = !1),
                                                (f = e.form.operateIds) == null || f.shift(),
                                                e.form.operateIds.length > 0 ? e.toggleForm('Edit', e.form.operateIds) : e.toggleForm(),
                                                e.runAfter('onSubmit', { res: i })
                                        })
                                        .catch(() => {
                                            e.form.submitLoading = !1
                                        })
                            }
                            return (
                                a
                                    ? ((e.form.ref = a),
                                      a.validate((i) => {
                                          i && p()
                                      }))
                                    : p(),
                                !1
                            )
                        },
                    },
                    {
                        toggleForm({ operate: a }) {
                            a == 'Add' && o()
                        },
                        requestEdit() {
                            o()
                        },
                    }
                ),
                o = () => {
                    E().then((a) => {
                        if (((e.form.extend.menuRules = a.data.list), e.form.items.rules && e.form.items.rules.length))
                            if (e.form.items.rules.includes('*')) {
                                let s = []
                                for (const n in e.form.extend.menuRules) s.push(e.form.extend.menuRules[n].id)
                                e.form.extend.defaultCheckedKeys = s
                            } else e.form.extend.defaultCheckedKeys = e.form.items.rules
                        else e.form.extend.defaultCheckedKeys = []
                        e.form.extend.treeKey = R()
                    })
                }
            C('baTable', e),
                x(() => {
                    ;(e.table.ref = r.value), e.mount(), e.getIndex()
                })
            const c = { t, tableRef: r, formRef: u, baTable: e, menuRuleTreeUpdate: o, PopupForm: y, TableHeader: q, Table: N }
            return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
        },
    }),
    G = { class: 'default-main ba-table-box' }
function K(_, m, t, r, u, e) {
    const o = T('el-alert')
    return (
        h(),
        v('div', G, [
            r.baTable.table.remark
                ? (h(), F(o, { key: 0, class: 'ba-table-alert', title: r.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : l('v-if', !0),
            l(' 表格顶部菜单 '),
            d(
                r.TableHeader,
                {
                    buttons: ['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': r.t('Quick search placeholder', { fields: r.t('user.group.GroupName') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            l(' 表格 '),
            l(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            d(r.Table, { ref: 'tableRef' }, null, 512),
            l(' 表单 '),
            d(r.PopupForm, { ref: 'formRef' }, null, 512),
        ])
    )
}
const z = I(B, [
    ['render', K],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/user/group/index.vue'],
])
export { z as default }
