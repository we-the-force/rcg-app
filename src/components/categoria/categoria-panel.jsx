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
		function Coahuila(props) {
			const catCoahuila = props.catego;
			if (catCoahuila=="Coahuila") {
				return (
					<Card className="new_head coahuila-tags">


							<Link href="/busqueda/Saltillo">Saltillo</Link>
							<Link href="/busqueda/Torreon">Torreón</Link>
							<Link href="/busqueda/Monclova">Monclova</Link>
							<Link href="/busqueda/Sabinas">Sabinas</Link>
							<Link href="/busqueda/Piedras">Piedras</Link>

					</Card>

				);
			} else {
				return (null);

			}
			
			
		}
		const { categoria, articulos } = this.props;
		return (
			<Block className="categoria_panel center_panel">
				<Card className="new_head">
					<CardHeader>{categoria}</CardHeader>
					<div className="head_logo">
						<img src={back_head} alt="" />
					</div>
				</Card>
					
				<Coahuila catego={categoria} />
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
