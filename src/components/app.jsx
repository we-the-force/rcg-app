import React from 'react';
import { Device } from 'framework7/framework7-lite.esm.bundle.js';
import {
  App,
  View,
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

import { ApolloClient, InMemoryCache, ApolloProvider, Query } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

/* const testQuery = gql`{
  articulos { 
      Titulo
      visitas 
      }
  }
`;

client.query({
  query: testQuery
}).then(res => console.log(res));
 */
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
          pushStateRoot: window.location.protocol + '//' + window.location.hostname + ':8080',
          pushStateSeparator: '',
        },

        autoDarkTheme: true,

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
    }
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <App params={this.state.f7params} >
          <View main className="safe-areas" url="/" />
        </App>
      </ApolloProvider>
    )
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