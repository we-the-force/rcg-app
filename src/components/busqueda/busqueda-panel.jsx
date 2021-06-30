import React, { Fragment } from "react";
import NewsBusqueda from "@/components/cards_news/news_busqueda.jsx";
import back_head from "@/static/imgs/card_back_6.png";
import AdsFeedLeft from "@/components/general/ads/ads_feed_left";
import { Card, CardHeader, Block } from "framework7-react";

export default function BusquedaPanel(props) {
	const { articulos, title, first } = props;

	let content = articulos.map((articulo, i) => {
		let ad = i % 3 === 2 ? <AdsFeedLeft /> : null;
		return (
			<Fragment key={i}>
				{ad}
				<NewsBusqueda className="" articulo={articulo} />
			</Fragment>
		);
    });
    
    if(first === 3 && articulos.length === 0){
        content = <div className="not_found_panel">
            <Card className="not_found_card">
                <h2>La búsqueda no trajo resultados.</h2>
                <p>Intenta usando diferentes términos.</p>
            </Card>
        </div>
    }

	return (
		<Block className="busqueda_panel center_panel">
			<Card className="new_head">
				<CardHeader>Búsqueda: {title}</CardHeader>
				<div className="head_logo">
					<img src={back_head} alt="" />
				</div>
			</Card>
			{content}
		</Block>
	);
}
