import React from 'react';
import { Device } from 'framework7/framework7-lite.esm.bundle.js';
import {
  App,
  View,
} from 'framework7-react';
import cordovaApp from '../../js/cordova-app';
import routes from '../../js/routes';
import LeftPanelMobile from '@/components/general/left_panel/left-panel-mobile';
import { AppQuery } from '@/graphql/queries.graphql';

import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider, Query } from '@apollo/client';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.error('!!GraphQL Error!!', message));
})

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, new HttpLink({ uri: 'http://localhost:1337/graphql' })])
});


export default class extends React.Component {
  constructor() {
    super();

    var categorias = [];

    client.query({
      query: AppQuery
    }).then(res => {
      this.setState({
        categorias: res.data.categorias
      })
    });

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
        methods: {
          alert: function () {
            app.dialog.alert('Hello World');
          },
          handleCategorias: (cat) => {
            this.setState({
              categorias: cat
            })
          },
          handleCategoriaActual: (cat) => {
            this.setState({
              categoriaActual: cat
            })
          }
        }
      },

      categorias: categorias,
      categoriaActual: '',

    }
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <App params={this.state.f7params}>
          <LeftPanelMobile categorias={this.state.categorias} categoria={this.state.categoriaActual} />
          <View
            id="main-view"
            main
            className="safe-areas"
            url="/"
          />
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