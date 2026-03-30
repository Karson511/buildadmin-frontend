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

export function add(data: any) {
    return createAxios({
        url: url + 'add',
        method: 'POST',
        data: data,
    })
}

export function edit(data: any) {
    return createAxios({
        url: url + 'edit',
        method: 'POST',
        data: data,
    })
}

export function review(data: any) {
    return createAxios({
        url: url + 'review',
        method: 'POST',
        data: {
            data,
        },
    })
}

export function approval(data: any) {
    return createAxios({
        url: url + 'index',
        method: 'get',
        params: {
            data,
        },
    })
}
