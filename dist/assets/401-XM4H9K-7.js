import { m as a, h as _, k as s, U as n, l as e, P as t, a1 as l, a2 as p, o as u, V as f } from './vue-Rh7pEvFB.js'
import { _ as m } from './index-C3vonoRT.js'
const v = {},
    g = (o) => (l('data-v-1f18dd65'), (o = o()), p(), o),
    h = { class: 'page' },
    k = { class: 'container' },
    w = g(() => s('div', { class: 'fbi' }, '401 WARNING', -1)),
    b = { class: 'warning' },
    I = { class: 'page-footer' }
function N(o, r) {
    const c = a('router-link'),
        d = a('el-button'),
        i = a('el-button-group')
    return (
        u(),
        _('div', h, [
            s('div', k, [
                w,
                s('div', b, n(o.$t('401.noPowerTip')), 1),
                s('div', I, [
                    e(i, null, {
                        default: t(() => [
                            e(
                                d,
                                { size: 'large', type: 'info' },
                                {
                                    default: t(() => [
                                        e(
                                            c,
                                            { class: 'stopcode-a', to: '/' },
                                            { default: t(() => [f(n(o.$t('404.Return to home page')), 1)]), _: 1 }
                                        ),
                                    ]),
                                    _: 1,
                                }
                            ),
                            e(
                                d,
                                { size: 'large', type: 'info' },
                                {
                                    default: t(() => [
                                        e(
                                            c,
                                            { class: 'stopcode-a', to: '' },
                                            {
                                                default: t(() => [
                                                    s(
                                                        'span',
                                                        { onClick: r[0] || (r[0] = (S) => o.$router.back()) },
                                                        n(o.$t('404.Back to previous page')),
                                                        1
                                                    ),
                                                ]),
                                                _: 1,
                                            }
                                        ),
                                    ]),
                                    _: 1,
                                }
                            ),
                        ]),
                        _: 1,
                    }),
                ]),
            ]),
        ])
    )
}
const V = m(v, [
    ['render', N],
    ['__scopeId', 'data-v-1f18dd65'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/common/error/401.vue'],
])
export { V as default }
