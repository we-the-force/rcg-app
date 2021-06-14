import React, { useState, useEffect } from "react";
import TWIcon from "@/static/icons/TW_Icon.png";
import FBIcon from "@/static/icons/FB_Icon.png";
import YTIcon from "@/static/icons/YT_Icon.png";
import IGIcon from "@/static/icons/IG_Icon.png";
import tiktok from "@/static/imgs/tictoc.png";
import TVLight from "@/static/icons/tv_light.png";
import MIC from "@/static/icons/microphone.png";
import TVDark from "@/static/icons/tv_dark.png";
import MICDark from "@/static/icons/microphone_dark.png";
import { Card, CardHeader, List, ListItem, Block, Link, Icon } from "framework7-react";

export default function LeftPanel(props) {
	let { tv_channels, radio_stations } = props;
	const [playPause, setPlayPause] = useState(false);
	let leftPlayerRadio = f7.methods.get_LeftRadioActive();
	// let radio_name = f7.methods.get_RadioName();
	// let radio_url = f7.methods.get_RadioURL();
	// let radio_img = f7.methods.get_RadioIMG();
	// let radio_play = f7.methods.get_RadioPlay();

	// const [sourceURL, setSourceURL] = useState(radio_url);

	const handlePlayPause = () => {
		setPlayPause(!playPause);
		f7.methods.set_RadioPlay(!playPause);
	};

	useEffect(() => {
		setPlayPause(f7.methods.get_RadioPlay());
	}, []);

	// useEffect(() => {
	// 	if (f7.methods.get_RadioURL() == source_url) {
	// 		//aqui quitar el reproductor izquierdo

	// 		setPlayPause(f7.methods.get_RadioPlay());
	// 		setMuted(f7.methods.get_RadioMuted());
	// 		setVolume(f7.methods.get_RadioVolume());
	// 	}
	// }, []);

	return (
		<Block className="left_panel_cont">
			<Card className="left_pan_card envivo">
				<CardHeader className="justify-content-flex-start align-items-flex-end">
					<div className="icon display-flex justify-content-flex-start align-items-flex-end">
						<img className="light" src={TVLight} alt="" />
						<img className="dark" src={TVDark} alt="" />
					</div>
					en vivo
				</CardHeader>
				<List>
					{tv_channels.map((channel, key) => {
						return (
							<ListItem key={key} link={`/tv/${channel.url}`}>
								{channel.nombre}
							</ListItem>
						);
					})}
				</List>
			</Card>
			<Card className="left_pan_card radio_card">
				<CardHeader className="justify-content-flex-start align-items-flex-end">
					<div className="icon display-flex justify-content-center align-items-flex-end">
						<img className="light" src={MIC} alt="" />
						<img className="dark" src={MICDark} alt="" />
					</div>
					Radio
				</CardHeader>
				<List>
					{leftPlayerRadio && (
						<ListItem title={"aquivaelnombre"}>
							{/* <img slot="media" src={radio_img} width="44" /> */}
							<a onClick={handlePlayPause}>
								<Icon material={playPause ? "pause" : "play_arrow"} />
							</a>
						</ListItem>
					)}
					{radio_stations.map((station, key) => {
						return (
							<ListItem key={key} link={`/radio/${station.url}`}>
								{station.nombre}
							</ListItem>
						);
					})}
				</List>
			</Card>
			<Card className="left_pan_card pages">
				<List>
					<ListItem link="/espectaculares">Espectaculares</ListItem>
				</List>
			</Card>
			<Card className="left_pan_card social">
				<CardHeader>Síguenos en:</CardHeader>
				<Block className="social_cont display-flex justify-content-space-between align-items-center">
					<a href="https://www.facebook.com/rcgoficial" className="external" target="_blank">
						<img src={FBIcon} alt="" srcSet="" />
					</a>
					<a href="https://www.twitter.com/RCGoficial" className="external" target="_blank">
						<img src={TWIcon} alt="" srcSet="" />
					</a>
					<a href="https://www.youtube.com/user/RCGNOTICIAS" className="external" target="_blank">
						<img src={YTIcon} alt="" srcSet="" />
					</a>
					<a href="https://www.instagram.com/rcgoficial" className="external" target="_blank">
						<img src={IGIcon} alt="" srcSet="" />
					</a>
					<a href="https://vm.tiktok.com/ZMetcg3vD/" className="external" target="_blank">
						<img src={tiktok} alt="" srcSet="" />
					</a>
				</Block>
			</Card>
			<Card className="left_pan_card about">
				<List>
					<ListItem link="/nosotros">Nosotros</ListItem>
					<ListItem link="/autores">Autores</ListItem>
					<ListItem link="/contacto">Contacto</ListItem>
				</List>
			</Card>
			<Block
				className="theme"
				onClick={() => {
					let html = document.getElementsByTagName("html")[0];
					html.classList.toggle("theme-dark");
				}}
			>
				<div
					className="back"
					onClick={() => {
						let html = document.getElementsByTagName("html")[0];
						html.classList.toggle("theme-dark");
					}}
				></div>
				<a
					onClick={() => {
						let html = document.getElementsByTagName("html")[0];
						html.classList.toggle("theme-dark");
					}}
				>
					Modo Oscuro
					<Icon className="light" f7="sun_max"></Icon>
					<Icon className="dark" f7="sun_min_fill"></Icon>
				</a>
			</Block>
			<Block className="more display-flex flex-direction-column justify-content-flex-start align-items-flex-start">
				<div className="flex_wrap display-flex justify-content-flex-start align-items-center">
					<Link href="/derecho-replica">Derecho de réplica</Link>
					<Link href="/aviso-privacidad">Aviso de privacidad</Link>
					<Link href="/faq">Preguntas Frecuentes</Link>
					<Link className="external" target="_blank" href={"https://www.rcgmedia.mx/registro/"}>
						SOLICITUDES USO DE INFRAESTRUCTURA
					</Link>
					<Link className="external" target="_blank" href={false}>
						OFERTA PÚBLICA DE INFRAESTRUCTURA PASIVA
					</Link>
					<Link className="external" target="_blank" href={"https://rcgmedia.mx/oferta/"}>
						OPI 2017
					</Link>
					<Link className="external" target="_blank" href={"https://www.rcgmedia.mx/ofertapublica/"}>
						OPI 2018
					</Link>
					<Link className="external" target="_blank" href={"https://www.rcgmedia.mx/ofertapublica/login"}>
						SEG
					</Link>
				</div>
				<p>©2020 RCG</p>
			</Block>
		</Block>
	);
}
