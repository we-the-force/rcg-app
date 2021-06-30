import React, { Component } from "react";
import SwiperNews from "@/components/general/swiper_news.jsx";
import IMG from "@/static/imgs/grayback.jpg";
import moment from "moment";
import marked from "marked";
import TWIconx3 from "@/static/icons/TW_Icon_x4.png";
import FBIconx3 from "@/static/icons/FB_Icon_x4.png";
import { Block, Card, CardHeader, Link, f7 } from "framework7-react";
import parse from "html-react-parser";
import banner1 from "@/static/imgs/200x300_01.png";
import banner2 from "@/static/imgs/200x300_02.png";
import banner3 from "@/static/imgs/790x80_01.png";
import { InlineShareButtons } from "sharethis-reactjs";

export default class ArticuloPanel extends Component {
	constructor(props) {
		super(props);
	}
	componentDidUpdate() {
		FB.XFBML.parse();
		twttr.widgets.load();
		window.instgrm.Embeds.process();
	}
	render() {
		const dev = f7.device;
		let areMobile = dev.android || dev.ios || dev.ipad || dev.iphone || dev.ipod || dev.cordova;

		let { articulo, recomendados } = this.props;
		console.log(articulo);
		console.log(recomendados);
		const DB_url = f7.methods.get_URL_DB();
		const url = f7.methods.get_URL();
		let urlThing = url + `/articulo/${articulo.url}/`;
		let desc = `${articulo.Sumario}`;

		let cover = IMG;
		if (articulo.cover && !areMobile) {
			let newUrl = articulo.cover.url.split("/");
			cover = articulo.cover.width > 750 ? DB_url + newUrl[0] + "/" + newUrl[1] + "/medium_" + newUrl[2] : DB_url + articulo.cover.url;
		} else if (areMobile) {
			let newUrl = articulo.cover.url.split("/");
			cover = articulo.cover.width > 500 ? DB_url + newUrl[0] + "/" + newUrl[1] + "/small_" + newUrl[2] : DB_url + articulo.cover.url;
		}
		return (
			<Block className="articulo_panel center_panel helmet">
				<Card className="articulo">
					<Block className="header_cont display-flex justify-content-space-between">
						<CardHeader>
							<a href={articulo.categoria ? `/categoria/${articulo.categoria.nombre}` : ""}>
								{articulo.categoria ? articulo.categoria.nombre : ""}
							</a>
						</CardHeader>
						<Block className="share display-flex align-items-center">
							<InlineShareButtons
								config={{
									alignment: "right", // alignment of buttons (left, center, right)
									color: "social", // set the color of buttons (social, white)
									enabled: true, // show/hide buttons (true, false)
									font_size: 16, // font size for the buttons
									labels: "cta", // button labels (cta, counts, null)
									language: "es", // which language to use (see LANGUAGES)
									networks: [
										// which networks to include (see SHARING NETWORKS)
										"whatsapp",
										"facebook",
										"twitter",
									],
									padding: 12, // padding within buttons (INTEGER)
									radius: 4, // the corner radius on each button (INTEGER)
									show_total: true,
									size: 40, // the size of each button (INTEGER)

									// OPTIONAL PARAMETERS
									url: urlThing, // (defaults to current url)
									image: cover, // (defaults to og:image or twitter:image)
									description: desc, // (defaults to og:description or twitter:description)
									title: articulo.Titulo, // (defaults to og:title or twitter:title)
									// (only for email sharing)
									username: "RCGoficial", // (only for twitter sharing)
								}}
							/>
						</Block>
					</Block>
					<Block className="title_cont">
						<Block className="head display-flex justify-content-flex-start">
							<a className="autor" href={articulo.autor ? `/autor/${articulo.autor.url}` : "/autores"}>
								{articulo.autor ? articulo.autor.nombre : "Sin Autor"}{" "}
							</a>
							<p className="fecha"> {moment(articulo.created_at).format("D MMMM YYYY, h:mm a")} </p>
						</Block>
						<Block className="titulo">{articulo.Titulo}</Block>
						<Block className="sumario">{articulo.Sumario}</Block>

						<Block className="img_cont display-flex flex-direction-column">
							<img src={cover} alt="" />
						</Block>
						<Block>
							<p>{articulo.cover_creditos}</p>
						</Block>
					</Block>
					<Block className="content display-flex align-items-flex-start">
						<Block className="left_side">
							<div>{articulo.description}</div>
							<Block className="tags">
								{/* <p>Tags Relacionados:</p>
								{articulo.tags.map((tag, i) => {
									return (
										<a key={i} href={`/busqueda/${tag.nombre}`}>
											{tag.nombre}
										</a>
									);
								})} */}
							</Block>

							<Block className="comments">
								<div className="fb-comments" data-href={urlThing} data-numposts="" data-width=""></div>
							</Block>
							<Block className="share display-flex align-items-center justify-content-flex-end">
								<p>Compartir:</p>
								<a
									target="_blank"
									className="faceIcon display-flex justify-content-center align-items-center external"
									href={`https://twitter.com/intent/tweet?url=${urlThing}&text=%0D`}
									data-size="large"
								>
									<img src={TWIconx3} alt="" />
								</a>
								<div
									className="faceIcon display-flex justify-content-center align-items-center external"
									data-href={urlThing}
									data-layout="button_count"
									data-size="small"
								>
									<a
										target="_blank"
										href={`https://www.facebook.com/sharer/sharer.php?u=${urlThing}%26src=sdkpreparse`}
										className="fb-xfbml-parse-ignore external"
									>
										<img src={FBIconx3} alt="" />
									</a>
								</div>
							</Block>
						</Block>
						<Block className="right_side">
							<Link href="https://www.youtube.com/channel/UCcv1a47MEXfAbsKcxZAn9Ow" external target="_blank">
								<img src={banner1} alt="" />
							</Link>
							<img src={banner2} alt="" />
							<Link href="https://www.youtube.com/channel/UCcv1a47MEXfAbsKcxZAn9Ow" external target="_blank"></Link>
						</Block>
					</Block>
					<Block className="comments tab">
						<div className="fb-comments" data-href={urlThing} data-numposts="" data-width=""></div>
					</Block>
					<Block className="share tab display-flex align-items-center justify-content-flex-end">
						<p>Compartir:</p>
						<a
							target="_blank"
							className="faceIcon display-flex justify-content-center align-items-center external"
							href={`https://twitter.com/intent/tweet?url=${urlThing}&text=%0D`}
							data-size="large"
						>
							<img src={TWIconx3} alt="" />
						</a>
						<div
							className="faceIcon display-flex justify-content-center align-items-center external"
							data-href={urlThing}
							data-layout="button_count"
							data-size="small"
						>
							<a
								target="_blank"
								href={`https://www.facebook.com/sharer/sharer.php?u=${urlThing}%26src=sdkpreparse`}
								className="fb-xfbml-parse-ignore external"
							>
								<img src={FBIconx3} alt="" />
							</a>
						</div>
					</Block>
					<Block className="ads_cont">
						<img src={banner3} alt="" />
					</Block>
					<SwiperNews articulos={recomendados} />
				</Card>
			</Block>
		);
	}
}
