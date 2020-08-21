import React, { Component } from 'react';
import NewsCard from './news-card';
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
            <Block className="categoria_panel">
                <Card className="head">
                    <CardHeader> {this.props.categoria} </CardHeader>
                </Card>
                {/* Lista de NewsCards */}
                { this.props.articulos.map((articulo, i) => {
                    console.log("Articulo");
                    return (<NewsCard key={i} articulo={articulo}/>);
                }) }
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