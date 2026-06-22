import createAxios from '/@/utils/axios'

export const url = '/admin/posts.postAuditDrafts/'

/**
 * 获取审核草稿列表
 */
export function index(params?: Record<string, any>) {
    return createAxios({
        url: url + 'index',
        method: 'get',
        params,
    })
}

/**
 * 获取审核草稿详情（含正式表对比数据）
 * @param post_id 帖子ID（ba_post_audit_drafts.post_id）
 */
export function detail(post_id: number) {
    return createAxios({
        url: url + 'detail',
        method: 'get',
        params: { post_id },
    })
}

/**
 * 审核通过（乐观锁：传入加载时的草稿版本号，后端比对防止并发修改）
 * @param post_id 帖子ID
 * @param version 草稿版本号（从 detail 接口加载时的 draft.version）
 */
export function approve(post_id: number, version: number) {
    return createAxios(
        {
            url: url + 'approve',
            method: 'post',
            data: { post_id, version },
        },
        {
            showSuccessMessage: true,
        }
    )
}

/**
 * 审核驳回（乐观锁：传入加载时的草稿版本号，后端比对防止并发修改）
 * @param post_id 帖子ID
 * @param remark  驳回原因
 * @param version 草稿版本号（从 detail 接口加载时的 draft.version）
 */
export function reject(post_id: number, remark: string, version: number) {
    return createAxios(
        {
            url: url + 'reject',
            method: 'post',
            data: { post_id, remark, version },
        },
        {
            showSuccessMessage: true,
        }
    )
}
