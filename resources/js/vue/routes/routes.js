import DashboardLayout from '../views/Layout/DashboardLayout.vue';
import AuthLayout from '../views/Pages/AuthLayout.vue';

import LiveEvents from '../views/LiveEvents.vue';
import Events from '../views/Events.vue';
import SinglePreMatchEvents from '../views/SinglePreMatchEvents.vue';

import NotFound from '../views/NotFoundPage.vue';

//import middleware
import auth from "../middleware/auth";
import guest from "../middleware/guest";

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/games/live-events/1'
  },
  {
    path: '/games',
    component: DashboardLayout,
    redirect: '/games',
    children: [
      {
        path: ':events/:id',
        component: Events
      },
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import( '../views/Layout/DashboardLayout.vue'),
        meta: { middleware: guest }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Layout/DashboardLayout.vue'),
        meta: { middleware: guest }
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
