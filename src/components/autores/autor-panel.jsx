import React, { Component, Fragment } from "react";
import NewsBusqueda from "@/components/cards_news/news_busqueda.jsx";
import NotFoundPanel from "@/components/not-found-panel";
import AdsFeedLeft from "@/components/general/ads/ads_feed_left";
import TWIcon from "@/static/icons/TW_Icon_x4.png";
import FBIcon from "@/static/icons/FB_Icon_x4.png";
import IGIcon from "@/static/icons/IG_Icon_x4.png";
import { Card, Block, f7 } from "framework7-react";

export default class AutorPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { autor, articulosNum, articulos } = this.props;
		let DB_url = f7.methods.get_URL_DB();
		let autorUrl = autor[0].img ? DB_url + autor[0].img.url : "/static/icons/person_x2.png";
		return (
			<Block className="autor center_panel">
				<Card className="autor_head">
					<Block className="image_cont">
						<img src={autorUrl} />
					</Block>
					<Block className="info_cont">
						<Block className="name_info">
							<p className="name">{autor[0].nombre}</p>
							<p className="noticias">{articulosNum} Noticias</p>
							<p className="descripcion">{autor[0].descripcion}</p>
						</Block>
						{/* <Block className="redes_cont">
							<a href={autor[0].facebook_link} className={`external${autor[0].facebook_link == null ? " gray" : ""}`} target="_blank">
								<img src={FBIcon} />
							</a>
							<a href={autor[0].twitter_link} className={`external${autor[0].twitter_link == null ? " gray" : ""}`} target="_blank">
								<img src={TWIcon} />
							</a>
							<a href={autor[0].instagram_link} className={`external${autor[0].instagram_link == null ? " gray" : ""}`} target="_blank">
								<img src={IGIcon} />
							</a>
						</Block> */}
					</Block>
				</Card>
				{articulos.map((articulo, key) => {
					let ad = key % 3 === 2 ? <AdsFeedLeft /> : null;
					return (
						<Fragment key={key}>
							{ad}
							<NewsBusqueda className="" articulo={articulo} />
						</Fragment>
					);
				})}
			</Block>
		);
	}
}
