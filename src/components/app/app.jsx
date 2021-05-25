import React from "react";
import { Device } from "framework7/framework7-lite.esm.bundle.js";
import { App, View } from "framework7-react";
import cordovaApp from "../../js/cordova-app";
import routes from "../../js/routes";
import LeftPanelMobile from "@/components/general/left_panel/left-panel-mobile";
import { AppQuery } from "@/graphql/queries.graphql";

import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider, Query } from "@apollo/client";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { Helmet, HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message }) => {
			/* console.error('!!GraphQL Error!!', message) */
		});
});

const client = new ApolloClient({
	uri: `${process.env.PROTOCOL}://${process.env.API_HOSTNAME}/graphql`,
	cache: new InMemoryCache(),
	link: ApolloLink.from([errorLink, new HttpLink({ uri: `${process.env.PROTOCOL}://${process.env.API_HOSTNAME}/graphql` })]),
});

export default class extends React.Component {

	constructor() {
		super();
		this.state = {
			// Framework7 Parameters
			id: "io.framework7.RCG", // App bundle ID
			name: "RCG webpage", // App name
			theme: "auto", // Automatic theme detection

			pushStateRoot: window.location.protocol + '//' + window.location.hostname + '',
			view: {
				pushState: true,
				pushStateRoot: `${process.env.PROTOCOL}://${process.env.APP_HOSTNAME}`,
				pushStateSeparator: "",
			},

			autoDarkTheme: true,

			// App routes
			routes: routes,

			// Register service worker
			serviceWorker: Device.cordova ? {} : { path: "/service-worker.js" },
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
					app.dialog.alert("Hello World");
				},
				handleCategoriaActual: (cat) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								categoriaActual: cat,
							},
						};
					});
				},
				getCategorias: () => {
					return this.state.data.categorias;
				},
				getLogo: () => {
					return this.state.data.logo;
				},
				getLogoDarkMode: () => {
					return this.state.data.logoDarkMode;
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
				db_url: `${process.env.PROTOCOL}://${process.env.API_HOSTNAME}`,
				url: `${process.env.PROTOCOL}://${process.env.APP_HOSTNAME}`,
				categorias: [],
				categoriaActual: "",
				radioStations: [],
				tvChannels: [],
				articulosRightPanel: [],
				logo: "",
				logoDarkMode: "",
			},
		};
	}

	render() {
		const { helmet } = helmetContext;

		return (
			<ApolloProvider client={client}>
				<HelmetProvider context={helmetContext}>
					<App params={this.state}>
						{/* <Helmet>
							<meta property="og:site_name" content="RCG" />
							<meta property="og:type" content="website" />
							<meta property="og:url" content="https://rcg.com.mx" />
							<meta property="og:title" content="RCG" />
							<meta property="og:description" content="Las Noticias de México, Coahuila y Saltillo." />
							<meta property="og:image" content="https://www.rcg.com.mx/wp-content/uploads/2020/09/logo-rcg-media-250.png" />
							<meta property="og:image:width" content="1200" />
							<meta property="og:image:height" content="720" />

							<meta name="twitter:card" content="summary_large_image" />
							<meta name="twitter:creator" content="@RCGoficial" />
							<meta name="twitter:url" content="https://rcg.com.mx/" />
							<meta name="twitter:title" content="RCG" />
							<meta name="twitter:description" content="Las Noticias de México, Coahuila y Saltillo." />

							<meta property="twitter:image" content="https://www.rcg.com.mx/wp-content/uploads/2020/09/logo-rcg-media-250.png" />
							<meta property="twitter:title" content="RCG" />
							<meta property="twitter:description" content="Las Noticias de México, Coahuila y Saltillo." />
						</Helmet> */}
						<LeftPanelMobile categorias={this.state.data.categorias} categoria={this.state.data.categoriaActual} />
						<View id="main-view" main className="safe-areas" url="/" />
					</App>
				</HelmetProvider>
			</ApolloProvider>
		);
	}
	componentDidMount() {
		client
			.query({
				query: AppQuery,
			})
			.then((res) => {
				console.log(res.data);
				this.setState((prevState) => {
					return {
						...prevState,
						data: {
							...prevState.data,
							categorias: res.data.categorias,
							radioStations: res.data.radioStations,
							tvChannels: res.data.tvChannels,
							articulosRightPanel: res.data.rightPanel,
							logo: res.data.setting.LogoRCG.url,
							logoDarkMode: res.data.setting.LogoRCGModoOscuro.url,
						},
					};
				});
			});
		this.$f7ready((f7) => {
			// Init cordova APIs (see cordova-app.js)
			const $ = f7.$;
			if (Device.cordova) {
				cordovaApp.init(f7);
			}
			// Call F7 APIs here
			window.addEventListener("orientationchange", function (e) {
				if ($(".popup.modal-in").length) {
					f7.popup.close(".popup.modal-in");
					return false;
				}
				if ($(".popover.modal-in").length) {
					f7.popover.close(".popover.modal-in");
					return false;
				}
				if ($(".panel.panel-in").length) {
					f7.panel.close(".panel.panel-in");
					return false;
				}
			});

			window.addEventListener("popstate", function (e) {
				if ($(".popover.modal-in").length) {
					f7.popover.close(".popover.modal-in");
					return false;
				}
				if ($(".popup.modal-in").length) {
					f7.popup.close(".popup.modal-in");
					return false;
				}

				if ($(".panel.panel-in").length) {
					f7.panel.close(".panel.panel-in");
					return false;
				}
			});
		});
	}
}
