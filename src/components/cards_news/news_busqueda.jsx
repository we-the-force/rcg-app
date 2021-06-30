import React from 'react';
import moment from 'moment';
import IMG from '@/static/imgs/grayback.jpg';
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

	const dev = f7.device;
	let areMobile = dev.android || dev.ios || dev.iphone || dev.ipod || dev.cordova;

    let cover = IMG;

    if (articulo.cover) {
        if (articulo.cover.formats) {
            if(areMobile && articulo.cover.formats.thumbnail){
                cover = DB_url + articulo.cover.formats.thumbnail.url;
            } else if (articulo.cover.formats.xxsmall) {
                cover = DB_url + articulo.cover.formats.xxsmall.url;
            } else if (articulo.cover.formats.xsmall) {
                cover = DB_url + articulo.cover.formats.xsmall.url;
            } else if (articulo.cover.formats.small) {
                cover = DB_url + articulo.cover.formats.small.url;
            } else {
                cover = DB_url + articulo.cover.url;	
            }
        } else {
            cover = DB_url + articulo.cover.url;
        }
    }

    return (
        <Card className={`NewsBusqueda_cont ${className}`}>
            <Block className="background">
                <Block className="img_cont">
                    <p className="categoria upperscale">{articulo.categoria ? articulo.categoria.nombre : ""}</p>
                    <a className="title" href={`/articulo/${articulo.url}/`}>
                        <img src={cover} alt="" />
                    </a>
                </Block>
                <Block className='content'>
                    <Block className='info'>
                        <Link className="autor" href={articulo.autor ? `/autor/${articulo.autor.url}` : '/autores'}>{articulo.autor ? articulo.autor.nombre : 'Sin Autor'}</Link>&nbsp;-&nbsp;
                        <p className="fecha">{moment(articulo.fecha).format('D MMMM')}</p>
                    </Block>
                    <Link className="title" href={`/articulo/${articulo.url}/`}>{articulo.Titulo}</Link>
                    <a className="more" href={'/articulo/' + articulo.url + '/'}>Ver más</a>
                </Block>
            </Block>
        </Card>
    );
}