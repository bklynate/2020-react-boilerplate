import React from 'react'; // eslint-disable-line

import loadable from '@loadable/component';

import App from './App';
import LandingPage from './LandingPage';

const NotFoundPage = loadable(() => import('./NotFoundPage'));

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: LandingPage,
        routes: [],
      },
      {
        path: '*',
        exact: true,
        component: NotFoundPage,
      },
    ],
  },
];
