import createAxios from '/@/utils/axios'

export const url = '/admin/shop.jobType/'

export function add() {
    return createAxios({
        url: url + 'add',
        method: 'get',
    })
}

export function edit(id: string | number) {
    return createAxios({
        url: url + 'edit',
        method: 'get',
        params: { id },
    })
}
