import createAxios from '/@/utils/axios'

export const url = '/admin/region/'

/**
 * 获取地区列表
 * @param level 地区级别 (1=省, 2=市, 3=区)
 * @param parent_code 父级地区代码
 */
export function getRegionList(level: number, parent_code: number) {
    return createAxios({
        url: url + 'index/getRegionList',
        method: 'get',
        params: {
            level: level,
            parent_code: parent_code,
        },
    })
}
