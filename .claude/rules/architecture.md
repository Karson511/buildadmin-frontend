---
description: 项目架构、目录结构和双应用路由体系
globs:
    - '**/*.{ts,vue}'
---

# 项目架构

## 双应用路由体系

-   `/admin/*` → 后台管理应用（布局：`src/layouts/backend/index.vue`）
-   `/user/*` → 会员中心应用（布局：`src/layouts/frontend/user.vue`）

路由使用 hash 模式（`createWebHashHistory`），admin 路由定义在 `src/router/static/adminBase.ts`，user 路由定义在 `src/router/static/memberCenterBase.ts`。

## 目录结构

```
src/
├── api/              # API 层（backend/ 和 frontend/ 分开）
│   ├── backend/      # 后台 API（如 /admin/shop.user/）
│   ├── frontend/     # 前台 API（如 /api/...）
│   └── common.ts     # 共享 API 工具和 baTableApi 类
├── components/       # 可复用 UI 组件
│   ├── table/        # 表格组件和字段渲染器
│   └── icon/         # 图标组件
├── layouts/          # 布局组件（backend/ frontend/ common/）
├── lang/             # 国际化（backend/ frontend/ common/ 各含 zh-cn, en）
├── router/static/    # 静态路由定义
├── stores/           # Pinia 状态管理（adminInfo.ts, userInfo.ts）
├── types/            # TypeScript 类型定义
├── utils/            # 工具函数
│   ├── axios.ts      # Axios 封装（拦截器、token 管理）
│   ├── baTable.ts    # 表格管理类
│   ├── build.ts      # 构建脚本（类型生成）
│   └── common.ts     # 通用工具（auth, isAdminApp, fullUrl, __）
└── views/            # 页面组件（backend/ 和 frontend/ 分开）
```

## 路径别名

-   `/@/` → `./src/`
-   `assets/` → `./src/assets/`

## 环境变量

定义在 `.env.production` 或 `.env.development`：

-   `VITE_PORT` - 开发服务器端口
-   `VITE_OPEN` - 自动打开浏览器
-   `VITE_BASE_PATH` - 部署基础路径
-   `VITE_OUT_DIR` - 输出目录
-   `VITE_PROXY_URL` - 开发环境 API 代理地址
-   `VITE_AXIOS_BASE_URL` - API 请求基础 URL

## 构建产物

-   输出到 `dist/` 目录
-   Vue 生态打包在一起，ECharts 单独分包
-   CSS 不分包（单文件）
-   生产环境无 sourcemaps
-   Chunk 大小警告阈值：1500KB
