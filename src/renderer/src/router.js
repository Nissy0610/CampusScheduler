import { createRouter, createWebHashHistory } from "vue-router";

//ページ読み込み
import Home from './views/Home.vue'
import Calendar from "./views/Calendar.vue"
import Setting from "./views/Setting.vue"

//リンク一覧
const routes = [
    { path: '/', component: Home },
    { path: '/Calendar', component: Calendar },
    { path: '/Setting', component: Setting },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
