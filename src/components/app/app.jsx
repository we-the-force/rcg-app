import React from "react";
import { Device } from "framework7/framework7-lite.esm.bundle.js";
import { App, View } from "framework7-react";
import cordovaApp from "../../js/cordova-app";
import routes from "../../js/routes";
import LeftPanelMobile from "@/components/general/left_panel/left-panel-mobile";
import RadioPlayerStatic from "@/components/radio/radio-player-static";
import TVPlayerStatic from "@/components/tv/tv-player-pip";
import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider, Query } from "@apollo/client";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { HelmetProvider } from "react-helmet-async";
import { AppLogos, AppCateg, AppChannels, AppStations, AppRightPanel, AppBanner, AppRelevante, CategoriaHome } from "@/graphql/queries.graphql";

const helmetContext = {};

const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) graphQLErrors.map(({ message }) => {});
});

const client = new ApolloClient({
	uri: `${process.env.PROTOCOL}://${process.env.API_HOSTNAME}/graphql`,
	// uri: `http://${process.env.API_HOSTNAME}/graphql`,
	cache: new InMemoryCache({
		addTypename: false,
	}),
	link: ApolloLink.from([errorLink, new HttpLink({ uri: `${process.env.PROTOCOL}://${process.env.API_HOSTNAME}/graphql` })]),
	// link: ApolloLink.from([errorLink, new HttpLink({ uri: `http://${process.env.API_HOSTNAME}/graphql` })]),
});

window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;
export default class extends React.Component {
	constructor() {
		super();
		this.state = {
			// Framework7 Parameters
			id: "io.rcg.media", // App bundle ID
			name: "RCG webpage", // App name
			theme: "auto", // Automatic theme detection

			//NOTA: Si quitan push state para alguna prueba regresenlo porque luego no jala la url
			//ATTE: SrLechuga
			pushStateRoot: window.location.protocol + "//" + window.location.hostname + "",
			view: {
				pushState: true,
				pushStateRoot: `${process.env.PROTOCOL}://${process.env.APP_HOSTNAME}`,
				pushStateSeparator: "",
			},

			autoDarkTheme: true,

			// App routes
			routes: routes,

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
				get_LeftRadioActive: () => {
					return this.state.data.left_radio_active;
				},
				set_LeftRadioActive: (left_radio_active) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								left_radio_active: left_radio_active,
							},
						};
					});
				},
				get_TVPlay: () => {
					return this.state.data.tv_play;
				},
				set_TVPlay: (tv_play) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								tv_play: tv_play,
							},
						};
					});
				},
				get_TVURL: () => {
					return this.state.data.tv_url;
				},
				set_TVURL: (tv_url) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								tv_url: tv_url,
							},
						};
					});
				},
				get_TVActive: () => {
					return this.state.data.tv_active;
				},
				set_TVActive: (tv_active) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								tv_active: tv_active,
							},
						};
					});
				},
				get_TVName: () => {
					return this.state.data.tv_name;
				},
				set_TVName: (tv_name) => {
					this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								tv_name: tv_name,
							},
						};
					});
				},
				get_RelevantesNews: () => {
					return this.state.data.relevantesNews;
				},
				get_Banners: () => {
					return this.state.data.banners;
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
				left_radio_active: false,
				tv_play: false,
				tv_url: "",
				tv_active: false,
				tv_name: "",
				relevantesNews: [],
				banners: [],
			},
		};

		fetch(`${process.env.PROTOCOL}://${process.env.API_HOSTNAME}/categorias`)
			.then((response) => response.json())
			.then((json) => {
				let categorias = json.map((val, i) => {
					return {
						nombre: val.nombre,
						url: val.url
					};
				});
				this.setState((prevState) => {
						return {
							...prevState,
							data: {
								...prevState.data,
								categorias: categorias,
							},
						};
					});
			});

		fetch(`${process.env.PROTOCOL}://${process.env.API_HOSTNAME}/settings`)
			.then((response) => response.json())
			.then((json) => {
				this.setState((prevState) => {
					return {
						...prevState,
						data: {
							...prevState.data,
							logo: json.LogoRCG.formats.thumbnail.url,
							logoDarkMode: json.LogoRCGModoOscuro.formats.thumbnail.url,
						},
					};
				});
			});

		fetch(`${process.env.PROTOCOL}://${process.env.API_HOSTNAME}/canal-estacions`)
			.then((response) => response.json())
			.then((json) => {
				let res = json.map((val, i) => {
					return {
						nombre: val.nombre,
						url: val.url,
						logo: {
							url: val.logo.url,
							formats: val.logo.formats
						},
						Radio_TV: val.Radio_TV
					}
				});
				let radio = res.filter((val, i) => {val.Radio_TV == false});
				let tv = res.filter((val, i) => {val.Radio_TV == true});

				console.log(tv);
				console.log(radio);
				this.setState((prevState) => {
					return {
						...prevState,
						data: {
							...prevState.data,
							tvChannels: tv,
							radioStations: radio,
						},
					};
				});
			});


		// client
		// 	.query({
		// 		query: AppChannels,
		// 	})
		// 	.then((res) => {
		// 		this.setState((prevState) => {
		// 			return {
		// 				...prevState,
		// 				data: {
		// 					...prevState.data,
		// 					tvChannels: res.data.tvChannels,
		// 				},
		// 			};
		// 		});
		// 	});

		// client
		// 	.query({
		// 		query: AppStations,
		// 	})
		// 	.then((res) => {
		// 		this.setState((prevState) => {
		// 			return {
		// 				...prevState,
		// 				data: {
		// 					...prevState.data,
		// 					radioStations: res.data.radioStations,
		// 				},
		// 			};
		// 		});
		// 	});

		client
			.query({
				query: AppRightPanel,
			})
			.then((res) => {
				this.setState((prevState) => {
					return {
						...prevState,
						data: {
							...prevState.data,
							articulosRightPanel: res.data.rightPanel,
						},
					};
				});
			});

		client
			.query({
				query: AppBanner,
			})
			.then((res) => {
				this.setState((prevState) => {
					return {
						...prevState,
						data: {
							...prevState.data,
							banners: res.data.banner,
						},
					};
				});
			});

		client
			.query({
				query: AppRelevante,
			})
			.then((res) => {
				this.setState((prevState) => {
					return {
						...prevState,
						data: {
							...prevState.data,
							relevantesNews: res.data.relevante,
						},
					};
				});
			});
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
						{this.state.data.tv_active && (
							<TVPlayerStatic url={this.state.data.tv_url} name={this.state.data.tv_name} play={this.state.data.tv_play} />
						)}
						<LeftPanelMobile categorias={this.state.data.categorias} categoria={this.state.data.categoriaActual} />
						<View id="main-view" main className="safe-areas" url="/" />
					</App>
				</HelmetProvider>
			</ApolloProvider>
		);
	}

	componentDidMount() {
		this.$f7ready((f7) => {
			// Init cordova APIs (see cordova-app.js)
			const $ = f7.$;
			if (Device.cordova) {
				cordovaApp.init(f7);
			}

			OneSignal.push(() => {
				OneSignal.init({
					appId: "2b8f51fa-8098-49d8-a9a5-a36441f41907", //STEP 9
				});
			});

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
