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
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/auth/LoginPage.vue'),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: 'email-verification',
        name: 'email-verification',
        component: () => import('pages/auth/EmailVerificationPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'verify',
        name: 'verify',
        component: () => import('pages/auth/VerifyPage.vue'),
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
  {
    path: '/moments',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'edit',
        name: 'moment-edit',
        component: () => import('pages/moment/EditPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'new',
        name: 'moment-new',
        component: () => import('pages/moment/NewPage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/albums',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'save',
        name: 'album-save',
        component: () => import('pages/album/SavePage.vue'),
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
