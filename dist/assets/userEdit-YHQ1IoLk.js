import {
    e as N,
    v as S,
    am as j,
    p as z,
    m as c,
    X as h,
    o as s,
    O as p,
    P as t,
    _ as y,
    k,
    j as D,
    $ as A,
    a8 as B,
    l as i,
    V as u,
    U as v,
    h as F,
    Z as K,
    Y as L,
    W,
} from './vue-Rh7pEvFB.js'
import { e as O, _ as P } from './index-C3vonoRT.js'
const R = N({
        __name: 'userEdit',
        setup(U, { expose: r }) {
            r()
            const w = O(),
                { t: e } = S.useI18n(),
                o = j('baTable'),
                C = z(),
                n = () => (o.form.items ? (Array.isArray(o.form.items.topics) || (o.form.items.topics = []), o.form.items.topics) : []),
                g = {
                    config: w,
                    t: e,
                    baTable: o,
                    formRef: C,
                    getTopics: n,
                    addTopicInput: () => {
                        n().unshift({ id: 0, title: '', __tempKey: `new-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` })
                    },
                    removeTopic: (m) => {
                        if (!o.form.items) return
                        n().splice(Number(m), 1)
                    },
                    submitForm: () => {
                        if (!o.form.items || !o.form.items.user) return
                        const m = (o.form.items.topics || []).map((f) => ({ id: f.id ? Number(f.id) : 0, title: f.title })),
                            T = { id: o.form.items.user.id, topic: m }
                        ;(o.form.submitLoading = !0),
                            o.api
                                .postData('userEdit', T)
                                .then(() => {
                                    o.onTableHeaderAction('refresh', {}), o.toggleForm()
                                })
                                .finally(() => {
                                    o.form.submitLoading = !1
                                })
                    },
                }
            return Object.defineProperty(g, '__isScriptSetup', { enumerable: !1, value: !0 }), g
        },
    }),
    H = { class: 'title' },
    M = { class: 'topic-edit-row' }
function X(U, r, w, e, o, C) {
    const n = c('el-input'),
        d = c('el-form-item'),
        b = c('el-button'),
        V = c('el-form'),
        g = c('el-scrollbar'),
        m = c('el-dialog'),
        T = h('drag'),
        f = h('zoom'),
        E = h('loading'),
        I = h('blur')
    return (
        s(),
        p(
            m,
            {
                class: 'ba-operate-dialog',
                'close-on-click-modal': !1,
                'model-value': e.baTable.form.operate === 'UserEdit',
                onClose: e.baTable.toggleForm,
            },
            {
                header: t(() => [
                    y((s(), F('div', H, [u(v(e.t('Edit')), 1)])), [
                        [T, ['.ba-operate-dialog', '.el-dialog__header']],
                        [f, '.ba-operate-dialog'],
                    ]),
                ]),
                footer: t(() => [
                    k(
                        'div',
                        { style: D('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                        [
                            i(b, { onClick: r[2] || (r[2] = (_) => e.baTable.toggleForm('')) }, { default: t(() => [u(v(e.t('Cancel')), 1)]), _: 1 }),
                            y(
                                (s(),
                                p(
                                    b,
                                    { loading: e.baTable.form.submitLoading, onClick: r[3] || (r[3] = (_) => e.submitForm()), type: 'primary' },
                                    { default: t(() => [u(v(e.t('Save')), 1)]), _: 1 },
                                    8,
                                    ['loading']
                                )),
                                [[I]]
                            ),
                        ],
                        4
                    ),
                ]),
                default: t(() => [
                    y(
                        (s(),
                        p(
                            g,
                            { class: 'ba-table-form-scrollbar' },
                            {
                                default: t(() => [
                                    k(
                                        'div',
                                        {
                                            class: A(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                            style: D(e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'),
                                        },
                                        [
                                            e.baTable.form.loading
                                                ? W('v-if', !0)
                                                : (s(),
                                                  p(
                                                      V,
                                                      {
                                                          key: 0,
                                                          ref: 'formRef',
                                                          onKeyup: r[1] || (r[1] = B((_) => e.submitForm(), ['enter'])),
                                                          model: e.baTable.form.items,
                                                          'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                          'label-width': e.baTable.form.labelWidth + 'px',
                                                      },
                                                      {
                                                          default: t(() => {
                                                              var _
                                                              return [
                                                                  i(
                                                                      d,
                                                                      { label: e.t('shop.topic.User ID') },
                                                                      {
                                                                          default: t(() => {
                                                                              var a, l
                                                                              return [
                                                                                  i(
                                                                                      n,
                                                                                      {
                                                                                          'model-value':
                                                                                              ((l =
                                                                                                  (a = e.baTable.form.items) == null
                                                                                                      ? void 0
                                                                                                      : a.user) == null
                                                                                                  ? void 0
                                                                                                  : l.id) ?? '',
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
                                                                  i(
                                                                      d,
                                                                      { label: e.t('shop.topic.User name') },
                                                                      {
                                                                          default: t(() => {
                                                                              var a, l
                                                                              return [
                                                                                  i(
                                                                                      n,
                                                                                      {
                                                                                          'model-value':
                                                                                              ((l =
                                                                                                  (a = e.baTable.form.items) == null
                                                                                                      ? void 0
                                                                                                      : a.user) == null
                                                                                                  ? void 0
                                                                                                  : l.username) ?? '',
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
                                                                  i(
                                                                      d,
                                                                      { label: e.t('shop.topic.nickname') },
                                                                      {
                                                                          default: t(() => {
                                                                              var a, l
                                                                              return [
                                                                                  i(
                                                                                      n,
                                                                                      {
                                                                                          'model-value':
                                                                                              ((l =
                                                                                                  (a = e.baTable.form.items) == null
                                                                                                      ? void 0
                                                                                                      : a.user) == null
                                                                                                  ? void 0
                                                                                                  : l.nickname) ?? '',
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
                                                                  i(
                                                                      d,
                                                                      { label: e.t('Operate') },
                                                                      {
                                                                          default: t(() => [
                                                                              i(
                                                                                  b,
                                                                                  {
                                                                                      type: 'primary',
                                                                                      plain: '',
                                                                                      onClick: r[0] || (r[0] = (a) => e.addTopicInput()),
                                                                                  },
                                                                                  { default: t(() => [u(v(e.t('Add')), 1)]), _: 1 }
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['label']
                                                                  ),
                                                                  (s(!0),
                                                                  F(
                                                                      K,
                                                                      null,
                                                                      L(
                                                                          ((_ = e.baTable.form.items) == null ? void 0 : _.topics) || [],
                                                                          (a, l) => (
                                                                              s(),
                                                                              p(
                                                                                  d,
                                                                                  {
                                                                                      key: a.id || a.__tempKey || l,
                                                                                      label: `${e.t('shop.topic.topic')} #${Number(l) + 1}`,
                                                                                  },
                                                                                  {
                                                                                      default: t(() => [
                                                                                          k('div', M, [
                                                                                              i(
                                                                                                  n,
                                                                                                  {
                                                                                                      modelValue: a.title,
                                                                                                      'onUpdate:modelValue': (x) => (a.title = x),
                                                                                                      type: 'textarea',
                                                                                                      rows: 2,
                                                                                                      placeholder: e.t('Please input field', {
                                                                                                          field: e.t('shop.topic.topic'),
                                                                                                      }),
                                                                                                  },
                                                                                                  null,
                                                                                                  8,
                                                                                                  ['modelValue', 'onUpdate:modelValue', 'placeholder']
                                                                                              ),
                                                                                              i(
                                                                                                  b,
                                                                                                  {
                                                                                                      type: 'danger',
                                                                                                      plain: '',
                                                                                                      onClick: (x) => e.removeTopic(l),
                                                                                                  },
                                                                                                  {
                                                                                                      default: t(() => [u(v(e.t('Delete')), 1)]),
                                                                                                      _: 2,
                                                                                                  },
                                                                                                  1032,
                                                                                                  ['onClick']
                                                                                              ),
                                                                                          ]),
                                                                                      ]),
                                                                                      _: 2,
                                                                                  },
                                                                                  1032,
                                                                                  ['label']
                                                                              )
                                                                          )
                                                                      ),
                                                                      128
                                                                  )),
                                                              ]
                                                          }),
                                                          _: 1,
                                                      },
                                                      8,
                                                      ['model', 'label-position', 'label-width']
                                                  )),
                                        ],
                                        6
                                    ),
                                ]),
                                _: 1,
                            }
                        )),
                        [[E, e.baTable.form.loading]]
                    ),
                ]),
                _: 1,
            },
            8,
            ['model-value', 'onClose']
        )
    )
}
const q = P(R, [
    ['render', X],
    ['__scopeId', 'data-v-a1beac10'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/topic/userEdit.vue'],
])
export { q as default }
