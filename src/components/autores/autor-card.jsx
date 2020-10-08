import React, { Component } from 'react';
import TWIcon from '@/static/icons/TW_Icon.png'
import FBIcon from '@/static/icons/FB_Icon.png'
import IGIcon from '@/static/icons/IG_Icon.png'
import photo from '@/static/imgs/scarlet.jpeg'
import { f7 } from 'framework7-react'
import {
    Card,
    Link,
    Block
} from 'framework7-react';


export default function AutorCard(props) {
    const { autor, numArticulos, className } = props;
    let DB_url = f7.methods.get_URL_DB();
    let imagen, id, nombre, articulos, face, twitt, insta, url;
    if(autor){
        imagen = DB_url + autor.img.url;
        id = autor.id;
        nombre = autor.nombre;
        articulos = numArticulos ? numArticulos.articulos : '0';
        face = autor.facebook_link;
        twitt = autor.twitter_link;
        insta = autor.instagram_link;
        url = autor.url;
    }else{
        imagen = photo;
        id = '1';
        nombre = '';
        articulos = '0';
        face = "https://www.facebook.com";
        twitt = "https://www.twitter.com";
        insta = "https://www.instagram.com";
        url = "";
    }
    return (
        <Card className={"autor_card " + className}>
            <Block className="back">
                <Link popupClose href={`/autor/${url}`} className="image_cont">
                    <img src={imagen} alt="" />
                </Link>
                <Link popupClose href={`/autor/${url}`} className="nombre">{nombre}</Link>
                <Link popupClose href={`/autor/${url}`} className="noticias"> {articulos} Noticias</Link>
                <p className="redes_label">Redes:</p>
                <Block className="redes_cont">
                    <a href={face} className="external" target="_blank"><img src={FBIcon} /></a>
                    <a href={twitt} className="external" target="_blank"><img src={TWIcon} /></a>
                    <a href={insta} className="external" target="_blank"><img src={IGIcon} /></a>
                </Block>
            </Block>
        </Card>
    )
}
