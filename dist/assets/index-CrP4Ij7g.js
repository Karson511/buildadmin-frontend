import { e as k, p as g, v as C, au as y, C as T, m as v, o as m, h as w, O as _, W as l, l as c } from './vue-Rh7pEvFB.js'
import F from './popupForm-CIf8u47-.js'
import { c as A, w as E, a4 as I, a3 as R, y as S, _ as K } from './index-BfqXFxxp.js'
import { b as O, d as B, a as D, T as G } from './index-cU5Tpy6g.js'
import './index-B8bcfeaY.js'
import './validate-CJqnmgV4.js'
import './index-BL7XGxgx.js'
function j() {
    return A({ url: '/admin/auth.Rule/index', method: 'get' })
}
const q = k({
        name: 'auth/group',
        __name: 'index',
        setup(x, { expose: f }) {
            f()
            const s = g(),
                t = g(),
                { t: r } = C.useI18n(),
                p = E(),
                e = new O(
                    new I('/admin/auth.Group/'),
                    {
                        expandAll: !0,
                        dblClickNotEditColumn: [void 0],
                        column: [
                            { type: 'selection', align: 'center' },
                            { label: r('auth.group.Group name'), prop: 'name', align: 'left', width: '200' },
                            { label: r('auth.group.jurisdiction'), prop: 'rules', align: 'center' },
                            {
                                label: r('State'),
                                prop: 'status',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'danger', 1: 'success' },
                                replaceValue: { 0: r('Disable'), 1: r('Enable') },
                            },
                            { label: r('Update time'), prop: 'update_time', align: 'center', width: '160', render: 'datetime' },
                            { label: r('Create time'), prop: 'create_time', align: 'center', width: '160', render: 'datetime' },
                            { label: r('Operate'), align: 'center', width: '130', render: 'buttons', buttons: B(['edit', 'delete']) },
                        ],
                    },
                    { defaultItems: { status: '1' } },
                    {
                        onSubmit: ({ formEl: a, operate: o, items: n }) => {
                            let u = () => {
                                ;(e.form.submitLoading = !0),
                                    e.api
                                        .postData(o, { ...n, rules: s.value.getCheckeds() })
                                        .then((d) => {
                                            var h
                                            e.onTableHeaderAction('refresh', {}),
                                                (e.form.submitLoading = !1),
                                                (h = e.form.operateIds) == null || h.shift(),
                                                e.form.operateIds.length > 0 ? e.toggleForm('Edit', e.form.operateIds) : e.toggleForm(),
                                                e.runAfter('onSubmit', { res: d })
                                        })
                                        .catch(() => {
                                            e.form.submitLoading = !1
                                        })
                            }
                            return (
                                a
                                    ? ((e.form.ref = a),
                                      a.validate((d) => {
                                          d && u()
                                      }))
                                    : u(),
                                !1
                            )
                        },
                        onTableDblclick: ({ row: a }) => e.table.extend.adminGroup.indexOf(a.id) === -1,
                    },
                    {
                        getIndex: ({ res: a }) => {
                            e.table.extend.adminGroup = a.data.group
                            let o = R(e.table.column, 'render', 'buttons')
                            e.table.column[o].buttons.forEach((n) => {
                                n.display = (u) => a.data.group.indexOf(u.id) === -1
                            })
                        },
                        toggleForm({ operate: a }) {
                            a == 'Add' && i()
                        },
                        requestEdit() {
                            i()
                        },
                    }
                ),
                i = () => {
                    j().then((a) => {
                        if (((e.form.extend.menuRules = a.data.list), e.form.items.rules && e.form.items.rules.length))
                            if (e.form.items.rules.includes('*')) {
                                let o = []
                                for (const n in e.form.extend.menuRules) o.push(e.form.extend.menuRules[n].id)
                                e.form.extend.defaultCheckedKeys = o
                            } else e.form.extend.defaultCheckedKeys = e.form.items.rules
                        else e.form.extend.defaultCheckedKeys = []
                        e.form.extend.treeKey = S()
                    })
                }
            y('baTable', e),
                T(() => {
                    ;(e.table.ref = t.value), e.mount(), e.getIndex()
                })
            const b = { formRef: s, tableRef: t, t: r, adminInfo: p, baTable: e, menuRuleTreeUpdate: i, PopupForm: F, TableHeader: G, Table: D }
            return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
        },
    }),
    N = { class: 'default-main ba-table-box' }
function H(x, f, s, t, r, p) {
    const e = v('el-alert')
    return (
        m(),
        w('div', N, [
            t.adminInfo.super
                ? l('v-if', !0)
                : (m(),
                  _(
                      e,
                      {
                          key: 0,
                          class: 'ba-table-alert',
                          title: t.t('auth.group.Manage subordinate role groups here'),
                          type: 'info',
                          'show-icon': '',
                      },
                      null,
                      8,
                      ['title']
                  )),
            t.baTable.table.remark
                ? (m(), _(e, { key: 1, class: 'ba-table-alert', title: t.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : l('v-if', !0),
            l(' 表格顶部菜单 '),
            c(
                t.TableHeader,
                {
                    buttons: ['refresh', 'add', 'edit', 'delete', 'unfold', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': t.t('Quick search placeholder', { fields: t.t('auth.group.GroupName') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            l(' 表格 '),
            l(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            c(t.Table, { ref: 'tableRef', pagination: !1 }, null, 512),
            l(' 表单 '),
            c(t.PopupForm, { ref: 'formRef' }, null, 512),
        ])
    )
}
const z = K(q, [
    ['render', H],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/auth/group/index.vue'],
])
export { z as default }
