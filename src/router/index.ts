import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('../views/QuestionView.vue'),
      props: true
    },
    {
      path: '/list/:id',
      name: 'list',
      component: () => import('../views/ListView.vue'),
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue'),
      props: true
    },
  ],
})

export default router
