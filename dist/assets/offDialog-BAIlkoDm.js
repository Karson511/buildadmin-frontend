import {
    e as C,
    am as w,
    v as x,
    p as h,
    f as m,
    D as y,
    ai as T,
    m as r,
    o as _,
    O as b,
    P as i,
    k as V,
    U as p,
    h as O,
    Z as D,
    Y as I,
    V as u,
    l as v,
} from './vue-Rh7pEvFB.js'
import { o as j } from './posts-CUZwLQo2.js'
import { _ as P } from './index-BfqXFxxp.js'
const B = C({
        __name: 'offDialog',
        setup(k, { expose: t }) {
            t()
            const l = w('baTable'),
                { t: e } = x.useI18n(),
                a = h(''),
                f = m({
                    get: () => {
                        var o
                        return !!((o = l.form.extend) != null && o.offDialogVisible)
                    },
                    set: (o) => {
                        o || (l.form.extend.offDialogVisible = !1)
                    },
                }),
                n = m(() => {
                    var o
                    return (o = l.form.extend) == null ? void 0 : o.offPostIds
                }),
                c = m(() => [
                    e('posts.posts.Contains WeChat contact for traffic diversion'),
                    e('posts.posts.Contains politically sensitive words'),
                    e('posts.posts.Content is vulgar or spam'),
                    e('posts.posts.Contains false advertising'),
                    e('posts.posts.Involves personal privacy leakage'),
                ])
            y(f, (o) => {
                o && (a.value = '')
            })
            const s = {
                baTable: l,
                t: e,
                offReason: a,
                dialogVisible: f,
                offPostIds: n,
                offTemplates: c,
                applyTemplate: (o) => {
                    a.value = a.value ? a.value + '；' + o : o
                },
                confirmOff: () => {
                    var o
                    !((o = n.value) != null && o.length) ||
                        !a.value.trim() ||
                        j(n.value, a.value.trim()).then(() => {
                            T.success(e('posts.posts.Offlined')), (f.value = !1), l.onTableHeaderAction('refresh', {})
                        })
                },
            }
            return Object.defineProperty(s, '__isScriptSetup', { enumerable: !1, value: !0 }), s
        },
    }),
    R = { class: 'off-templates' },
    S = { class: 'off-templates-label' }
function U(k, t, l, e, a, f) {
    const n = r('el-tag'),
        c = r('el-input'),
        d = r('el-button'),
        g = r('el-dialog')
    return (
        _(),
        b(
            g,
            {
                modelValue: e.dialogVisible,
                'onUpdate:modelValue': t[2] || (t[2] = (s) => (e.dialogVisible = s)),
                title: e.t('posts.posts.Off'),
                width: '500px',
                'close-on-click-modal': !1,
                'destroy-on-close': '',
            },
            {
                footer: i(() => [
                    v(
                        d,
                        { onClick: t[1] || (t[1] = (s) => (e.dialogVisible = !1)) },
                        { default: i(() => [u(p(e.t('posts.posts.Cancel')), 1)]), _: 1 }
                    ),
                    v(
                        d,
                        { type: 'warning', disabled: !e.offReason.trim(), onClick: e.confirmOff },
                        { default: i(() => [u(p(e.t('posts.posts.Confirm')), 1)]), _: 1 },
                        8,
                        ['disabled']
                    ),
                ]),
                default: i(() => [
                    V('div', R, [
                        V('span', S, p(e.t('posts.posts.Quick reject templates')) + '：', 1),
                        (_(!0),
                        O(
                            D,
                            null,
                            I(
                                e.offTemplates,
                                (s) => (
                                    _(),
                                    b(
                                        n,
                                        { key: s, class: 'off-template-tag', effect: 'plain', onClick: (o) => e.applyTemplate(s) },
                                        { default: i(() => [u(p(s), 1)]), _: 2 },
                                        1032,
                                        ['onClick']
                                    )
                                )
                            ),
                            128
                        )),
                    ]),
                    v(
                        c,
                        {
                            modelValue: e.offReason,
                            'onUpdate:modelValue': t[0] || (t[0] = (s) => (e.offReason = s)),
                            type: 'textarea',
                            rows: 4,
                            placeholder: e.t('posts.posts.Please enter off reason'),
                            maxlength: '500',
                            'show-word-limit': '',
                        },
                        null,
                        8,
                        ['modelValue', 'placeholder']
                    ),
                ]),
                _: 1,
            },
            8,
            ['modelValue', 'title']
        )
    )
}
const E = P(B, [
    ['render', U],
    ['__scopeId', 'data-v-9d4e5e2a'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/posts/posts/offDialog.vue'],
])
export { E as default }
