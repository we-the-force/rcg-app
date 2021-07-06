import React, { Component, Fragment } from "react";
import NewsCategoria from "@/components/cards_news/news_categoria.jsx";
import NewsRelevantes from "@/components/cards_news/news_relevantes.jsx";
import back_head from "@/static/imgs/card_back_6.png";
import AdsFeed from "@/components/general/ads/ads_feed";
import { Card, CardHeader, Block, Link } from "framework7-react";

export default class NewsPanel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		function Coahuila() {
			return (
				<Card className="new_head coahuila-tags">
					<Link href="/busqueda/Saltillo">Saltillo</Link>
					<Link href="/busqueda/Torreon">Torreón</Link>
					<Link href="/busqueda/Monclova">Monclova</Link>
					<Link href="/busqueda/Acuna">Acuña</Link>
					<Link href="/busqueda/Piedras">Piedras Negras</Link>
				</Card>
			);
		}
		const { categoria, articulos, anuncios } = this.props;
		let coahuila = categoria === "Coahuila" ? <Coahuila catego={categoria} /> : null;
		let numOfAd = 1;
		return (
			<Block className="categoria_panel center_panel">
				<Card className="new_head">
					<CardHeader>{categoria}</CardHeader>
					<div className="head_logo">
						<img src={back_head} alt="" />
					</div>
				</Card>
				{coahuila}

				<Card className="relevantes_home">
					<Block id="grid1" className="grid-cont">
						<NewsRelevantes noticia={articulos[0]} size={0} id="item1" className="mob-large-sm2 tab-2large-sm2 desk-2large-large" />
					</Block>
					<Block id="grid2" className="grid-cont">
						<NewsRelevantes noticia={articulos[1]} size={1} id="item1" className="mob-small tab-medium desk-medium" />
						<NewsRelevantes noticia={articulos[2]} size={1} id="item2" className="mob-small tab-medium desk-medium" />
						<NewsRelevantes noticia={articulos[3]} size={2} id="item3" className="mob-large-small tab-medium desk-medium" />
					</Block>
					<Block id="grid3" className="grid-cont">
						<NewsRelevantes noticia={articulos[4]} size={3} id="item1" className="tab-large desk-large-small" />
						<NewsRelevantes noticia={articulos[5]} size={3} id="item2" className="tab-large desk-small" />
						<NewsRelevantes noticia={articulos[6]} size={4} id="item3" className="desk-small" />
						<NewsRelevantes noticia={articulos[7]} size={3} id="item4" className="desk-large" />
					</Block>
				</Card>
				{articulos.map((articulo, i) => {
					if(i > 7){
						let ad = i % 2 === 1 ? <AdsFeed numOfAd={numOfAd} anuncios={anuncios}/> : null;
						if(ad != null) numOfAd++;
						return (
							<Fragment key={i}>
								{ad}
								<NewsCategoria className="" articulo={articulo} />
							</Fragment>
						);
					}else{
						return null;
					}
				})}
			</Block>
		);
	}
}
