import { e as p, C as i, aA as c, aD as m, ab as d, o, h as _, O as u, aj as f } from './vue-Rh7pEvFB.js'
import l from './start-cnwzCqtS.js'
import v from './design-DHxuCY6U.js'
import { s as x } from './crud-TF_x6On4.js'
import { ao as a, ap as r, _ as b } from './index-BinDduO1.js'
import './index-DL4HVtqZ.js'
import './index-1fitz5rj.js'
import './index-CY7HLGeR.js'
import './validate-CtRz3DDh.js'
import './log-FEVc8SUJ.js'
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
