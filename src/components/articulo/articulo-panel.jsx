import React, { Component, Fragment } from "react";
import SwiperNews from "@/components/general/swiper_news.jsx";
import IMG from '@/static/imgs/grayback.jpg';
import marked from "marked";
import JsxParser from "react-jsx-parser";
import TWIconx3 from "@/static/icons/TW_Icon_x4.png";
import FBIconx3 from "@/static/icons/FB_Icon_x4.png";
import AdsInArticle from "@/components/general/ads/ads_in_article";
import AdsRightArticle from "@/components/general/ads/ads_right_article";
import AdsFeed from "@/components/general/ads/ads_feed";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useMutation, gql } from "@apollo/client";
import { UpdateVisitas } from "@/graphql/queries.graphql";
import { onError } from "apollo-link-error";
import { Block, Card, CardHeader, Swiper, SwiperSlide, Link, f7 } from "framework7-react";
import parse from 'html-react-parser';

export function formatText(x) {
	const DB_url = f7.methods.get_URL_DB();
	let value = marked(x);
	let frameProp = /<iframe([^>]*)(frameborder="([^"])")([^>]*)>/gi;
	let fullScreenProp = /<iframe([^>]*)(allowfullscreen)([^>]*)>/gi;
	let strokeProp = /stroke-width/gi;
	let fillRuleProp = /fill-rule/gi;
	let dateTimeProp = /datetime/gi;
	let titleTag = /(<h([1-6])([^>]*)>)/gi;
	let brTag = /<br>/gi;
	let parrafoTag = /(<p ([^>]*)>)/gi;
	let listTag = /(<li([^>]*)>)/gi;
	let listChildTag = /<(ol|ul)([^>]*)>/gi;
	let xmlnsLink = /xmlns:xlink="([^"]*)"/gi;
	let xmlnsHref = /xlink:href="([^"]*)"/gi;
	let anchorTag = /(<a([^>]*)>)/gi;
	let imgTag = /(<p [^>]*>)([^<]*)<img\s*([^>]*)\s*src=["'`]([^"`']+)["`']\s*([^>]*)(\/?>)(<\/p>)/gi;
	let NotTags = /<(?!\/?(p|h([1-6])|li|ol|ul|a|iframe|blockquote|b|img|div|u|br|cite|del|i|strong|time|g|path|svg)(?=>|\s.*>))\/?.*?>/gi;
	value = value.replace(titleTag, '<h$2 className="child titulo">');
	value = value.replace(parrafoTag, '<p className="child parrafo">');
	value = value.replace(frameProp, '<iframe $1 frameBorder="$3" $4>');
	value = value.replace(strokeProp, "strokeWidth");
	value = value.replace(fillRuleProp, "fillRule");
	value = value.replace(dateTimeProp, "dateTime");
	value = value.replace(fullScreenProp, "<iframe $1 allowFullScreen $3>");
	value = value.replace(listChildTag, '<$1 className="child">');
	value = value.replace(brTag, "<br/>");
	value = value.replace(NotTags, "");
	value = value.replace(xmlnsLink, 'xmlnsXlink="$1"');
	value = value.replace(xmlnsHref, 'xmlnsHref="$1"');
	value = value.replace(listTag, '<li $2 className="parrafo">');
	value = value.replace(anchorTag, '<a $2 className="link external" target="_blank">');
	value = value.replace(imgTag, `<div className="imagen_cont child">$2<img $3 src="${DB_url}$4" $5 /></div>`);
	return value;
}
export default class ArticuloPanel extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		//FB.XFBML.parse();
	}
	componentDidUpdate() {
		FB.XFBML.parse();
		twttr.widgets.load();
		window.instgrm.Embeds.process();
	}
	render() {
		let { articulo, recomendados } = this.props;
		const DB_url = f7.methods.get_URL_DB();
		const url = f7.methods.get_URL();
		let urlThing = url + `/articulo/${articulo.url}/`;
		let result = formatText(articulo.description);
		let otherTags = /(<([^>]+)>)/gi;
		let firstLine = result
			.replace(otherTags, "")
			.replace(/\n/gi, " ")
			.match(/^.{0,200}/gi);
		let cover = articulo.cover ? DB_url + articulo.cover.url : IMG;
		return (
			<HelmetProvider>
				<Block className="articulo_panel center_panel helmet">
					<Helmet>
						<meta property="og:site_name" content="RCG" />
						<meta property="og:type" content="website" />
						<meta property="og:url" content={urlThing} />
						<meta property="og:title" content={articulo.Titulo} />
						<meta property="og:description" content={firstLine} />
						<meta property="og:image" content={cover} />
						<meta property="og:image:width" content="1200" />
						<meta property="og:image:height" content="630" />

						<meta name="twitter:card" content="summary_large_image" />
						<meta name="twitter:creator" content="@RCGoficial" />
						<meta name="twitter:url" content={urlThing} />
						<meta name="twitter:title" content={articulo.Titulo} />
						<meta name="twitter:description" content={firstLine} />

						<meta property="twitter:image" content={cover} />
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
								<a className="autor" href={articulo.autor ? `/autor/${articulo.autor.url}` : '/autores'}>
									{" "}
									{articulo.autor ? articulo.autor.nombre : 'Sin Autor'}{" "}
								</a>{" "}
								- <p className="fecha"> {articulo.fecha} </p>
							</Block>
							<Block className="titulo">{articulo.Titulo}</Block>
							<Block className="sumario">{articulo.Sumario}</Block>
							<Block className="img_cont display-flex flex-direction-column">
								<img src={cover} alt="" />
							</Block>
						</Block>
						<Block className="content display-flex align-items-flex-start">
							<Block className="left_side">
								<div>
									{parse(articulo.description)}
								</div>
								{/* <JsxParser
									components={{ Block, AdsInArticle }}
									jsx={`
                                    <div className="articulo_cont markdown">
                                    ${parse(articulo.description)}
                                    <AdsInArticle classNamwe="child">
                                    </AdsInArticle>
                                    <AdsInArticle className="child">
                                    </AdsInArticle>
                                    </div>`}
								/> */}
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
			</HelmetProvider>
		);
	}
}
