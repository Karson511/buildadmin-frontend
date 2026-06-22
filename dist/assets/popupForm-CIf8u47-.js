import {
    e as D,
    p as x,
    am as R,
    v as U,
    r as B,
    m as i,
    X as _,
    o as m,
    h as w,
    W as V,
    l as d,
    P as r,
    _ as v,
    O as g,
    k as F,
    j as S,
    $ as K,
    a8 as P,
    V as y,
    U as k,
    Z as E,
} from './vue-Rh7pEvFB.js'
import { F as z } from './index-B8bcfeaY.js'
import { b as W } from './validate-CJqnmgV4.js'
import { e as G, _ as L } from './index-BfqXFxxp.js'
import './index-cU5Tpy6g.js'
import './index-BL7XGxgx.js'
const q = D({
        __name: 'popupForm',
        setup(I, { expose: a }) {
            const C = G(),
                e = x(),
                f = x(),
                h = R('baTable'),
                { t: n } = U.useI18n(),
                c = B({
                    name: [W({ name: 'required', title: n('auth.group.Group name') })],
                    auth: [
                        {
                            required: !0,
                            validator: (b, l, o) =>
                                s().length <= 0 ? o(new Error(n('Please select field', { field: n('auth.group.jurisdiction') }))) : o(),
                        },
                    ],
                    pid: [
                        {
                            validator: (b, l, o) =>
                                l && parseInt(l) == parseInt(h.form.items.id)
                                    ? o(new Error(n('auth.group.The parent group cannot be the group itself')))
                                    : o(),
                            trigger: 'blur',
                        },
                    ],
                }),
                s = () => f.value.getCheckedKeys().concat(f.value.getHalfCheckedKeys()),
                T = (b, l) => {
                    if (l.isLeaf) return ''
                    let o = !0
                    for (const p in l.childNodes) l.childNodes[p].isLeaf || (o = !1)
                    return o ? 'penultimate-node' : ''
                }
            a({ getCheckeds: s })
            const u = { config: C, formRef: e, treeRef: f, baTable: h, t: n, rules: c, getCheckeds: s, treeNodeClass: T, FormItem: z }
            return Object.defineProperty(u, '__isScriptSetup', { enumerable: !1, value: !0 }), u
        },
    }),
    O = { class: 'title' }
function A(I, a, C, e, f, h) {
    const n = i('el-input'),
        c = i('el-form-item'),
        s = i('el-tree'),
        T = i('el-form'),
        u = i('el-scrollbar'),
        b = i('el-button'),
        l = i('el-dialog'),
        o = _('drag'),
        p = _('zoom'),
        N = _('loading'),
        j = _('blur')
    return (
        m(),
        w(
            E,
            null,
            [
                V(' 对话框表单 '),
                d(
                    l,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'model-value': ['Add', 'Edit'].includes(e.baTable.form.operate),
                        onClose: e.baTable.toggleForm,
                        'destroy-on-close': !0,
                    },
                    {
                        header: r(() => [
                            v((m(), w('div', O, [y(k(e.baTable.form.operate ? e.t(e.baTable.form.operate) : ''), 1)])), [
                                [o, ['.ba-operate-dialog', '.el-dialog__header']],
                                [p, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: r(() => [
                            F(
                                'div',
                                { style: S('width: calc(100% - ' + e.baTable.form.labelWidth / 1.8 + 'px)') },
                                [
                                    d(
                                        b,
                                        { onClick: a[4] || (a[4] = (t) => e.baTable.toggleForm('')) },
                                        { default: r(() => [y(k(e.t('Cancel')), 1)]), _: 1 }
                                    ),
                                    v(
                                        (m(),
                                        g(
                                            b,
                                            {
                                                loading: e.baTable.form.submitLoading,
                                                onClick: a[5] || (a[5] = (t) => e.baTable.onSubmit(e.formRef)),
                                                type: 'primary',
                                            },
                                            {
                                                default: r(() => [
                                                    y(
                                                        k(
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
                                        [[j]]
                                    ),
                                ],
                                4
                            ),
                        ]),
                        default: r(() => [
                            v(
                                (m(),
                                g(
                                    u,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: r(() => [
                                            F(
                                                'div',
                                                {
                                                    class: K(['ba-operate-form', 'ba-' + e.baTable.form.operate + '-form']),
                                                    style: S(
                                                        e.config.layout.shrink ? '' : 'width: calc(100% - ' + e.baTable.form.labelWidth / 2 + 'px)'
                                                    ),
                                                },
                                                [
                                                    e.baTable.form.loading
                                                        ? V('v-if', !0)
                                                        : (m(),
                                                          g(
                                                              T,
                                                              {
                                                                  key: 0,
                                                                  ref: 'formRef',
                                                                  onKeyup: a[3] || (a[3] = P((t) => e.baTable.onSubmit(e.formRef), ['enter'])),
                                                                  model: e.baTable.form.items,
                                                                  'label-position': e.config.layout.shrink ? 'top' : 'right',
                                                                  'label-width': e.baTable.form.labelWidth + 'px',
                                                                  rules: e.rules,
                                                              },
                                                              {
                                                                  default: r(() => [
                                                                      d(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('auth.group.Parent group'),
                                                                              modelValue: e.baTable.form.items.pid,
                                                                              'onUpdate:modelValue':
                                                                                  a[0] || (a[0] = (t) => (e.baTable.form.items.pid = t)),
                                                                              type: 'remoteSelect',
                                                                              prop: 'pid',
                                                                              'input-attr': {
                                                                                  params: { isTree: !0 },
                                                                                  field: 'name',
                                                                                  remoteUrl: e.baTable.api.actionUrl.get('index'),
                                                                                  placeholder: e.t('Click select'),
                                                                              },
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ['label', 'modelValue', 'input-attr']
                                                                      ),
                                                                      d(
                                                                          c,
                                                                          { prop: 'name', label: e.t('auth.group.Group name') },
                                                                          {
                                                                              default: r(() => [
                                                                                  d(
                                                                                      n,
                                                                                      {
                                                                                          modelValue: e.baTable.form.items.name,
                                                                                          'onUpdate:modelValue':
                                                                                              a[1] || (a[1] = (t) => (e.baTable.form.items.name = t)),
                                                                                          type: 'string',
                                                                                          placeholder: e.t('Please input field', {
                                                                                              field: e.t('auth.group.Group name'),
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
                                                                      d(
                                                                          c,
                                                                          { prop: 'auth', label: e.t('auth.group.jurisdiction') },
                                                                          {
                                                                              default: r(() => [
                                                                                  (m(),
                                                                                  g(
                                                                                      s,
                                                                                      {
                                                                                          ref: 'treeRef',
                                                                                          key: e.baTable.form.extend.treeKey,
                                                                                          'default-checked-keys':
                                                                                              e.baTable.form.extend.defaultCheckedKeys,
                                                                                          'default-expand-all': !0,
                                                                                          'show-checkbox': '',
                                                                                          'node-key': 'id',
                                                                                          props: {
                                                                                              children: 'children',
                                                                                              label: 'title',
                                                                                              class: e.treeNodeClass,
                                                                                          },
                                                                                          data: e.baTable.form.extend.menuRules,
                                                                                          class: 'w100',
                                                                                      },
                                                                                      null,
                                                                                      8,
                                                                                      ['default-checked-keys', 'props', 'data']
                                                                                  )),
                                                                              ]),
                                                                              _: 1,
                                                                          },
                                                                          8,
                                                                          ['label']
                                                                      ),
                                                                      d(
                                                                          e.FormItem,
                                                                          {
                                                                              label: e.t('State'),
                                                                              modelValue: e.baTable.form.items.status,
                                                                              'onUpdate:modelValue':
                                                                                  a[2] || (a[2] = (t) => (e.baTable.form.items.status = t)),
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
                                [[N, e.baTable.form.loading]]
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
const Y = L(q, [
    ['render', A],
    ['__scopeId', 'data-v-6c8b2ed1'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/auth/group/popupForm.vue'],
])
export { Y as default }
