import React, { Component, Fragment } from "react";
import NewsRelevantes from "@/components/cards_news/news_relevantes.jsx";
import NewsHome from "@/components/cards_news/news_home.jsx";
import SwiperNews from "@/components/general/swiper_news.jsx";
import AdsFeed from "@/components/general/ads/ads_feed";
import { Block, Card, CardHeader } from "framework7-react";

export default class HomePanel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { noticias, relevante } = this.props;
		let noticias_filtradas = noticias.filter((val, i) => {
			return val.articulos.length > 0;
		});
		let numOfAd = 1;
		return (
			<Block className="home center_panel">
				<Card className="relevantes_home">
					<CardHeader>
						<p className="title">Lo Más Relevante</p>
					</CardHeader>
					<Block id="grid1" className="grid-cont">
						<NewsRelevantes noticia={relevante[0]} size={0} id="item1" className="mob-large-sm2 tab-2large-sm2 desk-2large-large" />
					</Block>
					<Block id="grid2" className="grid-cont">
						<NewsRelevantes noticia={relevante[1]} size={1} id="item1" className="mob-small tab-medium desk-medium" />
						<NewsRelevantes noticia={relevante[2]} size={1} id="item2" className="mob-small tab-medium desk-medium" />
						<NewsRelevantes noticia={relevante[3]} size={2} id="item3" className="mob-large-small tab-medium desk-medium" />
					</Block>
					<Block id="grid3" className="grid-cont">
						<NewsRelevantes noticia={relevante[4]} size={3} id="item1" className="tab-large desk-large-small" />
						<NewsRelevantes noticia={relevante[5]} size={3} id="item2" className="tab-large desk-small" />
						<NewsRelevantes noticia={relevante[6]} size={4} id="item3" className="desk-small" />
						<NewsRelevantes noticia={relevante[7]} size={3} id="item4" className="desk-large" />
					</Block>
					{/* sizes:
					**  -- mob   / tab / desk
					**	0: small / med / med
					**	1: xxs   / xxs / xxs 
					**	2: s     / xxs / xxs
					**	3: --    / xs  / xs
					**	4: --    / tumb  / tumb
					**
					*/}
				</Card>

				{noticias_filtradas.map((val, i) => {
					let { articulos } = val;
					let [articulosTop, articulosSwiper] = [[], []];
					switch (articulos.length) {
						case 1:
						case 2:
						case 3:
						case 5:
						case 7:
							articulosTop = articulos;
							break;
						case 4:
							articulosTop = articulos.slice(0, 1);
							articulosSwiper = articulos.slice(1);
							break;
						case 6:
							articulosTop = articulos.slice(0, 3);
							articulosSwiper = articulos.slice(3);
							break;
						case 8:
						case 9:
							articulosTop = articulos.slice(0, 5);
							articulosSwiper = articulos.slice(5);
							break;
						default:
							articulosTop = articulos.slice(0, 7);
							articulosSwiper = articulos.slice(7);
							break;
					}
					let ad = i % 2 === 1 ? <AdsFeed numOfAd={numOfAd} anuncios={anuncios}/> : null;
					if(ad != null) numOfAd++;
					return (
						<Fragment  key={i}>
							{ad}
							<Card className="categoria">
								<CardHeader>
									<p className="title">{val.nombre}</p>
									<a href={"/categoria/" + val.url} className="link-more">
										Mostrar más
									</a>
								</CardHeader>

								<Block className="grid-cont">
									{articulosTop.map((val, i) => {
										let first = i == 0 && articulosTop.length != 2 ? "first" : "";
										return <NewsHome className={"grid-item " + first} key={i} articulo={val} first={i == 0 ? true : false}/>;
									})}
								</Block>
								{articulosSwiper.length > 0 && <SwiperNews wot articulos={articulosSwiper} />}
							</Card>
						</Fragment>
					);
				})}
			</Block>
		);
	}
}
