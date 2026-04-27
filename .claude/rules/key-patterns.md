---
description: 核心模式：baTable、API层、国际化、认证
globs:
    - '**/*.{ts,vue}'
---

# 核心模式

## baTable 表格管理系统

`baTable` 类（`src/utils/baTable.ts`）提供标准化表格管理：

-   统一表格操作：index（列表）、add、edit、delete、sortable
-   内置状态管理：表格数据、选择、筛选、分页
-   通用搜索：支持 eq、RANGE、NULL 等操作符
-   字段渲染器：`src/components/table/fieldRender/` 中的自定义渲染
-   生命周期钩子：before/after 钩子
-   拖拽排序：集成 SortableJS

```typescript
const api = new baTableApi('/admin/shop.user/')
const baTable = new baTable(api, {
    column: [...],
    filter: {...},
}, {
    defaultItems: {...}
})
```

## API 层模式

`createAxios` 封装特性：

-   双 token 系统（`batoken` admin / `ba-user-token` user）
-   409 响应自动刷新 token
-   内置重复请求取消
-   可选 Element Plus loading 集成
-   标准化错误通知
-   支持简化响应格式（`reductDataFormat`）

```typescript
// 单个 API
export function info(id: string) {
    return createAxios({ url: url + 'info', method: 'get', params: { id } })
}

// CRUD API
const api = new baTableApi('/admin/shop.user/')
// 提供：index(), edit(), del(), postData(), sortableApi()
```

## 国际化 (i18n)

语言文件根据路由动态加载：

-   Backend: `src/lang/backend/{lang}/{path}.ts`
-   Frontend: `src/lang/frontend/{lang}/{path}.ts`
-   Common: `src/lang/common/{lang}/{feature}.ts`

```typescript
import { __ } from '/@/utils/common'
const text = __('translation key') // 解析为 currentRoute.path + '.' + key
```

## 认证体系

两个独立 Pinia store：

-   `adminInfo`（`src/stores/adminInfo.ts`）：Token `batoken`，登录路由 `adminLogin`
-   `userInfo`（`src/stores/userInfo.ts`）：Token `ba-user-token`，登录路由 `userLogin`

两者均支持：`getToken(type)`, `setToken(token, type)`, `removeToken()`, `logout()`

## 常用工具函数

```typescript
import { isAdminApp, auth, fullUrl, __ } from '/@/utils/common'

isAdminApp() // 判断当前是否在 admin 应用
auth('edit') // 检查当前用户是否有 edit 权限
fullUrl('/uploads/image.jpg') // 相对 URL 转绝对 URL
__('pageTitle') // 基于路由的翻译
```
