import React, { useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import RightPanel from "@/components/general/right_panel/right-panel";
import AutoresPanel from "@/components/autores/autores-panel.jsx";
import Footer from "@/components/general/footer";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import { useQuery } from "@apollo/client";
import AdsTop from "@/components/general/ads/ads_top";
import { AutoresPage } from "@/graphql/queries.graphql";
import { Page, Block, PageContent, Navbar, f7, f7ready } from "framework7-react";

export default function Autores(props) {
	const { loading, error, data } = useQuery(AutoresPage);

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	let centerPanel, numNoticias;
	let navbarLoading = false;

	if (loading) {
		centerPanel = <LoadingPanel />;
		navbarLoading = true;
	} else if (error) {
		centerPanel = <ErrorPanel />;
		navbarLoading = false;
	} else {
		numNoticias = data.autorArticulos.groupBy.autor.map((val) => {
			let elem = {
				autor: val.key,
				articulos: val.connection.aggregate.count,
			};
			return elem;
		});
		let { autores } = data;
		centerPanel = <AutoresPanel autores={autores} numNoticias={numNoticias} />;
		navbarLoading = false;
	}
	const rightPanel = f7.methods.getArticulosRightPanel();
	const leftPanelTV = f7.methods.getTV();
	const leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();
	let anuncios = f7.methods.get_Anuncios();

	return (
		<Page pageContent={false} name="autores">
			<PageContent>
				{/* ads */}
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
				{navbarLoading && <Navbar sliding noHairline noShadow></Navbar>}
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan">
							<AdsTop anuncio={anuncios.bannerHorizontalUno}/>
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
