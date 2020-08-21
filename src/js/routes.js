
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
    path: '/categoria/:nameId',
    component: CategoriaPage,
  },
  {
    path: '/articulo/:artId/',
    async: async function (routeTo, routeFrom, resolve, reject)
    {
      var router = this;
      var app = router.app;
      var artId = routeTo.params.artId;

      let article;
      let query = `{articulo(id:${artId}){Titulo autor{nombre} fecha cover{url} description visitas tags{tag} categorias{nombre} comentarios{valor}}}`;
      await app.request.promise.get(`http://localhost:1337/graphql?query=${query}`).then(function(res){
        let resData = JSON.parse(res.data);
        article = resData.data.articulo;
      }).catch(function(err){
        console.log("Error fetching article information");
        console.log(err);
      });

      resolve({
        component: Articulo
      },
      {
        context: {
          Article: article
        }
      });
    }
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
    path: '/busqueda',
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
    path: '/aviso_privacidad',
    component: AvisoPrivacidad,
  },
  {
    path: '/derecho_replica',
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
    path: '/autor',
    component: Autor,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;