import {
    e as g,
    r as _,
    v as h,
    p as y,
    au as w,
    C as T,
    D as x,
    n as C,
    m as f,
    o as k,
    h as v,
    l as c,
    P as i,
    V as B,
    U as D,
} from './vue-Rh7pEvFB.js'
import { b as V, T as I, a as S } from './index-cU5Tpy6g.js'
import { a2 as N, a4 as q, _ as R } from './index-BfqXFxxp.js'
import { s as U, c as j, j as A } from './crud-Brppgsc7.js'
import './index-BL7XGxgx.js'
import './validate-CJqnmgV4.js'
const E = g({
    __name: 'log',
    props: { modelValue: { type: Boolean, required: !0, default: !1 } },
    emits: ['update:modelValue'],
    setup(p, { expose: l, emit: d }) {
        l()
        const t = p,
            u = d,
            s = _({ ready: !1 }),
            { t: e } = h.useI18n(),
            n = y(),
            o = [
                {
                    render: 'confirmButton',
                    name: 'copy',
                    title: 'crud.crud.copy',
                    text: '',
                    type: 'primary',
                    icon: 'fa fa-copy',
                    class: 'table-row-copy',
                    popconfirm: {
                        confirmButtonText: e('Confirm'),
                        cancelButtonText: e('Cancel'),
                        confirmButtonType: 'primary',
                        title: e('crud.crud.Start CRUD design with this record?'),
                        width: '220px',
                    },
                    disabledTip: !1,
                    click: (a) => {
                        ;(U.startData.logId = a[r.table.pk]), j('log'), u('update:modelValue', !1)
                    },
                },
                {
                    render: 'confirmButton',
                    name: 'del',
                    title: 'Delete',
                    text: '',
                    type: 'danger',
                    icon: 'fa fa-trash',
                    class: 'table-row-delete',
                    popconfirm: {
                        confirmButtonText: e('crud.crud.Delete Code'),
                        cancelButtonText: e('Cancel'),
                        confirmButtonType: 'danger',
                        title: e('crud.crud.Are you sure to delete the generated CRUD code?'),
                        width: '248px',
                    },
                    disabledTip: !1,
                    click: (a) => {
                        A(a[r.table.pk]).then(() => {
                            r.onTableHeaderAction('refresh', {})
                        })
                    },
                    display: (a) => a.status != 'delete' && N('delete'),
                },
            ],
            r = new V(
                new q('/admin/crud.Log/'),
                {
                    pk: 'id',
                    column: [
                        { type: 'selection', align: 'center', operator: !1 },
                        {
                            label: e('crud.log.id'),
                            prop: 'id',
                            align: 'center',
                            width: 70,
                            operator: '=',
                            operatorPlaceholder: e('Id'),
                            sortable: 'custom',
                        },
                        {
                            label: e('crud.log.table_name'),
                            operatorPlaceholder: e('Fuzzy query'),
                            operator: 'LIKE',
                            render: 'slot',
                            slotName: 'tableName',
                        },
                        {
                            label: e('crud.log.status'),
                            prop: 'status',
                            align: 'center',
                            render: 'tag',
                            sortable: !1,
                            replaceValue: {
                                delete: e('crud.log.status delete'),
                                success: e('crud.log.status success'),
                                error: e('crud.log.status error'),
                                start: e('crud.log.status start'),
                            },
                            custom: { delete: 'danger', success: 'success', error: 'warning', start: '' },
                        },
                        {
                            label: e('crud.log.create_time'),
                            prop: 'create_time',
                            align: 'center',
                            render: 'datetime',
                            operator: 'RANGE',
                            sortable: 'custom',
                            width: 160,
                            timeFormat: 'yyyy-mm-dd hh:MM:ss',
                        },
                        { label: e('Operate'), align: 'center', width: 100, render: 'buttons', buttons: o, operator: !1 },
                    ],
                    dblClickNotEditColumn: [void 0],
                },
                { defaultItems: { status: 'start' } }
            )
        w('baTable', r)
        const m = () => {
            var a
            ;(a = r.getIndex()) == null ||
                a.then(() => {
                    s.ready = !0
                })
        }
        T(() => {
            ;(r.table.ref = n.value), r.mount()
        }),
            x(
                () => t.modelValue,
                (a) => {
                    a &&
                        !s.ready &&
                        C(() => {
                            m()
                        })
                }
            )
        const b = { props: t, emits: u, state: s, t: e, tableRef: n, optButtons: o, baTable: r, getIndex: m, Table: S, TableHeader: I }
        return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
    },
})
function P(p, l, d, t, u, s) {
    const e = f('el-table-column'),
        n = f('el-dialog')
    return (
        k(),
        v('div', null, [
            c(
                n,
                {
                    onClose: l[0] || (l[0] = (o) => t.emits('update:modelValue', !1)),
                    width: '60%',
                    'model-value': d.modelValue,
                    class: 'ba-crud-log-dialog',
                    title: t.t('crud.crud.CRUD record'),
                    'append-to-body': !0,
                    'destroy-on-close': !0,
                },
                {
                    default: i(() => [
                        c(
                            t.TableHeader,
                            {
                                buttons: ['refresh', 'quickSearch', 'columnDisplay'],
                                'quick-search-placeholder': t.t('Quick search placeholder', { fields: t.t('crud.log.quick Search Fields') }),
                            },
                            null,
                            8,
                            ['quick-search-placeholder']
                        ),
                        c(
                            t.Table,
                            { ref: 'tableRef' },
                            {
                                tableName: i(() => [
                                    c(
                                        e,
                                        { 'show-overflow-tooltip': !0, prop: 'table_name', align: 'center', label: t.t('crud.log.table_name') },
                                        {
                                            default: i((o) => [
                                                B(
                                                    D(
                                                        (o.row.table.databaseConnection ? o.row.table.databaseConnection + '.' : '') +
                                                            o.row.table.name
                                                    ),
                                                    1
                                                ),
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
                    ]),
                    _: 1,
                },
                8,
                ['model-value', 'title']
            ),
        ])
    )
}
const G = R(E, [
    ['render', P],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/crud/log.vue'],
])
export { G as default }
