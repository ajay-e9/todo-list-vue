import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import InboxView from "../views/Inbox/Inbox.vue"
import TodayView from "../views/Today/Today.vue"
import UpcomingView from "../views/Upcoming/Upcoming.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: InboxView
    },
    {
      path: '/today',
      name: 'today',
      component: TodayView
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: UpcomingView
    },
  ]
})

export default router
