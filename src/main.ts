import { createApp } from 'vue'
// 引入App.vue
import App from './App.vue'
import router from './router'
import { loadLang } from '/@/lang/index'
import { registerIcons } from '/@/utils/common'
import ElementPlus from 'element-plus'
import mitt from 'mitt'
import pinia from '/@/stores/index'
import { directives } from '/@/utils/directives'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'font-awesome/css/font-awesome.min.css'
import '/@/styles/index.scss'
// modules import mark, Please do not remove.

async function start() {
    const app = createApp(App)
    // 安装状态管理库插件
    app.use(pinia)
    console.warn("main.ts")
    // 全局语言包加载
    await loadLang(app)

    app.use(router)
    app.use(ElementPlus)

    // 全局注册
    directives(app) // 指令
    // 注册当前组件实例可用的组件
    registerIcons(app) // icons

    app.mount('#app')

    // modules start mark, Please do not remove.
    // 注册一个能够被应用内所有组件实例zh访问到的全局属性对象，实现任意2个组件中传值, eventBus vue2的事件总线, vue3使用mitt或者tiny-emitter替换 
    // https://v3-migration.vuejs.org/zh/breaking-changes/events-api
    // https://cn.vuejs.org/api/application.html#app-config-globalproperties
    app.config.globalProperties.eventBus = mitt()
}
start()
