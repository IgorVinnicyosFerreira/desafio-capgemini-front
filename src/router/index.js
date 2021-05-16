import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('@/layouts/default/index'),
      children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('@/views/balance/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/deposito',
        name: 'deposit',
        component: () => import('@/views/deposit/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/saque',
        name: 'withdraw',
        component: () => import('@/views/withdraw/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/historico-transacoes',
        name: 'bank-transactions',
        component: () => import('@/views/bankTransactions/index'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dados-da-conta',
        name: 'account-data',
        component: () => import('@/views/accountData/index'),
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.name === 'login' && store.state.authenticated){
    next({ name: 'home'});
  }

  if(!store.state.authenticated && to.meta.requiresAuth){
    next({ name: 'login'});
  }

  next();
})

export default router
