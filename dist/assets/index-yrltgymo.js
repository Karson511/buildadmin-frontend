import { e as m, C as s, aA as p, aD as d, ab as c, o as _, h as l, l as e } from './vue-Rh7pEvFB.js'
import { i as f } from './index-D-bGW2Lo.js'
import u from './tableHeader-Ds1L29PM.js'
import b from './baAccount-Deq9M_1e.js'
import v from './tabs-pcZFstvi.js'
import x from './goodsInfo-NLnoen_l.js'
import h from './commonDialog-CmTw4iY8.js'
import { ao as r, ap as n, _ as D } from './index-BBRbF7Py.js'
import './store-DP7NwxEm.js'
import './index--JHPdKE_.js'
import './index-tUPoOQPz.js'
import './index-pVkqPv71.js'
import './validate-D9h_hteB.js'
import './buy-B5KbOvE5.js'
import './pay-B8SsNaEO.js'
import './installConflict-BNvz4YBS.js'
import './commonDone-Dr5qoUJy.js'
import './uploadInstall-BPoi_bBv.js'
import './confirmFileConflict-MStIv03A.js'
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
