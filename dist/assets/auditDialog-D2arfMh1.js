import {
    e as P,
    am as W,
    v as Z,
    p as k,
    f as I,
    D as q,
    ai as R,
    ag as Q,
    m,
    X as M,
    o as f,
    h as b,
    l as o,
    P as a,
    _ as O,
    O as C,
    W as u,
    k as s,
    U as r,
    V as p,
    Z as V,
    Y as X,
} from './vue-Rh7pEvFB.js'
import { c as x, f as Y, _ as G } from './index-BfqXFxxp.js'
import { q as J } from './marked.esm-GmWPvxak.js'
const E = '/admin/posts.postAuditDrafts/'
function K(g) {
    return x({ url: E + 'detail', method: 'get', params: { post_id: g } })
}
function $(g, c) {
    return x({ url: E + 'approve', method: 'post', data: { post_id: g, version: c } }, { showSuccessMessage: !0 })
}
function tt(g, c, j) {
    return x({ url: E + 'reject', method: 'post', data: { post_id: g, remark: c, version: j } }, { showSuccessMessage: !0 })
}
const et = P({
        __name: 'auditDialog',
        setup(g, { expose: c }) {
            c()
            const j = new J(),
                t = (e) => (e ? (/<[a-zA-Z][^>]*>/.test(e) ? e : j.parse(e)) : ''),
                _ = W('baTable'),
                { t: d } = Z.useI18n(),
                F = k(!1),
                l = k(null),
                D = k(!1),
                v = k(''),
                y = I(() => [
                    d('posts.postAuditDrafts.Contains WeChat contact for traffic diversion'),
                    d('posts.postAuditDrafts.Contains politically sensitive words'),
                    d('posts.postAuditDrafts.Content is vulgar or spam'),
                    d('posts.postAuditDrafts.Contains false advertising'),
                    d('posts.postAuditDrafts.Involves personal privacy leakage'),
                ]),
                T = I(() => {
                    var e
                    return (e = l.value) != null && e.post && l.value.post.status === 5 ? 'diff' : 'first'
                })
            q(
                () => _.form.operate,
                (e) => {
                    var i
                    e === 'Info' && (i = _.form.items) != null && i.post_id && h(_.form.items.post_id)
                }
            )
            const h = (e) => {
                    ;(F.value = !0),
                        (l.value = null),
                        K(e)
                            .then((i) => {
                                l.value = i.data
                            })
                            .catch(() => {
                                R.error('Failed to load audit detail'), _.toggleForm()
                            })
                            .finally(() => {
                                F.value = !1
                            })
                },
                w = {
                    marked: j,
                    renderMarkdown: t,
                    baTable: _,
                    t: d,
                    loading: F,
                    detailData: l,
                    rejectDialogVisible: D,
                    rejectReason: v,
                    rejectTemplates: y,
                    viewMode: T,
                    loadDetail: h,
                    applyRejectTemplate: (e) => {
                        v.value = v.value ? v.value + '；' + e : e
                    },
                    onApprove: () => {
                        var e, i
                        ;(i = (e = l.value) == null ? void 0 : e.draft) != null &&
                            i.post_id &&
                            Q.confirm(d('posts.postAuditDrafts.Approve confirm'), d('posts.postAuditDrafts.Approve'), {
                                confirmButtonText: d('posts.postAuditDrafts.Confirm'),
                                cancelButtonText: d('posts.postAuditDrafts.Cancel'),
                                type: 'success',
                            })
                                .then(() => {
                                    $(l.value.draft.post_id, l.value.draft.version).then(() => {
                                        R.success(d('posts.postAuditDrafts.Approved')), _.toggleForm(), _.onTableHeaderAction('refresh', {})
                                    })
                                })
                                .catch(() => {})
                    },
                    onReject: () => {
                        ;(v.value = ''), (D.value = !0)
                    },
                    confirmReject: () => {
                        var e, i
                        !((i = (e = l.value) == null ? void 0 : e.draft) != null && i.post_id) ||
                            !v.value.trim() ||
                            tt(l.value.draft.post_id, v.value.trim(), l.value.draft.version).then(() => {
                                R.success(d('posts.postAuditDrafts.Rejected')), (D.value = !1), _.toggleForm(), _.onTableHeaderAction('refresh', {})
                            })
                    },
                    get fullUrl() {
                        return Y
                    },
                }
            return Object.defineProperty(w, '__isScriptSetup', { enumerable: !1, value: !0 }), w
        },
    }),
    at = { class: 'title' },
    ot = { key: 0, class: 'audit-dialog-content' },
    st = { key: 0, class: 'first-publish-view' },
    lt = { class: 'author-info-cell' },
    it = { class: 'draft-title' },
    rt = ['innerHTML'],
    nt = { class: 'author-info-cell' },
    dt = { class: 'diff-view' },
    ct = { class: 'diff-panel diff-panel-old' },
    ut = { class: 'diff-panel-header' },
    ft = { class: 'diff-panel-body' },
    pt = { class: 'diff-title' },
    _t = ['innerHTML'],
    vt = { class: 'diff-panel diff-panel-new' },
    mt = { class: 'diff-panel-header' },
    Dt = { class: 'diff-panel-body' },
    At = { class: 'diff-title new-title' },
    gt = ['innerHTML'],
    ht = { key: 0, class: 'dialog-footer' },
    bt = { class: 'reject-templates' },
    Ft = { class: 'reject-templates-label' }
function jt(g, c, j, t, _, d) {
    const F = m('el-image'),
        l = m('el-descriptions-item'),
        D = m('el-tag'),
        v = m('el-descriptions'),
        y = m('el-divider'),
        T = m('el-scrollbar'),
        h = m('el-button'),
        B = m('el-dialog'),
        U = m('el-input'),
        H = M('drag'),
        S = M('zoom'),
        w = M('loading')
    return (
        f(),
        b(
            V,
            null,
            [
                o(
                    B,
                    {
                        class: 'ba-operate-dialog',
                        'close-on-click-modal': !1,
                        'destroy-on-close': !0,
                        'model-value': t.baTable.form.operate === 'Info',
                        onClose: t.baTable.toggleForm,
                        width: '960px',
                        top: '5vh',
                    },
                    {
                        header: a(() => [
                            O((f(), b('div', at, [p(r(t.t('posts.postAuditDrafts.Audit Detail')), 1)])), [
                                [H, ['.ba-operate-dialog', '.el-dialog__header']],
                                [S, '.ba-operate-dialog'],
                            ]),
                        ]),
                        footer: a(() => {
                            var e, i
                            return [
                                ((i = (e = t.detailData) == null ? void 0 : e.draft) == null ? void 0 : i.audit_status) === 1
                                    ? (f(),
                                      b('div', ht, [
                                          o(
                                              h,
                                              { type: 'danger', onClick: t.onReject },
                                              { default: a(() => [p(r(t.t('posts.postAuditDrafts.Reject')), 1)]), _: 1 }
                                          ),
                                          o(
                                              h,
                                              { type: 'success', onClick: t.onApprove },
                                              { default: a(() => [p(r(t.t('posts.postAuditDrafts.Approve')), 1)]), _: 1 }
                                          ),
                                      ]))
                                    : u('v-if', !0),
                            ]
                        }),
                        default: a(() => [
                            O(
                                (f(),
                                C(
                                    T,
                                    { class: 'ba-table-form-scrollbar' },
                                    {
                                        default: a(() => {
                                            var e, i, z, L, N
                                            return [
                                                !t.loading && t.detailData
                                                    ? (f(),
                                                      b('div', ot, [
                                                          u(' ====== 视图 A：首次发布（status = 1）====== '),
                                                          t.viewMode === 'first'
                                                              ? (f(),
                                                                b('div', st, [
                                                                    u(' 作者信息 '),
                                                                    o(
                                                                        v,
                                                                        { column: 2, border: '', class: 'mb-20' },
                                                                        {
                                                                            default: a(() => [
                                                                                o(
                                                                                    l,
                                                                                    { label: t.t('posts.postAuditDrafts.Author Nickname') },
                                                                                    {
                                                                                        default: a(() => {
                                                                                            var n, A
                                                                                            return [
                                                                                                s('div', lt, [
                                                                                                    (n = t.detailData.user) != null && n.avatar
                                                                                                        ? (f(),
                                                                                                          C(
                                                                                                              F,
                                                                                                              {
                                                                                                                  key: 0,
                                                                                                                  src: t.fullUrl(
                                                                                                                      t.detailData.user.avatar
                                                                                                                  ),
                                                                                                                  class: 'author-avatar',
                                                                                                                  fit: 'cover',
                                                                                                              },
                                                                                                              null,
                                                                                                              8,
                                                                                                              ['src']
                                                                                                          ))
                                                                                                        : u('v-if', !0),
                                                                                                    s(
                                                                                                        'span',
                                                                                                        null,
                                                                                                        r(
                                                                                                            ((A = t.detailData.user) == null
                                                                                                                ? void 0
                                                                                                                : A.nickname) || '-'
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
                                                                                o(
                                                                                    l,
                                                                                    { label: t.t('posts.postAuditDrafts.Post Type') },
                                                                                    {
                                                                                        default: a(() => {
                                                                                            var n
                                                                                            return [
                                                                                                o(
                                                                                                    D,
                                                                                                    {
                                                                                                        type:
                                                                                                            ((n = t.detailData.draft) == null
                                                                                                                ? void 0
                                                                                                                : n.post_type) === 1
                                                                                                                ? 'primary'
                                                                                                                : 'warning',
                                                                                                        size: 'small',
                                                                                                    },
                                                                                                    {
                                                                                                        default: a(() => {
                                                                                                            var A
                                                                                                            return [
                                                                                                                p(
                                                                                                                    r(
                                                                                                                        ((A = t.detailData.draft) ==
                                                                                                                        null
                                                                                                                            ? void 0
                                                                                                                            : A.post_type) === 1
                                                                                                                            ? t.t(
                                                                                                                                  'posts.postAuditDrafts.Topic'
                                                                                                                              )
                                                                                                                            : t.t(
                                                                                                                                  'posts.postAuditDrafts.Resource'
                                                                                                                              )
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
                                                                                o(
                                                                                    l,
                                                                                    { label: t.t('posts.postAuditDrafts.Draft Title'), span: 2 },
                                                                                    {
                                                                                        default: a(() => {
                                                                                            var n
                                                                                            return [
                                                                                                s(
                                                                                                    'span',
                                                                                                    it,
                                                                                                    r(
                                                                                                        (n = t.detailData.draft) == null
                                                                                                            ? void 0
                                                                                                            : n.title
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
                                                                    u(' 提审正文 '),
                                                                    o(
                                                                        y,
                                                                        { 'content-position': 'left' },
                                                                        {
                                                                            default: a(() => [p(r(t.t('posts.postAuditDrafts.Draft Content')), 1)]),
                                                                            _: 1,
                                                                        }
                                                                    ),
                                                                    s(
                                                                        'div',
                                                                        {
                                                                            class: 'content-preview',
                                                                            innerHTML: t.renderMarkdown(
                                                                                (e = t.detailData.draft) == null ? void 0 : e.content
                                                                            ),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        rt
                                                                    ),
                                                                ]))
                                                              : t.viewMode === 'diff'
                                                                ? (f(),
                                                                  b(
                                                                      V,
                                                                      { key: 1 },
                                                                      [
                                                                          u(' ====== 视图 B：内容变更（status = 5）—— 左右分栏对比 ===== '),
                                                                          o(
                                                                              v,
                                                                              { column: 2, border: '', class: 'mb-20' },
                                                                              {
                                                                                  default: a(() => [
                                                                                      o(
                                                                                          l,
                                                                                          { label: t.t('posts.postAuditDrafts.Author Nickname') },
                                                                                          {
                                                                                              default: a(() => {
                                                                                                  var n, A
                                                                                                  return [
                                                                                                      s('div', nt, [
                                                                                                          (n = t.detailData.user) != null && n.avatar
                                                                                                              ? (f(),
                                                                                                                C(
                                                                                                                    F,
                                                                                                                    {
                                                                                                                        key: 0,
                                                                                                                        src: t.fullUrl(
                                                                                                                            t.detailData.user.avatar
                                                                                                                        ),
                                                                                                                        class: 'author-avatar',
                                                                                                                        fit: 'cover',
                                                                                                                    },
                                                                                                                    null,
                                                                                                                    8,
                                                                                                                    ['src']
                                                                                                                ))
                                                                                                              : u('v-if', !0),
                                                                                                          s(
                                                                                                              'span',
                                                                                                              null,
                                                                                                              r(
                                                                                                                  ((A = t.detailData.user) == null
                                                                                                                      ? void 0
                                                                                                                      : A.nickname) || '-'
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
                                                                                      o(
                                                                                          l,
                                                                                          { label: t.t('posts.postAuditDrafts.Version') },
                                                                                          {
                                                                                              default: a(() => {
                                                                                                  var n
                                                                                                  return [
                                                                                                      p(
                                                                                                          ' v' +
                                                                                                              r(
                                                                                                                  (n = t.detailData.draft) == null
                                                                                                                      ? void 0
                                                                                                                      : n.version
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
                                                                          s('div', dt, [
                                                                              u(' 左栏：线上老版本（只读） '),
                                                                              s('div', ct, [
                                                                                  s('div', ut, [
                                                                                      o(
                                                                                          D,
                                                                                          { type: 'info', size: 'small' },
                                                                                          {
                                                                                              default: a(() => [
                                                                                                  p(
                                                                                                      r(
                                                                                                          t.t(
                                                                                                              'posts.postAuditDrafts.Online Version (Read Only)'
                                                                                                          )
                                                                                                      ),
                                                                                                      1
                                                                                                  ),
                                                                                              ]),
                                                                                              _: 1,
                                                                                          }
                                                                                      ),
                                                                                  ]),
                                                                                  s('div', ft, [
                                                                                      s(
                                                                                          'h3',
                                                                                          pt,
                                                                                          r(
                                                                                              ((i = t.detailData.post) == null ? void 0 : i.title) ||
                                                                                                  '-'
                                                                                          ),
                                                                                          1
                                                                                      ),
                                                                                      o(y),
                                                                                      s(
                                                                                          'div',
                                                                                          {
                                                                                              class: 'content-preview',
                                                                                              innerHTML: t.renderMarkdown(
                                                                                                  (z = t.detailData.post) == null ? void 0 : z.content
                                                                                              ),
                                                                                          },
                                                                                          null,
                                                                                          8,
                                                                                          _t
                                                                                      ),
                                                                                  ]),
                                                                              ]),
                                                                              u(' 右栏：提审新版本 '),
                                                                              s('div', vt, [
                                                                                  s('div', mt, [
                                                                                      o(
                                                                                          D,
                                                                                          { type: 'warning', size: 'small' },
                                                                                          {
                                                                                              default: a(() => [
                                                                                                  p(
                                                                                                      r(
                                                                                                          t.t(
                                                                                                              'posts.postAuditDrafts.New Version (Under Review)'
                                                                                                          )
                                                                                                      ),
                                                                                                      1
                                                                                                  ),
                                                                                              ]),
                                                                                              _: 1,
                                                                                          }
                                                                                      ),
                                                                                  ]),
                                                                                  s('div', Dt, [
                                                                                      s(
                                                                                          'h3',
                                                                                          At,
                                                                                          r(
                                                                                              ((L = t.detailData.draft) == null ? void 0 : L.title) ||
                                                                                                  '-'
                                                                                          ),
                                                                                          1
                                                                                      ),
                                                                                      o(y),
                                                                                      s(
                                                                                          'div',
                                                                                          {
                                                                                              class: 'content-preview',
                                                                                              innerHTML: t.renderMarkdown(
                                                                                                  (N = t.detailData.draft) == null
                                                                                                      ? void 0
                                                                                                      : N.content
                                                                                              ),
                                                                                          },
                                                                                          null,
                                                                                          8,
                                                                                          gt
                                                                                      ),
                                                                                  ]),
                                                                              ]),
                                                                          ]),
                                                                      ],
                                                                      64
                                                                  ))
                                                                : u('v-if', !0),
                                                      ]))
                                                    : u('v-if', !0),
                                            ]
                                        }),
                                        _: 1,
                                    }
                                )),
                                [[w, t.loading]]
                            ),
                        ]),
                        _: 1,
                    },
                    8,
                    ['model-value', 'onClose']
                ),
                u(' 拒绝弹窗 '),
                o(
                    B,
                    {
                        modelValue: t.rejectDialogVisible,
                        'onUpdate:modelValue': c[2] || (c[2] = (e) => (t.rejectDialogVisible = e)),
                        title: t.t('posts.postAuditDrafts.Reject'),
                        width: '500px',
                        'close-on-click-modal': !1,
                        'destroy-on-close': '',
                    },
                    {
                        footer: a(() => [
                            o(
                                h,
                                { onClick: c[1] || (c[1] = (e) => (t.rejectDialogVisible = !1)) },
                                { default: a(() => [p(r(t.t('posts.postAuditDrafts.Cancel')), 1)]), _: 1 }
                            ),
                            o(
                                h,
                                { type: 'danger', disabled: !t.rejectReason.trim(), onClick: t.confirmReject },
                                { default: a(() => [p(r(t.t('posts.postAuditDrafts.Confirm')), 1)]), _: 1 },
                                8,
                                ['disabled']
                            ),
                        ]),
                        default: a(() => [
                            s('div', bt, [
                                s('span', Ft, r(t.t('posts.postAuditDrafts.Quick reject templates')) + '：', 1),
                                (f(!0),
                                b(
                                    V,
                                    null,
                                    X(
                                        t.rejectTemplates,
                                        (e) => (
                                            f(),
                                            C(
                                                D,
                                                { key: e, class: 'reject-template-tag', effect: 'plain', onClick: (i) => t.applyRejectTemplate(e) },
                                                { default: a(() => [p(r(e), 1)]), _: 2 },
                                                1032,
                                                ['onClick']
                                            )
                                        )
                                    ),
                                    128
                                )),
                            ]),
                            o(
                                U,
                                {
                                    modelValue: t.rejectReason,
                                    'onUpdate:modelValue': c[0] || (c[0] = (e) => (t.rejectReason = e)),
                                    type: 'textarea',
                                    rows: 4,
                                    placeholder: t.t('posts.postAuditDrafts.Please enter rejection reason'),
                                    maxlength: '500',
                                    'show-word-limit': '',
                                },
                                null,
                                8,
                                ['modelValue', 'placeholder']
                            ),
                        ]),
                        _: 1,
                    },
                    8,
                    ['modelValue', 'title']
                ),
            ],
            64
        )
    )
}
const yt = G(et, [
        ['render', jt],
        ['__scopeId', 'data-v-c05a4bb5'],
        ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/posts/audit/auditDialog.vue'],
    ]),
    Tt = Object.freeze(Object.defineProperty({ __proto__: null, default: yt }, Symbol.toStringTag, { value: 'Module' }))
export { yt as A, Tt as a, E as u }
