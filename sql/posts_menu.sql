-- ============================================================
-- 内容管理菜单与权限 SQL
-- 执行前请先确认 max(id) = 121，如果不同请调整 id 值
-- ============================================================

-- 1. 一级目录：内容管理 (id=122)
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (122, 0, 'menu_dir', '内容管理', 'posts', 'posts', 'fa fa-newspaper-o', NULL, '', '', 0, 'none', '', 92, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 2. 菜单：内容管理中心 (id=123)  →  posts/posts
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (123, 122, 'menu', '内容管理中心', 'posts/posts', 'posts/posts', 'fa fa-file-text', 'tab', '', '/src/views/backend/posts/posts/index.vue', 1, 'none', '', 99, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 3. 菜单：内容审核中心 (id=124)  →  posts/audit
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (124, 122, 'menu', '内容审核中心', 'posts/audit', 'posts/audit', 'fa fa-check-circle', 'tab', '', '/src/views/backend/posts/audit/index.vue', 1, 'none', '', 98, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 内容管理中心 (pid=123) 的按钮权限
-- ============================================================

-- 查看
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (125, 123, 'button', '查看', 'posts/posts/index', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 添加
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (126, 123, 'button', '添加', 'posts/posts/add', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 编辑
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (127, 123, 'button', '编辑', 'posts/posts/edit', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 删除
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (128, 123, 'button', '删除', 'posts/posts/del', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 下架
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (129, 123, 'button', '下架', 'posts/posts/off', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 详情
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (130, 123, 'button', '详情', 'posts/posts/detail', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 上架
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (137, 123, 'button', '上架', 'posts/posts/on', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- ============================================================
-- 内容审核中心 (pid=124) 的按钮权限
-- ============================================================

-- 查看
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (131, 124, 'button', '查看', 'posts/audit/index', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 添加
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (132, 124, 'button', '添加', 'posts/audit/add', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 删除
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (133, 124, 'button', '删除', 'posts/audit/del', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 审核通过
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (134, 124, 'button', '审核通过', 'posts/audit/approve', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 审核驳回
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (135, 124, 'button', '审核驳回', 'posts/audit/reject', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- 审核详情
INSERT INTO `ba_admin_rule` (`id`, `pid`, `type`, `title`, `name`, `path`, `icon`, `menu_type`, `url`, `component`, `keepalive`, `extend`, `remark`, `weigh`, `status`, `create_time`, `update_time`)
VALUES (136, 124, 'button', '审核详情', 'posts/audit/detail', '', '', '', '', '', 0, 'none', '', 0, '1', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
