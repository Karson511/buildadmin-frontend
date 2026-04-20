import { e as m, C as s, aA as p, aD as d, ab as c, o as _, h as l, l as e } from './vue-Rh7pEvFB.js'
import { i as f } from './index-oT4ju-Ty.js'
import u from './tableHeader-BAlyNPfK.js'
import b from './baAccount-CM8zvz4C.js'
import v from './tabs-gehPLVAM.js'
import x from './goodsInfo-D2VkPtC7.js'
import h from './commonDialog-DlhE6Idr.js'
import { ao as r, ap as n, _ as D } from './index-BinDduO1.js'
import './store-CHZkxc9s.js'
import './index-DL4HVtqZ.js'
import './index-1fitz5rj.js'
import './index-CY7HLGeR.js'
import './validate-CtRz3DDh.js'
import './buy-DHx5rWx7.js'
import './pay-B6TGLIfS.js'
import './installConflict-CTA5dlzr.js'
import './commonDone-BPWxiEP9.js'
import './uploadInstall-IgHUvlRi.js'
import './confirmFileConflict-BUNdtmyj.js'
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
