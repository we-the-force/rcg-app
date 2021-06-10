import React, { useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import AvisoPrivacidadPanel from "@/components/estaticas/aviso-privacidad-panel";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import { useQuery } from "@apollo/client";
import { AvisoPrivacidadPage } from "@/graphql/queries.graphql";
import { Page, Block, PageContent, f7ready, f7 } from "framework7-react";

export default function AvisoPrivacidad(props) {
	const { loading, error, data } = useQuery(AvisoPrivacidadPage);

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	let centerPanel;
	if (loading) {
		centerPanel = <LoadingPanel />;
	} else if (error) {
		centerPanel = <ErrorPanel />;
	} else {
		const { avisoPrivacidad } = data;
		centerPanel = <AvisoPrivacidadPanel logo={DB_url + logo} avisoPriv={avisoPrivacidad} />;
	}

	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();
	let radio_name = f7.methods.get_RadioName();
	let radio_url = f7.methods.get_RadioURL();
	let radio_img = f7.methods.get_RadioIMG();
	return (
		<Page pageContent={false} name="nosotros">
			<PageContent>
				{/* Top Navbar */}
				<Nav
					categorias={f7.methods.getCategorias()}
					tv_channels={leftPanelTV}
					radio_stations={leftPanelRadio}
					logoD={DB_url + logoDark}
					logo={DB_url + logo}
				/>
				{/* Page content */}
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radio_url={radio_url} radio_name={radio_name} radio_img={radio_img}/>
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
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
