import { e as p, C as i, aA as c, aD as m, ab as d, o, h as _, O as u, aj as f } from './vue-Rh7pEvFB.js'
import l from './start-Cs6ZMQSS.js'
import v from './design-NXUnlxiH.js'
import { s as x } from './crud-Brppgsc7.js'
import { ap as a, aq as r, _ as b } from './index-BfqXFxxp.js'
import './index-B8bcfeaY.js'
import './index-cU5Tpy6g.js'
import './index-BL7XGxgx.js'
import './validate-CJqnmgV4.js'
import './log-CQ1p3Xbf.js'
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
