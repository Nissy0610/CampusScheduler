import { createRouter, createWebHashHistory } from "vue-router";

//ページ読み込み
import Home from './views/Home.vue'

//リンク一覧
const routes = [
    { path: '/', component: Home },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
