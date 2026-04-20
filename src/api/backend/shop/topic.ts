import createAxios from '/@/utils/axios'

export const url = '/admin/shop.topic/'

export function add(userId: string) {
    return createAxios({
        url: url + 'add',
        method: 'get',
        params: {
            userId: userId,
        },
    })
}

export function userEdit(id: string | number) {
    return createAxios({
        url: url + 'userEdit',
        method: 'get',
        params: {
            id,
        },
    })
}
