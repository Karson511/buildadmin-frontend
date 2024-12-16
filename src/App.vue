<template>
    <el-config-provider :locale="lang">
        <router-view></router-view>
    </el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import iconfontInit from '/@/utils/iconfont'
import { useRoute } from 'vue-router'
import { setTitleFromRoute } from '/@/utils/common'
import { useConfig } from '/@/stores/config'
import { useTerminal } from '/@/stores/terminal'
// modules import mark, Please do not remove.

const config = useConfig()
// 访问当前路由
const route = useRoute()
const terminal = useTerminal()

// 初始化 element 的语言包
const { getLocaleMessage } = useI18n()
const lang = getLocaleMessage(config.lang.defaultLang) as any
onMounted(() => {
    iconfontInit()
    terminal.init()

    // Modules onMounted mark, Please do not remove.
})

// 监听路由变化时更新浏览器标题
// 要对同一个组件中参数的变化做出响应的话，你可以简单地 watch $route 对象上的任意属性;
watch(
    () => route.path,
    () => {
        setTitleFromRoute()
    }
)
</script>
