import { e as p, C as i, aA as c, aD as m, ab as d, o, h as _, O as u, aj as f } from './vue-Rh7pEvFB.js'
import l from './start-C_3FKyum.js'
import v from './design-BeiS767K.js'
import { s as x } from './crud-D7WC8YV5.js'
import { ao as a, ap as r, _ as b } from './index-BBRbF7Py.js'
import './index--JHPdKE_.js'
import './index-tUPoOQPz.js'
import './index-pVkqPv71.js'
import './validate-D9h_hteB.js'
import './log-BtZOGDSG.js'
const k = p({
    name: 'crud/crud',
    components: { Start: l, Design: v },
    __name: 'index',
    setup(n, { expose: t }) {
        t(),
            i(() => {
                a()
            }),
            c(() => {
                a()
            }),
            m(() => {
                r()
            }),
            d(() => {
                r()
            })
        const e = {
            get state() {
                return x
            },
        }
        return Object.defineProperty(e, '__isScriptSetup', { enumerable: !1, value: !0 }), e
    },
})
function h(n, t, e, s, w, D) {
    return o(), _('div', null, [(o(), u(f(s.state.step)))])
}
const O = b(k, [
    ['render', h],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/crud/index.vue'],
])
export { O as default }
