import {
    e as N,
    v as G,
    p as j,
    r as z,
    C as L,
    aA as O,
    aD as R,
    ab as H,
    I as Q,
    ag as W,
    i as X,
    m as p,
    X as Y,
    o as l,
    h as g,
    _ as Z,
    O as f,
    P as u,
    l as _,
    a8 as x,
    a7 as w,
    Z as V,
    Y as A,
    W as y,
    k as U,
    U as h,
    V as I,
} from './vue-Rh7pEvFB.js'
import { A as J, i as $, p as ee, d as te, a as oe } from './add-Bjh6spSm.js'
import { F as ne } from './index-B8bcfeaY.js'
import { u as ae, y as D, ap as P, aq as K, x as M, _ as re } from './index-BfqXFxxp.js'
import { r as le } from './router-00E6osrw.js'
import { b as ie } from './validate-CJqnmgV4.js'
import './index-cU5Tpy6g.js'
import './index-BL7XGxgx.js'
const se = N({
        name: 'routine/config',
        __name: 'index',
        setup(q, { expose: n }) {
            n()
            const { t: m } = G.useI18n(),
                t = ae(),
                C = j(),
                o = z({
                    loading: !0,
                    config: [],
                    remark: '',
                    configGroup: {},
                    activeTab: '',
                    showAddForm: !1,
                    rules: {},
                    form: {},
                    quickEntrance: {},
                    formKey: D(),
                }),
                v = () => {
                    $()
                        .then((d) => {
                            ;(o.config = d.data.list),
                                (o.remark = d.data.remark),
                                (o.configGroup = d.data.configGroup),
                                (o.quickEntrance = d.data.quickEntrance),
                                (o.loading = !1)
                            for (const s in o.configGroup) {
                                o.activeTab = s
                                break
                            }
                            let i = {},
                                a = {}
                            for (const s in o.config)
                                for (const r in o.config[s].list) {
                                    if (o.config[s].list[r].rule) {
                                        let b = o.config[s].list[r].rule.split(','),
                                            e = []
                                        b.forEach((T) => {
                                            e.push(ie({ name: T, title: o.config[s].list[r].title }))
                                        }),
                                            (a = Object.assign(a, { [o.config[s].list[r].name]: e }))
                                    }
                                    i[o.config[s].list[r].name] =
                                        o.config[s].list[r].type == 'number' ? parseFloat(o.config[s].list[r].value) : o.config[s].list[r].value
                                }
                            ;(o.form = i), (o.rules = a), (o.formKey = D())
                        })
                        .catch(() => {
                            o.loading = !1
                        })
                },
                E = (d) => {
                    if (d == 'add_config') return (o.showAddForm = !0), !1
                },
                k = () => {
                    C.value &&
                        C.value.validate((d) => {
                            if (d) {
                                const i = {}
                                for (const a in o.config)
                                    if (a == o.activeTab)
                                        for (const s in o.config[a].list) i[o.config[a].list[s].name] = o.form[o.config[a].list[s].name] ?? ''
                                ee('edit', i).then(() => {
                                    for (const a in t.$state) i[a] && t.$state[a] != i[a] && (t.$state[a] = i[a])
                                    i.backend_entrance &&
                                        i.backend_entrance != M &&
                                        (window.open(window.location.href.replace(M, i.backend_entrance)), window.close())
                                })
                            }
                        })
                },
                F = (d) => {
                    te([d.id]).then(() => {
                        v()
                    })
                },
                S = () => {
                    if (!o.form.smtp_server || !o.form.smtp_port || !o.form.smtp_user || !o.form.smtp_pass || !o.form.smtp_sender_mail)
                        return Q({ type: 'error', message: m('routine.config.Please enter the correct mail configuration') }), !1
                    W.prompt(m('routine.config.Please enter the recipient email address'), m('routine.config.Test mail sending'), {
                        confirmButtonText: m('routine.config.send out'),
                        cancelButtonText: m('Cancel'),
                        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                        inputErrorMessage: m('routine.config.Please enter the correct email address'),
                        beforeClose: (d, i, a) => {
                            d === 'confirm'
                                ? ((i.confirmButtonLoading = !0),
                                  (i.confirmButtonText = m('routine.config.Sending')),
                                  oe(o.form, i.inputValue)
                                      .then(() => {
                                          a()
                                      })
                                      .catch(() => {
                                          a()
                                      }))
                                : a()
                        },
                    })
                }
            L(() => {
                v(), P()
            }),
                O(() => {
                    P()
                }),
                R(() => {
                    K()
                }),
                H(() => {
                    K()
                })
            const B = {
                t: m,
                siteConfig: t,
                formRef: C,
                state: o,
                getIndex: v,
                onBeforeLeave: E,
                onSubmit: k,
                onDelConfig: F,
                onTestSendMail: S,
                get isEmpty() {
                    return X
                },
                AddFrom: J,
                FormItem: ne,
                get routePush() {
                    return le
                },
            }
            return Object.defineProperty(B, '__isScriptSetup', { enumerable: !1, value: !0 }), B
        },
    }),
    de = { class: 'default-main' },
    ue = { class: 'config-form-item-name' },
    ce = { class: 'del-config-form-item' },
    fe = { key: 0, class: 'send-test-mail' },
    me = ['onClick']
function pe(q, n, m, t, C, o) {
    const v = p('Icon'),
        E = p('el-popconfirm'),
        k = p('el-button'),
        F = p('el-tab-pane'),
        S = p('el-tabs'),
        B = p('el-form'),
        d = p('el-col'),
        i = p('el-card'),
        a = p('el-row'),
        s = Y('loading')
    return (
        l(),
        g('div', de, [
            Z(
                (l(),
                f(
                    a,
                    { gutter: 20 },
                    {
                        default: u(() => [
                            _(
                                d,
                                { class: 'xs-mb-20', xs: 24, sm: 16 },
                                {
                                    default: u(() => [
                                        t.state.loading
                                            ? y('v-if', !0)
                                            : (l(),
                                              f(
                                                  B,
                                                  {
                                                      ref: 'formRef',
                                                      onSubmit: n[7] || (n[7] = w(() => {}, ['prevent'])),
                                                      onKeyup: n[8] || (n[8] = x((r) => t.onSubmit(), ['enter'])),
                                                      model: t.state.form,
                                                      rules: t.state.rules,
                                                      'label-position': 'top',
                                                      key: t.state.formKey,
                                                  },
                                                  {
                                                      default: u(() => [
                                                          _(
                                                              S,
                                                              {
                                                                  modelValue: t.state.activeTab,
                                                                  'onUpdate:modelValue': n[6] || (n[6] = (r) => (t.state.activeTab = r)),
                                                                  type: 'border-card',
                                                                  'before-leave': t.onBeforeLeave,
                                                              },
                                                              {
                                                                  default: u(() => [
                                                                      (l(!0),
                                                                      g(
                                                                          V,
                                                                          null,
                                                                          A(
                                                                              t.state.config,
                                                                              (r, b) => (
                                                                                  l(),
                                                                                  f(
                                                                                      F,
                                                                                      { class: 'config-tab-pane', key: b, name: b, label: r.title },
                                                                                      {
                                                                                          default: u(() => [
                                                                                              (l(!0),
                                                                                              g(
                                                                                                  V,
                                                                                                  null,
                                                                                                  A(
                                                                                                      r.list,
                                                                                                      (e, T) => (
                                                                                                          l(),
                                                                                                          g(
                                                                                                              'div',
                                                                                                              { class: 'config-form-item', key: T },
                                                                                                              [
                                                                                                                  e.group == t.state.activeTab
                                                                                                                      ? (l(),
                                                                                                                        g(
                                                                                                                            V,
                                                                                                                            { key: 0 },
                                                                                                                            [
                                                                                                                                e.type == 'number'
                                                                                                                                    ? (l(),
                                                                                                                                      f(
                                                                                                                                          t.FormItem,
                                                                                                                                          {
                                                                                                                                              label: e.title,
                                                                                                                                              type: e.type,
                                                                                                                                              modelValue:
                                                                                                                                                  t
                                                                                                                                                      .state
                                                                                                                                                      .form[
                                                                                                                                                      e
                                                                                                                                                          .name
                                                                                                                                                  ],
                                                                                                                                              'onUpdate:modelValue':
                                                                                                                                                  (
                                                                                                                                                      c
                                                                                                                                                  ) =>
                                                                                                                                                      (t.state.form[
                                                                                                                                                          e.name
                                                                                                                                                      ] =
                                                                                                                                                          c),
                                                                                                                                              modelModifiers:
                                                                                                                                                  {
                                                                                                                                                      number: !0,
                                                                                                                                                  },
                                                                                                                                              attr: {
                                                                                                                                                  prop: e.name,
                                                                                                                                                  ...e.extend,
                                                                                                                                              },
                                                                                                                                              'input-attr':
                                                                                                                                                  {
                                                                                                                                                      ...e.input_extend,
                                                                                                                                                  },
                                                                                                                                              tip: e.tip,
                                                                                                                                              key:
                                                                                                                                                  'number-' +
                                                                                                                                                  e.id,
                                                                                                                                          },
                                                                                                                                          null,
                                                                                                                                          8,
                                                                                                                                          [
                                                                                                                                              'label',
                                                                                                                                              'type',
                                                                                                                                              'modelValue',
                                                                                                                                              'onUpdate:modelValue',
                                                                                                                                              'attr',
                                                                                                                                              'input-attr',
                                                                                                                                              'tip',
                                                                                                                                          ]
                                                                                                                                      ))
                                                                                                                                    : e.type ==
                                                                                                                                        'editor'
                                                                                                                                      ? (l(),
                                                                                                                                        g(
                                                                                                                                            V,
                                                                                                                                            {
                                                                                                                                                key: 1,
                                                                                                                                            },
                                                                                                                                            [
                                                                                                                                                y(
                                                                                                                                                    ' 富文本在dialog内全屏编辑器时必须拥有很高的z-index，此处选择单独为editor设定较小的z-index '
                                                                                                                                                ),
                                                                                                                                                (l(),
                                                                                                                                                f(
                                                                                                                                                    t.FormItem,
                                                                                                                                                    {
                                                                                                                                                        label: e.title,
                                                                                                                                                        type: e.type,
                                                                                                                                                        onKeyup:
                                                                                                                                                            [
                                                                                                                                                                n[0] ||
                                                                                                                                                                    (n[0] =
                                                                                                                                                                        x(
                                                                                                                                                                            w(() => {}, [
                                                                                                                                                                                'stop',
                                                                                                                                                                            ]),
                                                                                                                                                                            [
                                                                                                                                                                                'enter',
                                                                                                                                                                            ]
                                                                                                                                                                        )),
                                                                                                                                                                n[1] ||
                                                                                                                                                                    (n[1] =
                                                                                                                                                                        x(
                                                                                                                                                                            w(
                                                                                                                                                                                (
                                                                                                                                                                                    c
                                                                                                                                                                                ) =>
                                                                                                                                                                                    t.onSubmit(),
                                                                                                                                                                                [
                                                                                                                                                                                    'ctrl',
                                                                                                                                                                                ]
                                                                                                                                                                            ),
                                                                                                                                                                            [
                                                                                                                                                                                'enter',
                                                                                                                                                                            ]
                                                                                                                                                                        )),
                                                                                                                                                            ],
                                                                                                                                                        modelValue:
                                                                                                                                                            t
                                                                                                                                                                .state
                                                                                                                                                                .form[
                                                                                                                                                                e
                                                                                                                                                                    .name
                                                                                                                                                            ],
                                                                                                                                                        'onUpdate:modelValue':
                                                                                                                                                            (
                                                                                                                                                                c
                                                                                                                                                            ) =>
                                                                                                                                                                (t.state.form[
                                                                                                                                                                    e.name
                                                                                                                                                                ] =
                                                                                                                                                                    c),
                                                                                                                                                        attr: {
                                                                                                                                                            prop: e.name,
                                                                                                                                                            ...e.extend,
                                                                                                                                                        },
                                                                                                                                                        'input-attr':
                                                                                                                                                            {
                                                                                                                                                                style: {
                                                                                                                                                                    zIndex: 99,
                                                                                                                                                                },
                                                                                                                                                                ...e.input_extend,
                                                                                                                                                            },
                                                                                                                                                        tip: e.tip,
                                                                                                                                                        key:
                                                                                                                                                            'editor-' +
                                                                                                                                                            e.id,
                                                                                                                                                    },
                                                                                                                                                    null,
                                                                                                                                                    8,
                                                                                                                                                    [
                                                                                                                                                        'label',
                                                                                                                                                        'type',
                                                                                                                                                        'modelValue',
                                                                                                                                                        'onUpdate:modelValue',
                                                                                                                                                        'attr',
                                                                                                                                                        'input-attr',
                                                                                                                                                        'tip',
                                                                                                                                                    ]
                                                                                                                                                )),
                                                                                                                                            ],
                                                                                                                                            2112
                                                                                                                                        ))
                                                                                                                                      : e.type ==
                                                                                                                                          'textarea'
                                                                                                                                        ? (l(),
                                                                                                                                          f(
                                                                                                                                              t.FormItem,
                                                                                                                                              {
                                                                                                                                                  label: e.title,
                                                                                                                                                  type: e.type,
                                                                                                                                                  onKeyup:
                                                                                                                                                      [
                                                                                                                                                          n[2] ||
                                                                                                                                                              (n[2] =
                                                                                                                                                                  x(
                                                                                                                                                                      w(() => {}, [
                                                                                                                                                                          'stop',
                                                                                                                                                                      ]),
                                                                                                                                                                      [
                                                                                                                                                                          'enter',
                                                                                                                                                                      ]
                                                                                                                                                                  )),
                                                                                                                                                          n[3] ||
                                                                                                                                                              (n[3] =
                                                                                                                                                                  x(
                                                                                                                                                                      w(
                                                                                                                                                                          (
                                                                                                                                                                              c
                                                                                                                                                                          ) =>
                                                                                                                                                                              t.onSubmit(),
                                                                                                                                                                          [
                                                                                                                                                                              'ctrl',
                                                                                                                                                                          ]
                                                                                                                                                                      ),
                                                                                                                                                                      [
                                                                                                                                                                          'enter',
                                                                                                                                                                      ]
                                                                                                                                                                  )),
                                                                                                                                                      ],
                                                                                                                                                  modelValue:
                                                                                                                                                      t
                                                                                                                                                          .state
                                                                                                                                                          .form[
                                                                                                                                                          e
                                                                                                                                                              .name
                                                                                                                                                      ],
                                                                                                                                                  'onUpdate:modelValue':
                                                                                                                                                      (
                                                                                                                                                          c
                                                                                                                                                      ) =>
                                                                                                                                                          (t.state.form[
                                                                                                                                                              e.name
                                                                                                                                                          ] =
                                                                                                                                                              c),
                                                                                                                                                  attr: {
                                                                                                                                                      prop: e.name,
                                                                                                                                                      ...e.extend,
                                                                                                                                                  },
                                                                                                                                                  'input-attr':
                                                                                                                                                      {
                                                                                                                                                          rows: 3,
                                                                                                                                                          ...e.input_extend,
                                                                                                                                                      },
                                                                                                                                                  tip: e.tip,
                                                                                                                                                  key:
                                                                                                                                                      'textarea-' +
                                                                                                                                                      e.id,
                                                                                                                                              },
                                                                                                                                              null,
                                                                                                                                              8,
                                                                                                                                              [
                                                                                                                                                  'label',
                                                                                                                                                  'type',
                                                                                                                                                  'modelValue',
                                                                                                                                                  'onUpdate:modelValue',
                                                                                                                                                  'attr',
                                                                                                                                                  'input-attr',
                                                                                                                                                  'tip',
                                                                                                                                              ]
                                                                                                                                          ))
                                                                                                                                        : (l(),
                                                                                                                                          f(
                                                                                                                                              t.FormItem,
                                                                                                                                              {
                                                                                                                                                  label: e.title,
                                                                                                                                                  type: e.type,
                                                                                                                                                  modelValue:
                                                                                                                                                      t
                                                                                                                                                          .state
                                                                                                                                                          .form[
                                                                                                                                                          e
                                                                                                                                                              .name
                                                                                                                                                      ],
                                                                                                                                                  'onUpdate:modelValue':
                                                                                                                                                      (
                                                                                                                                                          c
                                                                                                                                                      ) =>
                                                                                                                                                          (t.state.form[
                                                                                                                                                              e.name
                                                                                                                                                          ] =
                                                                                                                                                              c),
                                                                                                                                                  attr: {
                                                                                                                                                      prop: e.name,
                                                                                                                                                      ...e.extend,
                                                                                                                                                  },
                                                                                                                                                  'input-attr':
                                                                                                                                                      t.isEmpty(
                                                                                                                                                          e.content
                                                                                                                                                      )
                                                                                                                                                          ? e.input_extend
                                                                                                                                                          : {
                                                                                                                                                                content:
                                                                                                                                                                    e.content,
                                                                                                                                                                ...e.input_extend,
                                                                                                                                                            },
                                                                                                                                                  tip: e.tip,
                                                                                                                                                  key:
                                                                                                                                                      'other-' +
                                                                                                                                                      e.id,
                                                                                                                                              },
                                                                                                                                              null,
                                                                                                                                              8,
                                                                                                                                              [
                                                                                                                                                  'label',
                                                                                                                                                  'type',
                                                                                                                                                  'modelValue',
                                                                                                                                                  'onUpdate:modelValue',
                                                                                                                                                  'attr',
                                                                                                                                                  'input-attr',
                                                                                                                                                  'tip',
                                                                                                                                              ]
                                                                                                                                          )),
                                                                                                                                U(
                                                                                                                                    'div',
                                                                                                                                    ue,
                                                                                                                                    '$' + h(e.name),
                                                                                                                                    1
                                                                                                                                ),
                                                                                                                                U('div', ce, [
                                                                                                                                    e.allow_del
                                                                                                                                        ? (l(),
                                                                                                                                          f(
                                                                                                                                              E,
                                                                                                                                              {
                                                                                                                                                  key: 0,
                                                                                                                                                  onConfirm:
                                                                                                                                                      (
                                                                                                                                                          c
                                                                                                                                                      ) =>
                                                                                                                                                          t.onDelConfig(
                                                                                                                                                              e
                                                                                                                                                          ),
                                                                                                                                                  confirmButtonText:
                                                                                                                                                      t.t(
                                                                                                                                                          'Delete'
                                                                                                                                                      ),
                                                                                                                                                  title: t.t(
                                                                                                                                                      'routine.config.Are you sure to delete the configuration item?'
                                                                                                                                                  ),
                                                                                                                                              },
                                                                                                                                              {
                                                                                                                                                  reference:
                                                                                                                                                      u(
                                                                                                                                                          () => [
                                                                                                                                                              _(
                                                                                                                                                                  v,
                                                                                                                                                                  {
                                                                                                                                                                      class: 'close-icon',
                                                                                                                                                                      size: '15',
                                                                                                                                                                      name: 'el-icon-Close',
                                                                                                                                                                  }
                                                                                                                                                              ),
                                                                                                                                                          ]
                                                                                                                                                      ),
                                                                                                                                                  _: 2,
                                                                                                                                              },
                                                                                                                                              1032,
                                                                                                                                              [
                                                                                                                                                  'onConfirm',
                                                                                                                                                  'confirmButtonText',
                                                                                                                                                  'title',
                                                                                                                                              ]
                                                                                                                                          ))
                                                                                                                                        : y(
                                                                                                                                              'v-if',
                                                                                                                                              !0
                                                                                                                                          ),
                                                                                                                                ]),
                                                                                                                            ],
                                                                                                                            64
                                                                                                                        ))
                                                                                                                      : y('v-if', !0),
                                                                                                              ]
                                                                                                          )
                                                                                                      )
                                                                                                  ),
                                                                                                  128
                                                                                              )),
                                                                                              r.name == 'mail'
                                                                                                  ? (l(),
                                                                                                    g('div', fe, [
                                                                                                        _(
                                                                                                            k,
                                                                                                            {
                                                                                                                onClick:
                                                                                                                    n[4] ||
                                                                                                                    (n[4] = (e) =>
                                                                                                                        t.onTestSendMail()),
                                                                                                            },
                                                                                                            {
                                                                                                                default: u(() => [
                                                                                                                    I(
                                                                                                                        h(
                                                                                                                            t.t(
                                                                                                                                'routine.config.Test mail sending'
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        1
                                                                                                                    ),
                                                                                                                ]),
                                                                                                                _: 1,
                                                                                                            }
                                                                                                        ),
                                                                                                    ]))
                                                                                                  : y('v-if', !0),
                                                                                              _(
                                                                                                  k,
                                                                                                  {
                                                                                                      type: 'primary',
                                                                                                      onClick: n[5] || (n[5] = (e) => t.onSubmit()),
                                                                                                  },
                                                                                                  { default: u(() => [I(h(t.t('Save')), 1)]), _: 1 }
                                                                                              ),
                                                                                          ]),
                                                                                          _: 2,
                                                                                      },
                                                                                      1032,
                                                                                      ['name', 'label']
                                                                                  )
                                                                              )
                                                                          ),
                                                                          128
                                                                      )),
                                                                      _(
                                                                          F,
                                                                          {
                                                                              name: 'add_config',
                                                                              class: 'config-tab-pane config-tab-pane-add',
                                                                              label: t.t('routine.config.Add configuration item'),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label']
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
                                                  ['model', 'rules']
                                              )),
                                    ]),
                                    _: 1,
                                }
                            ),
                            _(
                                d,
                                { xs: 24, sm: 8 },
                                {
                                    default: u(() => [
                                        _(
                                            i,
                                            { header: t.t('routine.config.Quick configuration entry') },
                                            {
                                                default: u(() => [
                                                    (l(!0),
                                                    g(
                                                        V,
                                                        null,
                                                        A(
                                                            t.state.quickEntrance,
                                                            (r, b) => (
                                                                l(),
                                                                f(
                                                                    k,
                                                                    { class: 'config_quick_entrance', key: b },
                                                                    {
                                                                        default: u(() => [
                                                                            U(
                                                                                'div',
                                                                                { onClick: (e) => t.routePush({ name: r.value }) },
                                                                                h(r.key),
                                                                                9,
                                                                                me
                                                                            ),
                                                                        ]),
                                                                        _: 2,
                                                                    },
                                                                    1024
                                                                )
                                                            )
                                                        ),
                                                        128
                                                    )),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            ['header']
                                        ),
                                    ]),
                                    _: 1,
                                }
                            ),
                        ]),
                        _: 1,
                    }
                )),
                [[s, t.state.loading]]
            ),
            t.state.loading
                ? y('v-if', !0)
                : (l(),
                  f(
                      t.AddFrom,
                      {
                          key: 0,
                          modelValue: t.state.showAddForm,
                          'onUpdate:modelValue': n[9] || (n[9] = (r) => (t.state.showAddForm = r)),
                          'config-group': t.state.configGroup,
                      },
                      null,
                      8,
                      ['modelValue', 'config-group']
                  )),
        ])
    )
}
const Ve = re(se, [
    ['render', pe],
    ['__scopeId', 'data-v-115edc1c'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/routine/config/index.vue'],
])
export { Ve as default }
