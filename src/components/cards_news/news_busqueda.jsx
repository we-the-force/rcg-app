import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/Image.png';
import moment from 'moment';
import {
    Block,
    Link,
    Card,
    f7
} from 'framework7-react';

export default function NewsBusqueda(props) {
    moment.locale('es');
    const { className, articulo } = props;
    let DB_url = f7.methods.get_URL_DB();
    return (
        <Card className={`NewsBusqueda_cont ${className}`}>
            <Block className="background">
                <Block className="img_cont">
                    <p className="categoria upperscale">{articulo.categoria.nombre}</p>
                    <img src={DB_url + articulo.cover.url} alt="" />
                </Block>
                <Block className='content'>
                    <Block className='info'>
                        <Link className="autor">{articulo.autor.nombre}</Link>&nbsp;-&nbsp;
                        <p className="fecha">{moment(articulo.fecha).format('D MMMM')}</p>
                    </Block>
                    <Link className="title" href='#'>{articulo.Titulo}</Link>
                    <p className="preview">{articulo.description}</p>
                    <a className="more" href={'/articulo/'+articulo.url}>Ver más</a>
                </Block>
            </Block>
        </Card>
    );
}