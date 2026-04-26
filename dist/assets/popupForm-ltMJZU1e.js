import {
    e as z,
    p as O,
    am as W,
    v as j,
    f as L,
    r as M,
    D as Z,
    m as T,
    X as F,
    o as p,
    h as P,
    W as g,
    l as t,
    P as n,
    _ as C,
    O as h,
    k as U,
    j as S,
    $ as G,
    U as _,
    a8 as x,
    a7 as R,
    V as E,
    Z as J,
} from './vue-Rh7pEvFB.js'
import { e as K, f as H, _ as Q } from './index-C3vonoRT.js'
import { F as X } from './index-BC54TMpd.js'
import Y from './video-BykpubKS.js'
import { r as $, b as v } from './validate-Dr-o2ZDb.js'
import './index-DQwP9Y7u.js'
import './index-CK3pnx59.js'
import './play-CnVQomD0.js'
const ee = z({
        __name: 'popupForm',
        setup(q, { expose: o }) {
            o()
            const I = K(),
                e = O(),
                r = W('baTable'),
                { t: s } = j.useI18n(),
                b = L({
                    get: () => {
                        const a = r.form.items
                        if (!a) return null
                        const i = [],
                            m = Number(a.province_code),
                            d = Number(a.city_code),
                            f = Number(a.district_code)
                        return (
                            !Number.isNaN(m) && m > 0 && i.push(m),
                            !Number.isNaN(d) && d > 0 && i.push(d),
                            !Number.isNaN(f) && f > 0 && i.push(f),
                            i.length > 0 ? i : null
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
                        v({ name: 'required', title: s('shop.user.User name') }),
                        {
                            validator: (a, i, m) => {
                                if (!i) return m()
                                const d = /^1[3-9]\d{9}$/.test(i),
                                    f = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/.test(i)
                                return d || f ? m() : m(new Error(s('Please enter a valid account or mobile number')))
                            },
                            trigger: 'blur',
                        },
                    ],
                    nickname: [v({ name: 'required', title: s('shop.user.nickname') })],
                    group_id: [v({ name: 'required', message: s('Please select field', { field: s('shop.user.grouping') }) })],
                    email: [v({ name: 'email', title: s('shop.user.email') })],
                    mobile: [v({ name: 'mobile' })],
                    password: [
                        {
                            validator: (a, i, m) => {
                                if (r.form.operate == 'Add') {
                                    if (!i) return m(new Error(s('Please input field', { field: s('shop.user.password') })))
                                } else if (!i) return m()
                                return $(i) ? m() : m(new Error(s('validate.Please enter the correct password')))
                            },
                            trigger: 'blur',
                        },
                    ],
                }),
                y = (a) =>
                    Array.isArray(a)
                        ? a.filter((i) => typeof i == 'string' && i.trim() !== '').map((i) => i.trim())
                        : typeof a == 'string'
                          ? a
                                .split(',')
                                .map((i) => i.trim())
                                .filter((i) => i !== '')
                          : [],
                w = async (a) => {
                    a &&
                        (await a.validate((i) => {
                            if (i) {
                                r.form.submitLoading = !0
                                let m = JSON.parse(JSON.stringify(r.form.items))
                                const d = m.profile || {}
                                ;(m.profile = {
                                    ...d,
                                    media_img: y(d.media_img),
                                    services_methods:
                                        d.services_methods === '' || d.services_methods === void 0 || d.services_methods === null
                                            ? null
                                            : Number(d.services_methods),
                                }),
                                    r.form.operate === 'Edit' &&
                                        !m.id &&
                                        r.form.operateIds &&
                                        r.form.operateIds.length > 0 &&
                                        (m.id = r.form.operateIds[0]),
                                    r.api
                                        .postData(r.form.operate, m)
                                        .then((f) => {
                                            var c
                                            r.onTableHeaderAction('refresh', {}),
                                                (r.form.submitLoading = !1),
                                                (c = r.form.operateIds) == null || c.shift(),
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
            Z(
                () => r.form.operate,
                (a) => {
                    ;(u.password[0].required = a == 'Add'),
                        a === 'Add' &&
                            r.form.items &&
                            ((r.form.items.status = 'enable'),
                            r.form.items.profile || (r.form.items.profile = {}),
                            r.form.items.profile.services_methods || (r.form.items.profile.services_methods = 1))
                }
            )
            const V = {
                config: I,
                formRef: e,
                baTable: r,
                t: s,
                regionValue: b,
                rules: u,
                normalizeMediaImg: y,
                submitForm: w,
                get fullUrl() {
                    return H
                },
                FormItem: X,
                elVideo: Y,
            }
            return Object.defineProperty(V, '__isScriptSetup', { enumerable: !1, value: !0 }), V
        },
    }),
    oe = { class: 'title' },
    le = { style: { color: '#999', 'font-size': '12px' } }
function re(q, o, I, e, r, s) {
    const b = T('el-input'),
        u = T('el-form-item'),
        y = T('el-form'),
        w = T('el-scrollbar'),
        V = T('el-button'),
        a = T('el-dialog'),
        i = F('drag'),
        m = F('zoom'),
        d = F('loading'),
        f = F('blur')
    return (
        p(),
        P(
            J,
            null,
            [
                g(' 对话框表单 '),
                t(
                    a,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'destroy-on-close': !0,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                    },
                    {
                        header: n(() => [
                            C((p(), P('div', oe, [E(_(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [i, ['.ba-operate-dialog', '.el-dialog__header']],
                                [m, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: n(() => [
                            U(
                                'div',
                                { style: S('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    t(
                                        V,
                                        { onClick: o[21] || (o[21] = (c) => e.baTable.toggleForm('')) },
                                        { default: n(() => [E(_(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    C(
                                        (p(),
                                        h(
                                            V,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: o[22] || (o[22] = (c) => e.submitForm(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: n(() => [
                                                    E(
                                                        _(
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
                                        [[f]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: n(() => [
                            C(
                                (p(),
                                h(
                                    w,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: n(() => [
                                            U(
                                                'div',
                                                {
                                                    class: G(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                                    style: S(
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
                                                          h(
                                                              y,
                                                              {
                                                                  key: 0,
                                                                  ref: 'formRef',
                                                                  model: e.baTable.form.items,
                                                                  'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                                  'label-width': e.baTable.form.labelWidth + 'px',
                                                                  rules: e.rules,
                                                              },
                                                              {
                                                                  default: n(() => {
                                                                      var c, A, k, N
                                                                      return [
                                                                          t(
                                                                              u,
                                                                              { prop: 'username', label: e.t('shop.user.User name') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      t(
                                                                                          b,
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
                                                                          t(
                                                                              u,
                                                                              { prop: 'nickname', label: e.t('shop.user.nickname') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      t(
                                                                                          b,
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
                                                                          t(
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
                                                                          t(
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
                                                                          t(
                                                                              u,
                                                                              { prop: 'mobile', label: e.t('shop.user.mobile') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      t(
                                                                                          b,
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
                                                                          t(
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
                                                                          t(
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
                                                                          (((c = e.baTable.form.items) != null && c.province_name) ||
                                                                              ((A = e.baTable.form.items) != null && A.city_name))
                                                                              ? (p(),
                                                                                h(
                                                                                    u,
                                                                                    { key: 0, label: ' ' },
                                                                                    {
                                                                                        default: n(() => {
                                                                                            var l, B, D
                                                                                            return [
                                                                                                U(
                                                                                                    'span',
                                                                                                    le,
                                                                                                    _(e.t('shop.user.Current selected Region')) +
                                                                                                        ': ' +
                                                                                                        _(
                                                                                                            ((l = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : l.province_name) || ''
                                                                                                        ) +
                                                                                                        ' ' +
                                                                                                        _(
                                                                                                            ((B = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : B.city_name) || ''
                                                                                                        ) +
                                                                                                        ' ' +
                                                                                                        _(
                                                                                                            ((D = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : D.district_name) || ''
                                                                                                        ),
                                                                                                    1
                                                                                                ),
                                                                                            ]
                                                                                        }),
                                                                                        _: 1,
                                                                                    }
                                                                                ))
                                                                              : g('v-if', !0),
                                                                          t(
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
                                                                          t(
                                                                              u,
                                                                              { prop: 'password', label: e.t('shop.user.password') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      t(
                                                                                          b,
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
                                                                          t(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Services Methods'),
                                                                                  modelValue: e.baTable.form.items.profile.services_methods,
                                                                                  'onUpdate:modelValue':
                                                                                      o[9] ||
                                                                                      (o[9] = (l) =>
                                                                                          (e.baTable.form.items.profile.services_methods = l)),
                                                                                  type: 'radio',
                                                                                  'input-attr': {
                                                                                      border: !0,
                                                                                      content: {
                                                                                          1: e.t('shop.user.Online Booking'),
                                                                                          2: e.t('shop.user.Add as Friend — No Invitation Required'),
                                                                                      },
                                                                                  },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue', 'input-attr']
                                                                          ),
                                                                          t(
                                                                              u,
                                                                              { label: e.t('shop.user.Wechat Account') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      t(
                                                                                          b,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.profile.wechat_account,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[10] ||
                                                                                                  (o[10] = (l) =>
                                                                                                      (e.baTable.form.items.profile.wechat_account =
                                                                                                          l)),
                                                                                              type: 'string',
                                                                                              placeholder: e.t('Please input field', {
                                                                                                  field: e.t('shop.user.Wechat Account'),
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
                                                                          t(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Wechat Contact QRCode'),
                                                                                  type: 'image',
                                                                                  modelValue: e.baTable.form.items.profile.wechat_contact_qr_code,
                                                                                  'onUpdate:modelValue':
                                                                                      o[11] ||
                                                                                      (o[11] = (l) =>
                                                                                          (e.baTable.form.items.profile.wechat_contact_qr_code = l)),
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          t(
                                                                              u,
                                                                              { label: e.t('shop.user.Introduction') },
                                                                              {
                                                                                  default: n(() => [
                                                                                      t(
                                                                                          b,
                                                                                          {
                                                                                              onKeyup: [
                                                                                                  o[12] ||
                                                                                                      (o[12] = x(
                                                                                                          R(() => {}, ['stop']),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                                  o[13] ||
                                                                                                      (o[13] = x(
                                                                                                          R(
                                                                                                              (l) => e.baTable.onSubmit(e.formRef),
                                                                                                              ['ctrl']
                                                                                                          ),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                              ],
                                                                                              modelValue: e.baTable.form.items.introduction,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[14] ||
                                                                                                  (o[14] = (l) =>
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
                                                                          t(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Take Orders'),
                                                                                  modelValue: e.baTable.form.items.profile.is_take_orders,
                                                                                  'onUpdate:modelValue':
                                                                                      o[15] ||
                                                                                      (o[15] = (l) =>
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
                                                                          t(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Operational Star'),
                                                                                  modelValue: e.baTable.form.items.profile.operational_star,
                                                                                  'onUpdate:modelValue':
                                                                                      o[16] ||
                                                                                      (o[16] = (l) =>
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
                                                                                h(
                                                                                    e.FormItem,
                                                                                    {
                                                                                        key: 1,
                                                                                        label: e.t('shop.user.Review Result'),
                                                                                        modelValue: e.baTable.form.items.profile.status,
                                                                                        'onUpdate:modelValue':
                                                                                            o[17] ||
                                                                                            (o[17] = (l) =>
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
                                                                          t(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Readme'),
                                                                                  type: 'editor',
                                                                                  modelValue: e.baTable.form.items.profile.readme,
                                                                                  'onUpdate:modelValue':
                                                                                      o[18] ||
                                                                                      (o[18] = (l) => (e.baTable.form.items.profile.readme = l)),
                                                                                  'input-attr': { editorType: 'wang' },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          (N = (k = e.baTable.form.items) == null ? void 0 : k.profile) != null &&
                                                                          N.media_video
                                                                              ? (p(),
                                                                                h(
                                                                                    u,
                                                                                    { key: 2, label: e.t('shop.user.Video') },
                                                                                    {
                                                                                        default: n(() => [
                                                                                            t(
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
                                                                          t(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Video'),
                                                                                  modelValue: e.baTable.form.items.profile.media_video,
                                                                                  'onUpdate:modelValue':
                                                                                      o[19] ||
                                                                                      (o[19] = (l) => (e.baTable.form.items.profile.media_video = l)),
                                                                                  type: 'file',
                                                                                  'input-attr': { accept: 'video/*', limit: 1 },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          t(
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Photo'),
                                                                                  modelValue: e.baTable.form.items.profile.media_img,
                                                                                  'onUpdate:modelValue':
                                                                                      o[20] ||
                                                                                      (o[20] = (l) => (e.baTable.form.items.profile.media_img = l)),
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
                                [[d, e.baTable.form.loading]]
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
const be = Q(ee, [
    ['render', re],
    ['__scopeId', 'data-v-d943fe21'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/user/popupForm.vue'],
])
export { be as default }
