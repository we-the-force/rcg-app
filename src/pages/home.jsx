import React, { useEffect } from "react";
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
import { useQuery } from "@apollo/client";
import { HomePage } from "@/graphql/queries.graphql";
import { Page, Block, PageContent } from "framework7-react";

export default function Home(props) {
	//query de la pagina
	const { loading, error, data } = useQuery(HomePage);
	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();

	//efecto para quitar etiqueta roja
	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	let center, mast;
	if (loading) {
		center = <LoadingPanel />;
		mast = null;
	} else if (error) {
		center = <ErrorPanel />;
	} else {
		const { banner, categorias, relevante } = data;
		center = <HomePanel noticias={categorias} relevante={relevante} />;
		mast = <Masthead logo={DB_url + logoDark} banner={banner} relevante={relevante} />;
	}
	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();
	let RadioPlay = f7.methods.get_RadioPlay();
	return (
		<Page pageContent={false} name="home">
			<PageContent>
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
						<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radioPlay={RadioPlay}/>
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radioPlay={RadioPlay}/>
						</Block>
						<Block className="center_pan">
							<AdsTop />
							{center}
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
