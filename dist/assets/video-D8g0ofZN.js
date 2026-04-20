import {
    e as x,
    p as c,
    D as k,
    C as V,
    m as C,
    o as i,
    h as l,
    _,
    ae as y,
    k as v,
    j as h,
    W as f,
    ap as g,
    l as P,
    P as S,
} from './vue-Rh7pEvFB.js'
import { _ as L } from './play-CnVQomD0.js'
import { _ as N } from './index-BinDduO1.js'
const B = x({
        __name: 'video',
        props: {
            width: { type: String, default: '60' },
            height: { type: String, default: '60' },
            fit: { type: String, default: 'none' },
            src: { type: String, default: '' },
            customPreview: { type: Boolean, default: !1 },
            enablePreview: { type: Boolean, default: !1 },
            enableCustomError: { type: Boolean, default: !1 },
        },
        emits: ['loadeddataCallback', 'openPreviewCallback'],
        setup(s, { expose: n, emit: e }) {
            n()
            const t = s,
                r = e,
                u = c(!1),
                d = c(!0),
                o = c(!1),
                a = c(null),
                m = () => {
                    a.value && ((o.value = !0), r('loadeddataCallback', a.value))
                }
            k(u, (p) => {
                p && a.value && a.value.load()
            })
            const b = () => {
                console.log(t.enablePreview, o.value),
                    t.enablePreview && o.value
                        ? ((u.value = !0), r('openPreviewCallback', t.customPreview))
                        : a.value && a.value.paused
                          ? ((d.value = !1), a.value.play())
                          : a.value && (a.value.pause(), (d.value = !0))
            }
            V(() => {
                a.value && a.value.addEventListener('loadedmetadata', m)
            })
            const w = { props: t, emit: r, showVideo: u, showPlayIcon: d, isLoaded: o, myvideo: a, handleLoadedMetadata: m, viewVideo: b }
            return Object.defineProperty(w, '__isScriptSetup', { enumerable: !1, value: !0 }), w
        },
    }),
    D = ['width', 'height', 'src'],
    E = { key: 0 },
    j = { key: 1, class: 'errorIcon' },
    I = { key: 0, style: { margin: '100px auto', width: '800px', height: '600px' } },
    M = ['src'],
    F = { key: 1 }
function U(s, n, e, t, r, u) {
    const d = C('el-dialog')
    return (
        i(),
        l('div', null, [
            _(
                v(
                    'div',
                    { class: 'el-video-box', onClick: t.viewVideo, style: h({ width: `${e.width}px`, height: `${e.height}px` }) },
                    [
                        v(
                            'video',
                            {
                                onLoadedmetadata: t.handleLoadedMetadata,
                                width: e.width,
                                height: e.height,
                                style: h({ objectFit: e.fit }),
                                ref: 'myvideo',
                                src: e.src,
                            },
                            null,
                            44,
                            D
                        ),
                        t.showPlayIcon
                            ? (i(),
                              l(
                                  'img',
                                  {
                                      key: 0,
                                      src: L,
                                      style: h([
                                          { position: 'absolute' },
                                          {
                                              width: `${Number(e.width) / 2}px`,
                                              height: `${Number(e.height) / 2}px`,
                                              top: `${Number(e.height) / 4}px`,
                                              left: `${Number(e.width) / 4}px`,
                                          },
                                      ]),
                                  },
                                  null,
                                  4
                              ))
                            : f('v-if', !0),
                    ],
                    4
                ),
                [[y, t.isLoaded]]
            ),
            _(
                v(
                    'div',
                    { class: 'el-video-box error-box', onClick: t.viewVideo, style: h({ width: `${e.width}px`, height: `${e.height}px` }) },
                    [e.enableCustomError ? (i(), l('div', E, [g(s.$slots, 'customError', {}, void 0, !0)])) : (i(), l('span', j, '加载失败'))],
                    4
                ),
                [[y, !t.isLoaded]]
            ),
            P(
                d,
                {
                    modelValue: t.showVideo,
                    'onUpdate:modelValue': n[0] || (n[0] = (o) => (t.showVideo = o)),
                    fullscreen: !0,
                    class: 'videoDialog',
                    'append-to-body': '',
                },
                {
                    default: S(() => [
                        e.customPreview
                            ? f('v-if', !0)
                            : (i(), l('div', I, [v('video', { width: '800', height: '600', controls: '', ref: 'video', src: e.src }, null, 8, M)])),
                        e.customPreview ? (i(), l('div', F, [g(s.$slots, 'previewVideo', {}, void 0, !0)])) : f('v-if', !0),
                    ]),
                    _: 3,
                },
                8,
                ['modelValue']
            ),
        ])
    )
}
const W = N(B, [
    ['render', U],
    ['__scopeId', 'data-v-500678d0'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/shop/user/video.vue'],
])
export { W as default }
