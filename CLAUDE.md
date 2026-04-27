# Project Contract

Vue 3 + TypeScript + Element Plus 双应用前端（后台管理 `/admin` + 会员中心 `/user`）。

## Build & Dev

```bash
npm run dev        # 开发服务器（自动清缓存）
npm run build      # 生产构建（含类型生成，dist/ 需提交 git）
npm run lint       # ESLint 检查
npm run lint-fix   # ESLint 自动修复
npm run format     # Prettier 格式化
npm run typecheck  # TypeScript 类型检查
```

## Architecture Boundaries

-   后台页面 → `src/views/backend/`，路由 → `src/router/static/adminBase.ts`，API → `src/api/backend/`，token → `batoken`
-   前台页面 → `src/views/frontend/`，路由 → `src/router/static/memberCenterBase.ts`，API → `src/api/frontend/`，token → `ba-user-token`
-   翻译文件 → `src/lang/{backend|frontend}/{lang}/{route}.ts`，使用 `__('key')` helper
-   表格 CRUD → `baTableApi` + `baTable` 类，不直接写列表/增删改查逻辑
-   HTTP 请求 → `createAxios`，不直接使用 axios

## NEVER

-   使用 Options API，必须用 Composition API + `<script setup>`
-   直接调用 axios，必须用 `createAxios` 或 `baTableApi`
-   硬编码 API URL，必须定义为 `export const url = '...'`
-   在 admin 页面用 `/api/*` 路径，在 user 页面用 `/admin/*` 路径
-   手动管理 token（拦截器自动处理）
-   引入第三方 UI 组件库（统一 Element Plus）
-   提交代码前不跑 `npm run lint` 和 `npm run typecheck`

## ALWAYS

-   提交前运行 `npm run lint` + `npm run typecheck`
-   发版时将 `dist/` 目录一起提交
-   修改 API/路由后同步更新翻译文件
-   新增表格字段渲染器后运行 `npm run build` 重新生成类型

## Verification

-   代码变更：`npm run lint` + `npm run typecheck`
-   新增页面：确认路由文件、翻译文件、API 文件均已创建
-   API 变更：确认请求路径符合 admin/user 边界
-   UI 变更：确认 Element Plus 组件用法，浏览器验证渲染

## Compact Instructions

上下文压缩时保留：

1. 架构决策（切勿摘要丢失）
2. 已修改文件和关键变更内容
3. 当前验证状态（通过/失败的命令）
4. 未解决的风险、待办事项、回滚备注
