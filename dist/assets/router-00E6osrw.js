const __vite__fileDeps = [
        './index-DeEcM0CD.js',
        './vue-Rh7pEvFB.js',
        './index-BfqXFxxp.js',
        './footer-DfevwuKA.js',
        './useDark-BwjlQZ0Q.js',
        './darkSwitch-BMcGY7tK.js',
        './balance-C8ZYiwir.js',
        './changePassword-C-0nDwxx.js',
        './validate-CJqnmgV4.js',
        './index-B8bcfeaY.js',
        './index-cU5Tpy6g.js',
        './index-BL7XGxgx.js',
        './integral-CpMoarDu.js',
        './overview-BU3vYUHf.js',
        './echarts-BqpuqYqS.js',
        './profile-BH6YgUFu.js',
        './index-DUgeFlOr.js',
        './login-sus1UsYt.js',
        './index-Cw_Jr1Oo.js',
        './popupForm-BZ0zDDX_.js',
        './index-C_gA6Omc.js',
        './info-C_QnOdFe.js',
        './index-CrP4Ij7g.js',
        './popupForm-CIf8u47-.js',
        './index-jCuXsmht.js',
        './popupForm-Cf9n4cTc.js',
        './design-NXUnlxiH.js',
        './crud-Brppgsc7.js',
        './index-DGPb1UkB.js',
        './start-Cs6ZMQSS.js',
        './log-CQ1p3Xbf.js',
        './dashboard-s1cqCfE_.js',
        './login-header-BfppTrn9.js',
        './login-DBSatFNj.js',
        './index-C592C2U0.js',
        './index-COYv-VSV.js',
        './popupForm-IJRqlNdy.js',
        './baAccount-e3mdS4sc.js',
        './store-Crup8fJ_.js',
        './buy-DMW-jXgY.js',
        './index-91XudTWA.js',
        './commonDialog-DAf3O9ZT.js',
        './installConflict-Whoemay7.js',
        './commonDone-Dmbt-JvO.js',
        './uploadInstall-CdAG57cF.js',
        './confirmFileConflict-qeyGZ60-.js',
        './goodsInfo-wZIaEin2.js',
        './pay-azHh3JO7.js',
        './tableHeader-BPIVuZHj.js',
        './tabs-9dU2OHwk.js',
        './index-BLLj4FEa.js',
        './index-CFf-47Zt.js',
        './index-CzQewGDR.js',
        './auditDialog-D2arfMh1.js',
        './marked.esm-GmWPvxak.js',
        './index-DWzsDHVI.js',
        './detailDialog-BvFoEwLb.js',
        './posts-CUZwLQo2.js',
        './index-DWl6lnql.js',
        './offDialog-BAIlkoDm.js',
        './adminInfo-Cww2MVO3.js',
        './index-B1dwcQQI.js',
        './popupForm-CpoiCdln.js',
        './add-Bjh6spSm.js',
        './index-DZ7hotU1.js',
        './index-CtVKezRW.js',
        './popupForm-BPx6gk6t.js',
        './index-BmHjNDQW.js',
        './info-CQ4T9hRf.js',
        './index-CGkbtH6r.js',
        './popupForm-Cl8KGY7b.js',
        './index-BK2DPtTf.js',
        './info-BSbJ5okb.js',
        './index-B5DRiSL8.js',
        './popupForm-DjUhwgNY.js',
        './group-D6nlchyH.js',
        './index-DKzbPHs7.js',
        './popupForm-CgJRamGu.js',
        './index-Dx9BGp-U.js',
        './popupForm-CJwAB-nY.js',
        './userEdit-D5tvAmnc.js',
        './index-DJchHvjw.js',
        './popupForm-BUvoF7qQ.js',
        './video-CL1p5STF.js',
        './play-CnVQomD0.js',
        './info-Tf_Z6DnZ.js',
        './index-D45afNCk.js',
        './video-CfUr50Wc.js',
        './info-D06C5REc.js',
        './index-CmmrDn6e.js',
        './info-CX2icM6G.js',
        './index-DiAt0VIz.js',
        './popupForm-Dw4D1B2U.js',
        './index-B1-L7zsY.js',
        './popupForm-oI7SH-96.js',
        './index-C_ka47mS.js',
        './popupForm-Cj3qb7wq.js',
        './index-CvHxSRc1.js',
        './popupForm-C9JQLXBm.js',
        './index-dJ9U_0GK.js',
        './popupForm-D1_k-A9l.js',
        './iframe-BYKHHc0B.js',
    ],
    __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i])
import { i as w, r as m, j as p, k as v, n as A, e as D, o as e, p as I, q as l, u as P, a as T } from './index-BfqXFxxp.js'
import { a3 as h, a4 as R, I as c, a5 as f, a6 as O, i as V } from './vue-Rh7pEvFB.js'
const M = function (t = 'shade', r) {
        const o = document.querySelector('.layout-container'),
            _ = document.createElement('div')
        _.setAttribute('class', 'ba-layout-shade ' + t), o.appendChild(_), w(_, 'click', () => L(r))
    },
    L = function (t = () => {}) {
        const r = document.querySelector('.ba-layout-shade')
        r && r.remove(), t()
    },
    g = async (t) => {
        try {
            const r = await m.push(t)
            h(r, R.aborted)
                ? c({ message: p.global.t('utils.Navigation failed, navigation guard intercepted!'), type: 'error' })
                : h(r, R.duplicated) &&
                  c({ message: p.global.t('utils.Navigation failed, it is at the navigation target position!'), type: 'warning' })
        } catch (r) {
            c({ message: p.global.t('utils.Navigation failed, invalid route!'), type: 'error' }), console.error(r)
        }
    },
    y = (t) => {
        var i, n
        const r = [],
            o = m.getRoutes()
        console.log('firstRoute', o),
            o.forEach((a) => {
                a.path && r.push(a.path)
            })
        let _ = !1
        for (const a in t) {
            if (((i = t[a].meta) == null ? void 0 : i.type) == 'menu' && r.indexOf(t[a].path) !== -1) return t[a]
            if (t[a].children && (n = t[a].children) != null && n.length && ((_ = y(t[a].children)), _)) return _
        }
        return _
    },
    j = (t) => {
        var o
        switch ((o = t.meta) == null ? void 0 : o.menu_type) {
            case 'iframe':
            case 'tab':
                g(t.path)
                break
            case 'link':
                window.open(t.path, '_blank')
                break
            default:
                c({ message: p.global.t('utils.Navigation failed, the menu type is unrecognized!'), type: 'error' })
                break
        }
        const r = D()
        r.layout.shrink &&
            L(() => {
                r.setLayout('menuCollapse', !0)
            })
    },
    S = (t, r) => {
        const o = P(),
            _ = T(),
            i = Object.assign({
                '/src/views/frontend/index.vue': () => e(() => import('./index-DeEcM0CD.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url),
                '/src/views/frontend/user/account/balance.vue': () =>
                    e(() => import('./balance-C8ZYiwir.js'), __vite__mapDeps([6, 1, 2]), import.meta.url),
                '/src/views/frontend/user/account/changePassword.vue': () =>
                    e(() => import('./changePassword-C-0nDwxx.js'), __vite__mapDeps([7, 1, 2, 8, 9, 10, 11]), import.meta.url),
                '/src/views/frontend/user/account/integral.vue': () =>
                    e(() => import('./integral-CpMoarDu.js'), __vite__mapDeps([12, 1, 2]), import.meta.url),
                '/src/views/frontend/user/account/overview.vue': () =>
                    e(() => import('./overview-BU3vYUHf.js'), __vite__mapDeps([13, 1, 2, 14]), import.meta.url),
                '/src/views/frontend/user/account/profile.vue': () =>
                    e(() => import('./profile-BH6YgUFu.js'), __vite__mapDeps([15, 1, 9, 10, 2, 11, 8, 16]), import.meta.url),
                '/src/views/frontend/user/login.vue': () =>
                    e(() => import('./login-sus1UsYt.js'), __vite__mapDeps([17, 1, 3, 2, 4, 5, 8, 16]), import.meta.url),
            })
        if (
            (t &&
                t.length &&
                (d(i, t, '', !0), _.mergeAuthNode(E(t, '/')), o.setHeadNav(u(t, '/', ['nav'])), _.mergeNavUserMenus(u(t, '/', ['nav_user_menu']))),
            r && r.length && V(_.state.viewRoutes))
        ) {
            d(i, r, l.name)
            const n = l.path + '/'
            _.mergeAuthNode(E(r, n)), _.mergeNavUserMenus(u(r, '/', ['nav_user_menu'])), _.setShowHeadline(r.length > 1), _.setViewRoutes(u(r, n))
        }
    },
    B = (t) => {
        d(
            Object.assign({
                '/src/views/backend/auth/admin/index.vue': () =>
                    e(() => import('./index-Cw_Jr1Oo.js'), __vite__mapDeps([18, 1, 10, 2, 11, 19, 8, 9]), import.meta.url),
                '/src/views/backend/auth/admin/popupForm.vue': () =>
                    e(() => import('./popupForm-BZ0zDDX_.js'), __vite__mapDeps([19, 1, 8, 2, 9, 10, 11]), import.meta.url),
                '/src/views/backend/auth/adminLog/index.vue': () =>
                    e(() => import('./index-C_gA6Omc.js'), __vite__mapDeps([20, 1, 10, 2, 11, 21]), import.meta.url),
                '/src/views/backend/auth/adminLog/info.vue': () =>
                    e(() => import('./info-C_QnOdFe.js'), __vite__mapDeps([21, 1, 2]), import.meta.url),
                '/src/views/backend/auth/group/index.vue': () =>
                    e(() => import('./index-CrP4Ij7g.js'), __vite__mapDeps([22, 1, 23, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/auth/group/popupForm.vue': () =>
                    e(() => import('./popupForm-CIf8u47-.js'), __vite__mapDeps([23, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/auth/rule/index.vue': () =>
                    e(() => import('./index-jCuXsmht.js'), __vite__mapDeps([24, 1, 25, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/auth/rule/popupForm.vue': () =>
                    e(() => import('./popupForm-Cf9n4cTc.js'), __vite__mapDeps([25, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/crud/design.vue': () =>
                    e(() => import('./design-NXUnlxiH.js'), __vite__mapDeps([26, 1, 10, 2, 11, 9, 27, 8]), import.meta.url),
                '/src/views/backend/crud/index.vue': () =>
                    e(() => import('./index-DGPb1UkB.js'), __vite__mapDeps([28, 1, 29, 27, 2, 8, 10, 11, 9, 30, 26]), import.meta.url),
                '/src/views/backend/crud/log.vue': () =>
                    e(() => import('./log-CQ1p3Xbf.js'), __vite__mapDeps([30, 1, 10, 2, 11, 27, 8]), import.meta.url),
                '/src/views/backend/crud/start.vue': () =>
                    e(() => import('./start-Cs6ZMQSS.js'), __vite__mapDeps([29, 1, 27, 2, 8, 10, 11, 9, 30]), import.meta.url),
                '/src/views/backend/dashboard.vue': () =>
                    e(() => import('./dashboard-s1cqCfE_.js'), __vite__mapDeps([31, 1, 2, 14, 32]), import.meta.url),
                '/src/views/backend/login.vue': () =>
                    e(() => import('./login-DBSatFNj.js'), __vite__mapDeps([33, 1, 2, 34, 8, 16, 4, 32]), import.meta.url),
                '/src/views/backend/membership/configs/index.vue': () =>
                    e(() => import('./index-COYv-VSV.js'), __vite__mapDeps([35, 1, 10, 2, 11, 36, 9, 8]), import.meta.url),
                '/src/views/backend/membership/configs/popupForm.vue': () =>
                    e(() => import('./popupForm-IJRqlNdy.js'), __vite__mapDeps([36, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/module/components/baAccount.vue': () =>
                    e(() => import('./baAccount-e3mdS4sc.js'), __vite__mapDeps([37, 1, 9, 10, 2, 11, 8, 38]), import.meta.url),
                '/src/views/backend/module/components/buy.vue': () =>
                    e(() => import('./buy-DMW-jXgY.js'), __vite__mapDeps([39, 1, 38, 2, 40]), import.meta.url),
                '/src/views/backend/module/components/commonDialog.vue': () =>
                    e(() => import('./commonDialog-DAf3O9ZT.js'), __vite__mapDeps([41, 1, 38, 2, 42, 40, 43, 9, 10, 11, 44, 45]), import.meta.url),
                '/src/views/backend/module/components/commonDone.vue': () =>
                    e(() => import('./commonDone-Dmbt-JvO.js'), __vite__mapDeps([43, 1, 38, 2, 40, 9, 10, 11]), import.meta.url),
                '/src/views/backend/module/components/confirmFileConflict.vue': () =>
                    e(() => import('./confirmFileConflict-qeyGZ60-.js'), __vite__mapDeps([45, 1, 38, 2, 40]), import.meta.url),
                '/src/views/backend/module/components/goodsInfo.vue': () =>
                    e(() => import('./goodsInfo-wZIaEin2.js'), __vite__mapDeps([46, 1, 38, 2, 40, 39, 47]), import.meta.url),
                '/src/views/backend/module/components/installConflict.vue': () =>
                    e(() => import('./installConflict-Whoemay7.js'), __vite__mapDeps([42, 1, 38, 2, 40]), import.meta.url),
                '/src/views/backend/module/components/pay.vue': () =>
                    e(() => import('./pay-azHh3JO7.js'), __vite__mapDeps([47, 1, 40, 38, 2]), import.meta.url),
                '/src/views/backend/module/components/tableHeader.vue': () =>
                    e(() => import('./tableHeader-BPIVuZHj.js'), __vite__mapDeps([48, 1, 40, 38, 2]), import.meta.url),
                '/src/views/backend/module/components/tabs.vue': () =>
                    e(() => import('./tabs-9dU2OHwk.js'), __vite__mapDeps([49, 1, 38, 2, 40]), import.meta.url),
                '/src/views/backend/module/components/uploadInstall.vue': () =>
                    e(() => import('./uploadInstall-CdAG57cF.js'), __vite__mapDeps([44, 1, 2, 38, 40]), import.meta.url),
                '/src/views/backend/module/index.vue': () =>
                    e(
                        () => import('./index-BLLj4FEa.js'),
                        __vite__mapDeps([50, 1, 40, 38, 2, 48, 37, 9, 10, 11, 8, 49, 46, 39, 47, 41, 42, 43, 44, 45]),
                        import.meta.url
                    ),
                '/src/views/backend/order/order/index.vue': () =>
                    e(() => import('./index-CFf-47Zt.js'), __vite__mapDeps([51, 1, 10, 2, 11]), import.meta.url),
                '/src/views/backend/order/recharge/index.vue': () =>
                    e(() => import('./index-CzQewGDR.js'), __vite__mapDeps([52, 1, 10, 2, 11]), import.meta.url),
                '/src/views/backend/posts/audit/auditDialog.vue': () =>
                    e(() => import('./auditDialog-D2arfMh1.js').then((i) => i.a), __vite__mapDeps([53, 1, 2, 54]), import.meta.url),
                '/src/views/backend/posts/audit/index.vue': () =>
                    e(() => import('./index-DWzsDHVI.js'), __vite__mapDeps([55, 1, 10, 2, 11, 53, 54]), import.meta.url),
                '/src/views/backend/posts/posts/detailDialog.vue': () =>
                    e(() => import('./detailDialog-BvFoEwLb.js'), __vite__mapDeps([56, 1, 2, 57, 54]), import.meta.url),
                '/src/views/backend/posts/posts/index.vue': () =>
                    e(() => import('./index-DWl6lnql.js'), __vite__mapDeps([58, 1, 10, 2, 11, 57, 56, 54, 59]), import.meta.url),
                '/src/views/backend/posts/posts/offDialog.vue': () =>
                    e(() => import('./offDialog-BAIlkoDm.js'), __vite__mapDeps([59, 1, 57, 2]), import.meta.url),
                '/src/views/backend/routine/adminInfo.vue': () =>
                    e(() => import('./adminInfo-Cww2MVO3.js'), __vite__mapDeps([60, 1, 2, 8]), import.meta.url),
                '/src/views/backend/routine/attachment/index.vue': () =>
                    e(() => import('./index-B1dwcQQI.js'), __vite__mapDeps([61, 1, 62, 11, 2, 10]), import.meta.url),
                '/src/views/backend/routine/attachment/popupForm.vue': () =>
                    e(() => import('./popupForm-CpoiCdln.js'), __vite__mapDeps([62, 1, 11, 2]), import.meta.url),
                '/src/views/backend/routine/config/add.vue': () =>
                    e(() => import('./add-Bjh6spSm.js').then((i) => i.b), __vite__mapDeps([63, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/routine/config/index.vue': () =>
                    e(() => import('./index-DZ7hotU1.js'), __vite__mapDeps([64, 1, 63, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/security/dataRecycle/index.vue': () =>
                    e(() => import('./index-CtVKezRW.js'), __vite__mapDeps([65, 1, 10, 2, 11, 66, 9, 8]), import.meta.url),
                '/src/views/backend/security/dataRecycle/popupForm.vue': () =>
                    e(() => import('./popupForm-BPx6gk6t.js'), __vite__mapDeps([66, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/security/dataRecycleLog/index.vue': () =>
                    e(() => import('./index-BmHjNDQW.js'), __vite__mapDeps([67, 1, 10, 2, 11, 68]), import.meta.url),
                '/src/views/backend/security/dataRecycleLog/info.vue': () =>
                    e(() => import('./info-CQ4T9hRf.js').then((i) => i.a), __vite__mapDeps([68, 1, 2]), import.meta.url),
                '/src/views/backend/security/sensitiveData/index.vue': () =>
                    e(() => import('./index-CGkbtH6r.js'), __vite__mapDeps([69, 1, 10, 2, 11, 70, 9, 8]), import.meta.url),
                '/src/views/backend/security/sensitiveData/popupForm.vue': () =>
                    e(() => import('./popupForm-Cl8KGY7b.js'), __vite__mapDeps([70, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/security/sensitiveDataLog/index.vue': () =>
                    e(() => import('./index-BK2DPtTf.js'), __vite__mapDeps([71, 1, 10, 2, 11, 72]), import.meta.url),
                '/src/views/backend/security/sensitiveDataLog/info.vue': () =>
                    e(() => import('./info-BSbJ5okb.js').then((i) => i.a), __vite__mapDeps([72, 1, 2]), import.meta.url),
                '/src/views/backend/shop/chat/index.vue': () =>
                    e(() => import('./index-B5DRiSL8.js'), __vite__mapDeps([73, 1, 74, 9, 10, 2, 11, 8, 75]), import.meta.url),
                '/src/views/backend/shop/chat/popupForm.vue': () =>
                    e(() => import('./popupForm-DjUhwgNY.js'), __vite__mapDeps([74, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/shop/jobType/index.vue': () =>
                    e(() => import('./index-DKzbPHs7.js'), __vite__mapDeps([76, 1, 10, 2, 11, 77]), import.meta.url),
                '/src/views/backend/shop/jobType/popupForm.vue': () =>
                    e(() => import('./popupForm-CgJRamGu.js'), __vite__mapDeps([77, 1, 2]), import.meta.url),
                '/src/views/backend/shop/topic/index.vue': () =>
                    e(() => import('./index-Dx9BGp-U.js'), __vite__mapDeps([78, 1, 10, 2, 11, 79, 8, 80]), import.meta.url),
                '/src/views/backend/shop/topic/popupForm.vue': () =>
                    e(() => import('./popupForm-CJwAB-nY.js'), __vite__mapDeps([79, 1, 8, 2]), import.meta.url),
                '/src/views/backend/shop/topic/userEdit.vue': () =>
                    e(() => import('./userEdit-D5tvAmnc.js'), __vite__mapDeps([80, 1, 2]), import.meta.url),
                '/src/views/backend/shop/user/index.vue': () =>
                    e(() => import('./index-DJchHvjw.js'), __vite__mapDeps([81, 1, 10, 2, 11, 82, 9, 83, 84, 8, 85]), import.meta.url),
                '/src/views/backend/shop/user/info.vue': () =>
                    e(() => import('./info-Tf_Z6DnZ.js'), __vite__mapDeps([85, 1, 2, 9, 10, 11, 83, 84]), import.meta.url),
                '/src/views/backend/shop/user/popupForm.vue': () =>
                    e(() => import('./popupForm-BUvoF7qQ.js'), __vite__mapDeps([82, 1, 2, 9, 10, 11, 83, 84, 8]), import.meta.url),
                '/src/views/backend/shop/user/video.vue': () =>
                    e(() => import('./video-CL1p5STF.js'), __vite__mapDeps([83, 1, 84, 2]), import.meta.url),
                '/src/views/backend/shop/userProfileLog/index.vue': () =>
                    e(() => import('./index-D45afNCk.js'), __vite__mapDeps([86, 1, 10, 2, 11, 87, 84, 88]), import.meta.url),
                '/src/views/backend/shop/userProfileLog/info.vue': () =>
                    e(() => import('./info-D06C5REc.js'), __vite__mapDeps([88, 1, 2]), import.meta.url),
                '/src/views/backend/shop/userProfileLog/video.vue': () =>
                    e(() => import('./video-CfUr50Wc.js'), __vite__mapDeps([87, 1, 84, 2]), import.meta.url),
                '/src/views/backend/user/audit/index.vue': () =>
                    e(() => import('./index-CmmrDn6e.js'), __vite__mapDeps([89, 1, 10, 2, 11, 90]), import.meta.url),
                '/src/views/backend/user/audit/info.vue': () =>
                    e(() => import('./info-CX2icM6G.js').then((i) => i.i), __vite__mapDeps([90, 1, 2]), import.meta.url),
                '/src/views/backend/user/group/index.vue': () =>
                    e(() => import('./index-DiAt0VIz.js'), __vite__mapDeps([91, 1, 92, 9, 10, 2, 11, 8, 75]), import.meta.url),
                '/src/views/backend/user/group/popupForm.vue': () =>
                    e(() => import('./popupForm-Dw4D1B2U.js'), __vite__mapDeps([92, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/user/moneyLog/index.vue': () =>
                    e(() => import('./index-B1-L7zsY.js'), __vite__mapDeps([93, 1, 10, 2, 11, 94, 9, 8]), import.meta.url),
                '/src/views/backend/user/moneyLog/popupForm.vue': () =>
                    e(() => import('./popupForm-oI7SH-96.js').then((i) => i.p), __vite__mapDeps([94, 1, 2, 9, 10, 11, 8]), import.meta.url),
                '/src/views/backend/user/rule/index.vue': () =>
                    e(() => import('./index-C_ka47mS.js'), __vite__mapDeps([95, 1, 10, 2, 11, 96, 9, 8]), import.meta.url),
                '/src/views/backend/user/rule/popupForm.vue': () =>
                    e(() => import('./popupForm-Cj3qb7wq.js'), __vite__mapDeps([96, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/user/scoreLog/index.vue': () =>
                    e(() => import('./index-CvHxSRc1.js'), __vite__mapDeps([97, 1, 10, 2, 11, 98, 9, 8]), import.meta.url),
                '/src/views/backend/user/scoreLog/popupForm.vue': () =>
                    e(() => import('./popupForm-C9JQLXBm.js').then((i) => i.p), __vite__mapDeps([98, 1, 2, 9, 10, 11, 8]), import.meta.url),
                '/src/views/backend/user/user/index.vue': () =>
                    e(() => import('./index-dJ9U_0GK.js'), __vite__mapDeps([99, 1, 10, 2, 11, 100, 8, 9]), import.meta.url),
                '/src/views/backend/user/user/popupForm.vue': () =>
                    e(() => import('./popupForm-D1_k-A9l.js'), __vite__mapDeps([100, 1, 8, 2, 9, 10, 11]), import.meta.url),
            }),
            t,
            v.name
        )
        const o = v.path + '/',
            _ = A()
        _.setTabsViewRoutes(u(t, o)), _.fillAuthNode(E(t, o))
    },
    u = (t, r = '/', o = ['menu', 'menu_dir']) => {
        const _ = []
        for (const i in t) {
            if (
                t[i].extend == 'add_rules_only' ||
                !o.includes(t[i].type) ||
                (t[i].type == 'menu_dir' && t[i].children && !t[i].children.length) ||
                (['route', 'menu', 'nav_user_menu', 'nav'].includes(t[i].type) &&
                    ((t[i].menu_type == 'tab' && !t[i].component) || (['link', 'iframe'].includes(t[i].menu_type) && !t[i].url)))
            )
                continue
            const n = ['link', 'iframe'].includes(t[i].menu_type) ? t[i].url : r + t[i].path
            let a = []
            t[i].children && t[i].children.length > 0 && (a = u(t[i].children, r, o)),
                _.push({
                    path: n,
                    name: t[i].name,
                    component: t[i].component,
                    meta: { id: t[i].id, title: t[i].title, icon: t[i].icon, keepalive: t[i].keepalive, menu_type: t[i].menu_type, type: t[i].type },
                    children: a,
                })
        }
        return _
    },
    E = (t, r = '/') => {
        const o = new Map([])
        return k(t, o, r, r), o
    },
    k = (t, r, o = '/', _ = '/') => {
        const i = []
        for (const n in t)
            t[n].type == 'button' && i.push(o + t[n].name), t[n].children && t[n].children.length > 0 && k(t[n].children, r, o, o + t[n].name)
        i && i.length > 0 && r.set(_, i)
    },
    d = (t, r, o, _ = !1) => {
        for (const i in r)
            r[i].extend != 'add_menu_only' &&
                (((r[i].menu_type == 'tab' && t[r[i].component]) || r[i].menu_type == 'iframe') && x(t, r[i], o, _),
                r[i].children && r[i].children.length > 0 && d(t, r[i].children, o, _))
    },
    x = (t, r, o, _) => {
        let i = '',
            n
        if (
            (r.menu_type == 'iframe'
                ? ((i = (I() ? v.path : l.path) + '/iframe/' + encodeURIComponent(r.url)),
                  (n = () => e(() => import('./iframe-BYKHHc0B.js'), __vite__mapDeps([101, 1, 2]), import.meta.url)))
                : ((i = o ? r.path : '/' + r.path), (n = t[r.component])),
            r.menu_type == 'tab' && _)
        ) {
            const s = F(r.name)
            if (s.length) {
                for (const b in s)
                    if (m.hasRoute(s[b])) {
                        o = s[b]
                        break
                    }
            }
        }
        const a = {
            path: i,
            name: r.name,
            component: n,
            meta: {
                title: r.title,
                extend: r.extend,
                icon: r.icon,
                keepalive: r.keepalive,
                menu_type: r.menu_type,
                type: r.type,
                url: r.url,
                addtab: !0,
            },
        }
        o ? m.addRoute(o, a) : m.addRoute(a)
    },
    F = (t) => {
        const r = f(t.split('/')),
            o = [],
            _ = []
        for (const i in r) o.push(r[i]), parseInt(i) != r.length - 1 && _.push(o.join('/'))
        return O(_)
    }
export { B as a, L as c, y as g, S as h, j as o, g as r, M as s }
