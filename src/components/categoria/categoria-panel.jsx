import React, { Component, Fragment } from "react";
import NewsCategoria from "@/components/cards_news/news_categoria.jsx";
import back_head from "@/static/imgs/card_back_6.png";
import AdsFeed from "@/components/general/ads/ads_feed";
import { Card, CardHeader, Block } from "framework7-react";

export default class NewsPanel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { categoria, articulos } = this.props;
		return (
			<Block className="categoria_panel center_panel">
				<Card className="new_head">
					<CardHeader>{categoria}</CardHeader>
					<div className="head_logo">
						<img src={back_head} alt="" />
					</div>
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
