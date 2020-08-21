import React from 'react';
import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
import {
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

// import ApolloClient, {gql} from "apollo-boost";
// import {ApolloProvider, Query} from "react-apollo";


// const client = new ApolloClient({
//   uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
// })

// const AutorsQuery = () => {
//   try
//   {
//     return <Query query={gql`{
//       autors {
//         id
//         nombre
//         correo
//       }
//     }`}>
//     {
//       () => {({loading, error, data}) => {
//         console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH");
//         if (loading)
//         {
//           return <p>Loading...</p>;
//         }  
//         if (error)
//         {
//           console.log("Ayyy, error pidiendo la info unu");
//           return <p>Error: {JSON.stringify(error)}</p>;
//         }
  
//         return data.autors.results.map(autor => {
//           return <p>{autor.name}</p>
//         })
//       }}
//     }
//   </Query>

//   }
//   catch (err)
//   {
//     console.log("Error ptm");
//     console.log(err);
//   }
// }
export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.framework7.RCG', // App bundle ID
        name: 'RCG webpage', // App name
        theme: 'auto', // Automatic theme detection

        view: {
          pushState: true,
          pushStateRoot: window.location.protocol + '//' + window.location.hostname + ':8080/',
          pushStateSeparator: '#',
        },

        // App routes
        routes: routes,

        // Register service worker
        serviceWorker: Device.cordova ? {} : {
          path: '/service-worker.js',
        },
        // Input settings
        input: {
          scrollIntoViewOnFocus: Device.cordova && !Device.electron,
          scrollIntoViewCentered: Device.cordova && !Device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    // console.log("Caca");
    return (
      // <ApolloProvider client={client}>
      <App params={ this.state.f7params } >
          {/* <AutorsQuery/> */}
          {/* Your main view, should have "view-main" class */}
          <View main className="safe-areas" url="/" />
        </App>
      // </ApolloProvider>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password, () => {
      this.$f7.loginScreen.close();
    });
  }
  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}