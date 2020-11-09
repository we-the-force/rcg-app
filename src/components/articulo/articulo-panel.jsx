import React, { Component, Fragment } from "react";
import SwiperNews from "@/components/general/swiper_news.jsx";
import marked from "marked";
import JsxParser from "react-jsx-parser";
import TWIconx3 from "@/static/icons/TW_Icon_x4.png";
import FBIconx3 from "@/static/icons/FB_Icon_x4.png";
import AdsInArticle from "@/components/general/ads/ads_in_article";
import AdsRightArticle from "@/components/general/ads/ads_right_article";
import AdsFeed from "@/components/general/ads/ads_feed";
import {Helmet} from "react-helmet";
import { useMutation, gql } from "@apollo/client";
import { UpdateVisitas } from "@/graphql/queries.graphql";
import { onError } from "apollo-link-error";
import { Block, Card, CardHeader, Swiper, SwiperSlide, Link, f7 } from "framework7-react";

export function formatText(x) {
	const DB_url = f7.methods.get_URL_DB();
	let value = marked(x);
	let titleTag = /(<h([1-6])([^>]*)>)/gi;
	let parrafoTag = /(<p([^>]*)>)/gi;
	let codeTag = /(<\/?code([^>]*)>)/gi;
	let listTag = /(<li([^>]*)>)/gi;
	let listChildTag = /<(ol|ul)([^>]*)>/gi;
	let anchorTag = /(<a([^>]*)>)/gi;
	let quoteTag = /<blockquote([^>]*)>/gi;
	let imgTag = /(<p[^>]*>)([^<]*)<img\s*([^>]*)\s*src=["'`]([^"`']+)["`']\s*([^>]*)(\/?>)(<\/p>)/gi;
	value = value.replace(titleTag, '<h$2 className="child titulo">');
	value = value.replace(parrafoTag, '<p className="child parrafo">');
	value = value.replace(codeTag, "");
	value = value.replace(listChildTag, '<$1 className="child">');
	value = value.replace(quoteTag, '<blockquote $1 className="child">');
	value = value.replace(listTag, '<li $2 className="parrafo">');
	value = value.replace(anchorTag, '<a $2 className="link external" target="_blank">');
	value = value.replace(imgTag, `<div className="imagen_cont child">$2<img $3 src="${DB_url}$4" $5 /></div>`);
	value = value.replace(/\n/gi, ``);
	return value;
}
export default class ArticuloPanel extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		//document.addEventListener("fb_init", (e) => FB.XFBML.parse());
		FB.XFBML.parse();
	}
	render() {
		let { articulo, recomendados } = this.props;
		const DB_url = f7.methods.get_URL_DB();
		const url = f7.methods.get_URL();
		let urlThing = url + `/articulo/${articulo.url}/`;
		//let encodedUrlThing = encodeURIComponent(urlThing);
		let result = formatText(articulo.description);
		var firstLine = result.split('\n', 1)[0];
		

		return (
			<Block className="articulo_panel center_panel">
				<Helmet>
					<meta property="og:site_name" content="RCG" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content={urlThing} />
					<meta property="og:title" content={articulo.Titulo} />
					<meta property="og:description" content={firstLine} />
					<meta property="og:image" content={DB_url + articulo.cover.url} />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@RCGoficial" />
					<meta name="twitter:url" content={urlThing} />
					<meta name="twitter:title" content={articulo.Titulo} />
					<meta name="twitter:description" content={firstLine} />

					<meta property="twitter:image" content={DB_url + articulo.cover.url} />
					<meta property="twitter:title" content={articulo.Titulo} />
					<meta property="twitter:description" content={firstLine} />
				</Helmet>
				<Card className="articulo">
					<Block className="header_cont display-flex justify-content-space-between">
						<CardHeader>
							<a href={`/categoria/${articulo.categoria.nombre}`}>{articulo.categoria.nombre}</a>
						</CardHeader>
						<Block className="share display-flex align-items-center">
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
					<Block className="title_cont">
						<Block className="head display-flex justify-content-flex-start">
							<a className="autor" href={`/autor/${articulo.autor.url}`}>
								{" "}
								{articulo.autor.nombre}{" "}
							</a>{" "}
							- <p className="fecha"> {articulo.fecha} </p>
						</Block>
						<Block className="titulo">{articulo.Titulo}</Block>
						<Block className="img_cont display-flex flex-direction-column">
							<img src={DB_url + articulo.cover.url} alt="" />
							{/* <Block className="foot display-flex justify-content-flex-start align-items-center">
                            <p className="pieTitulo">Pie de foto</p> - <p className="pie">Pie de foto</p>
                        </Block> */}
						</Block>
					</Block>
					<Block className="content display-flex align-items-flex-start">
						<Block className="left_side">
							<JsxParser
								components={{ Block, AdsInArticle }}
								jsx={`
                                    <div className="articulo_cont markdown">
                                    ${result}
                                    <AdsInArticle className="child">
                                    </AdsInArticle>
                                    <AdsInArticle className="child">
                                    </AdsInArticle>
                                    </div>`}
							/>
							<Block className="tags">
								<p>Tags Relacionados:</p>
								{articulo.tags.map((tag, i) => {
									return (
										<a key={i} href={`/busqueda/${tag.nombre}`}>
											{tag.nombre}
										</a>
									);
								})}
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
							<AdsRightArticle></AdsRightArticle>
							<AdsRightArticle></AdsRightArticle>
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
						<AdsFeed />
					</Block>
					<SwiperNews articulos={recomendados} />
				</Card>
			</Block>
		);
	}
}
