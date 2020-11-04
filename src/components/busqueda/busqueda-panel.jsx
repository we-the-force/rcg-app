import React, { Component, Fragment } from "react";
import NewsBusqueda from "@/components/cards_news/news_busqueda.jsx";
import NotFoundPanel from "@/components/not-found-panel";
import back_head from "@/static/imgs/card_back_6.png";
import { Card, CardHeader, Block } from "framework7-react";

export default function BusquedaPanel(props) {
	const { articulos, title, first } = props;

	let content = articulos.map((articulo, i) => {
		return <NewsBusqueda key={i} className="" articulo={articulo} />;
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
