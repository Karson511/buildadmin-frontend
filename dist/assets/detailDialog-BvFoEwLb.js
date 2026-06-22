import {
    e as P,
    am as j,
    v as A,
    p as B,
    D as R,
    ai as H,
    m as n,
    X as k,
    o as _,
    O as F,
    P as a,
    _ as E,
    h as g,
    W as m,
    l as e,
    V as s,
    U as l,
    k as h,
    Z as w,
} from './vue-Rh7pEvFB.js'
import { f as L, a0 as O, _ as Z } from './index-BfqXFxxp.js'
import { d as q } from './posts-CUZwLQo2.js'
import { q as W } from './marked.esm-GmWPvxak.js'
const X = P({
        __name: 'detailDialog',
        setup(z, { expose: u }) {
            u()
            const y = new W(),
                t = (i) => (i ? (/<[a-zA-Z][^>]*>/.test(i) ? i : y.parse(i)) : ''),
                b = j('baTable'),
                { t: x } = A.useI18n(),
                r = B(!1),
                f = B(null),
                T = (i) => ({ 1: 'warning', 2: 'success', 3: 'danger', 4: 'info', 5: 'warning', 6: 'danger' })[i] || 'info',
                D = (i) => ({ 1: 'warning', 2: 'success', 3: 'danger' })[i] || 'info'
            R(
                () => b.form.operate,
                (i) => {
                    var d
                    i === 'Detail' && (d = b.form.items) != null && d.id && p(b.form.items.id)
                }
            )
            const p = (i) => {
                    ;(r.value = !0),
                        (f.value = null),
                        q(i)
                            .then((d) => {
                                f.value = d.data
                            })
                            .catch(() => {
                                H.error('Failed to load post detail'), b.toggleForm()
                            })
                            .finally(() => {
                                r.value = !1
                            })
                },
                v = {
                    marked: y,
                    renderMarkdown: t,
                    baTable: b,
                    t: x,
                    loading: r,
                    detailData: f,
                    postStatusTagType: T,
                    draftStatusTagType: D,
                    loadDetail: p,
                    get timeFormat() {
                        return O
                    },
                    get fullUrl() {
                        return L
                    },
                }
            return Object.defineProperty(v, '__isScriptSetup', { enumerable: !1, value: !0 }), v
        },
    }),
    G = { class: 'title' },
    J = { key: 0, class: 'detail-dialog-content' },
    K = { class: 'author-info-cell' },
    Q = ['innerHTML']
function Y(z, u, y, t, b, x) {
    const r = n('el-descriptions-item'),
        f = n('el-tag'),
        T = n('el-image'),
        D = n('el-descriptions'),
        p = n('el-divider'),
        v = n('el-alert'),
        i = n('el-text'),
        d = n('el-scrollbar'),
        U = n('el-button'),
        I = n('el-dialog'),
        N = k('drag'),
        V = k('zoom'),
        M = k('loading')
    return (
        _(),
        F(
            I,
            {
                class: 'ba-operate-dialog',
                'close-on-click-modal': !1,
                'destroy-on-close': !0,
                'model-value': t.baTable.form.operate === 'Detail',
                onClose: u[1] || (u[1] = () => t.baTable.toggleForm()),
                width: '800px',
                top: '5vh',
            },
            {
                header: a(() => [
                    E((_(), g('div', G, [s(l(t.t('posts.posts.Post Detail')), 1)])), [
                        [N, ['.ba-operate-dialog', '.el-dialog__header']],
                        [V, '.ba-operate-dialog'],
                    ]),
                ]),
                footer: a(() => [
                    e(
                        U,
                        { onClick: u[0] || (u[0] = () => t.baTable.toggleForm()) },
                        { default: a(() => [s(l(t.t('posts.posts.Cancel')), 1)]), _: 1 }
                    ),
                ]),
                default: a(() => [
                    E(
                        (_(),
                        F(
                            d,
                            { class: 'ba-table-form-scrollbar' },
                            {
                                default: a(() => {
                                    var C, S
                                    return [
                                        !t.loading && t.detailData
                                            ? (_(),
                                              g('div', J, [
                                                  m(' 帖子基本信息 '),
                                                  e(
                                                      D,
                                                      { column: 2, border: '', class: 'mb-20' },
                                                      {
                                                          default: a(() => [
                                                              e(
                                                                  r,
                                                                  { label: t.t('posts.posts.Post ID') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [s(l((o = t.detailData.post) == null ? void 0 : o.id), 1)]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              e(
                                                                  r,
                                                                  { label: t.t('posts.posts.Post Type') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [
                                                                              e(
                                                                                  f,
                                                                                  {
                                                                                      type:
                                                                                          ((o = t.detailData.post) == null ? void 0 : o.post_type) ===
                                                                                          1
                                                                                              ? 'primary'
                                                                                              : 'warning',
                                                                                      size: 'small',
                                                                                  },
                                                                                  {
                                                                                      default: a(() => {
                                                                                          var c
                                                                                          return [
                                                                                              s(
                                                                                                  l(
                                                                                                      ((c = t.detailData.post) == null
                                                                                                          ? void 0
                                                                                                          : c.post_type) === 1
                                                                                                          ? t.t('posts.posts.Topic')
                                                                                                          : t.t('posts.posts.Resource')
                                                                                                  ),
                                                                                                  1
                                                                                              ),
                                                                                          ]
                                                                                      }),
                                                                                      _: 1,
                                                                                  },
                                                                                  8,
                                                                                  ['type']
                                                                              ),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              e(
                                                                  r,
                                                                  { label: t.t('posts.posts.Author Nickname') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o, c
                                                                          return [
                                                                              h('div', K, [
                                                                                  (o = t.detailData.user) != null && o.avatar
                                                                                      ? (_(),
                                                                                        F(
                                                                                            T,
                                                                                            {
                                                                                                key: 0,
                                                                                                src: t.fullUrl(t.detailData.user.avatar),
                                                                                                class: 'author-avatar',
                                                                                                fit: 'cover',
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            ['src']
                                                                                        ))
                                                                                      : m('v-if', !0),
                                                                                  h(
                                                                                      'span',
                                                                                      null,
                                                                                      l(
                                                                                          ((c = t.detailData.user) == null ? void 0 : c.nickname) ||
                                                                                              '-'
                                                                                      ),
                                                                                      1
                                                                                  ),
                                                                              ]),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              e(
                                                                  r,
                                                                  { label: t.t('posts.posts.Status') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [
                                                                              e(
                                                                                  f,
                                                                                  {
                                                                                      type: t.postStatusTagType(
                                                                                          (o = t.detailData.post) == null ? void 0 : o.status
                                                                                      ),
                                                                                      size: 'small',
                                                                                  },
                                                                                  {
                                                                                      default: a(() => {
                                                                                          var c
                                                                                          return [
                                                                                              s(
                                                                                                  l(
                                                                                                      ((c = t.detailData.post) == null
                                                                                                          ? void 0
                                                                                                          : c.status_text) || '-'
                                                                                                  ),
                                                                                                  1
                                                                                              ),
                                                                                          ]
                                                                                      }),
                                                                                      _: 1,
                                                                                  },
                                                                                  8,
                                                                                  ['type']
                                                                              ),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              e(
                                                                  r,
                                                                  { label: t.t('posts.posts.Title'), span: 2 },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [
                                                                              s(l(((o = t.detailData.post) == null ? void 0 : o.title) || '-'), 1),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              e(
                                                                  r,
                                                                  { label: t.t('posts.posts.Create Time') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [
                                                                              s(
                                                                                  l(
                                                                                      t.timeFormat(
                                                                                          (o = t.detailData.post) == null ? void 0 : o.create_time
                                                                                      )
                                                                                  ),
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                              e(
                                                                  r,
                                                                  { label: t.t('posts.posts.Update Time') },
                                                                  {
                                                                      default: a(() => {
                                                                          var o
                                                                          return [
                                                                              s(
                                                                                  l(
                                                                                      t.timeFormat(
                                                                                          (o = t.detailData.post) == null ? void 0 : o.update_time
                                                                                      )
                                                                                  ),
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      }),
                                                                      _: 1,
                                                                  },
                                                                  8,
                                                                  ['label']
                                                              ),
                                                          ]),
                                                          _: 1,
                                                      }
                                                  ),
                                                  m(' 帖子正文 '),
                                                  e(
                                                      p,
                                                      { 'content-position': 'left' },
                                                      { default: a(() => [s(l(t.t('posts.posts.Content')), 1)]), _: 1 }
                                                  ),
                                                  h(
                                                      'div',
                                                      {
                                                          class: 'content-preview',
                                                          innerHTML: t.renderMarkdown((C = t.detailData.post) == null ? void 0 : C.content),
                                                      },
                                                      null,
                                                      8,
                                                      Q
                                                  ),
                                                  m(' 拒绝/下架原因 '),
                                                  (S = t.detailData.post) != null && S.refuse_remark
                                                      ? (_(),
                                                        g(
                                                            w,
                                                            { key: 0 },
                                                            [
                                                                e(
                                                                    p,
                                                                    { 'content-position': 'left' },
                                                                    { default: a(() => [s(l(t.t('posts.posts.Refuse Remark')), 1)]), _: 1 }
                                                                ),
                                                                e(
                                                                    v,
                                                                    {
                                                                        title: t.detailData.post.refuse_remark,
                                                                        type: 'error',
                                                                        closable: !1,
                                                                        'show-icon': '',
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ['title']
                                                                ),
                                                            ],
                                                            64
                                                        ))
                                                      : m('v-if', !0),
                                                  m(' 草稿信息（如有） '),
                                                  t.detailData.draft
                                                      ? (_(),
                                                        g(
                                                            w,
                                                            { key: 1 },
                                                            [
                                                                e(
                                                                    p,
                                                                    { 'content-position': 'left' },
                                                                    { default: a(() => [s(l(t.t('posts.posts.Draft Info')), 1)]), _: 1 }
                                                                ),
                                                                e(
                                                                    D,
                                                                    { column: 3, border: '', size: 'small' },
                                                                    {
                                                                        default: a(() => [
                                                                            e(
                                                                                r,
                                                                                { label: t.t('posts.posts.Draft Status') },
                                                                                {
                                                                                    default: a(() => [
                                                                                        e(
                                                                                            f,
                                                                                            {
                                                                                                type: t.draftStatusTagType(
                                                                                                    t.detailData.draft.audit_status
                                                                                                ),
                                                                                                size: 'small',
                                                                                            },
                                                                                            {
                                                                                                default: a(() => [
                                                                                                    s(l(t.detailData.draft.audit_status_text), 1),
                                                                                                ]),
                                                                                                _: 1,
                                                                                            },
                                                                                            8,
                                                                                            ['type']
                                                                                        ),
                                                                                    ]),
                                                                                    _: 1,
                                                                                },
                                                                                8,
                                                                                ['label']
                                                                            ),
                                                                            e(
                                                                                r,
                                                                                { label: t.t('posts.posts.Draft Version') },
                                                                                {
                                                                                    default: a(() => [s(' v' + l(t.detailData.draft.version), 1)]),
                                                                                    _: 1,
                                                                                },
                                                                                8,
                                                                                ['label']
                                                                            ),
                                                                            e(
                                                                                r,
                                                                                { label: t.t('posts.posts.Update Time') },
                                                                                {
                                                                                    default: a(() => [
                                                                                        s(l(t.timeFormat(t.detailData.draft.update_time)), 1),
                                                                                    ]),
                                                                                    _: 1,
                                                                                },
                                                                                8,
                                                                                ['label']
                                                                            ),
                                                                        ]),
                                                                        _: 1,
                                                                    }
                                                                ),
                                                            ],
                                                            64
                                                        ))
                                                      : (_(),
                                                        g(
                                                            w,
                                                            { key: 2 },
                                                            [
                                                                e(
                                                                    p,
                                                                    { 'content-position': 'left' },
                                                                    { default: a(() => [s(l(t.t('posts.posts.Draft Info')), 1)]), _: 1 }
                                                                ),
                                                                e(
                                                                    i,
                                                                    { type: 'info' },
                                                                    { default: a(() => [s(l(t.t('posts.posts.No draft record')), 1)]), _: 1 }
                                                                ),
                                                            ],
                                                            64
                                                        )),
                                              ]))
                                            : m('v-if', !0),
                                    ]
                                }),
                                _: 1,
                            }
                        )),
                        [[M, t.loading]]
                    ),
                ]),
                _: 1,
            },
            8,
            ['model-value']
        )
    )
}
const ot = Z(X, [
    ['render', Y],
    ['__scopeId', 'data-v-6b1e024f'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/posts/posts/detailDialog.vue'],
])
export { ot as default }
