import React, { Component } from "react";
import { Block, Link, f7 } from "framework7-react";
// import {Adsense} from '@ctrl/react-adsense';
import uane from "../../../static/imgs/uane.gif";

export default class adsTop extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { anuncio } = this.props;

		let DB_url = f7.methods.get_URL_DB();

		const dev = f7.device;
		let areMobile = dev.android || dev.ios || dev.iphone || dev.ipod || dev.cordova;

		let googleAds = true;
		let link = "";
		let alt = "";
		let image = "";

		if (anuncio) {
			googleAds = anuncio.googleAds;
			link = anuncio.link;
			alt = anuncio.alt;
			if (areMobile) {
				image = anuncio.mobileImg ? DB_url + anuncio.mobileImg.url : DB_url + anuncio.deskImg.url;
			} else {
				image = DB_url + anuncio.deskImg.url;
			}
		}

		return (
			<Block className="ads_cont">
				<Block className="left"></Block>
				<Block className="center">
					{/* {googleAds && <Adsense client="ca-pub-9419050468962974" slot="2504924643" />} */}
					{/* aqui va el google ads */}
					{/* */}
					{!googleAds && (
						<Block className="ads top">
							<Link href={link} target="_blank" external>
								<img
									src={image}
									alt={alt}
									style={{
										width: "100%",
										height: "auto",
									}}
								/>
							</Link>
						</Block>
					)}
				</Block>
				<Block className="right"></Block>
			</Block>
		);
	}
}
