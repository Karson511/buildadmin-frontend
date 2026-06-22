import {
    e as W,
    p as z,
    am as O,
    v as M,
    f as j,
    r as L,
    D as Z,
    m as h,
    X as U,
    o as p,
    h as P,
    W as g,
    l as i,
    P as s,
    _ as N,
    O as T,
    k,
    j as S,
    $ as G,
    U as _,
    a8 as x,
    a7 as q,
    V as B,
    Z as J,
} from './vue-Rh7pEvFB.js'
import { e as K, f as Q, _ as H } from './index-BfqXFxxp.js'
import { F as X } from './index-B8bcfeaY.js'
import Y from './video-CL1p5STF.js'
import { r as $, b as w } from './validate-CJqnmgV4.js'
import './index-cU5Tpy6g.js'
import './index-BL7XGxgx.js'
import './play-CnVQomD0.js'
const ee = W({
        __name: 'popupForm',
        setup(R, { expose: o }) {
            o()
            const D = K(),
                e = z(),
                a = O('baTable'),
                { t: f } = M.useI18n(),
                b = j({
                    get: () => {
                        const l = a.form.items
                        if (!l) return null
                        const t = [],
                            m = Number(l.province_code),
                            n = Number(l.city_code),
                            d = Number(l.district_code)
                        return (
                            !Number.isNaN(m) && m > 0 && t.push(m),
                            !Number.isNaN(n) && n > 0 && t.push(n),
                            !Number.isNaN(d) && d > 0 && t.push(d),
                            t.length > 0 ? t : null
                        )
                    },
                    set: (l) => {
                        !l || l.length === 0
                            ? ((a.form.items.province_code = null), (a.form.items.city_code = null), (a.form.items.district_code = null))
                            : ((a.form.items.province_code = l[0] ? Number(l[0]) : null),
                              (a.form.items.city_code = l.length > 1 && l[1] ? Number(l[1]) : null),
                              (a.form.items.district_code = l.length > 2 && l[2] ? Number(l[2]) : null))
                    },
                }),
                u = (l) => (Array.isArray(l) ? l.length > 0 : typeof l == 'string' ? l.trim() !== '' : l != null),
                V = (l, t, m) => {
                    var r, y, F
                    if (Number((y = (r = a.form.items) == null ? void 0 : r.profile) == null ? void 0 : y.services_methods) !== 2) return m()
                    const d = (F = a.form.items) == null ? void 0 : F.profile,
                        c = u(d == null ? void 0 : d.wechat_account),
                        E = u(d == null ? void 0 : d.wechat_contact_qr_code)
                    return c || E ? m() : m(new Error('服务方式为免约加好友时，微信号和微信联系二维码至少填写一个'))
                },
                C = L({
                    username: [
                        w({ name: 'required', title: f('shop.user.User name') }),
                        {
                            validator: (l, t, m) => {
                                if (!t) return m()
                                const n = /^1[3-9]\d{9}$/.test(t),
                                    d = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/.test(t)
                                return n || d ? m() : m(new Error(f('Please enter a valid account or mobile number')))
                            },
                            trigger: 'blur',
                        },
                    ],
                    nickname: [w({ name: 'required', title: f('shop.user.nickname') })],
                    group_id: [w({ name: 'required', message: f('Please select field', { field: f('shop.user.grouping') }) })],
                    email: [w({ name: 'email', title: f('shop.user.email') })],
                    mobile: [w({ name: 'mobile' })],
                    password: [
                        {
                            validator: (l, t, m) => {
                                if (a.form.operate == 'Add') {
                                    if (!t) return m(new Error(f('Please input field', { field: f('shop.user.password') })))
                                } else if (!t) return m()
                                return $(t) ? m() : m(new Error(f('validate.Please enter the correct password')))
                            },
                            trigger: 'blur',
                        },
                    ],
                    'profile.wechat_account': [{ validator: V, trigger: ['blur', 'change'] }],
                    'profile.wechat_contact_qr_code': [{ validator: V, trigger: ['change', 'blur'] }],
                }),
                v = (l) =>
                    Array.isArray(l)
                        ? l.filter((t) => typeof t == 'string' && t.trim() !== '').map((t) => t.trim())
                        : typeof l == 'string'
                          ? l
                                .split(',')
                                .map((t) => t.trim())
                                .filter((t) => t !== '')
                          : [],
                I = async (l) => {
                    l &&
                        (await l.validate((t) => {
                            if (t) {
                                a.form.submitLoading = !0
                                let m = JSON.parse(JSON.stringify(a.form.items))
                                const n = m.profile || {}
                                ;(m.profile = {
                                    ...n,
                                    media_img: v(n.media_img),
                                    services_methods:
                                        n.services_methods === '' || n.services_methods === void 0 || n.services_methods === null
                                            ? null
                                            : Number(n.services_methods),
                                }),
                                    a.form.operate === 'Edit' &&
                                        !m.id &&
                                        a.form.operateIds &&
                                        a.form.operateIds.length > 0 &&
                                        (m.id = a.form.operateIds[0]),
                                    a.api
                                        .postData(a.form.operate, m)
                                        .then((d) => {
                                            var c
                                            a.onTableHeaderAction('refresh', {}),
                                                (a.form.submitLoading = !1),
                                                (c = a.form.operateIds) == null || c.shift(),
                                                a.form.operateIds && a.form.operateIds.length > 0
                                                    ? a.toggleForm('Edit', a.form.operateIds)
                                                    : a.toggleForm()
                                        })
                                        .catch(() => {
                                            a.form.submitLoading = !1
                                        })
                            } else console.warn('表单验证未通过，请检查必填项或格式')
                        }))
                }
            Z(
                () => a.form.operate,
                (l) => {
                    ;(C.password[0].required = l == 'Add'),
                        l === 'Add' &&
                            a.form.items &&
                            ((a.form.items.status = 'enable'),
                            a.form.items.profile || (a.form.items.profile = {}),
                            a.form.items.profile.services_methods || (a.form.items.profile.services_methods = 1))
                }
            )
            const A = {
                config: D,
                formRef: e,
                baTable: a,
                t: f,
                regionValue: b,
                hasValue: u,
                validateServiceContact: V,
                rules: C,
                normalizeMediaImg: v,
                submitForm: I,
                get fullUrl() {
                    return Q
                },
                FormItem: X,
                elVideo: Y,
            }
            return Object.defineProperty(A, '__isScriptSetup', { enumerable: !1, value: !0 }), A
        },
    }),
    oe = { class: 'title' },
    re = { style: { color: '#999', 'font-size': '12px' } }
function le(R, o, D, e, a, f) {
    const b = h('el-input'),
        u = h('el-form-item'),
        V = h('el-form'),
        C = h('el-scrollbar'),
        v = h('el-button'),
        I = h('el-dialog'),
        A = U('drag'),
        l = U('zoom'),
        t = U('loading'),
        m = U('blur')
    return (
        p(),
        P(
            J,
            null,
            [
                g(' 对话框表单 '),
                i(
                    I,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'destroy-on-close': !0,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                    },
                    {
                        header: s(() => [
                            N((p(), P('div', oe, [B(_(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [A, ['.ba-operate-dialog', '.el-dialog__header']],
                                [l, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: s(() => [
                            k(
                                'div',
                                { style: S('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    i(
                                        v,
                                        { onClick: o[21] || (o[21] = (n) => e.baTable.toggleForm('')) },
                                        { default: s(() => [B(_(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    N(
                                        (p(),
                                        T(
                                            v,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: o[22] || (o[22] = (n) => e.submitForm(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: s(() => [
                                                    B(
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
                                        [[m]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: s(() => [
                            N(
                                (p(),
                                T(
                                    C,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: s(() => [
                                            k(
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
                                                          T(
                                                              V,
                                                              {
                                                                  key: 0,
                                                                  ref: 'formRef',
                                                                  model: e.baTable.form.items,
                                                                  'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                                  'label-width': e.baTable.form.labelWidth + 'px',
                                                                  rules: e.rules,
                                                              },
                                                              {
                                                                  default: s(() => {
                                                                      var n, d, c, E
                                                                      return [
                                                                          i(
                                                                              u,
                                                                              { prop: 'username', label: e.t('shop.user.User name') },
                                                                              {
                                                                                  default: s(() => [
                                                                                      i(
                                                                                          b,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.username,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[0] ||
                                                                                                  (o[0] = (r) => (e.baTable.form.items.username = r)),
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
                                                                                  default: s(() => [
                                                                                      i(
                                                                                          b,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.nickname,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[1] ||
                                                                                                  (o[1] = (r) => (e.baTable.form.items.nickname = r)),
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
                                                                                      o[2] || (o[2] = (r) => (e.baTable.form.items.group_id = r)),
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
                                                                                      o[3] || (o[3] = (r) => (e.baTable.form.items.avatar = r)),
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          i(
                                                                              u,
                                                                              { prop: 'mobile', label: e.t('shop.user.mobile') },
                                                                              {
                                                                                  default: s(() => [
                                                                                      i(
                                                                                          b,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.mobile,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[4] ||
                                                                                                  (o[4] = (r) => (e.baTable.form.items.mobile = r)),
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
                                                                                      o[5] || (o[5] = (r) => (e.baTable.form.items.gender = r)),
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
                                                                                      o[6] || (o[6] = (r) => (e.baTable.form.items.status = r)),
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
                                                                          (((n = e.baTable.form.items) != null && n.province_name) ||
                                                                              ((d = e.baTable.form.items) != null && d.city_name))
                                                                              ? (p(),
                                                                                T(
                                                                                    u,
                                                                                    { key: 0, label: ' ' },
                                                                                    {
                                                                                        default: s(() => {
                                                                                            var r, y, F
                                                                                            return [
                                                                                                k(
                                                                                                    'span',
                                                                                                    re,
                                                                                                    _(e.t('shop.user.Current selected Region')) +
                                                                                                        ': ' +
                                                                                                        _(
                                                                                                            ((r = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : r.province_name) || ''
                                                                                                        ) +
                                                                                                        ' ' +
                                                                                                        _(
                                                                                                            ((y = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : y.city_name) || ''
                                                                                                        ) +
                                                                                                        ' ' +
                                                                                                        _(
                                                                                                            ((F = e.baTable.form.items) == null
                                                                                                                ? void 0
                                                                                                                : F.district_name) || ''
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
                                                                                  'onUpdate:modelValue': o[7] || (o[7] = (r) => (e.regionValue = r)),
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
                                                                                  default: s(() => [
                                                                                      i(
                                                                                          b,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.password,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[8] ||
                                                                                                  (o[8] = (r) => (e.baTable.form.items.password = r)),
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
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Services Methods'),
                                                                                  modelValue: e.baTable.form.items.profile.services_methods,
                                                                                  'onUpdate:modelValue':
                                                                                      o[9] ||
                                                                                      (o[9] = (r) =>
                                                                                          (e.baTable.form.items.profile.services_methods = r)),
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
                                                                          i(
                                                                              u,
                                                                              {
                                                                                  prop: 'profile.wechat_account',
                                                                                  label: e.t('shop.user.Wechat Account'),
                                                                              },
                                                                              {
                                                                                  default: s(() => [
                                                                                      i(
                                                                                          b,
                                                                                          {
                                                                                              modelValue: e.baTable.form.items.profile.wechat_account,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[10] ||
                                                                                                  (o[10] = (r) =>
                                                                                                      (e.baTable.form.items.profile.wechat_account =
                                                                                                          r)),
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
                                                                          i(
                                                                              e.FormItem,
                                                                              {
                                                                                  prop: 'profile.wechat_contact_qr_code',
                                                                                  label: e.t('shop.user.Wechat Contact QRCode'),
                                                                                  type: 'image',
                                                                                  modelValue: e.baTable.form.items.profile.wechat_contact_qr_code,
                                                                                  'onUpdate:modelValue':
                                                                                      o[11] ||
                                                                                      (o[11] = (r) =>
                                                                                          (e.baTable.form.items.profile.wechat_contact_qr_code = r)),
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          i(
                                                                              u,
                                                                              { label: e.t('shop.user.Introduction') },
                                                                              {
                                                                                  default: s(() => [
                                                                                      i(
                                                                                          b,
                                                                                          {
                                                                                              onKeyup: [
                                                                                                  o[12] ||
                                                                                                      (o[12] = x(
                                                                                                          q(() => {}, ['stop']),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                                  o[13] ||
                                                                                                      (o[13] = x(
                                                                                                          q(
                                                                                                              (r) => e.baTable.onSubmit(e.formRef),
                                                                                                              ['ctrl']
                                                                                                          ),
                                                                                                          ['enter']
                                                                                                      )),
                                                                                              ],
                                                                                              modelValue: e.baTable.form.items.introduction,
                                                                                              'onUpdate:modelValue':
                                                                                                  o[14] ||
                                                                                                  (o[14] = (r) =>
                                                                                                      (e.baTable.form.items.introduction = r)),
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
                                                                                      o[15] ||
                                                                                      (o[15] = (r) =>
                                                                                          (e.baTable.form.items.profile.is_take_orders = r)),
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
                                                                                      o[16] ||
                                                                                      (o[16] = (r) =>
                                                                                          (e.baTable.form.items.profile.operational_star = r)),
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
                                                                                T(
                                                                                    e.FormItem,
                                                                                    {
                                                                                        key: 1,
                                                                                        label: e.t('shop.user.Review Result'),
                                                                                        modelValue: e.baTable.form.items.profile.status,
                                                                                        'onUpdate:modelValue':
                                                                                            o[17] ||
                                                                                            (o[17] = (r) =>
                                                                                                (e.baTable.form.items.profile.status = r)),
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
                                                                              e.FormItem,
                                                                              {
                                                                                  label: e.t('shop.user.Readme'),
                                                                                  type: 'editor',
                                                                                  modelValue: e.baTable.form.items.profile.readme,
                                                                                  'onUpdate:modelValue':
                                                                                      o[18] ||
                                                                                      (o[18] = (r) => (e.baTable.form.items.profile.readme = r)),
                                                                                  'input-attr': { editorType: 'wang' },
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ['label', 'modelValue']
                                                                          ),
                                                                          (E = (c = e.baTable.form.items) == null ? void 0 : c.profile) != null &&
                                                                          E.media_video
                                                                              ? (p(),
                                                                                T(
                                                                                    u,
                                                                                    { key: 2, label: e.t('shop.user.Video') },
                                                                                    {
                                                                                        default: s(() => [
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
                                                                                      o[19] ||
                                                                                      (o[19] = (r) => (e.baTable.form.items.profile.media_video = r)),
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
                                                                                      o[20] ||
                                                                                      (o[20] = (r) => (e.baTable.form.items.profile.media_img = r)),
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
                                [[t, e.baTable.form.loading]]
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
const fe = H(ee, [
    ['render', le],
    ['__scopeId', 'data-v-d943fe21'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/user/popupForm.vue'],
])
export { fe as default }
