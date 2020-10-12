import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/Image.png';
import Twitter from '@/static/icons/TW_Icon_x3.png';
import Face from '@/static/icons/FB_Icon_x3.png';
import moment from 'moment';
import {
    Block,
    Link,
    Card,
    f7
} from 'framework7-react';

// ano natsu no, kimi ga atama ni iru
export default function NewsCategoria(props) {
    moment.locale('es');
    const { className, articulo } = props;
    let DB_url = f7.methods.get_URL_DB();
    return (
        <Card className={`NewsCategoria_cont ${className}`}>
            <Block className="head">
                <Block className='info'>
                    <Link className="autor">{articulo.autor.nombre}</Link>&nbsp;-&nbsp;
                        <p className="fecha">{moment(articulo.fecha).format('D MMMM')}</p>
                </Block>
                <Block className="share display-flex align-items-center">
                    <p>Compartir:</p>
                    <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                        <img src={Face} alt="" />
                    </a>
                </Block>
            </Block>
            <Block className='content'>
                <Link className="title" href={`/articulo/${articulo.url}/`}>{articulo.Titulo}</Link>
                <div className="img_cont">
                    <a href={`/articulo/${articulo.url}/`}>
                        <img src={DB_url + articulo.cover.url} alt="" />
                    </a>
                </div>
                <p className="preview">{articulo.description}</p>
                <div className="more_cont">
                    <a className="more" href={`/articulo/${articulo.url}/`}>Ver más</a>
                </div>
            </Block>
        </Card>
    );
}