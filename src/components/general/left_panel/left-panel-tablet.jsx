import React, { useRef, useState, useEffect } from "react";
import TVLight from "@/static/icons/tv_light.png";
import services from "@/static/icons/servicios.png";
import radio from "@/static/icons/microphone.png";
import twred from "@/static/icons/TW_red.png";
import contact from "@/static/icons/Contact.png";
import TWIcon from "@/static/icons/TW_Icon.png";
import FBIcon from "@/static/icons/FB_Icon.png";
import YTIcon from "@/static/icons/YT_Icon.png";
import IGIcon from "@/static/icons/IG_Icon.png";
import { Card, CardHeader, Page, Popup, Block, Link, List, ListItem, f7 } from "framework7-react";

export default function LeftPanelTablet(props) {
	let { tv_channels, radio_stations } = props;
	const [input, setInput] = useState("");
	const [search_pop, setSearchPop] = useState([false, 0]);
	const [tv_pop, setTVPop] = useState([false, 0]);
	const [radio_pop, setRadioPop] = useState([false, 0]);
	const [more_pop, setMorePop] = useState([false, 0]);
	const [redes_pop, setRedesPop] = useState([false, 0]);
	const [nosotros_pop, setNosotrosPop] = useState([false, 0]);

	const changeBackdropOpen = (e, set) => {
		var x = document.getElementsByClassName("popup-backdrop");
		x[0].classList.add("invisible");
		set([true, e.target.getBoundingClientRect().top]);
	};

	const changeBackdropClose = (set, top) => {
		var x = document.getElementsByClassName("popup-backdrop");
		x[0].classList.remove("invisible");
		set([false, top]);
	};

	const articuloSearch = (e) => {
		if (e.key === "Enter") {
			if (e.target.value.trim() !== "") {
				f7.views.main.router.navigate(`/busqueda/${e.target.value}`);
			}
			setSearchPop([false, search_pop[1]]);
		}
	};

	return (
		<Block className="left_panel_tablet">
			<Link
				onClick={(e) => {
					changeBackdropOpen(e, setSearchPop);
				}}
				className="icon-link search"
				iconMaterial="search"
				icon="search"
			></Link>
			<Link
				onClick={(e) => {
					changeBackdropOpen(e, setTVPop);
				}}
				className="icon-link tv"
			>
				<img src={TVLight} alt="" />
			</Link>
			<Link
				onClick={(e) => {
					changeBackdropOpen(e, setRadioPop);
				}}
				className="icon-link radio_"
			>
				<img src={radio} alt="" />
			</Link>
			<Link
				onClick={(e) => {
					changeBackdropOpen(e, setMorePop);
				}}
				className="icon-link servicios"
			>
				<img src={services} alt="" />
			</Link>
			<Link
				onClick={(e) => {
					changeBackdropOpen(e, setRedesPop);
				}}
				className="icon-link redes"
			>
				<img src={twred} alt="" />
			</Link>
			<Link
				onClick={(e) => {
					changeBackdropOpen(e, setNosotrosPop);
				}}
				className="icon-link nosotros"
				iconMaterial="perm_contact_calendar"
				icon="nosotros"
			></Link>
			<Link
				onClick={(e) => {
					let html = document.getElementsByTagName("html")[0];
					html.classList.toggle("theme-dark");
				}}
				className="icon-link light theme"
				iconF7="sun_max"
				icon="theme"
			></Link>
			<Link
				onClick={(e) => {
					let html = document.getElementsByTagName("html")[0];
					html.classList.toggle("theme-dark");
				}}
				className="icon-link dark theme"
				iconF7="sun_min_fill"
				icon="theme"
			></Link>

			<div className="links">
				<Link href="/derecho-replica" className="text-link derecho-replica">
					Derecho de réplica
				</Link>
				<Link href="/aviso-privacidad" className="text-link aviso-privacidad">
					Aviso de privacidad
				</Link>
				<Link href="/faq" className="text-link">
					Preguntas Frecuentes
				</Link>
				<Link className="lowercase text-link external" target="_blank" href={"http://www.rcg.com.mx/registro/"}>
					SOLICITUDES USO DE INFRAESTRUCTURA
				</Link>
				<Link className="lowercase text-link external" target="_blank" href={false}>
					OFERTA PÚBLICA DE INFRAESTRUCTURA PASIVA
				</Link>
				<Link className="lowercase text-link external" target="_blank" href={"http://rcg.com.mx/oferta/"}>
					OPI 2017
				</Link>
				<Link className="lowercase text-link external" target="_blank" href={"http://www.rcg.com.mx/ofertapublica/"}>
					OPI 2018
				</Link>
				<Link className="lowercase text-link external" target="_blank" href={"http://www.rcg.com.mx/ofertapublica/login"}>
					SEG
				</Link>
				{/*<Link className="text-link OPI-2017">OPI 2017</Link>
                <Link className="text-link OPi-2018">OPI 2018</Link>
    <Link className="text-link SEG">SEG</Link>*/}
				<p>©2020 RCG</p>
			</div>

			<Popup
				className="search-popup left-popup-tablet"
				opened={search_pop[0]}
				style={{ top: search_pop[1] }}
				onPopupClose={(e) => {
					changeBackdropClose(setSearchPop, search_pop[1]);
				}}
			>
				<input placeholder="Buscar" onKeyPress={(e) => articuloSearch(e)} />
				<span className="material-icons icon-image-preview">search</span>
			</Popup>
			<Popup
				className="live-popup left-popup-tablet"
				opened={tv_pop[0]}
				style={{ top: tv_pop[1] }}
				onPopupClose={(e) => {
					changeBackdropClose(setTVPop, tv_pop[1]);
				}}
			>
				<List>
					{tv_channels.map((channel, key) => {
						return (
							<ListItem key={key} link={`/tv/${channel.url}`} popupClose>
								{channel.nombre}
							</ListItem>
						);
					})}
				</List>
			</Popup>
			<Popup
				className="radio-popup left-popup-tablet"
				opened={radio_pop[0]}
				style={{ top: radio_pop[1] }}
				onPopupClose={(e) => {
					changeBackdropClose(setRadioPop, radio_pop[1]);
				}}
			>
				<List>
					{radio_stations.map((station, key) => {
						return (
							<ListItem key={key} link={`/radio/${station.url}`} popupClose>
								{station.nombre}
							</ListItem>
						);
					})}
				</List>
			</Popup>
			<Popup
				className="more-popup left-popup-tablet"
				opened={more_pop[0]}
				style={{ top: more_pop[1] }}
				onPopupClose={(e) => {
					changeBackdropClose(setMorePop, more_pop[1]);
				}}
			>
				<List>
					{/* <ListItem popupClose link="#">Fundación RCG</ListItem> */}
					<ListItem popupClose link="/espectaculares">
						Espectaculares
					</ListItem>
					{/* <ListItem popupClose link="/calca">
						Registra tu calca
					</ListItem> */}
				</List>
			</Popup>
			<Popup
				className="redes-popup left-popup-tablet"
				opened={redes_pop[0]}
				style={{ top: redes_pop[1] }}
				onPopupClose={(e) => {
					changeBackdropClose(setRedesPop, redes_pop[1]);
				}}
			>
				<Block className="social_cont display-flex justify-content-space-between align-items-center">
					<a className="external" target="_blank" href="https://www.facebook.com/rcgoficial">
						<img src={FBIcon} alt="" srcSet="" />
					</a>
					<a className="external" target="_blank" href="https://www.twitter.com/RCGoficial">
						<img src={TWIcon} alt="" srcSet="" />
					</a>
					<a className="external" target="_blank" href="https://www.youtube.com/user/RCGNOTICIAS">
						<img src={YTIcon} alt="" srcSet="" />
					</a>
					<a className="external" target="_blank" href="https://www.instagram.com/rcgoficial">
						<img src={IGIcon} alt="" srcSet="" />
					</a>
				</Block>
			</Popup>
			<Popup
				className="nosotros-popup left-popup-tablet"
				opened={nosotros_pop[0]}
				style={{ top: nosotros_pop[1] }}
				onPopupClose={(e) => {
					changeBackdropClose(setNosotrosPop, nosotros_pop[1]);
				}}
			>
				<List>
					<ListItem popupClose link="/nosotros">
						Nosotros
					</ListItem>
					<ListItem popupClose link="/contacto">
						Contacto
					</ListItem>
				</List>
			</Popup>
		</Block>
	);
}
