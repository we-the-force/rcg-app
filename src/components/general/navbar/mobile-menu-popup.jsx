import React from "react";
import TVLight from "@/static/icons/tv_light.png";
import services from "@/static/icons/servicios.png";
import radio from "@/static/icons/microphone.png";
import twred from "@/static/icons/TW_red.png";
import contact from "@/static/icons/Contact.png";
import face from "@/static/icons/FB_Icon.png";
import tw from "@/static/icons/TW_Icon.png";
import tiktok from "@/static/imgs/tictoc.png";
import you from "@/static/icons/YT_Icon.png";
import insta from "@/static/icons/IG_Icon.png";
import telegramIcon from "@/static/icons/telegram.png";
import linkedinIcon from "@/static/icons/linkedin.png";
import { NavLeft, NavRight, Popup, Link, Page, Icon, BlockHeader, Block, Navbar, f7 } from "framework7-react";

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
	let { tv_channels, radio_stations } = props;
	return (
		<Popup className="menuPopup">
			<Navbar sliding noHairline noShadow className="navPopup">
				<NavLeft>
					<Link panelOpen="left" className="categorias" iconMaterial="menu" icon="menu" color="red" popupClose></Link>
				</NavLeft>
				<a className="logo" href="/">
					<img src={props.logoD} alt="" />
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
					<div className="box weather">
						{/* <Link
							href="https://www.meteored.mx/clima_Saltillo-America+Norte-Mexico-Coahuila-MMIO-1-22377.html"
							external
							target="_blank"
							className="linkTablet"
						>
							<img src="https://www.meteored.mx/wimages/foto6686a27bc4365fd9e8dd1949bb3452f3.png"/>
						</Link> */}
						<a
							class="weatherwidget-io"
							href="https://forecast7.com/es/25d44n100d97/saltillo/"
							data-label_1="SALTILLO"
							data-icons="Climacons Animated"
							data-days="3"
							data-theme="pure"
							data-suncolor="#ff0000"
						>
							SALTILLO
						</a>
					</div>
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
							<Link href="/espectaculares" popupClose>
								Espectaculares
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
							<Link href="https://www.facebook.com/media.rcg/" target="_blank" className="redes external">
								<img src={face} alt="" />
							</Link>
							<Link href="https://twitter.com/rcg_media" target="_blank" className="redes external">
								<img src={tw} alt="" />
							</Link>
							<Link href="https://www.youtube.com/user/RCGNOTICIAS" target="_blank" className="redes external">
								<img src={you} alt="" />
							</Link>
							<Link href="https://www.instagram.com/rcg.media/" target="_blank" className="redes external">
								<img src={insta} alt="" />
							</Link>
							<Link href="https://vm.tiktok.com/ZMdXfQNrf/" target="_blank" className="redes external">
								<img src={tiktok} alt="" />
							</Link>
							<Link href="https://t.me/RCGMedia" target="_blank" className="redes external">
								<img src={telegramIcon} alt="" />
							</Link>
							<Link href="https://mx.linkedin.com/company/rcg-media-mexico" target="_blank" className="redes external">
								<img src={linkedinIcon} alt="" />
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
							<Link href="/autores" popupClose>
								Autores
							</Link>
						</Block>
					</div>
					<div className="box theme">
						<Block className="theme">
							<a
								className="popup-close"
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
					</div>
					<div className="box foot">
						<Block className="display-flex flex-direction-column justify-content-center align-items-center">
							<div className="avisos display-flex">
								<Link href="/derecho-replica" popupClose>
									Derecho de réplica
								</Link>
								<Link href="/aviso-privacidad" popupClose>
									Aviso de privacidad
								</Link>
								<Link href="/faq" popupClose>
									Preguntas Frecuentes
								</Link>
							</div>
							<p>©2020 RCG</p>
						</Block>
					</div>
				</div>
			</Page>
		</Popup>
	);
}
