
import HomePage from '../pages/home.jsx';
import Articulo from '../pages/articulo.jsx';
import ContactsPage from '../pages/contacts.jsx';
import NewsPage from '../pages/news.jsx';
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
    path: '/news',
    component: NewsPage,
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