// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomePage from 'pages/HomePage.vue'
// import DestinationDetailsPage from 'pages/DestinationDetailsPage.vue'
// import BookingPage from 'pages/BookingPage.vue'

// const routes: Array<RouteRecordRaw> = [
//   { path: '/', component: HomePage },
//   { path: '/destination/:id', component: DestinationDetailsPage },
//   { path: '/booking', component: BookingPage },
//   // Add more routes as needed
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
