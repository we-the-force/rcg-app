import React, { Component, Fragment } from "react";
import NewsCategoria from "@/components/cards_news/news_categoria.jsx";
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
					<Link href="/busqueda/Sabinas">Sabinas</Link>
					<Link href="/busqueda/Piedras">Piedras</Link>
				</Card>
			);
		}
		const { categoria, articulos } = this.props;
		console.log(articulos);
		let coahuila = categoria === "Coahuila" ? <Coahuila catego={categoria} /> : null;
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
					<CardHeader>
						<p className="title">Lo Más Relevante</p>
					</CardHeader>
					<Block id="grid1" className="grid-cont">
						<NewsRelevantes noticia={relevante[0]} id="item1" className="mob-large-sm2 tab-2large-sm2 desk-2large-large" />
					</Block>
					<Block id="grid2" className="grid-cont">
						<NewsRelevantes noticia={relevante[1]} id="item1" className="mob-small tab-medium desk-medium" />
						<NewsRelevantes noticia={relevante[2]} id="item2" className="mob-small tab-medium desk-medium" />
						<NewsRelevantes noticia={relevante[3]} id="item3" className="mob-large-small tab-medium desk-medium" />
					</Block>
					<Block id="grid3" className="grid-cont">
						<NewsRelevantes noticia={relevante[4]} id="item1" className="tab-large desk-large-small" />
						<NewsRelevantes noticia={relevante[5]} id="item2" className="tab-large desk-small" />
						<NewsRelevantes noticia={relevante[6]} id="item3" className="desk-small" />
						<NewsRelevantes noticia={relevante[7]} id="item4" className="desk-large" />
					</Block>
				</Card>

				{articulos.map((articulo, i) => {
					let ad = i % 2 === 1 ? <AdsFeed /> : null;
					return (
						<Fragment key={i}>
							{ad}
							<NewsCategoria className="" articulo={articulo} />
						</Fragment>
					);
				})}
			</Block>
		);
	}
}
