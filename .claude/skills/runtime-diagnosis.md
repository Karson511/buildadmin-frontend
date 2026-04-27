---
name: runtime-diagnosis
description: 当项目在开发或生产环境中崩溃、白屏、API 报错、路由异常或表现不符预期时使用。
---

## 证据收集

1. 运行 `npm run typecheck` 捕获类型错误
2. 运行 `npm run lint` 捕获 lint 错误
3. 浏览器控制台最后 50 条错误信息（Console 面板，勾选 Errors）
4. 浏览器 Network 面板中失败的请求（状态码、请求头中的 token）
5. Vue DevTools 中 `adminInfo` / `userInfo` store 的状态

## 决策矩阵

| 症状                | 首先检查                                                     |
| ------------------- | ------------------------------------------------------------ |
| 白屏 / 页面空白     | 控制台 → 路由匹配失败 or 组件加载错误                        |
| API 返回 401        | localStorage 中 token 是否存在、是否过期                     |
| API 返回 409        | axios 拦截器是否正常刷新 token                               |
| 翻译文本未显示      | `src/lang/` 对应路径是否存在语言文件                         |
| 表格不渲染 / 列缺失 | `npm run build` 重新生成 `types/tableRenderer.d.ts`          |
| 路由 404            | `src/router/static/` 中路径是否匹配 `/admin` 或 `/user` 前缀 |
| 构建失败            | `rm -rf node_modules/.vite` 清除缓存后重试                   |
| 样式错乱            | Element Plus 版本兼容性、CSS 加载顺序                        |

## 输出格式

根因 / 影响范围 / 修复步骤 / 验证命令
