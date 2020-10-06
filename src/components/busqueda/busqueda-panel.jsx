import React, { Component, Fragment } from 'react';
import NewsBusqueda from '@/components/cards_news/news_busqueda.jsx';
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default function BusquedaPanel(props) {
    const { articulos } = props;
    return (
        <Block className="busqueda_panel center_panel">
            <Card className="head">
                <CardHeader> Busqueda </CardHeader>
            </Card>
            {/* <NewsBusqueda className=""/>
            <NewsBusqueda className=""/>
            <NewsBusqueda className=""/>
            <NewsBusqueda className=""/>
            <NewsBusqueda className=""/>  */}
            {
                articulos.map((articulo, i) => {
                    return (
                        <Fragment key={i}>
                            <NewsBusqueda className="" articulo={articulo} />
                            <NewsBusqueda className="" articulo={articulo} />
                            <NewsBusqueda className="" articulo={articulo} />
                            <NewsBusqueda className="" articulo={articulo} />
                        </Fragment>
                    );
                })
            }
        </Block>
    );
}
