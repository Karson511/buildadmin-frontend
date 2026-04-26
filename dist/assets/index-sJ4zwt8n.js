import { e as m, C as s, aA as p, aD as d, ab as c, o as _, h as l, l as e } from './vue-Rh7pEvFB.js'
import { i as f } from './index-BAP8DTqJ.js'
import u from './tableHeader-Bez1Uk65.js'
import b from './baAccount-CT3h-wKd.js'
import v from './tabs-Dhg2cb7f.js'
import x from './goodsInfo-DLJdJ6FT.js'
import h from './commonDialog-BLl0p22z.js'
import { ap as r, aq as n, _ as D } from './index-C3vonoRT.js'
import './store-BuYTRjF2.js'
import './index-BC54TMpd.js'
import './index-DQwP9Y7u.js'
import './index-CK3pnx59.js'
import './validate-Dr-o2ZDb.js'
import './buy-vmoPHkjn.js'
import './pay-BKdVn44q.js'
import './installConflict-DYioun2o.js'
import './commonDone-B2rbhmln.js'
import './uploadInstall-GKIPvPuI.js'
import './confirmFileConflict-CPojrWm4.js'
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
