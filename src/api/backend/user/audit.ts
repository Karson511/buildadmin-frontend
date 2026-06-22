import createAxios from '/@/utils/axios'

export const url = '/admin/user.Audit/'

/**
 * 单图审核操作（media_img 明细的单张图片审核）
 * @param auditItemId  单图的 id（media_items[].id）
 * @param action       approve=通过, reject=驳回
 * @param itemsVersion 单图项版本 items_version（乐观锁，ba_user_audit_items.items_version）
 * @param reason       驳回原因（action=reject 时必填）
 */
export function auditItem(auditItemId: number, action: string, itemsVersion: number, reason?: string) {
    return createAxios({
        url: url + 'auditItem',
        method: 'post',
        data: {
            audit_item_id: auditItemId,
            action,
            items_version: itemsVersion,
            reason,
        },
    })
}

/**
 * 单条审核操作（明细行级，非 media_img 字段）
 * @param id             ba_user_audit_details 表的 id
 * @param action         approve=通过, reject=驳回
 * @param version        主表 version（乐观锁，防止两个运营并发处理同一审核单）
 * @param detailsVersion 明细表 details_version（乐观锁，防止用户在审核期间修改内容）
 * @param remark         驳回原因（action=reject 时必填）
 */
export function audit(id: number, action: string, version: number, detailsVersion: number, remark?: string) {
    return createAxios({
        url: url + 'audit',
        method: 'post',
        data: {
            id,
            action,
            version,
            details_version: detailsVersion,
            remark,
        },
    })
}

/**
 * 批量审核操作
 * @param audit_no 审核单号
 * @param version  主表 version（乐观锁，防止两个运营并发处理同一审核单）
 * @param items    批量审核项 [{id, action, details_version, remark?}]
 */
export function batchAudit(audit_no: string, version: number, items: any[]) {
    return createAxios({
        url: url + 'batchAudit',
        method: 'post',
        data: {
            audit_no,
            version,
            items,
        },
    })
}

/**
 * 审核详情（按审核单号查，返回 master + details + user）
 * @param audit_no 审核单号
 */
export function edit(audit_no: string) {
    return createAxios({
        url: url + 'edit',
        method: 'get',
        params: {
            audit_no,
        },
    })
}

/**
 * 一键通过全单
 * @param audit_no 审核单号
 * @param version  主表 version（乐观锁，防止两个运营并发处理同一审核单）
 */
export function batchApproveAll(audit_no: string, version: number) {
    return createAxios({
        url: url + 'batchApproveAll',
        method: 'post',
        data: {
            audit_no,
            version,
        },
    })
}

/**
 * 一键驳回全单
 * @param audit_no 审核单号
 * @param version  主表 version（乐观锁，防止两个运营并发处理同一审核单）
 * @param remark   驳回原因
 */
export function batchRejectAll(audit_no: string, version: number, remark: string) {
    return createAxios({
        url: url + 'batchRejectAll',
        method: 'post',
        data: {
            audit_no,
            version,
            remark,
        },
    })
}
