import React, { useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import CatalogoPanel from "@/components/catalogo/catalogo-panel";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import { useQuery } from "@apollo/client";
import { CatalogoPage } from "@/graphql/queries.graphql";

import { Page, Block, PageContent, f7ready, f7 } from "framework7-react";

export default function Catalogo(props) {
	const { loading, error, data } = useQuery(CatalogoPage);

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	let centerPanel = loading ? error ? <ErrorPanel /> : <LoadingPanel /> : <CatalogoPanel data={data} />;
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();
	let radio_name = f7.methods.get_RadioName();
	let radio_url = f7.methods.get_RadioURL();
	let radio_img = f7.methods.get_RadioIMG();
	return (
		<Page pageContent={false} name="catalogo_espectaculares">
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
				{/* Page content */}
				<Block className="main_cont display-flex flex-direction-column justify-content-center">
					<Block className="paneles">
						<Block className="left_pan">
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radio_url={radio_url} radio_name={radio_name} radio_img={radio_img}/>
							<LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
						</Block>
						<Block className="center_pan wo_right_pan">
							<AdsTop />
							{/* aqui va el panel central */}
							{centerPanel}
						</Block>
					</Block>
				</Block>
				<Footer logoD={DB_url + logoDark} logo={DB_url + logo} />
			</PageContent>
		</Page>
	);
}
