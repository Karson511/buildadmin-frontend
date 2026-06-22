import { e as f, r as h, m as u, o as p, h as m, k as a, U as t, l as _, P as w, Z as v, V as k, O as $ } from './vue-Rh7pEvFB.js'
import { a6 as g, _ as S } from './index-BfqXFxxp.js'
import { k as b } from './store-Crup8fJ_.js'
import { o as I } from './index-91XudTWA.js'
const y = f({
        __name: 'uploadInstall',
        setup(e, { expose: r }) {
            r()
            const o = h({ uploadState: 'wait-file' }),
                i = {
                    state: o,
                    uploadModule: (l) => {
                        if (!l || !l.raw) return
                        let s = new FormData()
                        s.append('file', l.raw),
                            g(s, {}, !0).then((d) => {
                                d.code == 1 &&
                                    b(d.data.file.url)
                                        .then((c) => {
                                            ;(o.uploadState = 'success'), I(c.data.info.uid, 0)
                                        })
                                        .catch(() => {
                                            o.uploadState = 'wait-file'
                                        })
                            })
                    },
                }
            return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i
        },
    }),
    U = { class: 'upload-install' },
    C = { class: 'tips' },
    B = { class: 'title' },
    T = { class: 'tip-item' },
    V = { class: 'tip-item' },
    D = { class: 'tip-item' },
    F = { class: 'el-upload__text' }
function M(e, r, o, n, i, l) {
    const s = u('Icon'),
        d = u('el-result'),
        c = u('el-upload')
    return (
        p(),
        m('div', U, [
            a('div', C, [
                a('div', B, t(e.$t('module.Local upload warning')), 1),
                a('div', T, '1. ' + t(e.$t('module.The module can modify and add system files')), 1),
                a('div', V, '2. ' + t(e.$t('module.The module can execute sql commands and codes')), 1),
                a('div', D, '3. ' + t(e.$t('module.The module can install new front and rear dependencies')), 1),
            ]),
            _(
                c,
                { class: 'upload-module', 'show-file-list': !1, accept: '.zip', drag: '', 'auto-upload': !1, onChange: n.uploadModule },
                {
                    default: w(() => [
                        n.state.uploadState == 'wait-file'
                            ? (p(),
                              m(
                                  v,
                                  { key: 0 },
                                  [
                                      _(s, { size: '50px', color: '#909399', name: 'el-icon-UploadFilled' }),
                                      a('div', F, [
                                          k(t(e.$t('module.Drag the module package file here')) + ' ', 1),
                                          a('em', null, t(e.$t('module.Click me to upload')), 1),
                                      ]),
                                  ],
                                  64
                              ))
                            : (p(),
                              $(
                                  d,
                                  { key: 1, icon: 'success', 'sub-title': e.$t('module.Uploaded, installation is about to start, please wait') },
                                  null,
                                  8,
                                  ['sub-title']
                              )),
                    ]),
                    _: 1,
                }
            ),
        ])
    )
}
const O = S(y, [
    ['render', M],
    ['__scopeId', 'data-v-52fa8484'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/module/components/uploadInstall.vue'],
])
export { O as default }
