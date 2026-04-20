import {
    e as z,
    v as B,
    am as L,
    p as A,
    D as P,
    ai as U,
    m as _,
    X as j,
    o as s,
    O as p,
    P as t,
    _ as F,
    k as v,
    j as J,
    $ as W,
    a8 as E,
    l as d,
    h as T,
    Z as I,
    Y as x,
    V as h,
    U as y,
    W as K,
} from './vue-Rh7pEvFB.js'
import { e as O, _ as H } from './index-BinDduO1.js'
const M = z({
        __name: 'popupForm',
        setup(V, { expose: c }) {
            c()
            const D = O(),
                { t: e } = B.useI18n(),
                i = L('baTable'),
                m = A(null),
                r = A(new Set()),
                b = () => {
                    var w
                    const o = (w = i.form.items) == null ? void 0 : w.user
                    if (!o) {
                        ;(m.value = null), (r.value = new Set())
                        return
                    }
                    const n = Array.isArray(o.service_type) && o.service_type.length > 0 ? o.service_type[0] : null
                    m.value = n ? Number(n.id) : null
                    const f = Array.isArray(o.job_type) ? o.job_type : []
                    r.value = new Set(f.map((N) => Number(N.id)))
                },
                k = (o) => {
                    m.value = Number(o)
                },
                S = (o) => {
                    const n = Number(o)
                    r.value.has(n) ? r.value.delete(n) : r.value.add(n)
                },
                C = () => {
                    var f
                    const o = (f = i.form.items) == null ? void 0 : f.user
                    if (!o) return
                    if (!m.value) {
                        U.warning(e('Please select field', { field: e('shop.jobType.serviceType') }))
                        return
                    }
                    const n = { id: o.id, service_type_id: m.value, job_type_ids: Array.from(r.value) }
                    ;(i.form.submitLoading = !0),
                        i.api
                            .postData('edit', n)
                            .then(() => {
                                i.onTableHeaderAction('refresh', {}), i.toggleForm()
                            })
                            .finally(() => {
                                i.form.submitLoading = !1
                            })
                }
            P(
                () => i.form.items,
                (o) => {
                    o && b()
                }
            )
            const g = {
                config: D,
                t: e,
                baTable: i,
                selectedServiceTypeId: m,
                selectedJobTypeIds: r,
                initSelectedData: b,
                selectServiceType: k,
                toggleJobType: S,
                submitForm: C,
            }
            return Object.defineProperty(g, '__isScriptSetup', { enumerable: !1, value: !0 }), g
        },
    }),
    X = { class: 'title' },
    Y = { class: 'tag-wrap' },
    Z = { class: 'job-type-wrap' },
    q = { class: 'job-category-title' },
    G = { class: 'tag-wrap' }
function Q(V, c, D, e, i, m) {
    const r = _('el-input'),
        b = _('el-form-item'),
        k = _('el-tag'),
        S = _('el-form'),
        C = _('el-scrollbar'),
        g = _('el-button'),
        o = _('el-dialog'),
        n = j('drag'),
        f = j('zoom'),
        w = j('loading'),
        N = j('blur')
    return (
        s(),
        p(
            o,
            {
                class: 'ba-operate-dialog',
                'close-on-click-modal': !1,
                'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                onClose: e.baTable.toggleForm,
            },
            {
                header: t(() => [
                    F((s(), T('div', X, [h(y(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                        [n, ['.ba-operate-dialog', '.el-dialog__header']],
                        [f, '.ba-operate-dialog'],
                    ]),
                ]),
                footer: t(() => [
                    v(
                        'div',
                        { style: J('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                        [
                            d(g, { onClick: c[1] || (c[1] = (l) => e.baTable.toggleForm('')) }, { default: t(() => [h(y(e.t('Cancel')), 1)]), _: 1 }),
                            F(
                                (s(),
                                p(
                                    g,
                                    { loading: e.baTable.form.submitLoading, onClick: c[2] || (c[2] = (l) => e.submitForm()), type: 'primary' },
                                    { default: t(() => [h(y(e.t('Save')), 1)]), _: 1 },
                                    8,
                                    ['loading']
                                )),
                                [[N]]
                            ),
                        ],
                        4
                    ),
                ]),
                default: t(() => [
                    F(
                        (s(),
                        p(
                            C,
                            { class: 'ba-table-form-scrollbar' },
                            {
                                default: t(() => [
                                    v(
                                        'div',
                                        {
                                            class: W(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                            style: J(e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'),
                                        },
                                        [
                                            e.baTable.form.loading
                                                ? K('v-if', !0)
                                                : (s(),
                                                  p(
                                                      S,
                                                      {
                                                          key: 0,
                                                          onKeyup: c[0] || (c[0] = E((l) => e.submitForm(), ['enter'])),
                                                          model: e.baTable.form.items,
                                                          'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                          'label-width': e.baTable.form.labelWidth + 'px',
                                                      },
                                                      {
                                                          default: t(() => [
                                                              d(
                                                                  b,
                                                                  { label: e.t('shop.jobType.User ID') },
                                                                  {
                                                                      default: t(() => {
                                                                          var l, a
                                                                          return [
                                                                              d(
                                                                                  r,
                                                                                  {
                                                                                      'model-value':
                                                                                          ((a =
                                                                                              (l = e.baTable.form.items) == null ? void 0 : l.user) ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : a.id) ?? '',
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
                                                              d(
                                                                  b,
                                                                  { label: e.t('shop.jobType.User name') },
                                                                  {
                                                                      default: t(() => {
                                                                          var l, a
                                                                          return [
                                                                              d(
                                                                                  r,
                                                                                  {
                                                                                      'model-value':
                                                                                          ((a =
                                                                                              (l = e.baTable.form.items) == null ? void 0 : l.user) ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : a.username) ?? '',
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
                                                              d(
                                                                  b,
                                                                  { label: e.t('shop.jobType.nickname') },
                                                                  {
                                                                      default: t(() => {
                                                                          var l, a
                                                                          return [
                                                                              d(
                                                                                  r,
                                                                                  {
                                                                                      'model-value':
                                                                                          ((a =
                                                                                              (l = e.baTable.form.items) == null ? void 0 : l.user) ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : a.nickname) ?? '',
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
                                                              d(
                                                                  b,
                                                                  { label: e.t('shop.jobType.serviceType') },
                                                                  {
                                                                      default: t(() => {
                                                                          var l
                                                                          return [
                                                                              v('div', Y, [
                                                                                  (s(!0),
                                                                                  T(
                                                                                      I,
                                                                                      null,
                                                                                      x(
                                                                                          ((l = e.baTable.form.items) == null
                                                                                              ? void 0
                                                                                              : l.service_type) || [],
                                                                                          (a) => (
                                                                                              s(),
                                                                                              p(
                                                                                                  k,
                                                                                                  {
                                                                                                      key: a.id,
                                                                                                      class: 'click-tag',
                                                                                                      type:
                                                                                                          e.selectedServiceTypeId === Number(a.id)
                                                                                                              ? 'success'
                                                                                                              : 'info',
                                                                                                      effect:
                                                                                                          e.selectedServiceTypeId === Number(a.id)
                                                                                                              ? 'dark'
                                                                                                              : 'plain',
                                                                                                      onClick: (u) => e.selectServiceType(a.id),
                                                                                                  },
                                                                                                  { default: t(() => [h(y(a.name), 1)]), _: 2 },
                                                                                                  1032,
                                                                                                  ['type', 'effect', 'onClick']
                                                                                              )
                                                                                          )
                                                                                      ),
                                                                                      128
                                                                                  )),
                                                                              ]),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              d(
                                                                  b,
                                                                  { label: e.t('shop.jobType.JobType') },
                                                                  {
                                                                      default: t(() => {
                                                                          var l
                                                                          return [
                                                                              v('div', Z, [
                                                                                  (s(!0),
                                                                                  T(
                                                                                      I,
                                                                                      null,
                                                                                      x(
                                                                                          ((l = e.baTable.form.items) == null
                                                                                              ? void 0
                                                                                              : l.channel_categories) || [],
                                                                                          (a) => (
                                                                                              s(),
                                                                                              T('div', { class: 'job-category', key: a.id }, [
                                                                                                  v('div', q, y(a.name), 1),
                                                                                                  v('div', G, [
                                                                                                      (s(!0),
                                                                                                      T(
                                                                                                          I,
                                                                                                          null,
                                                                                                          x(
                                                                                                              a.children || [],
                                                                                                              (u) => (
                                                                                                                  s(),
                                                                                                                  p(
                                                                                                                      k,
                                                                                                                      {
                                                                                                                          key: u.id,
                                                                                                                          class: 'click-tag',
                                                                                                                          type: e.selectedJobTypeIds.has(
                                                                                                                              Number(u.id)
                                                                                                                          )
                                                                                                                              ? 'success'
                                                                                                                              : 'info',
                                                                                                                          effect: e.selectedJobTypeIds.has(
                                                                                                                              Number(u.id)
                                                                                                                          )
                                                                                                                              ? 'dark'
                                                                                                                              : 'plain',
                                                                                                                          onClick: (R) =>
                                                                                                                              e.toggleJobType(u.id),
                                                                                                                      },
                                                                                                                      {
                                                                                                                          default: t(() => [
                                                                                                                              h(y(u.name), 1),
                                                                                                                          ]),
                                                                                                                          _: 2,
                                                                                                                      },
                                                                                                                      1032,
                                                                                                                      ['type', 'effect', 'onClick']
                                                                                                                  )
                                                                                                              )
                                                                                                          ),
                                                                                                          128
                                                                                                      )),
                                                                                                  ]),
                                                                                              ])
                                                                                          )
                                                                                      ),
                                                                                      128
                                                                                  )),
                                                                              ]),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                          ]),
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
                        [[w, e.baTable.form.loading]]
                    ),
                ]),
                _: 1,
            },
            8,
            ['model-value', 'onClose']
        )
    )
}
const ae = H(M, [
    ['render', Q],
    ['__scopeId', 'data-v-bcd02fdf'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/jobType/popupForm.vue'],
])
export { ae as default }
