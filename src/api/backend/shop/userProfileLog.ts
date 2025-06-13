import createAxios from '/@/utils/axios'

export const url = '/admin/shop.UserProfileLog/'

/**
 * 不通过
 * @param id 记录id
 * @param rejection_reason 拒绝理由说明
 * @returns
 */
export function reject(id: number, rejection_reason: string) {
    return createAxios({
        url: url + 'reject',
        method: 'POST',
        data: {
            id: id,
            rejection_reason: rejection_reason,
        },
    })
}
/**
 * 通过
 * @param data
 * @returns
 */
export function approve(id: number) {
    return createAxios({
        url: url + 'approve',
        method: 'POST',
        params: {
            id: id,
        },
    })
}

/**
 * 详情
 * @param id 记录id
 * @returns
 */
export function info(id: number) {
    return createAxios({
        url: url + 'info',
        method: 'get',
        params: {
            id: id,
        },
    })
}
