import React, { Component } from "react";
import FaceFoot from "@/static/icons/footer_face.png";
import TwitFoot from "@/static/icons/footer_twit.png";
import YouFoot from "@/static/icons/footer_you.png";
import InstaFoot from "@/static/icons/footer_insta.png";
import FaceFoot_d from "@/static/icons/footer_face_d.png";
import TwitFoot_d from "@/static/icons/footer_twit_d.png";
import YouFoot_d from "@/static/icons/footer_you_d.png";
import InstaFoot_d from "@/static/icons/footer_insta_d.png";
import TWIcon from "@/static/icons/TW_Icon.png";
import FBIcon from "@/static/icons/FB_Icon.png";
import YTIcon from "@/static/icons/YT_Icon.png";
import IGIcon from "@/static/icons/IG_Icon.png";
import tiktok from "@/static/imgs/tictoc.png";
import telegramIcon from "@/static/icons/telegram.png";
import linkedinIcon from "@/static/icons/linkedin.png";
import { Block, Link } from "framework7-react";

export default class Footer extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<Block className="footer display-flex justify-content-space-between">
				<a href="/" className="left logo">
					<img className="black" src={this.props.logo} alt="" />
					<img className="white" src={this.props.logoD} alt="" />
				</a>
				<Block className="center links">
					<div className="cont display-flex">
						<Link href="/derecho-replica">Derecho de réplica</Link>
						<hr />
						<Link href="/aviso-privacidad">Aviso de privacidad</Link>
						<hr />
						<Link href="/faq">Preguntas Frecuentes</Link>
						<hr />
						<Link className="external" target="_blank" href={false}>
							SOLICITUDES USO DE INFRAESTRUCTURA
						</Link>
						<hr />
						<Link className="external" target="_blank" href={false}>
							OFERTA PÚBLICA DE INFRAESTRUCTURA PASIVA
						</Link>
						<hr />
						<Link className="external" target="_blank" href={false}>
							OPI 2017
						</Link>
						<hr />
						<Link className="external" target="_blank" href={false}>
							OPI 2018
						</Link>
						<hr />
						<Link className="external" target="_blank" href={false}>
							SEG
						</Link>
					</div>
					<div>
						<p>©2020 RCG</p>
					</div>
				</Block>
				<Block className="right display-flex justify-content-space-between align-items-center social-desk">
					<a href="https://www.facebook.com/rcgoficial" className="faceIcon display-flex justify-content-center align-items-center external">
						<img className="light" src={FaceFoot} alt="" />
						<img className="dark" src={FaceFoot_d} alt="" />
					</a>
					<a href="https://www.twitter.com/RCGoficial" className="twitIcon display-flex justify-content-center align-items-center external">
						<img className="light" src={TwitFoot} alt="" />
						<img className="dark" src={TwitFoot_d} alt="" />
					</a>
					<a href="https://www.youtube.com/user/RCGNOTICIAS" className="youIcon display-flex justify-content-center align-items-center external">
						<img className="light" src={YouFoot} alt="" />
						<img className="dark" src={YouFoot_d} alt="" />
					</a>
					<a href="https://www.instagram.com/rcgoficial" className="instaIcon display-flex justify-content-center align-items-center external">
						<img className="light" src={InstaFoot} alt="" />
						<img className="dark" src={InstaFoot_d} alt="" />
					</a>
				</Block>
				<Block className="display-flex justify-content-space-between align-items-center social-mobile">
					<p>Síguenos en:</p>
					<Block className="icons display-flex justify-content-space-between align-items-center ">
						<a href="https://www.facebook.com/rcgmedia.oficial" className="display-flex justify-content-center align-items-center">
							<img src={FBIcon} alt="" srcSet="" />
						</a>
						<a href="https://twitter.com/rcg_media" className="display-flex justify-content-center align-items-center">
							<img src={TWIcon} alt="" srcSet="" />
						</a>
						<a href="https://www.youtube.com/user/RCGNOTICIAS" className="display-flex justify-content-center align-items-center">
							<img src={YTIcon} alt="" srcSet="" />
						</a>
						<a href="https://www.instagram.com/rcgoficial" className="display-flex justify-content-center align-items-center">
							<img src={IGIcon} alt="" srcSet="" />
						</a>
						<a href="https://www.tiktok.com/@rcgoficial?lang=es" className="external" target="_blank">
							<img src={tiktok} alt="" srcSet="" />
						</a>
						<a href="https://t.me/RCGMedia" className="external" target="_blank">
							<img src={telegramIcon} alt="Telegram" srcSet="" />
						</a>
						<a href="https://mx.linkedin.com/company/rcg-media-mexico" className="external" target="_blank">
							<img src={linkedinIcon} alt="Linkedin" srcSet="" />
						</a>
					</Block>
				</Block>
			</Block>
		);
	}
}
