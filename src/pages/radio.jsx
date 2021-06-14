import React, { useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import RadioPanel from "@/components/radio/radio-panel";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import LoadingPanel from "@/components/loading/loading-panel";
import ErrorPanel from "@/components/error-panel";
import { f7, f7ready } from "framework7-react";
import { useQuery } from "@apollo/client";
import { SchedulePageRadio } from "@/graphql/queries.graphql";
import moment from "moment";
import { Page, Block, PageContent } from "framework7-react";

export default function Radio(props) {
	let { name } = props;
	let startOfWeek = moment().startOf("isoWeek").format("YYYY-MM-DD");

	const { loading, error, data } = useQuery(SchedulePageRadio, {
		variables: { station: name, date: startOfWeek, radio_tv: false },
	});

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	

	let rightPanel = f7.methods.getArticulosRightPanel();
	let leftPanelTV = f7.methods.getTV();
	let leftPanelRadio = f7.methods.getRadio();
	let centerPanel;

	const logo = f7.methods.getLogo();
	const logoDark = f7.methods.getLogoDarkMode();
	const DB_url = f7.methods.get_URL_DB();
	if (loading) {
		centerPanel = <LoadingPanel />;
	} else if (error) {
		centerPanel = <ErrorPanel />;
	} else {
		let { radio, programacion } = data;
		centerPanel =
			radio.length > 0 ? (
				<RadioPanel logo={DB_url + logo} logoD={DB_url + logoDark} estacion={radio} estaciones={leftPanelRadio} programacion={programacion} table_id={name}/>
			) : (
				<ErrorPanel error="No pudimos encontrar la estación que buscas" />
			);
	}

	const activeLeftPlayer = () => {
		//aqui poner el reproductor izquierdo si esta reproduciendo el radio
		if(f7.methods.get_RadioPlay()){
			f7.methods.set_LeftRadioActive(true);
			f7.methods.set_RadioName(radio[0].nombre);
			f7.methods.set_RadioIMG(radio[0].logo ? (DB_url + radio[0].logo.url) : "");
		}
	}

	return (
		<Page onPageBeforeOut={activeLeftPlayer} pageContent={false} name="radio">
			<PageContent>
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
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio}/>
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
