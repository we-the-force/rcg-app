import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/Image.png';
import Twitter from '@/static/icons/TW_Icon_x3.png';
import Face from '@/static/icons/FB_Icon_x3.png';
import moment from 'moment';
import marked from "marked";
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
    let url = f7.methods.get_URL();
    const urlThing = url + `/articulo/${articulo.url}/`;
    const urlEncoded = encodeURIComponent(urlThing);

	let newDesc = marked(articulo.description);
	let titlesRegEx = /(<h([^>]+)>[^<]*<\/h([^>]+)>)/gi;
	let otherTags = /(<([^>]+)>)/gi;
	newDesc = newDesc
		.replace(titlesRegEx, "")
		.replace(otherTags, "")
		.replace(/\n/gi, " ")
		.match(/^.{300}/gi);
    return (
        <Card className={`NewsCategoria_cont ${className}`}>
            <Block className="head">
                <Block className='info'>
                    <Link className="autor" href={`/autor/${articulo.autor.url}`}>{articulo.autor.nombre}</Link>&nbsp;-&nbsp;
                        <p className="fecha">{moment(articulo.fecha).format('D MMMM')}</p>
                </Block>
                <Block className="share display-flex align-items-center">
                    <p>Compartir:</p>
                    <a target="_blank" className="faceIcon display-flex justify-content-center align-items-center external" href={`https://twitter.com/intent/tweet?url=${urlThing}&text=%0D`} data-size="large">
                        <img src={Twitter} alt="" />
                    </a>
                    <div className="faceIcon display-flex justify-content-center align-items-center external" data-href={urlThing} data-layout="button_count" data-size="small">
                        <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${urlThing}%26src=sdkpreparse`} className="fb-xfbml-parse-ignore external">
                            <img src={Face} alt="" />
                        </a>
                    </div>
                </Block>
            </Block>
            <Block className='content'>
                <Link className="title" href={`/articulo/${articulo.url}/`}>{articulo.Titulo}</Link>
                <div className="img_cont">
                    <a href={`/articulo/${articulo.url}/`}>
                        <img src={DB_url + articulo.cover.url} alt="" />
                    </a>
                </div>
                <p className="preview">{newDesc}</p>
                <div className="more_cont">
                    <a className="more" href={`/articulo/${articulo.url}/`}>Ver más</a>
                </div>
            </Block>
        </Card>
    );
}