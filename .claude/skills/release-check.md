---
name: release-check
description: 发版前检查，验证构建、类型、lint、dist 产物等是否就绪。
---

## 检查清单（全部通过才能发版）

-   [ ] `npm run build` 构建成功且无错误
-   [ ] `npm run lint` ESLint 检查通过
-   [ ] `npm run typecheck` TypeScript 类型检查通过
-   [ ] `dist/` 目录已生成且包含预期文件（index.html、assets/）
-   [ ] `dist/` 目录已添加到 git 暂存区并准备提交
-   [ ] 待发版功能已合并到 master 分支
-   [ ] CHANGELOG / 版本说明已更新（如项目有此要求）

## 输出

逐项输出 Pass / Fail。任何 Fail 必须在发版前修复。
