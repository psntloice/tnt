import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomePage from '../pages/HomePage.vue'
import DestinationDetailsPage from '../pages/DestinationDetailsPage.vue'
import BookingPage from '../pages/BookingPage.vue'

const routes: RouteRecordRaw[] = [
  // { path: '/', component: HomePage },
  { path: '/',
  //  component: HomePage },
   component: () => import('layouts/MainLayout.vue'),
  children: [{ path: '', component: () => import('pages/HomePage.vue') }],
},
  { path: '/destination/:id', component: DestinationDetailsPage },
  { path: '/booking', component: BookingPage },
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
