import {
    e as g,
    v as y,
    p as k,
    N as E,
    r as I,
    au as v,
    aH as L,
    D as w,
    i as C,
    m as d,
    X as T,
    o as c,
    h as F,
    O as b,
    W as s,
    l as i,
    P as f,
    _ as x,
    k as S,
    U as A,
} from './vue-Rh7pEvFB.js'
import { b as N, T as P, a as U } from './index-cU5Tpy6g.js'
import { u as D, a as q, P as R } from './popupForm-C9JQLXBm.js'
import { a4 as z, _ as B } from './index-BfqXFxxp.js'
import './index-BL7XGxgx.js'
import './index-B8bcfeaY.js'
import './validate-CJqnmgV4.js'
const G = g({
        name: 'user/scoreLog',
        __name: 'index',
        setup(_, { expose: m }) {
            m()
            const { t: r } = y.useI18n(),
                e = k(),
                n = E(),
                u = n.query.user_id ?? '',
                l = I({ userInfo: {} }),
                a = new N(
                    new z(D),
                    {
                        column: [
                            { type: 'selection', align: 'center', operator: !1 },
                            { label: r('Id'), prop: 'id', align: 'center', operator: '=', operatorPlaceholder: r('Id'), width: 70 },
                            { label: r('user.moneyLog.User ID'), prop: 'user_id', align: 'center', width: 70 },
                            {
                                label: r('user.moneyLog.User name'),
                                prop: 'user.username',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: r('Fuzzy query'),
                            },
                            {
                                label: r('user.moneyLog.User nickname'),
                                prop: 'user.nickname',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: r('Fuzzy query'),
                            },
                            { label: r('user.scoreLog.Change points'), prop: 'score', align: 'center', operator: 'RANGE', sortable: 'custom' },
                            { label: r('user.moneyLog.Before change'), prop: 'before', align: 'center', operator: 'RANGE', sortable: 'custom' },
                            { label: r('user.moneyLog.After change'), prop: 'after', align: 'center', operator: 'RANGE', sortable: 'custom' },
                            {
                                label: r('user.moneyLog.remarks'),
                                prop: 'memo',
                                align: 'center',
                                operator: 'LIKE',
                                operatorPlaceholder: r('Fuzzy query'),
                                showOverflowTooltip: !0,
                            },
                            {
                                label: r('Create time'),
                                prop: 'create_time',
                                align: 'center',
                                render: 'datetime',
                                sortable: 'custom',
                                operator: 'RANGE',
                                width: 160,
                            },
                        ],
                        dblClickNotEditColumn: ['all'],
                    },
                    { defaultItems: { user_id: u, memo: '' } },
                    {},
                    {
                        onSubmit: () => {
                            o(a.comSearch.form.user_id)
                        },
                    }
                )
            a.mount(), a.getIndex(), v('baTable', a)
            const o = (t) => {
                t && L(t) > 0
                    ? q(t).then((h) => {
                          l.userInfo = h.data.user
                      })
                    : (l.userInfo = {})
            }
            o(a.comSearch.form.user_id),
                w(
                    () => a.comSearch.form.user_id,
                    (t) => {
                        ;(a.form.defaultItems.user_id = t), o(t)
                    }
                )
            const p = {
                t: r,
                tableRef: e,
                route: n,
                defalutUser: u,
                state: l,
                baTable: a,
                getUserInfo: o,
                get isEmpty() {
                    return C
                },
                PopupForm: R,
                Table: U,
                TableHeader: P,
            }
            return Object.defineProperty(p, '__isScriptSetup', { enumerable: !1, value: !0 }), p
        },
    }),
    j = { class: 'default-main ba-table-box' },
    H = { class: 'table-header-operate-text' }
function K(_, m, r, e, n, u) {
    const l = d('el-alert'),
        a = d('el-button'),
        o = T('blur')
    return (
        c(),
        F('div', j, [
            e.baTable.table.remark
                ? (c(), b(l, { key: 0, class: 'ba-table-alert', title: e.baTable.table.remark, type: 'info', 'show-icon': '' }, null, 8, ['title']))
                : s('v-if', !0),
            s(' 表格顶部菜单 '),
            i(
                e.TableHeader,
                {
                    buttons: ['refresh', 'add', 'comSearch', 'quickSearch', 'columnDisplay'],
                    'quick-search-placeholder': e.t('Quick search placeholder', {
                        fields: e.t('user.moneyLog.User name') + '/' + e.t('user.moneyLog.User nickname'),
                    }),
                },
                {
                    default: f(() => [
                        e.isEmpty(e.state.userInfo)
                            ? s('v-if', !0)
                            : x(
                                  (c(),
                                  b(
                                      a,
                                      { key: 0, class: 'table-header-operate' },
                                      {
                                          default: f(() => [
                                              S(
                                                  'span',
                                                  H,
                                                  A(
                                                      e.state.userInfo.username +
                                                          '(ID:' +
                                                          e.state.userInfo.id +
                                                          ') ' +
                                                          e.t('user.scoreLog.integral') +
                                                          ':' +
                                                          e.state.userInfo.score
                                                  ),
                                                  1
                                              ),
                                          ]),
                                          _: 1,
                                      }
                                  )),
                                  [[o]]
                              ),
                    ]),
                    _: 1,
                },
                8,
                ['quick-search-placeholder']
            ),
            s(' 表格 '),
            s(' 要使用`el-table`组件原有的属性，直接加在Table标签上即可 '),
            i(e.Table, { ref: 'tableRef' }, null, 512),
            s(' 表单 '),
            i(e.PopupForm),
        ])
    )
}
const Y = B(G, [
    ['render', K],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/user/scoreLog/index.vue'],
])
export { Y as default }
