import {
    e as q,
    p as L,
    am as O,
    v as j,
    f as K,
    r as M,
    D as W,
    m as T,
    X as C,
    o as p,
    h as S,
    W as g,
    l as i,
    P as n,
    _ as A,
    O as V,
    k,
    j as R,
    $ as Z,
    a8 as y,
    U as c,
    a7 as E,
    V as I,
    Z as G,
} from './vue-Rh7pEvFB.js'
import { e as J, r as H, f as X, _ as Q } from './index-BBRbF7Py.js'
import { F as Y } from './index--JHPdKE_.js'
import $ from './video-DOmNtNHZ.js'
import { r as ee, b as h } from './validate-D9h_hteB.js'
import './index-tUPoOQPz.js'
import './index-pVkqPv71.js'
import './play-CnVQomD0.js'
const oe = q({
        __name: 'popupForm',
        setup(z, { expose: o }) {
            o()
            const N = J(),
                e = L(),
                r = O('baTable'),
                { t: s } = j.useI18n(),
                f = K({
                    get: () => {
                        const a = r.form.items
                        if (!a) return null
                        const t = [],
                            m = Number(a.province_code),
                            b = Number(a.city_code),
                            d = Number(a.district_code)
                        return (
                            !Number.isNaN(m) && m > 0 && t.push(m),
                            !Number.isNaN(b) && b > 0 && t.push(b),
                            !Number.isNaN(d) && d > 0 && t.push(d),
                            t.length > 0 ? t : null
                        )
                    },
                    set: (a) => {
                        !a || a.length === 0
                            ? ((r.form.items.province_code = null), (r.form.items.city_code = null), (r.form.items.district_code = null))
                            : ((r.form.items.province_code = a[0] ? Number(a[0]) : null),
                              (r.form.items.city_code = a.length > 1 && a[1] ? Number(a[1]) : null),
                              (r.form.items.district_code = a.length > 2 && a[2] ? Number(a[2]) : null))
                    },
                }),
                u = M({
                    username: [
                        h({ name: 'required', title: s('shop.user.User name') }),
                        {
                            validator: (a, t, m) => {
                                if (!t) return m()
                                const b = /^1[3-9]\d{9}$/.test(t),
                                    d = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/.test(t)
                                return b || d ? m() : m(new Error(s('Please enter a valid account or mobile number')))
                            },
                            trigger: 'blur',
                        },
                    ],
                    nickname: [h({ name: 'required', title: s('shop.user.nickname') })],
                    group_id: [h({ name: 'required', message: s('Please select field', { field: s('shop.user.grouping') }) })],
                    email: [h({ name: 'email', title: s('shop.user.email') })],
                    mobile: [h({ name: 'mobile' })],
                    password: [
                        {
                            validator: (a, t, m) => {
                                if (r.form.operate == 'Add') {
                                    if (!t) return m(new Error(s('Please input field', { field: s('shop.user.password') })))
                                } else if (!t) return m()
                                return ee(t) ? m() : m(new Error(s('validate.Please enter the correct password')))
                            },
                            trigger: 'blur',
                        },
                    ],
                }),
                U = (a) => {
                    r.toggleForm(), H.push({ name: a == 'money' ? 'user/moneyLog' : 'user/scoreLog', query: { user_id: r.form.items.id } })
                },
                F = (a) =>
                    Array.isArray(a)
                        ? a.filter((t) => typeof t == 'string' && t.trim() !== '').map((t) => t.trim())
                        : typeof a == 'string'
                          ? a
                                .split(',')
                                .map((t) => t.trim())
                                .filter((t) => t !== '')
                          : [],
                v = async (a) => {
                    a &&
                        (await a.validate((t) => {
                            if (t) {
                                r.form.submitLoading = !0
                                let m = JSON.parse(JSON.stringify(r.form.items))
                                const b = m.profile || {}
                                ;(m.profile = { ...b, media_img: F(b.media_img) }),
                                    r.form.operate === 'Edit' &&
                                        !m.id &&
                                        r.form.operateIds &&
                                        r.form.operateIds.length > 0 &&
                                        (m.id = r.form.operateIds[0]),
                                    r.api
                                        .postData(r.form.operate, m)
                                        .then((d) => {
                                            var _
                                            r.onTableHeaderAction('refresh', {}),
                                                (r.form.submitLoading = !1),
                                                (_ = r.form.operateIds) == null || _.shift(),
                                                r.form.operateIds && r.form.operateIds.length > 0
                                                    ? r.toggleForm('Edit', r.form.operateIds)
                                                    : r.toggleForm()
                                        })
                                        .catch(() => {
                                            r.form.submitLoading = !1
                                        })
                            } else console.warn('表单验证未通过，请检查必填项或格式')
                        }))
                }
            W(
                () => r.form.operate,
                (a) => {
                    ;(u.password[0].required = a == 'Add'), a === 'Add' && r.form.items && (r.form.items.status = 'enable')
                }
            )
            const w = {
                config: N,
                formRef: e,
                baTable: r,
                t: s,
                regionValue: f,
                rules: u,
                changeAccount: U,
                normalizeMediaImg: F,
                submitForm: v,
                get fullUrl() {
                    return X
                },
                FormItem: Y,
                elVideo: $,
            }
            return Object.defineProperty(w, '__isScriptSetup', { enumerable: !1, value: !0 }), w
        },
    }),
    le = { class: 'title' },
    re = { style: { color: '#999', 'font-size': '12px' } }
function ae(z, o, N, e, r, s) {
    const f = T('el-input'),
        u = T('el-form-item'),
        U = T('el-form'),
        F = T('el-scrollbar'),
        v = T('el-button'),
        w = T('el-dialog'),
        a = C('drag'),
        t = C('zoom'),
        m = C('loading'),
        b = C('blur')
    return (
        p(),
        S(
            G,
            null,
            [
                g(' 对话框表单 '),
                i(
                    w,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'destroy-on-close': !0,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                    },
                    {
                        header: n(() => [
                            A((p(), S('div', le, [I(c(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [a, ['.ba-operate-dialog', '.el-dialog__header']],
                                [t, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: n(() => [
                            k(
                                'div',
                                { style: R('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    i(
                                        v,
                                        { onClick: o[21] || (o[21] = (d) => e.baTable.toggleForm('')) },
                                        { default: n(() => [I(c(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    A(
                                        (p(),
                                        V(
                                            v,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: o[22] || (o[22] = (d) => e.submitForm(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: n(() => [
                                                    I(
                                                        c(
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
                                        [[b]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: n(() => [
                            A(
                                (p(),
                                V(
                                    F,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: n(() => [
                                            k(
                                                'div',
                                                {
                                                    class: Z(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                                    style: R(
                                                        e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'
                                                    ),
                                                },
                                                [
                                                    g(
                                                        ' ref 模版引用, ref 是一个特殊的 attribute，和 v-for 章节中提到的 key 类似。它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用 '
                                                    ),
                                                    e.baTable.form.loading
                                                        ? g('v-if', !0)
                                                        : (p(),
                                                          V(
                                                              U,
                                                              {
                                                                  key: 0,
                                                                  ref: 'formRef',
                                                                  onKeyup: o[20] || (o[20] = y((d) => e.submitForm(e.formRef), ['enter'])),
                                                                  model: e.baTable.form.items,
                                                                  'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                                  'label-width': e.baTable.form.labelWidth + 'px',
                                                                  rules: e.rules,
                                                              },
                                                              {
                                                                  default: n(() => {
                                                                      var d, _, B, D
                                                                      return [
                                                                          i(
                                                                              u,
                                                                              { prop: 'username', label: e.t('shop.user.User name') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      i(
                                                                                          f,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.username,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[0] ||
                                                                                                  (o[0] = (l) => (e.baTable.form.items.username = l)),
                                                                                              type: 'string',
                                                                                              placeholder: e.t('Please input field', {
                                                                                                  field:
                                                                                                      e.t('shop.user.User name') +
                                                                                                      '(' +
                                                                                                      e.t('shop.user.Login account') +
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
                                                                          i(
                                                                              u,
                                                                              { prop: 'nickname', label: e.t('shop.user.nickname') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      i(
                                                                                          f,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.nickname,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[1] ||
                                                                                                  (o[1] = (l) => (e.baTable.form.items.nickname = l)),
                                                                                              type: 'string',
                                                                                              placeholder: e.t('Please input field', {
                                                                                                  field: e.t('shop.user.nickname'),
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
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  type: 'remoteSelect',
                                                                                  label: e.t('shop.user.grouping'),
                                                                                  modelValue: e.baTable.form.items.group_id,
                                                                                  'onUpdate:modelValue':
                                                                                      o[2] || (o[2] = (l) => (e.baTable.form.items.group_id = l)),
                                                                                  prop: 'group_id',
                                                                                  placeholder: e.t('shop.user.grouping'),
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
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.head portrait'),
                                                                                  type: 'image',
                                                                                  modelValue: e.baTable.form.items.avatar,
                                                                                  'onUpdate:modelValue':
                                                                                      o[3] || (o[3] = (l) => (e.baTable.form.items.avatar = l)),
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          i(
                                                                              u,
                                                                              { prop: 'mobile', label: e.t('shop.user.mobile') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      i(
                                                                                          f,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.mobile,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[4] ||
                                                                                                  (o[4] = (l) => (e.baTable.form.items.mobile = l)),
                                                                                              type: 'string',
                                                                                              placeholder: e.t('Please input field', {
                                                                                                  field: e.t('shop.user.mobile'),
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
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Gender'),
                                                                                  modelValue: e.baTable.form.items.gender,
                                                                                  'onUpdate:modelValue':
                                                                                      o[5] || (o[5] = (l) => (e.baTable.form.items.gender = l)),
                                                                                  type: 'radio',
                                                                                  'input-attr': {
                                                                                      border: !0,
                                                                                      content: {
                                                                                          0: e.t('Unknown'),
                                                                                          1: e.t('shop.user.male'),
                                                                                          2: e.t('shop.user.female'),
                                                                                      },
                                                                                  },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue', 'input-attr']
                                                                          ),
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('State'),
                                                                                  modelValue: e.baTable.form.items.status,
                                                                                  'onUpdate:modelValue':
                                                                                      o[6] || (o[6] = (l) => (e.baTable.form.items.status = l)),
                                                                                  type: 'radio',
                                                                                  'input-attr': {
                                                                                      border: !0,
                                                                                      content: { enable: e.t('Enable'), disable: e.t('Disable') },
                                                                                  },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue', 'input-attr']
                                                                          ),
                                                                          g(' 兜底显示：如果组件无法匹配，或者作为编辑时的参考 '),
                                                                          e.baTable.form.operate === 'Edit' &&
                                                                          (((d = e.baTable.form.items) != null && d.province_name) ||
                                                                              ((_ = e.baTable.form.items) != null && _.city_name))
                                                                              ? (p(),
                                                                                V(
                                                                                    u,
                                                                                    { key: 0, label: ' ' },
                                                                                    {
                                                                                        default: n(() => {
                                                                                            var l, P, x
                                                                                            return [
                                                                                                k(
                                                                                                    'span',
                                                                                                    re,
                                                                                                    c(e.t('shop.user.Current selected Region')) +
                                                                                                        ': ' +
                                                                                                        c(
                                                                                                            ((l = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : l.province_name) || ''
                                                                                                        ) +
                                                                                                        ' ' +
                                                                                                        c(
                                                                                                            ((P = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : P.city_name) || ''
                                                                                                        ) +
                                                                                                        ' ' +
                                                                                                        c(
                                                                                                            ((x = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : x.district_name) || ''
                                                                                                        ),
                                                                                                    1
                                                                                                ),
                                                                                            ]
                                                                                        }),
                                                                                        _: 1,
                                                                                    }
                                                                                ))
                                                                              : g('v-if', !0),
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Region'),
                                                                                  type: 'city',
                                                                                  modelValue: e.regionValue,
                                                                                  'onUpdate:modelValue': o[7] || (o[7] = (l) => (e.regionValue = l)),
                                                                                  'input-attr': { level: 3, requestApi: 'region' },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          i(
                                                                              u,
                                                                              { prop: 'password', label: e.t('shop.user.password') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      i(
                                                                                          f,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.password,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[8] ||
                                                                                                  (o[8] = (l) => (e.baTable.form.items.password = l)),
                                                                                              type: 'password',
                                                                                              placeholder:
                                                                                                  e.baTable.form.operate == 'Add'
                                                                                                      ? e.t('Please input field', {
                                                                                                            field: e.t('shop.user.password'),
                                                                                                        })
                                                                                                      : e.t(
                                                                                                            'shop.user.Please leave blank if not modified'
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
                                                                          i(
                                                                              u,
                                                                              { label: e.t('shop.user.Introduction') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      i(
                                                                                          f,
                                                                                          {
                                                                                              onKeyup: [
                                                                                                  o[9] ||
                                                                                                      (o[9] = y(
                                                                                                          E(() => {}, ['stop']),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                                  o[10] ||
                                                                                                      (o[10] = y(
                                                                                                          E(
                                                                                                              (l) => e.baTable.onSubmit(e.formRef),
                                                                                                              ['ctrl']
                                                                                                          ),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                              ],
                                                                                              modelValue: e.baTable.form.items.introduction,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[11] ||
                                                                                                  (o[11] = (l) =>
                                                                                                      (e.baTable.form.items.introduction = l)),
                                                                                              type: 'textarea',
                                                                                              placeholder: e.t('Please input field', {
                                                                                                  field: e.t('shop.user.Introduction'),
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
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Take Orders'),
                                                                                  modelValue: e.baTable.form.items.profile.is_take_orders,
                                                                                  'onUpdate:modelValue':
                                                                                      o[12] ||
                                                                                      (o[12] = (l) =>
                                                                                          (e.baTable.form.items.profile.is_take_orders = l)),
                                                                                  type: 'radio',
                                                                                  'input-attr': {
                                                                                      border: !0,
                                                                                      content: { 0: e.t('no'), 1: e.t('yes') },
                                                                                  },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue', 'input-attr']
                                                                          ),
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Operational Star'),
                                                                                  modelValue: e.baTable.form.items.profile.operational_star,
                                                                                  'onUpdate:modelValue':
                                                                                      o[13] ||
                                                                                      (o[13] = (l) =>
                                                                                          (e.baTable.form.items.profile.operational_star = l)),
                                                                                  type: 'radio',
                                                                                  'input-attr': {
                                                                                      border: !0,
                                                                                      content: { 0: e.t('no'), 1: e.t('yes') },
                                                                                  },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue', 'input-attr']
                                                                          ),
                                                                          e.baTable.form.operate === 'Edit'
                                                                              ? (p(),
                                                                                V(
                                                                                    e.FormItem,
                                                                                    {
                                                                                        key: 1,
                                                                                        label: e.t('shop.user.Review Result'),
                                                                                        modelValue: e.baTable.form.items.profile.status,
                                                                                        'onUpdate:modelValue':
                                                                                            o[14] ||
                                                                                            (o[14] = (l) =>
                                                                                                (e.baTable.form.items.profile.status = l)),
                                                                                        type: 'radio',
                                                                                        'input-attr': {
                                                                                            border: !0,
                                                                                            content: {
                                                                                                pending: e.t('shop.user.Pending'),
                                                                                                enable: e.t('Enable'),
                                                                                                disable: e.t('Disable'),
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    null,
                                                                                    8,
                                                                                    ['label', 'modelValue', 'input-attr']
                                                                                ))
                                                                              : g('v-if', !0),
                                                                          i(
                                                                              u,
                                                                              { label: e.t('shop.user.Readme') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      i(
                                                                                          f,
                                                                                          {
                                                                                              onKeyup: [
                                                                                                  o[15] ||
                                                                                                      (o[15] = y(
                                                                                                          E(() => {}, ['stop']),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                                  o[16] ||
                                                                                                      (o[16] = y(
                                                                                                          E(
                                                                                                              (l) => e.baTable.onSubmit(e.formRef),
                                                                                                              ['ctrl']
                                                                                                          ),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                              ],
                                                                                              modelValue: e.baTable.form.items.profile.readme,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[17] ||
                                                                                                  (o[17] = (l) =>
                                                                                                      (e.baTable.form.items.profile.readme = l)),
                                                                                              type: 'textarea',
                                                                                              placeholder: e.t('Please input field', {
                                                                                                  field: e.t('shop.user.Readme'),
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
                                                                          (D = (B = e.baTable.form.items) == null ? void 0 : B.profile) != null &&
                                                                          D.media_video
                                                                              ? (p(),
                                                                                V(
                                                                                    u,
                                                                                    { key: 2, label: e.t('shop.user.Video') },
                                                                                    {
                                                                                        default: n(() => [
                                                                                            i(
                                                                                                e.elVideo,
                                                                                                {
                                                                                                    src: e.fullUrl(
                                                                                                        e.baTable.form.items.profile.media_video
                                                                                                    ),
                                                                                                    ref: 'myvideo',
                                                                                                    fit: 'fill',
                                                                                                    width: '70',
                                                                                                    height: '70',
                                                                                                    enablePreview: !0,
                                                                                                    customPreview: !1,
                                                                                                },
                                                                                                null,
                                                                                                8,
                                                                                                ['src']
                                                                                            ),
                                                                                        ]),
                                                                                        _: 1,
                                                                                    },
                                                                                    8,
                                                                                    ['label']
                                                                                ))
                                                                              : g('v-if', !0),
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Video'),
                                                                                  modelValue: e.baTable.form.items.profile.media_video,
                                                                                  'onUpdate:modelValue':
                                                                                      o[18] ||
                                                                                      (o[18] = (l) => (e.baTable.form.items.profile.media_video = l)),
                                                                                  type: 'file',
                                                                                  'input-attr': { accept: 'video/*', limit: 1 },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Photo'),
                                                                                  modelValue: e.baTable.form.items.profile.media_img,
                                                                                  'onUpdate:modelValue':
                                                                                      o[19] ||
                                                                                      (o[19] = (l) => (e.baTable.form.items.profile.media_img = l)),
                                                                                  type: 'images',
                                                                                  'input-attr': {
                                                                                      limit: 9,
                                                                                      accept: 'image/*',
                                                                                      listType: 'picture-card',
                                                                                  },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                      ]
                                                                  }),
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
                                [[m, e.baTable.form.loading]]
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
const fe = Q(oe, [
    ['render', ae],
    ['__scopeId', 'data-v-d943fe21'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/user/popupForm.vue'],
])
export { fe as default }
