
import HomePage from '../pages/home.jsx';
import ContactsPage from '../pages/contacts.jsx';
import NewsPage from '../pages/news.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/contacts',
    component: ContactsPage,
  },
  {
    path: '/news',
    component: NewsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
