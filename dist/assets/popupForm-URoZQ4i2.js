import {
    e as D,
    v as j,
    am as B,
    r as h,
    p as z,
    D as M,
    m as i,
    X as p,
    o as c,
    h as C,
    W as F,
    l,
    P as t,
    k as L,
    j as w,
    $ as R,
    O as x,
    a8 as y,
    a7 as U,
    V,
    U as v,
    _ as S,
    Z as A,
} from './vue-Rh7pEvFB.js'
import { c as N, e as O, _ as W } from './index-BinDduO1.js'
import { F as q } from './index-DL4HVtqZ.js'
import { b as T } from './validate-CtRz3DDh.js'
const E = '/admin/user.MoneyLog/'
function K(g) {
    return N({ url: E + 'add', method: 'get', params: { userId: g } })
}
const X = D({
        __name: 'popupForm',
        setup(g, { expose: o }) {
            o()
            const k = O(),
                { t: e } = j.useI18n(),
                d = B('baTable'),
                I = h({
                    user_id: [T({ name: 'required', message: e('Please select field', { field: e('user.moneyLog.User') }) })],
                    money: [
                        T({ name: 'required', title: e('user.moneyLog.Change amount') }),
                        {
                            validator: (n, s, u) =>
                                !s || parseFloat(s) == 0
                                    ? u(new Error(e('Please enter the correct field', { field: e('user.moneyLog.Change amount') })))
                                    : u(),
                            trigger: 'blur',
                        },
                    ],
                    memo: [T({ name: 'required', title: e('user.moneyLog.remarks') })],
                }),
                m = z(),
                r = h({ userInfo: {}, after: 0 }),
                b = () => {
                    !d.form.items.user_id ||
                        parseInt(d.form.items.user_id) <= 0 ||
                        K(d.form.items.user_id).then((n) => {
                            ;(r.userInfo = n.data.user), (r.after = n.data.user.money)
                        })
                },
                _ = (n) => {
                    if (!r.userInfo || typeof r.userInfo > 'u') {
                        r.after = 0
                        return
                    }
                    let s = n == '' ? 0 : parseFloat(n)
                    r.after = parseFloat((parseFloat(r.userInfo.money) + s).toFixed(2))
                }
            M(
                () => d.form.operate,
                (n) => {
                    n && b()
                }
            )
            const f = { config: k, t: e, baTable: d, rules: I, formRef: m, state: r, getAdd: b, changeMoney: _, FormItem: q }
            return Object.defineProperty(f, '__isScriptSetup', { enumerable: !1, value: !0 }), f
        },
    }),
    Z = { class: 'title' }
function G(g, o, k, e, d, I) {
    const m = i('el-input'),
        r = i('el-form-item'),
        b = i('el-form'),
        _ = i('el-scrollbar'),
        f = i('el-button'),
        n = i('el-dialog'),
        s = p('drag'),
        u = p('zoom'),
        P = p('blur')
    return (
        c(),
        C(
            A,
            null,
            [
                F(' 对话框表单 '),
                l(
                    n,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                    },
                    {
                        header: t(() => [
                            S((c(), C('div', Z, [V(v(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [s, ['.ba-operate-dialog', '.el-dialog__header']],
                                [u, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: t(() => [
                            L(
                                'div',
                                { style: w('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    l(
                                        f,
                                        { onClick: o[10] || (o[10] = (a) => e.baTable.toggleForm('')) },
                                        { default: t(() => [V(v(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    S(
                                        (c(),
                                        x(
                                            f,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: o[11] || (o[11] = (a) => e.baTable.onSubmit(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: t(() => [
                                                    V(v(e.baTable.form.operateIds.length > 1 ? e.t('Save and edit next item') : e.t('Save')), 1),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            ['loading']
                                        )),
                                        [[P]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: t(() => [
                            l(
                                _,
                                { class: 'ba-table-form-scrollbar' },
                                {
                                    default: t(() => [
                                        L(
                                            'div',
                                            {
                                                class: R(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                                style: w(e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'),
                                            },
                                            [
                                                e.baTable.form.loading
                                                    ? F('v-if', !0)
                                                    : (c(),
                                                      x(
                                                          b,
                                                          {
                                                              key: 0,
                                                              ref: 'formRef',
                                                              onKeyup: o[9] || (o[9] = y((a) => e.baTable.onSubmit(e.formRef), ['enter'])),
                                                              model: e.baTable.form.items,
                                                              'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                              'label-width': e.baTable.form.labelWidth + 'px',
                                                              rules: e.rules,
                                                          },
                                                          {
                                                              default: t(() => [
                                                                  l(
                                                                      e.FormItem,
                                                                      {
                                                                          type: 'remoteSelect',
                                                                          prop: 'user_id',
                                                                          label: e.t('user.moneyLog.User ID'),
                                                                          modelValue: e.baTable.form.items.user_id,
                                                                          'onUpdate:modelValue':
                                                                              o[0] || (o[0] = (a) => (e.baTable.form.items.user_id = a)),
                                                                          placeholder: e.t('Click select'),
                                                                          'input-attr': {
                                                                              pk: 'user.id',
                                                                              field: 'nickname_text',
                                                                              remoteUrl: '/admin/user.User/index',
                                                                              onChange: e.getAdd,
                                                                          },
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ['label', 'modelValue', 'placeholder', 'input-attr']
                                                                  ),
                                                                  l(
                                                                      r,
                                                                      { label: e.t('user.moneyLog.User name') },
                                                                      {
                                                                          default: t(() => [
                                                                              l(
                                                                                  m,
                                                                                  {
                                                                                      modelValue: e.state.userInfo.username,
                                                                                      'onUpdate:modelValue':
                                                                                          o[1] || (o[1] = (a) => (e.state.userInfo.username = a)),
                                                                                      disabled: '',
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ['modelValue']
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['label']
                                                                  ),
                                                                  l(
                                                                      r,
                                                                      { label: e.t('user.moneyLog.User nickname') },
                                                                      {
                                                                          default: t(() => [
                                                                              l(
                                                                                  m,
                                                                                  {
                                                                                      modelValue: e.state.userInfo.nickname,
                                                                                      'onUpdate:modelValue':
                                                                                          o[2] || (o[2] = (a) => (e.state.userInfo.nickname = a)),
                                                                                      disabled: '',
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ['modelValue']
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['label']
                                                                  ),
                                                                  l(
                                                                      r,
                                                                      { label: e.t('user.moneyLog.Current balance') },
                                                                      {
                                                                          default: t(() => [
                                                                              l(
                                                                                  m,
                                                                                  {
                                                                                      modelValue: e.state.userInfo.money,
                                                                                      'onUpdate:modelValue':
                                                                                          o[3] || (o[3] = (a) => (e.state.userInfo.money = a)),
                                                                                      disabled: '',
                                                                                      type: 'number',
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ['modelValue']
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['label']
                                                                  ),
                                                                  l(
                                                                      r,
                                                                      { prop: 'money', label: e.t('user.moneyLog.Change amount') },
                                                                      {
                                                                          default: t(() => [
                                                                              l(
                                                                                  m,
                                                                                  {
                                                                                      onInput: e.changeMoney,
                                                                                      modelValue: e.baTable.form.items.money,
                                                                                      'onUpdate:modelValue':
                                                                                          o[4] || (o[4] = (a) => (e.baTable.form.items.money = a)),
                                                                                      type: 'number',
                                                                                      placeholder: e.t(
                                                                                          'user.moneyLog.Please enter the balance change amount'
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
                                                                  l(
                                                                      r,
                                                                      { label: e.t('user.moneyLog.Balance after change') },
                                                                      {
                                                                          default: t(() => [
                                                                              l(
                                                                                  m,
                                                                                  {
                                                                                      modelValue: e.state.after,
                                                                                      'onUpdate:modelValue':
                                                                                          o[5] || (o[5] = (a) => (e.state.after = a)),
                                                                                      type: 'number',
                                                                                      disabled: '',
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ['modelValue']
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['label']
                                                                  ),
                                                                  l(
                                                                      r,
                                                                      { prop: 'memo', label: e.t('user.moneyLog.remarks') },
                                                                      {
                                                                          default: t(() => [
                                                                              l(
                                                                                  m,
                                                                                  {
                                                                                      onKeyup: [
                                                                                          o[6] ||
                                                                                              (o[6] = y(
                                                                                                  U(() => {}, ['stop']),
                                                                                                  ['enter']
                                                                                              )),
                                                                                          o[7] ||
                                                                                              (o[7] = y(
                                                                                                  U((a) => e.baTable.onSubmit(e.formRef), ['ctrl']),
                                                                                                  ['enter']
                                                                                              )),
                                                                                      ],
                                                                                      modelValue: e.baTable.form.items.memo,
                                                                                      'onUpdate:modelValue':
                                                                                          o[8] || (o[8] = (a) => (e.baTable.form.items.memo = a)),
                                                                                      type: 'textarea',
                                                                                      placeholder: e.t(
                                                                                          'user.moneyLog.Please enter change remarks / description'
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
const H = W(X, [
        ['render', G],
        ['__scopeId', 'data-v-48ef502f'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/user/moneyLog/popupForm.vue'],
    ]),
    ee = Object.freeze(Object.defineProperty({ __proto__: null, default: H }, Symbol.toStringTag, { value: 'Module' }))
export { H as P, K as a, ee as p, E as u }
