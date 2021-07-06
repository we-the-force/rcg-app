import React, { Fragment } from "react";
import NewsBusqueda from "@/components/cards_news/news_busqueda.jsx";
import back_head from "@/static/imgs/card_back_6.png";
import AdsFeed from "@/components/general/ads/ads_feed";
import { Card, CardHeader, Block } from "framework7-react";

export default function BusquedaPanel(props) {
	const { articulos, title, first, anuncios } = props;

	let numOfAd = 1;

	let content = articulos.map((articulo, i) => {
		let ad = i % 3 === 2 ? <AdsFeed numOfAd={numOfAd} anuncios={anuncios}/> : null;
		if(ad != null) numOfAd++;
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
