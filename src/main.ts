import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue'
import router from './router'
import '@/styles/index.less'
import App from './App.vue'
import 'virtual:windi.css'
import zhCN from 'ant-design-vue/es/locale/zh_CN'; // 导入中文语言包


const app = createApp(App)
app.use(router)
app.use(Antd, {
    locale: zhCN
})
app.mount('#app')

