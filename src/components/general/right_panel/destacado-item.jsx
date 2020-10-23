import React, { Component, Fragment } from 'react';
import marked from 'marked';
import moment from 'moment';
import IMG from '@/static/imgs/IMG_01.png'
import {
    Block,
    BlockHeader,
    BlockTitle,
    BlockFooter,
    f7
} from 'framework7-react';

export default function DestItem(props) {
    moment.locale('es');
    const { description, cover, autor, fecha, Titulo, tags, url } = props.articulo;
    let DB_url = f7.methods.get_URL_DB();
    let newDesc = marked(description);
    let titlesRegEx = /(<h([^>]+)>[^<]*<\/h([^>]+)>)/gi;
    let otherTags = /(<([^>]+)>)/gi;
    newDesc = newDesc.replace(titlesRegEx, '').replace(otherTags, '').replace(/\n/gi, ' ').match(/^.{300}/gi);
    return (
        <Block className={"dest-item"}>
            {props.image &&
                <a className="img_cont">
                    <img src={DB_url + cover.url} alt="" />
                </a>
            }
            <Block className="dest-cont">
                <BlockHeader>
                    <a className="autor" href={`/autor/${autor.url}`}>{autor.nombre}</a>&nbsp;-&nbsp;
                    <p className="fecha">{moment(fecha).format('D MMMM')}</p>
                </BlockHeader>
                <BlockTitle>
                    {Titulo}
                </BlockTitle>
                <p className="cont">
                    {newDesc}
                </p>
                <BlockFooter className="display-flex justify-content-space-between">
                    <p className="tag">Tags&nbsp;
                    {
                            tags.map((tag, i) => {
                                let isLastPos = !(i < (tags.length - 1));
                                if (isLastPos) {
                                    return (<a href="" className="etiqueta" key={i}>{tag.nombre}</a>);
                                }
                                else {
                                    return (<Fragment key={i}><a href={`/busqueda/${tag.nombre}`} className="etiqueta">{tag.nombre}</a>, </Fragment>);
                                }
                            })
                        }
                    </p>
                    <a className="more" href={`/articulo/${url}/`}>Mostrar más</a>
                </BlockFooter>
            </Block>
        </Block>
    );
}