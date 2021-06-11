import React, { useEffect, useState } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import marked from "marked";

import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import Footer from "@/components/general/footer";
import ArticuloPanel from "@/components/articulo/articulo-panel";
import AdsTop from "@/components/general/ads/ads_top";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import { f7, f7ready } from "framework7-react";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { ArticuloPage, Recomendados, RecomendadosCateg } from "@/graphql/queries.graphql";
import { UpdateArticulo } from "@/graphql/mutations.graphql";
import { Page, Block, PageContent } from "framework7-react";

export function formatText(x) {
	const DB_url = f7.methods.get_URL_DB();
	let value = marked(x);
	let frameProp = /<iframe([^>]*)(frameborder="([^"])")([^>]*)>/gi;
	let fullScreenProp = /<iframe([^>]*)(allowfullscreen)([^>]*)>/gi;
	let strokeProp = /stroke-width/gi;
	let fillRuleProp = /fill-rule/gi;
	let dateTimeProp = /datetime/gi;
	let titleTag = /(<h([1-6])([^>]*)>)/gi;
	let brTag = /<br>/gi;
	let parrafoTag = /(<p ([^>]*)>)/gi;
	let listTag = /(<li([^>]*)>)/gi;
	let listChildTag = /<(ol|ul)([^>]*)>/gi;
	let xmlnsLink = /xmlns:xlink="([^"]*)"/gi;
	let xmlnsHref = /xlink:href="([^"]*)"/gi;
	let anchorTag = /(<a([^>]*)>)/gi;
	let imgTag = /(<p [^>]*>)([^<]*)<img\s*([^>]*)\s*src=["'`]([^"`']+)["`']\s*([^>]*)(\/?>)(<\/p>)/gi;
	let NotTags = /<(?!\/?(p|h([1-6])|li|ol|ul|a|iframe|blockquote|b|img|div|u|br|cite|del|i|strong|time|g|path|svg)(?=>|\s.*>))\/?.*?>/gi;
	value = value.replace(titleTag, '<h$2 className="child titulo">');
	value = value.replace(parrafoTag, '<p className="child parrafo">');
	value = value.replace(frameProp, '<iframe $1 frameBorder="$3" $4>');
	value = value.replace(strokeProp, "strokeWidth");
	value = value.replace(fillRuleProp, "fillRule");
	value = value.replace(dateTimeProp, "dateTime");
	value = value.replace(fullScreenProp, "<iframe $1 allowFullScreen $3>");
	value = value.replace(listChildTag, '<$1 className="child">');
	value = value.replace(brTag, "<br/>");
	value = value.replace(NotTags, "");
	value = value.replace(xmlnsLink, 'xmlnsXlink="$1"');
	value = value.replace(xmlnsHref, 'xmlnsHref="$1"');
	value = value.replace(listTag, '<li $2 className="parrafo">');
	value = value.replace(anchorTag, '<a $2 className="link external" target="_blank">');
	value = value.replace(imgTag, `<div className="imagen_cont child">$2<img $3 src="${DB_url}$4" $5 /></div>`);
	return value;
}

export default function Articulo(props) {
	const { url } = props;
	const [flag, setFlag] = useState(false);
	const [recomendados, setRecomendados] = useState([]);

	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();

	let article;

	const ogurl = f7.methods.get_URL();
	let urlThing;
	let result;
	let firstLine;
	let cover;
	let otherTags = /(<([^>]+)>)/gi;

	const [updateArticulo] = useMutation(UpdateArticulo, {
		onCompleted: (data) => {},
	});

	const [getRecomendados] = useLazyQuery(Recomendados, {
		onCompleted: (data) => {
			setRecomendados(data.swiper);
		},
	});

	const [getRecomendadosCateg] = useLazyQuery(RecomendadosCateg, {
		onCompleted: (data) => {
			setRecomendados(data.swiper);
		},
	});

	const { loading, error, data } = useQuery(ArticuloPage, {
		variables: { url },
		onCompleted: (data) => {
			setFlag(true);
			if (data.articulos.length > 0) {
				article = data.articulos[0];
				result = formatText(article.description);
				urlThing = ogurl + `/articulo/${article.url}/`;
				firstLine = result
					.replace(otherTags, "")
					.replace(/\n/gi, " ")
					.match(/^.{0,200}/gi);
				cover = article.cover ? DB_url + article.cover.url : IMG;
				if (data.articulos[0].tags.length > 0) {
					getRecomendados({
						variables: {
							tag: data.articulos[0].tags[0].nombre,
						},
					});
				} else {
					getRecomendadosCateg({
						variables: {
							categ: data.articulos[0].categoria ? data.articulos[0].categoria.nombre : "",
						},
					});
				}
			}
		},
	});

	const addVisitas = () => {
		let visitas = data.articulos[0].visitas + 1;
		let id = data.articulos[0].id;
		updateArticulo({ variables: { id: id, visitas: visitas } });
	};

	useEffect(() => {
		window.addEventListener("backbutton", () => console.log("ahoy"));
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	useEffect(() => {
		if (flag && data.articulos.length > 0) {
			let viewedArticles = window.sessionStorage.getItem("viewedArticles");
			if (viewedArticles != null) {
				let jsonArticles = JSON.parse(viewedArticles);
				if (!jsonArticles.includes(data.articulos[0].url)) {
					jsonArticles.push(data.articulos[0].url);
					window.sessionStorage.setItem("viewedArticles", JSON.stringify(jsonArticles));
					addVisitas();
				}
			} else {
				viewedArticles = [data.articulos[0].url];
				let jsonArticles = JSON.stringify(viewedArticles);
				window.sessionStorage.setItem("viewedArticles", jsonArticles);
				addVisitas();
			}
		}
	}, [flag]);

	let centerPanel;

	if (loading) {
		if (error) {
			centerPanel = <ErrorPanel />;
		} else {
			centerPanel = <LoadingPanel />;
		}
	} else {
		if (data.articulos.length > 0) {
			centerPanel = <ArticuloPanel articulo={data.articulos[0]} recomendados={recomendados} />;
		} else {
			centerPanel = <ErrorPanel error="No pudimos encontrar el articulo que buscas" />;
		}
	}
	return (
		<Page
			pageContent={false}
			name="articulo"
		>
			<PageContent>
				{/* Top Navbar */}
				<Nav
					categorias={f7.methods.getCategorias()}
					tv_channels={leftPanelTV}
					radio_stations={leftPanelRadio}
					logoD={DB_url + logoDark}
					logo={DB_url + logo}
				/>
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan">
							<AdsTop />
							{centerPanel}
						</Block>
						<Block className="right_pan">
							<RightPanel newsInfo={rightPanel} />
							<RightPanelTablet newsInfo={rightPanel} />
						</Block>
					</Block>
				</Block>
				<Footer logoD={DB_url + logoDark} logo={DB_url + logo} />
			</PageContent>
		</Page>
	);
}
