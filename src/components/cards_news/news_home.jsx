import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/grayback.jpg';
import moment from 'moment';
import {
    Block,
    Link,
    BlockFooter,
    f7
} from 'framework7-react';

// ano natsu no, kimi ga atama ni iru
export default function NewsHome(props) {
    moment.locale('es');
    const { className, articulo } = props;
    let DB_url = f7.methods.get_URL_DB();
    return (
        <Block className={`NewsHome_cont ${className}`}>
            <Block className="img_cont">
                <Link><img src={DB_url + articulo.cover.url} alt="" /></Link>
            </Block>
            <Block className='img_foot'>
                <Link className="autor">{articulo.autor.nombre}</Link>&nbsp;-&nbsp;
                <p className="fecha">{moment(articulo.fecha).format('D MMMM')}</p>
            </Block>
            <Block className='content'>
                <Link className="title" href='#'>{articulo.Titulo}</Link>
                <p className="preview">{articulo.description}</p>
            </Block>
        </Block>
    );
}