import {
    e as A,
    a9 as H,
    s as M,
    m as f,
    o as u,
    h as x,
    W as B,
    j as ee,
    U as T,
    O as S,
    $ as L,
    v as ce,
    I as Je,
    Y as oe,
    Z as N,
    P as s,
    l as n,
    k as v,
    N as $,
    r as U,
    f as Ce,
    C as Y,
    ac as se,
    n as q,
    B as Be,
    ad as Ze,
    _ as j,
    ae as Pe,
    af as he,
    a0 as Ee,
    p as be,
    a7 as ae,
    V as R,
    a1 as Ne,
    a2 as ze,
    ag as Ve,
    ah as Ge,
    X as Re,
    ai as Qe,
    aj as ke,
    ak as je,
    ab as $e,
    D as eo,
    al as oo,
    i as Ae,
} from './vue-Rh7pEvFB.js'
import {
    e as D,
    u as Se,
    S as te,
    H as re,
    I as ye,
    _ as I,
    n as P,
    h as W,
    l as ue,
    J as we,
    i as le,
    K as to,
    x as Ue,
    L as Q,
    M as no,
    N as Te,
    O as K,
    P as ao,
    w as Oe,
    Q as pe,
    r as He,
    R as Ie,
    T as lo,
    f as ro,
    g as so,
    U as qe,
    V as io,
    W as co,
} from './index-C3vonoRT.js'
import { c as uo, g as xe, o as Fe, r as ie, s as mo, a as fo } from './router-DCOnE4m1.js'
import { _ as _o, D as go } from './darkSwitch-DGaQFbkU.js'
import { I as vo } from './index-DQwP9Y7u.js'
import { t as po } from './useDark-BqvPuHnb.js'
import { a as bo, i as yo } from './index-BrGKKT2t.js'
import { F as Co } from './index-BC54TMpd.js'
import './index-CK3pnx59.js'
const ho = A({
        __name: 'logo',
        setup(d, { expose: o }) {
            o(),
                H((r) => ({
                    '453dac97-config.layout.layoutMode != "Streamline" ?  config.getColorVal("menuTopBarBackground"):"transparent"':
                        M(t).layout.layoutMode != 'Streamline' ? M(t).getColorVal('menuTopBarBackground') : 'transparent',
                }))
            const t = D(),
                e = Se(),
                a = {
                    config: t,
                    siteConfig: e,
                    onMenuCollapse: function () {
                        t.layout.shrink && !t.layout.menuCollapse && uo(),
                            t.setLayout('menuCollapse', !t.layout.menuCollapse),
                            te.set(re, { layoutMode: t.layout.layoutMode, menuCollapse: t.layout.menuCollapse }),
                            setTimeout(() => {
                                ye()
                            }, 350)
                    },
                }
            return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
        },
    }),
    ko = { class: 'layout-logo' },
    So = { key: 0, class: 'logo-img', src: _o, alt: 'logo' }
function wo(d, o, t, e, i, a) {
    const r = f('Icon')
    return (
        u(),
        x('div', ko, [
            e.config.layout.menuCollapse ? B('v-if', !0) : (u(), x('img', So)),
            e.config.layout.menuCollapse
                ? B('v-if', !0)
                : (u(),
                  x(
                      'div',
                      { key: 1, style: ee({ color: e.config.getColorVal('menuActiveColor') }), class: 'website-name' },
                      T(e.siteConfig.siteName),
                      5
                  )),
            e.config.layout.layoutMode != 'Streamline'
                ? (u(),
                  S(
                      r,
                      {
                          key: 2,
                          onClick: e.onMenuCollapse,
                          name: e.config.layout.menuCollapse ? 'fa fa-indent' : 'fa fa-dedent',
                          class: L([e.config.layout.menuCollapse ? 'unfold' : '', 'fold']),
                          color: e.config.getColorVal('menuActiveColor'),
                          size: '18',
                      },
                      null,
                      8,
                      ['name', 'class', 'color']
                  ))
                : B('v-if', !0),
        ])
    )
}
const We = I(ho, [
        ['render', wo],
        ['__scopeId', 'data-v-453dac97'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/logo.vue'],
    ]),
    To = A({
        __name: 'menuTree',
        props: { menus: { type: Array, required: !0, default: () => [] }, extends: { type: Object, required: !1, default: () => ({ level: 1 }) } },
        setup(d, { expose: o }) {
            o(), H((c) => ({ 'b182dd56-config.getColorVal("menuActiveBackground")': M(e).getColorVal('menuActiveBackground') }))
            const { t } = ce.useI18n(),
                e = D(),
                i = d,
                r = {
                    t,
                    config: e,
                    props: i,
                    onClickSubMenu: (c) => {
                        var _, m
                        if (
                            ((_ = i.extends) == null ? void 0 : _.position) == 'horizontal' &&
                            i.extends.level <= 1 &&
                            (m = c.children) != null &&
                            m.length
                        ) {
                            const l = xe(c.children)
                            l ? Fe(l) : Je({ type: 'error', message: t('utils.No child menu to jump to!') })
                        }
                    },
                    get onClickMenu() {
                        return Fe
                    },
                }
            return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r
        },
    })
function xo(d, o, t, e, i, a) {
    const r = f('Icon'),
        c = f('menu-tree', !0),
        _ = f('el-sub-menu'),
        m = f('el-menu-item')
    return (
        u(!0),
        x(
            N,
            null,
            oe(
                e.props.menus,
                (l) => (
                    u(),
                    x(
                        N,
                        null,
                        [
                            l.children && l.children.length > 0
                                ? (u(),
                                  S(
                                      _,
                                      { onClick: (C) => e.onClickSubMenu(l), index: l.path, key: l.path },
                                      {
                                          title: s(() => {
                                              var C, b, p, g
                                              return [
                                                  n(
                                                      r,
                                                      {
                                                          color: e.config.getColorVal('menuColor'),
                                                          name:
                                                              (C = l.meta) != null && C.icon
                                                                  ? (b = l.meta) == null
                                                                      ? void 0
                                                                      : b.icon
                                                                  : e.config.layout.menuDefaultIcon,
                                                      },
                                                      null,
                                                      8,
                                                      ['color', 'name']
                                                  ),
                                                  v(
                                                      'span',
                                                      null,
                                                      T(
                                                          (p = l.meta) != null && p.title
                                                              ? (g = l.meta) == null
                                                                  ? void 0
                                                                  : g.title
                                                              : d.$t('noTitle')
                                                      ),
                                                      1
                                                  ),
                                              ]
                                          }),
                                          default: s(() => [
                                              n(
                                                  c,
                                                  { extends: { ...e.props.extends, level: e.props.extends.level + 1 }, menus: l.children },
                                                  null,
                                                  8,
                                                  ['extends', 'menus']
                                              ),
                                          ]),
                                          _: 2,
                                      },
                                      1032,
                                      ['onClick', 'index']
                                  ))
                                : (u(),
                                  S(
                                      m,
                                      { index: l.path, key: l.path, onClick: (C) => e.onClickMenu(l) },
                                      {
                                          default: s(() => {
                                              var C, b, p, g
                                              return [
                                                  n(
                                                      r,
                                                      {
                                                          color: e.config.getColorVal('menuColor'),
                                                          name:
                                                              (C = l.meta) != null && C.icon
                                                                  ? (b = l.meta) == null
                                                                      ? void 0
                                                                      : b.icon
                                                                  : e.config.layout.menuDefaultIcon,
                                                      },
                                                      null,
                                                      8,
                                                      ['color', 'name']
                                                  ),
                                                  v(
                                                      'span',
                                                      null,
                                                      T(
                                                          (p = l.meta) != null && p.title
                                                              ? (g = l.meta) == null
                                                                  ? void 0
                                                                  : g.title
                                                              : d.$t('noTitle')
                                                      ),
                                                      1
                                                  ),
                                              ]
                                          }),
                                          _: 2,
                                      },
                                      1032,
                                      ['index', 'onClick']
                                  )),
                        ],
                        64
                    )
                )
            ),
            256
        )
    )
}
const de = I(To, [
        ['render', xo],
        ['__scopeId', 'data-v-b182dd56'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/menus/menuTree.vue'],
    ]),
    Mo = A({
        __name: 'menuVertical',
        setup(d, { expose: o }) {
            o(),
                H((l) => ({
                    '6ade5d88-verticalMenusScrollbarHeight': r.value,
                    '6ade5d88-config.getColorVal("menuBackground")': M(t).getColorVal('menuBackground'),
                    '6ade5d88-config.getColorVal("menuColor")': M(t).getColorVal('menuColor'),
                    '6ade5d88-config.getColorVal("menuActiveColor")': M(t).getColorVal('menuActiveColor'),
                }))
            const t = D(),
                e = P(),
                i = $(),
                a = U({ defaultActive: '' }),
                r = Ce(() => {
                    let l = 0
                    return (
                        t.layout.menuShowTopBar && (l = 50),
                        t.layout.layoutMode == 'Default' ? 'calc(100vh - ' + (32 + l) + 'px)' : 'calc(100vh - ' + l + 'px)'
                    )
                }),
                c = (l) => {
                    const C = e.getTabsViewDataByRoute(l)
                    C && (a.defaultActive = C.meta.matched)
                },
                _ = () => {
                    q(() => {
                        var C
                        let l = document.querySelector('.el-menu.layouts-menu-vertical li.is-active')
                        if (!l) return !1
                        ;(C = W.value) == null || C.setScrollTop(l.offsetTop)
                    })
                }
            Y(() => {
                c(i), _()
            }),
                se((l) => {
                    c(l)
                })
            const m = {
                config: t,
                navTabs: e,
                route: i,
                state: a,
                verticalMenusScrollbarHeight: r,
                currentRouteActive: c,
                verticalMenusScroll: _,
                MenuTree: de,
                get layoutMenuRef() {
                    return ue
                },
                get layoutMenuScrollbarRef() {
                    return W
                },
            }
            return Object.defineProperty(m, '__isScriptSetup', { enumerable: !1, value: !0 }), m
        },
    })
function Bo(d, o, t, e, i, a) {
    const r = f('el-menu'),
        c = f('el-scrollbar')
    return (
        u(),
        S(
            c,
            { ref: 'layoutMenuScrollbarRef', class: 'vertical-menus-scrollbar' },
            {
                default: s(() => [
                    n(
                        r,
                        {
                            class: 'layouts-menu-vertical',
                            'collapse-transition': !1,
                            'unique-opened': e.config.layout.menuUniqueOpened,
                            'default-active': e.state.defaultActive,
                            collapse: e.config.layout.menuCollapse,
                            ref: 'layoutMenuRef',
                        },
                        { default: s(() => [n(e.MenuTree, { menus: e.navTabs.state.tabsViewRoutes }, null, 8, ['menus'])]), _: 1 },
                        8,
                        ['unique-opened', 'default-active', 'collapse']
                    ),
                ]),
                _: 1,
            },
            512
        )
    )
}
const Vo = I(Mo, [
        ['render', Bo],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/menus/menuVertical.vue'],
    ]),
    Ro = A({
        __name: 'menuVerticalChildren',
        setup(d, { expose: o }) {
            o(),
                H((l) => ({
                    '724f224b-verticalMenusScrollbarHeight': r.value,
                    '724f224b-config.getColorVal("menuBackground")': M(t).getColorVal('menuBackground'),
                    '724f224b-config.getColorVal("menuColor")': M(t).getColorVal('menuColor'),
                    '724f224b-config.getColorVal("menuActiveColor")': M(t).getColorVal('menuActiveColor'),
                }))
            const t = D(),
                e = P(),
                i = $(),
                a = U({ defaultActive: '', routeChildren: [] }),
                r = Ce(() => {
                    let l = 0
                    return (
                        t.layout.menuShowTopBar && (l = 50),
                        t.layout.layoutMode == 'Default' ? 'calc(100vh - ' + (32 + l) + 'px)' : 'calc(100vh - ' + l + 'px)'
                    )
                }),
                c = (l) => {
                    const C = e.getTabsViewDataByRoute(l)
                    C && (a.defaultActive = C.meta.matched)
                    let b = e.getTabsViewDataByRoute(l, 'above')
                    b
                        ? b.children && b.children.length > 0
                            ? (a.routeChildren = b.children)
                            : (a.routeChildren = [b])
                        : a.routeChildren || (a.routeChildren = e.state.tabsViewRoutes)
                },
                _ = () => {
                    q(() => {
                        var C
                        let l = document.querySelector('.el-menu.layouts-menu-vertical-children li.is-active')
                        if (!l) return !1
                        ;(C = W.value) == null || C.setScrollTop(l.offsetTop)
                    })
                }
            Y(() => {
                c(i), _(), new we(W.value.wrapRef)
            }),
                se((l) => {
                    c(l)
                })
            const m = {
                config: t,
                navTabs: e,
                route: i,
                state: a,
                verticalMenusScrollbarHeight: r,
                currentRouteActive: c,
                verticalMenusScroll: _,
                MenuTree: de,
                get layoutMenuRef() {
                    return ue
                },
                get layoutMenuScrollbarRef() {
                    return W
                },
            }
            return Object.defineProperty(m, '__isScriptSetup', { enumerable: !1, value: !0 }), m
        },
    })
function Ao(d, o, t, e, i, a) {
    const r = f('el-menu'),
        c = f('el-scrollbar')
    return (
        u(),
        S(
            c,
            { ref: 'layoutMenuScrollbarRef', class: 'children-vertical-menus-scrollbar' },
            {
                default: s(() => [
                    n(
                        r,
                        {
                            class: 'layouts-menu-vertical-children',
                            'collapse-transition': !1,
                            'unique-opened': e.config.layout.menuUniqueOpened,
                            'default-active': e.state.defaultActive,
                            collapse: e.config.layout.menuCollapse,
                            ref: 'layoutMenuRef',
                        },
                        {
                            default: s(() => [
                                e.state.routeChildren.length > 0
                                    ? (u(), S(e.MenuTree, { key: 0, menus: e.state.routeChildren }, null, 8, ['menus']))
                                    : B('v-if', !0),
                            ]),
                            _: 1,
                        },
                        8,
                        ['unique-opened', 'default-active', 'collapse']
                    ),
                ]),
                _: 1,
            },
            512
        )
    )
}
const Io = I(Ro, [
        ['render', Ao],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/menus/menuVerticalChildren.vue'],
    ]),
    Fo = A({
        name: 'layout/aside',
        __name: 'aside',
        setup(d, { expose: o }) {
            o(), H((r) => ({ 'f64a682a-menuWidth': i.value }))
            const t = D(),
                e = P(),
                i = Ce(() => t.menuWidth()),
                a = { config: t, navTabs: e, menuWidth: i, Logo: We, MenuVertical: Vo, MenuVerticalChildren: Io }
            return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
        },
    })
function Lo(d, o, t, e, i, a) {
    const r = f('el-aside')
    return e.navTabs.state.tabFullScreen
        ? B('v-if', !0)
        : (u(),
          S(
              r,
              { key: 0, class: L('layout-aside-' + e.config.layout.layoutMode + ' ' + (e.config.layout.shrink ? 'shrink' : '')) },
              {
                  default: s(() => [
                      e.config.layout.menuShowTopBar ? (u(), S(e.Logo, { key: 0 })) : B('v-if', !0),
                      e.config.layout.layoutMode == 'Double' ? (u(), S(e.MenuVerticalChildren, { key: 1 })) : (u(), S(e.MenuVertical, { key: 2 })),
                  ]),
                  _: 1,
              },
              8,
              ['class']
          ))
}
const Me = I(Fo, [
    ['render', Lo],
    ['__scopeId', 'data-v-f64a682a'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/aside.vue'],
])
function Ke() {
    if (!Be()) throw new Error('useCurrentInstance() can only be used inside setup() or functional components!')
    const { appContext: d } = Be()
    return { proxy: d.config.globalProperties }
}
const Do = A({
        __name: 'index',
        props: { width: { type: Number, required: !1, default: 150 }, items: { type: Array, required: !0, default: () => [] } },
        emits: ['menuClick', 'hideContextmenu'],
        setup(d, { expose: o, emit: t }) {
            const e = d,
                i = t,
                a = U({ show: !1, axis: { x: 0, y: 0 }, sourceData: null, showArrow: !0, arrowAxis: 10 }),
                r = (l, C) => {
                    ;(a.showArrow = !0), (a.sourceData = l)
                    const b = document.documentElement.clientHeight - C.y - (e.items.length * 40 + 20),
                        p = document.documentElement.clientWidth - C.x - (e.width + 20)
                    b < 0 && ((C.y += b), (a.showArrow = !1)), p < 0 && ((C.x += p), (a.showArrow = !1)), (a.axis = C), (a.show = !0)
                },
                c = () => {
                    ;(a.show = !1), i('hideContextmenu')
                },
                _ = (l) => {
                    l.disabled || ((l.sourceData = Ze(a.sourceData)), i('menuClick', l))
                }
            o({ onShowContextmenu: r, onHideContextmenu: c }),
                Y(() => {
                    le(document, 'click', c),
                        le(document, 'scroll', c),
                        le(document, 'keydown', (l) => {
                            l.key === 'Escape' && c()
                        })
                })
            const m = { props: e, emits: i, state: a, onShowContextmenu: r, onHideContextmenu: c, onMenuItemClick: _ }
            return Object.defineProperty(m, '__isScriptSetup', { enumerable: !1, value: !0 }), m
        },
    }),
    Po = { class: 'el-dropdown-menu' },
    Eo = ['onClick']
function No(d, o, t, e, i, a) {
    const r = f('Icon')
    return (
        u(),
        S(
            he,
            { name: 'el-zoom-in-center', persisted: '' },
            {
                default: s(() => [
                    j(
                        (u(),
                        x(
                            'div',
                            {
                                class: 'el-popper is-pure is-light el-dropdown__popper ba-contextmenu',
                                style: ee(`top: ${e.state.axis.y + 5}px;left: ${e.state.axis.x - 14}px;width:${e.props.width}px`),
                                key: Math.random(),
                                'aria-hidden': 'false',
                                'data-popper-placement': 'bottom',
                            },
                            [
                                v('ul', Po, [
                                    (u(!0),
                                    x(
                                        N,
                                        null,
                                        oe(
                                            e.props.items,
                                            (c, _) => (
                                                u(),
                                                x(
                                                    'li',
                                                    {
                                                        key: _,
                                                        class: L(['el-dropdown-menu__item', c.disabled ? 'is-disabled' : '']),
                                                        tabindex: '-1',
                                                        onClick: (m) => e.onMenuItemClick(c),
                                                    },
                                                    [n(r, { size: '12', name: c.icon }, null, 8, ['name']), v('span', null, T(c.label), 1)],
                                                    10,
                                                    Eo
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                ]),
                                e.state.showArrow
                                    ? (u(), x('span', { key: 0, class: 'el-popper__arrow', style: ee({ left: `${e.state.arrowAxis}px` }) }, null, 4))
                                    : B('v-if', !0),
                            ],
                            4
                        )),
                        [[Pe, e.state.show]]
                    ),
                ]),
                _: 1,
            }
        )
    )
}
const zo = I(Do, [
        ['render', No],
        ['__scopeId', 'data-v-d9e946e7'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/components/contextmenu/index.vue'],
    ]),
    jo = A({
        __name: 'tabs',
        setup(d, { expose: o }) {
            H((w) => ({
                'ab5c1ed4-config.getColorVal("headerBarTabColor")': M(i).getColorVal('headerBarTabColor'),
                'ab5c1ed4-config.getColorVal("headerBarTabActiveColor")': M(i).getColorVal('headerBarTabActiveColor'),
                'ab5c1ed4-config.layout.layoutMode == "Default" ? "none":config.getColorVal("headerBarBackground")':
                    M(i).layout.layoutMode == 'Default' ? 'none' : M(i).getColorVal('headerBarBackground'),
            }))
            const t = $(),
                e = Ee(),
                i = D(),
                a = P(),
                { proxy: r } = Ke(),
                c = be(),
                _ = to(),
                m = be(),
                l = U({
                    contextmenuItems: [
                        { name: 'refresh', label: '重新加载', icon: 'fa fa-refresh' },
                        { name: 'close', label: '关闭标签', icon: 'fa fa-times' },
                        { name: 'fullScreen', label: '当前标签全屏', icon: 'el-icon-FullScreen' },
                        { name: 'closeOther', label: '关闭其他标签', icon: 'fa fa-minus' },
                        { name: 'closeAll', label: '关闭全部标签', icon: 'fa fa-stop' },
                    ],
                }),
                C = U({ width: '0', transform: 'translateX(0px)' }),
                b = (w) => {
                    e.push(w.fullPath)
                },
                p = function (w) {
                    if (!w) return !1
                    ;(C.width = w.clientWidth + 'px'), (C.transform = `translateX(${w.offsetLeft}px)`)
                    let V = w.offsetLeft + w.clientWidth - c.value.clientWidth
                    w.offsetLeft < c.value.scrollLeft ? c.value.scrollTo(w.offsetLeft, 0) : V > c.value.scrollLeft && c.value.scrollTo(V, 0)
                },
                g = () => {
                    const w = a.state.tabsView.slice(-1)[0]
                    w ? e.push(w.fullPath) : e.push(Ue)
                },
                y = (w) => {
                    var V
                    a._closeTab(w),
                        r.eventBus.emit('onTabViewClose', w),
                        ((V = a.state.activeRoute) == null ? void 0 : V.fullPath) === w.fullPath
                            ? g()
                            : (a._setActiveRoute(a.state.activeRoute),
                              q(() => {
                                  p(_.value[a.state.activeIndex])
                              })),
                        m.value.onHideContextmenu()
                },
                E = (w) => {
                    var V
                    a._closeTabs(w),
                        a._setActiveRoute(w),
                        ((V = a.state.activeRoute) == null ? void 0 : V.fullPath) !== t.fullPath && e.push(w.fullPath)
                },
                J = (w) => {
                    var z
                    let V = xe(a.state.tabsViewRoutes)
                    if (w && V && V.path == w.fullPath) return E(w)
                    if (V && V.path == ((z = a.state.activeRoute) == null ? void 0 : z.fullPath)) return E(a.state.activeRoute)
                    a._closeTabs(!1), V && ie(V.path)
                },
                ne = (w, V) => {
                    ;(l.contextmenuItems[0].disabled = t.fullPath !== w.fullPath),
                        (l.contextmenuItems[4].disabled = l.contextmenuItems[3].disabled = a.state.tabsView.length == 1)
                    const { clientX: z, clientY: Ye } = V
                    m.value.onShowContextmenu(w, { x: z, y: Ye })
                },
                O = (w) => {
                    const { name: V, sourceData: z } = w
                    if (z)
                        switch (V) {
                            case 'refresh':
                                r.eventBus.emit('onTabViewRefresh', z)
                                break
                            case 'close':
                                y(z)
                                break
                            case 'closeOther':
                                E(z)
                                break
                            case 'closeAll':
                                J(z)
                                break
                            case 'fullScreen':
                                t.fullPath !== z.fullPath && e.push(z.fullPath), a.setFullScreen(!0)
                                break
                        }
                },
                h = function (w) {
                    a._addTab(w),
                        a._setActiveRoute(w),
                        q(() => {
                            p(_.value[a.state.activeIndex])
                        })
                }
            se(async (w) => {
                h(w)
            }),
                Y(() => {
                    h(e.currentRoute.value), new we(c.value)
                })
            const k = (w) => {
                    for (const V in a.state.tabsView)
                        if (a.state.tabsView[V].fullPath == w) {
                            y(a.state.tabsView[V])
                            break
                        }
                },
                Z = (w, V) => {
                    a._updateTabTitle(w, V),
                        q(() => {
                            p(_.value[a.state.activeIndex])
                        })
                }
            o({ closeAllTab: J, closeTabByPath: k, updateTabTitle: Z })
            const G = {
                route: t,
                router: e,
                config: i,
                navTabs: a,
                proxy: r,
                tabScrollbarRef: c,
                tabsRefs: _,
                contextmenuRef: m,
                state: l,
                activeBoxStyle: C,
                onTab: b,
                selectNavTab: p,
                toLastTab: g,
                closeTab: y,
                closeOtherTab: E,
                closeAllTab: J,
                onContextmenu: ne,
                onContextMenuClick: O,
                updateTab: h,
                closeTabByPath: k,
                updateTabTitle: Z,
                Contextmenu: zo,
            }
            return Object.defineProperty(G, '__isScriptSetup', { enumerable: !1, value: !0 }), G
        },
    }),
    Uo = { class: 'nav-tabs', ref: 'tabScrollbarRef' },
    Oo = ['onClick', 'onContextmenu']
function Ho(d, o, t, e, i, a) {
    const r = f('Icon')
    return (
        u(),
        x(
            'div',
            Uo,
            [
                (u(!0),
                x(
                    N,
                    null,
                    oe(
                        e.navTabs.state.tabsView,
                        (c, _) => (
                            u(),
                            x(
                                'div',
                                {
                                    onClick: (m) => e.onTab(c),
                                    onContextmenu: ae((m) => e.onContextmenu(c, m), ['prevent']),
                                    class: L(['ba-nav-tab', e.navTabs.state.activeIndex == _ ? 'active' : '']),
                                    ref_for: !0,
                                    ref: e.tabsRefs.set,
                                    key: _,
                                },
                                [
                                    R(T(c.meta.title) + ' ', 1),
                                    n(
                                        he,
                                        {
                                            onAfterLeave: o[0] || (o[0] = (m) => e.selectNavTab(e.tabsRefs[e.navTabs.state.activeIndex])),
                                            name: 'el-fade-in',
                                            persisted: '',
                                        },
                                        {
                                            default: s(() => [
                                                j(
                                                    n(
                                                        r,
                                                        {
                                                            class: 'close-icon',
                                                            onClick: ae((m) => e.closeTab(c), ['stop']),
                                                            size: '15',
                                                            name: 'el-icon-Close',
                                                        },
                                                        null,
                                                        8,
                                                        ['onClick']
                                                    ),
                                                    [[Pe, e.navTabs.state.tabsView.length > 1]]
                                                ),
                                            ]),
                                            _: 2,
                                        },
                                        1024
                                    ),
                                ],
                                42,
                                Oo
                            )
                        )
                    ),
                    128
                )),
                v('div', { style: ee(e.activeBoxStyle), class: 'nav-tabs-active-box' }, null, 4),
                n(e.Contextmenu, { ref: 'contextmenuRef', items: e.state.contextmenuItems, onMenuClick: e.onContextMenuClick }, null, 8, ['items']),
            ],
            512
        )
    )
}
const Xe = I(jo, [
        ['render', Ho],
        ['__scopeId', 'data-v-ab5c1ed4'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/navBar/tabs.vue'],
    ]),
    Le = [
        ['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
        [
            'webkitRequestFullscreen',
            'webkitExitFullscreen',
            'webkitFullscreenElement',
            'webkitFullscreenEnabled',
            'webkitfullscreenchange',
            'webkitfullscreenerror',
        ],
        [
            'webkitRequestFullScreen',
            'webkitCancelFullScreen',
            'webkitCurrentFullScreenElement',
            'webkitCancelFullScreen',
            'webkitfullscreenchange',
            'webkitfullscreenerror',
        ],
        ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
        ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError'],
    ],
    X = (() => {
        if (typeof document > 'u') return !1
        const d = Le[0],
            o = {}
        for (const t of Le)
            if ((t == null ? void 0 : t[1]) in document) {
                for (const [i, a] of t.entries()) o[d[i]] = a
                return o
            }
        return !1
    })(),
    De = { change: X.fullscreenchange, error: X.fullscreenerror }
let F = {
    request(d = document.documentElement, o) {
        return new Promise((t, e) => {
            const i = () => {
                F.off('change', i), t()
            }
            F.on('change', i)
            const a = d[X.requestFullscreen](o)
            a instanceof Promise && a.then(i).catch(e)
        })
    },
    exit() {
        return new Promise((d, o) => {
            if (!F.isFullscreen) {
                d()
                return
            }
            const t = () => {
                F.off('change', t), d()
            }
            F.on('change', t)
            const e = document[X.exitFullscreen]()
            e instanceof Promise && e.then(t).catch(o)
        })
    },
    toggle(d, o) {
        return F.isFullscreen ? F.exit() : F.request(d, o)
    },
    onchange(d) {
        F.on('change', d)
    },
    onerror(d) {
        F.on('error', d)
    },
    on(d, o) {
        const t = De[d]
        t && document.addEventListener(t, o, !1)
    },
    off(d, o) {
        const t = De[d]
        t && document.removeEventListener(t, o, !1)
    },
    raw: X,
}
Object.defineProperties(F, {
    isFullscreen: { get: () => !!document[X.fullscreenElement] },
    element: { enumerable: !0, get: () => document[X.fullscreenElement] ?? void 0 },
    isEnabled: { enumerable: !0, get: () => !!document[X.fullscreenEnabled] },
})
X || (F = { isEnabled: !1 })
const qo = A({
        __name: 'config',
        setup(d, { expose: o }) {
            o()
            const { t } = ce.useI18n(),
                e = D(),
                i = P(),
                a = Ee(),
                b = {
                    t,
                    configStore: e,
                    navTabs: i,
                    router: a,
                    onCommitState: (p, g) => {
                        e.setLayout(g, p)
                    },
                    onCommitColorState: (p, g) => {
                        if (p === null) return
                        const y = e.layout[g]
                        e.layout.isDark ? (y[1] = p) : (y[0] = p), e.setLayout(g, y)
                    },
                    setLayoutMode: (p) => {
                        te.set(re, { layoutMode: p, menuCollapse: e.layout.menuCollapse }), e.setLayoutMode(p)
                    },
                    onCommitMenuDefaultIcon: (p, g) => {
                        e.setLayout(g, p)
                        const y = i.state.tabsViewRoutes
                        i.setTabsViewRoutes([]),
                            q(() => {
                                i.setTabsViewRoutes(y)
                            })
                    },
                    onCloseDrawer: () => {
                        e.setLayout('showDrawer', !1)
                    },
                    restoreDefault: () => {
                        Q.remove(no), te.remove(re), a.go(0)
                    },
                    IconSelector: vo,
                    DarkSwitch: go,
                    get toggleDark() {
                        return po
                    },
                }
            return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
        },
    }),
    me = (d) => (Ne('data-v-154c1309'), (d = d()), ze(), d),
    Wo = { class: 'layout-config-drawer' },
    Ko = { class: 'layout-mode-styles-box' },
    Xo = { class: 'layout-mode-box-style' },
    Yo = me(() =>
        v(
            'div',
            { class: 'layout-mode-style-box' },
            [
                v('div', { class: 'layout-mode-style-aside' }),
                v('div', { class: 'layout-mode-style-container-box' }, [
                    v('div', { class: 'layout-mode-style-header' }),
                    v('div', { class: 'layout-mode-style-container' }),
                ]),
            ],
            -1
        )
    ),
    Jo = { class: 'layout-mode-style-name' },
    Zo = me(() =>
        v(
            'div',
            { class: 'layout-mode-style-box' },
            [
                v('div', { class: 'layout-mode-style-aside' }),
                v('div', { class: 'layout-mode-style-container-box' }, [
                    v('div', { class: 'layout-mode-style-header' }),
                    v('div', { class: 'layout-mode-style-container' }),
                ]),
            ],
            -1
        )
    ),
    Go = { class: 'layout-mode-style-name' },
    Qo = me(() =>
        v(
            'div',
            { class: 'layout-mode-style-box' },
            [
                v('div', { class: 'layout-mode-style-container-box' }, [
                    v('div', { class: 'layout-mode-style-header' }),
                    v('div', { class: 'layout-mode-style-container' }),
                ]),
            ],
            -1
        )
    ),
    $o = { class: 'layout-mode-style-name' },
    et = me(() =>
        v(
            'div',
            { class: 'layout-mode-style-box' },
            [
                v('div', { class: 'layout-mode-style-aside' }),
                v('div', { class: 'layout-mode-style-container-box' }, [
                    v('div', { class: 'layout-mode-style-header' }),
                    v('div', { class: 'layout-mode-style-container' }),
                ]),
            ],
            -1
        )
    ),
    ot = { class: 'layout-mode-style-name' },
    tt = { class: 'layout-config-global' },
    nt = { class: 'layout-config-aside' },
    at = { class: 'layout-config-aside' },
    lt = { class: 'ba-center' }
function rt(d, o, t, e, i, a) {
    const r = f('el-divider'),
        c = f('el-col'),
        _ = f('el-row'),
        m = f('el-form-item'),
        l = f('el-option'),
        C = f('el-select'),
        b = f('el-color-picker'),
        p = f('el-switch'),
        g = f('el-input'),
        y = f('el-button'),
        E = f('el-popconfirm'),
        J = f('el-form'),
        ne = f('el-scrollbar'),
        O = f('el-drawer')
    return (
        u(),
        x('div', Wo, [
            n(
                O,
                {
                    'model-value': e.configStore.layout.showDrawer,
                    title: e.t('layouts.Layout configuration'),
                    size: '310px',
                    onClose: e.onCloseDrawer,
                },
                {
                    default: s(() => [
                        n(
                            ne,
                            { class: 'layout-mode-style-scrollbar' },
                            {
                                default: s(() => [
                                    n(
                                        J,
                                        { ref: 'formRef', model: e.configStore.layout },
                                        {
                                            default: s(() => [
                                                v('div', Ko, [
                                                    n(
                                                        r,
                                                        { 'border-style': 'dashed' },
                                                        { default: s(() => [R(T(e.t('layouts.Layout mode')), 1)]), _: 1 }
                                                    ),
                                                    v('div', Xo, [
                                                        n(
                                                            _,
                                                            { class: 'layout-mode-box-style-row', gutter: 10 },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        c,
                                                                        { span: 12 },
                                                                        {
                                                                            default: s(() => [
                                                                                v(
                                                                                    'div',
                                                                                    {
                                                                                        onClick: o[0] || (o[0] = (h) => e.setLayoutMode('Default')),
                                                                                        class: L([
                                                                                            'layout-mode-style default',
                                                                                            e.configStore.layout.layoutMode == 'Default'
                                                                                                ? 'active'
                                                                                                : '',
                                                                                        ]),
                                                                                    },
                                                                                    [Yo, v('div', Jo, T(e.t('layouts.default')), 1)],
                                                                                    2
                                                                                ),
                                                                            ]),
                                                                            _: 1,
                                                                        }
                                                                    ),
                                                                    n(
                                                                        c,
                                                                        { span: 12 },
                                                                        {
                                                                            default: s(() => [
                                                                                v(
                                                                                    'div',
                                                                                    {
                                                                                        onClick: o[1] || (o[1] = (h) => e.setLayoutMode('Classic')),
                                                                                        class: L([
                                                                                            'layout-mode-style classic',
                                                                                            e.configStore.layout.layoutMode == 'Classic'
                                                                                                ? 'active'
                                                                                                : '',
                                                                                        ]),
                                                                                    },
                                                                                    [Zo, v('div', Go, T(e.t('layouts.classic')), 1)],
                                                                                    2
                                                                                ),
                                                                            ]),
                                                                            _: 1,
                                                                        }
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            }
                                                        ),
                                                        n(
                                                            _,
                                                            { gutter: 10 },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        c,
                                                                        { span: 12 },
                                                                        {
                                                                            default: s(() => [
                                                                                v(
                                                                                    'div',
                                                                                    {
                                                                                        onClick:
                                                                                            o[2] || (o[2] = (h) => e.setLayoutMode('Streamline')),
                                                                                        class: L([
                                                                                            'layout-mode-style streamline',
                                                                                            e.configStore.layout.layoutMode == 'Streamline'
                                                                                                ? 'active'
                                                                                                : '',
                                                                                        ]),
                                                                                    },
                                                                                    [Qo, v('div', $o, T(e.t('layouts.Single column')), 1)],
                                                                                    2
                                                                                ),
                                                                            ]),
                                                                            _: 1,
                                                                        }
                                                                    ),
                                                                    n(
                                                                        c,
                                                                        { span: 12 },
                                                                        {
                                                                            default: s(() => [
                                                                                v(
                                                                                    'div',
                                                                                    {
                                                                                        onClick: o[3] || (o[3] = (h) => e.setLayoutMode('Double')),
                                                                                        class: L([
                                                                                            'layout-mode-style double',
                                                                                            e.configStore.layout.layoutMode == 'Double'
                                                                                                ? 'active'
                                                                                                : '',
                                                                                        ]),
                                                                                    },
                                                                                    [et, v('div', ot, T(e.t('layouts.Double column')), 1)],
                                                                                    2
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
                                                    n(
                                                        r,
                                                        { 'border-style': 'dashed' },
                                                        { default: s(() => [R(T(e.t('layouts.overall situation')), 1)]), _: 1 }
                                                    ),
                                                    v('div', tt, [
                                                        n(
                                                            m,
                                                            { size: 'large', label: e.t('layouts.Dark mode') },
                                                            {
                                                                default: s(() => [
                                                                    n(e.DarkSwitch, { onClick: o[4] || (o[4] = (h) => e.toggleDark()) }),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Background page switching animation') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        C,
                                                                        {
                                                                            onChange: o[5] || (o[5] = (h) => e.onCommitState(h, 'mainAnimation')),
                                                                            'model-value': e.configStore.layout.mainAnimation,
                                                                            placeholder: e.t('layouts.Please select an animation name'),
                                                                        },
                                                                        {
                                                                            default: s(() => [
                                                                                n(l, { label: 'slide-right', value: 'slide-right' }),
                                                                                n(l, { label: 'slide-left', value: 'slide-left' }),
                                                                                n(l, { label: 'el-fade-in-linear', value: 'el-fade-in-linear' }),
                                                                                n(l, { label: 'el-fade-in', value: 'el-fade-in' }),
                                                                                n(l, { label: 'el-zoom-in-center', value: 'el-zoom-in-center' }),
                                                                                n(l, { label: 'el-zoom-in-top', value: 'el-zoom-in-top' }),
                                                                                n(l, { label: 'el-zoom-in-bottom', value: 'el-zoom-in-bottom' }),
                                                                            ]),
                                                                            _: 1,
                                                                        },
                                                                        8,
                                                                        ['model-value', 'placeholder']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                    ]),
                                                    n(r, { 'border-style': 'dashed' }, { default: s(() => [R(T(e.t('layouts.sidebar')), 1)]), _: 1 }),
                                                    v('div', nt, [
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu bar background color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[6] || (o[6] = (h) => e.onCommitColorState(h, 'menuBackground')),
                                                                            'model-value': e.configStore.getColorVal('menuBackground'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu text color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange: o[7] || (o[7] = (h) => e.onCommitColorState(h, 'menuColor')),
                                                                            'model-value': e.configStore.getColorVal('menuColor'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu active item background color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[8] ||
                                                                                (o[8] = (h) => e.onCommitColorState(h, 'menuActiveBackground')),
                                                                            'model-value': e.configStore.getColorVal('menuActiveBackground'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu active item text color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[9] || (o[9] = (h) => e.onCommitColorState(h, 'menuActiveColor')),
                                                                            'model-value': e.configStore.getColorVal('menuActiveColor'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Show side menu top bar (logo bar)') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        p,
                                                                        {
                                                                            onChange: o[10] || (o[10] = (h) => e.onCommitState(h, 'menuShowTopBar')),
                                                                            'model-value': e.configStore.layout.menuShowTopBar,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu top bar background color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[11] ||
                                                                                (o[11] = (h) => e.onCommitColorState(h, 'menuTopBarBackground')),
                                                                            'model-value': e.configStore.getColorVal('menuTopBarBackground'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu width (when expanded)') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        g,
                                                                        {
                                                                            onInput: o[12] || (o[12] = (h) => e.onCommitState(h, 'menuWidth')),
                                                                            type: 'number',
                                                                            step: 10,
                                                                            'model-value': e.configStore.layout.menuWidth,
                                                                        },
                                                                        { append: s(() => [R('px')]), _: 1 },
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu default icon') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        e.IconSelector,
                                                                        {
                                                                            onChange:
                                                                                o[13] ||
                                                                                (o[13] = (h) => e.onCommitMenuDefaultIcon(h, 'menuDefaultIcon')),
                                                                            'model-value': e.configStore.layout.menuDefaultIcon,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu horizontal collapse') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        p,
                                                                        {
                                                                            onChange: o[14] || (o[14] = (h) => e.onCommitState(h, 'menuCollapse')),
                                                                            'model-value': e.configStore.layout.menuCollapse,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Side menu accordion') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        p,
                                                                        {
                                                                            onChange:
                                                                                o[15] || (o[15] = (h) => e.onCommitState(h, 'menuUniqueOpened')),
                                                                            'model-value': e.configStore.layout.menuUniqueOpened,
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                    ]),
                                                    n(r, { 'border-style': 'dashed' }, { default: s(() => [R(T(e.t('layouts.Top bar')), 1)]), _: 1 }),
                                                    v('div', at, [
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Top bar background color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[16] ||
                                                                                (o[16] = (h) => e.onCommitColorState(h, 'headerBarBackground')),
                                                                            'model-value': e.configStore.getColorVal('headerBarBackground'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Top bar text color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[17] ||
                                                                                (o[17] = (h) => e.onCommitColorState(h, 'headerBarTabColor')),
                                                                            'model-value': e.configStore.getColorVal('headerBarTabColor'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Background color when hovering over the top bar') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[18] ||
                                                                                (o[18] = (h) => e.onCommitColorState(h, 'headerBarHoverBackground')),
                                                                            'model-value': e.configStore.getColorVal('headerBarHoverBackground'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Top bar menu active item background color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[19] ||
                                                                                (o[19] = (h) =>
                                                                                    e.onCommitColorState(h, 'headerBarTabActiveBackground')),
                                                                            'model-value': e.configStore.getColorVal('headerBarTabActiveBackground'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                        n(
                                                            m,
                                                            { label: e.t('layouts.Top bar menu active item text color') },
                                                            {
                                                                default: s(() => [
                                                                    n(
                                                                        b,
                                                                        {
                                                                            onChange:
                                                                                o[20] ||
                                                                                (o[20] = (h) => e.onCommitColorState(h, 'headerBarTabActiveColor')),
                                                                            'model-value': e.configStore.getColorVal('headerBarTabActiveColor'),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        ['model-value']
                                                                    ),
                                                                ]),
                                                                _: 1,
                                                            },
                                                            8,
                                                            ['label']
                                                        ),
                                                    ]),
                                                    n(
                                                        E,
                                                        {
                                                            onConfirm: e.restoreDefault,
                                                            title: e.t(
                                                                'layouts.Are you sure you want to restore all configurations to the default values?'
                                                            ),
                                                        },
                                                        {
                                                            reference: s(() => [
                                                                v('div', lt, [
                                                                    n(
                                                                        y,
                                                                        { class: 'w80', type: 'info' },
                                                                        { default: s(() => [R(T(e.t('layouts.Restore default')), 1)]), _: 1 }
                                                                    ),
                                                                ]),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['title']
                                                    ),
                                                ]),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ['model']
                                    ),
                                ]),
                                _: 1,
                            }
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
const st = I(qo, [
        ['render', rt],
        ['__scopeId', 'data-v-154c1309'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/config.vue'],
    ]),
    it = A({
        __name: 'index',
        setup(d, { expose: o }) {
            o()
            const { t } = ce.useI18n(),
                e = Te(),
                i = be(),
                a = U({ registryLoading: !1, registryLoadingType: 'npm', packageManagerLoading: !1 }),
                r = (p) => {
                    let g = t('terminal.unknown'),
                        y = 'info'
                    switch (p) {
                        case K.Waiting:
                            ;(g = t('terminal.Waiting for execution')), (y = 'info')
                            break
                        case K.Connecting:
                            ;(g = t('terminal.Connecting')), (y = 'warning')
                            break
                        case K.Executing:
                            ;(g = t('terminal.Executing')), (y = 'warning')
                            break
                        case K.Success:
                            ;(g = t('terminal.Successful execution')), (y = 'success')
                            break
                        case K.Failed:
                            ;(g = t('terminal.Execution failed')), (y = 'danger')
                            break
                        case K.Unknown:
                            ;(g = t('terminal.Unknown execution result')), (y = 'danger')
                            break
                    }
                    return { statusText: g, statusType: y }
                },
                c = (p, g, y = !0) => {
                    g ? e.addTaskPM(p, y) : e.addTask(p, y),
                        q(() => {
                            i.value && i.value.wrapRef && i.value.setScrollTop(i.value.wrapRef.scrollHeight)
                        })
                },
                b = {
                    t,
                    terminal: e,
                    terminalScrollbarRef: i,
                    state: a,
                    getTaskStatus: r,
                    addTerminalTask: c,
                    webBuild: () => {
                        Ve.confirm(t('terminal.Are you sure you want to republish?'), t('Reminder'), {
                            confirmButtonText: t('Confirm'),
                            cancelButtonText: t('Cancel'),
                            type: 'warning',
                        }).then(() => {
                            c('web-build', !0)
                        })
                    },
                    changePackageManager: (p) => {
                        ;(a.packageManagerLoading = !0),
                            ao({ manager: p })
                                .then((g) => {
                                    g.code == 1 && e.changePackageManager(p)
                                })
                                .finally(() => {
                                    a.packageManagerLoading = !1
                                })
                    },
                    changeRegistry: (p, g) => {
                        const y = g == 'npm' ? e.state.npmRegistry : e.state.composerRegistry
                        e.changeRegistry(p, g),
                            (a.registryLoading = !0),
                            (a.registryLoadingType = g),
                            e.addTask(`set-${g}-registry.${p}`, !1, '', (E) => {
                                ;(a.registryLoading = !1),
                                    (E == K.Failed || E == K.Unknown) &&
                                        Ve.confirm(t('terminal.Failed to modify the source command, Please try again manually'), t('Reminder'), {
                                            confirmButtonText: t('Confirm'),
                                            showCancelButton: !1,
                                            type: 'warning',
                                        }).then(() => {
                                            e.changeRegistry(y, g)
                                        })
                            })
                    },
                    getSourceContent: (p) => {
                        let g = {}
                        return (
                            p == 'npm'
                                ? (g = { npm: 'npm', taobao: 'taobao', tencent: 'tencent' })
                                : p == 'composer' &&
                                  (g = { composer: 'composer', huawei: 'huawei', aliyun: 'aliyun', tencent: 'tencent', kkame: 'kkame' }),
                            e.state[p == 'npm' ? 'npmRegistry' : 'composerRegistry'] == 'unknown' && (g.unknown = t('Unknown')),
                            g
                        )
                    },
                    get ElScrollbar() {
                        return Ge
                    },
                    FormItem: Co,
                    get taskStatus() {
                        return K
                    },
                }
            return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
        },
    }),
    ct = { class: 'command' },
    ut = { class: 'task-opt' },
    dt = ['onClick'],
    mt = { class: 'terminal-buttons' },
    ft = { class: 'config-buttons' }
function _t(d, o, t, e, i, a) {
    const r = f('el-alert'),
        c = f('el-tag'),
        _ = f('el-button'),
        m = f('Icon'),
        l = f('el-card'),
        C = f('el-timeline-item'),
        b = f('el-timeline'),
        p = f('el-empty'),
        g = f('el-dropdown-item'),
        y = f('el-dropdown-menu'),
        E = f('el-dropdown'),
        J = f('el-dialog'),
        ne = f('el-form'),
        O = Re('blur'),
        h = Re('loading')
    return (
        u(),
        x('div', null, [
            n(
                J,
                {
                    modelValue: e.terminal.state.show,
                    'onUpdate:modelValue': o[6] || (o[6] = (k) => (e.terminal.state.show = k)),
                    title: e.t('terminal.Terminal'),
                    class: 'ba-terminal-dialog main-dialog',
                },
                {
                    default: s(() => [
                        n(
                            e.ElScrollbar,
                            { ref: 'terminalScrollbarRef', 'max-height': 500, class: 'terminal-scrollbar' },
                            {
                                default: s(() => [
                                    e.terminal.state.phpDevelopmentServer
                                        ? B('v-if', !0)
                                        : (u(),
                                          S(
                                              r,
                                              {
                                                  key: 0,
                                                  class: 'terminal-warning-alert',
                                                  title: e.t(
                                                      'terminal.The current terminal is not running under the installation service, and some commands may not be executed'
                                                  ),
                                                  type: 'error',
                                              },
                                              null,
                                              8,
                                              ['title']
                                          )),
                                    e.terminal.state.taskList.length
                                        ? (u(),
                                          S(
                                              b,
                                              { key: 1, class: 'terminal-timeline' },
                                              {
                                                  default: s(() => [
                                                      (u(!0),
                                                      x(
                                                          N,
                                                          null,
                                                          oe(
                                                              e.terminal.state.taskList,
                                                              (k, Z) => (
                                                                  u(),
                                                                  S(
                                                                      C,
                                                                      {
                                                                          key: Z,
                                                                          class: L(['task-item', 'task-status-' + k.status]),
                                                                          type: e.getTaskStatus(k.status).statusType,
                                                                          center: '',
                                                                          timestamp: k.createTime,
                                                                          placement: 'top',
                                                                      },
                                                                      {
                                                                          default: s(() => [
                                                                              n(
                                                                                  l,
                                                                                  null,
                                                                                  {
                                                                                      default: s(() => [
                                                                                          v('div', null, [
                                                                                              n(
                                                                                                  c,
                                                                                                  { type: e.getTaskStatus(k.status).statusType },
                                                                                                  {
                                                                                                      default: s(() => [
                                                                                                          R(
                                                                                                              T(e.getTaskStatus(k.status).statusText),
                                                                                                              1
                                                                                                          ),
                                                                                                      ]),
                                                                                                      _: 2,
                                                                                                  },
                                                                                                  1032,
                                                                                                  ['type']
                                                                                              ),
                                                                                              (k.status == e.taskStatus.Failed ||
                                                                                                  k.status == e.taskStatus.Unknown) &&
                                                                                              k.blockOnFailure
                                                                                                  ? (u(),
                                                                                                    S(
                                                                                                        c,
                                                                                                        {
                                                                                                            key: 0,
                                                                                                            class: 'block-on-failure-tag',
                                                                                                            type: 'warning',
                                                                                                        },
                                                                                                        {
                                                                                                            default: s(() => [
                                                                                                                R(
                                                                                                                    T(
                                                                                                                        e.t(
                                                                                                                            'terminal.Failure to execute this command will block the execution of the queue'
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    1
                                                                                                                ),
                                                                                                            ]),
                                                                                                            _: 1,
                                                                                                        }
                                                                                                    ))
                                                                                                  : B('v-if', !0),
                                                                                              k.status == e.taskStatus.Executing ||
                                                                                              k.status == e.taskStatus.Connecting
                                                                                                  ? (u(),
                                                                                                    S(
                                                                                                        c,
                                                                                                        {
                                                                                                            key: 1,
                                                                                                            class: 'block-on-failure-tag',
                                                                                                            type: 'danger',
                                                                                                        },
                                                                                                        {
                                                                                                            default: s(() => [
                                                                                                                R(
                                                                                                                    T(
                                                                                                                        e.t(
                                                                                                                            'terminal.Do not refresh the browser'
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    1
                                                                                                                ),
                                                                                                            ]),
                                                                                                            _: 1,
                                                                                                        }
                                                                                                    ))
                                                                                                  : B('v-if', !0),
                                                                                              v('span', ct, T(k.command), 1),
                                                                                              v('div', ut, [
                                                                                                  k.status == e.taskStatus.Failed ||
                                                                                                  k.status == e.taskStatus.Unknown
                                                                                                      ? j(
                                                                                                            (u(),
                                                                                                            S(
                                                                                                                _,
                                                                                                                {
                                                                                                                    key: 0,
                                                                                                                    title: e.t('Retry'),
                                                                                                                    size: 'small',
                                                                                                                    type: 'warning',
                                                                                                                    icon: 'el-icon-RefreshRight',
                                                                                                                    circle: '',
                                                                                                                    onClick: (G) =>
                                                                                                                        e.terminal.retryTask(Z),
                                                                                                                },
                                                                                                                null,
                                                                                                                8,
                                                                                                                ['title', 'onClick']
                                                                                                            )),
                                                                                                            [[O]]
                                                                                                        )
                                                                                                      : B('v-if', !0),
                                                                                                  j(
                                                                                                      n(
                                                                                                          _,
                                                                                                          {
                                                                                                              onClick: (G) => e.terminal.delTask(Z),
                                                                                                              title: e.t('Delete'),
                                                                                                              size: 'small',
                                                                                                              type: 'danger',
                                                                                                              icon: 'el-icon-Delete',
                                                                                                              circle: '',
                                                                                                          },
                                                                                                          null,
                                                                                                          8,
                                                                                                          ['onClick', 'title']
                                                                                                      ),
                                                                                                      [[O]]
                                                                                                  ),
                                                                                              ]),
                                                                                          ]),
                                                                                          k.status != e.taskStatus.Waiting
                                                                                              ? (u(),
                                                                                                x(
                                                                                                    N,
                                                                                                    { key: 0 },
                                                                                                    [
                                                                                                        k.status != e.taskStatus.Connecting &&
                                                                                                        k.status != e.taskStatus.Executing
                                                                                                            ? (u(),
                                                                                                              x(
                                                                                                                  'div',
                                                                                                                  {
                                                                                                                      key: 0,
                                                                                                                      onClick: (G) =>
                                                                                                                          e.terminal.setTaskShowMessage(
                                                                                                                              Z
                                                                                                                          ),
                                                                                                                      class: 'toggle-message-display',
                                                                                                                  },
                                                                                                                  [
                                                                                                                      v(
                                                                                                                          'span',
                                                                                                                          null,
                                                                                                                          T(
                                                                                                                              e.t(
                                                                                                                                  'terminal.Command run log'
                                                                                                                              )
                                                                                                                          ),
                                                                                                                          1
                                                                                                                      ),
                                                                                                                      n(
                                                                                                                          m,
                                                                                                                          {
                                                                                                                              name: k.showMessage
                                                                                                                                  ? 'el-icon-ArrowUp'
                                                                                                                                  : 'el-icon-ArrowDown',
                                                                                                                              size: '16',
                                                                                                                              color: '#909399',
                                                                                                                          },
                                                                                                                          null,
                                                                                                                          8,
                                                                                                                          ['name']
                                                                                                                      ),
                                                                                                                  ],
                                                                                                                  8,
                                                                                                                  dt
                                                                                                              ))
                                                                                                            : B('v-if', !0),
                                                                                                        k.status == e.taskStatus.Connecting ||
                                                                                                        k.status == e.taskStatus.Executing ||
                                                                                                        (k.status > e.taskStatus.Executing &&
                                                                                                            k.showMessage)
                                                                                                            ? (u(),
                                                                                                              x(
                                                                                                                  'div',
                                                                                                                  {
                                                                                                                      key: 1,
                                                                                                                      class: L([
                                                                                                                          'exec-message',
                                                                                                                          'exec-message-' + k.uuid,
                                                                                                                      ]),
                                                                                                                  },
                                                                                                                  [
                                                                                                                      (u(!0),
                                                                                                                      x(
                                                                                                                          N,
                                                                                                                          null,
                                                                                                                          oe(
                                                                                                                              k.message,
                                                                                                                              (G, w) => (
                                                                                                                                  u(),
                                                                                                                                  x(
                                                                                                                                      'pre',
                                                                                                                                      {
                                                                                                                                          key: w,
                                                                                                                                          class: 'message-item',
                                                                                                                                      },
                                                                                                                                      T(G),
                                                                                                                                      1
                                                                                                                                  )
                                                                                                                              )
                                                                                                                          ),
                                                                                                                          128
                                                                                                                      )),
                                                                                                                  ],
                                                                                                                  2
                                                                                                              ))
                                                                                                            : B('v-if', !0),
                                                                                                    ],
                                                                                                    64
                                                                                                ))
                                                                                              : B('v-if', !0),
                                                                                      ]),
                                                                                      _: 2,
                                                                                  },
                                                                                  1024
                                                                              ),
                                                                          ]),
                                                                          _: 2,
                                                                      },
                                                                      1032,
                                                                      ['class', 'type', 'timestamp']
                                                                  )
                                                              )
                                                          ),
                                                          128
                                                      )),
                                                  ]),
                                                  _: 1,
                                              }
                                          ))
                                        : (u(),
                                          S(p, { key: 2, 'image-size': 80, description: e.t('terminal.No mission yet') }, null, 8, ['description'])),
                                ]),
                                _: 1,
                            },
                            512
                        ),
                        v('div', mt, [
                            j(
                                (u(),
                                S(
                                    _,
                                    {
                                        class: 'terminal-menu-item',
                                        icon: 'el-icon-MagicStick',
                                        onClick: o[0] || (o[0] = (k) => e.addTerminalTask('test', !0, !1)),
                                    },
                                    { default: s(() => [R(T(e.t('terminal.Test command')), 1)]), _: 1 }
                                )),
                                [[O]]
                            ),
                            n(
                                E,
                                { class: 'terminal-menu-item' },
                                {
                                    dropdown: s(() => [
                                        n(y, null, {
                                            default: s(() => [
                                                e.terminal.state.packageManager != 'none'
                                                    ? (u(),
                                                      S(
                                                          g,
                                                          { key: 0, onClick: o[1] || (o[1] = (k) => e.addTerminalTask('web-install', !0)) },
                                                          { default: s(() => [R(T(e.terminal.state.packageManager) + ' run install ', 1)]), _: 1 }
                                                      ))
                                                    : B('v-if', !0),
                                                n(
                                                    g,
                                                    { onClick: o[2] || (o[2] = (k) => e.addTerminalTask('composer.update', !1)) },
                                                    { default: s(() => [R('composer update')]), _: 1 }
                                                ),
                                            ]),
                                            _: 1,
                                        }),
                                    ]),
                                    default: s(() => [
                                        j(
                                            (u(),
                                            S(
                                                _,
                                                { icon: 'el-icon-Download' },
                                                { default: s(() => [R(T(e.t('terminal.Install dependent packages')), 1)]), _: 1 }
                                            )),
                                            [[O]]
                                        ),
                                    ]),
                                    _: 1,
                                }
                            ),
                            j(
                                (u(),
                                S(
                                    _,
                                    { class: 'terminal-menu-item', icon: 'el-icon-Sell', onClick: o[3] || (o[3] = (k) => e.webBuild()) },
                                    { default: s(() => [R(T(e.t('terminal.Republish')), 1)]), _: 1 }
                                )),
                                [[O]]
                            ),
                            j(
                                (u(),
                                S(
                                    _,
                                    {
                                        class: 'terminal-menu-item',
                                        icon: 'el-icon-Delete',
                                        onClick: o[4] || (o[4] = (k) => e.terminal.clearSuccessTask()),
                                    },
                                    { default: s(() => [R(T(e.t('terminal.Clean up task list')), 1)]), _: 1 }
                                )),
                                [[O]]
                            ),
                            j(
                                (u(),
                                S(
                                    _,
                                    {
                                        class: 'terminal-menu-item',
                                        icon: 'el-icon-Tools',
                                        onClick: o[5] || (o[5] = (k) => e.terminal.toggleConfigDialog()),
                                    },
                                    { default: s(() => [R(T(e.t('terminal.Terminal settings')), 1)]), _: 1 }
                                )),
                                [[O]]
                            ),
                        ]),
                    ]),
                    _: 1,
                },
                8,
                ['modelValue', 'title']
            ),
            n(
                J,
                {
                    onClose: o[8] || (o[8] = (k) => e.terminal.toggleConfigDialog(!1)),
                    'model-value': e.terminal.state.showConfig,
                    class: 'ba-terminal-dialog',
                    title: e.t('terminal.Terminal settings'),
                },
                {
                    default: s(() => [
                        n(
                            ne,
                            { 'label-position': 'left', 'label-width': '140' },
                            {
                                default: s(() => [
                                    j(
                                        (u(),
                                        S(
                                            e.FormItem,
                                            {
                                                label: 'NPM ' + e.t('terminal.Source'),
                                                'model-value': e.terminal.state.npmRegistry,
                                                key: e.terminal.state.npmRegistry,
                                                type: 'select',
                                                'input-attr': {
                                                    border: !0,
                                                    content: e.getSourceContent('npm'),
                                                    teleported: !1,
                                                    onChange: (k) => e.changeRegistry(k, 'npm'),
                                                },
                                            },
                                            null,
                                            8,
                                            ['label', 'model-value', 'input-attr']
                                        )),
                                        [[h, e.state.registryLoading && e.state.registryLoadingType == 'npm']]
                                    ),
                                    j(
                                        (u(),
                                        S(
                                            e.FormItem,
                                            {
                                                label: 'Composer ' + e.t('terminal.Source'),
                                                'model-value': e.terminal.state.composerRegistry,
                                                key: e.terminal.state.composerRegistry,
                                                type: 'select',
                                                'input-attr': {
                                                    border: !0,
                                                    content: e.getSourceContent('composer'),
                                                    teleported: !1,
                                                    onChange: (k) => e.changeRegistry(k, 'composer'),
                                                },
                                            },
                                            null,
                                            8,
                                            ['label', 'model-value', 'input-attr']
                                        )),
                                        [[h, e.state.registryLoading && e.state.registryLoadingType == 'composer']]
                                    ),
                                    j(
                                        n(
                                            e.FormItem,
                                            {
                                                label: e.t('terminal.NPM package manager'),
                                                'model-value': e.terminal.state.packageManager,
                                                type: 'select',
                                                'input-attr': {
                                                    border: !0,
                                                    content: {
                                                        npm: 'NPM',
                                                        cnpm: 'CNPM',
                                                        pnpm: 'PNPM',
                                                        yarn: 'YARN',
                                                        ni: 'NI',
                                                        none: e.t('terminal.Manual execution'),
                                                    },
                                                    teleported: !1,
                                                    onChange: (k) => e.changePackageManager(k),
                                                },
                                                tip: e.t('terminal.NPM package manager tip'),
                                            },
                                            null,
                                            8,
                                            ['label', 'model-value', 'input-attr', 'tip']
                                        ),
                                        [[h, e.state.packageManagerLoading]]
                                    ),
                                    n(
                                        e.FormItem,
                                        {
                                            label: e.t('terminal.Clear successful task'),
                                            'model-value': e.terminal.state.automaticCleanupTask,
                                            type: 'radio',
                                            'input-attr': {
                                                border: !0,
                                                content: { 0: e.t('Disable'), 1: e.t('Enable') },
                                                onChange: e.terminal.changeAutomaticCleanupTask,
                                            },
                                            tip: e.t('terminal.Clear successful task tip'),
                                        },
                                        null,
                                        8,
                                        ['label', 'model-value', 'input-attr', 'tip']
                                    ),
                                ]),
                                _: 1,
                            }
                        ),
                        v('div', ft, [
                            n(
                                _,
                                { onClick: o[7] || (o[7] = (k) => e.terminal.toggleConfigDialog(!1)) },
                                { default: s(() => [R(T(e.t('terminal.Back to terminal')), 1)]), _: 1 }
                            ),
                        ]),
                    ]),
                    _: 1,
                },
                8,
                ['model-value', 'title']
            ),
        ])
    )
}
const gt = I(it, [
        ['render', _t],
        ['__scopeId', 'data-v-e85e3ea3'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/components/terminal/index.vue'],
    ]),
    vt = A({
        __name: 'navMenus',
        setup(d, { expose: o }) {
            o(),
                H((g) => ({
                    '0daad335-configStore.getColorVal("headerBarBackground")': M(i).getColorVal('headerBarBackground'),
                    '0daad335-configStore.getColorVal("headerBarTabColor")': M(i).getColorVal('headerBarTabColor'),
                    '0daad335-configStore.getColorVal("headerBarHoverBackground")': M(i).getColorVal('headerBarHoverBackground'),
                }))
            const { t } = ce.useI18n(),
                e = Oe(),
                i = D(),
                a = Te(),
                r = Se(),
                c = U({ isFullScreen: !1, currentNavMenu: '', showLayoutDrawer: !1, showAdminInfoPopover: !1 }),
                p = {
                    t,
                    adminInfo: e,
                    configStore: i,
                    terminal: a,
                    siteConfig: r,
                    state: c,
                    onCurrentNavMenu: (g, y) => {
                        c.currentNavMenu = g ? y : ''
                    },
                    onFullScreen: () => {
                        if (!F.isEnabled) return Qe.warning(t('layouts.Full screen is not supported')), !1
                        F.toggle(),
                            F.onchange(() => {
                                c.isFullScreen = F.isFullscreen
                            })
                    },
                    onAdminInfo: () => {
                        ;(c.showAdminInfoPopover = !1), ie({ name: 'routine/adminInfo' })
                    },
                    onLogout: () => {
                        bo().then(() => {
                            Q.remove(pe), He.go(0)
                        })
                    },
                    onClearCache: (g) => {
                        if (g == 'storage' || g == 'all') {
                            const y = Q.get(pe),
                                E = Q.get(Ie)
                            if ((te.clear(), Q.clear(), Q.set(pe, y), Q.set(Ie, E), g == 'storage')) return
                        }
                        lo(g).then(() => {})
                    },
                    get editDefaultLang() {
                        return so
                    },
                    Config: st,
                    TerminalVue: gt,
                    get fullUrl() {
                        return ro
                    },
                }
            return Object.defineProperty(p, '__isScriptSetup', { enumerable: !1, value: !0 }), p
        },
    }),
    pt = { class: 'nav-menu-item' },
    bt = { class: 'admin-name' },
    yt = { class: 'admin-info-base' },
    Ct = { class: 'admin-info-other' },
    ht = { class: 'admin-info-name' },
    kt = { class: 'admin-info-lasttime' },
    St = { class: 'admin-info-footer' }
function wt(d, o, t, e, i, a) {
    const r = f('Icon'),
        c = f('router-link'),
        _ = f('el-dropdown-item'),
        m = f('el-dropdown-menu'),
        l = f('el-dropdown'),
        C = f('el-badge'),
        b = f('el-avatar'),
        p = f('el-button'),
        g = f('el-popover')
    return (
        u(),
        x(
            'div',
            { class: L(['nav-menus', e.configStore.layout.layoutMode]) },
            [
                n(
                    c,
                    { class: 'h100', target: '_blank', title: e.t('Home'), to: '/' },
                    {
                        default: s(() => [
                            v('div', pt, [
                                n(
                                    r,
                                    {
                                        color: e.configStore.getColorVal('headerBarTabColor'),
                                        class: 'nav-menu-icon',
                                        name: 'el-icon-Monitor',
                                        size: '18',
                                    },
                                    null,
                                    8,
                                    ['color']
                                ),
                            ]),
                        ]),
                        _: 1,
                    },
                    8,
                    ['title']
                ),
                n(
                    l,
                    {
                        onVisibleChange: o[0] || (o[0] = (y) => e.onCurrentNavMenu(y, 'lang')),
                        class: 'h100',
                        size: 'large',
                        'hide-timeout': 50,
                        placement: 'bottom',
                        trigger: 'click',
                        'hide-on-click': !0,
                    },
                    {
                        dropdown: s(() => [
                            n(
                                m,
                                { class: 'dropdown-menu-box' },
                                {
                                    default: s(() => [
                                        (u(!0),
                                        x(
                                            N,
                                            null,
                                            oe(
                                                e.configStore.lang.langArray,
                                                (y) => (
                                                    u(),
                                                    S(
                                                        _,
                                                        { key: y.name, onClick: (E) => e.editDefaultLang(y.name) },
                                                        { default: s(() => [R(T(y.value), 1)]), _: 2 },
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
                        default: s(() => [
                            v(
                                'div',
                                { class: L(['nav-menu-item pt2', e.state.currentNavMenu == 'lang' ? 'hover' : '']) },
                                [
                                    n(
                                        r,
                                        {
                                            color: e.configStore.getColorVal('headerBarTabColor'),
                                            class: 'nav-menu-icon',
                                            name: 'local-lang',
                                            size: '18',
                                        },
                                        null,
                                        8,
                                        ['color']
                                    ),
                                ],
                                2
                            ),
                        ]),
                        _: 1,
                    }
                ),
                v(
                    'div',
                    { onClick: e.onFullScreen, class: L(['nav-menu-item', e.state.isFullScreen ? 'hover' : '']) },
                    [
                        e.state.isFullScreen
                            ? (u(),
                              S(
                                  r,
                                  {
                                      key: 0,
                                      color: e.configStore.getColorVal('headerBarTabColor'),
                                      class: 'nav-menu-icon',
                                      name: 'local-full-screen-cancel',
                                      size: '18',
                                  },
                                  null,
                                  8,
                                  ['color']
                              ))
                            : (u(),
                              S(
                                  r,
                                  {
                                      key: 1,
                                      color: e.configStore.getColorVal('headerBarTabColor'),
                                      class: 'nav-menu-icon',
                                      name: 'el-icon-FullScreen',
                                      size: '18',
                                  },
                                  null,
                                  8,
                                  ['color']
                              )),
                    ],
                    2
                ),
                e.adminInfo.super
                    ? (u(),
                      x('div', { key: 0, onClick: o[1] || (o[1] = (y) => e.terminal.toggle()), class: 'nav-menu-item pt2' }, [
                          n(
                              C,
                              { 'is-dot': e.terminal.state.showDot },
                              {
                                  default: s(() => [
                                      n(
                                          r,
                                          {
                                              color: e.configStore.getColorVal('headerBarTabColor'),
                                              class: 'nav-menu-icon',
                                              name: 'local-terminal',
                                              size: '26',
                                          },
                                          null,
                                          8,
                                          ['color']
                                      ),
                                  ]),
                                  _: 1,
                              },
                              8,
                              ['is-dot']
                          ),
                      ]))
                    : B('v-if', !0),
                e.adminInfo.super
                    ? (u(),
                      S(
                          l,
                          {
                              key: 1,
                              onVisibleChange: o[5] || (o[5] = (y) => e.onCurrentNavMenu(y, 'clear')),
                              class: 'h100',
                              size: 'large',
                              'hide-timeout': 50,
                              placement: 'bottom',
                              trigger: 'click',
                              'hide-on-click': !0,
                          },
                          {
                              dropdown: s(() => [
                                  n(
                                      m,
                                      { class: 'dropdown-menu-box' },
                                      {
                                          default: s(() => [
                                              n(
                                                  _,
                                                  { onClick: o[2] || (o[2] = (y) => e.onClearCache('tp')) },
                                                  { default: s(() => [R(T(e.t('utils.Clean up system cache')), 1)]), _: 1 }
                                              ),
                                              n(
                                                  _,
                                                  { onClick: o[3] || (o[3] = (y) => e.onClearCache('storage')) },
                                                  { default: s(() => [R(T(e.t('utils.Clean up browser cache')), 1)]), _: 1 }
                                              ),
                                              n(
                                                  _,
                                                  { onClick: o[4] || (o[4] = (y) => e.onClearCache('all')), divided: '' },
                                                  { default: s(() => [R(T(e.t('utils.Clean up all cache')), 1)]), _: 1 }
                                              ),
                                          ]),
                                          _: 1,
                                      }
                                  ),
                              ]),
                              default: s(() => [
                                  v(
                                      'div',
                                      { class: L(['nav-menu-item', e.state.currentNavMenu == 'clear' ? 'hover' : '']) },
                                      [
                                          n(
                                              r,
                                              {
                                                  color: e.configStore.getColorVal('headerBarTabColor'),
                                                  class: 'nav-menu-icon',
                                                  name: 'el-icon-Delete',
                                                  size: '18',
                                              },
                                              null,
                                              8,
                                              ['color']
                                          ),
                                      ],
                                      2
                                  ),
                              ]),
                              _: 1,
                          }
                      ))
                    : B('v-if', !0),
                e.siteConfig.userInitialize
                    ? (u(),
                      S(
                          g,
                          {
                              key: 2,
                              onShow: o[6] || (o[6] = (y) => e.onCurrentNavMenu(!0, 'adminInfo')),
                              onHide: o[7] || (o[7] = (y) => e.onCurrentNavMenu(!1, 'adminInfo')),
                              placement: 'bottom-end',
                              'hide-after': 0,
                              width: 260,
                              trigger: 'click',
                              'popper-class': 'admin-info-box',
                              visible: e.state.showAdminInfoPopover,
                              'onUpdate:visible': o[8] || (o[8] = (y) => (e.state.showAdminInfoPopover = y)),
                          },
                          {
                              reference: s(() => [
                                  v(
                                      'div',
                                      { class: L(['admin-info', e.state.currentNavMenu == 'adminInfo' ? 'hover' : '']) },
                                      [
                                          n(b, { size: 25, src: e.fullUrl(e.adminInfo.avatar) }, null, 8, ['src']),
                                          v('div', bt, T(e.adminInfo.nickname), 1),
                                      ],
                                      2
                                  ),
                              ]),
                              default: s(() => [
                                  v('div', null, [
                                      v('div', yt, [
                                          n(b, { size: 70, src: e.fullUrl(e.adminInfo.avatar) }, null, 8, ['src']),
                                          v('div', Ct, [v('div', ht, T(e.adminInfo.nickname), 1), v('div', kt, T(e.adminInfo.last_login_time), 1)]),
                                      ]),
                                      v('div', St, [
                                          n(
                                              p,
                                              { onClick: e.onAdminInfo, type: 'primary', plain: '' },
                                              { default: s(() => [R(T(e.t('layouts.personal data')), 1)]), _: 1 }
                                          ),
                                          n(
                                              p,
                                              { onClick: e.onLogout, type: 'danger', plain: '' },
                                              { default: s(() => [R(T(e.t('layouts.cancellation')), 1)]), _: 1 }
                                          ),
                                      ]),
                                  ]),
                              ]),
                              _: 1,
                          },
                          8,
                          ['visible']
                      ))
                    : B('v-if', !0),
                v('div', { onClick: o[9] || (o[9] = (y) => e.configStore.setLayout('showDrawer', !0)), class: 'nav-menu-item' }, [
                    n(r, { color: e.configStore.getColorVal('headerBarTabColor'), class: 'nav-menu-icon', name: 'fa fa-cogs', size: '18' }, null, 8, [
                        'color',
                    ]),
                ]),
                n(e.Config),
                n(e.TerminalVue),
            ],
            2
        )
    )
}
const fe = I(vt, [
        ['render', wt],
        ['__scopeId', 'data-v-0daad335'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/navMenus.vue'],
    ]),
    Tt = A({
        __name: 'default',
        setup(d, { expose: o }) {
            o(),
                H((i) => ({
                    'f7f3ad4c-config.getColorVal("headerBarTabColor")': M(t).getColorVal('headerBarTabColor'),
                    'f7f3ad4c-config.getColorVal("headerBarTabActiveColor")': M(t).getColorVal('headerBarTabActiveColor'),
                    'f7f3ad4c-config.getColorVal("headerBarTabActiveBackground")': M(t).getColorVal('headerBarTabActiveBackground'),
                }))
            const t = D(),
                e = {
                    config: t,
                    NavTabs: Xe,
                    NavMenus: fe,
                    get layoutNavTabsRef() {
                        return qe
                    },
                }
            return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
        },
    }),
    xt = { class: 'nav-bar' }
function Mt(d, o, t, e, i, a) {
    return u(), x('div', xt, [n(e.NavTabs, { ref: 'layoutNavTabsRef' }, null, 512), n(e.NavMenus)])
}
const Bt = I(Tt, [
        ['render', Mt],
        ['__scopeId', 'data-v-f7f3ad4c'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/navBar/default.vue'],
    ]),
    Vt = A({
        __name: 'classic',
        setup(d, { expose: o }) {
            o(),
                H((a) => ({
                    '2fe6eaac-config.getColorVal("headerBarBackground")': M(t).getColorVal('headerBarBackground'),
                    '2fe6eaac-config.getColorVal("headerBarTabColor")': M(t).getColorVal('headerBarTabColor'),
                    '2fe6eaac-config.getColorVal("headerBarTabActiveColor")': M(t).getColorVal('headerBarTabActiveColor'),
                    '2fe6eaac-config.getColorVal("headerBarHoverBackground")': M(t).getColorVal('headerBarHoverBackground'),
                    '2fe6eaac-config.getColorVal("headerBarTabActiveBackground")': M(t).getColorVal('headerBarTabActiveBackground'),
                }))
            const t = D(),
                i = {
                    config: t,
                    onMenuCollapse: () => {
                        mo('ba-aside-menu-shade', () => {
                            t.setLayout('menuCollapse', !0)
                        }),
                            t.setLayout('menuCollapse', !1)
                    },
                    NavTabs: Xe,
                    get layoutNavTabsRef() {
                        return qe
                    },
                    NavMenus: fe,
                }
            return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
        },
    }),
    Rt = { class: 'nav-bar' },
    At = { key: 0, class: 'unfold' }
function It(d, o, t, e, i, a) {
    const r = f('Icon')
    return (
        u(),
        x('div', Rt, [
            e.config.layout.shrink && e.config.layout.menuCollapse
                ? (u(),
                  x('div', At, [
                      n(r, { onClick: e.onMenuCollapse, name: 'fa fa-indent', color: e.config.getColorVal('menuActiveColor'), size: '18' }, null, 8, [
                          'color',
                      ]),
                  ]))
                : B('v-if', !0),
            e.config.layout.shrink ? B('v-if', !0) : (u(), S(e.NavTabs, { key: 1, ref: 'layoutNavTabsRef' }, null, 512)),
            n(e.NavMenus),
        ])
    )
}
const Ft = I(Vt, [
        ['render', It],
        ['__scopeId', 'data-v-2fe6eaac'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/navBar/classic.vue'],
    ]),
    Lt = A({
        __name: 'menuHorizontal',
        setup(d, { expose: o }) {
            o(),
                H((m) => ({
                    'a035d3b8-config.getColorVal("headerBarHoverBackground")': M(t).getColorVal('headerBarHoverBackground'),
                    'a035d3b8-config.getColorVal("menuBackground")': M(t).getColorVal('menuBackground'),
                    'a035d3b8-config.getColorVal("menuColor")': M(t).getColorVal('menuColor'),
                    'a035d3b8-config.getColorVal("menuActiveColor")': M(t).getColorVal('menuActiveColor'),
                    'a035d3b8-config.getColorVal("menuActiveBackground")': M(t).getColorVal('menuActiveBackground'),
                }))
            const t = D(),
                e = P(),
                i = $(),
                a = U({ defaultActive: '' }),
                r = (m) => {
                    const l = e.getTabsViewDataByRoute(m)
                    l && (a.defaultActive = l.meta.matched)
                },
                c = () => {
                    q(() => {
                        var l
                        let m = document.querySelector('.el-menu.menu-horizontal li.is-active')
                        if (!m) return !1
                        ;(l = W.value) == null || l.setScrollTop(m.offsetTop)
                    })
                }
            Y(() => {
                r(i), c(), new we(W.value.wrapRef)
            }),
                se((m) => {
                    r(m)
                })
            const _ = {
                config: t,
                navTabs: e,
                route: i,
                state: a,
                currentRouteActive: r,
                verticalMenusScroll: c,
                Logo: We,
                MenuTree: de,
                NavMenus: fe,
                get layoutMenuRef() {
                    return ue
                },
                get layoutMenuScrollbarRef() {
                    return W
                },
            }
            return Object.defineProperty(_, '__isScriptSetup', { enumerable: !1, value: !0 }), _
        },
    }),
    Dt = { class: 'layouts-menu-horizontal' },
    Pt = { key: 0, class: 'menu-horizontal-logo' }
function Et(d, o, t, e, i, a) {
    const r = f('el-menu'),
        c = f('el-scrollbar')
    return (
        u(),
        x('div', Dt, [
            e.config.layout.menuShowTopBar ? (u(), x('div', Pt, [n(e.Logo)])) : B('v-if', !0),
            n(
                c,
                { ref: 'layoutMenuScrollbarRef', class: 'horizontal-menus-scrollbar' },
                {
                    default: s(() => [
                        n(
                            r,
                            { ref: 'layoutMenuRef', class: 'menu-horizontal', mode: 'horizontal', 'default-active': e.state.defaultActive },
                            {
                                default: s(() => [
                                    n(e.MenuTree, { extends: { position: 'horizontal', level: 1 }, menus: e.navTabs.state.tabsViewRoutes }, null, 8, [
                                        'menus',
                                    ]),
                                ]),
                                _: 1,
                            },
                            8,
                            ['default-active']
                        ),
                    ]),
                    _: 1,
                },
                512
            ),
            n(e.NavMenus),
        ])
    )
}
const Nt = I(Lt, [
        ['render', Et],
        ['__scopeId', 'data-v-a035d3b8'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/menus/menuHorizontal.vue'],
    ]),
    zt = A({
        __name: 'double',
        setup(d, { expose: o }) {
            o(),
                H((m) => ({
                    '95722429-config.getColorVal("menuBackground")': M(t).getColorVal('menuBackground'),
                    '95722429-config.getColorVal("menuColor")': M(t).getColorVal('menuColor'),
                    '95722429-config.getColorVal("menuActiveColor")': M(t).getColorVal('menuActiveColor'),
                    '95722429-config.getColorVal("menuActiveBackground")': M(t).getColorVal('menuActiveBackground'),
                }))
            const t = D(),
                e = P(),
                i = $(),
                a = U({ defaultActive: '' }),
                r = (m) => {
                    const l = e.getTabsViewDataByRoute(m)
                    l && (a.defaultActive = l.meta.matched)
                },
                c = () => {
                    q(() => {
                        var l
                        let m = document.querySelector('.el-menu.menu-horizontal li.is-active')
                        if (!m) return !1
                        ;(l = W.value) == null || l.setScrollTop(m.offsetTop)
                    })
                }
            Y(() => {
                r(i), c()
            }),
                se((m) => {
                    r(m)
                })
            const _ = {
                config: t,
                navTabs: e,
                route: i,
                state: a,
                currentRouteActive: r,
                verticalMenusScroll: c,
                MenuTree: de,
                NavMenus: fe,
                get layoutMenuRef() {
                    return ue
                },
                get layoutMenuScrollbarRef() {
                    return W
                },
            }
            return Object.defineProperty(_, '__isScriptSetup', { enumerable: !1, value: !0 }), _
        },
    }),
    jt = { class: 'layouts-menu-horizontal-double' }
function Ut(d, o, t, e, i, a) {
    const r = f('el-menu'),
        c = f('el-scrollbar')
    return (
        u(),
        x('div', jt, [
            n(
                c,
                { ref: 'layoutMenuScrollbarRef', class: 'double-menus-scrollbar' },
                {
                    default: s(() => [
                        n(
                            r,
                            { ref: 'layoutMenuRef', class: 'menu-horizontal', mode: 'horizontal', 'default-active': e.state.defaultActive },
                            {
                                default: s(() => [
                                    n(e.MenuTree, { extends: { position: 'horizontal', level: 1 }, menus: e.navTabs.state.tabsViewRoutes }, null, 8, [
                                        'menus',
                                    ]),
                                ]),
                                _: 1,
                            },
                            8,
                            ['default-active']
                        ),
                    ]),
                    _: 1,
                },
                512
            ),
            n(e.NavMenus),
        ])
    )
}
const Ot = I(zt, [
        ['render', Ut],
        ['__scopeId', 'data-v-95722429'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/navBar/double.vue'],
    ]),
    Ht = A({
        name: 'layout/header',
        components: { DefaultNavBar: Bt, ClassicNavBar: Ft, StreamlineNavBar: Nt, DoubleNavBar: Ot },
        __name: 'header',
        setup(d, { expose: o }) {
            o()
            const t = D(),
                e = P(),
                i = { config: t, navTabs: e }
            return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
        },
    })
function qt(d, o, t, e, i, a) {
    const r = f('el-header')
    return e.navTabs.state.tabFullScreen
        ? B('v-if', !0)
        : (u(), S(r, { key: 0, class: 'layout-header' }, { default: s(() => [(u(), S(ke(e.config.layout.layoutMode + 'NavBar')))]), _: 1 }))
}
const _e = I(Ht, [
        ['render', qt],
        ['__scopeId', 'data-v-1fa7846a'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/header.vue'],
    ]),
    Wt = A({
        name: 'layout/main',
        __name: 'main',
        setup(d, { expose: o }) {
            o()
            const { proxy: t } = Ke(),
                e = $(),
                i = D(),
                a = P(),
                r = U({ componentKey: e.fullPath, keepAliveComponentNameList: [] }),
                c = function (l) {
                    if (l) {
                        if (r.keepAliveComponentNameList.find((b) => b === l)) return
                        r.keepAliveComponentNameList.push(l)
                    }
                },
                _ = () => {
                    var l
                    if (a.state.activeRoute) {
                        const C = a.getTabsViewDataByRoute(a.state.activeRoute)
                        C && typeof ((l = C.meta) == null ? void 0 : l.keepalive) == 'string' && c(C.meta.keepalive)
                    }
                }
            je(() => {
                t.eventBus.on('onTabViewRefresh', (l) => {
                    ;(r.keepAliveComponentNameList = r.keepAliveComponentNameList.filter((C) => l.meta.keepalive !== C)),
                        (r.componentKey = ''),
                        q(() => {
                            ;(r.componentKey = l.fullPath), c(l.meta.keepalive)
                        })
                }),
                    t.eventBus.on('onTabViewClose', (l) => {
                        r.keepAliveComponentNameList = r.keepAliveComponentNameList.filter((C) => l.meta.keepalive !== C)
                    })
            }),
                $e(() => {
                    t.eventBus.off('onTabViewRefresh'), t.eventBus.off('onTabViewClose')
                }),
                Y(() => {
                    _()
                }),
                eo(
                    () => e.fullPath,
                    () => {
                        ;(r.componentKey = e.fullPath), _()
                    }
                )
            const m = {
                proxy: t,
                route: e,
                config: i,
                navTabs: a,
                state: r,
                addKeepAliveComponentName: c,
                addActiveRouteKeepAlive: _,
                get layoutMainScrollbarRef() {
                    return co
                },
                get layoutMainScrollbarStyle() {
                    return io
                },
            }
            return Object.defineProperty(m, '__isScriptSetup', { enumerable: !1, value: !0 }), m
        },
    })
function Kt(d, o, t, e, i, a) {
    const r = f('router-view'),
        c = f('el-scrollbar'),
        _ = f('el-main')
    return (
        u(),
        S(
            _,
            { class: 'layout-main' },
            {
                default: s(() => [
                    n(
                        c,
                        { class: 'layout-main-scrollbar', style: ee(e.layoutMainScrollbarStyle), ref: 'layoutMainScrollbarRef' },
                        {
                            default: s(() => [
                                n(r, null, {
                                    default: s(({ Component: m }) => [
                                        n(
                                            he,
                                            { name: e.config.layout.mainAnimation, mode: 'out-in' },
                                            {
                                                default: s(() => [
                                                    (u(),
                                                    S(
                                                        oo,
                                                        { include: e.state.keepAliveComponentNameList },
                                                        [(u(), S(ke(m), { key: e.state.componentKey }))],
                                                        1032,
                                                        ['include']
                                                    )),
                                                ]),
                                                _: 2,
                                            },
                                            1032,
                                            ['name']
                                        ),
                                    ]),
                                    _: 1,
                                }),
                            ]),
                            _: 1,
                        },
                        8,
                        ['style']
                    ),
                ]),
                _: 1,
            }
        )
    )
}
const ge = I(Wt, [
        ['render', Kt],
        ['__scopeId', 'data-v-da697c34'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/router-view/main.vue'],
    ]),
    Xt = A({
        __name: 'closeFullScreen',
        setup(d, { expose: o }) {
            o()
            const t = P(),
                e = U({ closeBoxTop: 20 })
            Y(() => {
                setTimeout(() => {
                    e.closeBoxTop = -30
                }, 300)
            })
            const c = {
                navTabs: t,
                state: e,
                onMouseover: () => {
                    e.closeBoxTop = 20
                },
                onMouseout: () => {
                    e.closeBoxTop = -30
                },
                onCloseFullScreen: () => {
                    t.setFullScreen(!1)
                },
            }
            return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
        },
    }),
    Yt = (d) => (Ne('data-v-24abb916'), (d = d()), ze(), d),
    Jt = ['title'],
    Zt = Yt(() => v('div', { class: 'close-full-screen-on' }, null, -1))
function Gt(d, o, t, e, i, a) {
    const r = f('Icon')
    return (
        u(),
        x(
            'div',
            { title: d.$t('layouts.Exit full screen'), onMouseover: ae(e.onMouseover, ['stop']), onMouseout: ae(e.onMouseout, ['stop']) },
            [
                v(
                    'div',
                    { onClick: ae(e.onCloseFullScreen, ['stop']), class: 'close-full-screen', style: ee({ top: e.state.closeBoxTop + 'px' }) },
                    [n(r, { name: 'el-icon-Close' })],
                    4
                ),
                Zt,
            ],
            40,
            Jt
        )
    )
}
const ve = I(Xt, [
        ['render', Gt],
        ['__scopeId', 'data-v-24abb916'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/components/closeFullScreen.vue'],
    ]),
    Qt = A({
        __name: 'default',
        setup(d, { expose: o }) {
            o()
            const e = { navTabs: P(), Aside: Me, Header: _e, Main: ge, CloseFullScreen: ve }
            return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
        },
    })
function $t(d, o, t, e, i, a) {
    const r = f('el-container')
    return (
        u(),
        x(
            N,
            null,
            [
                n(
                    r,
                    { class: 'layout-container' },
                    { default: s(() => [n(e.Aside), n(r, { class: 'content-wrapper' }, { default: s(() => [n(e.Header), n(e.Main)]), _: 1 })]), _: 1 }
                ),
                e.navTabs.state.tabFullScreen ? (u(), S(e.CloseFullScreen, { key: 0 })) : B('v-if', !0),
            ],
            64
        )
    )
}
const en = I(Qt, [
        ['render', $t],
        ['__scopeId', 'data-v-5e3a3b94'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/container/default.vue'],
    ]),
    on = A({
        __name: 'classic',
        setup(d, { expose: o }) {
            o()
            const e = { navTabs: P(), Aside: Me, Header: _e, Main: ge, CloseFullScreen: ve }
            return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
        },
    })
function tn(d, o, t, e, i, a) {
    const r = f('el-container')
    return (
        u(),
        x(
            N,
            null,
            [
                n(
                    r,
                    { class: 'layout-container' },
                    { default: s(() => [n(e.Aside), n(r, { class: 'content-wrapper' }, { default: s(() => [n(e.Header), n(e.Main)]), _: 1 })]), _: 1 }
                ),
                e.navTabs.state.tabFullScreen ? (u(), S(e.CloseFullScreen, { key: 0 })) : B('v-if', !0),
            ],
            64
        )
    )
}
const nn = I(on, [
        ['render', tn],
        ['__scopeId', 'data-v-c9e935e9'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/container/classic.vue'],
    ]),
    an = A({
        __name: 'streamline',
        setup(d, { expose: o }) {
            o()
            const e = { navTabs: P(), Header: _e, Main: ge, CloseFullScreen: ve }
            return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
        },
    })
function ln(d, o, t, e, i, a) {
    const r = f('el-container')
    return (
        u(),
        x(
            N,
            null,
            [
                n(
                    r,
                    { class: 'layout-container' },
                    { default: s(() => [n(r, { class: 'content-wrapper' }, { default: s(() => [n(e.Header), n(e.Main)]), _: 1 })]), _: 1 }
                ),
                e.navTabs.state.tabFullScreen ? (u(), S(e.CloseFullScreen, { key: 0 })) : B('v-if', !0),
            ],
            64
        )
    )
}
const rn = I(an, [
        ['render', ln],
        ['__scopeId', 'data-v-ab6f0758'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/container/streamline.vue'],
    ]),
    sn = A({
        __name: 'double',
        setup(d, { expose: o }) {
            o()
            const e = { navTabs: P(), Aside: Me, Header: _e, Main: ge, CloseFullScreen: ve }
            return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
        },
    })
function cn(d, o, t, e, i, a) {
    const r = f('el-container')
    return (
        u(),
        x(
            N,
            null,
            [
                n(
                    r,
                    { class: 'layout-container' },
                    { default: s(() => [n(e.Aside), n(r, { class: 'content-wrapper' }, { default: s(() => [n(e.Header), n(e.Main)]), _: 1 })]), _: 1 }
                ),
                e.navTabs.state.tabFullScreen ? (u(), S(e.CloseFullScreen, { key: 0 })) : B('v-if', !0),
            ],
            64
        )
    )
}
const un = I(sn, [
        ['render', cn],
        ['__scopeId', 'data-v-3fac8587'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/container/double.vue'],
    ]),
    dn = A({
        components: { Default: en, Classic: nn, Streamline: rn, Double: un },
        __name: 'index',
        setup(d, { expose: o }) {
            o()
            const t = Te(),
                e = P(),
                i = D(),
                a = $(),
                r = Se(),
                c = Oe()
            console.log('layoutMOde:'), console.log(i.layout.layoutMode)
            const _ = U({ autoMenuCollapseLock: !1 })
            Y(() => {
                if (!c.token) return He.push({ name: 'adminLogin' })
                m(), ye(), le(window, 'resize', ye)
            }),
                je(() => {
                    l(), le(window, 'resize', l)
                })
            const m = () => {
                    yo().then((b) => {
                        if (
                            (r.dataFill(b.data.siteConfig),
                            t.changePackageManager(b.data.terminal.npmPackageManager),
                            t.changePHPDevelopmentServer(b.data.terminal.phpDevelopmentServer),
                            r.setInitialize(!0),
                            Ae(b.data.adminInfo) || (c.dataFill(b.data.adminInfo), r.setUserInitialize(!0)),
                            b.data.menus)
                        ) {
                            if ((fo(b.data.menus), a.params.to)) {
                                const g = JSON.parse(a.params.to)
                                if (g.path != Ue) {
                                    let y = Ae(g.query) ? {} : g.query
                                    ie({ path: g.path, query: y })
                                    return
                                }
                            }
                            let p = xe(e.state.tabsViewRoutes)
                            p && ie(p.path)
                        }
                    })
                },
                l = () => {
                    let b = { layoutMode: i.layout.layoutMode, menuCollapse: i.layout.menuCollapse },
                        p = te.get(re)
                    if ((p || te.set(re, b), document.body.clientWidth < 1024))
                        _.autoMenuCollapseLock || ((_.autoMenuCollapseLock = !0), i.setLayout('menuCollapse', !0)),
                            i.setLayout('shrink', !0),
                            i.setLayoutMode('Classic')
                    else {
                        _.autoMenuCollapseLock = !1
                        let y = p || b
                        i.setLayout('menuCollapse', y.menuCollapse), i.setLayout('shrink', !1), i.setLayoutMode(y.layoutMode)
                    }
                },
                C = { terminal: t, navTabs: e, config: i, route: a, siteConfig: r, adminInfo: c, state: _, init: m, onAdaptiveLayout: l }
            return Object.defineProperty(C, '__isScriptSetup', { enumerable: !1, value: !0 }), C
        },
    })
function mn(d, o, t, e, i, a) {
    return (
        u(),
        x(
            N,
            null,
            [
                B(
                    ' 动态组件： 由于组件是通过变量引用而不是基于字符串组件名注册的，在 <script setup> 中要使用动态组件的时候，应该使用动态的 :is 来绑定 '
                ),
                (u(), S(ke(e.config.layout.layoutMode))),
            ],
            2112
        )
    )
}
const kn = I(dn, [
    ['render', mn],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/layouts/backend/index.vue'],
])
export { kn as default }
