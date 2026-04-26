const __vite__fileDeps = [
        './index-DAsvYgwg.js',
        './vue-Rh7pEvFB.js',
        './index-C3vonoRT.js',
        './footer-n_BPmNE4.js',
        './useDark-BqvPuHnb.js',
        './darkSwitch-DGaQFbkU.js',
        './balance-BaL8mQj8.js',
        './changePassword-BsLkwhzC.js',
        './validate-Dr-o2ZDb.js',
        './index-BC54TMpd.js',
        './index-DQwP9Y7u.js',
        './index-CK3pnx59.js',
        './integral-i12FwoeS.js',
        './overview-CjrCjVoP.js',
        './echarts-BqpuqYqS.js',
        './profile-BfClhl1v.js',
        './index-tKVF42Jv.js',
        './login-DAbwLim_.js',
        './index-C_gv27FX.js',
        './popupForm-IyF1CYN4.js',
        './index-C03huY4p.js',
        './info-Da5gL67X.js',
        './index-DLZ39_5A.js',
        './popupForm-BigRy1dV.js',
        './index-Bb5ZYZtm.js',
        './popupForm-Xvu_5WTE.js',
        './design-jJBYwQnY.js',
        './crud-DrveauRi.js',
        './index-BatHes4h.js',
        './start-BIHylln2.js',
        './log-DiQJ30H8.js',
        './dashboard-CxFXJvDp.js',
        './login-header-BfppTrn9.js',
        './login-ayAVu_aQ.js',
        './index-BrGKKT2t.js',
        './baAccount-CT3h-wKd.js',
        './store-BuYTRjF2.js',
        './buy-vmoPHkjn.js',
        './index-BAP8DTqJ.js',
        './commonDialog-BLl0p22z.js',
        './installConflict-DYioun2o.js',
        './commonDone-B2rbhmln.js',
        './uploadInstall-GKIPvPuI.js',
        './confirmFileConflict-CPojrWm4.js',
        './goodsInfo-DLJdJ6FT.js',
        './pay-BKdVn44q.js',
        './tableHeader-Bez1Uk65.js',
        './tabs-Dhg2cb7f.js',
        './index-sJ4zwt8n.js',
        './index-DJMpAH3d.js',
        './index-BGoKLRQ5.js',
        './adminInfo-CmgDiJOH.js',
        './index-Ca2Ca-IC.js',
        './popupForm-CtJ0GtL8.js',
        './add-Dp1T1qrT.js',
        './index-DR2biFOM.js',
        './index-eMRMXEGK.js',
        './popupForm-Dqbbw3Mu.js',
        './index-G86kgFi7.js',
        './info-C8ony9uY.js',
        './index-DzUF3NBK.js',
        './popupForm-8UENK5U_.js',
        './index-C56EQykZ.js',
        './info-BfhrErFd.js',
        './index-DEGS-IR6.js',
        './popupForm-CbXmgfDv.js',
        './group-C0R2CYFY.js',
        './index-yxHd-lGB.js',
        './popupForm-CufgPf3d.js',
        './index-BE_FVsSl.js',
        './popupForm-CpQkJBBO.js',
        './userEdit-YHQ1IoLk.js',
        './index-3eQRvSdg.js',
        './popupForm-ltMJZU1e.js',
        './video-BykpubKS.js',
        './play-CnVQomD0.js',
        './info-khV5yH4f.js',
        './index-aAshRaLo.js',
        './video-dkND6KHd.js',
        './info-CYv8lSE6.js',
        './index-D9ItmoD4.js',
        './popupForm-CikN4X3Y.js',
        './index-VZBSOrEP.js',
        './popupForm-DJwv4McH.js',
        './index-DSgRssKU.js',
        './popupForm-B_Gv1yXi.js',
        './index-BWIGHJJh.js',
        './popupForm-D_Osz1Fs.js',
        './index-D_CrsiUS.js',
        './popupForm-B1dFsxl8.js',
        './iframe-D32d1kxB.js',
    ],
    __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i])
import { i as w, r as m, j as c, k as v, n as A, e as I, o as e, p as P, q as l, u as f, a as D } from './index-C3vonoRT.js'
import { a3 as b, a4 as R, I as p, a5 as T, a6 as O, i as V } from './vue-Rh7pEvFB.js'
const M = function (t = 'shade', i) {
        const o = document.querySelector('.layout-container'),
            n = document.createElement('div')
        n.setAttribute('class', 'ba-layout-shade ' + t), o.appendChild(n), w(n, 'click', () => L(i))
    },
    L = function (t = () => {}) {
        const i = document.querySelector('.ba-layout-shade')
        i && i.remove(), t()
    },
    g = async (t) => {
        try {
            const i = await m.push(t)
            b(i, R.aborted)
                ? p({ message: c.global.t('utils.Navigation failed, navigation guard intercepted!'), type: 'error' })
                : b(i, R.duplicated) &&
                  p({ message: c.global.t('utils.Navigation failed, it is at the navigation target position!'), type: 'warning' })
        } catch (i) {
            p({ message: c.global.t('utils.Navigation failed, invalid route!'), type: 'error' }), console.error(i)
        }
    },
    y = (t) => {
        var r, _
        const i = [],
            o = m.getRoutes()
        console.log('firstRoute', o),
            o.forEach((a) => {
                a.path && i.push(a.path)
            })
        let n = !1
        for (const a in t) {
            if (((r = t[a].meta) == null ? void 0 : r.type) == 'menu' && i.indexOf(t[a].path) !== -1) return t[a]
            if (t[a].children && (_ = t[a].children) != null && _.length && ((n = y(t[a].children)), n)) return n
        }
        return n
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
                p({ message: c.global.t('utils.Navigation failed, the menu type is unrecognized!'), type: 'error' })
                break
        }
        const i = I()
        i.layout.shrink &&
            L(() => {
                i.setLayout('menuCollapse', !0)
            })
    },
    S = (t, i) => {
        const o = f(),
            n = D(),
            r = Object.assign({
                '/src/views/frontend/index.vue': () => e(() => import('./index-DAsvYgwg.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url),
                '/src/views/frontend/user/account/balance.vue': () =>
                    e(() => import('./balance-BaL8mQj8.js'), __vite__mapDeps([6, 1, 2]), import.meta.url),
                '/src/views/frontend/user/account/changePassword.vue': () =>
                    e(() => import('./changePassword-BsLkwhzC.js'), __vite__mapDeps([7, 1, 2, 8, 9, 10, 11]), import.meta.url),
                '/src/views/frontend/user/account/integral.vue': () =>
                    e(() => import('./integral-i12FwoeS.js'), __vite__mapDeps([12, 1, 2]), import.meta.url),
                '/src/views/frontend/user/account/overview.vue': () =>
                    e(() => import('./overview-CjrCjVoP.js'), __vite__mapDeps([13, 1, 2, 14]), import.meta.url),
                '/src/views/frontend/user/account/profile.vue': () =>
                    e(() => import('./profile-BfClhl1v.js'), __vite__mapDeps([15, 1, 9, 10, 2, 11, 8, 16]), import.meta.url),
                '/src/views/frontend/user/login.vue': () =>
                    e(() => import('./login-DAbwLim_.js'), __vite__mapDeps([17, 1, 3, 2, 4, 5, 8, 16]), import.meta.url),
            })
        if (
            (t &&
                t.length &&
                (d(r, t, '', !0), n.mergeAuthNode(E(t, '/')), o.setHeadNav(u(t, '/', ['nav'])), n.mergeNavUserMenus(u(t, '/', ['nav_user_menu']))),
            i && i.length && V(n.state.viewRoutes))
        ) {
            d(r, i, l.name)
            const _ = l.path + '/'
            n.mergeAuthNode(E(i, _)), n.mergeNavUserMenus(u(i, '/', ['nav_user_menu'])), n.setShowHeadline(i.length > 1), n.setViewRoutes(u(i, _))
        }
    },
    B = (t) => {
        d(
            Object.assign({
                '/src/views/backend/auth/admin/index.vue': () =>
                    e(() => import('./index-C_gv27FX.js'), __vite__mapDeps([18, 1, 10, 2, 11, 19, 8, 9]), import.meta.url),
                '/src/views/backend/auth/admin/popupForm.vue': () =>
                    e(() => import('./popupForm-IyF1CYN4.js'), __vite__mapDeps([19, 1, 8, 2, 9, 10, 11]), import.meta.url),
                '/src/views/backend/auth/adminLog/index.vue': () =>
                    e(() => import('./index-C03huY4p.js'), __vite__mapDeps([20, 1, 10, 2, 11, 21]), import.meta.url),
                '/src/views/backend/auth/adminLog/info.vue': () =>
                    e(() => import('./info-Da5gL67X.js'), __vite__mapDeps([21, 1, 2]), import.meta.url),
                '/src/views/backend/auth/group/index.vue': () =>
                    e(() => import('./index-DLZ39_5A.js'), __vite__mapDeps([22, 1, 23, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/auth/group/popupForm.vue': () =>
                    e(() => import('./popupForm-BigRy1dV.js'), __vite__mapDeps([23, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/auth/rule/index.vue': () =>
                    e(() => import('./index-Bb5ZYZtm.js'), __vite__mapDeps([24, 1, 25, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/auth/rule/popupForm.vue': () =>
                    e(() => import('./popupForm-Xvu_5WTE.js'), __vite__mapDeps([25, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/crud/design.vue': () =>
                    e(() => import('./design-jJBYwQnY.js'), __vite__mapDeps([26, 1, 10, 2, 11, 9, 27, 8]), import.meta.url),
                '/src/views/backend/crud/index.vue': () =>
                    e(() => import('./index-BatHes4h.js'), __vite__mapDeps([28, 1, 29, 27, 2, 8, 10, 11, 9, 30, 26]), import.meta.url),
                '/src/views/backend/crud/log.vue': () =>
                    e(() => import('./log-DiQJ30H8.js'), __vite__mapDeps([30, 1, 10, 2, 11, 27, 8]), import.meta.url),
                '/src/views/backend/crud/start.vue': () =>
                    e(() => import('./start-BIHylln2.js'), __vite__mapDeps([29, 1, 27, 2, 8, 10, 11, 9, 30]), import.meta.url),
                '/src/views/backend/dashboard.vue': () =>
                    e(() => import('./dashboard-CxFXJvDp.js'), __vite__mapDeps([31, 1, 2, 14, 32]), import.meta.url),
                '/src/views/backend/login.vue': () =>
                    e(() => import('./login-ayAVu_aQ.js'), __vite__mapDeps([33, 1, 2, 34, 8, 16, 4, 32]), import.meta.url),
                '/src/views/backend/module/components/baAccount.vue': () =>
                    e(() => import('./baAccount-CT3h-wKd.js'), __vite__mapDeps([35, 1, 9, 10, 2, 11, 8, 36]), import.meta.url),
                '/src/views/backend/module/components/buy.vue': () =>
                    e(() => import('./buy-vmoPHkjn.js'), __vite__mapDeps([37, 1, 36, 2, 38]), import.meta.url),
                '/src/views/backend/module/components/commonDialog.vue': () =>
                    e(() => import('./commonDialog-BLl0p22z.js'), __vite__mapDeps([39, 1, 36, 2, 40, 38, 41, 9, 10, 11, 42, 43]), import.meta.url),
                '/src/views/backend/module/components/commonDone.vue': () =>
                    e(() => import('./commonDone-B2rbhmln.js'), __vite__mapDeps([41, 1, 36, 2, 38, 9, 10, 11]), import.meta.url),
                '/src/views/backend/module/components/confirmFileConflict.vue': () =>
                    e(() => import('./confirmFileConflict-CPojrWm4.js'), __vite__mapDeps([43, 1, 36, 2, 38]), import.meta.url),
                '/src/views/backend/module/components/goodsInfo.vue': () =>
                    e(() => import('./goodsInfo-DLJdJ6FT.js'), __vite__mapDeps([44, 1, 36, 2, 38, 37, 45]), import.meta.url),
                '/src/views/backend/module/components/installConflict.vue': () =>
                    e(() => import('./installConflict-DYioun2o.js'), __vite__mapDeps([40, 1, 36, 2, 38]), import.meta.url),
                '/src/views/backend/module/components/pay.vue': () =>
                    e(() => import('./pay-BKdVn44q.js'), __vite__mapDeps([45, 1, 38, 36, 2]), import.meta.url),
                '/src/views/backend/module/components/tableHeader.vue': () =>
                    e(() => import('./tableHeader-Bez1Uk65.js'), __vite__mapDeps([46, 1, 38, 36, 2]), import.meta.url),
                '/src/views/backend/module/components/tabs.vue': () =>
                    e(() => import('./tabs-Dhg2cb7f.js'), __vite__mapDeps([47, 1, 36, 2, 38]), import.meta.url),
                '/src/views/backend/module/components/uploadInstall.vue': () =>
                    e(() => import('./uploadInstall-GKIPvPuI.js'), __vite__mapDeps([42, 1, 2, 36, 38]), import.meta.url),
                '/src/views/backend/module/index.vue': () =>
                    e(
                        () => import('./index-sJ4zwt8n.js'),
                        __vite__mapDeps([48, 1, 38, 36, 2, 46, 35, 9, 10, 11, 8, 47, 44, 37, 45, 39, 40, 41, 42, 43]),
                        import.meta.url
                    ),
                '/src/views/backend/order/order/index.vue': () =>
                    e(() => import('./index-DJMpAH3d.js'), __vite__mapDeps([49, 1, 10, 2, 11]), import.meta.url),
                '/src/views/backend/order/recharge/index.vue': () =>
                    e(() => import('./index-BGoKLRQ5.js'), __vite__mapDeps([50, 1, 10, 2, 11]), import.meta.url),
                '/src/views/backend/routine/adminInfo.vue': () =>
                    e(() => import('./adminInfo-CmgDiJOH.js'), __vite__mapDeps([51, 1, 2, 8]), import.meta.url),
                '/src/views/backend/routine/attachment/index.vue': () =>
                    e(() => import('./index-Ca2Ca-IC.js'), __vite__mapDeps([52, 1, 53, 11, 2, 10]), import.meta.url),
                '/src/views/backend/routine/attachment/popupForm.vue': () =>
                    e(() => import('./popupForm-CtJ0GtL8.js'), __vite__mapDeps([53, 1, 11, 2]), import.meta.url),
                '/src/views/backend/routine/config/add.vue': () =>
                    e(() => import('./add-Dp1T1qrT.js').then((r) => r.b), __vite__mapDeps([54, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/routine/config/index.vue': () =>
                    e(() => import('./index-DR2biFOM.js'), __vite__mapDeps([55, 1, 54, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/security/dataRecycle/index.vue': () =>
                    e(() => import('./index-eMRMXEGK.js'), __vite__mapDeps([56, 1, 10, 2, 11, 57, 9, 8]), import.meta.url),
                '/src/views/backend/security/dataRecycle/popupForm.vue': () =>
                    e(() => import('./popupForm-Dqbbw3Mu.js'), __vite__mapDeps([57, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/security/dataRecycleLog/index.vue': () =>
                    e(() => import('./index-G86kgFi7.js'), __vite__mapDeps([58, 1, 10, 2, 11, 59]), import.meta.url),
                '/src/views/backend/security/dataRecycleLog/info.vue': () =>
                    e(() => import('./info-C8ony9uY.js').then((r) => r.a), __vite__mapDeps([59, 1, 2]), import.meta.url),
                '/src/views/backend/security/sensitiveData/index.vue': () =>
                    e(() => import('./index-DzUF3NBK.js'), __vite__mapDeps([60, 1, 10, 2, 11, 61, 9, 8]), import.meta.url),
                '/src/views/backend/security/sensitiveData/popupForm.vue': () =>
                    e(() => import('./popupForm-8UENK5U_.js'), __vite__mapDeps([61, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/security/sensitiveDataLog/index.vue': () =>
                    e(() => import('./index-C56EQykZ.js'), __vite__mapDeps([62, 1, 10, 2, 11, 63]), import.meta.url),
                '/src/views/backend/security/sensitiveDataLog/info.vue': () =>
                    e(() => import('./info-BfhrErFd.js').then((r) => r.a), __vite__mapDeps([63, 1, 2]), import.meta.url),
                '/src/views/backend/shop/chat/index.vue': () =>
                    e(() => import('./index-DEGS-IR6.js'), __vite__mapDeps([64, 1, 65, 9, 10, 2, 11, 8, 66]), import.meta.url),
                '/src/views/backend/shop/chat/popupForm.vue': () =>
                    e(() => import('./popupForm-CbXmgfDv.js'), __vite__mapDeps([65, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/shop/jobType/index.vue': () =>
                    e(() => import('./index-yxHd-lGB.js'), __vite__mapDeps([67, 1, 10, 2, 11, 68]), import.meta.url),
                '/src/views/backend/shop/jobType/popupForm.vue': () =>
                    e(() => import('./popupForm-CufgPf3d.js'), __vite__mapDeps([68, 1, 2]), import.meta.url),
                '/src/views/backend/shop/topic/index.vue': () =>
                    e(() => import('./index-BE_FVsSl.js'), __vite__mapDeps([69, 1, 10, 2, 11, 70, 8, 71]), import.meta.url),
                '/src/views/backend/shop/topic/popupForm.vue': () =>
                    e(() => import('./popupForm-CpQkJBBO.js'), __vite__mapDeps([70, 1, 8, 2]), import.meta.url),
                '/src/views/backend/shop/topic/userEdit.vue': () =>
                    e(() => import('./userEdit-YHQ1IoLk.js'), __vite__mapDeps([71, 1, 2]), import.meta.url),
                '/src/views/backend/shop/user/index.vue': () =>
                    e(() => import('./index-3eQRvSdg.js'), __vite__mapDeps([72, 1, 10, 2, 11, 73, 9, 74, 75, 8, 76]), import.meta.url),
                '/src/views/backend/shop/user/info.vue': () =>
                    e(() => import('./info-khV5yH4f.js'), __vite__mapDeps([76, 1, 2, 9, 10, 11, 74, 75]), import.meta.url),
                '/src/views/backend/shop/user/popupForm.vue': () =>
                    e(() => import('./popupForm-ltMJZU1e.js'), __vite__mapDeps([73, 1, 2, 9, 10, 11, 74, 75, 8]), import.meta.url),
                '/src/views/backend/shop/user/video.vue': () =>
                    e(() => import('./video-BykpubKS.js'), __vite__mapDeps([74, 1, 75, 2]), import.meta.url),
                '/src/views/backend/shop/userProfileLog/index.vue': () =>
                    e(() => import('./index-aAshRaLo.js'), __vite__mapDeps([77, 1, 10, 2, 11, 78, 75, 79]), import.meta.url),
                '/src/views/backend/shop/userProfileLog/info.vue': () =>
                    e(() => import('./info-CYv8lSE6.js'), __vite__mapDeps([79, 1, 2]), import.meta.url),
                '/src/views/backend/shop/userProfileLog/video.vue': () =>
                    e(() => import('./video-dkND6KHd.js'), __vite__mapDeps([78, 1, 75, 2]), import.meta.url),
                '/src/views/backend/user/group/index.vue': () =>
                    e(() => import('./index-D9ItmoD4.js'), __vite__mapDeps([80, 1, 81, 9, 10, 2, 11, 8, 66]), import.meta.url),
                '/src/views/backend/user/group/popupForm.vue': () =>
                    e(() => import('./popupForm-CikN4X3Y.js'), __vite__mapDeps([81, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/user/moneyLog/index.vue': () =>
                    e(() => import('./index-VZBSOrEP.js'), __vite__mapDeps([82, 1, 10, 2, 11, 83, 9, 8]), import.meta.url),
                '/src/views/backend/user/moneyLog/popupForm.vue': () =>
                    e(() => import('./popupForm-DJwv4McH.js').then((r) => r.p), __vite__mapDeps([83, 1, 2, 9, 10, 11, 8]), import.meta.url),
                '/src/views/backend/user/rule/index.vue': () =>
                    e(() => import('./index-DSgRssKU.js'), __vite__mapDeps([84, 1, 10, 2, 11, 85, 9, 8]), import.meta.url),
                '/src/views/backend/user/rule/popupForm.vue': () =>
                    e(() => import('./popupForm-B_Gv1yXi.js'), __vite__mapDeps([85, 1, 9, 10, 2, 11, 8]), import.meta.url),
                '/src/views/backend/user/scoreLog/index.vue': () =>
                    e(() => import('./index-BWIGHJJh.js'), __vite__mapDeps([86, 1, 10, 2, 11, 87, 9, 8]), import.meta.url),
                '/src/views/backend/user/scoreLog/popupForm.vue': () =>
                    e(() => import('./popupForm-D_Osz1Fs.js').then((r) => r.p), __vite__mapDeps([87, 1, 2, 9, 10, 11, 8]), import.meta.url),
                '/src/views/backend/user/user/index.vue': () =>
                    e(() => import('./index-D_CrsiUS.js'), __vite__mapDeps([88, 1, 10, 2, 11, 89, 8, 9]), import.meta.url),
                '/src/views/backend/user/user/popupForm.vue': () =>
                    e(() => import('./popupForm-B1dFsxl8.js'), __vite__mapDeps([89, 1, 8, 2, 9, 10, 11]), import.meta.url),
            }),
            t,
            v.name
        )
        const o = v.path + '/',
            n = A()
        n.setTabsViewRoutes(u(t, o)), n.fillAuthNode(E(t, o))
    },
    u = (t, i = '/', o = ['menu', 'menu_dir']) => {
        const n = []
        for (const r in t) {
            if (
                t[r].extend == 'add_rules_only' ||
                !o.includes(t[r].type) ||
                (t[r].type == 'menu_dir' && t[r].children && !t[r].children.length) ||
                (['route', 'menu', 'nav_user_menu', 'nav'].includes(t[r].type) &&
                    ((t[r].menu_type == 'tab' && !t[r].component) || (['link', 'iframe'].includes(t[r].menu_type) && !t[r].url)))
            )
                continue
            const _ = ['link', 'iframe'].includes(t[r].menu_type) ? t[r].url : i + t[r].path
            let a = []
            t[r].children && t[r].children.length > 0 && (a = u(t[r].children, i, o)),
                n.push({
                    path: _,
                    name: t[r].name,
                    component: t[r].component,
                    meta: { id: t[r].id, title: t[r].title, icon: t[r].icon, keepalive: t[r].keepalive, menu_type: t[r].menu_type, type: t[r].type },
                    children: a,
                })
        }
        return n
    },
    E = (t, i = '/') => {
        const o = new Map([])
        return k(t, o, i, i), o
    },
    k = (t, i, o = '/', n = '/') => {
        const r = []
        for (const _ in t)
            t[_].type == 'button' && r.push(o + t[_].name), t[_].children && t[_].children.length > 0 && k(t[_].children, i, o, o + t[_].name)
        r && r.length > 0 && i.set(n, r)
    },
    d = (t, i, o, n = !1) => {
        for (const r in i)
            i[r].extend != 'add_menu_only' &&
                (((i[r].menu_type == 'tab' && t[i[r].component]) || i[r].menu_type == 'iframe') && x(t, i[r], o, n),
                i[r].children && i[r].children.length > 0 && d(t, i[r].children, o, n))
    },
    x = (t, i, o, n) => {
        let r = '',
            _
        if (
            (i.menu_type == 'iframe'
                ? ((r = (P() ? v.path : l.path) + '/iframe/' + encodeURIComponent(i.url)),
                  (_ = () => e(() => import('./iframe-D32d1kxB.js'), __vite__mapDeps([90, 1, 2]), import.meta.url)))
                : ((r = o ? i.path : '/' + i.path), (_ = t[i.component])),
            i.menu_type == 'tab' && n)
        ) {
            const s = F(i.name)
            if (s.length) {
                for (const h in s)
                    if (m.hasRoute(s[h])) {
                        o = s[h]
                        break
                    }
            }
        }
        const a = {
            path: r,
            name: i.name,
            component: _,
            meta: {
                title: i.title,
                extend: i.extend,
                icon: i.icon,
                keepalive: i.keepalive,
                menu_type: i.menu_type,
                type: i.type,
                url: i.url,
                addtab: !0,
            },
        }
        o ? m.addRoute(o, a) : m.addRoute(a)
    },
    F = (t) => {
        const i = T(t.split('/')),
            o = [],
            n = []
        for (const r in i) o.push(i[r]), parseInt(r) != i.length - 1 && n.push(o.join('/'))
        return O(n)
    }
export { B as a, L as c, y as g, S as h, j as o, g as r, M as s }
