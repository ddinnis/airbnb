import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/views/home'));
const More = React.lazy(() => import('@/views/more'));
const Detail = React.lazy(() => import('@/views/detail'));
const Demo = React.lazy(() => import('@/views/demo'));

const routes = [
  {
    path: '/',
    // 若不是 Navigate 的话 url 显示 http://localhost:3000/
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/more',
    element: <More />
  },
  {
    path: '/demo',
    element: <Demo />
  }
];

export default routes;
