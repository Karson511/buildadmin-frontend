---
name: create-crud-page
description: 在后台管理系统中新增标准 CRUD 页面（表格+弹窗表单）。当用户说"新增页面"、"新建CRUD"、"添加管理页面"、"在backend下创建xxx页面"、"新增xxx管理"时使用此 skill。也适用于用户提到"参考某个页面创建新页面"、"按数据库表创建管理页面"等场景。即使用户没有明确说"CRUD"，只要涉及在后台新增数据管理功能页面，都应该使用此 skill。
---

## 概述

此 skill 指导如何在 Vue 3 + Element Plus 后台管理系统中，根据数据库表结构创建完整的 CRUD 管理页面。核心原则：**所有字段必须来自数据库表实际列，禁止凭空捏造字段**。

## 创建流程

### 第 1 步：查询数据库表结构（必须最先做）

使用 MCP `mcp__db__execute_sql` 或 `mcp__db__search_objects` 查询目标表的完整字段定义：

```
查询 ba_<module>_<table> 表的所有列：
- 列名、类型、是否可空、默认值、注释(description)
```

根据查询结果整理字段清单，每个字段记录：`字段名`、`数据类型`、`注释`、`默认值`。

> **关键教训**：绝不能跳过此步凭经验猜测字段。曾经犯过错误：虚构了 `key`、`value`、`remark`、`create_time` 等字段，而实际表使用的是 `member_type`、`duration_days`、`created_time` 等完全不同的字段。必须以数据库表结构为唯一数据源。

### 第 2 步：创建 API 文件

在 `src/api/backend/<module>/` 目录下创建 API 文件（如果目录不存在先创建）。

参考文件：`src/api/backend/shop/user.ts`

```typescript
import createAxios from '/@/utils/axios'

export const url = '/admin/<module>.<Controller>/'

export function info(id: string) {
    return createAxios({
        url: url + 'info',
        method: 'get',
        params: {
            id: id,
        },
    })
}
```

要点：

-   `export const url` 供 baTableApi 使用
-   如有额外自定义接口（如 review、approval），在此文件追加
-   URL 格式：`/admin/<模块>.<控制器>/`，注意大小写与后端控制器一致

### 第 3 步：创建视图文件

在 `src/views/backend/<module>/<page>/` 目录下创建两个文件：

#### 3.1 index.vue — 列表页

参考文件：`src/views/backend/user/user/index.vue`

模板结构固定为：

```html
<template>
    <div class="default-main ba-table-box">
        <el-alert ... />
        <TableHeader :buttons="[...]" :quick-search-placeholder="..." />
        <table ref="tableRef" />
        <PopupForm />
    </div>
</template>
```

script setup 核心要素：

```typescript
import { url } from '/@/api/backend/<module>/<page>'
import { baTableApi } from '/@/api/common'

defineOptions({
    name: '<module>/<page>', // 用于路由自动匹配
})

const baTable = new baTableClass(
    new baTableApi(url),
    {
        column: [
            // 第 4 步详细说明列定义
        ],
        dblClickNotEditColumn: [undefined],
    },
    {
        defaultItems: {
            // 根据数据库默认值设置
        },
    }
)
```

#### 3.2 popupForm.vue — 新增/编辑表单

参考文件：`src/views/backend/user/user/popupForm.vue`

模板结构固定为 el-dialog + el-form，表单字段完全来自数据库列。

表单控件映射规则：
| 数据库类型 | 表单控件 |
|---|---|
| varchar (短文本) | `el-input` |
| text / longtext | `el-input type="textarea"` |
| tinyint (枚举) | `el-select` 或 `FormItem type="radio"` |
| int / decimal | `el-input-number` |
| datetime / timestamp | `el-date-picker` |
| 图片路径 | `FormItem type="image"` |
| 外键关联 | `FormItem type="remoteSelect"` |

### 第 4 步：定义表格列和表单字段

**严格根据第 1 步查到的数据库字段来定义**，每个字段的处理规则：

#### 表格列（column）定义

```
{ label: t('翻译key'), prop: '数据库字段名', align: 'center', operator: '搜索操作符' }
```

字段类型与渲染器映射：
| 数据库特征 | render 值 | 说明 |
|---|---|---|
| 状态字段 (0/1 枚举) | `'tag'` | 配合 custom + replaceValue |
| 图片路径 | `'image'` | 自动缩略图 |
| 时间戳/日期 | `'datetime'` | 格式化显示 |
| 操作按钮 | `'buttons'` | 配合 defaultOptButtons |

状态字段示例（注意数据库存的数字值）：

```typescript
{
    label: t('State'),
    prop: 'status',
    align: 'center',
    render: 'tag',
    custom: { '0': 'danger', '1': 'success' },
    replaceValue: { '0': t('xxx.status_off'), '1': t('xxx.status_on') },
}
```

搜索操作符选择：

-   精确匹配：`operator: '='`
-   模糊搜索：`operator: 'LIKE'`
-   时间范围：`operator: 'RANGE'`
-   不参与搜索：`operator: false`

#### 表单验证规则

对数据库 `nullable: false` 且无默认值的字段设置 required 验证：

```typescript
const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    field_name: [buildValidatorData({ name: 'required', title: t('翻译key') })],
    // select 类型用 message 代替 title
    select_field: [buildValidatorData({ name: 'required', message: t('Please select field', { field: t('翻译key') }) })],
})
```

### 第 5 步：创建翻译文件

在以下路径创建翻译（如目录不存在先创建）：

-   `src/lang/backend/zh-cn/<module>/<page>.ts` — 中文
-   `src/lang/backend/en/<module>/<page>.ts` — 英文

翻译 key 采用 `{字段名}` 或 `{字段名}_{枚举值}` 的格式，例如：

```typescript
// zh-cn
export default {
    name: '会员规格名称',
    member_type: '会员类型',
    member_type_gold: '黄金会员', // 枚举值的翻译
    status_off: '下架',
    status_on: '上架',
    created_time: '创建时间',
}

// en
export default {
    name: 'Name',
    member_type: 'Member Type',
    member_type_gold: 'Gold',
    status_off: 'Off',
    status_on: 'On',
    created_time: 'Created Time',
}
```

语言包会通过 `import.meta.glob('./backend/${lang}/**/*.ts')` 自动加载，无需手动注册。

### 第 6 步：菜单与路由

-   **路由**：后端动态加载，`defineOptions({ name: '<module>/<page>' })` 会自动匹配 `src/views/backend/<module>/<page>/index.vue`，无需手动配置路由
-   **菜单**：需要在数据库 `ba_admin_rule` 表中添加菜单记录
-   **按钮权限**：需要在 `ba_admin_rule` 中添加 type='button' 的子记录（查看/添加/编辑/删除）
-   **角色授权**：需要在角色组管理中勾选新增的权限

菜单 SQL 模板（需有写权限的数据库账号执行）：

```sql
-- 1. 菜单目录（如已存在则跳过）
INSERT INTO ba_admin_rule (pid, type, title, name, path, icon, component, keepalive, extend, weigh, status)
VALUES (0, 'menu_dir', '<目录标题>', '<module>', '<module>', '<icon>', '', 0, 'none', 0, '1');

-- 2. 菜单项（pid 填上一步的 id）
INSERT INTO ba_admin_rule (pid, type, title, name, path, icon, component, keepalive, extend, weigh, status)
VALUES (<目录id>, 'menu', '<页面标题>', '<module>/<page>', '<module>/<page>', '<icon>', '/src/views/backend/<module>/<page>/index.vue', 1, 'none', 0, '1');

-- 3. CRUD 按钮权限（pid 填菜单项的 id）
INSERT INTO ba_admin_rule (pid, type, title, name, path, icon, component, keepalive, extend, weigh, status) VALUES
(<菜单项id>, 'button', '查看', '<module>/<page>/index', '', '', '', 0, 'none', 0, '1'),
(<菜单项id>, 'button', '添加', '<module>/<page>/add',    '', '', '', 0, 'none', 0, '1'),
(<菜单项id>, 'button', '编辑', '<module>/<page>/edit',   '', '', '', 0, 'none', 0, '1'),
(<菜单项id>, 'button', '删除', '<module>/<page>/del',    '', '', '', 0, 'none', 0, '1');
```

### 第 7 步：验证

创建完成后运行：

```bash
npm run lint        # ESLint 检查
npm run typecheck   # TypeScript 类型检查
```

如有 prettier 格式化问题，运行 `npm run lint-fix` 自动修复。

## 完整文件清单

一次完整的 CRUD 页面新增会涉及以下文件：

```
src/api/backend/<module>/<page>.ts              # API 定义
src/views/backend/<module>/<page>/index.vue      # 列表页
src/views/backend/<module>/<page>/popupForm.vue  # 表单弹窗
src/lang/backend/zh-cn/<module>/<page>.ts        # 中文翻译
src/lang/backend/en/<module>/<page>.ts           # 英文翻译
```

## 常见错误对照

| 错误                            | 原因           | 正确做法                                                         |
| ------------------------------- | -------------- | ---------------------------------------------------------------- |
| 字段名与数据库不匹配            | 凭猜测写字段   | 必须先查数据库表结构                                             |
| 时间字段名写错 `create_time`    | 惯性思维       | 检查实际是 `create_time` 还是 `created_time`                     |
| 状态值用字符串 `disable/enable` | 照搬其他页面   | 以数据库实际存储值为准（可能是 `0/1`）                           |
| API URL 直接写在 index.vue      | 不符合项目规范 | 必须放在 `src/api/backend/` 下并 export url                      |
| 缺少按钮权限记录                | 忘记添加       | 菜单项下必须有 4 条 button 子记录                                |
| 翻译 key 与路由路径不匹配       | 随意命名       | 路径 `membership/configs` → 翻译 key 用 `membership.configs.xxx` |
