import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: '/timeline',
        name: 'view-timeline',
        component: () => import('pages/timeline/ViewPage.vue'),
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: '/timeline',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'list',
        name: 'timeline-list',
        component: () => import('pages/timeline/ListPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'edit',
        name: 'timeline-edit',
        component: () => import('pages/timeline/EditPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'new',
        name: 'timeline-new',
        component: () => import('pages/timeline/NewPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
