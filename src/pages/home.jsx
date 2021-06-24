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
import { f7, f7ready } from "framework7-react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { HomePage, CategoriaHome } from "@/graphql/queries.graphql";
import { Page, Block, PageContent, Preloader } from "framework7-react";

export default function Home(props) {
	//query de la pagina
	const { loading, error, data } = useQuery(HomePage);
	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();
	const limitStatic = 2;

	const [callApi, setCallApi] = useState(false);
	const [inicial, setInicial] = useState(0);
	const [categorias, setCategorias] = useState([]);
	const [preloader, setPreloader] = useState(false);
	const [allowInfinite, setAllowInfinite] = useState(true);
	const [footer, setFooter] = useState(false);

	const [getCategorias] = useLazyQuery(CategoriaHome, {
		onCompleted: (data) => {
			let newInicial = inicial + limitStatic;
			if (data.categorias.length > 0) setAllowInfinite(true);
			if (data.categorias.length === 0) setFooter(true);
			setPreloader(false);
			setInicial(newInicial);
			setCategorias(categorias.concat(data.categorias));
		},
	});

	const loadMore = () => {
		if (!allowInfinite) return;
		setAllowInfinite(false);
		setPreloader(true);
		setCallApi(!callApi);
	};

	useEffect(() => {
		getCategorias({
			variables: {
				inicio: inicial,
				limite: limitStatic,
			},
		});
	}, [callApi]);

	//efecto para quitar etiqueta roja
	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
			setCallApi(!callApi);
		});
	}, []);

	let center, mast;
	if (loading) {
		center = <LoadingPanel />;
		mast = null;
	} else if (error) {
		center = <ErrorPanel />;
	} else {
		const { banner, anuncio, relevante } = data;
		center = <HomePanel noticias={categorias} relevante={relevante} />;
		mast = <Masthead logo={DB_url + logoDark} banner={banner} relevante={relevante} anuncio={anuncio} />;
	}
	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();
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
				{/* masthead */}
				<Nav
					home
					categorias={f7.methods.getCategorias()}
					tv_channels={leftPanelTV}
					radio_stations={leftPanelRadio}
					logoD={DB_url + logoDark}
					logo={DB_url + logo}
				/>
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
							<AdsTop />
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
				{footer &&  <Footer logoD={DB_url + logoDark} logo={DB_url + logo} />}
			</PageContent>
		</Page>
	);
}
