var q = Object.defineProperty
var A = (a, t, l) => (t in a ? q(a, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (a[t] = l))
var h = (a, t, l) => (A(a, typeof t != 'symbol' ? t + '' : t, l), l)
import {
    e as T,
    p as C,
    r as L,
    v as F,
    C as j,
    n as H,
    A as N,
    m as d,
    h as S,
    k as c,
    l as s,
    P as r,
    a7 as K,
    a8 as O,
    a1 as W,
    a2 as Y,
    o as V,
    Z,
    Y as G,
    O as J,
    V as P,
    U as E,
} from './vue-Rh7pEvFB.js'
import { e as Q, w as X, r as $, x as ee, f as te, g as oe, y as ae, _ as ne } from './index-C3vonoRT.js'
import { l as z } from './index-BrGKKT2t.js'
import { b as v } from './validate-Dr-o2ZDb.js'
import { c as se } from './index-tKVF42Jv.js'
import { t as le } from './useDark-BqvPuHnb.js'
import { _ as ie } from './login-header-BfppTrn9.js'
const e = { width: 0, height: 0, bubbleEl: null, canvas: null, ctx: {}, circles: [], animate: !0, requestId: null },
    re = function () {
        ;(e.width = window.innerWidth),
            (e.height = window.innerHeight),
            (e.bubbleEl = document.getElementById('bubble')),
            (e.bubbleEl.style.height = e.height + 'px'),
            (e.canvas = document.getElementById('bubble-canvas')),
            (e.canvas.width = e.width),
            (e.canvas.height = e.height),
            (e.ctx = e.canvas.getContext('2d')),
            (e.circles = [])
        for (let a = 0; a < e.width * 0.5; a++) {
            const t = new ce()
            e.circles.push(t)
        }
        M(), de()
    }
function U() {
    e.animate = !(document.body.scrollTop > e.height)
}
function B() {
    ;(e.width = window.innerWidth),
        (e.height = window.innerHeight),
        (e.bubbleEl.style.height = e.height + 'px'),
        (e.canvas.width = e.width),
        (e.canvas.height = e.height)
}
function M() {
    if (e.animate) {
        e.ctx.clearRect(0, 0, e.width, e.height)
        for (const a in e.circles) e.circles[a].draw()
    }
    e.requestId = requestAnimationFrame(M)
}
class ce {
    constructor() {
        h(this, 'pos')
        h(this, 'alpha')
        h(this, 'scale')
        h(this, 'velocity')
        h(this, 'draw')
        ;(this.pos = { x: Math.random() * e.width, y: e.height + Math.random() * 100 }),
            (this.alpha = 0.1 + Math.random() * 0.3),
            (this.scale = 0.1 + Math.random() * 0.3),
            (this.velocity = Math.random()),
            (this.draw = function () {
                ;(this.pos.y -= this.velocity),
                    (this.alpha -= 5e-4),
                    e.ctx.beginPath(),
                    e.ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, !1),
                    (e.ctx.fillStyle = 'rgba(255,255,255,' + this.alpha + ')'),
                    e.ctx.fill()
            })
    }
}
function de() {
    window.addEventListener('scroll', U), window.addEventListener('resize', B)
}
function ue() {
    window.removeEventListener('scroll', U), window.removeEventListener('resize', B), cancelAnimationFrame(e.requestId)
}
const me = T({
        __name: 'login',
        setup(a, { expose: t }) {
            t()
            let l
            const o = Q(),
                x = X()
            le(o.layout.isDark)
            const y = C(),
                f = C(),
                w = C(),
                m = L({ showCaptcha: !1, submitLoading: !1 }),
                u = L({ username: '', password: '', keep: !1, captchaId: ae(), captchaInfo: '' }),
                { t: p } = F.useI18n(),
                _ = L({
                    username: [v({ name: 'required', message: p('login.Please enter an account') }), v({ name: 'account' })],
                    password: [v({ name: 'required', message: p('login.Please input a password') }), v({ name: 'password' })],
                }),
                b = () => {
                    u.username === '' ? f.value.focus() : u.password === '' && w.value.focus()
                }
            j(() => {
                ;(l = window.setTimeout(() => {
                    re()
                }, 1e3)),
                    z('get')
                        .then((i) => {
                            ;(m.showCaptcha = i.data.captcha), H(() => b())
                        })
                        .catch((i) => {
                            console.log(i)
                        })
            }),
                N(() => {
                    clearTimeout(l), ue()
                })
            const k = () => {
                    var i
                    ;(i = y.value) == null ||
                        i.validate((I) => {
                            I && (m.showCaptcha ? se(u.captchaId, (D) => g(D)) : g())
                        })
                },
                g = (i = '') => {
                    ;(m.submitLoading = !0),
                        (u.captchaInfo = i),
                        z('post', u)
                            .then((I) => {
                                x.dataFill(I.data.userInfo), $.push({ path: ee })
                            })
                            .finally(() => {
                                m.submitLoading = !1
                            })
                },
                n = {
                    get timer() {
                        return l
                    },
                    set timer(i) {
                        l = i
                    },
                    config: o,
                    adminInfo: x,
                    formRef: y,
                    usernameRef: f,
                    passwordRef: w,
                    state: m,
                    form: u,
                    t: p,
                    rules: _,
                    focusInput: b,
                    onSubmitPre: k,
                    onSubmit: g,
                    get editDefaultLang() {
                        return oe
                    },
                    get fullUrl() {
                        return te
                    },
                }
            return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n
        },
    }),
    R = (a) => (W('data-v-d2a5dd0b'), (a = a()), Y(), a),
    fe = { class: 'switch-language' },
    pe = R(() => c('canvas', { id: 'bubble-canvas', class: 'bubble-canvas' }, null, -1)),
    he = [pe],
    _e = { class: 'login' },
    ge = { class: 'login-box' },
    we = R(() => c('div', { class: 'head' }, [c('img', { src: ie, alt: '' })], -1)),
    be = { class: 'form' },
    ve = ['src'],
    xe = { class: 'content' }
function ye(a, t, l, o, x, y) {
    const f = d('Icon'),
        w = d('el-dropdown-item'),
        m = d('el-dropdown-menu'),
        u = d('el-dropdown'),
        p = d('el-input'),
        _ = d('el-form-item'),
        b = d('el-checkbox'),
        k = d('el-button'),
        g = d('el-form')
    return (
        V(),
        S('div', null, [
            c('div', fe, [
                s(
                    u,
                    { size: 'large', 'hide-timeout': 50, placement: 'bottom-end', 'hide-on-click': !0 },
                    {
                        dropdown: r(() => [
                            s(
                                m,
                                { class: 'chang-lang' },
                                {
                                    default: r(() => [
                                        (V(!0),
                                        S(
                                            Z,
                                            null,
                                            G(
                                                o.config.lang.langArray,
                                                (n) => (
                                                    V(),
                                                    J(
                                                        w,
                                                        { key: n.name, onClick: (i) => o.editDefaultLang(n.name) },
                                                        { default: r(() => [P(E(n.value), 1)]), _: 2 },
                                                        1032,
                                                        ['onClick']
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                    _: 1,
                                }
                            ),
                        ]),
                        default: r(() => [s(f, { name: 'fa fa-globe', color: 'var(--el-text-color-secondary)', size: '28' })]),
                        _: 1,
                    }
                ),
            ]),
            c('div', { onContextmenu: t[0] || (t[0] = K(() => {}, ['stop'])), id: 'bubble', class: 'bubble' }, [...he], 32),
            c('div', _e, [
                c('div', ge, [
                    we,
                    c('div', be, [
                        c('img', { class: 'profile-avatar', src: o.fullUrl('/static/images/avatar.png'), alt: '' }, null, 8, ve),
                        c('div', xe, [
                            s(
                                g,
                                {
                                    onKeyup: t[5] || (t[5] = O((n) => o.onSubmitPre(), ['enter'])),
                                    ref: 'formRef',
                                    rules: o.rules,
                                    size: 'large',
                                    model: o.form,
                                },
                                {
                                    default: r(() => [
                                        s(
                                            _,
                                            { prop: 'username' },
                                            {
                                                default: r(() => [
                                                    s(
                                                        p,
                                                        {
                                                            ref: 'usernameRef',
                                                            type: 'text',
                                                            clearable: '',
                                                            modelValue: o.form.username,
                                                            'onUpdate:modelValue': t[1] || (t[1] = (n) => (o.form.username = n)),
                                                            placeholder: o.t('login.Please enter an account'),
                                                        },
                                                        {
                                                            prefix: r(() => [
                                                                s(f, {
                                                                    name: 'fa fa-user',
                                                                    class: 'form-item-icon',
                                                                    size: '16',
                                                                    color: 'var(--el-input-icon-color)',
                                                                }),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue', 'placeholder']
                                                    ),
                                                ]),
                                                _: 1,
                                            }
                                        ),
                                        s(
                                            _,
                                            { prop: 'password' },
                                            {
                                                default: r(() => [
                                                    s(
                                                        p,
                                                        {
                                                            ref: 'passwordRef',
                                                            modelValue: o.form.password,
                                                            'onUpdate:modelValue': t[2] || (t[2] = (n) => (o.form.password = n)),
                                                            type: 'password',
                                                            placeholder: o.t('login.Please input a password'),
                                                            'show-password': '',
                                                        },
                                                        {
                                                            prefix: r(() => [
                                                                s(f, {
                                                                    name: 'fa fa-unlock-alt',
                                                                    class: 'form-item-icon',
                                                                    size: '16',
                                                                    color: 'var(--el-input-icon-color)',
                                                                }),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue', 'placeholder']
                                                    ),
                                                ]),
                                                _: 1,
                                            }
                                        ),
                                        s(
                                            b,
                                            {
                                                modelValue: o.form.keep,
                                                'onUpdate:modelValue': t[3] || (t[3] = (n) => (o.form.keep = n)),
                                                label: o.t('login.Hold session'),
                                                size: 'default',
                                            },
                                            null,
                                            8,
                                            ['modelValue', 'label']
                                        ),
                                        s(_, null, {
                                            default: r(() => [
                                                s(
                                                    k,
                                                    {
                                                        loading: o.state.submitLoading,
                                                        class: 'submit-button',
                                                        round: '',
                                                        type: 'primary',
                                                        size: 'large',
                                                        onClick: t[4] || (t[4] = (n) => o.onSubmitPre()),
                                                    },
                                                    { default: r(() => [P(E(o.t('login.Sign in')), 1)]), _: 1 },
                                                    8,
                                                    ['loading']
                                                ),
                                            ]),
                                            _: 1,
                                        }),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['rules', 'model']
                            ),
                        ]),
                    ]),
                ]),
            ]),
        ])
    )
}
const ze = ne(me, [
    ['render', ye],
    ['__scopeId', 'data-v-d2a5dd0b'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/login.vue'],
])
export { ze as default }
