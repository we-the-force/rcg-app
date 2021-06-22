// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Import Framework7
import Framework7 from "framework7/framework7-lite.esm.bundle.js";

// Import Framework7-React Plugin
import Framework7React from "framework7-react";

// Import Framework7 Styles
import "framework7/css/framework7.bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.styl";

// Import App Component
import App from "@/components/app/app.jsx";

// import * as serviceWorker from '@/OneSignalSDKWorker';

// window.OneSignal = window.OneSignal || [];
// const OneSignal = window.OneSignal;

// OneSignal.push(() => {
// 	OneSignal.init({
// 		appId: "2b8f51fa-8098-49d8-a9a5-a36441f41907", //STEP 9
// 	});
// });

// Init F7 React Plugin
Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(React.createElement(App), document.getElementById("app"));

// serviceWorker.register();
