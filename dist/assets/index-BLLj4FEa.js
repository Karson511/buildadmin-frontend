import { e as m, C as s, aA as p, aD as d, ab as c, o as _, h as l, l as e } from './vue-Rh7pEvFB.js'
import { i as f } from './index-91XudTWA.js'
import u from './tableHeader-BPIVuZHj.js'
import b from './baAccount-e3mdS4sc.js'
import v from './tabs-9dU2OHwk.js'
import x from './goodsInfo-wZIaEin2.js'
import h from './commonDialog-DAf3O9ZT.js'
import { ap as r, aq as n, _ as D } from './index-BfqXFxxp.js'
import './store-Crup8fJ_.js'
import './index-B8bcfeaY.js'
import './index-cU5Tpy6g.js'
import './index-BL7XGxgx.js'
import './validate-CJqnmgV4.js'
import './buy-DMW-jXgY.js'
import './pay-azHh3JO7.js'
import './installConflict-Whoemay7.js'
import './commonDone-Dmbt-JvO.js'
import './uploadInstall-CdAG57cF.js'
import './confirmFileConflict-qeyGZ60-.js'
const S = m({
        name: 'moduleStore/moduleStore',
        __name: 'index',
        setup(i, { expose: t }) {
            t(),
                s(() => {
                    f(), r()
                }),
                p(() => {
                    r()
                }),
                d(() => {
                    n()
                }),
                c(() => {
                    n()
                })
            const a = { TableHeader: u, BaAccount: b, Tabs: v, GoodsInfo: x, CommonDialog: h }
            return Object.defineProperty(a, '__isScriptSetup', { enumerable: !1, value: !0 }), a
        },
    }),
    k = { class: 'default-main ba-table-box' }
function w(i, t, a, o, A, B) {
    return _(), l('div', k, [e(o.TableHeader), e(o.Tabs), e(o.BaAccount), e(o.GoodsInfo), e(o.CommonDialog)])
}
const K = D(S, [
    ['render', w],
    ['__scopeId', 'data-v-20026239'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/module/index.vue'],
])
export { K as default }
