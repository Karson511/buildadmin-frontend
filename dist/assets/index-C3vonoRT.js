const __vite__fileDeps = [
        './index-Bdluk4iF.js',
        './vue-Rh7pEvFB.js',
        './router-DCOnE4m1.js',
        './darkSwitch-DGaQFbkU.js',
        './index-DQwP9Y7u.js',
        './index-CK3pnx59.js',
        './useDark-BqvPuHnb.js',
        './index-BrGKKT2t.js',
        './index-BC54TMpd.js',
        './loading-2QLhs6Wj.js',
        './user-BMuKXhHQ.js',
        './footer-n_BPmNE4.js',
        './index-DAsvYgwg.js',
        './login-ayAVu_aQ.js',
        './validate-Dr-o2ZDb.js',
        './index-tKVF42Jv.js',
        './login-header-BfppTrn9.js',
        './login-DAbwLim_.js',
        './404-Cs88DKqW.js',
        './401-XM4H9K-7.js',
    ],
    __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i])
var Un = Object.defineProperty
var jn = (e, t, n) => (t in e ? Un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n))
var ie = (e, t, n) => (jn(e, typeof t != 'symbol' ? t + '' : t, n), n)
import {
    c as qn,
    g as $n,
    n as H,
    d as te,
    r as me,
    i as je,
    E as Hn,
    v as Vt,
    a as Wn,
    b as Jn,
    u as Gn,
    e as tt,
    f as M,
    o as qe,
    h as ft,
    j as mt,
    k as Yn,
    l as le,
    m as $e,
    p as U,
    q as Kn,
    s as Xn,
    t as Qn,
    w as Zn,
    x as er,
    y as Ut,
    z as tr,
    A as nr,
    B as jt,
    C as nt,
    D as K,
    F as rr,
    G as or,
    H as sr,
    I as pe,
    J as ar,
    K as ir,
    L as pt,
    M as qt,
    N as ur,
    O as cr,
    P as lr,
    Q as dr,
    R as fr,
    S as mr,
    T as pr,
} from './vue-Rh7pEvFB.js'
;(function () {
    const t = document.createElement('link').relList
    if (t && t.supports && t.supports('modulepreload')) return
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
    new MutationObserver((o) => {
        for (const s of o) if (s.type === 'childList') for (const a of s.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(o) {
        const s = {}
        return (
            o.integrity && (s.integrity = o.integrity),
            o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === 'use-credentials'
                ? (s.credentials = 'include')
                : o.crossOrigin === 'anonymous'
                  ? (s.credentials = 'omit')
                  : (s.credentials = 'same-origin'),
            s
        )
    }
    function r(o) {
        if (o.ep) return
        o.ep = !0
        const s = n(o)
        fetch(o.href, s)
    }
})()
var $t = { exports: {} }
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ ;(function (e, t) {
    ;(function (n, r) {
        e.exports = r()
    })(qn, function () {
        var n = {}
        n.version = '0.2.0'
        var r = (n.settings = {
            minimum: 0.08,
            easing: 'ease',
            positionUsing: '',
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: 'body',
            template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
        })
        ;(n.configure = function (d) {
            var f, l
            for (f in d) (l = d[f]), l !== void 0 && d.hasOwnProperty(f) && (r[f] = l)
            return this
        }),
            (n.status = null),
            (n.set = function (d) {
                var f = n.isStarted()
                ;(d = o(d, r.minimum, 1)), (n.status = d === 1 ? null : d)
                var l = n.render(!f),
                    y = l.querySelector(r.barSelector),
                    T = r.speed,
                    E = r.easing
                return (
                    l.offsetWidth,
                    i(function (k) {
                        r.positionUsing === '' && (r.positionUsing = n.getPositioningCSS()),
                            c(y, a(d, T, E)),
                            d === 1
                                ? (c(l, { transition: 'none', opacity: 1 }),
                                  l.offsetWidth,
                                  setTimeout(function () {
                                      c(l, { transition: 'all ' + T + 'ms linear', opacity: 0 }),
                                          setTimeout(function () {
                                              n.remove(), k()
                                          }, T)
                                  }, T))
                                : setTimeout(k, T)
                    }),
                    this
                )
            }),
            (n.isStarted = function () {
                return typeof n.status == 'number'
            }),
            (n.start = function () {
                n.status || n.set(0)
                var d = function () {
                    setTimeout(function () {
                        n.status && (n.trickle(), d())
                    }, r.trickleSpeed)
                }
                return r.trickle && d(), this
            }),
            (n.done = function (d) {
                return !d && !n.status ? this : n.inc(0.3 + 0.5 * Math.random()).set(1)
            }),
            (n.inc = function (d) {
                var f = n.status
                return f ? (typeof d != 'number' && (d = (1 - f) * o(Math.random() * f, 0.1, 0.95)), (f = o(f + d, 0, 0.994)), n.set(f)) : n.start()
            }),
            (n.trickle = function () {
                return n.inc(Math.random() * r.trickleRate)
            }),
            (function () {
                var d = 0,
                    f = 0
                n.promise = function (l) {
                    return !l || l.state() === 'resolved'
                        ? this
                        : (f === 0 && n.start(),
                          d++,
                          f++,
                          l.always(function () {
                              f--, f === 0 ? ((d = 0), n.done()) : n.set((d - f) / d)
                          }),
                          this)
                }
            })(),
            (n.render = function (d) {
                if (n.isRendered()) return document.getElementById('nprogress')
                m(document.documentElement, 'nprogress-busy')
                var f = document.createElement('div')
                ;(f.id = 'nprogress'), (f.innerHTML = r.template)
                var l = f.querySelector(r.barSelector),
                    y = d ? '-100' : s(n.status || 0),
                    T = document.querySelector(r.parent),
                    E
                return (
                    c(l, { transition: 'all 0 linear', transform: 'translate3d(' + y + '%,0,0)' }),
                    r.showSpinner || ((E = f.querySelector(r.spinnerSelector)), E && w(E)),
                    T != document.body && m(T, 'nprogress-custom-parent'),
                    T.appendChild(f),
                    f
                )
            }),
            (n.remove = function () {
                h(document.documentElement, 'nprogress-busy'), h(document.querySelector(r.parent), 'nprogress-custom-parent')
                var d = document.getElementById('nprogress')
                d && w(d)
            }),
            (n.isRendered = function () {
                return !!document.getElementById('nprogress')
            }),
            (n.getPositioningCSS = function () {
                var d = document.body.style,
                    f = 'WebkitTransform' in d ? 'Webkit' : 'MozTransform' in d ? 'Moz' : 'msTransform' in d ? 'ms' : 'OTransform' in d ? 'O' : ''
                return f + 'Perspective' in d ? 'translate3d' : f + 'Transform' in d ? 'translate' : 'margin'
            })
        function o(d, f, l) {
            return d < f ? f : d > l ? l : d
        }
        function s(d) {
            return (-1 + d) * 100
        }
        function a(d, f, l) {
            var y
            return (
                r.positionUsing === 'translate3d'
                    ? (y = { transform: 'translate3d(' + s(d) + '%,0,0)' })
                    : r.positionUsing === 'translate'
                      ? (y = { transform: 'translate(' + s(d) + '%,0)' })
                      : (y = { 'margin-left': s(d) + '%' }),
                (y.transition = 'all ' + f + 'ms ' + l),
                y
            )
        }
        var i = (function () {
                var d = []
                function f() {
                    var l = d.shift()
                    l && l(f)
                }
                return function (l) {
                    d.push(l), d.length == 1 && f()
                }
            })(),
            c = (function () {
                var d = ['Webkit', 'O', 'Moz', 'ms'],
                    f = {}
                function l(k) {
                    return k.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (P, L) {
                        return L.toUpperCase()
                    })
                }
                function y(k) {
                    var P = document.body.style
                    if (k in P) return k
                    for (var L = d.length, b = k.charAt(0).toUpperCase() + k.slice(1), v; L--; ) if (((v = d[L] + b), v in P)) return v
                    return k
                }
                function T(k) {
                    return (k = l(k)), f[k] || (f[k] = y(k))
                }
                function E(k, P, L) {
                    ;(P = T(P)), (k.style[P] = L)
                }
                return function (k, P) {
                    var L = arguments,
                        b,
                        v
                    if (L.length == 2) for (b in P) (v = P[b]), v !== void 0 && P.hasOwnProperty(b) && E(k, b, v)
                    else E(k, L[1], L[2])
                }
            })()
        function u(d, f) {
            var l = typeof d == 'string' ? d : g(d)
            return l.indexOf(' ' + f + ' ') >= 0
        }
        function m(d, f) {
            var l = g(d),
                y = l + f
            u(l, f) || (d.className = y.substring(1))
        }
        function h(d, f) {
            var l = g(d),
                y
            u(d, f) && ((y = l.replace(' ' + f + ' ', ' ')), (d.className = y.substring(1, y.length - 1)))
        }
        function g(d) {
            return (' ' + (d.className || '') + ' ').replace(/\s+/gi, ' ')
        }
        function w(d) {
            d && d.parentNode && d.parentNode.removeChild(d)
        }
        return n
    })
})($t)
var hr = $t.exports
const He = $n(hr),
    gr = 'modulepreload',
    br = function (e, t) {
        return new URL(e, t).href
    },
    ht = {},
    _ = function (t, n, r) {
        let o = Promise.resolve()
        if (n && n.length > 0) {
            const s = document.getElementsByTagName('link'),
                a = document.querySelector('meta[property=csp-nonce]'),
                i = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute('nonce'))
            o = Promise.all(
                n.map((c) => {
                    if (((c = br(c, r)), c in ht)) return
                    ht[c] = !0
                    const u = c.endsWith('.css'),
                        m = u ? '[rel="stylesheet"]' : ''
                    if (!!r)
                        for (let w = s.length - 1; w >= 0; w--) {
                            const d = s[w]
                            if (d.href === c && (!u || d.rel === 'stylesheet')) return
                        }
                    else if (document.querySelector(`link[href="${c}"]${m}`)) return
                    const g = document.createElement('link')
                    if (
                        ((g.rel = u ? 'stylesheet' : gr),
                        u || ((g.as = 'script'), (g.crossOrigin = '')),
                        (g.href = c),
                        i && g.setAttribute('nonce', i),
                        document.head.appendChild(g),
                        u)
                    )
                        return new Promise((w, d) => {
                            g.addEventListener('load', w), g.addEventListener('error', () => d(new Error(`Unable to preload CSS for ${c}`)))
                        })
                })
            )
        }
        return o
            .then(() => t())
            .catch((s) => {
                const a = new Event('vite:preloadError', { cancelable: !0 })
                if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented)) throw s
            })
    },
    B = '/admin',
    de = {
        path: B,
        name: 'admin',
        component: () => _(() => import('./index-Bdluk4iF.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url),
        redirect: B + '/loading',
        meta: { title: 'pagesTitle.admin' },
        children: [
            {
                path: 'loading/:to?',
                name: 'adminMainLoading',
                component: () => _(() => import('./loading-2QLhs6Wj.js'), __vite__mapDeps([9, 1, 2]), import.meta.url),
                meta: { title: 'pagesTitle.loading' },
            },
        ],
    },
    _r = Object.freeze(Object.defineProperty({ __proto__: null, adminBaseRoutePath: B, default: de }, Symbol.toStringTag, { value: 'Module' })),
    ne = '/user',
    yr = {
        path: ne,
        name: 'user',
        component: () => _(() => import('./user-BMuKXhHQ.js'), __vite__mapDeps([10, 1, 11, 2, 6, 3]), import.meta.url),
        redirect: ne + '/loading',
        meta: { title: 'pagesTitle.user' },
        children: [
            {
                path: 'loading/:to?',
                name: 'userMainLoading',
                component: () => _(() => import('./loading-2QLhs6Wj.js'), __vite__mapDeps([9, 1, 2]), import.meta.url),
                meta: { title: 'pagesTitle.loading' },
            },
        ],
    },
    wr = Object.freeze(
        Object.defineProperty({ __proto__: null, default: yr, memberCenterBaseRoutePath: ne }, Symbol.toStringTag, { value: 'Module' })
    ),
    ue = (e) => `pagesTitle.${e}`,
    Ht = [
        {
            path: '/',
            name: '/',
            component: () => _(() => import('./index-DAsvYgwg.js'), __vite__mapDeps([12, 1, 11, 2, 6, 3]), import.meta.url),
            meta: { title: ue('home') },
        },
        {
            path: B + '/login',
            name: 'adminLogin',
            component: () => _(() => import('./login-ayAVu_aQ.js'), __vite__mapDeps([13, 1, 7, 14, 15, 6, 16]), import.meta.url),
            meta: { title: ue('adminLogin') },
        },
        {
            path: ne + '/login',
            name: 'userLogin',
            component: () => _(() => import('./login-DAbwLim_.js'), __vite__mapDeps([17, 1, 11, 2, 6, 3, 14, 15]), import.meta.url),
            meta: { title: ue('userLogin') },
        },
        { path: '/:path(.*)*', redirect: '/404' },
        {
            path: '/404',
            name: 'notFound',
            component: () => _(() => import('./404-Cs88DKqW.js'), __vite__mapDeps([18, 1]), import.meta.url),
            meta: { title: ue('notFound') },
        },
        {
            path: B + ':path(.*)*',
            redirect: (e) => (
                console.log('static, 找不到页面:', e.path),
                { name: 'adminMainLoading', params: { to: JSON.stringify({ path: e.path, query: e.query }) } }
            ),
        },
        { path: ne + ':path(.*)*', redirect: (e) => ({ name: 'userMainLoading', params: { to: JSON.stringify({ path: e.path, query: e.query }) } }) },
        {
            path: '/401',
            name: 'noPower',
            component: () => _(() => import('./401-XM4H9K-7.js'), __vite__mapDeps([19, 1]), import.meta.url),
            meta: { title: ue('noPower') },
        },
    ],
    Ce = Object.assign({ './static/adminBase.ts': _r, './static/memberCenterBase.ts': wr })
for (const e in Ce) Ce[e].default && Ht.push(Ce[e].default)
const Wt = {
        show: () => {
            const e = document.body,
                t = document.createElement('div')
            ;(t.className = 'block-loading'),
                (t.innerHTML = `
            <div class="block-loading-box">
                <div class="block-loading-box-warp">
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                    <div class="block-loading-box-item"></div>
                </div>
            </div>
        `),
                e.insertBefore(t, e.childNodes[0])
        },
        hide: () => {
            H(() => {
                setTimeout(() => {
                    var t
                    const e = document.querySelector('.block-loading')
                    e && ((t = e.parentNode) == null || t.removeChild(e))
                }, 1e3)
            })
        },
    },
    gt = {
        '/': ['./frontend/${lang}/index.ts'],
        [B + '/moduleStore']: ['./backend/${lang}/module.ts'],
        [B + '/user/rule']: ['./backend/${lang}/auth/rule.ts'],
        [B + '/user/scoreLog']: ['./backend/${lang}/user/moneyLog.ts'],
        [B + '/crud/crud']: ['./backend/${lang}/crud/log.ts', './backend/${lang}/crud/state.ts'],
    },
    vr = {
        noPowerTip:
            '这不是你想要的，但我们是认真的。我只是想用一种特殊的方式告诉你，你无权访问此页面，或者该文件无效。您可以联系网站管理员以更快地解决问题，或返回网站首页浏览其他页面。',
    },
    Er = Object.freeze(Object.defineProperty({ __proto__: null, default: vr }, Symbol.toStringTag, { value: 'Module' })),
    Tr = {
        'problems tip': '你的网页遇到了一些问题，系统正在优化和上报故障信息，我们在未来将改善和减少这种情况的发生.',
        'We will automatically return to the previous page when we are finished': '我们将在完成后自动返回到上一页。',
        'Return to home page': '返回首页',
        'Back to previous page': '返回上一页',
    },
    kr = Object.freeze(Object.defineProperty({ __proto__: null, default: Tr }, Symbol.toStringTag, { value: 'Module' })),
    Sr = {
        'Operation successful': '操作成功',
        'Automatic cancellation due to duplicate request:': '因为请求重复被自动取消：',
        'Interface redirected!': '接口重定向了！',
        'Incorrect parameter!': '参数不正确！',
        'You do not have permission to operate!': '您没有权限操作！',
        'Error requesting address:': '请求地址出错:',
        'Request timed out!': '请求超时！',
        'The same data already exists in the system!': '系统已存在相同数据！',
        'Server internal error!': '服务器内部错误！',
        'Service not implemented!': '服务未实现！',
        'Gateway error!': '网关错误！',
        'Service unavailable!': '服务不可用！',
        'The service is temporarily unavailable Please try again later!': '服务暂时无法访问，请稍后再试！',
        'HTTP version is not supported!': 'HTTP版本不受支持！',
        'Abnormal problem, please contact the website administrator!': '异常问题，请联系网站管理员！',
        'Network request timeout!': '网络请求超时！',
        'Server exception!': '服务端异常！',
        'You are disconnected!': '您断网了！',
    },
    Or = Object.freeze(Object.defineProperty({ __proto__: null, default: Sr }, Symbol.toStringTag, { value: 'Module' })),
    Rr = {
        home: '首页',
        admin: '后台',
        adminLogin: '登录',
        notFound: '页面找不到了',
        noPower: '无访问权限',
        noTitle: '无标题',
        loading: 'Loading...',
        user: '会员中心',
        userLogin: '会员登录',
    },
    Lr = Object.freeze(Object.defineProperty({ __proto__: null, default: Rr }, Symbol.toStringTag, { value: 'Module' })),
    Ar = {
        'The moving position is beyond the movable range!': '移动位置超出了可移动范围！',
        'Navigation failed, the menu type is unrecognized!': '导航失败，菜单类型无法识别！',
        'Navigation failed, navigation guard intercepted!': '导航失败，导航守卫拦截！',
        'Navigation failed, it is at the navigation target position!': '导航失败，已在导航目标位置！',
        'Navigation failed, invalid route!': '导航失败，路由无效！',
        'No child menu to jump to!': '没有找到可以跳转的子级菜单！',
        Loading: '加载中...',
        Reload: '重新加载',
        comma: '，',
        'welcome back': '欢迎回来！',
        'Late at night, pay attention to your body!': '夜深了，注意身体哦！',
        'good morning!': '早上好！',
        'Good morning!': '上午好！',
        'Good noon!': '中午好！',
        'good afternoon': '下午好！',
        'Good evening': '晚上好！',
        'Hello!': '您好！',
        open: '开启',
        close: '关闭',
        'Clean up system cache': '清理系统缓存',
        'Clean up browser cache': '清理浏览器缓存',
        'Clean up all cache': '一键清理所有',
        'The data of the uploaded file is incomplete!': '上传文件的资料不完整！',
        'The type of uploaded file is not allowed!': '上传文件的类型不被允许！',
        'The size of the uploaded file exceeds the allowed range!': '上传文件的大小超出允许范围！',
        'Please install editor': '请先于模块市场安装富文本编辑器。',
        mobile: '手机号',
        'Id number': '身份证号',
        account: '账户名',
        password: '密码',
        'variable name': '变量名',
        email: '邮箱地址',
        date: '日期',
        number: '数字',
        float: '浮点数',
        integer: '整数',
        time: '时间',
        file: '文件',
        array: '数组',
        switch: '开关',
        year: '年份',
        image: '图片',
        select: '下拉框',
        string: '字符串',
        radio: '单选框',
        checkbox: '复选框',
        'rich Text': '富文本',
        'multi image': '多图',
        textarea: '多行文本框',
        'time date': '时间日期',
        'remote select': '远程下拉',
        'city select': '城市选择',
        'icon select': '图标选择',
        'color picker': '颜色选择器',
        color: '颜色',
        choice: '选择',
        Icon: '图标',
        'Local icon title': '本地图标:/src/assets/icons中的.svg',
        'Please select an icon': '请选择图标',
        'Ali iconcont Icon': '阿里 Iconfont 图标',
        'Select File': '选择文件',
        'Original name': '原始名称',
        'You can also select': '还可以选择',
        items: '项',
        Breakdown: '细目',
        size: '大小',
        type: '类型',
        preview: '预览',
        'Upload (Reference) times': '上传(引用)次数',
        'Last upload time': '最后上传时间',
        'One attribute per line without quotation marks(formitem)': 'FormItem 的扩展属性，一行一个，无需引号，比如：class=config-item',
        'Extended properties of Input, one line without quotation marks, such as: size=large':
            'Input 的扩展属性，一行一个，无需引号，比如：size=large',
        'One line at a time, without quotation marks, for example: key1=value1': '一行一个，无需引号，比如：key1=value1',
        Var: '变量',
        Name: '名',
        Title: '标题',
        Tip: '提示信息',
        Rule: '验证规则',
        Extend: '扩展属性',
        Dict: '字典数据',
        ArrayKey: '键名',
        ArrayValue: '键值',
        'No data': '无数据',
    },
    Pr = Object.freeze(Object.defineProperty({ __proto__: null, default: Ar }, Symbol.toStringTag, { value: 'Module' })),
    xr = {
        'Captcha loading failed, please click refresh button': '验证码加载失败，请点击刷新按钮',
        'The correct area is not clicked, please try again!': '未点中正确区域，请重试！',
        'Verification is successful!': '验证成功！',
        'Please click': '请依次点击',
        'Please enter the correct mobile number': '请输入正确的手机号',
        'Please enter the correct account': '要求3到15位，字母开头且只含字母、数字、下划线',
        'Please enter the correct password': `密码要求6到32位，不能包含 & < > " '`,
        'Please enter the correct name': '请输入正确的名称',
        'Content cannot be empty': '内容不能为空',
        'Floating point number': '浮点数',
        required: '必填',
        'editor required': '富文本必填',
        'Please enter the correct ID number': '请输入正确的身份证号码',
    },
    Dr = Object.freeze(Object.defineProperty({ __proto__: null, default: xr }, Symbol.toStringTag, { value: 'Module' })),
    Cr = {
        noPowerTip:
            "It's not what you want, but we're serious. I want to tell you in a special way that you don't have permission to access this page or the file is invalid. You can contact the website administrator to solve the problem faster or go back home page to view another page.",
    },
    Ir = Object.freeze(Object.defineProperty({ __proto__: null, default: Cr }, Symbol.toStringTag, { value: 'Module' })),
    Nr = {
        'problems tip':
            'Your website has encountered some problems. The system is optimizing and reporting fault information. We will improve and reduce this situation in the future.',
        'We will automatically return to the previous page when we are finished': 'Auto return to previous page when finished.',
        'Return to home page': 'Back to Home',
        'Back to previous page': 'Back to previous page',
    },
    Fr = Object.freeze(Object.defineProperty({ __proto__: null, default: Nr }, Symbol.toStringTag, { value: 'Module' })),
    Br = {
        'Operation successful': 'Operate successful',
        'Automatic cancellation due to duplicate request:': 'Automatic cancellation due to duplicate requests:',
        'Interface redirected!': 'Interface redirected!',
        'Incorrect parameter!': 'Incorrect parameter!',
        'You do not have permission to operate!': 'You have no permission to operate!',
        'Error requesting address:': 'Error requesting address:',
        'Request timed out!': 'Request timeout!',
        'The same data already exists in the system!': 'The same data already exists on the system!',
        'Server internal error!': 'Internal server error!',
        'Service not implemented!': 'Service unrealized!',
        'Gateway error!': 'Gateway error!',
        'Service unavailable!': 'Service unavailable!',
        'The service is temporarily unavailable Please try again later!': 'The service is temporarily unavailable, please try again later!',
        'HTTP version is not supported!': 'HTTP version is not Unsupported!',
        'Abnormal problem, please contact the website administrator!': 'Abnormal problems, please contact the website administrator!',
        'Network request timeout!': 'Network request timeout!',
        'Server exception!': 'Server-side exceptions!',
        'You are disconnected!': 'You are disconnected!',
    },
    Mr = Object.freeze(Object.defineProperty({ __proto__: null, default: Br }, Symbol.toStringTag, { value: 'Module' })),
    zr = {
        home: 'Home',
        admin: 'Admin',
        adminLogin: 'Login',
        notFound: 'Page not found',
        noPower: 'No access permission',
        noTitle: 'No title',
        loading: 'Loading...',
        user: 'Member Center',
        userLogin: 'Menber Login',
    },
    Vr = Object.freeze(Object.defineProperty({ __proto__: null, default: zr }, Symbol.toStringTag, { value: 'Module' })),
    Ur = {
        'The moving position is beyond the movable range!': 'The movement position is beyond the removable range!',
        'Navigation failed, the menu type is unrecognized!': 'Navigation failed, menu type not recognized!',
        'Navigation failed, navigation guard intercepted!': 'Navigation failed, Navigation Guard interception!',
        'Navigation failed, it is at the navigation target position!': 'Navigation failed, it is already at the navigation the position!',
        'Navigation failed, invalid route!': 'Navigation failed, invalid route!',
        'No child menu to jump to!': 'No child menu to jump to!',
        Loading: 'Loading...',
        Reload: 'Reload',
        comma: ',',
        'welcome back': 'Welcome back!',
        'Late at night, pay attention to your body!': 'It is late at night. Please tack care of your body!',
        'good morning!': 'Good morning!',
        'Good morning!': 'Good morning!',
        'Good noon!': 'Good noon!',
        'good afternoon': 'Good afternoon.',
        'Good evening': 'Good evening',
        'Hello!': 'Hello!',
        open: 'Open',
        close: 'Close',
        'Clean up system cache': 'Clean up the system cache',
        'Clean up browser cache': 'Clean up browser cache',
        'Clean up all cache': 'Clean up all cache',
        'The data of the uploaded file is incomplete!': 'The data of the uploaded file is incomplete!',
        'The type of uploaded file is not allowed!': 'The type of uploaded file is not allowed!',
        'The size of the uploaded file exceeds the allowed range!': 'The size of the uploaded file exceeds the allowed range!',
        'Please install editor': 'Please install editor',
        mobile: 'Mobile Number',
        'Id number': 'Id Number',
        account: 'Account name',
        password: 'password',
        'variable name': 'Variable Name',
        email: 'Email address',
        date: 'Date',
        number: 'Number',
        float: 'Float',
        integer: 'Integer',
        time: 'Time',
        file: 'File',
        array: 'Array',
        switch: 'Switch',
        year: 'Year',
        image: 'Image',
        select: 'Select',
        string: 'String',
        radio: 'Radio',
        checkbox: 'checkbox',
        'rich Text': 'Rich Text',
        'multi image': 'Multi image',
        textarea: 'Textarea',
        'time date': 'Time Date',
        'remote select': 'Remote Select',
        'city select': 'City select',
        'icon select': 'Icon select',
        'color picker': 'color picker',
        color: 'color',
        choice: ' Choice',
        Icon: 'Icon',
        'Local icon title': 'Local icon:/src/assets/icons Inside.svg',
        'Please select an icon': 'Please select an icon',
        'Ali iconcont Icon': 'Ali Iconfont Icon',
        'Select File': 'Select File',
        'Original name': 'Original name',
        'You can also select': 'You can also select',
        items: 'items',
        Breakdown: 'Detailed catalogue',
        size: 'Size',
        type: 'Type',
        preview: 'Preview',
        'Upload (Reference) times': 'Upload (Reference) times',
        'Last upload time': 'Last upload time',
        'One attribute per line without quotation marks(formitem)':
            'Extensions to FormItem, One attribute per line, no quotation marks required, such as: class=config-item',
        'Extended properties of Input, one line without quotation marks, such as: size=large':
            'Extended properties of Input, one line without quotation marks, such as: size=large',
        'One line at a time, without quotation marks, for example: key1=value1': 'One per line, no quotation marks required, such as: key1=value1',
        Var: 'Var ',
        Name: 'Name',
        Title: 'Title',
        Tip: 'Tip',
        Rule: 'Rule',
        Extend: 'Extend',
        Dict: 'Dict',
        ArrayKey: 'Key',
        ArrayValue: 'Value',
        'No data': 'No data',
    },
    jr = Object.freeze(Object.defineProperty({ __proto__: null, default: Ur }, Symbol.toStringTag, { value: 'Module' })),
    qr = {
        'Captcha loading failed, please click refresh button': 'Captcha loading failed, please click refresh button',
        'The correct area is not clicked, please try again!': 'The correct area is not clicked, please try again!',
        'Verification is successful!': 'Verification is successful!',
        'Please click': 'Please click',
        'Please enter the correct mobile number': 'Please enter the correct mobile number',
        'Please enter the correct account': 'The account requires 3 to 15 characters and contains a-z A-Z 0-9 _',
        'Please enter the correct password': `The password requires 6 to 32 characters and cannot contains & < > " '`,
        'Please enter the correct name': 'Please enter the correct name',
        'Content cannot be empty': 'The content cannot be blank',
        'Floating point number': ' Floating number',
        required: 'Required',
        'editor required': 'editor Required',
        'Please enter the correct ID number': 'Please enter the correct ID number',
    },
    $r = Object.freeze(Object.defineProperty({ __proto__: null, default: qr }, Symbol.toStringTag, { value: 'Module' })),
    Hr = (e, t, n) => {
        const r = e[t]
        return r
            ? typeof r == 'function'
                ? r()
                : Promise.resolve(r)
            : new Promise((o, s) => {
                  ;(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
                      s.bind(
                          null,
                          new Error(
                              'Unknown variable dynamic import: ' +
                                  t +
                                  (t.split('/').length !== n ? '. Note that variables only represent file names one level deep.' : '')
                          )
                      )
                  )
              })
    },
    Wr = 'adminInfo',
    Jr = 'storeConfig_v2',
    Gr = 'storeTabViewConfig',
    Yr = 'storeTerminal',
    pi = 'workingTime',
    hi = 'beforeResizeLayout',
    bt = 'userInfo',
    gi = 'ba_account',
    oe = te(
        'config',
        () => {
            const e = me({
                    showDrawer: !1,
                    shrink: !1,
                    layoutMode: 'Default',
                    mainAnimation: 'slide-right',
                    isDark: !1,
                    menuBackground: ['#ffffff', '#1d1e1f'],
                    menuColor: ['#303133', '#CFD3DC'],
                    menuActiveBackground: ['#ffffff', '#1d1e1f'],
                    menuActiveColor: ['#409eff', '#3375b9'],
                    menuTopBarBackground: ['#fcfcfc', '#1d1e1f'],
                    menuWidth: 260,
                    menuDefaultIcon: 'fa fa-circle-o',
                    menuCollapse: !1,
                    menuUniqueOpened: !1,
                    menuShowTopBar: !0,
                    headerBarTabColor: ['#000000', '#CFD3DC'],
                    headerBarTabActiveBackground: ['#ffffff', '#1d1e1f'],
                    headerBarTabActiveColor: ['#000000', '#409EFF'],
                    headerBarBackground: ['#ffffff', '#1d1e1f'],
                    headerBarHoverBackground: ['#f5f5f5', '#18222c'],
                }),
                t = me({
                    defaultLang: 'zh-cn',
                    fallbackLang: 'zh-cn',
                    langArray: [
                        { name: 'zh-cn', value: '中文简体' },
                        { name: 'en', value: 'English' },
                    ],
                })
            function n() {
                return e.shrink ? (e.menuCollapse ? '0px' : e.menuWidth + 'px') : e.menuCollapse ? '64px' : e.menuWidth + 'px'
            }
            function r(c) {
                t.defaultLang = c
            }
            function o(c = e.layoutMode) {
                const u = e.isDark ? { idx: 1, color: '#1d1e1f', newColor: '#141414' } : { idx: 0, color: '#ffffff', newColor: '#f5f5f5' }
                c == 'Classic' && e.headerBarBackground[u.idx] == u.color && e.headerBarTabActiveBackground[u.idx] == u.color
                    ? (e.headerBarTabActiveBackground[u.idx] = u.newColor)
                    : c == 'Default' &&
                      e.headerBarBackground[u.idx] == u.color &&
                      e.headerBarTabActiveBackground[u.idx] == u.newColor &&
                      (e.headerBarTabActiveBackground[u.idx] = u.color)
            }
            function s(c) {
                ;(e.layoutMode = c), o(c)
            }
            return {
                layout: e,
                lang: t,
                menuWidth: n,
                setLang: r,
                setLayoutMode: s,
                setLayout: (c, u) => {
                    e[c] = u
                },
                getColorVal: function (c) {
                    const u = e[c]
                    return e.isDark ? u[1] : u[0]
                },
                onSetLayoutColor: o,
            }
        },
        { persist: { key: Jr } }
    )
var Kr = {
    name: 'zh-cn',
    el: {
        breadcrumb: { label: '面包屑' },
        colorpicker: { confirm: '确定', clear: '清空' },
        datepicker: {
            now: '此刻',
            today: '今天',
            cancel: '取消',
            clear: '清空',
            confirm: '确定',
            selectDate: '选择日期',
            selectTime: '选择时间',
            startDate: '开始日期',
            startTime: '开始时间',
            endDate: '结束日期',
            endTime: '结束时间',
            prevYear: '前一年',
            nextYear: '后一年',
            prevMonth: '上个月',
            nextMonth: '下个月',
            year: '年',
            month1: '1 月',
            month2: '2 月',
            month3: '3 月',
            month4: '4 月',
            month5: '5 月',
            month6: '6 月',
            month7: '7 月',
            month8: '8 月',
            month9: '9 月',
            month10: '10 月',
            month11: '11 月',
            month12: '12 月',
            weeks: { sun: '日', mon: '一', tue: '二', wed: '三', thu: '四', fri: '五', sat: '六' },
            months: {
                jan: '一月',
                feb: '二月',
                mar: '三月',
                apr: '四月',
                may: '五月',
                jun: '六月',
                jul: '七月',
                aug: '八月',
                sep: '九月',
                oct: '十月',
                nov: '十一月',
                dec: '十二月',
            },
        },
        select: { loading: '加载中', noMatch: '无匹配数据', noData: '无数据', placeholder: '请选择' },
        cascader: { noMatch: '无匹配数据', loading: '加载中', placeholder: '请选择', noData: '暂无数据' },
        pagination: {
            goto: '前往',
            pagesize: '条/页',
            total: '共 {total} 条',
            pageClassifier: '页',
            page: '页',
            prev: '上一页',
            next: '下一页',
            currentPage: '第 {pager} 页',
            prevPages: '向前 {pager} 页',
            nextPages: '向后 {pager} 页',
            deprecationWarning: '你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档',
        },
        messagebox: { title: '提示', confirm: '确定', cancel: '取消', error: '输入的数据不合法!' },
        upload: { deleteTip: '按 delete 键可删除', delete: '删除', preview: '查看图片', continue: '继续上传' },
        table: { emptyText: '暂无数据', confirmFilter: '筛选', resetFilter: '重置', clearFilter: '全部', sumText: '合计' },
        tour: { next: '下一步', previous: '上一步', finish: '结束导览' },
        tree: { emptyText: '暂无数据' },
        transfer: {
            noMatch: '无匹配数据',
            noData: '无数据',
            titles: ['列表 1', '列表 2'],
            filterPlaceholder: '请输入搜索内容',
            noCheckedFormat: '共 {total} 项',
            hasCheckedFormat: '已选 {checked}/{total} 项',
        },
        image: { error: '加载失败' },
        pageHeader: { title: '返回' },
        popconfirm: { confirmButtonText: '确定', cancelButtonText: '取消' },
        carousel: { leftArrow: '上一张幻灯片', rightArrow: '下一张幻灯片', indicator: '幻灯片切换至索引 {index}' },
    },
}
let O
const Ie = { 'zh-cn': [Kr], en: [Hn] }
async function Xr(e) {
    const t = oe(),
        n = t.lang.defaultLang,
        o =
            (
                await Hr(
                    Object.assign({
                        './globs-en.ts': () => _(() => import('./globs-en-DPAQn2AY.js'), [], import.meta.url),
                        './globs-zh-cn.ts': () => _(() => import('./globs-zh-cn-CZdSAaYM.js'), [], import.meta.url),
                    }),
                    `./globs-${n}.ts`,
                    2
                )
            ).default ?? {}
    n == 'zh-cn'
        ? (window.loadLangHandle = {
              ...Object.assign({
                  './backend/zh-cn/auth/admin.ts': () => _(() => import('./admin-BjLJ_tyd.js'), [], import.meta.url),
                  './backend/zh-cn/auth/adminLog.ts': () => _(() => import('./adminLog-F4wjgJZH.js'), [], import.meta.url),
                  './backend/zh-cn/auth/group.ts': () => _(() => import('./group-CeWvFH9t.js'), [], import.meta.url),
                  './backend/zh-cn/auth/rule.ts': () => _(() => import('./rule-Drc6VICq.js'), [], import.meta.url),
                  './backend/zh-cn/crud/crud.ts': () => _(() => import('./crud-D4ZpkWOu.js'), [], import.meta.url),
                  './backend/zh-cn/crud/log.ts': () => _(() => import('./log-DBdshLry.js'), [], import.meta.url),
                  './backend/zh-cn/crud/state.ts': () => _(() => import('./state-D2adjEok.js'), [], import.meta.url),
                  './backend/zh-cn/dashboard.ts': () => _(() => import('./dashboard-C4vevHoF.js'), [], import.meta.url),
                  './backend/zh-cn/login.ts': () => _(() => import('./login-BvqGv-Gf.js'), [], import.meta.url),
                  './backend/zh-cn/module.ts': () => _(() => import('./module-DsPDAcn0.js'), [], import.meta.url),
                  './backend/zh-cn/order/order.ts': () => _(() => import('./order-BXSgwHwD.js'), [], import.meta.url),
                  './backend/zh-cn/order/recharge.ts': () => _(() => import('./recharge-jx9tWQdP.js'), [], import.meta.url),
                  './backend/zh-cn/routine/adminInfo.ts': () => _(() => import('./adminInfo-Dqur8ZFp.js'), [], import.meta.url),
                  './backend/zh-cn/routine/attachment.ts': () => _(() => import('./attachment-Bk2xuZDZ.js'), [], import.meta.url),
                  './backend/zh-cn/routine/config.ts': () => _(() => import('./config-g0yU5SlJ.js'), [], import.meta.url),
                  './backend/zh-cn/security/dataRecycle.ts': () => _(() => import('./dataRecycle-gNM0idy0.js'), [], import.meta.url),
                  './backend/zh-cn/security/dataRecycleLog.ts': () => _(() => import('./dataRecycleLog-Cuy0TitL.js'), [], import.meta.url),
                  './backend/zh-cn/security/sensitiveData.ts': () => _(() => import('./sensitiveData-DrKmN5tU.js'), [], import.meta.url),
                  './backend/zh-cn/security/sensitiveDataLog.ts': () => _(() => import('./sensitiveDataLog-DwZOViO1.js'), [], import.meta.url),
                  './backend/zh-cn/shop/jobType.ts': () => _(() => import('./jobType-CeAg8Wn6.js'), [], import.meta.url),
                  './backend/zh-cn/shop/topic.ts': () => _(() => import('./topic-CgAm7egV.js'), [], import.meta.url),
                  './backend/zh-cn/shop/user.ts': () => _(() => import('./user-D-owGxtE.js'), [], import.meta.url),
                  './backend/zh-cn/shop/userProfileLog.ts': () => _(() => import('./userProfileLog-CCpXfxzw.js'), [], import.meta.url),
                  './backend/zh-cn/user/group.ts': () => _(() => import('./group-zEBYXoRl.js'), [], import.meta.url),
                  './backend/zh-cn/user/moneyLog.ts': () => _(() => import('./moneyLog-eCJlCSVn.js'), [], import.meta.url),
                  './backend/zh-cn/user/rule.ts': () => _(() => import('./rule-C8FRxNFe.js'), [], import.meta.url),
                  './backend/zh-cn/user/scoreLog.ts': () => _(() => import('./scoreLog-BjEmrWqM.js'), [], import.meta.url),
                  './backend/zh-cn/user/user.ts': () => _(() => import('./user-ChF9ufZL.js'), [], import.meta.url),
              }),
              ...Object.assign({
                  './frontend/zh-cn/index.ts': () => _(() => import('./index-CQ8BcFdd.js'), [], import.meta.url),
                  './frontend/zh-cn/user/account/balance.ts': () => _(() => import('./balance-DXvZWTY3.js'), [], import.meta.url),
                  './frontend/zh-cn/user/account/changePassword.ts': () => _(() => import('./changePassword-E1K_Kp15.js'), [], import.meta.url),
                  './frontend/zh-cn/user/account/integral.ts': () => _(() => import('./integral-DDLaKTXY.js'), [], import.meta.url),
                  './frontend/zh-cn/user/account/overview.ts': () => _(() => import('./overview-Bj1_Yjz2.js'), [], import.meta.url),
                  './frontend/zh-cn/user/account/profile.ts': () => _(() => import('./profile-B7j2CFJr.js'), [], import.meta.url),
                  './frontend/zh-cn/user/login.ts': () => _(() => import('./login-CKFxGqw1.js'), [], import.meta.url),
              }),
              ...Object.assign({ './backend/zh-cn.ts': () => _(() => import('./zh-cn-DTXxceC3.js'), [], import.meta.url) }),
              ...Object.assign({ './frontend/zh-cn.ts': () => _(() => import('./zh-cn-CdIiMMgK.js'), [], import.meta.url) }),
          })
        : (window.loadLangHandle = {
              ...Object.assign({
                  './backend/en/auth/admin.ts': () => _(() => import('./admin-B3ku-tyo.js'), [], import.meta.url),
                  './backend/en/auth/adminLog.ts': () => _(() => import('./adminLog-CJcRZUUn.js'), [], import.meta.url),
                  './backend/en/auth/group.ts': () => _(() => import('./group-DA0SgpBf.js'), [], import.meta.url),
                  './backend/en/auth/rule.ts': () => _(() => import('./rule-Ck8_D6_A.js'), [], import.meta.url),
                  './backend/en/crud/crud.ts': () => _(() => import('./crud-CbcTtSX9.js'), [], import.meta.url),
                  './backend/en/crud/log.ts': () => _(() => import('./log-BJ3cn_Dz.js'), [], import.meta.url),
                  './backend/en/crud/state.ts': () => _(() => import('./state-D7l1PiBP.js'), [], import.meta.url),
                  './backend/en/dashboard.ts': () => _(() => import('./dashboard-DS-T8Ndf.js'), [], import.meta.url),
                  './backend/en/login.ts': () => _(() => import('./login-LkYKP3u8.js'), [], import.meta.url),
                  './backend/en/module.ts': () => _(() => import('./module-B_X4aWZH.js'), [], import.meta.url),
                  './backend/en/routine/adminInfo.ts': () => _(() => import('./adminInfo-DO0DyOrC.js'), [], import.meta.url),
                  './backend/en/routine/attachment.ts': () => _(() => import('./attachment-BC9DmiIE.js'), [], import.meta.url),
                  './backend/en/routine/config.ts': () => _(() => import('./config-ipM4Uubg.js'), [], import.meta.url),
                  './backend/en/security/dataRecycle.ts': () => _(() => import('./dataRecycle-CHOKVf0o.js'), [], import.meta.url),
                  './backend/en/security/dataRecycleLog.ts': () => _(() => import('./dataRecycleLog-CHRTnOTc.js'), [], import.meta.url),
                  './backend/en/security/sensitiveData.ts': () => _(() => import('./sensitiveData-DtL-hJ8T.js'), [], import.meta.url),
                  './backend/en/security/sensitiveDataLog.ts': () => _(() => import('./sensitiveDataLog-U1HjPre2.js'), [], import.meta.url),
                  './backend/en/user/group.ts': () => _(() => import('./group-hItrrdix.js'), [], import.meta.url),
                  './backend/en/user/moneyLog.ts': () => _(() => import('./moneyLog-C2gX-sr2.js'), [], import.meta.url),
                  './backend/en/user/rule.ts': () => _(() => import('./rule-UtenmmAd.js'), [], import.meta.url),
                  './backend/en/user/scoreLog.ts': () => _(() => import('./scoreLog-FwQFTTxd.js'), [], import.meta.url),
                  './backend/en/user/user.ts': () => _(() => import('./user-BtDLcyN2.js'), [], import.meta.url),
              }),
              ...Object.assign({
                  './frontend/en/index.ts': () => _(() => import('./index-CNBDvWFU.js'), [], import.meta.url),
                  './frontend/en/user/account/balance.ts': () => _(() => import('./balance-DNOPtc84.js'), [], import.meta.url),
                  './frontend/en/user/account/changePassword.ts': () => _(() => import('./changePassword-UlRVPHpK.js'), [], import.meta.url),
                  './frontend/en/user/account/integral.ts': () => _(() => import('./integral-DAGRbkLC.js'), [], import.meta.url),
                  './frontend/en/user/account/overview.ts': () => _(() => import('./overview-0We_x43F.js'), [], import.meta.url),
                  './frontend/en/user/account/profile.ts': () => _(() => import('./profile-hwfc-7B8.js'), [], import.meta.url),
                  './frontend/en/user/login.ts': () => _(() => import('./login-yyNuy4NV.js'), [], import.meta.url),
              }),
              ...Object.assign({ './backend/en.ts': () => _(() => import('./en-B44_3IzK.js'), [], import.meta.url) }),
              ...Object.assign({ './frontend/en.ts': () => _(() => import('./en-C7aUFtJu.js'), [], import.meta.url) }),
          }),
        n == 'zh-cn'
            ? Ie[n].push(
                  _t(
                      Object.assign({
                          './common/zh-cn/401.ts': Er,
                          './common/zh-cn/404.ts': kr,
                          './common/zh-cn/axios.ts': Or,
                          './common/zh-cn/pagesTitle.ts': Lr,
                          './common/zh-cn/utils.ts': Pr,
                          './common/zh-cn/validate.ts': Dr,
                      }),
                      n
                  )
              )
            : n == 'en' &&
              Ie[n].push(
                  _t(
                      Object.assign({
                          './common/en/401.ts': Ir,
                          './common/en/404.ts': Fr,
                          './common/en/axios.ts': Mr,
                          './common/en/pagesTitle.ts': Vr,
                          './common/en/utils.ts': jr,
                          './common/en/validate.ts': $r,
                      }),
                      n
                  )
              )
    const s = { [n]: { ...o } }
    return (
        Object.assign(s[n], ...Ie[n]),
        (O = Vt.createI18n({ locale: n, legacy: !1, globalInjection: !0, fallbackLocale: t.lang.fallbackLang, messages: s })),
        e.use(O),
        O
    )
}
function _t(e, t) {
    let n = {}
    t = '/' + t
    for (const r in e)
        if (e[r].default) {
            const o = r.slice(r.lastIndexOf(t) + (t.length + 1), r.lastIndexOf('.'))
            o.indexOf('/') > 0 ? (n = Jt(n, e[r].default, o)) : (n[o] = e[r].default)
        }
    return n
}
function Qr(e, t = '') {
    if (je(e)) return
    if (!t) return O.global.mergeLocaleMessage(O.global.locale.value, e)
    let n = {}
    t.indexOf('/') > 0 ? (n = Jt(n, e, t)) : (n[t] = e), O.global.mergeLocaleMessage(O.global.locale.value, n)
}
function Jt(e, t, n) {
    const r = n.split('/')
    let o = {}
    for (let s = r.length - 1; s >= 0; s--) s == r.length - 1 ? (o = { [r[s]]: t }) : (o = { [r[s]]: o })
    return Gt(e, o)
}
function Gt(e, t) {
    for (const n in t) typeof e[n] > 'u' ? (e[n] = t[n]) : typeof e[n] == 'object' && (e[n] = Gt(e[n], t[n]))
    return e
}
function bi(e) {
    oe().setLang(e), location.reload()
}
const F = Wn({ history: Jn(), routes: Ht })
F.beforeEach((e, t, n) => {
    console.log('from.path > to.path, to.fullPath:', ' = ', decodeURI(t.path), ' > ', decodeURI(e.path), ',', decodeURI(e.fullPath)),
        He.configure({ showSpinner: !1 }),
        He.start(),
        window.existLoading || (Wt.show(), (window.existLoading = !0))
    let r = []
    const o = oe()
    e.path in gt && r.push(...gt[e.path])
    let s = ''
    if ((console.log('to.fullPath:', e.fullPath), $(e.fullPath))) {
        s = './backend/' + o.lang.defaultLang
        const i = e.path.slice(e.path.indexOf(B) + B.length)
        console.log('adminPath:', s + i + '.ts'), i && r.push(s + i + '.ts')
    } else (s = './frontend/' + o.lang.defaultLang), r.push(s + e.path + '.ts')
    e.name &&
        (console.log('to.name:', e.name.toString()), console.log(s + '/' + e.name.toString() + '.ts'), r.push(s + '/' + e.name.toString() + '.ts')),
        window.loadLangHandle.publicMessageLoaded || (window.loadLangHandle.publicMessageLoaded = [])
    const a = s + '.ts'
    window.loadLangHandle.publicMessageLoaded.includes(a) || (r.push(a), window.loadLangHandle.publicMessageLoaded.push(a)), (r = Gn(r))
    for (const i in r)
        (r[i] = r[i].replaceAll('${lang}', o.lang.defaultLang)),
            r[i] in window.loadLangHandle &&
                window.loadLangHandle[r[i]]().then((c) => {
                    const u = r[i].slice(r[i].lastIndexOf(s) + (s.length + 1), r[i].lastIndexOf('.'))
                    Qr(c.default, u)
                })
    n()
})
F.afterEach(() => {
    window.existLoading && Wt.hide(), He.done()
})
const Zr = tt({
        __name: 'index',
        props: {
            name: { type: String, required: !0, default: '' },
            size: { type: String, required: !0, default: '18px' },
            color: { type: String, required: !0, default: '#000000' },
        },
        setup(e, { expose: t }) {
            t()
            const n = e,
                r = `${n.size.replace('px', '')}px`,
                o = M(() => `#${n.name}`),
                s = M(() => ({ color: n.color, fontSize: r })),
                a = M(() => Nn(n.name)),
                i = M(() => ({ width: r, height: r, mask: `url(${n.name}) no-repeat 50% 50%`, '-webkit-mask': `url(${n.name}) no-repeat 50% 50%` })),
                c = { props: n, s: r, iconName: o, iconStyle: s, isUrl: a, urlIconStyle: i }
            return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
        },
    }),
    rt = (e, t) => {
        const n = e.__vccOpts || e
        for (const [r, o] of t) n[r] = o
        return n
    },
    eo = ['href']
function to(e, t, n, r, o, s) {
    return r.isUrl
        ? (qe(), ft('div', { key: 0, style: mt(r.urlIconStyle), class: 'url-svg svg-icon icon' }, null, 4))
        : (qe(), ft('svg', { key: 1, class: 'svg-icon icon', style: mt(r.iconStyle) }, [Yn('use', { href: r.iconName }, null, 8, eo)], 4))
}
const no = rt(Zr, [
        ['render', to],
        ['__scopeId', 'data-v-f601a253'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/components/icon/svg/index.vue'],
    ]),
    ro = tt({
        name: 'Icon',
        props: { name: { type: String, required: !0 }, size: { type: String, default: '18px' }, color: { type: String, default: '#000000' } },
        setup(e) {
            const t = M(() => {
                const { size: n, color: r } = e
                return { fontSize: `${n.replace('px', '')}px`, color: r }
            })
            return e.name.indexOf('el-icon-') === 0
                ? () => le('el-icon', { class: 'icon el-icon', style: t.value }, [le($e(e.name))])
                : e.name.indexOf('local-') === 0 || Nn(e.name)
                  ? () => le(no, { name: e.name, size: e.size, color: e.color })
                  : () => le('i', { class: [e.name, 'icon'], style: t.value })
        },
    }),
    oo = rt(ro, [['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/components/icon/index.vue']])
function so(e = 0) {
    let t = e
    const n = { Default: 70, Classic: 50, Streamline: 60 }
    if ($()) {
        const r = oe()
        Yt().state.tabFullScreen || (t += n[r.layout.layoutMode])
    } else t += 60
    return { height: 'calc(100vh - ' + t.toString() + 'px)' }
}
function _i() {
    const e = document.querySelector('.nav-tabs')
    if (!e) return
    const t = document.querySelector('.nav-bar'),
        n = document.querySelector('.nav-menus'),
        r = t.offsetWidth - (n.offsetWidth + 20)
    e.style.width = r.toString() + 'px'
}
const Ne = U(),
    yi = U(),
    wi = M(() => so()),
    vi = U(),
    Ei = U(),
    Yt = te(
        'navTabs',
        () => {
            const e = me({ activeIndex: 0, activeRoute: null, tabsView: [], tabFullScreen: !1, tabsViewRoutes: [], authNode: new Map() }),
                t = (f) => {
                    var l
                    ;(l = Ne.value) == null || l.closeTabByPath(f)
                },
                n = (f) => {
                    var l
                    ;(l = Ne.value) == null || l.closeAllTab(f)
                },
                r = (f, l) => {
                    var y
                    ;(y = Ne.value) == null || y.updateTabTitle(f, l)
                }
            function o(f) {
                const l = { ...f, matched: [], meta: { ...f.meta } }
                if (!l.meta.addtab) return
                const y = w(l)
                y && y.meta && ((l.name = y.name), (l.meta.id = y.meta.id), (l.meta.title = y.meta.title))
                for (const T in e.tabsView)
                    if (e.tabsView[T].meta.id === l.meta.id || e.tabsView[T].fullPath == l.fullPath) {
                        ;(e.tabsView[T].fullPath = l.fullPath),
                            (e.tabsView[T].params = je(l.params) ? e.tabsView[T].params : l.params),
                            (e.tabsView[T].query = je(l.query) ? e.tabsView[T].query : l.query)
                        return
                    }
                typeof l.meta.title == 'string' && (l.meta.title = O.global.te(l.meta.title) ? O.global.t(l.meta.title) : l.meta.title),
                    e.tabsView.push(l)
            }
            const s = (f) => {
                const l = e.tabsView.findIndex((y) => y.fullPath === f.fullPath)
                l !== -1 && ((e.activeRoute = f), (e.activeIndex = l))
            }
            function a(f) {
                e.tabsView.map((l, y) => {
                    if (l.fullPath == f.fullPath) {
                        e.tabsView.splice(y, 1)
                        return
                    }
                })
            }
            const i = (f = !1) => {
                    f ? (e.tabsView = [f]) : (e.tabsView = [])
                },
                c = (f, l) => {
                    for (const y in e.tabsView)
                        if (e.tabsView[y].fullPath == f) {
                            e.tabsView[y].meta.title = l
                            break
                        }
                },
                u = (f) => {
                    e.tabsViewRoutes = Kt(f)
                },
                m = (f, l) => {
                    e.authNode.set(f, l)
                },
                h = (f) => {
                    e.authNode = f
                },
                g = (f) => {
                    e.tabFullScreen = f
                },
                w = (f, l = 'normal') => {
                    let y = d(f.fullPath, e.tabsViewRoutes, l)
                    return y ? ((y.meta.matched = f.fullPath), y) : ((y = d(f.path, e.tabsViewRoutes, l)), y ? ((y.meta.matched = f.path), y) : !1)
                },
                d = (f, l, y) => {
                    for (const T in l) {
                        if (l[T].path === f) return l[T]
                        if (l[T].children && l[T].children.length) {
                            const E = d(f, l[T].children, y)
                            if (E) return y == 'above' ? l[T] : E
                        }
                    }
                    return !1
                }
            return {
                state: e,
                closeAllTab: n,
                closeTabByPath: t,
                updateTabTitle: r,
                setTabsViewRoutes: u,
                setAuthNode: m,
                fillAuthNode: h,
                setFullScreen: g,
                getTabsViewDataByPath: d,
                getTabsViewDataByRoute: w,
                _addTab: o,
                _closeTab: a,
                _closeTabs: i,
                _setActiveRoute: s,
                _updateTabTitle: c,
            }
        },
        { persist: { key: Gr, pick: ['state.tabFullScreen'] } }
    )
function Kt(e) {
    return (
        e.forEach((t) => {
            var n
            ;((n = t.meta) == null ? void 0 : n.menu_type) == 'iframe' && (t.path = B + '/iframe/' + encodeURIComponent(t.path)),
                t.children && t.children.length && (t.children = Kt(t.children))
        }),
        e
    )
}
const ao = te('memberCenter', () => {
    const e = me({
        open: !1,
        layoutMode: 'Default',
        activeRoute: null,
        viewRoutes: [],
        showHeadline: !1,
        authNode: new Map(),
        shrink: !1,
        menuExpand: !1,
        navUserMenus: [],
    })
    return {
        state: e,
        setNavUserMenus: (g) => {
            e.navUserMenus = g
        },
        mergeNavUserMenus: (g) => {
            e.navUserMenus = [...e.navUserMenus, ...g]
        },
        setAuthNode: (g, w) => {
            e.authNode.set(g, w)
        },
        mergeAuthNode: (g) => {
            e.authNode = new Map([...e.authNode, ...g])
        },
        setViewRoutes: (g) => {
            e.viewRoutes = Xt(g)
        },
        setShowHeadline: (g) => {
            e.showHeadline = g
        },
        setActiveRoute: (g) => {
            e.activeRoute = g
        },
        setShrink: (g) => {
            e.shrink = g
        },
        setStatus: (g) => {
            e.open = g
        },
        setLayoutMode: (g) => {
            e.layoutMode = g
        },
        toggleMenuExpand: (g = !e.menuExpand) => {
            e.menuExpand = g
        },
    }
})
function Xt(e) {
    return (
        e.forEach((t) => {
            var n
            ;((n = t.meta) == null ? void 0 : n.menu_type) == 'iframe' && (t.path = '/user/iframe/' + encodeURIComponent(t.path)),
                t.children && t.children.length && (t.children = Xt(t.children))
        }),
        e
    )
}
const Se = te('siteConfig', {
    state: () => ({
        siteName: '',
        recordNumber: '',
        version: '',
        cdnUrl: '',
        apiUrl: '',
        upload: { mode: 'local' },
        headNav: [],
        initialize: !1,
        userInitialize: !1,
    }),
    actions: {
        dataFill(e) {
            this.$state = e
        },
        setHeadNav(e) {
            this.headNav = e
        },
        setInitialize(e) {
            this.initialize = e
        },
        setUserInitialize(e) {
            this.userInitialize = e
        },
    },
})
function Oe(e) {
    return Qn() ? (Zn(e), !0) : !1
}
function I(e) {
    return typeof e == 'function' ? e() : Xn(e)
}
const Qt = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const io = (e) => e != null,
    uo = Object.prototype.toString,
    co = (e) => uo.call(e) === '[object Object]',
    Zt = () => {}
function lo(e, t) {
    function n(...r) {
        return new Promise((o, s) => {
            Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r }))
                .then(o)
                .catch(s)
        })
    }
    return n
}
const en = (e) => e()
function fo(e = en) {
    const t = U(!0)
    function n() {
        t.value = !1
    }
    function r() {
        t.value = !0
    }
    const o = (...s) => {
        t.value && e(...s)
    }
    return { isActive: Ut(t), pause: n, resume: r, eventFilter: o }
}
function mo(e, t = !1, n = 'Timeout') {
    return new Promise((r, o) => {
        setTimeout(t ? () => o(n) : r, e)
    })
}
function po(e) {
    return e
}
function tn(e) {
    return jt()
}
function nn(...e) {
    if (e.length !== 1) return er(...e)
    const t = e[0]
    return typeof t == 'function' ? Ut(tr(() => ({ get: t, set: Zt }))) : U(t)
}
function ho(e, t, n = {}) {
    const { eventFilter: r = en, ...o } = n
    return K(e, lo(r, t), o)
}
function go(e, t, n = {}) {
    const { eventFilter: r, ...o } = n,
        { eventFilter: s, pause: a, resume: i, isActive: c } = fo(r)
    return { stop: ho(e, t, { ...o, eventFilter: s }), pause: a, resume: i, isActive: c }
}
function bo(e, t) {
    tn() && nr(e, t)
}
function rn(e, t = !0, n) {
    tn() ? nt(e, n) : t ? e() : H(e)
}
function Ti(e = !1, t = {}) {
    const { truthyValue: n = !0, falsyValue: r = !1 } = t,
        o = Kn(e),
        s = U(e)
    function a(i) {
        if (arguments.length) return (s.value = i), s.value
        {
            const c = I(n)
            return (s.value = s.value === c ? I(r) : c), s.value
        }
    }
    return o ? a : [s, a]
}
function ot(e) {
    var t
    const n = I(e)
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Z = Qt ? window : void 0,
    _o = Qt ? window.document : void 0
function We(...e) {
    let t, n, r, o
    if ((typeof e[0] == 'string' || Array.isArray(e[0]) ? (([n, r, o] = e), (t = Z)) : ([t, n, r, o] = e), !t)) return Zt
    Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r])
    const s = [],
        a = () => {
            s.forEach((m) => m()), (s.length = 0)
        },
        i = (m, h, g, w) => (m.addEventListener(h, g, w), () => m.removeEventListener(h, g, w)),
        c = K(
            () => [ot(t), I(o)],
            ([m, h]) => {
                if ((a(), !m)) return
                const g = co(h) ? { ...h } : h
                s.push(...n.flatMap((w) => r.map((d) => i(m, w, d, g))))
            },
            { immediate: !0, flush: 'post' }
        ),
        u = () => {
            c(), a()
        }
    return Oe(u), u
}
function yo() {
    const e = U(!1),
        t = jt()
    return (
        t &&
            nt(() => {
                e.value = !0
            }, t),
        e
    )
}
function on(e) {
    const t = yo()
    return M(() => (t.value, !!e()))
}
function wo(e, t, n = {}) {
    const { window: r = Z, ...o } = n
    let s
    const a = on(() => r && 'MutationObserver' in r),
        i = () => {
            s && (s.disconnect(), (s = void 0))
        },
        c = M(() => {
            const g = I(e),
                w = (Array.isArray(g) ? g : [g]).map(ot).filter(io)
            return new Set(w)
        }),
        u = K(
            () => c.value,
            (g) => {
                i(), a.value && g.size && ((s = new MutationObserver(t)), g.forEach((w) => s.observe(w, o)))
            },
            { immediate: !0, flush: 'post' }
        ),
        m = () => (s == null ? void 0 : s.takeRecords()),
        h = () => {
            i(), u()
        }
    return Oe(h), { isSupported: a, stop: h, takeRecords: m }
}
function vo(e, t = {}) {
    const { window: n = Z } = t,
        r = on(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
    let o
    const s = U(!1),
        a = (u) => {
            s.value = u.matches
        },
        i = () => {
            o && ('removeEventListener' in o ? o.removeEventListener('change', a) : o.removeListener(a))
        },
        c = sr(() => {
            r.value &&
                (i(), (o = n.matchMedia(I(e))), 'addEventListener' in o ? o.addEventListener('change', a) : o.addListener(a), (s.value = o.matches))
        })
    return (
        Oe(() => {
            c(), i(), (o = void 0)
        }),
        s
    )
}
const ye = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {},
    we = '__vueuse_ssr_handlers__',
    Eo = To()
function To() {
    return we in ye || (ye[we] = ye[we] || {}), ye[we]
}
function sn(e, t) {
    return Eo[e] || t
}
function ko(e) {
    return e == null
        ? 'any'
        : e instanceof Set
          ? 'set'
          : e instanceof Map
            ? 'map'
            : e instanceof Date
              ? 'date'
              : typeof e == 'boolean'
                ? 'boolean'
                : typeof e == 'string'
                  ? 'string'
                  : typeof e == 'object'
                    ? 'object'
                    : Number.isNaN(e)
                      ? 'any'
                      : 'number'
}
const So = {
        boolean: { read: (e) => e === 'true', write: (e) => String(e) },
        object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
        number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
        any: { read: (e) => e, write: (e) => String(e) },
        string: { read: (e) => e, write: (e) => String(e) },
        map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) },
        set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
        date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
    },
    yt = 'vueuse-storage'
function Oo(e, t, n, r = {}) {
    var o
    const {
            flush: s = 'pre',
            deep: a = !0,
            listenToStorageChanges: i = !0,
            writeDefaults: c = !0,
            mergeDefaults: u = !1,
            shallow: m,
            window: h = Z,
            eventFilter: g,
            onError: w = (S) => {
                console.error(S)
            },
            initOnMounted: d,
        } = r,
        f = (m ? or : U)(typeof t == 'function' ? t() : t)
    if (!n)
        try {
            n = sn('getDefaultStorage', () => {
                var S
                return (S = Z) == null ? void 0 : S.localStorage
            })()
        } catch (S) {
            w(S)
        }
    if (!n) return f
    const l = I(t),
        y = ko(l),
        T = (o = r.serializer) != null ? o : So[y],
        { pause: E, resume: k } = go(f, () => L(f.value), { flush: s, deep: a, eventFilter: g })
    h &&
        i &&
        rn(() => {
            We(h, 'storage', v), We(h, yt, D), d && v()
        }),
        d || v()
    function P(S, N) {
        h && h.dispatchEvent(new CustomEvent(yt, { detail: { key: e, oldValue: S, newValue: N, storageArea: n } }))
    }
    function L(S) {
        try {
            const N = n.getItem(e)
            if (S == null) P(N, null), n.removeItem(e)
            else {
                const J = T.write(S)
                N !== J && (n.setItem(e, J), P(N, J))
            }
        } catch (N) {
            w(N)
        }
    }
    function b(S) {
        const N = S ? S.newValue : n.getItem(e)
        if (N == null) return c && l != null && n.setItem(e, T.write(l)), l
        if (!S && u) {
            const J = T.read(N)
            return typeof u == 'function' ? u(J, l) : y === 'object' && !Array.isArray(J) ? { ...l, ...J } : J
        } else return typeof N != 'string' ? N : T.read(N)
    }
    function v(S) {
        if (!(S && S.storageArea !== n)) {
            if (S && S.key == null) {
                f.value = l
                return
            }
            if (!(S && S.key !== e)) {
                E()
                try {
                    ;(S == null ? void 0 : S.newValue) !== T.write(f.value) && (f.value = b(S))
                } catch (N) {
                    w(N)
                } finally {
                    S ? H(k) : k()
                }
            }
        }
    }
    function D(S) {
        v(S.detail)
    }
    return f
}
function an(e) {
    return vo('(prefers-color-scheme: dark)', e)
}
function Ro(e = {}) {
    const {
            selector: t = 'html',
            attribute: n = 'class',
            initialValue: r = 'auto',
            window: o = Z,
            storage: s,
            storageKey: a = 'vueuse-color-scheme',
            listenToStorageChanges: i = !0,
            storageRef: c,
            emitAuto: u,
            disableTransition: m = !0,
        } = e,
        h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
        g = an({ window: o }),
        w = M(() => (g.value ? 'dark' : 'light')),
        d = c || (a == null ? nn(r) : Oo(a, r, s, { window: o, listenToStorageChanges: i })),
        f = M(() => (d.value === 'auto' ? w.value : d.value)),
        l = sn('updateHTMLAttrs', (k, P, L) => {
            const b = typeof k == 'string' ? (o == null ? void 0 : o.document.querySelector(k)) : ot(k)
            if (!b) return
            let v
            if (
                (m &&
                    ((v = o.document.createElement('style')),
                    v.appendChild(
                        document.createTextNode(
                            '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
                        )
                    ),
                    o.document.head.appendChild(v)),
                P === 'class')
            ) {
                const D = L.split(/\s/g)
                Object.values(h)
                    .flatMap((S) => (S || '').split(/\s/g))
                    .filter(Boolean)
                    .forEach((S) => {
                        D.includes(S) ? b.classList.add(S) : b.classList.remove(S)
                    })
            } else b.setAttribute(P, L)
            m && (o.getComputedStyle(v).opacity, document.head.removeChild(v))
        })
    function y(k) {
        var P
        l(t, n, (P = h[k]) != null ? P : k)
    }
    function T(k) {
        e.onChanged ? e.onChanged(k, y) : y(k)
    }
    K(f, T, { flush: 'post', immediate: !0 }), rn(() => T(f.value))
    const E = M({
        get() {
            return u ? d.value : f.value
        },
        set(k) {
            d.value = k
        },
    })
    try {
        return Object.assign(E, { store: d, system: w, state: f })
    } catch {
        return E
    }
}
function ki(e = {}) {
    const { valueDark: t = 'dark', valueLight: n = '', window: r = Z } = e,
        o = Ro({
            ...e,
            onChanged: (i, c) => {
                var u
                e.onChanged ? (u = e.onChanged) == null || u.call(e, i === 'dark', c, i) : c(i)
            },
            modes: { dark: t, light: n },
        }),
        s = M(() => (o.system ? o.system.value : an({ window: r }).value ? 'dark' : 'light'))
    return M({
        get() {
            return o.value === 'dark'
        },
        set(i) {
            const c = i ? 'dark' : 'light'
            s.value === c ? (o.value = 'auto') : (o.value = c)
        },
    })
}
function Si() {
    const e = U([])
    return (
        (e.value.set = (t) => {
            t && e.value.push(t)
        }),
        rr(() => {
            e.value.length = 0
        }),
        e
    )
}
function Lo(e = null, t = {}) {
    var n, r, o
    const { document: s = _o, restoreOnUnmount: a = (h) => h } = t,
        i = (n = s == null ? void 0 : s.title) != null ? n : '',
        c = nn((r = e ?? (s == null ? void 0 : s.title)) != null ? r : null),
        u = e && typeof e == 'function'
    function m(h) {
        if (!('titleTemplate' in t)) return h
        const g = t.titleTemplate || '%s'
        return typeof g == 'function' ? g(h) : I(g).replace(/%s/g, h)
    }
    return (
        K(
            c,
            (h, g) => {
                h !== g && s && (s.title = m(typeof h == 'string' ? h : ''))
            },
            { immediate: !0 }
        ),
        t.observe &&
            !t.titleTemplate &&
            s &&
            !u &&
            wo(
                (o = s.head) == null ? void 0 : o.querySelector('title'),
                () => {
                    s && s.title !== c.value && (c.value = m(s.title))
                },
                { childList: !0 }
            ),
        bo(() => {
            if (a) {
                const h = a(i, c.value || '')
                h != null && s && (s.title = h)
            }
        }),
        c
    )
}
function Ao([e, t, n, r]) {
    const o = (m, h) => 1 - 3 * h + 3 * m,
        s = (m, h) => 3 * h - 6 * m,
        a = (m) => 3 * m,
        i = (m, h, g) => ((o(h, g) * m + s(h, g)) * m + a(h)) * m,
        c = (m, h, g) => 3 * o(h, g) * m * m + 2 * s(h, g) * m + a(h),
        u = (m) => {
            let h = m
            for (let g = 0; g < 4; ++g) {
                const w = c(h, e, n)
                if (w === 0) return h
                const d = i(h, e, n) - m
                h -= d / w
            }
            return h
        }
    return (m) => (e === t && n === r ? m : i(u(m), t, r))
}
function wt(e, t, n) {
    return e + n * (t - e)
}
function Fe(e) {
    return (typeof e == 'number' ? [e] : e) || []
}
function Po(e, t, n, r = {}) {
    var o, s
    const a = I(t),
        i = I(n),
        c = Fe(a),
        u = Fe(i),
        m = (o = I(r.duration)) != null ? o : 1e3,
        h = Date.now(),
        g = Date.now() + m,
        w = typeof r.transition == 'function' ? r.transition : (s = I(r.transition)) != null ? s : po,
        d = typeof w == 'function' ? w : Ao(w)
    return new Promise((f) => {
        e.value = a
        const l = () => {
            var y
            if ((y = r.abort) != null && y.call(r)) {
                f()
                return
            }
            const T = Date.now(),
                E = d((T - h) / m),
                k = Fe(e.value).map((P, L) => wt(c[L], u[L], E))
            Array.isArray(e.value)
                ? (e.value = k.map((P, L) => {
                      var b, v
                      return wt((b = c[L]) != null ? b : 0, (v = u[L]) != null ? v : 0, E)
                  }))
                : typeof e.value == 'number' && (e.value = k[0]),
                T < g ? requestAnimationFrame(l) : ((e.value = i), f())
        }
        l()
    })
}
function Oi(e, t = {}) {
    let n = 0
    const r = () => {
            const s = I(e)
            return typeof s == 'number' ? s : s.map(I)
        },
        o = U(r())
    return (
        K(
            r,
            async (s) => {
                var a, i
                if (I(t.disabled)) return
                const c = ++n
                if ((t.delay && (await mo(I(t.delay))), c !== n)) return
                const u = Array.isArray(s) ? s.map(I) : I(s)
                ;(a = t.onStarted) == null || a.call(t),
                    await Po(o, o.value, u, {
                        ...t,
                        abort: () => {
                            var m
                            return c !== n || ((m = t.abort) == null ? void 0 : m.call(t))
                        },
                    }),
                    (i = t.onFinished) == null || i.call(t)
            },
            { deep: !0 }
        ),
        K(
            () => I(t.disabled),
            (s) => {
                s && (n++, (o.value = r()))
            }
        ),
        Oe(() => {
            n++
        }),
        M(() => (I(t.disabled) ? r() : o.value))
    )
}
function un(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}
const { toString: xo } = Object.prototype,
    { getPrototypeOf: st } = Object,
    Re = ((e) => (t) => {
        const n = xo.call(t)
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)),
    q = (e) => ((e = e.toLowerCase()), (t) => Re(t) === e),
    Le = (e) => (t) => typeof t === e,
    { isArray: se } = Array,
    he = Le('undefined')
function Do(e) {
    return e !== null && !he(e) && e.constructor !== null && !he(e.constructor) && V(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const cn = q('ArrayBuffer')
function Co(e) {
    let t
    return typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && cn(e.buffer)), t
}
const Io = Le('string'),
    V = Le('function'),
    ln = Le('number'),
    Ae = (e) => e !== null && typeof e == 'object',
    No = (e) => e === !0 || e === !1,
    ve = (e) => {
        if (Re(e) !== 'object') return !1
        const t = st(e)
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    Fo = q('Date'),
    Bo = q('File'),
    Mo = q('Blob'),
    zo = q('FileList'),
    Vo = (e) => Ae(e) && V(e.pipe),
    Uo = (e) => {
        let t
        return (
            e &&
            ((typeof FormData == 'function' && e instanceof FormData) ||
                (V(e.append) && ((t = Re(e)) === 'formdata' || (t === 'object' && V(e.toString) && e.toString() === '[object FormData]'))))
        )
    },
    jo = q('URLSearchParams'),
    [qo, $o, Ho, Wo] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(q),
    Jo = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function be(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > 'u') return
    let r, o
    if ((typeof e != 'object' && (e = [e]), se(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            a = s.length
        let i
        for (r = 0; r < a; r++) (i = s[r]), t.call(null, e[i], i, e)
    }
}
function dn(e, t) {
    t = t.toLowerCase()
    const n = Object.keys(e)
    let r = n.length,
        o
    for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
    return null
}
const X = typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global,
    fn = (e) => !he(e) && e !== X
function Je() {
    const { caseless: e } = (fn(this) && this) || {},
        t = {},
        n = (r, o) => {
            const s = (e && dn(t, o)) || o
            ve(t[s]) && ve(r) ? (t[s] = Je(t[s], r)) : ve(r) ? (t[s] = Je({}, r)) : se(r) ? (t[s] = r.slice()) : (t[s] = r)
        }
    for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && be(arguments[r], n)
    return t
}
const Go = (e, t, n, { allOwnKeys: r } = {}) => (
        be(
            t,
            (o, s) => {
                n && V(o) ? (e[s] = un(o, n)) : (e[s] = o)
            },
            { allOwnKeys: r }
        ),
        e
    ),
    Yo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Ko = (e, t, n, r) => {
        ;(e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: t.prototype }),
            n && Object.assign(e.prototype, n)
    },
    Xo = (e, t, n, r) => {
        let o, s, a
        const i = {}
        if (((t = t || {}), e == null)) return t
        do {
            for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; ) (a = o[s]), (!r || r(a, e, t)) && !i[a] && ((t[a] = e[a]), (i[a] = !0))
            e = n !== !1 && st(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype)
        return t
    },
    Qo = (e, t, n) => {
        ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
        const r = e.indexOf(t, n)
        return r !== -1 && r === n
    },
    Zo = (e) => {
        if (!e) return null
        if (se(e)) return e
        let t = e.length
        if (!ln(t)) return null
        const n = new Array(t)
        for (; t-- > 0; ) n[t] = e[t]
        return n
    },
    es = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < 'u' && st(Uint8Array)),
    ts = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e)
        let o
        for (; (o = r.next()) && !o.done; ) {
            const s = o.value
            t.call(e, s[0], s[1])
        }
    },
    ns = (e, t) => {
        let n
        const r = []
        for (; (n = e.exec(t)) !== null; ) r.push(n)
        return r
    },
    rs = q('HTMLFormElement'),
    os = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
            return r.toUpperCase() + o
        }),
    vt = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    ss = q('RegExp'),
    mn = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {}
        be(n, (o, s) => {
            let a
            ;(a = t(o, s, e)) !== !1 && (r[s] = a || o)
        }),
            Object.defineProperties(e, r)
    },
    as = (e) => {
        mn(e, (t, n) => {
            if (V(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
            const r = e[n]
            if (V(r)) {
                if (((t.enumerable = !1), 'writable' in t)) {
                    t.writable = !1
                    return
                }
                t.set ||
                    (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    })
            }
        })
    },
    is = (e, t) => {
        const n = {},
            r = (o) => {
                o.forEach((s) => {
                    n[s] = !0
                })
            }
        return se(e) ? r(e) : r(String(e).split(t)), n
    },
    us = () => {},
    cs = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
    Be = 'abcdefghijklmnopqrstuvwxyz',
    Et = '0123456789',
    pn = { DIGIT: Et, ALPHA: Be, ALPHA_DIGIT: Be + Be.toUpperCase() + Et },
    ls = (e = 16, t = pn.ALPHA_DIGIT) => {
        let n = ''
        const { length: r } = t
        for (; e--; ) n += t[(Math.random() * r) | 0]
        return n
    }
function ds(e) {
    return !!(e && V(e.append) && e[Symbol.toStringTag] === 'FormData' && e[Symbol.iterator])
}
const fs = (e) => {
        const t = new Array(10),
            n = (r, o) => {
                if (Ae(r)) {
                    if (t.indexOf(r) >= 0) return
                    if (!('toJSON' in r)) {
                        t[o] = r
                        const s = se(r) ? [] : {}
                        return (
                            be(r, (a, i) => {
                                const c = n(a, o + 1)
                                !he(c) && (s[i] = c)
                            }),
                            (t[o] = void 0),
                            s
                        )
                    }
                }
                return r
            }
        return n(e, 0)
    },
    ms = q('AsyncFunction'),
    ps = (e) => e && (Ae(e) || V(e)) && V(e.then) && V(e.catch),
    hn = ((e, t) =>
        e
            ? setImmediate
            : t
              ? ((n, r) => (
                    X.addEventListener(
                        'message',
                        ({ source: o, data: s }) => {
                            o === X && s === n && r.length && r.shift()()
                        },
                        !1
                    ),
                    (o) => {
                        r.push(o), X.postMessage(n, '*')
                    }
                ))(`axios@${Math.random()}`, [])
              : (n) => setTimeout(n))(typeof setImmediate == 'function', V(X.postMessage)),
    hs = typeof queueMicrotask < 'u' ? queueMicrotask.bind(X) : (typeof process < 'u' && process.nextTick) || hn,
    p = {
        isArray: se,
        isArrayBuffer: cn,
        isBuffer: Do,
        isFormData: Uo,
        isArrayBufferView: Co,
        isString: Io,
        isNumber: ln,
        isBoolean: No,
        isObject: Ae,
        isPlainObject: ve,
        isReadableStream: qo,
        isRequest: $o,
        isResponse: Ho,
        isHeaders: Wo,
        isUndefined: he,
        isDate: Fo,
        isFile: Bo,
        isBlob: Mo,
        isRegExp: ss,
        isFunction: V,
        isStream: Vo,
        isURLSearchParams: jo,
        isTypedArray: es,
        isFileList: zo,
        forEach: be,
        merge: Je,
        extend: Go,
        trim: Jo,
        stripBOM: Yo,
        inherits: Ko,
        toFlatObject: Xo,
        kindOf: Re,
        kindOfTest: q,
        endsWith: Qo,
        toArray: Zo,
        forEachEntry: ts,
        matchAll: ns,
        isHTMLForm: rs,
        hasOwnProperty: vt,
        hasOwnProp: vt,
        reduceDescriptors: mn,
        freezeMethods: as,
        toObjectSet: is,
        toCamelCase: os,
        noop: us,
        toFiniteNumber: cs,
        findKey: dn,
        global: X,
        isContextDefined: fn,
        ALPHABET: pn,
        generateString: ls,
        isSpecCompliantForm: ds,
        toJSONObject: fs,
        isAsyncFn: ms,
        isThenable: ps,
        setImmediate: hn,
        asap: hs,
    }
function R(e, t, n, r, o) {
    Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = 'AxiosError'),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        o && (this.response = o)
}
p.inherits(R, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: p.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null,
        }
    },
})
const gn = R.prototype,
    bn = {}
;[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
].forEach((e) => {
    bn[e] = { value: e }
})
Object.defineProperties(R, bn)
Object.defineProperty(gn, 'isAxiosError', { value: !0 })
R.from = (e, t, n, r, o, s) => {
    const a = Object.create(gn)
    return (
        p.toFlatObject(
            e,
            a,
            function (c) {
                return c !== Error.prototype
            },
            (i) => i !== 'isAxiosError'
        ),
        R.call(a, e.message, t, n, r, o),
        (a.cause = e),
        (a.name = e.name),
        s && Object.assign(a, s),
        a
    )
}
const gs = null
function Ge(e) {
    return p.isPlainObject(e) || p.isArray(e)
}
function _n(e) {
    return p.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Tt(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (o, s) {
                  return (o = _n(o)), !n && s ? '[' + o + ']' : o
              })
              .join(n ? '.' : '')
        : t
}
function bs(e) {
    return p.isArray(e) && !e.some(Ge)
}
const _s = p.toFlatObject(p, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
})
function Pe(e, t, n) {
    if (!p.isObject(e)) throw new TypeError('target must be an object')
    ;(t = t || new FormData()),
        (n = p.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (f, l) {
            return !p.isUndefined(l[f])
        }))
    const r = n.metaTokens,
        o = n.visitor || m,
        s = n.dots,
        a = n.indexes,
        c = (n.Blob || (typeof Blob < 'u' && Blob)) && p.isSpecCompliantForm(t)
    if (!p.isFunction(o)) throw new TypeError('visitor must be a function')
    function u(d) {
        if (d === null) return ''
        if (p.isDate(d)) return d.toISOString()
        if (!c && p.isBlob(d)) throw new R('Blob is not supported. Use a Buffer instead.')
        return p.isArrayBuffer(d) || p.isTypedArray(d) ? (c && typeof Blob == 'function' ? new Blob([d]) : Buffer.from(d)) : d
    }
    function m(d, f, l) {
        let y = d
        if (d && !l && typeof d == 'object') {
            if (p.endsWith(f, '{}')) (f = r ? f : f.slice(0, -2)), (d = JSON.stringify(d))
            else if ((p.isArray(d) && bs(d)) || ((p.isFileList(d) || p.endsWith(f, '[]')) && (y = p.toArray(d))))
                return (
                    (f = _n(f)),
                    y.forEach(function (E, k) {
                        !(p.isUndefined(E) || E === null) && t.append(a === !0 ? Tt([f], k, s) : a === null ? f : f + '[]', u(E))
                    }),
                    !1
                )
        }
        return Ge(d) ? !0 : (t.append(Tt(l, f, s), u(d)), !1)
    }
    const h = [],
        g = Object.assign(_s, { defaultVisitor: m, convertValue: u, isVisitable: Ge })
    function w(d, f) {
        if (!p.isUndefined(d)) {
            if (h.indexOf(d) !== -1) throw Error('Circular reference detected in ' + f.join('.'))
            h.push(d),
                p.forEach(d, function (y, T) {
                    ;(!(p.isUndefined(y) || y === null) && o.call(t, y, p.isString(T) ? T.trim() : T, f, g)) === !0 && w(y, f ? f.concat(T) : [T])
                }),
                h.pop()
        }
    }
    if (!p.isObject(e)) throw new TypeError('data must be an object')
    return w(e), t
}
function kt(e) {
    const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' }
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r]
    })
}
function at(e, t) {
    ;(this._pairs = []), e && Pe(e, this, t)
}
const yn = at.prototype
yn.append = function (t, n) {
    this._pairs.push([t, n])
}
yn.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, kt)
          }
        : kt
    return this._pairs
        .map(function (o) {
            return n(o[0]) + '=' + n(o[1])
        }, '')
        .join('&')
}
function ys(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}
function wn(e, t, n) {
    if (!t) return e
    const r = (n && n.encode) || ys,
        o = n && n.serialize
    let s
    if ((o ? (s = o(t, n)) : (s = p.isURLSearchParams(t) ? t.toString() : new at(t, n).toString(r)), s)) {
        const a = e.indexOf('#')
        a !== -1 && (e = e.slice(0, a)), (e += (e.indexOf('?') === -1 ? '?' : '&') + s)
    }
    return e
}
class St {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return (
            this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }),
            this.handlers.length - 1
        )
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        p.forEach(this.handlers, function (r) {
            r !== null && t(r)
        })
    }
}
const vn = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    ws = typeof URLSearchParams < 'u' ? URLSearchParams : at,
    vs = typeof FormData < 'u' ? FormData : null,
    Es = typeof Blob < 'u' ? Blob : null,
    Ts = { isBrowser: !0, classes: { URLSearchParams: ws, FormData: vs, Blob: Es }, protocols: ['http', 'https', 'file', 'blob', 'url', 'data'] },
    it = typeof window < 'u' && typeof document < 'u',
    ks = ((e) => it && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(typeof navigator < 'u' && navigator.product),
    Ss = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function',
    Os = (it && window.location.href) || 'http://localhost',
    Rs = Object.freeze(
        Object.defineProperty(
            { __proto__: null, hasBrowserEnv: it, hasStandardBrowserEnv: ks, hasStandardBrowserWebWorkerEnv: Ss, origin: Os },
            Symbol.toStringTag,
            { value: 'Module' }
        )
    ),
    j = { ...Rs, ...Ts }
function Ls(e, t) {
    return Pe(
        e,
        new j.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, o, s) {
                    return j.isNode && p.isBuffer(n) ? (this.append(r, n.toString('base64')), !1) : s.defaultVisitor.apply(this, arguments)
                },
            },
            t
        )
    )
}
function As(e) {
    return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function Ps(e) {
    const t = {},
        n = Object.keys(e)
    let r
    const o = n.length
    let s
    for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s])
    return t
}
function En(e) {
    function t(n, r, o, s) {
        let a = n[s++]
        if (a === '__proto__') return !0
        const i = Number.isFinite(+a),
            c = s >= n.length
        return (
            (a = !a && p.isArray(o) ? o.length : a),
            c
                ? (p.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !i)
                : ((!o[a] || !p.isObject(o[a])) && (o[a] = []), t(n, r, o[a], s) && p.isArray(o[a]) && (o[a] = Ps(o[a])), !i)
        )
    }
    if (p.isFormData(e) && p.isFunction(e.entries)) {
        const n = {}
        return (
            p.forEachEntry(e, (r, o) => {
                t(As(r), o, n, 0)
            }),
            n
        )
    }
    return null
}
function xs(e, t, n) {
    if (p.isString(e))
        try {
            return (t || JSON.parse)(e), p.trim(e)
        } catch (r) {
            if (r.name !== 'SyntaxError') throw r
        }
    return (n || JSON.stringify)(e)
}
const _e = {
    transitional: vn,
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || '',
                o = r.indexOf('application/json') > -1,
                s = p.isObject(t)
            if ((s && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))) return o ? JSON.stringify(En(t)) : t
            if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t) || p.isReadableStream(t)) return t
            if (p.isArrayBufferView(t)) return t.buffer
            if (p.isURLSearchParams(t)) return n.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), t.toString()
            let i
            if (s) {
                if (r.indexOf('application/x-www-form-urlencoded') > -1) return Ls(t, this.formSerializer).toString()
                if ((i = p.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
                    const c = this.env && this.env.FormData
                    return Pe(i ? { 'files[]': t } : t, c && new c(), this.formSerializer)
                }
            }
            return s || o ? (n.setContentType('application/json', !1), xs(t)) : t
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || _e.transitional,
                r = n && n.forcedJSONParsing,
                o = this.responseType === 'json'
            if (p.isResponse(t) || p.isReadableStream(t)) return t
            if (t && p.isString(t) && ((r && !this.responseType) || o)) {
                const a = !(n && n.silentJSONParsing) && o
                try {
                    return JSON.parse(t)
                } catch (i) {
                    if (a) throw i.name === 'SyntaxError' ? R.from(i, R.ERR_BAD_RESPONSE, this, null, this.response) : i
                }
            }
            return t
        },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: j.classes.FormData, Blob: j.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
}
p.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
    _e.headers[e] = {}
})
const Ds = p.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
    ]),
    Cs = (e) => {
        const t = {}
        let n, r, o
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (a) {
                        ;(o = a.indexOf(':')),
                            (n = a.substring(0, o).trim().toLowerCase()),
                            (r = a.substring(o + 1).trim()),
                            !(!n || (t[n] && Ds[n])) &&
                                (n === 'set-cookie' ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ', ' + r : r))
                    }),
            t
        )
    },
    Ot = Symbol('internals')
function ce(e) {
    return e && String(e).trim().toLowerCase()
}
function Ee(e) {
    return e === !1 || e == null ? e : p.isArray(e) ? e.map(Ee) : String(e)
}
function Is(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
    let r
    for (; (r = n.exec(e)); ) t[r[1]] = r[2]
    return t
}
const Ns = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Me(e, t, n, r, o) {
    if (p.isFunction(r)) return r.call(this, t, n)
    if ((o && (t = n), !!p.isString(t))) {
        if (p.isString(r)) return t.indexOf(r) !== -1
        if (p.isRegExp(r)) return r.test(t)
    }
}
function Fs(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Bs(e, t) {
    const n = p.toCamelCase(' ' + t)
    ;['get', 'set', 'has'].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (o, s, a) {
                return this[r].call(this, t, o, s, a)
            },
            configurable: !0,
        })
    })
}
let z = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this
        function s(i, c, u) {
            const m = ce(c)
            if (!m) throw new Error('header name must be a non-empty string')
            const h = p.findKey(o, m)
            ;(!h || o[h] === void 0 || u === !0 || (u === void 0 && o[h] !== !1)) && (o[h || c] = Ee(i))
        }
        const a = (i, c) => p.forEach(i, (u, m) => s(u, m, c))
        if (p.isPlainObject(t) || t instanceof this.constructor) a(t, n)
        else if (p.isString(t) && (t = t.trim()) && !Ns(t)) a(Cs(t), n)
        else if (p.isHeaders(t)) for (const [i, c] of t.entries()) s(c, i, r)
        else t != null && s(n, t, r)
        return this
    }
    get(t, n) {
        if (((t = ce(t)), t)) {
            const r = p.findKey(this, t)
            if (r) {
                const o = this[r]
                if (!n) return o
                if (n === !0) return Is(o)
                if (p.isFunction(n)) return n.call(this, o, r)
                if (p.isRegExp(n)) return n.exec(o)
                throw new TypeError('parser must be boolean|regexp|function')
            }
        }
    }
    has(t, n) {
        if (((t = ce(t)), t)) {
            const r = p.findKey(this, t)
            return !!(r && this[r] !== void 0 && (!n || Me(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this
        let o = !1
        function s(a) {
            if (((a = ce(a)), a)) {
                const i = p.findKey(r, a)
                i && (!n || Me(r, r[i], i, n)) && (delete r[i], (o = !0))
            }
        }
        return p.isArray(t) ? t.forEach(s) : s(t), o
    }
    clear(t) {
        const n = Object.keys(this)
        let r = n.length,
            o = !1
        for (; r--; ) {
            const s = n[r]
            ;(!t || Me(this, this[s], s, t, !0)) && (delete this[s], (o = !0))
        }
        return o
    }
    normalize(t) {
        const n = this,
            r = {}
        return (
            p.forEach(this, (o, s) => {
                const a = p.findKey(r, s)
                if (a) {
                    ;(n[a] = Ee(o)), delete n[s]
                    return
                }
                const i = t ? Fs(s) : String(s).trim()
                i !== s && delete n[s], (n[i] = Ee(o)), (r[i] = !0)
            }),
            this
        )
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null)
        return (
            p.forEach(this, (r, o) => {
                r != null && r !== !1 && (n[o] = t && p.isArray(r) ? r.join(', ') : r)
            }),
            n
        )
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders'
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t)
        return n.forEach((o) => r.set(o)), r
    }
    static accessor(t) {
        const r = (this[Ot] = this[Ot] = { accessors: {} }).accessors,
            o = this.prototype
        function s(a) {
            const i = ce(a)
            r[i] || (Bs(o, a), (r[i] = !0))
        }
        return p.isArray(t) ? t.forEach(s) : s(t), this
    }
}
z.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization'])
p.reduceDescriptors(z.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1)
    return {
        get: () => e,
        set(r) {
            this[n] = r
        },
    }
})
p.freezeMethods(z)
function ze(e, t) {
    const n = this || _e,
        r = t || n,
        o = z.from(r.headers)
    let s = r.data
    return (
        p.forEach(e, function (i) {
            s = i.call(n, s, o.normalize(), t ? t.status : void 0)
        }),
        o.normalize(),
        s
    )
}
function Tn(e) {
    return !!(e && e.__CANCEL__)
}
function ae(e, t, n) {
    R.call(this, e ?? 'canceled', R.ERR_CANCELED, t, n), (this.name = 'CanceledError')
}
p.inherits(ae, R, { __CANCEL__: !0 })
function kn(e, t, n) {
    const r = n.config.validateStatus
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new R(
                  'Request failed with status code ' + n.status,
                  [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                  n.config,
                  n.request,
                  n
              )
          )
}
function Ms(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
    return (t && t[1]) || ''
}
function zs(e, t) {
    e = e || 10
    const n = new Array(e),
        r = new Array(e)
    let o = 0,
        s = 0,
        a
    return (
        (t = t !== void 0 ? t : 1e3),
        function (c) {
            const u = Date.now(),
                m = r[s]
            a || (a = u), (n[o] = c), (r[o] = u)
            let h = s,
                g = 0
            for (; h !== o; ) (g += n[h++]), (h = h % e)
            if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - a < t)) return
            const w = m && u - m
            return w ? Math.round((g * 1e3) / w) : void 0
        }
    )
}
function Vs(e, t) {
    let n = 0,
        r = 1e3 / t,
        o,
        s
    const a = (u, m = Date.now()) => {
        ;(n = m), (o = null), s && (clearTimeout(s), (s = null)), e.apply(null, u)
    }
    return [
        (...u) => {
            const m = Date.now(),
                h = m - n
            h >= r
                ? a(u, m)
                : ((o = u),
                  s ||
                      (s = setTimeout(() => {
                          ;(s = null), a(o)
                      }, r - h)))
        },
        () => o && a(o),
    ]
}
const Te = (e, t, n = 3) => {
        let r = 0
        const o = zs(50, 250)
        return Vs((s) => {
            const a = s.loaded,
                i = s.lengthComputable ? s.total : void 0,
                c = a - r,
                u = o(c),
                m = a <= i
            r = a
            const h = {
                loaded: a,
                total: i,
                progress: i ? a / i : void 0,
                bytes: c,
                rate: u || void 0,
                estimated: u && i && m ? (i - a) / u : void 0,
                event: s,
                lengthComputable: i != null,
                [t ? 'download' : 'upload']: !0,
            }
            e(h)
        }, n)
    },
    Rt = (e, t) => {
        const n = e != null
        return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]]
    },
    Lt =
        (e) =>
        (...t) =>
            p.asap(() => e(...t)),
    Us = j.hasStandardBrowserEnv
        ? (function () {
              const t = /(msie|trident)/i.test(navigator.userAgent),
                  n = document.createElement('a')
              let r
              function o(s) {
                  let a = s
                  return (
                      t && (n.setAttribute('href', a), (a = n.href)),
                      n.setAttribute('href', a),
                      {
                          href: n.href,
                          protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                          host: n.host,
                          search: n.search ? n.search.replace(/^\?/, '') : '',
                          hash: n.hash ? n.hash.replace(/^#/, '') : '',
                          hostname: n.hostname,
                          port: n.port,
                          pathname: n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
                      }
                  )
              }
              return (
                  (r = o(window.location.href)),
                  function (a) {
                      const i = p.isString(a) ? o(a) : a
                      return i.protocol === r.protocol && i.host === r.host
                  }
              )
          })()
        : (function () {
              return function () {
                  return !0
              }
          })(),
    js = j.hasStandardBrowserEnv
        ? {
              write(e, t, n, r, o, s) {
                  const a = [e + '=' + encodeURIComponent(t)]
                  p.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
                      p.isString(r) && a.push('path=' + r),
                      p.isString(o) && a.push('domain=' + o),
                      s === !0 && a.push('secure'),
                      (document.cookie = a.join('; '))
              },
              read(e) {
                  const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'))
                  return t ? decodeURIComponent(t[3]) : null
              },
              remove(e) {
                  this.write(e, '', Date.now() - 864e5)
              },
          }
        : {
              write() {},
              read() {
                  return null
              },
              remove() {},
          }
function qs(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function $s(e, t) {
    return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Sn(e, t) {
    return e && !qs(t) ? $s(e, t) : t
}
const At = (e) => (e instanceof z ? { ...e } : e)
function ee(e, t) {
    t = t || {}
    const n = {}
    function r(u, m, h) {
        return p.isPlainObject(u) && p.isPlainObject(m)
            ? p.merge.call({ caseless: h }, u, m)
            : p.isPlainObject(m)
              ? p.merge({}, m)
              : p.isArray(m)
                ? m.slice()
                : m
    }
    function o(u, m, h) {
        if (p.isUndefined(m)) {
            if (!p.isUndefined(u)) return r(void 0, u, h)
        } else return r(u, m, h)
    }
    function s(u, m) {
        if (!p.isUndefined(m)) return r(void 0, m)
    }
    function a(u, m) {
        if (p.isUndefined(m)) {
            if (!p.isUndefined(u)) return r(void 0, u)
        } else return r(void 0, m)
    }
    function i(u, m, h) {
        if (h in t) return r(u, m)
        if (h in e) return r(void 0, u)
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        withXSRFToken: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: i,
        headers: (u, m) => o(At(u), At(m), !0),
    }
    return (
        p.forEach(Object.keys(Object.assign({}, e, t)), function (m) {
            const h = c[m] || o,
                g = h(e[m], t[m], m)
            ;(p.isUndefined(g) && h !== i) || (n[m] = g)
        }),
        n
    )
}
const On = (e) => {
        const t = ee({}, e)
        let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: i } = t
        ;(t.headers = a = z.from(a)),
            (t.url = wn(Sn(t.baseURL, t.url), e.params, e.paramsSerializer)),
            i && a.set('Authorization', 'Basic ' + btoa((i.username || '') + ':' + (i.password ? unescape(encodeURIComponent(i.password)) : '')))
        let c
        if (p.isFormData(n)) {
            if (j.hasStandardBrowserEnv || j.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0)
            else if ((c = a.getContentType()) !== !1) {
                const [u, ...m] = c
                    ? c
                          .split(';')
                          .map((h) => h.trim())
                          .filter(Boolean)
                    : []
                a.setContentType([u || 'multipart/form-data', ...m].join('; '))
            }
        }
        if (j.hasStandardBrowserEnv && (r && p.isFunction(r) && (r = r(t)), r || (r !== !1 && Us(t.url)))) {
            const u = o && s && js.read(s)
            u && a.set(o, u)
        }
        return t
    },
    Hs = typeof XMLHttpRequest < 'u',
    Ws =
        Hs &&
        function (e) {
            return new Promise(function (n, r) {
                const o = On(e)
                let s = o.data
                const a = z.from(o.headers).normalize()
                let { responseType: i, onUploadProgress: c, onDownloadProgress: u } = o,
                    m,
                    h,
                    g,
                    w,
                    d
                function f() {
                    w && w(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(m), o.signal && o.signal.removeEventListener('abort', m)
                }
                let l = new XMLHttpRequest()
                l.open(o.method.toUpperCase(), o.url, !0), (l.timeout = o.timeout)
                function y() {
                    if (!l) return
                    const E = z.from('getAllResponseHeaders' in l && l.getAllResponseHeaders()),
                        P = {
                            data: !i || i === 'text' || i === 'json' ? l.responseText : l.response,
                            status: l.status,
                            statusText: l.statusText,
                            headers: E,
                            config: e,
                            request: l,
                        }
                    kn(
                        function (b) {
                            n(b), f()
                        },
                        function (b) {
                            r(b), f()
                        },
                        P
                    ),
                        (l = null)
                }
                'onloadend' in l
                    ? (l.onloadend = y)
                    : (l.onreadystatechange = function () {
                          !l || l.readyState !== 4 || (l.status === 0 && !(l.responseURL && l.responseURL.indexOf('file:') === 0)) || setTimeout(y)
                      }),
                    (l.onabort = function () {
                        l && (r(new R('Request aborted', R.ECONNABORTED, e, l)), (l = null))
                    }),
                    (l.onerror = function () {
                        r(new R('Network Error', R.ERR_NETWORK, e, l)), (l = null)
                    }),
                    (l.ontimeout = function () {
                        let k = o.timeout ? 'timeout of ' + o.timeout + 'ms exceeded' : 'timeout exceeded'
                        const P = o.transitional || vn
                        o.timeoutErrorMessage && (k = o.timeoutErrorMessage),
                            r(new R(k, P.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED, e, l)),
                            (l = null)
                    }),
                    s === void 0 && a.setContentType(null),
                    'setRequestHeader' in l &&
                        p.forEach(a.toJSON(), function (k, P) {
                            l.setRequestHeader(P, k)
                        }),
                    p.isUndefined(o.withCredentials) || (l.withCredentials = !!o.withCredentials),
                    i && i !== 'json' && (l.responseType = o.responseType),
                    u && (([g, d] = Te(u, !0)), l.addEventListener('progress', g)),
                    c && l.upload && (([h, w] = Te(c)), l.upload.addEventListener('progress', h), l.upload.addEventListener('loadend', w)),
                    (o.cancelToken || o.signal) &&
                        ((m = (E) => {
                            l && (r(!E || E.type ? new ae(null, e, l) : E), l.abort(), (l = null))
                        }),
                        o.cancelToken && o.cancelToken.subscribe(m),
                        o.signal && (o.signal.aborted ? m() : o.signal.addEventListener('abort', m)))
                const T = Ms(o.url)
                if (T && j.protocols.indexOf(T) === -1) {
                    r(new R('Unsupported protocol ' + T + ':', R.ERR_BAD_REQUEST, e))
                    return
                }
                l.send(s || null)
            })
        },
    Js = (e, t) => {
        let n = new AbortController(),
            r
        const o = function (c) {
            if (!r) {
                ;(r = !0), a()
                const u = c instanceof Error ? c : this.reason
                n.abort(u instanceof R ? u : new ae(u instanceof Error ? u.message : u))
            }
        }
        let s =
            t &&
            setTimeout(() => {
                o(new R(`timeout ${t} of ms exceeded`, R.ETIMEDOUT))
            }, t)
        const a = () => {
            e &&
                (s && clearTimeout(s),
                (s = null),
                e.forEach((c) => {
                    c && (c.removeEventListener ? c.removeEventListener('abort', o) : c.unsubscribe(o))
                }),
                (e = null))
        }
        e.forEach((c) => c && c.addEventListener && c.addEventListener('abort', o))
        const { signal: i } = n
        return (
            (i.unsubscribe = a),
            [
                i,
                () => {
                    s && clearTimeout(s), (s = null)
                },
            ]
        )
    },
    Gs = function* (e, t) {
        let n = e.byteLength
        if (n < t) {
            yield e
            return
        }
        let r = 0,
            o
        for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o)
    },
    Ys = async function* (e, t, n) {
        for await (const r of e) yield* Gs(ArrayBuffer.isView(r) ? r : await n(String(r)), t)
    },
    Pt = (e, t, n, r, o) => {
        const s = Ys(e, t, o)
        let a = 0,
            i,
            c = (u) => {
                i || ((i = !0), r && r(u))
            }
        return new ReadableStream(
            {
                async pull(u) {
                    try {
                        const { done: m, value: h } = await s.next()
                        if (m) {
                            c(), u.close()
                            return
                        }
                        let g = h.byteLength
                        if (n) {
                            let w = (a += g)
                            n(w)
                        }
                        u.enqueue(new Uint8Array(h))
                    } catch (m) {
                        throw (c(m), m)
                    }
                },
                cancel(u) {
                    return c(u), s.return()
                },
            },
            { highWaterMark: 2 }
        )
    },
    xe = typeof fetch == 'function' && typeof Request == 'function' && typeof Response == 'function',
    Rn = xe && typeof ReadableStream == 'function',
    Ye =
        xe &&
        (typeof TextEncoder == 'function'
            ? (
                  (e) => (t) =>
                      e.encode(t)
              )(new TextEncoder())
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    Ln = (e, ...t) => {
        try {
            return !!e(...t)
        } catch {
            return !1
        }
    },
    Ks =
        Rn &&
        Ln(() => {
            let e = !1
            const t = new Request(j.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                    return (e = !0), 'half'
                },
            }).headers.has('Content-Type')
            return e && !t
        }),
    xt = 64 * 1024,
    Ke = Rn && Ln(() => p.isReadableStream(new Response('').body)),
    ke = { stream: Ke && ((e) => e.body) }
xe &&
    ((e) => {
        ;['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
            !ke[t] &&
                (ke[t] = p.isFunction(e[t])
                    ? (n) => n[t]()
                    : (n, r) => {
                          throw new R(`Response type '${t}' is not supported`, R.ERR_NOT_SUPPORT, r)
                      })
        })
    })(new Response())
const Xs = async (e) => {
        if (e == null) return 0
        if (p.isBlob(e)) return e.size
        if (p.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength
        if (p.isArrayBufferView(e) || p.isArrayBuffer(e)) return e.byteLength
        if ((p.isURLSearchParams(e) && (e = e + ''), p.isString(e))) return (await Ye(e)).byteLength
    },
    Qs = async (e, t) => {
        const n = p.toFiniteNumber(e.getContentLength())
        return n ?? Xs(t)
    },
    Zs =
        xe &&
        (async (e) => {
            let {
                url: t,
                method: n,
                data: r,
                signal: o,
                cancelToken: s,
                timeout: a,
                onDownloadProgress: i,
                onUploadProgress: c,
                responseType: u,
                headers: m,
                withCredentials: h = 'same-origin',
                fetchOptions: g,
            } = On(e)
            u = u ? (u + '').toLowerCase() : 'text'
            let [w, d] = o || s || a ? Js([o, s], a) : [],
                f,
                l
            const y = () => {
                !f &&
                    setTimeout(() => {
                        w && w.unsubscribe()
                    }),
                    (f = !0)
            }
            let T
            try {
                if (c && Ks && n !== 'get' && n !== 'head' && (T = await Qs(m, r)) !== 0) {
                    let L = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
                        b
                    if ((p.isFormData(r) && (b = L.headers.get('content-type')) && m.setContentType(b), L.body)) {
                        const [v, D] = Rt(T, Te(Lt(c)))
                        r = Pt(L.body, xt, v, D, Ye)
                    }
                }
                p.isString(h) || (h = h ? 'include' : 'omit'),
                    (l = new Request(t, {
                        ...g,
                        signal: w,
                        method: n.toUpperCase(),
                        headers: m.normalize().toJSON(),
                        body: r,
                        duplex: 'half',
                        credentials: h,
                    }))
                let E = await fetch(l)
                const k = Ke && (u === 'stream' || u === 'response')
                if (Ke && (i || k)) {
                    const L = {}
                    ;['status', 'statusText', 'headers'].forEach((S) => {
                        L[S] = E[S]
                    })
                    const b = p.toFiniteNumber(E.headers.get('content-length')),
                        [v, D] = (i && Rt(b, Te(Lt(i), !0))) || []
                    E = new Response(
                        Pt(
                            E.body,
                            xt,
                            v,
                            () => {
                                D && D(), k && y()
                            },
                            Ye
                        ),
                        L
                    )
                }
                u = u || 'text'
                let P = await ke[p.findKey(ke, u) || 'text'](E, e)
                return (
                    !k && y(),
                    d && d(),
                    await new Promise((L, b) => {
                        kn(L, b, { data: P, headers: z.from(E.headers), status: E.status, statusText: E.statusText, config: e, request: l })
                    })
                )
            } catch (E) {
                throw (
                    (y(),
                    E && E.name === 'TypeError' && /fetch/i.test(E.message)
                        ? Object.assign(new R('Network Error', R.ERR_NETWORK, e, l), { cause: E.cause || E })
                        : R.from(E, E && E.code, e, l))
                )
            }
        }),
    Xe = { http: gs, xhr: Ws, fetch: Zs }
p.forEach(Xe, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: t })
        } catch {}
        Object.defineProperty(e, 'adapterName', { value: t })
    }
})
const Dt = (e) => `- ${e}`,
    ea = (e) => p.isFunction(e) || e === null || e === !1,
    An = {
        getAdapter: (e) => {
            e = p.isArray(e) ? e : [e]
            const { length: t } = e
            let n, r
            const o = {}
            for (let s = 0; s < t; s++) {
                n = e[s]
                let a
                if (((r = n), !ea(n) && ((r = Xe[(a = String(n)).toLowerCase()]), r === void 0))) throw new R(`Unknown adapter '${a}'`)
                if (r) break
                o[a || '#' + s] = r
            }
            if (!r) {
                const s = Object.entries(o).map(
                    ([i, c]) => `adapter ${i} ` + (c === !1 ? 'is not supported by the environment' : 'is not available in the build')
                )
                let a = t
                    ? s.length > 1
                        ? `since :
` +
                          s.map(Dt).join(`
`)
                        : ' ' + Dt(s[0])
                    : 'as no adapter specified'
                throw new R('There is no suitable adapter to dispatch the request ' + a, 'ERR_NOT_SUPPORT')
            }
            return r
        },
        adapters: Xe,
    }
function Ve(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new ae(null, e)
}
function Ct(e) {
    return (
        Ve(e),
        (e.headers = z.from(e.headers)),
        (e.data = ze.call(e, e.transformRequest)),
        ['post', 'put', 'patch'].indexOf(e.method) !== -1 && e.headers.setContentType('application/x-www-form-urlencoded', !1),
        An.getAdapter(e.adapter || _e.adapter)(e).then(
            function (r) {
                return Ve(e), (r.data = ze.call(e, e.transformResponse, r)), (r.headers = z.from(r.headers)), r
            },
            function (r) {
                return (
                    Tn(r) ||
                        (Ve(e),
                        r &&
                            r.response &&
                            ((r.response.data = ze.call(e, e.transformResponse, r.response)), (r.response.headers = z.from(r.response.headers)))),
                    Promise.reject(r)
                )
            }
        )
    )
}
const Pn = '1.7.4',
    ut = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
    ut[e] = function (r) {
        return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
})
const It = {}
ut.transitional = function (t, n, r) {
    function o(s, a) {
        return '[Axios v' + Pn + "] Transitional option '" + s + "'" + a + (r ? '. ' + r : '')
    }
    return (s, a, i) => {
        if (t === !1) throw new R(o(a, ' has been removed' + (n ? ' in ' + n : '')), R.ERR_DEPRECATED)
        return (
            n && !It[a] && ((It[a] = !0), console.warn(o(a, ' has been deprecated since v' + n + ' and will be removed in the near future'))),
            t ? t(s, a, i) : !0
        )
    }
}
function ta(e, t, n) {
    if (typeof e != 'object') throw new R('options must be an object', R.ERR_BAD_OPTION_VALUE)
    const r = Object.keys(e)
    let o = r.length
    for (; o-- > 0; ) {
        const s = r[o],
            a = t[s]
        if (a) {
            const i = e[s],
                c = i === void 0 || a(i, s, e)
            if (c !== !0) throw new R('option ' + s + ' must be ' + c, R.ERR_BAD_OPTION_VALUE)
            continue
        }
        if (n !== !0) throw new R('Unknown option ' + s, R.ERR_BAD_OPTION)
    }
}
const Qe = { assertOptions: ta, validators: ut },
    G = Qe.validators
let Q = class {
    constructor(t) {
        ;(this.defaults = t), (this.interceptors = { request: new St(), response: new St() })
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let o
                Error.captureStackTrace ? Error.captureStackTrace((o = {})) : (o = new Error())
                const s = o.stack ? o.stack.replace(/^.+\n/, '') : ''
                try {
                    r.stack
                        ? s &&
                          !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, '')) &&
                          (r.stack +=
                              `
` + s)
                        : (r.stack = s)
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = ee(this.defaults, n))
        const { transitional: r, paramsSerializer: o, headers: s } = n
        r !== void 0 &&
            Qe.assertOptions(
                r,
                {
                    silentJSONParsing: G.transitional(G.boolean),
                    forcedJSONParsing: G.transitional(G.boolean),
                    clarifyTimeoutError: G.transitional(G.boolean),
                },
                !1
            ),
            o != null &&
                (p.isFunction(o) ? (n.paramsSerializer = { serialize: o }) : Qe.assertOptions(o, { encode: G.function, serialize: G.function }, !0)),
            (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
        let a = s && p.merge(s.common, s[n.method])
        s &&
            p.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (d) => {
                delete s[d]
            }),
            (n.headers = z.concat(a, s))
        const i = []
        let c = !0
        this.interceptors.request.forEach(function (f) {
            ;(typeof f.runWhen == 'function' && f.runWhen(n) === !1) || ((c = c && f.synchronous), i.unshift(f.fulfilled, f.rejected))
        })
        const u = []
        this.interceptors.response.forEach(function (f) {
            u.push(f.fulfilled, f.rejected)
        })
        let m,
            h = 0,
            g
        if (!c) {
            const d = [Ct.bind(this), void 0]
            for (d.unshift.apply(d, i), d.push.apply(d, u), g = d.length, m = Promise.resolve(n); h < g; ) m = m.then(d[h++], d[h++])
            return m
        }
        g = i.length
        let w = n
        for (h = 0; h < g; ) {
            const d = i[h++],
                f = i[h++]
            try {
                w = d(w)
            } catch (l) {
                f.call(this, l)
                break
            }
        }
        try {
            m = Ct.call(this, w)
        } catch (d) {
            return Promise.reject(d)
        }
        for (h = 0, g = u.length; h < g; ) m = m.then(u[h++], u[h++])
        return m
    }
    getUri(t) {
        t = ee(this.defaults, t)
        const n = Sn(t.baseURL, t.url)
        return wn(n, t.params, t.paramsSerializer)
    }
}
p.forEach(['delete', 'get', 'head', 'options'], function (t) {
    Q.prototype[t] = function (n, r) {
        return this.request(ee(r || {}, { method: t, url: n, data: (r || {}).data }))
    }
})
p.forEach(['post', 'put', 'patch'], function (t) {
    function n(r) {
        return function (s, a, i) {
            return this.request(ee(i || {}, { method: t, headers: r ? { 'Content-Type': 'multipart/form-data' } : {}, url: s, data: a }))
        }
    }
    ;(Q.prototype[t] = n()), (Q.prototype[t + 'Form'] = n(!0))
})
let na = class xn {
    constructor(t) {
        if (typeof t != 'function') throw new TypeError('executor must be a function.')
        let n
        this.promise = new Promise(function (s) {
            n = s
        })
        const r = this
        this.promise.then((o) => {
            if (!r._listeners) return
            let s = r._listeners.length
            for (; s-- > 0; ) r._listeners[s](o)
            r._listeners = null
        }),
            (this.promise.then = (o) => {
                let s
                const a = new Promise((i) => {
                    r.subscribe(i), (s = i)
                }).then(o)
                return (
                    (a.cancel = function () {
                        r.unsubscribe(s)
                    }),
                    a
                )
            }),
            t(function (s, a, i) {
                r.reason || ((r.reason = new ae(s, a, i)), n(r.reason))
            })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason)
            return
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t])
    }
    unsubscribe(t) {
        if (!this._listeners) return
        const n = this._listeners.indexOf(t)
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t
        return {
            token: new xn(function (o) {
                t = o
            }),
            cancel: t,
        }
    }
}
function ra(e) {
    return function (n) {
        return e.apply(null, n)
    }
}
function oa(e) {
    return p.isObject(e) && e.isAxiosError === !0
}
const Ze = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
}
Object.entries(Ze).forEach(([e, t]) => {
    Ze[t] = e
})
function Dn(e) {
    const t = new Q(e),
        n = un(Q.prototype.request, t)
    return (
        p.extend(n, Q.prototype, t, { allOwnKeys: !0 }),
        p.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (o) {
            return Dn(ee(e, o))
        }),
        n
    )
}
const C = Dn(_e)
C.Axios = Q
C.CanceledError = ae
C.CancelToken = na
C.isCancel = Tn
C.VERSION = Pn
C.toFormData = Pe
C.AxiosError = R
C.Cancel = C.CanceledError
C.all = function (t) {
    return Promise.all(t)
}
C.spread = ra
C.isAxiosError = oa
C.mergeConfig = ee
C.AxiosHeaders = z
C.formToJSON = (e) => En(p.isHTMLForm(e) ? new FormData(e) : e)
C.getAdapter = An.getAdapter
C.HttpStatusCode = Ze
C.default = C
const {
        Axios: Ai,
        AxiosError: Pi,
        CanceledError: xi,
        isCancel: Di,
        CancelToken: Ci,
        VERSION: Ii,
        all: Ni,
        Cancel: Fi,
        isAxiosError: Bi,
        spread: Mi,
        toFormData: zi,
        AxiosHeaders: Vi,
        HttpStatusCode: Ui,
        formToJSON: ji,
        getAdapter: qi,
        mergeConfig: $i,
    } = C,
    De = te('adminInfo', {
        state: () => ({ id: 0, username: '', nickname: '', avatar: '', last_login_time: '', token: '', refresh_token: '', super: !1 }),
        actions: {
            dataFill(e) {
                this.$state = { ...this.$state, ...e }
            },
            removeToken() {
                ;(this.token = ''), (this.refresh_token = '')
            },
            setToken(e, t) {
                const n = t == 'auth' ? 'token' : 'refresh_token'
                this[n] = e
            },
            getToken(e = 'auth') {
                return e === 'auth' ? this.token : this.refresh_token
            },
            setSuper(e) {
                this.super = e
            },
        },
        persist: { key: Wr },
    }),
    Cn = '/api/user/',
    W = '/api/account/'
function Hi(e, t = {}) {
    return x({ url: Cn + 'checkIn', data: t, method: e })
}
function Wi() {
    return x({ url: W + 'overview', method: 'get' })
}
function Ji(e) {
    return x({ url: W + 'profile', method: 'POST', data: e }, { showSuccessMessage: !0 })
}
function Gi() {
    return x({ url: W + 'profile', method: 'get' })
}
function Yi(e) {
    return x({ url: W + 'verification', method: 'post', data: e })
}
function Ki(e) {
    return x({ url: W + 'changeBind', method: 'post', data: e }, { showSuccessMessage: !0 })
}
function Xi(e) {
    return x({ url: W + 'changePassword', method: 'POST', data: e }, { showSuccessMessage: !0 })
}
function Qi(e, t) {
    return x({ url: W + 'balance', method: 'GET', params: { page: e, limit: t } })
}
function Zi(e, t) {
    return x({ url: W + 'integral', method: 'GET', params: { page: e, limit: t } })
}
function sa() {
    const e = ct()
    return x({ url: Cn + 'logout', method: 'POST', data: { refreshToken: e.getToken('refresh') } })
}
function eu(e) {
    return x({ url: W + 'retrievePassword', method: 'POST', data: e }, { showSuccessMessage: !0 })
}
const aa = {
        set(e, t) {
            window.localStorage.setItem(e, JSON.stringify(t))
        },
        get(e) {
            const t = window.localStorage.getItem(e)
            return JSON.parse(t)
        },
        remove(e) {
            window.localStorage.removeItem(e)
        },
        clear() {
            window.localStorage.clear()
        },
    },
    tu = {
        set(e, t) {
            window.sessionStorage.setItem(e, JSON.stringify(t))
        },
        get(e) {
            const t = window.sessionStorage.getItem(e)
            return JSON.parse(t)
        },
        remove(e) {
            window.sessionStorage.removeItem(e)
        },
        clear() {
            window.sessionStorage.clear()
        },
    },
    ct = te('userInfo', {
        state: () => ({
            id: 0,
            username: '',
            nickname: '',
            email: '',
            mobile: '',
            avatar: '',
            gender: 0,
            birthday: '',
            money: 0,
            score: 0,
            last_login_time: '',
            last_login_ip: '',
            join_time: '',
            motto: '',
            token: '',
            refresh_token: '',
        }),
        actions: {
            removeToken() {
                ;(this.token = ''), (this.refresh_token = '')
            },
            dataFill(e) {
                this.$state = { ...this.$state, ...e }
            },
            setToken(e, t) {
                const n = t == 'auth' ? 'token' : 'refresh_token'
                this[n] = e
            },
            getToken(e = 'auth') {
                return e === 'auth' ? this.token : this.refresh_token
            },
            getGenderIcon() {
                let e = { name: 'fa fa-transgender-alt', color: 'var(--el-text-color-secondary)' }
                switch (this.gender) {
                    case 1:
                        e = { name: 'fa fa-mars-stroke-v', color: 'var(--el-color-primary)' }
                        break
                    case 2:
                        e = { name: 'fa fa-mars-stroke', color: 'var(--el-color-danger)' }
                        break
                }
                return e
            },
            logout() {
                sa().then((e) => {
                    e.code == 1 && (aa.remove(bt), F.go(0))
                })
            },
            isLogin() {
                return this.id && this.token
            },
        },
        persist: { key: bt },
    }),
    et = []
for (let e = 0; e <= 15; e++) et[e] = e.toString(16)
function lt() {
    let e = ''
    for (let t = 1; t <= 36; t++)
        t === 9 || t === 14 || t === 19 || t === 24
            ? (e += '-')
            : t === 15
              ? (e += 4)
              : t === 20
                ? (e += et[(Math.random() * 4) | 8])
                : (e += et[(Math.random() * 16) | 0])
    return e
}
function nu(e = '') {
    const t = Date.now(),
        n = Math.floor(Math.random() * 1e9)
    return window.unique || (window.unique = 0), window.unique++, e + '_' + n + window.unique + String(t)
}
const ia = '/admin/ajax/upload',
    ua = B + '/ajax/buildSuffixSvg',
    ca = '/admin/ajax/area',
    la = '/admin/ajax/region',
    da = '/admin/ajax/getTablePk',
    ru = '/admin/ajax/getTableList',
    fa = '/admin/ajax/getTableFieldList',
    ou = '/admin/ajax/getDatabaseConnectionList',
    ma = B + '/ajax/terminal',
    pa = '/admin/ajax/changeTerminalConfig',
    ha = '/admin/ajax/clearCache',
    ga = '/api/common/clickCaptcha',
    ba = '/api/common/checkClickCaptcha',
    _a = '/api/common/refreshToken',
    ya = '/api/ajax/upload',
    wa = '/api/ajax/buildSuffixSvg',
    va = '/api/ajax/area',
    Ea = '/api/Sms/send',
    Ta = '/api/Ems/send'
function su(e, t = {}, n = !1, r = {}) {
    let o = ''
    const s = e.get('file'),
        a = Se()
    return (
        !s.name || typeof s.size > 'u'
            ? (o = O.global.t('utils.The data of the uploaded file is incomplete!'))
            : Na(s.name, s.type)
              ? s.size > a.upload.maxSize && (o = O.global.t('utils.The size of the uploaded file exceeds the allowed range!'))
              : (o = O.global.t('utils.The type of uploaded file is not allowed!')),
        o
            ? new Promise((i, c) => {
                  pe({ type: 'error', message: o, zIndex: 9999 }), c(o)
              })
            : x({ url: $() ? ia : ya, method: 'POST', data: e, params: t, timeout: 0, ...r })
    )
}
function au(e, t = '') {
    const n = De()
    return re() + ($() ? ua : wa) + '?batoken=' + n.getToken() + '&suffix=' + e + (t ? '&background=' + t : '') + '&server=1'
}
function iu(e) {
    const t = {}
    return e[0] && (t.province = e[0]), e[1] && (t.city = e[1]), (t.uuid = lt()), x({ url: $() ? ca : va, method: 'GET', params: t })
}
function uu(e) {
    const t = {},
        n = Number(e[0]),
        r = Number(e[1])
    return (
        !Number.isNaN(n) && n > 0 && (t.province = n),
        !Number.isNaN(r) && r > 0 && (t.city = r),
        (t.uuid = lt()),
        x({ url: la, method: 'GET', params: t })
    )
}
function cu(e, t, n = {}) {
    return x({ url: Ea, method: 'POST', data: { mobile: e, template_code: t, ...n } }, { showSuccessMessage: !0 })
}
function lu(e, t, n = {}) {
    return x({ url: Ta, method: 'POST', data: { email: e, event: t, ...n } }, { showSuccessMessage: !0 })
}
function du(e) {
    return x({ url: ha, method: 'POST', data: { type: e } }, { showSuccessMessage: !0 })
}
function ka(e, t, n) {
    const r = De()
    return re() + ma + '?command=' + e + '&uuid=' + t + '&extend=' + n + '&batoken=' + r.getToken() + '&server=1'
}
function fu(e) {
    return x({ url: pa, method: 'POST', data: e })
}
function mu(e, t, n = {}) {
    return x({ url: e, method: 'get', params: Object.assign(n, { select: !0, quickSearch: t }) })
}
function pu(e) {
    return x({ url: ga, method: 'get', params: { id: e } })
}
function hu(e, t, n) {
    return x({ url: ba, method: 'post', data: { id: e, info: t, unset: n } }, { showCodeMessage: !1 })
}
function gu(e, t = '') {
    return x({ url: da, method: 'get', params: { table: e, connection: t } })
}
function bu(e, t = !0, n = '') {
    return x({ url: fa, method: 'get', params: { table: e, clean: t ? 1 : 0, connection: n } })
}
function Sa() {
    const e = De(),
        t = ct()
    return x({ url: _a, method: 'POST', data: { refreshToken: $() ? e.getToken('refresh') : t.getToken('refresh') } })
}
class _u {
    constructor(t) {
        ie(this, 'controllerUrl')
        ie(this, 'actionUrl')
        ;(this.controllerUrl = t),
            (this.actionUrl = new Map([
                ['index', t + 'index'],
                ['add', t + 'add'],
                ['edit', t + 'edit'],
                ['del', t + 'del'],
                ['sortable', t + 'sortable'],
            ]))
    }
    index(t = {}) {
        return x({ url: this.actionUrl.get('index'), method: 'get', params: t })
    }
    edit(t) {
        return x({ url: this.actionUrl.get('edit'), method: 'get', params: t })
    }
    del(t) {
        return x({ url: this.actionUrl.get('del'), method: 'DELETE', params: { ids: t } }, { showSuccessMessage: !0 })
    }
    postData(t, n) {
        return x({ url: this.actionUrl.has(t) ? this.actionUrl.get(t) : this.controllerUrl + t, method: 'post', data: n }, { showSuccessMessage: !0 })
    }
    sortableApi(t, n) {
        return x({ url: this.actionUrl.get('sortable'), method: 'post', data: { id: t, targetId: n } })
    }
}
window.requests = []
window.tokenRefreshing = !1
const fe = new Map(),
    Y = { target: null, count: 0 },
    re = () => 'https://www.liaojian.xin/'
function x(e, t = {}, n = {}) {
    const r = oe(),
        o = De(),
        s = ct()
    console.log('createAxios:', re())
    const a = C.create({ baseURL: re(), timeout: 1e3 * 10, headers: { 'think-lang': r.lang.defaultLang, server: !0 }, responseType: 'json' })
    return (
        console.log('axiosConfig.url before: ', e.url),
        console.log('adminBaseRoute path: ', de.path),
        de.path != '/admin' &&
            $() &&
            /^\/admin\//.test(e.url) &&
            ((e.url = e.url.replace(/^\/admin\//, de.path + '.php/')), console.log('axiosConfig.url after: ', e.url)),
        (t = Object.assign(
            {
                CancelDuplicateRequest: !0,
                loading: !1,
                reductDataFormat: !0,
                showErrorMessage: !0,
                showCodeMessage: !0,
                showSuccessMessage: !1,
                anotherToken: '',
            },
            t
        )),
        a.interceptors.request.use(
            (i) => {
                if ((Ue(i), t.CancelDuplicateRequest && Ra(i), t.loading && (Y.count++, Y.count === 1 && (Y.target = ar.service(n))), i.headers)) {
                    const c = o.getToken()
                    c && (i.headers.batoken = c)
                    const u = t.anotherToken || s.getToken()
                    u && (i.headers['ba-user-token'] = u)
                }
                return i
            },
            (i) => Promise.reject(i)
        ),
        a.interceptors.response.use(
            (i) => {
                if ((Ue(i.config), t.loading && Nt(t), i.config.responseType == 'json'))
                    if (i.data && i.data.code !== 1) {
                        if (i.data.code == 409)
                            return window.tokenRefreshing
                                ? new Promise((c) => {
                                      window.requests.push((u, m) => {
                                          m == 'admin-refresh' ? (i.headers.batoken = `${u}`) : (i.headers['ba-user-token'] = `${u}`), c(a(i.config))
                                      })
                                  })
                                : ((window.tokenRefreshing = !0),
                                  Sa()
                                      .then(
                                          (c) => (
                                              c.data.type == 'admin-refresh'
                                                  ? (o.setToken(c.data.token, 'auth'),
                                                    (i.headers.batoken = `${c.data.token}`),
                                                    window.requests.forEach((u) => u(c.data.token, 'admin-refresh')))
                                                  : c.data.type == 'user-refresh' &&
                                                    (s.setToken(c.data.token, 'auth'),
                                                    (i.headers['ba-user-token'] = `${c.data.token}`),
                                                    window.requests.forEach((u) => u(c.data.token, 'user-refresh'))),
                                              (window.requests = []),
                                              a(i.config)
                                          )
                                      )
                                      .catch((c) =>
                                          $()
                                              ? (o.removeToken(),
                                                F.currentRoute.value.name != 'adminLogin'
                                                    ? (F.push({ name: 'adminLogin' }), Promise.reject(c))
                                                    : ((i.headers.batoken = ''),
                                                      window.requests.forEach((u) => u('', 'admin-refresh')),
                                                      (window.requests = []),
                                                      a(i.config)))
                                              : (s.removeToken(),
                                                F.currentRoute.value.name != 'userLogin'
                                                    ? (F.push({ name: 'userLogin' }), Promise.reject(c))
                                                    : ((i.headers['ba-user-token'] = ''),
                                                      window.requests.forEach((u) => u('', 'user-refresh')),
                                                      (window.requests = []),
                                                      a(i.config)))
                                      )
                                      .finally(() => {
                                          window.tokenRefreshing = !1
                                      }))
                        if (
                            (t.showCodeMessage && pe({ type: 'error', message: i.data.msg, zIndex: 9999 }),
                            i.data.code == 302 && F.push({ path: i.data.data.routePath ?? '', name: i.data.data.routeName ?? '' }),
                            i.data.code == 303)
                        ) {
                            const c = $()
                            let u = c ? de.path : ne
                            i.data.data.type == 'need login' && (c ? o.removeToken() : s.removeToken(), (u += '/login')), F.push({ path: u })
                        }
                        return Promise.reject(i.data)
                    } else
                        t.showSuccessMessage &&
                            i.data &&
                            i.data.code == 1 &&
                            pe({ message: i.data.msg ? i.data.msg : O.global.t('axios.Operation successful'), type: 'success', zIndex: 9999 })
                return t.reductDataFormat ? i.data : i
            },
            (i) => (i.config && Ue(i.config), t.loading && Nt(t), t.showErrorMessage && Oa(i), Promise.reject(i))
        ),
        a(e)
    )
}
function Oa(e) {
    if (C.isCancel(e)) return console.error(O.global.t('axios.Automatic cancellation due to duplicate request:') + e.message)
    let t = ''
    if (e && e.response)
        switch (e.response.status) {
            case 302:
                t = O.global.t('axios.Interface redirected!')
                break
            case 400:
                t = O.global.t('axios.Incorrect parameter!')
                break
            case 401:
                t = O.global.t('axios.You do not have permission to operate!')
                break
            case 403:
                t = O.global.t('axios.You do not have permission to operate!')
                break
            case 404:
                t = O.global.t('axios.Error requesting address:') + e.response.config.url
                break
            case 408:
                t = O.global.t('axios.Request timed out!')
                break
            case 409:
                t = O.global.t('axios.The same data already exists in the system!')
                break
            case 500:
                t = O.global.t('axios.Server internal error!')
                break
            case 501:
                t = O.global.t('axios.Service not implemented!')
                break
            case 502:
                t = O.global.t('axios.Gateway error!')
                break
            case 503:
                t = O.global.t('axios.Service unavailable!')
                break
            case 504:
                t = O.global.t('axios.The service is temporarily unavailable Please try again later!')
                break
            case 505:
                t = O.global.t('axios.HTTP version is not supported!')
                break
            default:
                t = O.global.t('axios.Abnormal problem, please contact the website administrator!')
                break
        }
    e.message.includes('timeout') && (t = O.global.t('axios.Network request timeout!')),
        e.message.includes('Network') &&
            (t = window.navigator.onLine ? O.global.t('axios.Server exception!') : O.global.t('axios.You are disconnected!')),
        pe({ type: 'error', message: t, zIndex: 9999 })
}
function Nt(e) {
    e.loading && Y.count > 0 && Y.count--, Y.count === 0 && (Y.target.close(), (Y.target = null))
}
function Ra(e) {
    const t = In(e)
    e.cancelToken =
        e.cancelToken ||
        new C.CancelToken((n) => {
            fe.has(t) || fe.set(t, n)
        })
}
function Ue(e) {
    const t = In(e)
    fe.has(t) && (fe.get(t)(t), fe.delete(t))
}
function In(e) {
    let { data: t } = e
    const { url: n, method: r, params: o, headers: s } = e
    return (
        typeof t == 'string' && (t = JSON.parse(t)),
        [n, r, s && s.batoken ? s.batoken : '', s && s['ba-user-token'] ? s['ba-user-token'] : '', JSON.stringify(o), JSON.stringify(t)].join('&')
    )
}
function La(e) {
    e.component('Icon', oo)
    const t = qt
    for (const n in t) e.component(`el-icon-${t[n].name}`, t[n])
}
function Aa(e) {
    const t = document.createElement('link')
    ;(t.rel = 'stylesheet'), (t.href = e), (t.crossOrigin = 'anonymous'), document.getElementsByTagName('head')[0].appendChild(t)
}
function Pa(e) {
    const t = document.createElement('script')
    ;(t.src = e), document.body.appendChild(t)
}
function xa() {
    H(() => {
        if (typeof F.currentRoute.value.meta.title != 'string') return
        const e = O.global.te(F.currentRoute.value.meta.title) ? O.global.t(F.currentRoute.value.meta.title) : F.currentRoute.value.meta.title,
            t = Lo(),
            n = Se()
        t.value = `${e}${n.siteName ? ' - ' + n.siteName : ''}`
    })
}
function Nn(e) {
    return /^(https?|ftp|mailto|tel):/.test(e)
}
const yu =
        (e, t) =>
        (...n) => {
            window.lazy && clearTimeout(window.lazy),
                (window.lazy = window.setTimeout(() => {
                    e(...n)
                }, t))
        },
    wu = (e, t, n) => {
        for (const r in e) if (e[r][t] == n) return r
        return !1
    },
    vu = (e) => {
        e && e.resetFields && e.resetFields()
    },
    Da = (e) => {
        if (typeof e == 'object') {
            const t = []
            for (const n in e) t.push({ label: n + ': ' + e[n], children: Da(e[n]) })
            return t
        } else return []
    },
    $ = (e = '') => {
        console.log('isAdminApp', e)
        const t = new RegExp(`^${B}`)
        return e ? t.test(e) : !!t.test(Fn())
    },
    Eu = (e) => {
        const t = e.split('/')
        return t[t.length - 1]
    }
function Ca(e) {
    var n
    const t = $() ? Yt() : ao()
    if (typeof e == 'string') {
        const r = Fn()
        if (t.state.authNode.has(r)) {
            const o = r + (r == '/' ? '' : '/') + e
            if (t.state.authNode.get(r).some((s) => s == o)) return !0
        }
    } else {
        if (!e.name || !t.state.authNode.has(e.name)) return !1
        if (!e.subNodeName || ((n = t.state.authNode.get(e.name)) != null && n.includes(e.subNodeName))) return !0
    }
    return !1
}
const Ia = (e, t = '') => {
        const n = Se()
        if ((t || (t = n.cdnUrl ? n.cdnUrl : re()), !e)) return t
        const r = new RegExp(/^http(s)?:\/\//)
        return !t || r.test(e) ? e : t + e
    },
    Fn = () => {
        let e = F.currentRoute.value.path
        return (
            console.log('currentRouterPath', e),
            e == '/' && (e = ir(window.location.hash, '#')),
            e.indexOf('?') !== -1 && (e = e.replace(/\?.*/, '')),
            e
        )
    },
    Na = (e, t) => {
        if (!e) return !1
        const n = Se(),
            r = pt(n.upload.allowedSuffixes) ? n.upload.allowedSuffixes : n.upload.allowedSuffixes.toLowerCase().split(','),
            o = pt(n.upload.allowedMimeTypes) ? n.upload.allowedMimeTypes : n.upload.allowedMimeTypes.toLowerCase().split(','),
            s = e.substring(e.lastIndexOf('.') + 1).toLowerCase()
        return !!(r.includes(s) || r.includes('.' + s) || (t && o.includes(t)))
    },
    Tu = (e, t = '') => {
        typeof e == 'string' && (e = e == '' ? [] : e.split(','))
        for (const n in e) e[n] = Ia(e[n], t)
        return e
    },
    Fa = (e = null, t = 'yyyy-mm-dd hh:MM:ss') => {
        if (e == 'none') return O.global.t('None')
        e || (e = Number(new Date())), e.toString().length === 10 && (e = +e * 1e3)
        const n = new Date(e)
        let r
        const o = {
            'y+': n.getFullYear().toString(),
            'm+': (n.getMonth() + 1).toString(),
            'd+': n.getDate().toString(),
            'h+': n.getHours().toString(),
            'M+': n.getMinutes().toString(),
            's+': n.getSeconds().toString(),
        }
        for (const s in o) (r = new RegExp('(' + s + ')').exec(t)), r && (t = t.replace(r[1], r[1].length == 1 ? o[s] : Ba(o[s], r[1].length, '0')))
        return t
    },
    Ba = (e, t, n = ' ') => {
        if (e.length >= t) return e
        const r = t - e.length
        let o = Math.ceil(r / n.length)
        for (; (o >>= 1); ) (n += n), o === 1 && (n += n)
        return n.slice(0, r) + e
    },
    ku = () => {
        const t = new Date().getHours()
        let n = ''
        return (
            t < 5
                ? (n = O.global.t('utils.Late at night, pay attention to your body!'))
                : t < 9
                  ? (n = O.global.t('utils.good morning!') + O.global.t('utils.welcome back'))
                  : t < 12
                    ? (n = O.global.t('utils.Good morning!') + O.global.t('utils.welcome back'))
                    : t < 14
                      ? (n = O.global.t('utils.Good noon!') + O.global.t('utils.welcome back'))
                      : t < 18
                        ? (n = O.global.t('utils.good afternoon') + O.global.t('utils.welcome back'))
                        : t < 24
                          ? (n = O.global.t('utils.Good evening') + O.global.t('utils.welcome back'))
                          : (n = O.global.t('utils.Hello!') + O.global.t('utils.welcome back')),
            n
        )
    },
    Ft = ['//at.alicdn.com/t/font_3135462_5axiswmtpj.css'],
    Bt = []
function Ma() {
    Ft.length > 0 &&
        Ft.map((e) => {
            Aa(e)
        }),
        Bt.length > 0 &&
            Bt.map((e) => {
                Pa(e)
            })
}
function za(e) {
    const t = [],
        n = document.styleSheets
    for (const r in n) n[r].href && n[r].href.indexOf(e) > -1 && t.push(n[r])
    return t
}
function Va(e) {
    var r
    const t = [],
        n = document.styleSheets
    {
        const o = re()
        for (const s in n) n[s].href && ((r = n[s].href) == null ? void 0 : r.indexOf(o)) === 0 && t.push(n[s])
        return t
    }
}
function Su() {
    return new Promise((e, t) => {
        H(() => {
            let n = []
            const r = document.getElementById('local-icon')
            r != null && r.dataset.iconName && (n = (r == null ? void 0 : r.dataset.iconName).split(',')), n.length > 0 ? e(n) : t('No Local Icons')
        })
    })
}
function Ou() {
    return new Promise((e, t) => {
        H(() => {
            const n = [],
                r = Va()
            for (const o in r) {
                const s = r[o].cssRules
                for (const a in s)
                    if (!(!s[a].selectorText || s[a].selectorText.indexOf('.fa-') !== 0) && /^\.fa-(.*)::before$/g.test(s[a].selectorText))
                        if (s[a].selectorText.indexOf(', ') > -1) {
                            const i = s[a].selectorText.split(', ')
                            n.push(`${i[0].substring(1, i[0].length).replace(/\:\:before/gi, '')}`)
                        } else n.push(`${s[a].selectorText.substring(1, s[a].selectorText.length).replace(/\:\:before/gi, '')}`)
            }
            n.length > 0 ? e(n) : t('No AwesomeIcon style sheet')
        })
    })
}
function Ru() {
    return new Promise((e, t) => {
        H(() => {
            const n = [],
                r = za('at.alicdn.com')
            for (const o in r) {
                const s = r[o].cssRules
                for (const a in s)
                    s[a].selectorText &&
                        /^\.icon-(.*)::before$/g.test(s[a].selectorText) &&
                        n.push(`${s[a].selectorText.substring(1, s[a].selectorText.length).replace(/\:\:before/gi, '')}`)
            }
            n.length > 0 ? e(n) : t('No Iconfont style sheet')
        })
    })
}
function Lu() {
    return new Promise((e, t) => {
        H(() => {
            const n = [],
                r = qt
            for (const o in r) n.push(`el-icon-${r[o].name}`)
            n.length > 0 ? e(n) : t('No ElementPlus Icons')
        })
    })
}
var A = ((e) => (
    (e[(e.Waiting = 0)] = 'Waiting'),
    (e[(e.Connecting = 1)] = 'Connecting'),
    (e[(e.Executing = 2)] = 'Executing'),
    (e[(e.Success = 3)] = 'Success'),
    (e[(e.Failed = 4)] = 'Failed'),
    (e[(e.Unknown = 5)] = 'Unknown'),
    e
))(A || {})
const ge = U(!0),
    Ua = (e) => {
        ge.value && (ge.value = !1)
    },
    ja = (e) => {
        ge.value || (ge.value = !0)
    },
    Au = (e) => {
        ge.value = !0
    },
    qa = te(
        'terminal',
        () => {
            const e = me({
                show: !1,
                showDot: !1,
                taskList: [],
                packageManager: 'pnpm',
                showConfig: !1,
                automaticCleanupTask: '1',
                phpDevelopmentServer: !1,
                npmRegistry: 'unknown',
                composerRegistry: 'unknown',
            })
            function t() {
                for (const b in e.taskList)
                    (e.taskList[b].status == A.Connecting || e.taskList[b].status == A.Executing) && (e.taskList[b].status = A.Unknown)
            }
            function n(b = !e.show) {
                ;(e.show = b), b && r(!1)
            }
            function r(b = !e.showDot) {
                e.showDot = b
            }
            function o(b = !e.showConfig) {
                n(!b), (e.showConfig = b)
            }
            function s(b, v) {
                e[v == 'npm' ? 'npmRegistry' : 'composerRegistry'] = b
            }
            function a(b) {
                e.packageManager = b
            }
            function i(b) {
                e.phpDevelopmentServer = b
            }
            function c(b) {
                e.automaticCleanupTask = b
            }
            function u(b, v) {
                ;(e.taskList[b].status = v), (v == A.Failed || v == A.Unknown) && e.taskList[b].blockOnFailure && h(b, !0)
            }
            function m(b) {
                if ((ja(), typeof e.taskList[b].callback != 'function')) return
                const v = e.taskList[b].status
                v == A.Failed || v == A.Unknown ? e.taskList[b].callback(A.Failed) : v == A.Success && e.taskList[b].callback(A.Success)
            }
            function h(b, v = !e.taskList[b].showMessage) {
                e.taskList[b].showMessage = v
            }
            function g(b, v) {
                e.show || r(!0),
                    (e.taskList[b].message = e.taskList[b].message.concat(v)),
                    H(() => {
                        L(e.taskList[b].uuid)
                    })
            }
            function w(b, v = !0, D = '', S = () => {}) {
                if (
                    (e.show || r(!0),
                    (e.taskList = e.taskList.concat({
                        uuid: lt(),
                        createTime: Fa(),
                        status: A.Waiting,
                        command: b,
                        message: [],
                        showMessage: !1,
                        blockOnFailure: v,
                        extend: D,
                        callback: S,
                    })),
                    parseInt(e.automaticCleanupTask) === 1 && E(),
                    e.show === !1)
                ) {
                    for (const N in e.taskList)
                        if (e.taskList[N].status == A.Failed || e.taskList[N].status == A.Unknown) {
                            pe({
                                type: 'error',
                                message: O.global.t('terminal.Newly added tasks will never start because they are blocked by failed tasks'),
                                zIndex: 9999,
                            })
                            break
                        }
                }
                l()
            }
            function d(b, v = !0, D = '', S = () => {}) {
                w(b + '.' + e.packageManager, v, D, S)
            }
            function f(b) {
                e.taskList[b].status != A.Connecting && e.taskList[b].status != A.Executing && e.taskList.splice(b, 1), l()
            }
            function l() {
                let b = null
                for (const v in e.taskList) {
                    if (e.taskList[v].status == A.Waiting) {
                        b = parseInt(v)
                        break
                    }
                    if (e.taskList[v].status == A.Connecting || e.taskList[v].status == A.Executing) break
                    if (e.taskList[v].status != A.Success && (e.taskList[v].status == A.Failed || e.taskList[v].status == A.Unknown)) {
                        if (e.taskList[v].blockOnFailure) break
                        continue
                    }
                }
                b !== null && (u(b, A.Connecting), y(b))
            }
            function y(b) {
                Ua(),
                    (window.eventSource = new EventSource(ka(e.taskList[b].command, e.taskList[b].uuid, e.taskList[b].extend))),
                    (window.eventSource.onmessage = function (v) {
                        const D = JSON.parse(v.data)
                        if (!D || !D.data) return
                        const S = k(D.uuid)
                        S !== !1 &&
                            (D.data == 'command-exec-error'
                                ? (u(S, A.Failed), window.eventSource.close(), m(S), l())
                                : D.data == 'command-exec-completed'
                                  ? (window.eventSource.close(), e.taskList[S].status != A.Success && u(S, A.Failed), m(S), l())
                                  : D.data == 'command-link-success'
                                    ? u(S, A.Executing)
                                    : D.data == 'command-exec-success'
                                      ? u(S, A.Success)
                                      : g(S, D.data))
                    }),
                    (window.eventSource.onerror = function () {
                        window.eventSource.close()
                        const v = P(b)
                        v !== !1 && (u(v, A.Failed), m(v))
                    })
            }
            function T(b) {
                ;(e.taskList[b].message = []), u(b, A.Waiting), l()
            }
            function E() {
                e.taskList = e.taskList.filter((b) => b.status != A.Success)
            }
            function k(b) {
                for (const v in e.taskList) if (e.taskList[v].uuid == b) return parseInt(v)
                return !1
            }
            function P(b) {
                if (e.taskList[b]) return b
                {
                    let v = -1
                    for (const D in e.taskList) (e.taskList[D].status == A.Connecting || e.taskList[D].status == A.Executing) && (v = parseInt(D))
                    return v === -1 ? !1 : v
                }
            }
            function L(b) {
                const v = document.querySelector('.exec-message-' + b)
                v && v.scrollHeight && (v.scrollTop = v.scrollHeight)
            }
            return {
                state: e,
                init: t,
                toggle: n,
                toggleDot: r,
                setTaskStatus: u,
                setTaskShowMessage: h,
                addTaskMessage: g,
                addTask: w,
                addTaskPM: d,
                delTask: f,
                startTask: l,
                retryTask: T,
                clearSuccessTask: E,
                toggleConfigDialog: o,
                changeRegistry: s,
                changePackageManager: a,
                changePHPDevelopmentServer: i,
                changeAutomaticCleanupTask: c,
            }
        },
        {
            persist: {
                key: Yr,
                pick: ['state.showDot', 'state.taskList', 'state.automaticCleanupTask', 'state.npmRegistry', 'state.composerRegistry'],
            },
        }
    ),
    $a = tt({
        __name: 'App',
        setup(e, { expose: t }) {
            t()
            const n = oe(),
                r = ur(),
                o = qa(),
                { getLocaleMessage: s } = Vt.useI18n(),
                a = s(n.lang.defaultLang)
            nt(() => {
                Ma(), o.init()
            }),
                K(
                    () => r.path,
                    () => {
                        xa()
                    }
                )
            const i = { config: n, route: r, terminal: o, getLocaleMessage: s, lang: a }
            return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
        },
    })
function Ha(e, t, n, r, o, s) {
    const a = $e('router-view'),
        i = $e('el-config-provider')
    return qe(), cr(i, { locale: r.lang }, { default: lr(() => [le(a)]), _: 1 }, 8, ['locale'])
}
const Wa = rt($a, [
    ['render', Ha],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/App.vue'],
])
function Ja(e) {
    return {
        all: (e = e || new Map()),
        on: function (t, n) {
            var r = e.get(t)
            r ? r.push(n) : e.set(t, [n])
        },
        off: function (t, n) {
            var r = e.get(t)
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
        },
        emit: function (t, n) {
            var r = e.get(t)
            r &&
                r.slice().map(function (o) {
                    o(n)
                }),
                (r = e.get('*')) &&
                    r.slice().map(function (o) {
                        o(t, n)
                    })
        },
    }
}
const Ga = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    Ya =
        /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Ka = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/
function Xa(e, t) {
    if (e === '__proto__' || (e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)) {
        Qa(e)
        return
    }
    return t
}
function Qa(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function Za(e, t = {}) {
    if (typeof e != 'string') return e
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf('\\') === -1) return e.slice(1, -1)
    const n = e.trim()
    if (n.length <= 9)
        switch (n.toLowerCase()) {
            case 'true':
                return !0
            case 'false':
                return !1
            case 'undefined':
                return
            case 'null':
                return null
            case 'nan':
                return Number.NaN
            case 'infinity':
                return Number.POSITIVE_INFINITY
            case '-infinity':
                return Number.NEGATIVE_INFINITY
        }
    if (!Ka.test(e)) {
        if (t.strict) throw new SyntaxError('[destr] Invalid JSON')
        return e
    }
    try {
        if (Ga.test(e) || Ya.test(e)) {
            if (t.strict) throw new Error('[destr] Possible prototype pollution')
            return JSON.parse(e, Xa)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict) throw r
        return e
    }
}
function ei(e, t) {
    if (e == null) return
    let n = e
    for (let r = 0; r < t.length; r++) {
        if (n == null || n[t[r]] == null) return
        n = n[t[r]]
    }
    return n
}
function dt(e, t, n) {
    if (n.length === 0) return t
    const r = n[0]
    return (
        n.length > 1 &&
            (t = dt(
                typeof e != 'object' || e === null || !Object.prototype.hasOwnProperty.call(e, r) ? (Number.isInteger(Number(n[1])) ? [] : {}) : e[r],
                t,
                Array.prototype.slice.call(n, 1)
            )),
        Number.isInteger(Number(r)) && Array.isArray(e) ? e.slice()[r] : Object.assign({}, e, { [r]: t })
    )
}
function Bn(e, t) {
    if (e == null || t.length === 0) return e
    if (t.length === 1) {
        if (e == null) return e
        if (Number.isInteger(t[0]) && Array.isArray(e)) return Array.prototype.slice.call(e, 0).splice(t[0], 1)
        const n = {}
        for (const r in e) n[r] = e[r]
        return delete n[t[0]], n
    }
    if (e[t[0]] == null) {
        if (Number.isInteger(t[0]) && Array.isArray(e)) return Array.prototype.concat.call([], e)
        const n = {}
        for (const r in e) n[r] = e[r]
        return n
    }
    return dt(e, Bn(e[t[0]], Array.prototype.slice.call(t, 1)), [t[0]])
}
function Mn(e, t) {
    return t
        .map((n) => n.split('.'))
        .map((n) => [n, ei(e, n)])
        .filter((n) => n[1] !== void 0)
        .reduce((n, r) => dt(n, r[1], r[0]), {})
}
function zn(e, t) {
    return t.map((n) => n.split('.')).reduce((n, r) => Bn(n, r), e)
}
function Mt(e, { storage: t, serializer: n, key: r, debug: o, pick: s, omit: a, beforeHydrate: i, afterHydrate: c }, u, m = !0) {
    try {
        m && (i == null || i(u))
        const h = t.getItem(r)
        if (h) {
            const g = n.deserialize(h),
                w = s ? Mn(g, s) : g,
                d = a ? zn(w, a) : w
            e.$patch(d)
        }
        m && (c == null || c(u))
    } catch (h) {
        o && console.error('[pinia-plugin-persistedstate]', h)
    }
}
function zt(e, { storage: t, serializer: n, key: r, debug: o, pick: s, omit: a }) {
    try {
        const i = s ? Mn(e, s) : e,
            c = a ? zn(i, a) : i,
            u = n.serialize(c)
        t.setItem(r, u)
    } catch (i) {
        o && console.error('[pinia-plugin-persistedstate]', i)
    }
}
function ti(e, t) {
    const {
        pinia: n,
        store: r,
        options: { persist: o },
    } = e
    if (!o) return
    if (!(r.$id in n.state.value)) {
        const i = n._s.get(r.$id.replace('__hot:', ''))
        i && Promise.resolve().then(() => i.$persist())
        return
    }
    const a = (Array.isArray(o) ? o : o === !0 ? [{}] : [o]).map(t)
    ;(r.$hydrate = ({ runHooks: i = !0 } = {}) => {
        a.forEach((c) => {
            Mt(r, c, e, i)
        })
    }),
        (r.$persist = () => {
            a.forEach((i) => {
                zt(r.$state, i)
            })
        }),
        a.forEach((i) => {
            Mt(r, i, e), r.$subscribe((c, u) => zt(u, i), { detached: !0 })
        })
}
function ni(e = {}) {
    return function (t) {
        ti(t, (n) => ({
            key: (e.key ? e.key : (r) => r)(n.key ?? t.store.$id),
            debug: n.debug ?? e.debug ?? !1,
            serializer: n.serializer ?? e.serializer ?? { serialize: (r) => JSON.stringify(r), deserialize: (r) => Za(r) },
            storage: n.storage ?? e.storage ?? window.localStorage,
            beforeHydrate: n.beforeHydrate,
            afterHydrate: n.afterHydrate,
            pick: n.pick,
            omit: n.omit,
        }))
    }
}
var ri = ni()
const Vn = dr()
Vn.use(ri)
class oi {
    constructor(t) {
        ie(this, 'el')
        ie(this, 'scroll', (t) => {
            this.el.clientWidth >= this.el.scrollWidth ||
                (this.el.scrollLeft += t.deltaY ? t.deltaY : t.detail && t.detail !== 0 ? t.detail : -t.wheelDelta)
        })
        ;(this.el = t), this.handleWheelEvent()
    }
    handleWheelEvent() {
        let t = ''
        'onmousewheel' in this.el
            ? (t = 'mousewheel')
            : 'onwheel' in this.el
              ? (t = 'wheel')
              : 'attachEvent' in window
                ? (t = 'onmousewheel')
                : (t = 'DOMMouseScroll'),
            this.el.addEventListener(t, this.scroll, { passive: !0 })
    }
}
function si(e) {
    ai(e), li(e), ci(e), ui(e), ii(e)
}
function ai(e) {
    e.directive('auth', {
        mounted(t, n) {
            if (!n.value) return !1
            Ca(n.value) || t.parentNode.removeChild(t)
        },
    })
}
function ii(e) {
    e.directive('tableLateralDrag', {
        created(t) {
            new oi(t.querySelector('.el-table__body-wrapper .el-scrollbar .el-scrollbar__wrap'))
        },
    })
}
function ui(e) {
    e.directive('blur', {
        mounted(t) {
            We(t, 'focus', () => t.blur())
        },
    })
}
function ci(e) {
    e.directive('zoom', {
        mounted(t, n) {
            if (!n.value) return !1
            const r = fr(n.value) ? [n.value, '.el-dialog__body', !1, !0] : n.value
            ;(r[1] = r[1] ? r[1] : '.el-dialog__body'),
                (r[2] = typeof r[2] > 'u' ? !1 : r[2]),
                (r[3] = typeof r[3] > 'u' ? !0 : r[3]),
                H(() => {
                    const o = document.querySelector(r[1]),
                        s = document.querySelector(r[0]),
                        a = document.createElement('div')
                    ;(a.className = 'zoom-handle'),
                        (a.onmouseenter = () => {
                            a.onmousedown = (i) => {
                                const c = i.clientX,
                                    u = i.clientY,
                                    m = o.offsetWidth,
                                    h = o.offsetHeight,
                                    g = s.offsetWidth,
                                    w = s.offsetHeight
                                ;(document.onmousemove = (d) => {
                                    d.preventDefault()
                                    const f = m + (d.clientX - c) * 2,
                                        l = h + (d.clientY - u)
                                    if (((o.style.width = `${f}px`), (o.style.height = `${l}px`), r[2])) {
                                        const y = w + (d.clientY - u)
                                        s.style.height = `${y}px`
                                    }
                                    if (r[3]) {
                                        const y = g + (d.clientX - c) * 2
                                        s.style.width = `${y}px`
                                    }
                                }),
                                    (document.onmouseup = function () {
                                        ;(document.onmousemove = null), (document.onmouseup = null)
                                    })
                            }
                        }),
                        s.appendChild(a)
                })
        },
    })
}
function li(e) {
    e.directive('drag', {
        mounted(t, n) {
            if (!n.value) return !1
            const r = document.querySelector(n.value[0]),
                o = document.querySelector(n.value[1])
            if (!o || !r) return !1
            function s(i, c) {
                const u = c === 'pc' ? i.clientX : i.touches[0].clientX,
                    m = c === 'pc' ? i.clientY : i.touches[0].clientY,
                    h = document.body.clientWidth,
                    g = document.body.clientHeight || document.documentElement.clientHeight,
                    w = r.offsetWidth,
                    d = r.offsetHeight,
                    f = r.offsetLeft,
                    l = h - r.offsetLeft - w,
                    y = r.offsetTop,
                    T = g - r.offsetTop - d
                let E = getComputedStyle(r).left,
                    k = getComputedStyle(r).top
                return (
                    (E = +E.replace(/\px/g, '')),
                    (k = +k.replace(/\px/g, '')),
                    { disX: u, disY: m, minDragDomLeft: f, maxDragDomLeft: l, minDragDomTop: y, maxDragDomTop: T, styL: E, styT: k }
                )
            }
            function a(i, c, u) {
                const { disX: m, disY: h, minDragDomLeft: g, maxDragDomLeft: w, minDragDomTop: d, maxDragDomTop: f, styL: l, styT: y } = u
                let T = c === 'pc' ? i.clientX - m : i.touches[0].clientX - m,
                    E = c === 'pc' ? i.clientY - h : i.touches[0].clientY - h
                ;-T > g ? (T = -g) : T > w && (T = w), -E > d ? (E = -d) : E > f && (E = f), (r.style.cssText += `;left:${T + l}px;top:${E + y}px;`)
            }
            ;(o.onmouseover = () => (o.style.cursor = 'move')),
                (o.onmousedown = (i) => {
                    const c = s(i, 'pc')
                    ;(document.onmousemove = (u) => {
                        a(u, 'pc', c)
                    }),
                        (document.onmouseup = () => {
                            ;(document.onmousemove = null), (document.onmouseup = null)
                        })
                }),
                (o.ontouchstart = (i) => {
                    const c = s(i, 'app')
                    ;(document.ontouchmove = (u) => {
                        a(u, 'app', c)
                    }),
                        (document.ontouchend = () => {
                            ;(document.ontouchmove = null), (document.ontouchend = null)
                        })
                })
        },
    })
}
async function di() {
    const e = mr(Wa)
    e.use(Vn), console.log('main.ts'), await Xr(e), e.use(F), e.use(pr), si(e), La(e), e.mount('#app'), (e.config.globalProperties.eventBus = Ja())
}
di()
export {
    Su as $,
    hu as A,
    nu as B,
    Hi as C,
    eu as D,
    vu as E,
    lu as F,
    cu as G,
    hi as H,
    _i as I,
    oi as J,
    Si as K,
    aa as L,
    Jr as M,
    qa as N,
    A as O,
    fu as P,
    Wr as Q,
    gi as R,
    tu as S,
    du as T,
    Ne as U,
    wi as V,
    yi as W,
    Lu as X,
    Ou as Y,
    Ru as Z,
    rt as _,
    ao as a,
    Fa as a0,
    Tu as a1,
    Ca as a2,
    wu as a3,
    _u as a4,
    Eu as a5,
    su as a6,
    He as a7,
    mu as a8,
    uu as a9,
    iu as aa,
    au as ab,
    Qi as ac,
    Xi as ad,
    Zi as ae,
    Wi as af,
    ku as ag,
    Gi as ah,
    Yi as ai,
    Ki as aj,
    Ji as ak,
    Da as al,
    bu as am,
    ou as an,
    ru as ao,
    Ua as ap,
    ja as aq,
    Oi as ar,
    pi as as,
    Au as at,
    gu as au,
    so as av,
    ct as b,
    x as c,
    yu as d,
    oe as e,
    Ia as f,
    bi as g,
    Ei as h,
    We as i,
    O as j,
    de as k,
    vi as l,
    ne as m,
    Yt as n,
    _ as o,
    $ as p,
    yr as q,
    F as r,
    xa as s,
    Ti as t,
    Se as u,
    ki as v,
    De as w,
    B as x,
    lt as y,
    pu as z,
}
