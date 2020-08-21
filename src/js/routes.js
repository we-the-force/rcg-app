
import HomePage from '../pages/home.jsx';
import Articulo from '../pages/articulo.jsx';
import ContactsPage from '../pages/contacts.jsx';
import CategoriaPage from '../pages/categoria.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/articulo/:artId',
    component: Articulo,
  },
  {
    path: '/contacts',
    component: ContactsPage,
  },
  {
    path: '/categoria/:nameId',
    component: CategoriaPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
