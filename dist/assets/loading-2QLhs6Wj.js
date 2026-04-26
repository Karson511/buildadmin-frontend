import { e as _, r as p, ab as f, m as g, X as v, h as d, _ as b, k as h, l as w, P as R, W as x, o as u, V as k, U as C } from './vue-Rh7pEvFB.js'
import { n as V, a as y, p as N, r as T, _ as S } from './index-C3vonoRT.js'
import { g as c, r as m } from './router-DCOnE4m1.js'
const $ = _({
        __name: 'loading',
        setup(r, { expose: l }) {
            l()
            let o
            const t = V(),
                a = y(),
                s = p({ maximumWait: 1e3 * 6, showReload: !1 }),
                i = () => {
                    T.go(0)
                }
            if (N() && t.state.tabsViewRoutes) {
                let e = c(t.state.tabsViewRoutes)
                e && m(e.path)
            } else if (a.state.viewRoutes) {
                let e = c(a.state.viewRoutes)
                e && m(e.path)
            }
            ;(o = window.setTimeout(() => {
                s.showReload = !0
            }, s.maximumWait)),
                f(() => {
                    clearTimeout(o)
                })
            const n = {
                get timer() {
                    return o
                },
                set timer(e) {
                    o = e
                },
                navTabs: t,
                memberCenter: a,
                state: s,
                refresh: i,
            }
            return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
        },
    }),
    B = ['element-loading-text'],
    D = { key: 0, class: 'loading-footer' }
function P(r, l, o, t, a, s) {
    const i = g('el-button'),
        n = v('loading')
    return (
        u(),
        d('div', null, [
            b(
                h(
                    'div',
                    {
                        'element-loading-background': 'var(--ba-bg-color-overlay)',
                        'element-loading-text': r.$t('utils.Loading'),
                        class: 'default-main ba-main-loading',
                    },
                    null,
                    8,
                    B
                ),
                [[n, !0]]
            ),
            t.state.showReload
                ? (u(), d('div', D, [w(i, { onClick: t.refresh, type: 'warning' }, { default: R(() => [k(C(r.$t('utils.Reload')), 1)]), _: 1 })]))
                : x('v-if', !0),
        ])
    )
}
const A = S($, [
    ['render', P],
    ['__scopeId', 'data-v-2c5d7e56'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/common/components/loading.vue'],
])
export { A as default }
