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

var routes = [{
        path: '/',
        component: HomePage,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/articulo/:url/',
        component: Articulo,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/tv/:name',
        component: TV,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/radio/:name',
        component: Radio,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/busqueda/:params',
        component: Busqueda,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/nosotros',
        component: Nosotros,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/calca',
        component: Calca,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/nosotros',
        component: Nosotros,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/contacto',
        component: ContactsPage,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/categoria/:nombre',
        component: CategoriaPage,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/aviso-privacidad',
        component: AvisoPrivacidad,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/derecho-replica',
        component: DerechoReplica,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/espectaculares',
        component: Espectaculares,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/catalogo',
        component: Catalogo,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/faq',
        component: FAQ,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/autores',
        component: Autores,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '/autor/:url',
        component: Autor,
        options: {
            clearPreviousHistory: true
        },
    },
    {
        path: '(.*)',
        component: NotFoundPage,
        options: {
            clearPreviousHistory: true
        },
    },
];

export default routes;