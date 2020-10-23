
import HomePage from '../pages/home.jsx';
import CategoriaPage from '../pages/categoria.jsx';
import Articulo from '../pages/articulo.jsx';
import TV from '../pages/tv.jsx';
import Radio from '../pages/radio.jsx'
import Busqueda from '../pages/busqueda.jsx'
import Nosotros from '../pages/nosotros.jsx'
import Calca from '../pages/calca.jsx'
import ContactsPage from '../pages/contacto.jsx';
import AvisoPrivacidad from '../pages/aviso_priv.jsx'
import DerechoReplica from '../pages/derecho_rep.jsx'
import Espectaculares from '../pages/espectaculares.jsx'
import Catalogo from '../pages/catalogo_espec.jsx'
import FAQ from '../pages/faq.jsx'
import Autores from '../pages/autores.jsx'
import Autor from '../pages/autor.jsx'
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/articulo/:url/',
    component: Articulo,
  },
  {
    path: '/tv/:name',
    component: TV,
  },
  {
    path: '/radio/:name',
    component: Radio,
  },
  {
    path: '/busqueda/:params',
    component: Busqueda,
  },
  {
    path: '/nosotros',
    component: Nosotros,
  },
  {
    path: '/calca',
    component: Calca,
  },
  {
    path: '/nosotros',
    component: Nosotros,
  },
  {
    path: '/contacto',
    component: ContactsPage,
  },
  {
    path: '/categoria/:nombre',
    component: CategoriaPage,
  },
  {
    path: '/aviso-privacidad',
    component: AvisoPrivacidad,
  },
  {
    path: '/derecho-replica',
    component: DerechoReplica,
  },
  {
    path: '/espectaculares',
    component: Espectaculares,
  },
  {
    path: '/catalogo',
    component: Catalogo,
  },
  {
    path: '/faq',
    component: FAQ,
  },
  {
    path: '/autores',
    component: Autores,
  },
  {
    path: '/autor/:url',
    component: Autor,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;