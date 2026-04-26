var p = Object.defineProperty
var h = (s, i, e) => (i in s ? p(s, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (s[i] = e))
var l = (s, i, e) => (h(s, typeof i != 'symbol' ? i + '' : i, e), e)
import { e as b, v as y, p as f, au as _, C as g, m as x, o as u, h as F, O as v, W as n, l as d } from './vue-Rh7pEvFB.js'
import { b as E, d as k, T as w, a as D } from './index-DQwP9Y7u.js'
import { c as C, y as c, am as L, a4 as R, _ as S } from './index-C3vonoRT.js'
import T from './popupForm-8UENK5U_.js'
import './index-CK3pnx59.js'
import './index-BC54TMpd.js'
import './validate-Dr-o2ZDb.js'
const m = '/admin/security.SensitiveData/'
function q() {
    return C({ url: m + 'add', method: 'get' })
}
class z extends E {
    constructor(e, t, r = {}, a = {}, o = {}) {
        super(e, t, r, a, o)
        l(
            this,
            'requestEdit',
            (e) => (
                this.runBefore('requestEdit', { id: e }),
                (this.form.loading = !0),
                (this.form.items = {}),
                this.api.edit({ id: e }).then((t) => {
                    const r = [],
                        a = []
                    for (const o in t.data.row.data_fields) r.push(o), a.push({ name: o, value: t.data.row.data_fields[o] ?? '' })
                    ;(this.form.items.connection = t.data.row.connection ? t.data.row.connection : ''),
                        (this.form.extend.controllerList = t.data.controllers),
                        t.data.row.data_table &&
                            (this.onTableChange(t.data.row.data_table), this.form.extend.parentRef && this.form.extend.parentRef.setDataFields(a)),
                        (t.data.row.data_fields = r),
                        (this.form.loading = !1),
                        (this.form.items = t.data.row),
                        this.runAfter('requestEdit', { res: t })
                })
            )
        )
        l(this, 'onConnectionChange', () => {
            ;(this.form.extend.fieldList = {}),
                (this.form.extend.fieldSelect = {}),
                (this.form.extend.fieldSelectKey = c()),
                (this.form.items.data_table = ''),
                (this.form.items.data_fields = []),
                this.form.extend.parentRef && this.form.extend.parentRef.setDataFields([])
        })
        l(this, 'onTableChange', (e) => {
            ;(this.form.extend = Object.assign(this.form.extend, { fieldLoading: !0, fieldList: {}, fieldSelect: {}, fieldSelectKey: c() })),
                (this.form.items.data_fields = []),
                this.form.extend.parentRef && this.form.extend.parentRef.setDataFields([]),
                L(e, !0, this.form.items.connection).then((t) => {
                    ;(this.form.items.primary_key = t.data.pk), (this.form.defaultItems.primary_key = t.data.pk)
                    const r = {}
                    for (const a in t.data.fieldList) r[a] = (a ? a + ' - ' : '') + t.data.fieldList[a]
                    this.form.extend = Object.assign(this.form.extend, {
                        fieldLoading: !1,
                        fieldList: t.data.fieldList,
                        fieldSelect: r,
                        fieldSelectKey: c(),
                    })
                })
        })
        l(this, 'toggleForm', (e = '', t = []) => {
            if (
                (this.runBefore('toggleForm', { operate: e, operateIds: t }),
                this.form.ref && this.form.ref.resetFields(),
                this.form.extend.parentRef && this.form.extend.parentRef.setDataFields([]),
                e == 'Edit')
            ) {
                if (!t.length) return !1
                this.requestEdit(t[0])
            } else
                e == 'Add' &&
                    ((this.form.loading = !0),
                    q().then((r) => {
                        ;(this.form.extend.controllerList = r.data.controllers),
                            (this.form.items = Object.assign({}, this.form.defaultItems)),
                            (this.form.loading = !1)
                    }))
            ;(this.form.operate = e), (this.form.operateIds = t), this.runAfter('toggleForm', { operate: e, operateIds: t })
        })
    }
}
const I = b({
        name: 'security/dataRecycle',
        __name: 'index',
        setup(s, { expose: i }) {
            i()
            const { t: e } = y.useI18n(),
                t = f(),
                r = f(),
                a = new z(
                    new R(m),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: 'ID', prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                            {
                                label: e('security.sensitiveData.Rule name'),
                                prop: 'name',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.sensitiveData.controller'),
                                prop: 'controller',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            { label: e('Connection'), prop: 'connection', align: 'center', operator: 'LIKE', operatorPlaceholder: e('Fuzzy query') },
                            {
                                label: e('security.sensitiveData.data sheet'),
                                prop: 'data_table',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.sensitiveData.Data table primary key'),
                                prop: 'primary_key',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                                width: 100,
                            },
                            {
                                label: e('security.sensitiveData.Sensitive fields'),
                                prop: 'data_fields',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                                render: 'tags',
                            },
                            {
                                label: e('State'),
                                prop: 'status',
                                align: 'center',
                                render: 'tag',
                                custom: { 0: 'danger', 1: 'success' },
                                replaceValue: { 0: e('Disable'), 1: e('security.sensitiveData.Modifying monitoring') },
                            },
                            {
                                label: e('Update time'),
                                prop: 'update_time',
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
                            { label: e('Operate'), align: 'center', width: '130', render: 'buttons', buttons: k(['edit', 'delete']), operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0],
                    },
                    { defaultItems: { status: '1' } },
                    {
                        onSubmit: () => {
                            a.form.items.fields = r.value.getDataFields()
                        },
                    }
                )
            _('baTable', a),
                g(() => {
                    ;(a.form.extend.parentRef = r.value), (a.table.ref = t.value), a.mount(), a.getIndex()
                })
            const o = { t: e, tableRef: t, formRef: r, baTable: a, PopupForm: T, Table: D, TableHeader: w }
            return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
        },
    }),
    A = { class: 'default-main ba-table-box' }
function P(s, i, e, t, r, a) {
    const o = x('el-alert')
    return (
        u(),
        F('div', A, [
            t.baTable.table.remark
                ? (u(), v(o, { key: 0, class: 'ba-table-alert', title: t.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : n('v-if', !0),
            n(' 表格顶部菜单 '),
            d(
                t.TableHeader,
                {
                    buttons: ['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': t.t('Quick search placeholder', { fields: t.t('security.sensitiveData.controller') }),
                },
                null,
                8,
                ['quick-search-placeholder']
            ),
            n(' 表格 '),
            n(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            d(t.Table, { ref: 'tableRef' }, null, 512),
            n(' 表单 '),
            d(t.PopupForm, { ref: 'formRef' }, null, 512),
        ])
    )
}
const M = S(I, [
    ['render', P],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/security/sensitiveData/index.vue'],
])
export { M as default }
