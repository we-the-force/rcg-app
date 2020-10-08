import React, { Component, Fragment } from 'react';
import NewsBusqueda from '@/components/cards_news/news_busqueda.jsx';
import back_head from '@/static/imgs/card_back_6.png'
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default function BusquedaPanel(props) {
    const { articulos, title } = props;
    return (
        <Block className="busqueda_panel center_panel">
            <Card className="new_head">
                <CardHeader>{title}</CardHeader>
                <div className="head_logo">
                    <img src={back_head} alt="" />
                </div>
            </Card>
            {
                articulos.map((articulo, i) => {
                    return (
                        <NewsBusqueda key={i} className="" articulo={articulo} />
                    );
                })
            }
        </Block>
    );
}
