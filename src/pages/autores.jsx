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
import { f7, f7ready } from "framework7-react";
import { Page, Block, PageContent } from "framework7-react";

export default function Autores(props) {
	const { loading, error, data } = useQuery(AutoresPage);

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	let centerPanel, numNoticias;

	if (loading) {
		centerPanel = <LoadingPanel />;
	} else if (error) {
		centerPanel = <ErrorPanel />;
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
	}
	const rightPanel = f7.methods.getArticulosRightPanel();
	const leftPanelTV = f7.methods.getTV();
	const leftPanelRadio = f7.methods.getRadio();

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();

	let radio_name = f7.methods.get_RadioName();
	let radio_url = f7.methods.get_RadioURL();
	let radio_img = f7.methods.get_RadioIMG();
	return (
		<Page pageContent={false} name="autores">
			<PageContent>
				{/* ads */}
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
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} radio_url={radio_url} radio_name={radio_name} radio_img={radio_img}/>
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
