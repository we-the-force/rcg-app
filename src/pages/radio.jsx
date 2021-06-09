import React, { useRef, useState, useEffect } from "react";
import Nav from "@/components/general/navbar/navbar";
import LeftPanel from "@/components/general/left_panel/left-panel";
import RightPanel from "@/components/general/right_panel/right-panel";
import LeftPanelTablet from "@/components/general/left_panel/left-panel-tablet";
import RightPanelTablet from "@/components/general/right_panel/right-panel-tablet";
import RadioPanel from "@/components/radio/radio-panel";
import Footer from "@/components/general/footer";
import AdsTop from "@/components/general/ads/ads_top";
import NotFoundPanel from "@/components/not-found-panel";
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


    const [isOut, setIsOut] = useState(false);

	const { loading, error, data } = useQuery(SchedulePageRadio, {
		variables: { station: name, date: startOfWeek, radio_tv: false },
	});

	useEffect(() => {
		f7ready((f7) => {
			f7.methods.handleCategoriaActual("");
		});
	}, []);

	const removePlayer = () => {
		let player = document.getElementsByClassName("radio-player")[0];
		player.remove();
		setIsOut(true);
	}

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
		console.log(programacion);
		centerPanel =
			radio.length > 0 ? (
				<RadioPanel logo={DB_url + logo} logoD={DB_url + logoDark} estacion={radio} estaciones={leftPanelRadio} programacion={programacion} table_id={name} isOut={isOut}/>
			) : (
				<ErrorPanel error="No pudimos encontrar la estación que buscas" />
			);
	}
	return (
		<Page onPageBeforeOut={removePlayer} pageContent={false} name="radio">
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
							<LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
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
