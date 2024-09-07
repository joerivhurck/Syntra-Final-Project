import { createRouter, createWebHashHistory } from 'vue-router'
import CoursesOverview from '@/modules/overview/views/CoursesOverview.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'courses-overview',
      component: CoursesOverview
    },
    {
      path: '/details/:id',
      name: 'course-details',
      component: () => import('@/modules/details/views/CourseDetailsView.vue')
    }
  ]
})

export default router
