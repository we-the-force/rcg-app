
import HomePage from '../pages/home.jsx';
import Articulo from '../pages/articulo.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/articulo/:artId/',
    component: Articulo,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
