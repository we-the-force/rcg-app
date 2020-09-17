
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
    /* async: async function (routeTo, routeFrom, resolve, reject)
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
    } */
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
    /* async: async function (routeTo, routeFrom, resolve, reject)
    {
      var router = this;
      var app = router.app;
      var catId = categoryToIndex(routeTo.params.nameId);
      // var catId = routeTo.params.nameId;

      console.log();

      let categoria = indexToCategory(parseInt(catId));
      let articles;
      let query = `query{ articulos(where: {categorias: {id: ${catId}}}){ id Titulo autor{nombre} fecha cover{url} description visitas tags{tag} categorias{nombre id} comentarios{valor}}}`
      await  app.request.promise.get(`http://localhost:1337/graphql?query=${query}`).then(function(res) {
        let resData = JSON.parse(res.data);
        articles = resData.data.articulos;
      }).catch(function(err){
        console.log("Error fetching articles information");
        console.log(err);
      });

      console.log("ROUTER");
      console.log("Categoria: " + categoria);
      console.log(articles);
      resolve({
        component: CategoriaPage
      },
      {
        context: {
          Articles: articles,
          Category: categoria
        }
      });

      function categoryToIndex(category)
      {
        console.log("Receiuving catToInd: " + category);
        switch (category)
        {
          case "Locales":
            return 1;
          case "Estatales":
            return 2;
          case "Nacionales":
            return 3;
          case "Internacionales":
            return 4;
          case "Deportes":
            return 5;
          case "Espectaculos":
            return 6;
          case "Destacadas":
            return 7;
          case "Fundacion_rcg":
            return 8;
          case "Salud_y_cultura":
            return 9;
          
        }
      }

      function indexToCategory(index)
      {
        console.log("Receiving switch: " + index);
        switch (index)
        {
          case 1:
            return "Locales";
          case 2:
            return "Estatal";
          case 3:
            return "Nacional";
          case 4:
            return "Internacional";
          case 5:
            return "Deportes";
          case 6:
            return "Espectaculos";
          case 7:
            return "Destacadas";
          case 8:
            return "Fundacion RCG";
          case 9:
            return "Salud y Cultura";
          default:
            console.log(`Entered on default (${index})`);
        }
      }
    } */
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