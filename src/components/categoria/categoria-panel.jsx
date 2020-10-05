import React, { Component } from 'react';
import NewsCategoria from '@/components/cards_news/news_categoria.jsx';
import back_head from '@/static/imgs/card_back_6.png'
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default class NewsPanel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="categoria_panel center_panel">
                <Card className="new_head">
                    <CardHeader>{this.props.categoria}</CardHeader>
                    <div className="head_logo">
                        <img src={back_head} alt="" />
                    </div>
                </Card>
                {/* Lista de NewsCards */}
                { this.props.articulos.map((articulo, i) => {
                    return (<NewsCategoria key={i} articulo={articulo} />);
                })}
                {/* <NewsCard />
                <Block className="ads bar"></Block>
                <NewsCard />
                <NewsCard />
                <Block className="ads bar"></Block>
                <NewsCard />
                <NewsCard />
                <Block className="ads bar"></Block>
                <NewsCard />
                <NewsCard />
                <Block className="ads bar"></Block> */}
                {/* te recomendamos */}
            </Block>
        );
    }
}