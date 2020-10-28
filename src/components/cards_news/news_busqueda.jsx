import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/Image.png';
import moment from 'moment';
import marked from "marked";
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

	let newDesc = marked(articulo.description);
	let titlesRegEx = /(<h([^>]+)>[^<]*<\/h([^>]+)>)/gi;
	let otherTags = /(<([^>]+)>)/gi;
	newDesc = newDesc
		.replace(titlesRegEx, "")
		.replace(otherTags, "")
		.replace(/\n/gi, " ")
		.match(/^.{300}/gi);
    return (
        <Card className={`NewsBusqueda_cont ${className}`}>
            <Block className="background">
                <Block className="img_cont">
                    <p className="categoria upperscale">{articulo.categoria.nombre}</p>
                    <a className="title" href={`/articulo/${articulo.url}/`}>
                        <img src={DB_url + articulo.cover.url} alt="" />
                    </a>
                </Block>
                <Block className='content'>
                    <Block className='info'>
                        <Link className="autor" href={`/autor/${articulo.autor.url}`}>{articulo.autor.nombre}</Link>&nbsp;-&nbsp;
                        <p className="fecha">{moment(articulo.fecha).format('D MMMM')}</p>
                    </Block>
                    <Link className="title" href={`/articulo/${articulo.url}/`}>{articulo.Titulo}</Link>
                    <p className="preview">{newDesc}</p>
                    <a className="more" href={'/articulo/' + articulo.url + '/'}>Ver más</a>
                </Block>
            </Block>
        </Card>
    );
}