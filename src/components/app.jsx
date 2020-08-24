import React from 'react';
import { Device } from 'framework7/framework7-lite.esm.bundle.js';
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
      <App params={this.state.f7params} >
        <View main className="safe-areas" url="/" />
      </App>
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