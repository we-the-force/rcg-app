import React, { Fragment, useRef, useState, useEffect } from "react";
import LogoBlanco from "@/static/imgs/Logo_blanco.png";
import TVLight from "@/static/icons/tv_light.png";
import services from "@/static/icons/servicios.png";
import radio from "@/static/icons/microphone.png";
import twred from "@/static/icons/TW_red.png";
import contact from "@/static/icons/Contact.png";
import face from "@/static/icons/FB_Icon.png";
import tw from "@/static/icons/TW_Icon.png";
import you from "@/static/icons/YT_Icon.png";
import insta from "@/static/icons/IG_Icon.png";
import { Searchbar, NavLeft, NavRight, Popup, Link, Page, View, Icon, BlockHeader, Block, Navbar, Panel, List, ListItem, f7 } from "framework7-react";

export default function mobileMenuPopup(props) {
	function articuloSearch(e) {
		if (e.key === "Enter") {
			//TODO: ToLowercase como no
			let searchValue = e.target.value.trim();
			if (searchValue !== "") {
				f7.popup.close();
				f7.views.main.router.navigate(`/busqueda/${encodeURI(e.target.value)}`);
			}
		}
	}
	// setNavPopup(false);
	let { tv_channels, radio_stations } = props;
	return (
		<Popup className="menuPopup">
			<Navbar sliding noHairline noShadow className="navPopup">
				<NavLeft>
					<Link className="categorias panel-open" data-panel=".panel-left-mobile" iconMaterial="menu" icon="menu" color="red" popupClose></Link>
				</NavLeft>
				<a className="logo" href="/">
					<img src={LogoBlanco} alt="" />
				</a>
				<NavRight>
					<Link className="menuIcon" iconMaterial="close" icon="close" color="red" popupClose></Link>
				</NavRight>
			</Navbar>
			<Page>
				<div className="grid">
					<Block className="search_cont">
						<input placeholder="Buscar" onKeyPress={(e) => articuloSearch(e)} />
						<span className="material-icons icon-image-preview">search</span>
					</Block>
					<div className="box live">
						<Block>
							<BlockHeader>
								<img src={TVLight} alt="" /> <p>TV</p>
							</BlockHeader>
							{tv_channels.map((channel, key) => {
								return (
									<Link key={key} href={`/tv/${channel.url}`} popupClose>
										{channel.nombre}
									</Link>
								);
							})}
						</Block>
					</div>
					<div className="box services">
						<Block>
							<BlockHeader>
								<img src={services} alt="" /> <p>Servicios</p>
							</BlockHeader>
							{/* <Link>Fundación RCG</Link> */}
							<Link href="/espectaculares" popupClose>
								Espectaculares
							</Link>
							<Link href="/calca" popupClose>
								Registra Tu Calca
							</Link>
						</Block>
					</div>
					<div className="box estaciones">
						<Block>
							<BlockHeader>
								<img src={radio} alt="" />
								<p>Radio</p>
							</BlockHeader>
							{radio_stations.map((station, key) => {
								return (
									<Link key={key} href={`/radio/${station.url}`} popupClose>
										{station.nombre}
									</Link>
								);
							})}
						</Block>
					</div>
					<div className="box follow">
						<Block>
							<BlockHeader>
								<img src={twred} alt="" />
								<p>Síguenos En:</p>
							</BlockHeader>
							<Link href="https://www.facebook.com/rcgoficial" target="_blank" className="redes external">
								<img src={face} alt="" />
							</Link>
							<Link href="https://www.twitter.com/RCGoficial" target="_blank" className="redes external">
								<img src={tw} alt="" />
							</Link>
							<Link href="https://www.youtube.com/user/RCGNOTICIAS" target="_blank" className="redes external">
								<img src={you} alt="" />
							</Link>
							<Link href="https://www.instagram.com/rcgoficial" target="_blank" className="redes external">
								<img src={insta} alt="" />
							</Link>
						</Block>
					</div>
					<div className="box RCG">
						<Block>
							<BlockHeader>
								<img src={contact} alt="" />
								<p>RCG</p>
							</BlockHeader>
							<Link href="/nosotros" popupClose>
								Nosotros
							</Link>
							<Link href="/contacto" popupClose>
								Contacto
							</Link>
						</Block>
					</div>
					<div className="box empty">
						<Block></Block>
					</div>
					<div className="box foot">
						<Block className="display-flex flex-direction-column justify-content-center align-items-center">
							<div className="avisos display-flex">
								<Link href="/derecho-replica" popupClose>
									Derecho de replica
								</Link>
								<Link href="/aviso-privacidad" popupClose>
									Aviso de privacidad
								</Link>
								<Link href="/faq" popupClose>
									Preguntas Frecuentes
								</Link>
							</div>
							{/* <div className="opis">
								<Link href={false}>OPI 2017</Link>
								<Link href={false}>OPI 2018</Link>
								<Link href={false}>SEG</Link>
							</div> */}
							<p>©2020 RCG</p>
						</Block>
					</div>
				</div>
			</Page>
		</Popup>
	);
}
