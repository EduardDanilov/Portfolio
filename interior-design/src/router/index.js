import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      breadcrumb: 'Home'
    }
  },
  {
    path: '/projects',
    name: 'project',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/articles-news',
    name: 'articles-news',
    component: () => import('../views/ArticlesNewsView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: ErrorView,
    meta: {
      hideFooter: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
