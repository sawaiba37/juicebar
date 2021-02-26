
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/juices', component: () => import('pages/juices.vue') },
      { path: '/shake1', component: () => import('pages/shake1.vue') },
      { path: '/shake2', component: () => import('pages/shake2.vue') },
      { path: '/shake3', component: () => import('pages/shake3.vue') },
      { path: '/shake4', component: () => import('pages/shake4.vue') },
      { path: '/shake5', component: () => import('pages/shake5.vue') },
      { path: '/cart', component: () => import('pages/cart.vue') },
      { path: '/cart1', component: () => import('pages/cart1.vue') },
      { path: '/cart2', component: () => import('pages/cart2.vue') },
      { path: '/cart3', component: () => import('pages/cart3.vue') },
      { path: '/cart4', component: () => import('pages/cart4.vue') },
      { path: '/proceed', component: () => import('pages/proceed.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/order', component: () => import('pages/order.vue') },
      { path: '/setting', component: () => import('pages/setting.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
