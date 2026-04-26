import {
    e as A,
    p as B,
    am as j,
    v as E,
    r as R,
    D as q,
    m as n,
    X as c,
    o as d,
    h as y,
    W as P,
    l as r,
    P as t,
    _ as T,
    O as g,
    k,
    j as F,
    $ as z,
    a8 as _,
    a7 as I,
    V as h,
    U as V,
    Z as N,
} from './vue-Rh7pEvFB.js'
import { r as W, b } from './validate-Dr-o2ZDb.js'
import { F as K } from './index-BC54TMpd.js'
import { e as O, w as G, _ as L } from './index-C3vonoRT.js'
import './index-DQwP9Y7u.js'
import './index-CK3pnx59.js'
const M = A({
        __name: 'popupForm',
        setup(x, { expose: a }) {
            a()
            const v = O(),
                e = G(),
                w = B(),
                s = j('baTable'),
                { t: o } = E.useI18n(),
                f = R({
                    username: [b({ name: 'required', title: o('auth.admin.username') }), b({ name: 'account' })],
                    nickname: [b({ name: 'required', title: o('auth.admin.nickname') })],
                    group_arr: [b({ name: 'required', message: o('Please select field', { field: o('auth.admin.grouping') }) })],
                    email: [b({ name: 'email', message: o('Please enter the correct field', { field: o('auth.admin.mailbox') }) })],
                    mobile: [b({ name: 'mobile', message: o('Please enter the correct field', { field: o('auth.admin.mobile') }) })],
                    password: [
                        {
                            validator: (p, m, i) => {
                                if (s.form.operate == 'Add') {
                                    if (!m) return i(new Error(o('Please input field', { field: o('auth.admin.Password') })))
                                } else if (!m) return i()
                                return W(m) ? i() : i(new Error(o('validate.Please enter the correct password')))
                            },
                            trigger: 'blur',
                        },
                    ],
                })
            q(
                () => s.form.operate,
                (p) => {
                    f.password[0].required = p == 'Add'
                }
            )
            const u = { config: v, adminInfo: e, formRef: w, baTable: s, t: o, rules: f, FormItem: K }
            return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
        },
    }),
    X = { class: 'title' }
function Z(x, a, v, e, w, s) {
    const o = n('el-input'),
        f = n('el-form-item'),
        u = n('el-form'),
        p = n('el-scrollbar'),
        m = n('el-button'),
        i = n('el-dialog'),
        C = c('drag'),
        S = c('zoom'),
        U = c('loading'),
        D = c('blur')
    return (
        d(),
        y(
            N,
            null,
            [
                P(' 对话框表单 '),
                r(
                    i,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                        'destroy-on-close': !0,
                    },
                    {
                        header: t(() => [
                            T((d(), y('div', X, [h(V(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [C, ['.ba-operate-dialog', '.el-dialog__header']],
                                [S, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: t(() => [
                            k(
                                'div',
                                { style: F('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    r(
                                        m,
                                        { onClick: a[12] || (a[12] = (l) => e.baTable.toggleForm('')) },
                                        { default: t(() => [h(V(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    T(
                                        (d(),
                                        g(
                                            m,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: a[13] || (a[13] = (l) => e.baTable.onSubmit(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: t(() => [
                                                    h(
                                                        V(
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
                                        [[D]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: t(() => [
                            T(
                                (d(),
                                g(
                                    p,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: t(() => [
                                            k(
                                                'div',
                                                {
                                                    class: z(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                                    style: F(
                                                        e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'
                                                    ),
                                                },
                                                [
                                                    e.baTable.form.loading
                                                        ? P('v-if', !0)
                                                        : (d(),
                                                          g(
                                                              u,
                                                              {
                                                                  key: 0,
                                                                  ref: 'formRef',
                                                                  onKeyup: a[11] || (a[11] = _((l) => e.baTable.onSubmit(e.formRef), ['enter'])),
                                                                  model: e.baTable.form.items,
                                                                  'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                                  'label-width': e.baTable.form.labelWidth + 'px',
                                                                  rules: e.rules,
                                                              },
                                                              {
                                                                  default: t(() => [
                                                                      r(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.admin.username'),
                                                                              modelValue: e.baTable.form.items.username,
                                                                              'onUpdate:modelValue':
                                                                                  a[0] || (a[0] = (l) => (e.baTable.form.items.username = l)),
                                                                              type: 'string',
                                                                              prop: 'username',
                                                                              placeholder: e.t('auth.admin.Administrator login'),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'placeholder']
                                                                      ),
                                                                      r(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.admin.nickname'),
                                                                              modelValue: e.baTable.form.items.nickname,
                                                                              'onUpdate:modelValue':
                                                                                  a[1] || (a[1] = (l) => (e.baTable.form.items.nickname = l)),
                                                                              type: 'string',
                                                                              prop: 'nickname',
                                                                              placeholder: e.t('Please input field', {
                                                                                  field: e.t('auth.admin.nickname'),
                                                                              }),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'placeholder']
                                                                      ),
                                                                      (d(),
                                                                      g(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.admin.grouping'),
                                                                              modelValue: e.baTable.form.items.group_arr,
                                                                              'onUpdate:modelValue':
                                                                                  a[2] || (a[2] = (l) => (e.baTable.form.items.group_arr = l)),
                                                                              prop: 'group_arr',
                                                                              type: 'remoteSelect',
                                                                              key: 'group-' + e.baTable.form.items.id,
                                                                              'input-attr': {
                                                                                  multiple: !0,
                                                                                  params: {
                                                                                      isTree: !0,
                                                                                      absoluteAuth: e.adminInfo.id == e.baTable.form.items.id ? 0 : 1,
                                                                                  },
                                                                                  field: 'name',
                                                                                  remoteUrl: '/admin/auth.Group/index',
                                                                                  placeholder: e.t('Click select'),
                                                                              },
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'input-attr']
                                                                      )),
                                                                      r(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.admin.head portrait'),
                                                                              type: 'image',
                                                                              modelValue: e.baTable.form.items.avatar,
                                                                              'onUpdate:modelValue':
                                                                                  a[3] || (a[3] = (l) => (e.baTable.form.items.avatar = l)),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue']
                                                                      ),
                                                                      r(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.admin.mailbox'),
                                                                              prop: 'email',
                                                                              modelValue: e.baTable.form.items.email,
                                                                              'onUpdate:modelValue':
                                                                                  a[4] || (a[4] = (l) => (e.baTable.form.items.email = l)),
                                                                              type: 'string',
                                                                              placeholder: e.t('Please input field', {
                                                                                  field: e.t('auth.admin.mailbox'),
                                                                              }),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'placeholder']
                                                                      ),
                                                                      r(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.admin.mobile'),
                                                                              prop: 'mobile',
                                                                              modelValue: e.baTable.form.items.mobile,
                                                                              'onUpdate:modelValue':
                                                                                  a[5] || (a[5] = (l) => (e.baTable.form.items.mobile = l)),
                                                                              type: 'string',
                                                                              placeholder: e.t('Please input field', {
                                                                                  field: e.t('auth.admin.mobile'),
                                                                              }),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'placeholder']
                                                                      ),
                                                                      r(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.admin.Password'),
                                                                              prop: 'password',
                                                                              modelValue: e.baTable.form.items.password,
                                                                              'onUpdate:modelValue':
                                                                                  a[6] || (a[6] = (l) => (e.baTable.form.items.password = l)),
                                                                              type: 'password',
                                                                              placeholder:
                                                                                  e.baTable.form.operate == 'Add'
                                                                                      ? e.t('Please input field', {
                                                                                            field: e.t('auth.admin.Password'),
                                                                                        })
                                                                                      : e.t('auth.admin.Please leave blank if not modified'),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'placeholder']
                                                                      ),
                                                                      r(
                                                                          f,
                                                                          { prop: 'motto', label: e.t('auth.admin.Personal signature') },
                                                                          {
                                                                              default: t(() => [
                                                                                  r(
                                                                                      o,
                                                                                      {
                                                                                          onKeyup: [
                                                                                              a[7] ||
                                                                                                  (a[7] = _(
                                                                                                      I(() => {}, ['stop']),
                                                                                                      ['enter']
                                                                                                  )),
                                                                                              a[8] ||
                                                                                                  (a[8] = _(
                                                                                                      I(
                                                                                                          (l) => e.baTable.onSubmit(e.formRef),
                                                                                                          ['ctrl']
                                                                                                      ),
                                                                                                      ['enter']
                                                                                                  )),
                                                                                          ],
                                                                                          modelValue: e.baTable.form.items.motto,
                                                                                          'onUpdate:modelValue':
                                                                                              a[9] ||
                                                                                              (a[9] = (l) => (e.baTable.form.items.motto = l)),
                                                                                          type: 'textarea',
                                                                                          placeholder: e.t('Please input field', {
                                                                                              field: e.t('auth.admin.Personal signature'),
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
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('State'),
                                                                              modelValue: e.baTable.form.items.status,
                                                                              'onUpdate:modelValue':
                                                                                  a[10] || (a[10] = (l) => (e.baTable.form.items.status = l)),
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
                                                          )),
                                                ],
                                                6
                                            ),
                                        ]),
                                        _: 1,
                                    }
                                )),
                                [[U, e.baTable.form.loading]]
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
const ae = L(M, [
    ['render', Z],
    ['__scopeId', 'data-v-0c10b7d3'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/auth/admin/popupForm.vue'],
])
export { ae as default }
