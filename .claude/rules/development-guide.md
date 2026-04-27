---
description: 常见开发操作指南和故障排除
globs:
    - '**/*.{ts,vue}'
---

# 开发操作指南

## 首次设置

1. 安装依赖：`npm install`
2. 配置环境：复制 `.env.development.example` 为 `.env.development`，设置 `VITE_PROXY_URL`
3. 启动开发：`npm run dev`
4. 访问：后台 `http://localhost:{port}/#/admin`，前台 `http://localhost:{port}/#/user`

## 新增后台页面

1. 在 `src/views/backend/` 创建组件
2. 在 `src/router/static/adminBase.ts` 添加路由
3. 在 `src/lang/backend/{lang}/{path}.ts` 添加翻译

## 新增前台页面

1. 在 `src/views/frontend/` 创建组件
2. 在 `src/router/static/memberCenterBase.ts` 添加路由
3. 在 `src/lang/frontend/{lang}/{path}.ts` 添加翻译

## 新增 API 端点

1. 在 `src/api/backend/` 或 `src/api/frontend/` 创建 API 文件
2. 使用 `createAxios` 封装
3. 标准 CRUD 使用 `baTableApi` 类

## 新增表格字段渲染器

1. 在 `src/components/table/fieldRender/{name}.vue` 创建组件
2. 运行 `npm run build` 或 `npm run dev` 重新生成类型
3. 在表格列定义中使用：`render: '{name}'`

## 新增翻译文件

1. 在 `src/lang/{backend|frontend}/{lang}/{route}.ts` 创建文件
2. 导出默认对象包含翻译键值
3. 使用 `__('key')` helper 自动解析

## 常见问题

| 错误               | 原因                     | 解决                               |
| ------------------ | ------------------------ | ---------------------------------- |
| `401 Unauthorized` | Token 过期或缺失         | 检查 localStorage 中的 token       |
| `409 Conflict`     | 需要 Token 刷新          | axios 拦截器自动处理               |
| 翻译不显示         | 语言文件缺失或路径不匹配 | 检查 `src/lang/` 对应路径          |
| 表格不渲染         | 缺少字段渲染器类型       | 运行 `npm run build` 重新生成类型  |
| 路由未找到         | 路由路径或基础路径错误   | 检查 `src/router/static/`          |
| 构建错误           | 缓存问题                 | `rm -rf node_modules/.vite` 后重启 |
