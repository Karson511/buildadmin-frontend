import createAxios from '/@/utils/axios'

export const url = '/admin/shop.user/'

export function info(id: string) {
    return createAxios({
        url: url + 'info',
        method: 'get',
        params: {
            id: id,
        },
    })
}

export function review(data) {
    return createAxios({
        url: url + 'review',
        method: 'POST',
        data: {
            data,
        },
    })
}

export function approval(data) {
    return createAxios({
        url: url + 'index',
        method: 'get',
        params: {
            data,
        },
    })
}
