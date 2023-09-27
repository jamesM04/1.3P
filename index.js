import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Forum from '../views/Forum.vue';
import TopicDetail from '../components/TopicDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    },
    {
      path: '/forum/:id', // Use dynamic route segment to specify topic ID
      name: 'topic-detail',
      component: TopicDetail
    }
  ]
})

export default router
