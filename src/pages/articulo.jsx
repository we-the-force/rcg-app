import React, { useEffect, useState } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import Footer from "@/components/general/footer";
import ArticuloPanel from "@/components/articulo/articulo-panel";
import AdsTop from "@/components/general/ads/ads_top";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { ArticuloPage, Recomendados, RecomendadosCateg } from "@/graphql/queries.graphql";
import { UpdateArticulo } from "@/graphql/mutations.graphql";
import { Page, Block, PageContent, Navbar, f7, f7ready } from "framework7-react";

export default function Articulo(props) {
	const { url } = props;
	const [flag, setFlag] = useState(false);
	const [recomendados, setRecomendados] = useState([]);

	let rightPanelImg = f7.methods.getArticulosRightPanel();
	let rightPanelTxt = f7.methods.getArticulosRightPanelTxt();
	let rightPanel = rightPanelImg.concat(rightPanelTxt);
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();

	const [updateArticulo] = useMutation(UpdateArticulo, {
		onCompleted: () => {console.log("mutation complete");},
	});

	const [getRecomendados] = useLazyQuery(Recomendados, {
		onCompleted: (res) => {	
			setRecomendados(res.swiper);
		},
	});

	const [getRecomendadosCateg] = useLazyQuery(RecomendadosCateg, {
		onCompleted: (res) => {	
			setRecomendados(res.swiper);
		},
	});

	const { loading, error, data } = useQuery(ArticuloPage, {
		variables: { url },
		onCompleted: (res) => {
			setFlag(true);
			if (res.articulos.length > 0) {
				if (res.articulos[0].tags.length > 0) {
					getRecomendados({
						variables: {
							tag: res.articulos[0].tags[0].nombre,
						},
					});
				} else {
					getRecomendadosCateg({
						variables: {
							categ: res.articulos[0].categoria ? res.articulos[0].categoria.nombre : "",
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
	let navbarLoading = false;
	
	if (loading) {
		if (error) {
			centerPanel = <ErrorPanel />;
			navbarLoading = false;
		} else {
			centerPanel = <LoadingPanel />;
			navbarLoading = true;
		}
	} else {
		if (data.articulos.length > 0) {
			centerPanel = <ArticuloPanel articulo={data.articulos[0]} recomendados={recomendados} />;
			navbarLoading = false;
		} else {
			centerPanel = <ErrorPanel error="No pudimos encontrar el articulo que buscas" />;
			navbarLoading = false;
		}
	}

	return (
		<Page pageContent={false} name="articulo">
			<PageContent>
				{/* Top Navbar */}
				{!navbarLoading && (
					<Nav
						categorias={f7.methods.getCategorias()}
						tv_channels={leftPanelTV}
						radio_stations={leftPanelRadio}
						logoD={DB_url + logoDark}
						logo={DB_url + logo}
					/>
				)}
				{navbarLoading && (
					<Navbar sliding noHairline noShadow>
					</Navbar>
				)}
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
