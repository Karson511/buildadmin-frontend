import {
    i as O,
    e as z,
    m as g,
    X as P,
    o as r,
    h as N,
    Y as q,
    Z as R,
    _ as x,
    O as u,
    P as l,
    l as p,
    W as k,
    V as M,
    U as f,
    $ as F,
    N as T,
    a0 as H,
    r as J,
    D as W,
    n as K,
    k as y,
    a1 as Q,
    a2 as $,
} from './vue-Rh7pEvFB.js'
import { d as ee, r as ne, b as Y, u as E, a as V, c as te, s as oe, _ as j, e as ae, l as re, f as se, g as ie, h as le } from './index-BinDduO1.js'
import { h as ue, o as B } from './router-aZU3GU7Q.js'
import { t as ce } from './useDark-C6CBuWP_.js'
import { D as de, _ as X } from './darkSwitch-BBzzy1TJ.js'
const me = '/api/index/'
function fe(a, n) {
    ee(() => {
        if (ne.currentRoute.value.meta.initialize === !1) return
        const t = Y(),
            e = E()
        if ((!t.isLogin() && e.initialize) || (t.isLogin() && e.userInitialize)) return
        const w = V()
        te({ url: me + 'index', method: 'get', params: { requiredLogin: n ? 1 : 0 } }).then((i) => {
            ue(i.data.rules, i.data.menus),
                e.dataFill(i.data.site),
                w.setStatus(i.data.openMemberCenter),
                O(i.data.userInfo) || ((i.data.userInfo.refresh_token = t.getToken('refresh')), t.dataFill(i.data.userInfo), e.setUserInitialize(!0)),
                i.data.openMemberCenter || w.setLayoutMode('Disable'),
                e.setInitialize(!0),
                oe(),
                typeof a == 'function' && a(i)
        })
    }, 200)()
}
const _e = z({
    __name: 'menuSub',
    props: { menus: { type: Array, required: !0, default: () => [] }, showIcon: { type: Boolean, required: !1, default: !1 } },
    setup(a, { expose: n }) {
        n()
        const w = {
            props: a,
            onClickSubMenu: (i) => {
                var o
                i.path == '/' || ((o = i.meta) == null ? void 0 : o.type) == 'menu_dir' || B(i)
            },
            get isEmpty() {
                return O
            },
            get onClickMenu() {
                return B
            },
            MenuSub: Z,
        }
        return Object.defineProperty(w, '__isScriptSetup', { enumerable: !1, value: !0 }), w
    },
})
function ve(a, n, t, e, w, i) {
    const o = g('Icon'),
        m = g('el-sub-menu'),
        I = g('el-menu-item'),
        _ = P('blur')
    return (
        r(!0),
        N(
            R,
            null,
            q(e.props.menus, (s, d) => {
                var b, S
                return (
                    r(),
                    N(
                        R,
                        { key: d },
                        [
                            e.isEmpty(s.children)
                                ? x(
                                      (r(),
                                      u(
                                          I,
                                          {
                                              key: 1,
                                              onClick: (v) => e.onClickMenu(s),
                                              index: 'column-' + ((S = s.meta) == null ? void 0 : S.id),
                                              class: F(s.name.replace(/[\/]/g, '-')),
                                          },
                                          {
                                              title: l(() => {
                                                  var v
                                                  return [M(f((v = s.meta) == null ? void 0 : v.title), 1)]
                                              }),
                                              default: l(() => {
                                                  var v
                                                  return [
                                                      t.showIcon
                                                          ? (r(),
                                                            u(
                                                                o,
                                                                {
                                                                    key: 0,
                                                                    name: (v = s.meta) == null ? void 0 : v.icon,
                                                                    color: 'var(--el-text-color-primary)',
                                                                },
                                                                null,
                                                                8,
                                                                ['name']
                                                            ))
                                                          : k('v-if', !0),
                                                  ]
                                              }),
                                              _: 2,
                                          },
                                          1032,
                                          ['onClick', 'index', 'class']
                                      )),
                                      [[_]]
                                  )
                                : x(
                                      (r(),
                                      u(
                                          m,
                                          { key: 0, onClick: (v) => e.onClickSubMenu(s), index: `column-${(b = s.meta) == null ? void 0 : b.id}` },
                                          {
                                              title: l(() => {
                                                  var v, U
                                                  return [
                                                      t.showIcon
                                                          ? (r(),
                                                            u(
                                                                o,
                                                                {
                                                                    key: 0,
                                                                    name: (v = s.meta) == null ? void 0 : v.icon,
                                                                    color: 'var(--el-text-color-primary)',
                                                                },
                                                                null,
                                                                8,
                                                                ['name']
                                                            ))
                                                          : k('v-if', !0),
                                                      M(' ' + f((U = s.meta) == null ? void 0 : U.title), 1),
                                                  ]
                                              }),
                                              default: l(() => [
                                                  p(e.MenuSub, { menus: s.children, 'show-icon': t.showIcon }, null, 8, ['menus', 'show-icon']),
                                              ]),
                                              _: 2,
                                          },
                                          1032,
                                          ['onClick', 'index']
                                      )),
                                      [[_]]
                                  ),
                        ],
                        64
                    )
                )
            }),
            128
        )
    )
}
const Z = j(_e, [
        ['render', ve],
        ['__scopeId', 'data-v-8df9e560'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/frontend/components/menuSub.vue'],
    ]),
    he = z({
        __name: 'menu',
        props: { showIcon: { type: Boolean, required: !1, default: !1 } },
        setup(a, { expose: n }) {
            n()
            const t = T(),
                e = H(),
                w = ae(),
                i = Y(),
                o = E(),
                m = V(),
                I = a,
                _ = J({ activeMenu: '' }),
                s = (c) => {
                    var h, D
                    for (const C in m.state.navUserMenus)
                        if (m.state.navUserMenus[C].path == c.path || m.state.navUserMenus[C].name == c.name)
                            return (h = m.state.navUserMenus[C].meta) == null ? void 0 : h.id
                    for (const C in o.headNav)
                        if (o.headNav[C].path == c.path || o.headNav[C].name == c.name) return (D = o.headNav[C].meta) == null ? void 0 : D.id
                },
                d = (c) => {
                    if (c.path == '/') return (_.activeMenu = 'index')
                    const h = s(c)
                    h ? (_.activeMenu = 'column-' + h) : c.path.startsWith('/user') && (_.activeMenu = 'user')
                }
            d(t)
            const b = (c) => {
                    if (S(o.headNav, c) || S(m.state.navUserMenus, c)) {
                        const h = _.activeMenu
                        ;(_.activeMenu = ''),
                            K(() => {
                                _.activeMenu = h
                            })
                    }
                },
                S = (c, h) => (h.indexOf('language-switch') === 0 || h == 'theme-switch' ? !0 : v(c, h)),
                v = (c, h) => {
                    var D, C, A
                    for (const L in c) {
                        if (`column-${(D = c[L].meta) == null ? void 0 : D.id}` == h)
                            return ((C = c[L].meta) == null ? void 0 : C.menu_type) == 'link'
                        if ((A = c[L].children) != null && A.length) return v(c[L].children, h)
                    }
                    return !1
                }
            W(
                () => t.path,
                () => {
                    d(t)
                }
            )
            const U = {
                route: t,
                router: e,
                config: w,
                userInfo: i,
                siteConfig: o,
                memberCenter: m,
                props: I,
                state: _,
                findMenu: s,
                setActiveMenu: d,
                onSelect: b,
                noNeedActive: S,
                isExternalLink: v,
                get editDefaultLang() {
                    return ie
                },
                get fullUrl() {
                    return se
                },
                MenuSub: Z,
                get toggleDark() {
                    return ce
                },
                DarkSwitch: de,
                get layoutMenuRef() {
                    return re
                },
            }
            return Object.defineProperty(U, '__isScriptSetup', { enumerable: !1, value: !0 }), U
        },
    }),
    pe = { class: 'header-user-box' },
    ge = ['src']
function we(a, n, t, e, w, i) {
    const o = g('Icon'),
        m = g('el-menu-item'),
        I = g('el-sub-menu'),
        _ = g('el-menu'),
        s = P('blur')
    return (
        r(),
        u(
            _,
            { ref: 'layoutMenuRef', 'default-active': e.state.activeMenu, onSelect: e.onSelect },
            {
                default: l(() => [
                    x(
                        (r(),
                        u(
                            m,
                            { onClick: n[0] || (n[0] = (d) => e.router.push({ name: '/' })), index: 'index' },
                            {
                                title: l(() => [M(f(a.$t('Home')), 1)]),
                                default: l(() => [
                                    e.props.showIcon
                                        ? (r(), u(o, { key: 0, name: 'fa fa-home', color: 'var(--el-text-color-primary)' }))
                                        : k('v-if', !0),
                                ]),
                                _: 1,
                            }
                        )),
                        [[s]]
                    ),
                    k(' 动态菜单 '),
                    p(e.MenuSub, { menus: e.siteConfig.headNav, 'show-icon': t.showIcon }, null, 8, ['menus', 'show-icon']),
                    e.memberCenter.state.open
                        ? (r(),
                          N(
                              R,
                              { key: 0 },
                              [
                                  e.userInfo.isLogin()
                                      ? x(
                                            (r(),
                                            u(
                                                I,
                                                {
                                                    key: 0,
                                                    onClick:
                                                        n[3] || (n[3] = (d) => (a.$attrs.mode == 'vertical' ? '' : e.router.push({ name: 'user' }))),
                                                    index: 'user-box',
                                                },
                                                {
                                                    title: l(() => [
                                                        y('div', pe, [
                                                            y(
                                                                'img',
                                                                {
                                                                    class: F([
                                                                        'header-user-avatar',
                                                                        a.$attrs.mode == 'vertical' ? 'icon-header-user-avatar' : '',
                                                                    ]),
                                                                    src: e.fullUrl(
                                                                        e.userInfo.avatar ? e.userInfo.avatar : '/static/images/avatar.png'
                                                                    ),
                                                                    alt: '',
                                                                },
                                                                null,
                                                                10,
                                                                ge
                                                            ),
                                                            M(' ' + f(e.userInfo.nickname), 1),
                                                        ]),
                                                    ]),
                                                    default: l(() => [
                                                        x(
                                                            (r(),
                                                            u(
                                                                m,
                                                                { onClick: n[1] || (n[1] = (d) => e.router.push({ name: 'user' })), index: 'user' },
                                                                {
                                                                    default: l(() => [
                                                                        t.showIcon
                                                                            ? (r(),
                                                                              u(o, {
                                                                                  key: 0,
                                                                                  name: 'fa fa-user-circle',
                                                                                  color: 'var(--el-text-color-primary)',
                                                                              }))
                                                                            : k('v-if', !0),
                                                                        M(' ' + f(a.$t('Member Center')), 1),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            )),
                                                            [[s]]
                                                        ),
                                                        p(e.MenuSub, { menus: e.memberCenter.state.navUserMenus, 'show-icon': t.showIcon }, null, 8, [
                                                            'menus',
                                                            'show-icon',
                                                        ]),
                                                        p(e.MenuSub, { menus: e.memberCenter.state.viewRoutes, 'show-icon': t.showIcon }, null, 8, [
                                                            'menus',
                                                            'show-icon',
                                                        ]),
                                                        x(
                                                            (r(),
                                                            u(
                                                                m,
                                                                { onClick: n[2] || (n[2] = (d) => e.userInfo.logout()), index: 'user-logout' },
                                                                {
                                                                    default: l(() => [
                                                                        t.showIcon
                                                                            ? (r(),
                                                                              u(o, {
                                                                                  key: 0,
                                                                                  name: 'fa fa-sign-out',
                                                                                  color: 'var(--el-text-color-primary)',
                                                                              }))
                                                                            : k('v-if', !0),
                                                                        M(' ' + f(a.$t('Logout login')), 1),
                                                                    ]),
                                                                    _: 1,
                                                                }
                                                            )),
                                                            [[s]]
                                                        ),
                                                    ]),
                                                    _: 1,
                                                }
                                            )),
                                            [[s]]
                                        )
                                      : x(
                                            (r(),
                                            u(
                                                m,
                                                { key: 1, onClick: n[4] || (n[4] = (d) => e.router.push({ name: 'user' })), index: 'user' },
                                                {
                                                    default: l(() => [
                                                        t.showIcon
                                                            ? (r(),
                                                              u(o, { key: 0, name: 'fa fa-user-circle', color: 'var(--el-text-color-primary)' }))
                                                            : k('v-if', !0),
                                                        M(' ' + f(a.$t('Member Center')), 1),
                                                    ]),
                                                    _: 1,
                                                }
                                            )),
                                            [[s]]
                                        ),
                                  x(
                                      (r(),
                                      u(
                                          I,
                                          { index: 'language-switch', class: 'language-switch' },
                                          {
                                              title: l(() => [
                                                  t.showIcon
                                                      ? (r(), u(o, { key: 0, name: 'local-lang', color: 'var(--el-text-color-primary)' }))
                                                      : k('v-if', !0),
                                                  M(' ' + f(a.$t('Language')), 1),
                                              ]),
                                              default: l(() => [
                                                  (r(!0),
                                                  N(
                                                      R,
                                                      null,
                                                      q(
                                                          e.config.lang.langArray,
                                                          (d) => (
                                                              r(),
                                                              u(
                                                                  m,
                                                                  {
                                                                      onClick: (b) => e.editDefaultLang(d.name),
                                                                      key: d.name,
                                                                      index: 'language-switch-' + d.value,
                                                                      class: 'language-switch',
                                                                  },
                                                                  {
                                                                      default: l(() => [
                                                                          t.showIcon
                                                                              ? (r(),
                                                                                u(o, {
                                                                                    key: 0,
                                                                                    name: 'fa fa-circle-o',
                                                                                    color: 'var(--el-text-color-primary)',
                                                                                }))
                                                                              : k('v-if', !0),
                                                                          M(' ' + f(d.value), 1),
                                                                      ]),
                                                                      _: 2,
                                                                  },
                                                                  1032,
                                                                  ['onClick', 'index']
                                                              )
                                                          )
                                                      ),
                                                      128
                                                  )),
                                              ]),
                                              _: 1,
                                          }
                                      )),
                                      [[s]]
                                  ),
                                  p(
                                      m,
                                      { index: 'theme-switch', class: F(['theme-switch', a.$attrs.mode + '-theme-switch']) },
                                      { default: l(() => [p(e.DarkSwitch, { onClick: n[5] || (n[5] = (d) => e.toggleDark()) })]), _: 1 },
                                      8,
                                      ['class']
                                  ),
                              ],
                              64
                          ))
                        : k('v-if', !0),
                ]),
                _: 1,
            },
            8,
            ['default-active']
        )
    )
}
const ye = j(he, [
        ['render', we],
        ['__scopeId', 'data-v-76d5691a'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/frontend/components/menu.vue'],
    ]),
    be = z({
        __name: 'header',
        setup(a, { expose: n }) {
            n()
            const t = T(),
                e = H(),
                w = E(),
                i = V()
            W(
                () => t.path,
                () => {
                    i.toggleMenuExpand(!1)
                },
                { immediate: !0 }
            ),
                fe()
            const o = {
                route: t,
                router: e,
                siteConfig: w,
                memberCenter: i,
                Menu: ye,
                get layoutMenuScrollbarRef() {
                    return le
                },
            }
            return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o
        },
    }),
    G = (a) => (Q('data-v-30820984'), (a = a()), $(), a),
    ke = G(() => y('img', { src: X }, null, -1)),
    Ce = { class: 'site-name' },
    Me = { class: 'header-row' },
    Ie = G(() => y('img', { src: X }, null, -1)),
    xe = { class: 'site-name' }
function Se(a, n, t, e, w, i) {
    const o = g('Icon'),
        m = g('el-scrollbar'),
        I = g('el-col'),
        _ = g('el-row'),
        s = g('el-drawer'),
        d = g('el-header')
    return (
        r(),
        u(
            d,
            { class: 'header' },
            {
                default: l(() => [
                    p(
                        _,
                        { justify: 'center' },
                        {
                            default: l(() => [
                                p(
                                    I,
                                    { class: 'header-row', xs: 24, sm: 24, md: 16 },
                                    {
                                        default: l(() => [
                                            y('div', { onClick: n[0] || (n[0] = (b) => e.router.push({ name: '/' })), class: 'header-logo' }, [
                                                ke,
                                                y('span', Ce, f(e.siteConfig.siteName), 1),
                                            ]),
                                            e.memberCenter.state.menuExpand
                                                ? k('v-if', !0)
                                                : (r(),
                                                  N(
                                                      'div',
                                                      {
                                                          key: 0,
                                                          onClick: n[1] || (n[1] = (b) => e.memberCenter.toggleMenuExpand(!0)),
                                                          class: 'user-menus-expand hidden-md-and-up',
                                                      },
                                                      [p(o, { name: 'fa fa-indent', color: 'var(--el-color-primary)', size: '20' })]
                                                  )),
                                            p(
                                                m,
                                                { ref: 'layoutMenuScrollbarRef', class: 'hidden-sm-and-down' },
                                                {
                                                    default: l(() => [
                                                        p(e.Menu, { class: 'frontend-header-menu', ellipsis: !1, mode: 'horizontal' }),
                                                    ]),
                                                    _: 1,
                                                },
                                                512
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                ),
                            ]),
                            _: 1,
                        }
                    ),
                    p(
                        s,
                        {
                            class: 'ba-aside-drawer',
                            'append-to-body': !0,
                            modelValue: e.memberCenter.state.menuExpand,
                            'onUpdate:modelValue': n[4] || (n[4] = (b) => (e.memberCenter.state.menuExpand = b)),
                            'with-header': !1,
                            direction: 'ltr',
                            size: '40%',
                        },
                        {
                            default: l(() => [
                                y('div', Me, [
                                    y('div', { onClick: n[2] || (n[2] = (b) => e.router.push({ name: '/' })), class: 'header-logo' }, [
                                        Ie,
                                        y('span', xe, f(e.siteConfig.siteName), 1),
                                    ]),
                                    y(
                                        'div',
                                        {
                                            onClick: n[3] || (n[3] = (b) => e.memberCenter.toggleMenuExpand(!1)),
                                            class: 'user-menus-expand hidden-md-and-up',
                                        },
                                        [p(o, { name: 'fa fa-dedent', color: 'var(--el-color-primary)', size: '20' })]
                                    ),
                                ]),
                                p(e.Menu, { 'show-icon': !0, mode: 'vertical' }),
                            ]),
                            _: 1,
                        },
                        8,
                        ['modelValue']
                    ),
                ]),
                _: 1,
            }
        )
    )
}
const Ve = j(be, [
        ['render', Se],
        ['__scopeId', 'data-v-30820984'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/frontend/components/header.vue'],
    ]),
    Ue = z({
        __name: 'footer',
        setup(a, { expose: n }) {
            n()
            const e = { siteConfig: E() }
            return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
        },
    }),
    De = { href: 'http://beian.miit.gov.cn/' }
function Ne(a, n, t, e, w, i) {
    const o = g('el-footer')
    return (
        r(),
        u(
            o,
            { class: 'footer' },
            {
                default: l(() => [
                    y('div', null, [
                        M(' Copyright @ 2020~' + f(new Date().getFullYear()) + ' ' + f(e.siteConfig.siteName) + ' ' + f(a.$t('Copyright')) + ' ', 1),
                        y('a', De, f(e.siteConfig.recordNumber), 1),
                    ]),
                ]),
                _: 1,
            }
        )
    )
}
const Ae = j(Ue, [
    ['render', Ne],
    ['__scopeId', 'data-v-eeef5dc7'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/frontend/components/footer.vue'],
])
export { Ae as F, Ve as H, fe as i }
