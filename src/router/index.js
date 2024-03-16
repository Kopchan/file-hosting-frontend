import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signUp',
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'logIn',
      component: () => import('@/views/LogInView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = [
    '/login',
    '/signup',
  ];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('token')

  if (authRequired && !token) {
    return {
      path: '/login',
      query: { returnUrl: to.href }
    }
  }
})

export default router
