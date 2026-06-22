import { j as f, z as S, A as w, _ as B, B as j } from './index-BfqXFxxp.js'
import {
    e as q,
    a9 as I,
    r as T,
    f as x,
    o as s,
    h as o,
    k as n,
    U as d,
    a7 as V,
    Z as m,
    Y as v,
    V as R,
    $ as b,
    a1 as F,
    a2 as L,
    j as z,
    l as N,
    aa as U,
} from './vue-Rh7pEvFB.js'
const D = q({
        __name: 'index',
        props: {
            uuid: { type: String, required: !0, default: '' },
            callback: { type: Function, required: !1, default: () => {} },
            class: { type: String, required: !1, default: '' },
            unset: { type: Boolean, required: !1, default: !1 },
            error: { type: String, required: !1, default: f.global.t('validate.The correct area is not clicked, please try again!') },
            success: { type: String, required: !1, default: f.global.t('validate.Verification is successful!') },
        },
        setup(i, { expose: r }) {
            r(),
                I((e) => ({
                    '4753cf0e-captchaBoxLeft': _.value,
                    '4753cf0e-captchaBoxTop': p.value,
                    '4753cf0e-state.captcha.width': t.captcha.width,
                    '4753cf0e-state.captcha.height': t.captcha.height,
                }))
            const a = i,
                t = T({ loading: !0, xy: [], tip: '', captcha: { id: '', text: '', base64: '', width: 350, height: 200 } }),
                h = () => {
                    ;(t.loading = !0),
                        S(a.uuid).then((e) => {
                            ;(t.xy = []), (t.tip = ''), (t.loading = !1), (t.captcha = e.data)
                        })
                },
                u = (e) => {
                    if (t.xy.length < t.captcha.text.length && (t.xy.push(e.offsetX + ',' + e.offsetY), t.xy.length == t.captcha.text.length)) {
                        const y = [t.xy.join('-'), e.target.width, e.target.height].join(';')
                        w(a.uuid, y, a.unset)
                            .then(() => {
                                ;(t.tip = a.success),
                                    setTimeout(() => {
                                        var k
                                        ;(k = a.callback) == null || k.call(a, y), c()
                                    }, 1500)
                            })
                            .catch(() => {
                                ;(t.tip = a.error),
                                    setTimeout(() => {
                                        h()
                                    }, 1500)
                            })
                    }
                },
                l = (e) => {
                    t.xy.splice(e, 1)
                },
                c = () => {
                    var e
                    ;(e = document.getElementById(a.uuid)) == null || e.remove()
                },
                p = x(() => (t.captcha.height + 200) / 2 + 'px'),
                _ = x(() => (t.captcha.width + 24) / 2 + 'px')
            h()
            const g = {
                props: a,
                state: t,
                load: h,
                onRecord: u,
                onCancelRecord: l,
                onClose: c,
                captchaBoxTop: p,
                captchaBoxLeft: _,
                get i18n() {
                    return f
                },
            }
            return Object.defineProperty(g, '__isScriptSetup', { enumerable: !1, value: !0 }), g
        },
    }),
    C = (i) => (F('data-v-4753cf0e'), (i = i()), L(), i),
    E = ['id'],
    P = { key: 0, class: 'loading' },
    Y = { key: 1, class: 'captcha-img-box' },
    A = ['src', 'alt'],
    M = ['onClick'],
    O = { key: 2, class: 'captcha-prompt' },
    X = { key: 3, class: 'captcha-prompt' },
    Z = { class: 'captcha-refresh-box' },
    G = C(() => n('div', { class: 'captcha-refresh-line captcha-refresh-line-l' }, null, -1)),
    H = ['title'],
    J = C(() => n('div', { class: 'captcha-refresh-line captcha-refresh-line-r' }, null, -1))
function K(i, r, a, t, h, u) {
    return (
        s(),
        o(
            'div',
            { id: a.uuid },
            [
                n(
                    'div',
                    { class: b(['ba-click-captcha', t.props.class]) },
                    [
                        t.state.loading
                            ? (s(), o('div', P, d(t.i18n.global.t('utils.Loading')), 1))
                            : (s(),
                              o('div', Y, [
                                  n(
                                      'img',
                                      {
                                          class: 'captcha-img',
                                          onClick: r[0] || (r[0] = V((l) => t.onRecord(l), ['prevent'])),
                                          src: t.state.captcha.base64,
                                          alt: t.i18n.global.t('validate.Captcha loading failed, please click refresh button'),
                                      },
                                      null,
                                      8,
                                      A
                                  ),
                                  (s(!0),
                                  o(
                                      m,
                                      null,
                                      v(
                                          t.state.xy,
                                          (l, c) => (
                                              s(),
                                              o(
                                                  'span',
                                                  {
                                                      key: c,
                                                      class: 'step',
                                                      onClick: (p) => t.onCancelRecord(c),
                                                      style: z(
                                                          `left:${parseFloat(l.split(',')[0]) - 13}px;top:${parseFloat(l.split(',')[1]) - 13}px`
                                                      ),
                                                  },
                                                  d(c + 1),
                                                  13,
                                                  M
                                              )
                                          )
                                      ),
                                      128
                                  )),
                              ])),
                        t.state.tip
                            ? (s(), o('div', O, d(t.state.tip), 1))
                            : (s(),
                              o('div', X, [
                                  R(d(t.i18n.global.t('validate.Please click')) + ' ', 1),
                                  (s(!0),
                                  o(
                                      m,
                                      null,
                                      v(
                                          t.state.captcha.text,
                                          (l, c) => (s(), o('span', { key: c, class: b(t.state.xy.length > c ? 'clicaptcha-clicked' : '') }, d(l), 3))
                                      ),
                                      128
                                  )),
                              ])),
                        n('div', Z, [
                            G,
                            n('i', { class: 'fa fa-refresh captcha-refresh-btn', title: t.i18n.global.t('Refresh'), onClick: t.load }, null, 8, H),
                            J,
                        ]),
                    ],
                    2
                ),
                n('div', { class: 'ba-layout-shade', onClick: t.onClose }),
            ],
            8,
            E
        )
    )
}
const Q = B(D, [
        ['render', K],
        ['__scopeId', 'data-v-4753cf0e'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/components/clickCaptcha/index.vue'],
    ]),
    tt = (i, r, a = {}) => {
        let t = N(Q, { uuid: i, callback: r, ...a, key: j() })
        U(t, document.body), (t = null)
    }
export { tt as c }
