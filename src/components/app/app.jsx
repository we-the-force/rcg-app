import React from "react";
import { Device } from "framework7/framework7-lite.esm.bundle.js";
import { App, View } from "framework7-react";
import cordovaApp from "../../js/cordova-app";
import routes from "../../js/routes";
import LeftPanelMobile from "@/components/general/left_panel/left-panel-mobile";
import RadioPlayerStatic from "@/components/radio/radio-player-static";
import { AppQuery } from "@/graphql/queries.graphql";

import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider, Query } from "@apollo/client";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { HelmetProvider } from "react-helmet-async";

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

			pushStateRoot: window.location.protocol + "//dev." + window.location.hostname + "",
			view: {
				pushState: true,
				pushStateRoot: `${process.env.PROTOCOL}://${process.env.APP_HOSTNAME}`,
				pushStateSeparator: "",
			},

			autoDarkTheme: true,

			// App routes
			routes: routes,

			// Register service worker
			// serviceWorker: Device.cordova ? {} : { path: "/service-worker.js" },
			serviceWorker: Device.cordova ? {} : { path: "/OneSignalSDKWorker.js" },
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
				get_RadioURL: () => {
					return this.state.data.radio_url;
				},
				set_RadioURL: (rad_url) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								radio_url: rad_url,
							},
						};
					});
				},
				get_RadioIMG: () => {
					return this.state.data.radio_img;
				},
				set_RadioIMG: (rad_img) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								radio_img: rad_img,
							},
						};
					});
				},
				get_RadioName: () => {
					return this.state.data.radio_name;
				},
				set_RadioName: (rad_name) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								radio_name: rad_name,
							},
						};
					});
				},
				get_RadioVolume: () => {
					return this.state.data.radio_volume;
				},
				set_RadioVolume: (rad_volume) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								radio_volume: rad_volume,
							},
						};
					});
				},
				get_RadioMuted: () => {
					return this.state.data.radio_muted;
				},
				set_RadioMuted: (radio_muted) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								radio_muted: radio_muted,
							},
						};
					});
				},
				get_RadioPlay: () => {
					return this.state.data.radio_play;
				},
				set_RadioPlay: (radio_play) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								radio_play: radio_play,
							},
						};
					});
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
				radio_url: "",
				radio_name: "",
				radio_img: "",
				radio_volume: 0.8,
				radio_muted: false,
				radio_play: false,
			},
		};
	}

	render() {
		return (
			<ApolloProvider client={client}>
				<HelmetProvider context={helmetContext}>
					<App params={this.state}>
						<RadioPlayerStatic
							url={this.state.data.radio_url}
							play={this.state.data.radio_play}
							volume={this.state.data.radio_volume}
							muted={this.state.data.radio_muted}
						/>
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
