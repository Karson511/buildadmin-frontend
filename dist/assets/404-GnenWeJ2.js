import {
    e as f,
    a0 as h,
    p as v,
    C as g,
    A as k,
    m as w,
    h as $,
    k as e,
    U as a,
    V as d,
    l,
    P as _,
    a1 as C,
    a2 as S,
    o as b,
} from './vue-Rh7pEvFB.js'
import { _ as B } from './index-BfqXFxxp.js'
const I = f({
        __name: '404',
        setup(t, { expose: n }) {
            n()
            const c = h(),
                o = v(0)
            var r = null
            function i() {
                ;(o.value += Math.floor(Math.random() * 50)), o.value >= 100 ? ((o.value = 100), c.back()) : s()
            }
            function s() {
                r = setTimeout(i, Math.random() * 500 + 500)
            }
            g(() => {
                s()
            }),
                k(() => {
                    clearTimeout(r)
                })
            const p = {
                router: c,
                complete: o,
                get timer() {
                    return r
                },
                set timer(m) {
                    r = m
                },
                process: i,
                processInterval: s,
            }
            return Object.defineProperty(p, '__isScriptSetup', { enumerable: !1, value: !0 }), p
        },
    }),
    R = '' + new URL('qr-CamScR9_.png', import.meta.url).href,
    u = (t) => (C('data-v-75fe3837'), (t = t()), S(), t),
    M = { class: 'page' },
    U = { class: 'container' },
    V = u(() => e('div', { class: 'font-h1' }, ':(', -1)),
    y = { class: 'tip' },
    N = { class: 'complete' },
    T = { class: 'percentage' },
    j = { class: 'details' },
    q = u(() => e('div', { class: 'qr-image' }, [e('img', { src: R, alt: 'QR Code' })], -1)),
    x = { class: 'stopcode' },
    P = { class: 'stopcode-text' },
    A = { class: 'stopcode-text' }
function D(t, n, c, o, r, i) {
    const s = w('router-link')
    return (
        b(),
        $('div', M, [
            e('div', U, [
                V,
                e('div', y, a(t.$t('404.problems tip')), 1),
                e('div', N, [d(a(t.$t('Complete')) + ' ', 1), e('span', T, a(o.complete), 1), d('% ')]),
                e('div', j, [
                    q,
                    e('div', x, [
                        e('div', P, a(t.$t('404.We will automatically return to the previous page when we are finished')), 1),
                        e('div', A, [
                            l(
                                s,
                                { class: 'stopcode-a', to: '' },
                                {
                                    default: _(() => [
                                        e('span', { onClick: n[0] || (n[0] = (p) => t.$router.back()) }, a(t.$t('404.Back to previous page')), 1),
                                    ]),
                                    _: 1,
                                }
                            ),
                            l(s, { class: 'stopcode-a', to: '/' }, { default: _(() => [d(a(t.$t('404.Return to home page')), 1)]), _: 1 }),
                        ]),
                    ]),
                ]),
            ]),
        ])
    )
}
const O = B(I, [
    ['render', D],
    ['__scopeId', 'data-v-75fe3837'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/common/error/404.vue'],
])
export { O as default }
