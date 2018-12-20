import StartPage from './components/pages/StartPage'
import RolesSelectionPage from './components/pages/RolesSelectionPage'
import NotFoundPage from './components/pages/NotFoundPage'

export default [
  {
    path: '/',
    component: StartPage,
  },
  {
    path: '/roles',
    component: RolesSelectionPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
