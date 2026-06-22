import createAxios from '/@/utils/axios'

export const url = '/admin/posts.posts/'

/**
 * 帖子列表
 */
export function index(params?: Record<string, any>) {
    return createAxios({
        url: url + 'index',
        method: 'get',
        params,
    })
}

/**
 * 帖子详情
 * @param id 帖子ID（ba_posts.id）
 */
export function detail(id: number) {
    return createAxios({
        url: url + 'detail',
        method: 'get',
        params: { id },
    })
}

/**
 * 下架帖子
 * @param ids           帖子ID数组
 * @param refuse_remark 下架原因
 */
export function off(ids: number[], refuse_remark: string) {
    return createAxios(
        {
            url: url + 'off',
            method: 'post',
            data: { ids, refuse_remark },
        },
        {
            showSuccessMessage: true,
        }
    )
}

/**
 * 上架帖子
 * @param ids 帖子ID数组
 */
export function publish(ids: number[]) {
    return createAxios(
        {
            url: url + 'publish',
            method: 'post',
            data: { ids },
        },
        {
            showSuccessMessage: true,
        }
    )
}

/**
 * 删除帖子（软删除）
 * @param ids 帖子ID数组
 */
export function del(ids: number[]) {
    return createAxios(
        {
            url: url + 'del',
            method: 'post',
            data: { ids },
        },
        {
            showSuccessMessage: true,
        }
    )
}
