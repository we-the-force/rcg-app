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
  if (graphQLErrors) graphQLErrors.map(({ message }) => {/* console.error('!!GraphQL Error!!', message) */});
})

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:1337/graphql`,
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, new HttpLink({ uri: `http://${window.location.hostname}:1337/graphql` })]),
});

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      // Framework7 Parameters
      id: 'io.framework7.RCG', // App bundle ID
      name: 'RCG webpage', // App name
      theme: 'auto', // Automatic theme detection
      
      // pushStateRoot: window.location.protocol + '//' + window.location.hostname + ':8080',
      view: {
        pushState: true,
        pushStateRoot: `${window.location.protocol}//${window.location.hostname}:8080`,
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
        handleCategoriaActual: (cat) => {
          this.setState((prevState) => {
            return {
              ...prevState,
              data: {
                ...prevState.data,
                categoriaActual: cat,
              }
            }
          });
        },
        getCategorias: () => {
          return this.state.data.categorias;
        },
        getCategoriaActual: () => {
          return this.state.data.categoriaActual;
        },
        getRadio: () => {
          return this.state.data.radioStations;
        },
        getTV: () => {
          return this.state.data.tvChannels;
        },
        getArticulosRightPanel: () => {
          return this.state.data.articulosRightPanel;
        },
        get_URL_DB: () => {
          return this.state.data.db_url;
        },
        get_URL: () => {
          return this.state.data.url;
        },
      },
      data: {
        db_url: `http://${window.location.hostname}:1337`,
        url: `http://${window.location.hostname}:8080`,
        categorias: [],
        categoriaActual: '',
        radioStations: [],
        tvChannels: [],
        articulosRightPanel: [],
      }
    }
  }

  render() {
    let tablet = false, desktop = false, mobile = false;
    let w = window.innerWidth;
    if (w >= 1024) {
      desktop = true;
    } else if (w >= 640) {
      tablet = true;
    } else {
      mobile = true;
    }

    return (
      <ApolloProvider client={client}>
        <App params={this.state}>
          <LeftPanelMobile categorias={this.state.data.categorias} categoria={this.state.data.categoriaActual} />
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

    client.query({
      query: AppQuery
    }).then(res => {
      // console.log("app.jsx did mount", res);
      this.setState((prevState) => {
        return {
          ...prevState,
          data: {
            ...prevState.data,
            categorias: res.data.categorias,
            radioStations: res.data.radioStations,
            tvChannels: res.data.tvChannels,
            articulosRightPanel: res.data.rightPanel,
          }
        }
      });
    });
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      console.log(Devide);
      console.log(f7);
      // Call F7 APIs here
    })
  }
}