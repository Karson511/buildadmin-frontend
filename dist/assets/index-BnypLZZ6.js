import { e as g, v, au as k, C as L, m as n, X as D, o as b, h as I, O as m, W as i, l as r, P as u, k as _, _ as T, U as C } from './vue-Rh7pEvFB.js'
import { b as w, d as x, T as z, a as B } from './index-tUPoOQPz.js'
import { u as E, r as F, i as A, I as K } from './info-1Vl6G62o.js'
import { a4 as P, _ as q } from './index-BBRbF7Py.js'
import './index-pVkqPv71.js'
const R = g({
        name: 'security/sensitiveDataLog',
        __name: 'index',
        setup(y, { expose: f }) {
            f()
            const { t: e } = v.useI18n()
            let t = [
                {
                    render: 'tipButton',
                    name: 'info',
                    title: 'Info',
                    text: '',
                    type: 'primary',
                    icon: 'fa fa-search-plus',
                    class: 'table-row-info',
                    disabledTip: !1,
                    click: (a) => {
                        l(a[o.table.pk])
                    },
                },
                {
                    render: 'confirmButton',
                    name: 'rollback',
                    title: 'security.sensitiveDataLog.RollBACK',
                    text: '',
                    type: 'success',
                    icon: 'fa fa-sign-in',
                    class: 'table-row-edit',
                    popconfirm: {
                        confirmButtonText: e('security.sensitiveDataLog.RollBACK'),
                        cancelButtonText: e('Cancel'),
                        confirmButtonType: 'success',
                        title: e('security.sensitiveDataLog.Are you sure you want to rollback the record?'),
                    },
                    disabledTip: !1,
                    click: (a) => {
                        s([a[o.table.pk]])
                    },
                },
            ]
            t = t.concat(x(['delete']))
            const o = new w(
                    new P(E),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: e('Id'), width: 70 },
                            {
                                label: e('security.sensitiveDataLog.Operation administrator'),
                                prop: 'admin.nickname',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.sensitiveDataLog.Rule name'),
                                prop: 'sensitive.name',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.sensitiveDataLog.controller'),
                                prop: 'sensitive.controller_as',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            { label: e('Connection'), prop: 'connection', align: 'center', operator: 'LIKE', operatorPlaceholder: e('Fuzzy query') },
                            {
                                label: e('security.sensitiveDataLog.data sheet'),
                                prop: 'data_table',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.sensitiveDataLog.Modify line'),
                                prop: 'id_value',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.sensitiveDataLog.Modification'),
                                prop: 'data_comment',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            {
                                label: e('security.sensitiveDataLog.Before modification'),
                                prop: 'before',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                                showOverflowTooltip: !0,
                            },
                            {
                                label: e('security.sensitiveDataLog.After modification'),
                                prop: 'after',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                                showOverflowTooltip: !0,
                            },
                            { label: 'IP', prop: 'ip', align: 'center', operator: 'LIKE', operatorPlaceholder: e('Fuzzy query') },
                            {
                                label: e('security.sensitiveDataLog.Modification time'),
                                prop: 'create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            { label: e('Operate'), align: 'center', width: 120, render: 'buttons', buttons: t, operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0],
                    },
                    {},
                    { onTableDblclick: ({ row: a }) => (l(a[o.table.pk]), !1) }
                ),
                s = (a) => {
                    F(a).then(() => {
                        o.onTableHeaderAction('refresh', {})
                    })
                },
                p = () => {
                    s(o.getSelectionIds())
                },
                l = (a) => {
                    ;(o.form.extend.info = {}),
                        (o.form.operate = 'Info'),
                        (o.form.loading = !0),
                        A(a).then((d) => {
                            ;(o.form.extend.info = d.data.row), (o.form.loading = !1)
                        })
                }
            k('baTable', o),
                L(() => {
                    o.mount(), o.getIndex()
                })
            const c = {
                t: e,
                get optButtons() {
                    return t
                },
                set optButtons(a) {
                    t = a
                },
                baTable: o,
                onRollback: s,
                onRollbackAction: p,
                infoButtonClick: l,
                InfoDialog: K,
                Table: B,
                TableHeader: z,
            }
            return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
        },
    }),
    O = { class: 'default-main ba-table-box' },
    S = { class: 'mlr-12' },
    N = { class: 'table-header-operate-text' }
function M(y, f, e, t, o, s) {
    const p = n('el-alert'),
        l = n('Icon'),
        c = n('el-button'),
        a = n('el-tooltip'),
        d = n('el-popconfirm'),
        h = D('blur')
    return (
        b(),
        I('div', O, [
            t.baTable.table.remark
                ? (b(), m(p, { key: 0, class: 'ba-table-alert', title: t.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : i('v-if', !0),
            i(' 表格顶部菜单 '),
            r(
                t.TableHeader,
                {
                    buttons: ['refresh', 'delete', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': t.t('Quick search placeholder', { fields: t.t('security.sensitiveDataLog.Rule name') }),
                },
                {
                    default: u(() => [
                        r(
                            d,
                            {
                                onConfirm: t.onRollbackAction,
                                'confirm-button-text': t.t('security.sensitiveDataLog.RollBACK'),
                                'cancel-button-text': t.t('Cancel'),
                                confirmButtonType: 'success',
                                title: t.t('security.sensitiveDataLog.Are you sure you want to rollback the record?'),
                                disabled: !(t.baTable.table.selection.length > 0),
                            },
                            {
                                reference: u(() => [
                                    _('div', S, [
                                        r(
                                            a,
                                            {
                                                content: t.t('security.sensitiveDataLog.Rollback the selected record to the original data table'),
                                                placement: 'top',
                                            },
                                            {
                                                default: u(() => [
                                                    T(
                                                        (b(),
                                                        m(
                                                            c,
                                                            {
                                                                disabled: !(t.baTable.table.selection.length > 0),
                                                                class: 'table-header-operate',
                                                                type: 'success',
                                                            },
                                                            {
                                                                default: u(() => [
                                                                    r(l, { size: '16', color: '#ffffff', name: 'fa fa-sign-in' }),
                                                                    _('span', N, C(t.t('security.sensitiveDataLog.RollBACK')), 1),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['disabled']
                                                        )),
                                                        [[h]]
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            ['content']
                                        ),
                                    ]),
                                ]),
                                _: 1,
                            },
                            8,
                            ['confirm-button-text', 'cancel-button-text', 'title', 'disabled']
                        ),
                    ]),
                    _: 1,
                },
                8,
                ['quick-search-placeholder']
            ),
            i(' 表格 '),
            i(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            r(t.Table),
            i(' 表单 '),
            r(t.InfoDialog),
        ])
    )
}
const Q = q(R, [
    ['render', M],
    ['__scopeId', 'data-v-471e450c'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/security/sensitiveDataLog/index.vue'],
])
export { Q as default }
