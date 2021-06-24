import React, { Component } from "react";
import IMG from "@/static/imgs/grayback.jpg";
import moment from "moment";
import { Block, BlockTitle, BlockFooter, Link, f7 } from "framework7-react";

export default class NewsSwiper extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		moment.locale("es");
		let { articulo } = this.props;
		let DB_url = f7.methods.get_URL_DB();
		let skeleton = articulo ? "" : "skeleton-text";

		let cover = IMG;
		if (articulo.cover) {
			if (articulo.width > 500) {
				let newUrl = articulo.cover.url.split("/");
				cover = newUrl[0] + "/" + newUrl[1] + "/small_" + newUrl[2];
			} else {
				cover = articulo.cover.url;
			}
		}

		// let cover = articulo.cover ? DB_url + articulo.cover.url : IMG;
		return (
			<Link href={`/articulo/${articulo.url}/`} className="news_swiper">
				<img src={articulo ? cover : IMG} alt="" srcSet="" />
				<Block className="cont">
					<BlockTitle className={skeleton}>{articulo.Titulo}</BlockTitle>
					<BlockFooter className={skeleton}>{moment(articulo.fecha).format("D MMMM YYYY")}</BlockFooter>
				</Block>
			</Link>
		);
	}
}
