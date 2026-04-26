import {
    e as S,
    m as n,
    X as V,
    o as t,
    h as o,
    _ as x,
    O as i,
    P as _,
    Z as g,
    Y as u,
    k as s,
    l as m,
    V as b,
    U as l,
    W as N,
} from './vue-Rh7pEvFB.js'
import { s as U } from './store-BuYTRjF2.js'
import { i as D, m as B, h as L, c as j } from './index-BAP8DTqJ.js'
import { f as z, _ as E } from './index-C3vonoRT.js'
const O = S({
        __name: 'tabs',
        setup(p, { expose: c }) {
            c()
            const e = {
                onTabChange: () => {
                    D()
                },
                get state() {
                    return U
                },
                get currency() {
                    return j
                },
                get showInfo() {
                    return L
                },
                get moduleInstallState() {
                    return B
                },
                get fullUrl() {
                    return z
                },
            }
            return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
        },
    }),
    P = ['onClick'],
    A = { class: 'goods-footer' },
    F = { key: 0, class: 'goods-tag' },
    W = { class: 'goods-title' },
    X = { class: 'goods-data' },
    Y = { class: 'download-count' },
    Z = { key: 0, class: 'goods-price' },
    q = { class: 'original-price' },
    G = { class: 'current-price' },
    H = { key: 1, class: 'goods-price' }
function J(p, c, y, e, K, M) {
    const v = n('el-image'),
        f = n('el-tag'),
        h = n('Icon'),
        k = n('el-empty'),
        T = n('el-tab-pane'),
        w = n('el-tabs'),
        C = V('loading')
    return (
        t(),
        o('div', null, [
            x(
                (t(),
                i(
                    w,
                    {
                        'element-loading-text': p.$t('module.Loading'),
                        modelValue: e.state.table.params.activeTab,
                        'onUpdate:modelValue': c[0] || (c[0] = (r) => (e.state.table.params.activeTab = r)),
                        type: 'border-card',
                        class: 'store-tabs',
                        onTabChange: e.onTabChange,
                    },
                    {
                        default: _(() => [
                            (t(!0),
                            o(
                                g,
                                null,
                                u(
                                    e.state.table.category,
                                    (r) => (
                                        t(),
                                        i(
                                            T,
                                            { name: r.id.toString(), key: r.id, label: r.name, class: 'store-tab-pane' },
                                            {
                                                default: _(() => [
                                                    e.state.table.modules[e.state.table.params.activeTab] &&
                                                    e.state.table.modules[e.state.table.params.activeTab].length > 0
                                                        ? (t(!0),
                                                          o(
                                                              g,
                                                              { key: 0 },
                                                              u(
                                                                  e.state.table.modules[e.state.table.params.activeTab],
                                                                  (a) => (
                                                                      t(),
                                                                      o('div', { class: 'goods', key: a.uid }, [
                                                                          s(
                                                                              'div',
                                                                              { onClick: (d) => e.showInfo(a.uid), class: 'goods-item suspension' },
                                                                              [
                                                                                  m(
                                                                                      v,
                                                                                      {
                                                                                          loading: 'lazy',
                                                                                          fit: 'contain',
                                                                                          class: 'goods-img',
                                                                                          src: a.logo
                                                                                              ? a.logo
                                                                                              : e.fullUrl('/static/images/local-module-logo.png'),
                                                                                      },
                                                                                      null,
                                                                                      8,
                                                                                      ['src']
                                                                                  ),
                                                                                  s('div', A, [
                                                                                      a.tags && a.tags.length > 0
                                                                                          ? (t(),
                                                                                            o('div', F, [
                                                                                                (t(!0),
                                                                                                o(
                                                                                                    g,
                                                                                                    null,
                                                                                                    u(
                                                                                                        a.tags,
                                                                                                        (d, I) => (
                                                                                                            t(),
                                                                                                            i(
                                                                                                                f,
                                                                                                                {
                                                                                                                    type: d.type ? d.type : 'primary',
                                                                                                                    key: I,
                                                                                                                },
                                                                                                                {
                                                                                                                    default: _(() => [
                                                                                                                        b(l(d.name), 1),
                                                                                                                    ]),
                                                                                                                    _: 2,
                                                                                                                },
                                                                                                                1032,
                                                                                                                ['type']
                                                                                                            )
                                                                                                        )
                                                                                                    ),
                                                                                                    128
                                                                                                )),
                                                                                            ]))
                                                                                          : N('v-if', !0),
                                                                                      s('div', W, l(a.title), 1),
                                                                                      s('div', X, [
                                                                                          s('span', Y, [
                                                                                              m(h, {
                                                                                                  name: 'fa fa-download',
                                                                                                  color: '#c0c4cc',
                                                                                                  size: '13',
                                                                                              }),
                                                                                              b(' ' + l(a.downloads ? a.downloads : '-'), 1),
                                                                                          ]),
                                                                                          a.state === e.moduleInstallState.UNINSTALLED
                                                                                              ? (t(),
                                                                                                o('span', Z, [
                                                                                                    s(
                                                                                                        'span',
                                                                                                        q,
                                                                                                        l(
                                                                                                            e.currency(
                                                                                                                a.original_price,
                                                                                                                a.currency_select
                                                                                                            )
                                                                                                        ),
                                                                                                        1
                                                                                                    ),
                                                                                                    s(
                                                                                                        'span',
                                                                                                        G,
                                                                                                        l(
                                                                                                            e.currency(
                                                                                                                a.present_price,
                                                                                                                a.currency_select
                                                                                                            )
                                                                                                        ),
                                                                                                        1
                                                                                                    ),
                                                                                                ]))
                                                                                              : (t(),
                                                                                                o('div', H, [
                                                                                                    m(
                                                                                                        f,
                                                                                                        {
                                                                                                            effect: 'dark',
                                                                                                            type: a.stateTag.type
                                                                                                                ? a.stateTag.type
                                                                                                                : 'primary',
                                                                                                        },
                                                                                                        {
                                                                                                            default: _(() => [
                                                                                                                b(l(a.stateTag.text), 1),
                                                                                                            ]),
                                                                                                            _: 2,
                                                                                                        },
                                                                                                        1032,
                                                                                                        ['type']
                                                                                                    ),
                                                                                                ])),
                                                                                      ]),
                                                                                  ]),
                                                                              ],
                                                                              8,
                                                                              P
                                                                          ),
                                                                      ])
                                                                  )
                                                              ),
                                                              128
                                                          ))
                                                        : (t(),
                                                          i(k, { key: 1, class: 'modules-empty', description: p.$t('module.No more') }, null, 8, [
                                                              'description',
                                                          ])),
                                                ]),
                                                _: 2,
                                            },
                                            1032,
                                            ['name', 'label']
                                        )
                                    )
                                ),
                                128
                            )),
                        ]),
                        _: 1,
                    },
                    8,
                    ['element-loading-text', 'modelValue']
                )),
                [[C, e.state.loading.table]]
            ),
        ])
    )
}
const ae = E(O, [
    ['render', J],
    ['__scopeId', 'data-v-c2a21443'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/module/components/tabs.vue'],
])
export { ae as default }
