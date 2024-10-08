import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobView from '@/views/jobs/JobView.vue';
import JobDetailView from '@/views/jobs/JobDetailView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import UserList from '@/views/users/UserList.vue';
import UserDetails from '@/views/users/UserDetails.vue';
import AllCountriesView from '@/views/countries/AllCountriesView.vue';
import LoginView from '@/views/accounts/LoginView.vue';
import RegisterView from '@/views/accounts/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    // Job
    {
      path: '/jobs',
      name: 'jobs',
      component: JobView,
    },
    {
      path: '/jobs/:id',
      name: 'jobDetails',
      component: JobDetailView,
      props: true,
    },

    // User
    {
      path: '/users',
      name: 'userList',
      component: UserList,
    },
    {
      path: '/users/:uid',
      name: 'userDetails',
      component: UserDetails,
      props: true,
    },

    // Countries
    {
      path: '/countries',
      name: 'allCountries',
      component: AllCountriesView,
    },

    // * Redirect
    {
      path: '/all-jobs',
      redirect: '/jobs',
    },
    {
      path: '/',
      redirect: '/login',
    },
    // * Catch all 404
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
});

export default router;
