import {
    e as S,
    v as j,
    am as U,
    r as z,
    p as B,
    m as s,
    X as f,
    o as m,
    O as _,
    P as a,
    _ as v,
    k as w,
    j as C,
    $ as I,
    a8 as N,
    l as t,
    W as P,
    V as g,
    U as h,
    h as W,
} from './vue-Rh7pEvFB.js'
import { b as E } from './validate-Dr-o2ZDb.js'
import { e as L, _ as A } from './index-C3vonoRT.js'
const K = S({
        __name: 'popupForm',
        setup(x, { expose: l }) {
            l()
            const T = L(),
                { t: e } = j.useI18n(),
                r = U('baTable'),
                k = z({ title: [E({ name: 'required', title: e('shop.topic.topic') })] }),
                n = B(),
                b = {
                    config: T,
                    t: e,
                    baTable: r,
                    rules: k,
                    formRef: n,
                    submitForm: () => {
                        const c = n.value,
                            i = r.form.items
                        !c ||
                            !i ||
                            c.validate((p) => {
                                if (!p) return
                                const u = { id: i.id, shop_user_id: i.shop_user_id ?? i.user_id, title: i.title }
                                ;(r.form.submitLoading = !0),
                                    r.api
                                        .postData('edit', u)
                                        .then(() => {
                                            r.onTableHeaderAction('refresh', {}), r.toggleForm()
                                        })
                                        .finally(() => {
                                            r.form.submitLoading = !1
                                        })
                            })
                    },
                }
            return Object.defineProperty(b, '__isScriptSetup', { enumerable: !1, value: !0 }), b
        },
    }),
    O = { class: 'title' }
function R(x, l, T, e, r, k) {
    const n = s('el-input'),
        d = s('el-form-item'),
        b = s('el-form'),
        c = s('el-scrollbar'),
        i = s('el-button'),
        p = s('el-dialog'),
        u = f('drag'),
        F = f('zoom'),
        V = f('loading'),
        D = f('blur')
    return (
        m(),
        _(
            p,
            {
                class: 'ba-operate-dialog',
                'close-on-click-modal': !1,
                'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                onClose: e.baTable.toggleForm,
            },
            {
                header: a(() => [
                    v((m(), W('div', O, [g(h(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                        [u, ['.ba-operate-dialog', '.el-dialog__header']],
                        [F, '.ba-operate-dialog'],
                    ]),
                ]),
                footer: a(() => [
                    w(
                        'div',
                        { style: C('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                        [
                            t(i, { onClick: l[2] || (l[2] = (o) => e.baTable.toggleForm('')) }, { default: a(() => [g(h(e.t('Cancel')), 1)]), _: 1 }),
                            v(
                                (m(),
                                _(
                                    i,
                                    { loading: e.baTable.form.submitLoading, onClick: l[3] || (l[3] = (o) => e.submitForm()), type: 'primary' },
                                    { default: a(() => [g(h(e.t('Save')), 1)]), _: 1 },
                                    8,
                                    ['loading']
                                )),
                                [[D]]
                            ),
                        ],
                        4
                    ),
                ]),
                default: a(() => [
                    v(
                        (m(),
                        _(
                            c,
                            { class: 'ba-table-form-scrollbar' },
                            {
                                default: a(() => [
                                    w(
                                        'div',
                                        {
                                            class: I(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                            style: C(e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'),
                                        },
                                        [
                                            e.baTable.form.loading
                                                ? P('v-if', !0)
                                                : (m(),
                                                  _(
                                                      b,
                                                      {
                                                          key: 0,
                                                          ref: 'formRef',
                                                          onKeyup: l[1] || (l[1] = N((o) => e.submitForm(), ['enter'])),
                                                          model: e.baTable.form.items,
                                                          'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                          'label-width': e.baTable.form.labelWidth + 'px',
                                                          rules: e.rules,
                                                      },
                                                      {
                                                          default: a(() => [
                                                              t(
                                                                  d,
                                                                  { label: e.t('shop.topic.User ID') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o, y
                                                                          return [
                                                                              t(
                                                                                  n,
                                                                                  {
                                                                                      'model-value':
                                                                                          ((o = e.baTable.form.items) == null
                                                                                              ? void 0
                                                                                              : o.shop_user_id) ??
                                                                                          ((y = e.baTable.form.items) == null ? void 0 : y.user_id) ??
                                                                                          '',
                                                                                      disabled: '',
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ['model-value']
                                                                              ),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              t(
                                                                  d,
                                                                  { label: e.t('shop.topic.User name') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [
                                                                              t(
                                                                                  n,
                                                                                  {
                                                                                      'model-value':
                                                                                          ((o = e.baTable.form.items) == null
                                                                                              ? void 0
                                                                                              : o.username) ?? '',
                                                                                      disabled: '',
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ['model-value']
                                                                              ),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              t(
                                                                  d,
                                                                  { label: e.t('shop.topic.nickname') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [
                                                                              t(
                                                                                  n,
                                                                                  {
                                                                                      'model-value':
                                                                                          ((o = e.baTable.form.items) == null
                                                                                              ? void 0
                                                                                              : o.nickname) ?? '',
                                                                                      disabled: '',
                                                                                  },
                                                                                  null,
                                                                                  8,
                                                                                  ['model-value']
                                                                              ),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              t(
                                                                  d,
                                                                  { prop: 'title', label: e.t('shop.topic.topic') },
                                                                  {
                                                                      default: a(() => [
                                                                          t(
                                                                              n,
                                                                              {
                                                                                  modelValue: e.baTable.form.items.title,
                                                                                  'onUpdate:modelValue':
                                                                                      l[0] || (l[0] = (o) => (e.baTable.form.items.title = o)),
                                                                                  type: 'textarea',
                                                                                  rows: 3,
                                                                                  placeholder: e.t('Please input field', {
                                                                                      field: e.t('shop.topic.topic'),
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
                        [[V, e.baTable.form.loading]]
                    ),
                ]),
                _: 1,
            },
            8,
            ['model-value', 'onClose']
        )
    )
}
const G = A(K, [
    ['render', R],
    ['__scopeId', 'data-v-1b7d0dab'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/topic/popupForm.vue'],
])
export { G as default }
