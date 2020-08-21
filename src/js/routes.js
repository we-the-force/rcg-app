
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
    // ,
    // options: {
    //   props: {
    //     article: "asd"
    //   }
    // }
  },
  {
    path: '/contacts',
    component: ContactsPage,
  },
  {
    path: '/categoria/:nameId',
    // component: CategoriaPage,
    async: async function (routeTo, routeFrom, resolve, reject)
    {
      var router = this;
      var app = router.app;
      var catId = routeTo.params.nameId;

      let categoria = await indexToCategory(catId);
      let articles;
      let query = `query{ articulos(where: {categorias: {id: ${catId}}}){ Titulo autor{nombre} fecha cover{url} description visitas tags{tag} categorias{nombre id} comentarios{valor}}}`
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

      async function indexToCategory(index)
      {
        console.log("Receiving switch: " + index);
        switch (index)
        {
          case "1":
            return "Locales";
          case "2":
            return "Estatal";
          case "3":
            return "Nacional";
          case "4":
            return "Internacional";
          case "5":
            return "Deportes";
          case "6":
            return "Espectaculos";
          case "7":
            return "destacadas";
          case "8":
            return "Fundacion RCG";
          case "9":
            return "Salud y Cultura";
          default:
            console.log(`Entered on default (${index})`);
        }
      }
    }
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;

// function requestInfo() {
//   var requestOptions = {
//     method: 'POST',
//     body: `mutation {
//       createAutor(
//         input: {
//           data: {
//             nombre: "Pedro nuevo como no",
//             correo: "newpedro@test.com",
//             descripcion: "Ayyy el pedro"
//           }
//         }
//       )
//       {
//         autor{
//           nombre
//           correo
//           descripcion
//         }
//       }
//     }`,
//   };

//   fetch ('http://localhost:1337/graphql', requestOptions)
//   .then(response => {
//     console.log("requestInfo.response");
//     console.log(response);
//   }).then(data => {
//     console.log("requestInfo.data");
//     console.log(data);
//   });
// }

// async function getAutors() {
//   let query = `query={autors{nombre correo descripcion}}`;
//   var requestOptions = {
//     method: 'GET',
//   }
//   await fetch (`http://localhost:1337/graphql?${query}`, requestOptions)
//   .then (async function(res){
//     console.log("getAutors.response");
//     console.log(res);
//     let asd = await res.json();
//     console.log(asd.data);
//   })
// }