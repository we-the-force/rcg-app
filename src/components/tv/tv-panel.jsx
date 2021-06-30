import ScheduleTable from "@/components/general/schedule-table";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";
import Icon_TV from "@/static/icons/tv_dark.png";
import moment from "moment";
import { Card, CardHeader, Block, BlockHeader, Icon, f7 } from "framework7-react";
import IMG from '@/static/imgs/grayback.jpg';

export default function TVPanel(props) {
	const { canal, canales, programacion, table_id } = props;
	const [playPause, setPlayPause] = useState(false);
	const [nombrePrograma, setNombrePrograma] = useState("");
	const [descPrograma, setDescPrograma] = useState("");
	const url = f7.methods.get_URL();
	const DB_url = f7.methods.get_URL_DB();

	let urlThing = url + `/tv/${canal[0].url}/`;
	let prog = programacion[0]
		? programacion[0].programacion
		: {
				domingo: [],
				jueves: [],
				lunes: [],
				martes: [],
				miercoles: [],
				sabado: [],
				viernes: [],
		};

	let TVPlay = f7.methods.get_TVPlay();

	useEffect(() => {
		if (f7.methods.get_TVURL() == canal[0].source_url) {
			f7.methods.set_TVActive(false);
			setPlayPause(TVPlay);
		}
	}, []);

	useEffect(() => {
		if (f7.methods.get_TVURL() == canal[0].source_url) {
			setPlayPause(TVPlay);
		}
	}, [TVPlay]);

	const handlePlayPause = () => {
		if (!playPause == true && canal[0].source_url != f7.methods.get_TVURL()) {
			f7.methods.set_TVActive(false);
			f7.methods.set_TVURL(canal[0].source_url);
			f7.methods.set_TVName(canal[0].nombre);
		}
		if (!playPause) {
			f7.methods.set_RadioPlay(false);
		}
		setPlayPause(!playPause);
		f7.methods.set_TVPlay(!playPause);
	};

	const handleMiniPlayer = () => {
		f7.views.main.router.navigate('/');
	};

	const setProgramaActual = (x, y) => {
		setNombrePrograma(x);
		setDescPrograma(y);
	};

	const getProgram = () => {
		let dia = moment()
			.format("dddd")
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");
		let x = "",
			y = "";
		if (programacion && programacion.length > 0) {
			let programaActual = programacion[0].programacion[dia].filter((el) => {
				if (moment().isBefore(moment(el.hora_final, "kk:mm:ss.sss")) && moment().isAfter(moment(el.hora_inicio, "kk:mm:ss.sss"))) {
					return true;
				} else {
					return false;
				}
			});
			if (programaActual.length > 0) {
				x = programaActual[0].programa.Nombre;
				y = programaActual[0].programa.Descripcion;
			}
		}
		setProgramaActual(x, y);
	};

	useEffect(() => {
		getProgram();
		const interval = setInterval(() => {
			getProgram();
		}, 150000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Block className="tv_panel center_panel">
			<Card className="tv">
				<Block className="header_cont display-flex justify-content-space-between">
					<CardHeader>
						<h1>{canal[0].nombre}</h1>
						<Icon material="play_arrow"></Icon>
					</CardHeader>
					<Block className="share display-flex align-items-center">
						<p>Compartir:</p>
						<a
							className="faceIcon display-flex justify-content-center align-items-center external"
							href={`https://twitter.com/intent/tweet?url=${urlThing}&text=%0D`}
							data-size="large"
						>
							<img src="../static/icons/TW_Icon_x3.png" alt="" />
						</a>
						<div
							className="faceIcon display-flex justify-content-center align-items-center external"
							data-href={urlThing}
							data-layout="button_count"
							data-size="small"
						>
							<a
								target="_blank"
								href={`https://www.facebook.com/sharer/sharer.php?u=${urlThing}%26src=sdkpreparse`}
								className="fb-xfbml-parse-ignore external"
							>
								<img src="../static/icons/FB_Icon_x3.png" alt="" />
							</a>
						</div>
					</Block>
				</Block>
				<Block className="middle-cont">
					<BlockHeader className="program-name">
						<h2>{nombrePrograma}</h2>
					</BlockHeader>
					<Block className="player-wrapper">
						<Block className="controls">
							<a className="anchorPlay" onClick={handlePlayPause}>
								<Icon className="play" material={playPause ? "pause" : "play_arrow"}></Icon>
							</a>
							{playPause && (
								<a className="anchorPip" onClick={handleMiniPlayer}>
									<Icon className="picture_in_picture_alt" material="picture_in_picture_alt"></Icon>
								</a>
							)}
						</Block>
						<ReactPlayer className="player-in-page" url={canal[0].source_url} playing={playPause} pip={true} stopOnUnmount={false} playsinline/>
					</Block>
					<p className="programa-desc">{descPrograma}</p>
				</Block>
				<Block className="tabla_programacion">
					<BlockHeader>Programación:</BlockHeader>
					<ScheduleTable prog={prog} table_id={table_id} />
				</Block>
				{canales.length > 1 && (
					<Block className="mas_canales">
						<BlockHeader>Más Canales</BlockHeader>
						{canales.map((channel, key) => {
							if (channel.url !== canal[0].url) {
								return (
									<Block key={key} className="canal">
										<Block className="icon_tv display-flex justify-content-center align-items-center">
											<img src={Icon_TV} alt="" />
										</Block>
										<a href={`/tv/${channel.url}`} className="canal_content">
											<div className="image_cont">
												<img src={channel.logo ? DB_url + channel.logo.url : IMG} alt="" srcSet="" />
											</div>
											<h2 className="title">{channel.nombre}</h2>
										</a>
									</Block>
								);
							}
							return "";
						})}
					</Block>
				)}
			</Card>
		</Block>
	);
}
