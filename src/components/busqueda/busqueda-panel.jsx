import React, { Component } from 'react';
import NewsBusqueda from '@/components/cards_news/news_busqueda.jsx';
import back_head from '@/static/imgs/card_back_6.png'
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default function BusquedaPanel(props) {
    return (
        <Block className="busqueda_panel center_panel">
            <Card className="new_head">
                <CardHeader>Busqueda</CardHeader>
                <div className="head_logo">
                    <img src={back_head} alt="" />
                </div>
            </Card>
            <NewsBusqueda className="" />
            <NewsBusqueda className="" />
            <NewsBusqueda className="" />
            <NewsBusqueda className="" />
            <NewsBusqueda className="" />
            {/* { 
                this.props.articulos.map((articulo, i) => {
                    return (<NewsCard key={i} articulo={articulo}/>);
                }) 
                } */}
        </Block>
    );
}
