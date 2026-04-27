---
description: 编码规范、代码风格和组件约定
globs:
    - '**/*.{ts,vue}'
---

# 编码规范

## 组件约定

-   使用 Vue 3 Composition API + `<script setup>`
-   组件文件名使用 kebab-case（如 `shop-user`）
-   遵循 Element Plus 组件模式
-   使用 VueUse composables 处理响应式工具

## 代码风格

-   代码使用 4 空格缩进
-   Markdown 文件使用 Tab 缩进
-   使用 Prettier 格式化
-   使用 ESLint 检查
-   TypeScript strict 模式开启

## API 约定

-   API URL 定义为常量：`export const url = '/admin/shop.user/'`
-   所有 HTTP 请求使用 `createAxios`
-   标准 CRUD 操作使用 `baTableApi` 类
-   Token 由 axios 拦截器自动管理

## 路由约定

-   Hash 模式路由（`createWebHashHistory`）
-   Admin 路由在 `/admin/*` 下，User 路由在 `/user/*` 下
-   语言文件根据路由路径自动加载
-   使用 `__()` helper 进行基于路由的翻译

## 表单处理

-   验证使用 Element Plus 表单验证规则
-   默认值在 `baTable` 的 `defaultItems` 中定义
-   提交使用 `baTableApi.postData()`
-   错误反馈使用 `ElMessage`

## 状态管理

-   全局认证状态使用 `adminInfo` 或 `userInfo` Pinia store
-   组件局部状态使用 Vue 3 `ref` 和 `reactive`
-   所有认证 store 使用 `pinia-plugin-persistedstate` 持久化
-   表格状态使用 `baTable` 类

## 错误处理

-   API 错误由 axios 拦截器捕获，通过 `ElMessage.error()` 显示
-   验证错误使用 Element Plus 表单验证反馈
-   权限错误在操作前用 `auth()` 检查
-   加载状态使用 `ElLoading` 或 `v-loading` 指令
