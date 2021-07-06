import React, { useEffect, useState } from "react";
import Nav from "@/components/general/navbar/navbar";
import Masthead from "@/components/home/masthead";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import HomePanel from "@/components/home/home-panel";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import { useLazyQuery } from "@apollo/client";
import { CategoriaHome } from "@/graphql/queries.graphql";
import { Page, Block, PageContent, Preloader, Navbar, f7, f7ready } from "framework7-react";

export default function Home(props) {
	//query de la pagina
	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();
	const bannersState = f7.methods.get_Banners();
	const relevantesState = f7.methods.get_RelevantesNews();
	const limitStatic = 1;

	const [inicial, setInicial] = useState(0);
	const [preloader, setPreloader] = useState(false);
	const [allowInfinite, setAllowInfinite] = useState(true);
	const [footer, setFooter] = useState(false);
	const [categorias, setCategorias] = useState([]);
	const [errorCat, setErrorCat] = useState(false);
	const [relevanteNews, setRelevanteNews] = useState(relevantesState);
	const [errorRel, setErrorRel] = useState(false);
	const [bannerNews, setBannerNews] = useState(bannersState);
	const [errorBan, setErrorBan] = useState(false);

	const [getCategorias] = useLazyQuery(CategoriaHome, {
		onCompleted: (data) => {
			let newInicial = inicial + limitStatic;
			if (data.categorias.length > 0) setAllowInfinite(true);
			if (data.categorias.length === 0) setFooter(true);
			setPreloader(false);
			setInicial(newInicial);
			setCategorias(categorias.concat(data.categorias));
		},
		onError: (data) => {
			setErrorCat(true);
		}
	});

	const loadMore = () => {
		if (!allowInfinite) return;
		setAllowInfinite(false);
		setPreloader(true);
		getCategorias({
			variables: {
				inicio: inicial,
				limite: limitStatic,
			},
		});
	};

	useEffect(() => {
		setBannerNews(bannersState);
	}, [bannersState]);

	useEffect(() => {
		setRelevanteNews(relevantesState);
	}, [relevantesState]);

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	let center, mast;
	if ((bannerNews.length == 0 || relevanteNews.length == 0)) {
		mast = <Masthead loading />;
	} else if((bannerNews.length > 0 || relevanteNews.length > 0)){
		mast = <Masthead logo={DB_url + logoDark} banner={bannerNews} relevante={relevanteNews} loading={false} />;
	}else {
		mast = "";
	}
	let anuncios = f7.methods.get_Anuncios();
	
	if((relevanteNews.length == 0)){
		center = <LoadingPanel />;
	}else if(relevanteNews.length > 0){
		center = <HomePanel noticias={categorias} relevante={relevanteNews} anuncios={anuncios}/>;
	}else if(errorCat || errorRel){
		center = <ErrorPanel />;
	}
	
	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();
	
	let navbarLoading = true;
	if (f7.methods.getCategorias().length > 0 && leftPanelRadio.length > 0 && leftPanelTV.length) navbarLoading = false;
	return (
		<Page pageContent={false} name="home">
			<PageContent
				infinite
				infiniteDistance={50}
				infinitePreloader={false}
				onInfinite={() => {
					loadMore();
				}}
			>
				{/* ads */}
				{!navbarLoading && (
					<Nav
					home
					categorias={f7.methods.getCategorias()}
					tv_channels={leftPanelTV}
					radio_stations={leftPanelRadio}
					logoD={DB_url + logoDark}
					logo={DB_url + logo}
					/>
					)}
				{navbarLoading && (
					<Navbar sliding noHairline noShadow> </Navbar>
					)}
				{/* masthead */}
				{mast}
				{/* Top Navbar */}

				{/* Page content */}
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan">
							<AdsTop anuncio={anuncios.bannerHorizontalUno}/>
							{center}
							{preloader && (
								<Block className="display-flex justify-content-center align-items-center">
									<Preloader color="red"></Preloader>
								</Block>
							)}
						</Block>
						<Block className="right_pan">
							<RightPanel newsInfo={rightPanel} />
							<RightPanelTablet newsInfo={rightPanel} />
						</Block>
					</Block>
				</Block>
				{footer && <Footer logoD={DB_url + logoDark} logo={DB_url + logo} />}
			</PageContent>
		</Page>
	);
}
