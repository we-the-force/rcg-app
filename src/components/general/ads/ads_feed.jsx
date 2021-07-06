import React, { Component } from "react";
import { Block } from "framework7-react";
import {Adsense} from '@ctrl/react-adsense';

export default class adsFeed extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		let { anuncios, numOfAd } = this.props;
		let anuncio = false;

		let DB_url = f7.methods.get_URL_DB();

		const dev = f7.device;
		let areMobile = dev.android || dev.ios || dev.iphone || dev.ipod || dev.cordova;

		let googleAds = true;
		let link = "";
		let alt = "";
		let image = "";

		if (numOfAd % 5 == 0) {
			anuncio = anuncios.bannerHorizontalUno;
		} else if (numOfAd % 5 == 1) {
			anuncio = anuncios.bannerHorizontalDos;
		} else if (numOfAd % 5 == 2) {
			anuncio = anuncios.bannerHorizontalTres;
		} else if (numOfAd % 5 == 3) {
			anuncio = anuncios.bannerHorizontalCuatro;
		}

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
			<Block className="ads feed">
				<Block className="center">
					{googleAds && <Adsense client="ca-pub-9419050468962974" slot="2504924643" />}
					{!googleAds && (
						<Block className="ads top">
							<Link href={link} target="_blank" external>
								<img
									src={image}
									alt={alt}
									style={{
										width: "100%",
										height: "fit-content",
										minHeight: "80px",
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
