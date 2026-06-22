import createAxios from '/@/utils/axios'

export const url = '/admin/membership.Configs/'

export function info(id: string) {
    return createAxios({
        url: url + 'info',
        method: 'get',
        params: {
            id: id,
        },
    })
}
