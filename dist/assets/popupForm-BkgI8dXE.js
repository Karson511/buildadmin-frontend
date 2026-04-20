import {
    e as j,
    p as E,
    am as q,
    v as B,
    r as R,
    D as z,
    m as d,
    X as _,
    o as s,
    h as U,
    W as y,
    l as r,
    P as o,
    _ as v,
    O as g,
    k as P,
    j as F,
    $ as L,
    a8 as w,
    V as c,
    U as T,
    a7 as C,
    Z as N,
} from './vue-Rh7pEvFB.js'
import { r as W, b as f } from './validate-CtRz3DDh.js'
import { F as Y } from './index-DL4HVtqZ.js'
import { e as K, r as M, _ as G } from './index-BinDduO1.js'
import './index-1fitz5rj.js'
import './index-CY7HLGeR.js'
const O = j({
        __name: 'popupForm',
        setup(x, { expose: l }) {
            l()
            const k = K(),
                e = E(),
                b = q('baTable'),
                { t: n } = B.useI18n(),
                t = R({
                    username: [f({ name: 'required', title: n('user.user.User name') }), f({ name: 'account' })],
                    nickname: [f({ name: 'required', title: n('user.user.nickname') })],
                    group_id: [f({ name: 'required', message: n('Please select field', { field: n('user.user.grouping') }) })],
                    email: [f({ name: 'email', title: n('user.user.email') })],
                    mobile: [f({ name: 'mobile' })],
                    password: [
                        {
                            validator: (i, p, u) => {
                                if (b.form.operate == 'Add') {
                                    if (!p) return u(new Error(n('Please input field', { field: n('user.user.password') })))
                                } else if (!p) return u()
                                return W(p) ? u() : u(new Error(n('validate.Please enter the correct password')))
                            },
                            trigger: 'blur',
                        },
                    ],
                }),
                m = (i) => {
                    b.toggleForm(), M.push({ name: i == 'money' ? 'user/moneyLog' : 'user/scoreLog', query: { user_id: b.form.items.id } })
                }
            z(
                () => b.form.operate,
                (i) => {
                    t.password[0].required = i == 'Add'
                }
            )
            const V = { config: k, formRef: e, baTable: b, t: n, rules: t, changeAccount: m, FormItem: Y }
            return Object.defineProperty(V, '__isScriptSetup', { enumerable: !1, value: !0 }), V
        },
    }),
    X = { class: 'title' }
function Z(x, l, k, e, b, n) {
    const t = d('el-input'),
        m = d('el-form-item'),
        V = d('el-date-picker'),
        i = d('el-button'),
        p = d('el-form'),
        u = d('el-scrollbar'),
        S = d('el-dialog'),
        h = _('drag'),
        D = _('zoom'),
        I = _('loading'),
        A = _('blur')
    return (
        s(),
        U(
            N,
            null,
            [
                y(' 对话框表单 '),
                r(
                    S,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'destroy-on-close': !0,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                    },
                    {
                        header: o(() => [
                            v((s(), U('div', X, [c(T(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [h, ['.ba-operate-dialog', '.el-dialog__header']],
                                [D, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: o(() => [
                            P(
                                'div',
                                { style: F('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    r(
                                        i,
                                        { onClick: l[18] || (l[18] = (a) => e.baTable.toggleForm('')) },
                                        { default: o(() => [c(T(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    v(
                                        (s(),
                                        g(
                                            i,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: l[19] || (l[19] = (a) => e.baTable.onSubmit(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: o(() => [
                                                    c(
                                                        T(
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
                                        [[A]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: o(() => [
                            v(
                                (s(),
                                g(
                                    u,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: o(() => [
                                            P(
                                                'div',
                                                {
                                                    class: L(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                                    style: F(
                                                        e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'
                                                    ),
                                                },
                                                [
                                                    e.baTable.form.loading
                                                        ? y('v-if', !0)
                                                        : (s(),
                                                          g(
                                                              p,
                                                              {
                                                                  key: 0,
                                                                  ref: 'formRef',
                                                                  onKeyup: l[17] || (l[17] = w((a) => e.baTable.onSubmit(e.formRef), ['enter'])),
                                                                  model: e.baTable.form.items,
                                                                  'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                                  'label-width': e.baTable.form.labelWidth + 'px',
                                                                  rules: e.rules,
                                                              },
                                                              {
                                                                  default: o(() => [
                                                                      r(
                                                                          m,
                                                                          { prop: 'username', label: e.t('user.user.User name') },
                                                                          {
                                                                              default: o(() => [
                                                                                  r(
                                                                                      t,
                                                                                      {
                                                                                          modelValue: e.baTable.form.items.username,
                                                                                          'onUpdate:modelValue':
                                                                                              l[0] ||
                                                                                              (l[0] = (a) => (e.baTable.form.items.username = a)),
                                                                                          type: 'string',
                                                                                          placeholder: e.t('Please input field', {
                                                                                              field:
                                                                                                  e.t('user.user.User name') +
                                                                                                  '(' +
                                                                                                  e.t('user.user.Login account') +
                                                                                                  ')',
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
                                                                          m,
                                                                          { prop: 'nickname', label: e.t('user.user.nickname') },
                                                                          {
                                                                              default: o(() => [
                                                                                  r(
                                                                                      t,
                                                                                      {
                                                                                          modelValue: e.baTable.form.items.nickname,
                                                                                          'onUpdate:modelValue':
                                                                                              l[1] ||
                                                                                              (l[1] = (a) => (e.baTable.form.items.nickname = a)),
                                                                                          type: 'string',
                                                                                          placeholder: e.t('Please input field', {
                                                                                              field: e.t('user.user.nickname'),
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
                                                                              type: 'remoteSelect',
                                                                              label: e.t('user.user.grouping'),
                                                                              modelValue: e.baTable.form.items.group_id,
                                                                              'onUpdate:modelValue':
                                                                                  l[2] || (l[2] = (a) => (e.baTable.form.items.group_id = a)),
                                                                              prop: 'group_id',
                                                                              placeholder: e.t('user.user.grouping'),
                                                                              'input-attr': {
                                                                                  params: {
                                                                                      isTree: !0,
                                                                                      search: [{ field: 'status', val: '1', operator: 'eq' }],
                                                                                  },
                                                                                  field: 'name',
                                                                                  remoteUrl: '/admin/user.Group/index',
                                                                              },
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'placeholder']
                                                                      ),
                                                                      r(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('user.user.head portrait'),
                                                                              type: 'image',
                                                                              modelValue: e.baTable.form.items.avatar,
                                                                              'onUpdate:modelValue':
                                                                                  l[3] || (l[3] = (a) => (e.baTable.form.items.avatar = a)),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue']
                                                                      ),
                                                                      r(
                                                                          m,
                                                                          { prop: 'email', label: e.t('user.user.email') },
                                                                          {
                                                                              default: o(() => [
                                                                                  r(
                                                                                      t,
                                                                                      {
                                                                                          modelValue: e.baTable.form.items.email,
                                                                                          'onUpdate:modelValue':
                                                                                              l[4] ||
                                                                                              (l[4] = (a) => (e.baTable.form.items.email = a)),
                                                                                          type: 'string',
                                                                                          placeholder: e.t('Please input field', {
                                                                                              field: e.t('user.user.email'),
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
                                                                          m,
                                                                          { prop: 'mobile', label: e.t('user.user.mobile') },
                                                                          {
                                                                              default: o(() => [
                                                                                  r(
                                                                                      t,
                                                                                      {
                                                                                          modelValue: e.baTable.form.items.mobile,
                                                                                          'onUpdate:modelValue':
                                                                                              l[5] ||
                                                                                              (l[5] = (a) => (e.baTable.form.items.mobile = a)),
                                                                                          type: 'string',
                                                                                          placeholder: e.t('Please input field', {
                                                                                              field: e.t('user.user.mobile'),
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
                                                                              label: e.t('user.user.Gender'),
                                                                              modelValue: e.baTable.form.items.gender,
                                                                              'onUpdate:modelValue':
                                                                                  l[6] || (l[6] = (a) => (e.baTable.form.items.gender = a)),
                                                                              type: 'radio',
                                                                              'input-attr': {
                                                                                  border: !0,
                                                                                  content: {
                                                                                      0: e.t('Unknown'),
                                                                                      1: e.t('user.user.male'),
                                                                                      2: e.t('user.user.female'),
                                                                                  },
                                                                              },
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'input-attr']
                                                                      ),
                                                                      r(
                                                                          m,
                                                                          { label: e.t('user.user.birthday') },
                                                                          {
                                                                              default: o(() => [
                                                                                  r(
                                                                                      V,
                                                                                      {
                                                                                          class: 'w100',
                                                                                          'value-format': 'YYYY-MM-DD',
                                                                                          modelValue: e.baTable.form.items.birthday,
                                                                                          'onUpdate:modelValue':
                                                                                              l[7] ||
                                                                                              (l[7] = (a) => (e.baTable.form.items.birthday = a)),
                                                                                          type: 'date',
                                                                                          placeholder: e.t('Please select field', {
                                                                                              field: e.t('user.user.birthday'),
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
                                                                      e.baTable.form.operate == 'Edit'
                                                                          ? (s(),
                                                                            g(
                                                                                m,
                                                                                { key: 0, label: e.t('user.user.balance') },
                                                                                {
                                                                                    default: o(() => [
                                                                                        r(
                                                                                            t,
                                                                                            {
                                                                                                modelValue: e.baTable.form.items.money,
                                                                                                'onUpdate:modelValue':
                                                                                                    l[9] ||
                                                                                                    (l[9] = (a) => (e.baTable.form.items.money = a)),
                                                                                                readonly: '',
                                                                                            },
                                                                                            {
                                                                                                append: o(() => [
                                                                                                    r(
                                                                                                        i,
                                                                                                        {
                                                                                                            onClick:
                                                                                                                l[8] ||
                                                                                                                (l[8] = (a) =>
                                                                                                                    e.changeAccount('money')),
                                                                                                        },
                                                                                                        {
                                                                                                            default: o(() => [
                                                                                                                c(
                                                                                                                    T(
                                                                                                                        e.t(
                                                                                                                            'user.user.Adjustment balance'
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    1
                                                                                                                ),
                                                                                                            ]),
                                                                                                            _: 1,
                                                                                                        }
                                                                                                    ),
                                                                                                ]),
                                                                                                _: 1,
                                                                                            },
                                                                                            8,
                                                                                            ['modelValue']
                                                                                        ),
                                                                                    ]),
                                                                                    _: 1,
                                                                                },
                                                                                8,
                                                                                ['label']
                                                                            ))
                                                                          : y('v-if', !0),
                                                                      e.baTable.form.operate == 'Edit'
                                                                          ? (s(),
                                                                            g(
                                                                                m,
                                                                                { key: 1, label: e.t('user.user.integral') },
                                                                                {
                                                                                    default: o(() => [
                                                                                        r(
                                                                                            t,
                                                                                            {
                                                                                                modelValue: e.baTable.form.items.score,
                                                                                                'onUpdate:modelValue':
                                                                                                    l[11] ||
                                                                                                    (l[11] = (a) => (e.baTable.form.items.score = a)),
                                                                                                readonly: '',
                                                                                            },
                                                                                            {
                                                                                                append: o(() => [
                                                                                                    r(
                                                                                                        i,
                                                                                                        {
                                                                                                            onClick:
                                                                                                                l[10] ||
                                                                                                                (l[10] = (a) =>
                                                                                                                    e.changeAccount('score')),
                                                                                                        },
                                                                                                        {
                                                                                                            default: o(() => [
                                                                                                                c(
                                                                                                                    T(
                                                                                                                        e.t(
                                                                                                                            'user.user.Adjust integral'
                                                                                                                        )
                                                                                                                    ),
                                                                                                                    1
                                                                                                                ),
                                                                                                            ]),
                                                                                                            _: 1,
                                                                                                        }
                                                                                                    ),
                                                                                                ]),
                                                                                                _: 1,
                                                                                            },
                                                                                            8,
                                                                                            ['modelValue']
                                                                                        ),
                                                                                    ]),
                                                                                    _: 1,
                                                                                },
                                                                                8,
                                                                                ['label']
                                                                            ))
                                                                          : y('v-if', !0),
                                                                      r(
                                                                          m,
                                                                          { prop: 'password', label: e.t('user.user.password') },
                                                                          {
                                                                              default: o(() => [
                                                                                  r(
                                                                                      t,
                                                                                      {
                                                                                          modelValue: e.baTable.form.items.password,
                                                                                          'onUpdate:modelValue':
                                                                                              l[12] ||
                                                                                              (l[12] = (a) => (e.baTable.form.items.password = a)),
                                                                                          type: 'password',
                                                                                          placeholder:
                                                                                              e.baTable.form.operate == 'Add'
                                                                                                  ? e.t('Please input field', {
                                                                                                        field: e.t('user.user.password'),
                                                                                                    })
                                                                                                  : e.t(
                                                                                                        'user.user.Please leave blank if not modified'
                                                                                                    ),
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
                                                                          m,
                                                                          { prop: 'motto', label: e.t('user.user.Personal signature') },
                                                                          {
                                                                              default: o(() => [
                                                                                  r(
                                                                                      t,
                                                                                      {
                                                                                          onKeyup: [
                                                                                              l[13] ||
                                                                                                  (l[13] = w(
                                                                                                      C(() => {}, ['stop']),
                                                                                                      ['enter']
                                                                                                  )),
                                                                                              l[14] ||
                                                                                                  (l[14] = w(
                                                                                                      C(
                                                                                                          (a) => e.baTable.onSubmit(e.formRef),
                                                                                                          ['ctrl']
                                                                                                      ),
                                                                                                      ['enter']
                                                                                                  )),
                                                                                          ],
                                                                                          modelValue: e.baTable.form.items.motto,
                                                                                          'onUpdate:modelValue':
                                                                                              l[15] ||
                                                                                              (l[15] = (a) => (e.baTable.form.items.motto = a)),
                                                                                          type: 'textarea',
                                                                                          placeholder: e.t('Please input field', {
                                                                                              field: e.t('user.user.Personal signature'),
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
                                                                                  l[16] || (l[16] = (a) => (e.baTable.form.items.status = a)),
                                                                              type: 'radio',
                                                                              'input-attr': {
                                                                                  border: !0,
                                                                                  content: { disable: e.t('Disable'), enable: e.t('Enable') },
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
                                [[I, e.baTable.form.loading]]
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
const ae = G(O, [
    ['render', Z],
    ['__scopeId', 'data-v-fc493e8c'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/user/user/popupForm.vue'],
])
export { ae as default }
