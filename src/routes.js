import StartPage from './components/pages/StartPage'
import NotFoundPage from './components/pages/NotFoundPage'

export default [
  {
    path: '/',
    component: StartPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
