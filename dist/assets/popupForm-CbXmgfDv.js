import {
    e as D,
    p as w,
    am as I,
    v as R,
    r as B,
    m as t,
    X as p,
    o as m,
    h as x,
    W as K,
    l as r,
    P as o,
    _ as v,
    O as h,
    k as V,
    j as S,
    $ as P,
    a8 as z,
    a7 as E,
    V as T,
    U as y,
    Z as U,
} from './vue-Rh7pEvFB.js'
import { F as W } from './index-BC54TMpd.js'
import { b as G } from './validate-Dr-o2ZDb.js'
import { e as L, _ as q } from './index-C3vonoRT.js'
import './index-DQwP9Y7u.js'
import './index-CK3pnx59.js'
const O = D({
        __name: 'popupForm',
        setup(F, { expose: a }) {
            const k = L(),
                e = w(),
                b = w(),
                C = I('baTable'),
                { t: n } = R.useI18n(),
                f = B({
                    name: [G({ name: 'required', title: n('user.group.Group name') })],
                    auth: [
                        {
                            required: !0,
                            validator: (u, i, l) =>
                                s().length <= 0 ? l(new Error(n('Please select field', { field: n('user.group.jurisdiction') }))) : l(),
                        },
                    ],
                }),
                s = () => b.value.getCheckedKeys().concat(b.value.getHalfCheckedKeys()),
                g = (u, i) => {
                    if (i.isLeaf) return ''
                    let l = !0
                    for (const _ in i.childNodes) i.childNodes[_].isLeaf || (l = !1)
                    return l ? 'penultimate-node' : ''
                }
            a({ getCheckeds: s })
            const c = { config: k, formRef: e, treeRef: b, baTable: C, t: n, rules: f, getCheckeds: s, treeNodeClass: g, FormItem: W }
            return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c
        },
    }),
    A = { class: 'title' }
function H(F, a, k, e, b, C) {
    const n = t('el-input'),
        f = t('el-form-item'),
        s = t('el-tree'),
        g = t('el-form'),
        c = t('el-scrollbar'),
        u = t('el-button'),
        i = t('el-dialog'),
        l = p('drag'),
        _ = p('zoom'),
        N = p('loading'),
        j = p('blur')
    return (
        m(),
        x(
            U,
            null,
            [
                K(' 对话框表单 '),
                r(
                    i,
                    {
                        class: 'ba-operate-dialog',
                        top: '10vh',
                        'close-on-click-modal': !1,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                        'destroy-on-close': !0,
                    },
                    {
                        header: o(() => [
                            v((m(), x('div', A, [T(y(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [l, ['.ba-operate-dialog', '.el-dialog__header']],
                                [_, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: o(() => [
                            V(
                                'div',
                                { style: S('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    r(
                                        u,
                                        { onClick: a[4] || (a[4] = (d) => e.baTable.toggleForm('')) },
                                        { default: o(() => [T(y(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    v(
                                        (m(),
                                        h(
                                            u,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: a[5] || (a[5] = (d) => e.baTable.onSubmit(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: o(() => [
                                                    T(
                                                        y(
                                                            e.baTable.form.operateIds && e.baTable.form.operateIds.length > 1
                                                                ? e.t('Save and edit next item')
                                                                : e.t('Save')
                                                        ),
                                                        1
                                                    ),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            ['loading']
                                        )),
                                        [[j]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: o(() => [
                            v(
                                (m(),
                                h(
                                    c,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: o(() => [
                                            V(
                                                'div',
                                                {
                                                    class: P(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                                    style: S(
                                                        e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'
                                                    ),
                                                },
                                                [
                                                    r(
                                                        g,
                                                        {
                                                            ref: 'formRef',
                                                            onSubmit: a[2] || (a[2] = E(() => {}, ['prevent'])),
                                                            onKeyup: a[3] || (a[3] = z((d) => e.baTable.onSubmit(e.formRef), ['enter'])),
                                                            model: e.baTable.form.items,
                                                            'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                            'label-width': e.baTable.form.labelWidth + 'px',
                                                            rules: e.rules,
                                                        },
                                                        {
                                                            default: o(() => [
                                                                r(
                                                                    f,
                                                                    { prop: 'name', label: e.t('user.group.Group name') },
                                                                    {
                                                                        default: o(() => [
                                                                            r(
                                                                                n,
                                                                                {
                                                                                    modelValue: e.baTable.form.items.name,
                                                                                    'onUpdate:modelValue':
                                                                                        a[0] || (a[0] = (d) => (e.baTable.form.items.name = d)),
                                                                                    type: 'string',
                                                                                    placeholder: e.t('Please input field', {
                                                                                        field: e.t('user.group.Group name'),
                                                                                    }),
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ['modelValue', 'placeholder']
                                                                            ),
                                                                        ]),
                                                                        _: 1,
                                                                    },
                                                                    8,
                                                                    ['label']
                                                                ),
                                                                r(
                                                                    f,
                                                                    { prop: 'auth', label: e.t('user.group.jurisdiction') },
                                                                    {
                                                                        default: o(() => [
                                                                            (m(),
                                                                            h(
                                                                                s,
                                                                                {
                                                                                    ref: 'treeRef',
                                                                                    key: e.baTable.form.extend.treeKey,
                                                                                    'default-checked-keys': e.baTable.form.extend.defaultCheckedKeys,
                                                                                    'default-expand-all': !0,
                                                                                    'show-checkbox': '',
                                                                                    'node-key': 'id',
                                                                                    props: {
                                                                                        children: 'children',
                                                                                        label: 'title',
                                                                                        class: e.treeNodeClass,
                                                                                    },
                                                                                    data: e.baTable.form.extend.menuRules,
                                                                                    class: 'w100',
                                                                                },
                                                                                null,
                                                                                8,
                                                                                ['default-checked-keys', 'props', 'data']
                                                                            )),
                                                                        ]),
                                                                        _: 1,
                                                                    },
                                                                    8,
                                                                    ['label']
                                                                ),
                                                                r(
                                                                    e.FormItem,
                                                                    {
                                                                        label: e.t('State'),
                                                                        modelValue: e.baTable.form.items.status,
                                                                        'onUpdate:modelValue':
                                                                            a[1] || (a[1] = (d) => (e.baTable.form.items.status = d)),
                                                                        type: 'radio',
                                                                        'input-attr': {
                                                                            border: !0,
                                                                            content: { 0: e.t('Disable'), 1: e.t('Enable') },
                                                                        },
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ['label', 'modelValue', 'input-attr']
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['model', 'label-position', 'label-width', 'rules']
                                                    ),
                                                ],
                                                6
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                )),
                                [[N, e.baTable.form.loading]]
                            ),
                        ]),
                        _: 1,
                    },
                    8,
                    ['model-value', 'onClose']
                ),
            ],
            2112
        )
    )
}
const $ = q(O, [
    ['render', H],
    ['__scopeId', 'data-v-4b42f312'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/chat/popupForm.vue'],
])
export { $ as default }
