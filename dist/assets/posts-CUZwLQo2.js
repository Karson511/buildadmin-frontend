import { c as t } from './index-BfqXFxxp.js'
const e = '/admin/posts.posts/'
function u(s) {
    return t({ url: e + 'detail', method: 'get', params: { id: s } })
}
function r(s, o) {
    return t({ url: e + 'off', method: 'post', data: { ids: s, refuse_remark: o } }, { showSuccessMessage: !0 })
}
function n(s) {
    return t({ url: e + 'publish', method: 'post', data: { ids: s } }, { showSuccessMessage: !0 })
}
function c(s) {
    return t({ url: e + 'del', method: 'post', data: { ids: s } }, { showSuccessMessage: !0 })
}
export { c as a, u as d, r as o, n as p, e as u }
