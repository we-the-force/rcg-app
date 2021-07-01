import React, { Component, Fragment } from "react";
import NewsBusqueda from "@/components/cards_news/news_busqueda.jsx";
import AdsFeedLeft from "@/components/general/ads/ads_feed_left";
import { Card, Block, f7 } from "framework7-react";

export default class AutorPanel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { autor, articulosNum, articulos } = this.props;
		let DB_url = f7.methods.get_URL_DB();

		let autorUrl = "/static/icons/person_x2.png";

		if (autor[0].img) {
			if (autor[0].img.formats) {
				if (autor[0].img.formats.thumbnail) {
					autorUrl = DB_url + autor[0].img.formats.thumbnail.url;
				} else if (autor[0].img.formats.xxsmall) {
					autorUrl = DB_url + autor[0].img.formats.xxsmall.url;
				} else if (articulo.cover.formats.xsmall) {
					autorUrl = DB_url + autor[0].img.formats.xsmall.url;
				} else if (articulo.cover.formats.small) {
					autorUrl = DB_url + autor[0].img.formats.small.url;
				} else {
					autorUrl = DB_url + autor[0].img.url;
				}
			} else {
				autorUrl = DB_url + autor[0].img.url;
			}
		}
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
