import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
    meta: { breadcrumb: '首页' },
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import( '@/views/Detail.vue'),
    meta: { breadcrumb: '详情' },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
