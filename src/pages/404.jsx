import React, { useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import NotFoundPanel from "@/components/not-found-panel";
import { Page, PageContent, Block, f7, f7ready, Navbar } from "framework7-react";

export default function NotFound(props) {
	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();

	let navbarLoading = true;
	if(f7.methods.getCategorias().length > 0 && leftPanelRadio.length > 0 && leftPanelTV.length)
		navbarLoading = false;

	return (
		<Page pageContent={false} name="notFound">
			<PageContent>
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
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio}/>
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan">
							<AdsTop />
							<NotFoundPanel />
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
