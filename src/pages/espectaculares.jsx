import React, { useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import EspectacularPanel from "@/components/espectaculares/espectacular-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import { useQuery } from "@apollo/client";
import { EspectacularPage } from "@/graphql/queries.graphql";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import { Page, Block, PageContent, f7ready, f7 } from "framework7-react";

export default function Espectaculares(props) {
	const { loading, error, data } = useQuery(EspectacularPage);

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("espectaculares");
		});
	}, []);

	let centerPanel;

	if (loading) {
		centerPanel = <LoadingPanel />;
	} else if (error) {
		centerPanel = <ErrorPanel />;
	} else {
		const { info, clientes } = data;
		centerPanel = <EspectacularPanel logo={DB_url + logo} logoD={DB_url + logoDark} info={info} clientes={clientes} />;
	}

	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();
	let RadioPlay = f7.methods.get_RadioPlay();
	return (
		<Page pageContent={false} name="espectaculares">
			<PageContent>
				{/* Top Navbar */}
				<Nav
					espectaculares
					categorias={f7.methods.getCategorias()}
					tv_channels={leftPanelTV}
					radio_stations={leftPanelRadio}
					logoD={DB_url + logoDark}
					logo={DB_url + logo}
				/>
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radioPlay={RadioPlay}/>
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radioPlay={RadioPlay}/>
						</Block>
						<Block className="center_pan wo_right_pan">
							<AdsTop />
							{centerPanel}
						</Block>
					</Block>
				</Block>
				<Footer logoD={DB_url + logoDark} logo={DB_url + logo} />
			</PageContent>
		</Page>
	);
}
