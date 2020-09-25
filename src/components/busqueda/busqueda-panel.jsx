import React, { Component } from 'react';
import NewsBusqueda from '@/components/cards_news/news_busqueda.jsx';
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default function BusquedaPanel(props) {
    return (
        <Block className="busqueda_panel center_panel">
            <Card className="head">
                <CardHeader> Busqueda </CardHeader>
            </Card>
            <NewsBusqueda className=""/>
            <NewsBusqueda className=""/>
            <NewsBusqueda className=""/>
            <NewsBusqueda className=""/>
            <NewsBusqueda className=""/> 
            {/* { 
                this.props.articulos.map((articulo, i) => {
                    return (<NewsCard key={i} articulo={articulo}/>);
                }) 
                } */}
        </Block>
    );
}
