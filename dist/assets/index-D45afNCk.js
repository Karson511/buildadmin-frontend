import {
    e as I,
    p as B,
    v as j,
    ag as S,
    ai as V,
    C as R,
    au as D,
    L as N,
    m as _,
    o as n,
    h as d,
    O as a,
    W as f,
    l as g,
    P as c,
    k as w,
    Z as k,
    Y as v,
    V as F,
    U,
} from './vue-Rh7pEvFB.js'
import { b as O, T as q, a as z } from './index-cU5Tpy6g.js'
import { c as P, a4 as K, a1 as G, f as Q, _ as W } from './index-BfqXFxxp.js'
import Y from './video-CfUr50Wc.js'
import Z from './info-D06C5REc.js'
import './index-BL7XGxgx.js'
import './play-CnVQomD0.js'
const T = '/admin/shop.UserProfileLog/'
function J(u, b) {
    return P({ url: T + 'reject', method: 'POST', data: { id: u, rejection_reason: b } })
}
function X(u) {
    return P({ url: T + 'approve', method: 'POST', params: { id: u } })
}
function $(u) {
    return P({ url: T + 'info', method: 'get', params: { id: u } })
}
const ee = I({
        name: 'shop/userProfileLog',
        __name: 'index',
        setup(u, { expose: b }) {
            b()
            const x = B(''),
                { t: e } = j.useI18n(),
                C = B(),
                L = B(0),
                h = (r) => {
                    console.log('Restore called with ids:', r), t.onTableHeaderAction('refresh', {})
                },
                p = () => {
                    h(t.getSelectionIds())
                }
            let m = [
                {
                    render: 'confirmButton',
                    name: 'approved',
                    title: e('shop.userProfileLog.Approved'),
                    text: e('shop.userProfileLog.Approved'),
                    type: 'success',
                    icon: '',
                    class: 'table-row-info',
                    popconfirm: {
                        confirmButtonText: e('shop.userProfileLog.Confirm'),
                        cancelButtonText: e('Cancel'),
                        confirmButtonType: 'danger',
                        title: e('shop.userProfileLog.Once content has been approved,it cannot be rolled back,Are you sure you want to approve?'),
                    },
                    disabledTip: !0,
                    display(r) {
                        return r.status === 'pending'
                    },
                    click: (r) => {
                        o(r[t.table.pk])
                    },
                },
                {
                    render: 'basicButton',
                    name: 'reject',
                    title: 'Reject',
                    text: '不通过',
                    type: 'danger',
                    icon: '',
                    class: 'table-row-info',
                    display(r) {
                        return r.status === 'pending'
                    },
                    disabledTip: !1,
                    click: (r) => {
                        i(r[t.table.pk], r)
                    },
                },
                {
                    render: 'tipButton',
                    name: 'info',
                    title: 'Info',
                    text: '',
                    type: 'primary',
                    icon: 'fa fa-info-circle',
                    class: 'table-row-info',
                    disabledTip: !1,
                    display(r) {
                        return r.status !== 'pending'
                    },
                    click: (r) => {
                        l(r[t.table.pk])
                    },
                },
            ]
            const t = new O(
                    new K(T),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: e('Id'), prop: 'id', align: 'center', operator: !1, width: 70 },
                            {
                                label: e('shop.userProfileLog.User ID'),
                                prop: 'shop_user_id',
                                align: 'center',
                                operator: '=',
                                operatorPlaceholder: e('shop.userProfileLog.User ID'),
                                width: 100,
                            },
                            {
                                label: e('shop.userProfileLog.nickname'),
                                prop: 'user.nickname',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: e('Fuzzy query'),
                            },
                            { label: e('shop.userProfileLog.Modify field'), prop: 'modify_field_name', align: 'center', operator: !1 },
                            { render: 'slot', slotName: 'originContent', operator: !1 },
                            { render: 'slot', slotName: 'modifyContent', operator: !1 },
                            {
                                label: e('shop.userProfileLog.Review'),
                                prop: 'status',
                                align: 'center',
                                render: 'tag',
                                custom: { pending: 'warning', disable: 'danger', enable: 'success' },
                                replaceValue: {
                                    pending: e('shop.userProfileLog.Pending'),
                                    disable: e('shop.userProfileLog.Reject'),
                                    enable: e('shop.userProfileLog.Approved'),
                                },
                            },
                            {
                                label: e('shop.userProfileLog.Application time'),
                                prop: 'create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                            { label: e('Operate'), align: 'center', width: '160', render: 'buttons', buttons: m, operator: !1 },
                        ],
                        dblClickNotEditColumn: [void 0],
                    },
                    { defaultItems: { gender: 0, money: '0', score: '0', status: 'enable' } },
                    { onTableDblclick: ({ row: r }) => (l(r[t.table.pk]), !1) }
                ),
                y = () => !0,
                o = (r) => {
                    t.runBefore('approveButtonClick', { id: r }) !== !1 &&
                        X(r).then((s) => {
                            t.onTableHeaderAction('refresh', {}), t.runAfter('approveButtonClick', { res: s })
                        })
                },
                i = (r, s) => {
                    t.runBefore('rejectButtonClick', { id: r, data: s }) !== !1 &&
                        S.prompt('请录入原因', s.user.nickname + '[' + s.modify_field_name + ']', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            inputErrorMessage: '请录入内容',
                            inputPlaceholder: '请输入不通过原因',
                            inputValue: '',
                            inputType: 'textarea',
                        })
                            .then(({ value: H }) => {
                                J(r, H).then((M) => {
                                    t.onTableHeaderAction('refresh', {}), t.runAfter('rejectButtonClick', { res: M })
                                })
                            })
                            .catch(() => {
                                V({ type: 'info', message: 'cancel' })
                            })
                },
                l = (r) => {
                    t.runBefore('infoButtonClick', { id: r }) !== !1 &&
                        ((t.form.operate = 'Info'),
                        (t.form.loading = !0),
                        $(r)
                            .then((s) => {
                                ;(t.form.items = s.data.row), (t.form.loading = !1), t.toggleForm('info', [r.toString()])
                            })
                            .catch((s) => {
                                console.log('info', s), t.toggleForm()
                            })
                            .finally(() => {
                                t.table.loading = !1
                            }))
                },
                E = () => {
                    ;(t.form.loading = !0),
                        t.api
                            .index({ search: [{ field: 'profile.review', val: '1', operator: 'eq', render: 'tag' }] })
                            .then((r) => {
                                ;(t.table.data = r.data.list), (t.table.total = r.data.total), (t.table.remark = r.data.remark)
                            })
                            .finally(() => {
                                t.table.loading = !1
                            })
                }
            R(() => {
                var r
                t.mount(),
                    (r = t.getIndex()) == null ||
                        r.then(() => {
                            t.table.showComSearch = !0
                        })
            }),
                D('baTable', t)
            const A = {
                value: x,
                t: e,
                tableRef: C,
                tableKey: L,
                onRestore: h,
                onRestoreAction: p,
                get optButtons() {
                    return m
                },
                set optButtons(r) {
                    m = r
                },
                baTable: t,
                disabledx: y,
                approveButtonClick: o,
                rejectButtonClick: i,
                infoButtonClick: l,
                approvalClick: E,
                get isArray() {
                    return N
                },
                get fullUrl() {
                    return Q
                },
                get arrayFullUrl() {
                    return G
                },
                Table: z,
                TableHeader: q,
                elVideo: Y,
                InfoDialog: Z,
            }
            return Object.defineProperty(A, '__isScriptSetup', { enumerable: !1, value: !0 }), A
        },
    }),
    re = { class: 'default-main ba-table-box' },
    te = ['innerHTML'],
    oe = ['innerHTML'],
    ne = ['innerHTML'],
    le = ['innerHTML']
function ae(u, b, x, e, C, L) {
    const h = _('el-alert'),
        p = _('el-image'),
        m = _('el-text'),
        t = _('el-space'),
        y = _('el-table-column')
    return (
        n(),
        d('div', re, [
            e.baTable.table.remark
                ? (n(), a(h, { key: 0, class: 'ba-table-alert', title: e.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : f('v-if', !0),
            f(' 表格顶部菜单 '),
            f(" 'add', 'edit', 'delete', "),
            g(
                e.TableHeader,
                {
                    buttons: ['refresh', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': e.t('Quick search placeholder', { fields: e.t('shop.userProfileLog.nickname') }),
                },
                { refreshAppend: c(() => []), _: 1 },
                8,
                ['quick-search-placeholder']
            ),
            f(' 表格 '),
            f(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            g(
                e.Table,
                { ref: 'tableRef' },
                {
                    modifyContent: c(() => [
                        g(
                            y,
                            { label: '修改后内容', width: '160', align: 'left', 'header-align': 'center' },
                            {
                                default: c((o) => [
                                    w('div', null, [
                                        o.row.modify_field_type === 'image'
                                            ? (n(),
                                              a(
                                                  p,
                                                  {
                                                      key: 0,
                                                      'hide-on-click-modal': !0,
                                                      'preview-teleported': !0,
                                                      'preview-src-list': [e.fullUrl(o.row.modify_content)],
                                                      src: e.fullUrl(o.row.modify_content),
                                                      class: 'ba-table-render-image',
                                                  },
                                                  null,
                                                  8,
                                                  ['preview-src-list', 'src']
                                              ))
                                            : o.row.modify_field_type === 'images' && e.isArray(o.row.modify_content) && o.row.modify_content.length
                                              ? (n(!0),
                                                d(
                                                    k,
                                                    { key: 1 },
                                                    v(
                                                        o.row.modify_content,
                                                        (i, l) => (
                                                            n(),
                                                            a(
                                                                p,
                                                                {
                                                                    key: l,
                                                                    'initial-index': l,
                                                                    'preview-teleported': !0,
                                                                    'preview-src-list': e.arrayFullUrl(o.row.modify_content),
                                                                    class: 'ba-table-render-images-item',
                                                                    src: e.fullUrl(i),
                                                                    'hide-on-click-modal': !0,
                                                                },
                                                                null,
                                                                8,
                                                                ['initial-index', 'preview-src-list', 'src']
                                                            )
                                                        )
                                                    ),
                                                    128
                                                ))
                                              : o.row.modify_field_type === 'video' && o.row.modify_content
                                                ? (n(),
                                                  a(
                                                      e.elVideo,
                                                      {
                                                          key: 2,
                                                          src: e.fullUrl(o.row.modify_content),
                                                          width: '70',
                                                          height: '70',
                                                          fit: 'fill',
                                                          enablePreview: !0,
                                                          customPreview: !1,
                                                      },
                                                      null,
                                                      8,
                                                      ['src']
                                                  ))
                                                : o.row.modify_field_type === 'topic' && e.isArray(o.row.modify_content)
                                                  ? (n(),
                                                    a(
                                                        t,
                                                        { key: 3, direction: 'vertical', alignment: 'flex-start' },
                                                        {
                                                            default: c(() => [
                                                                (n(!0),
                                                                d(
                                                                    k,
                                                                    null,
                                                                    v(
                                                                        o.row.modify_content,
                                                                        (i, l) => (
                                                                            n(),
                                                                            a(
                                                                                m,
                                                                                { key: l },
                                                                                {
                                                                                    default: c(() => [
                                                                                        F(U(l + 1) + '. ', 1),
                                                                                        w('span', { innerHTML: i.title }, null, 8, te),
                                                                                    ]),
                                                                                    _: 2,
                                                                                },
                                                                                1024
                                                                            )
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1024
                                                    ))
                                                  : (n(), d('span', { key: 4, innerHTML: o.row.modify_content }, null, 8, oe)),
                                    ]),
                                ]),
                                _: 1,
                            }
                        ),
                    ]),
                    originContent: c(() => [
                        g(
                            y,
                            { label: '原内容', width: '160', align: 'left', 'header-align': 'center' },
                            {
                                default: c((o) => [
                                    w('div', null, [
                                        o.row.modify_field_type === 'image'
                                            ? (n(),
                                              a(
                                                  p,
                                                  {
                                                      key: 0,
                                                      'hide-on-click-modal': !0,
                                                      'preview-teleported': !0,
                                                      'preview-src-list': [e.fullUrl(o.row.original_content)],
                                                      src: e.fullUrl(o.row.original_content),
                                                      class: 'ba-table-render-image',
                                                  },
                                                  null,
                                                  8,
                                                  ['preview-src-list', 'src']
                                              ))
                                            : o.row.modify_field_type === 'images' &&
                                                e.isArray(o.row.original_content) &&
                                                o.row.original_content.length
                                              ? (n(!0),
                                                d(
                                                    k,
                                                    { key: 1 },
                                                    v(
                                                        o.row.original_content,
                                                        (i, l) => (
                                                            n(),
                                                            a(
                                                                p,
                                                                {
                                                                    key: l,
                                                                    'initial-index': l,
                                                                    'preview-teleported': !0,
                                                                    'preview-src-list': e.arrayFullUrl(o.row.original_content),
                                                                    class: 'ba-table-render-images-item',
                                                                    src: e.fullUrl(i),
                                                                    'hide-on-click-modal': !0,
                                                                },
                                                                null,
                                                                8,
                                                                ['initial-index', 'preview-src-list', 'src']
                                                            )
                                                        )
                                                    ),
                                                    128
                                                ))
                                              : o.row.modify_field_type === 'video' && o.row.original_content
                                                ? (n(),
                                                  a(
                                                      e.elVideo,
                                                      {
                                                          key: 2,
                                                          src: e.fullUrl(o.row.original_content),
                                                          width: '70',
                                                          height: '70',
                                                          fit: 'fill',
                                                          enablePreview: !0,
                                                          customPreview: !1,
                                                      },
                                                      null,
                                                      8,
                                                      ['src']
                                                  ))
                                                : o.row.modify_field_type === 'topic' && e.isArray(o.row.original_content)
                                                  ? (n(),
                                                    a(
                                                        t,
                                                        { key: 3, direction: 'vertical', alignment: 'flex-start' },
                                                        {
                                                            default: c(() => [
                                                                (n(!0),
                                                                d(
                                                                    k,
                                                                    null,
                                                                    v(
                                                                        o.row.original_content,
                                                                        (i, l) => (
                                                                            n(),
                                                                            a(
                                                                                m,
                                                                                { key: l },
                                                                                {
                                                                                    default: c(() => [
                                                                                        F(U(l + 1) + '. ', 1),
                                                                                        w('span', { innerHTML: i.title }, null, 8, ne),
                                                                                    ]),
                                                                                    _: 2,
                                                                                },
                                                                                1024
                                                                            )
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                            ]),
                                                            _: 2,
                                                        },
                                                        1024
                                                    ))
                                                  : (n(), d('span', { key: 4, innerHTML: o.row.original_content }, null, 8, le)),
                                    ]),
                                ]),
                                _: 1,
                            }
                        ),
                    ]),
                    _: 1,
                },
                512
            ),
            g(e.InfoDialog),
            f(' 表单 '),
            f(' <PopupForm /> '),
        ])
    )
}
const me = W(ee, [
    ['render', ae],
    ['__scopeId', 'data-v-2fccb476'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/userProfileLog/index.vue'],
])
export { me as default }
