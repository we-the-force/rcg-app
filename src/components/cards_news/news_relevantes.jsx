import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/Image.png';
import moment from 'moment';
import { f7, f7ready } from 'framework7-react';
import {
    Block,
    Link,
    Icon,
    BlockFooter,
} from 'framework7-react';

// ano natsu no, kimi ga atama ni iru
export default function NewsRelevantes(props) {
    moment.locale('es');
    let { className, id, noticia } = props;
    const [modal, setModal] = useState('');
    let DB_url = f7.methods.get_URL_DB();
    let imagen, categoria, content, Titulo, fecha, url;
    if(noticia){
        imagen = DB_url + noticia.cover.url;
        categoria = noticia.categoria.nombre;
        content = noticia.description;
        Titulo = noticia.Titulo;
        fecha = moment(noticia.fecha);
        url = `/articulo/${noticia.url}/`;
    }else{
        imagen = TestImage;
        categoria = 'categ';
        content = 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat mauris et tellus faucibus bibendum. Ut egestas aliquam facilisis. Aliquam tristique libero ut sapien consequat imperdiet. Sed ut auctor dolor. In iaculis ligula eu nisl laoreet, quis suscipit urna gravida. Ut nunc elit, imperdiet nec lorem commodo, lacinia mattis libero. Pellentesque fringilla purus nunc, ut semper nibh placerat ut. In euismod fermentum eros. Mauris nec sodales dui.';
        Titulo = 'Titulo';
        fecha = moment(new Date());
        url = '#';
    }
    return (
        <Block className={`NewsRel_Cont ${className} ${modal}`} id={id}>
            <img src={imagen} alt="" />
            <Block className={`top-cont`}>
                <Link href={"/categoria/" + categoria} className="categoria upperscale">{categoria}</Link>
            </Block>
            <Block className={`add`} href="#">
                <Link iconMaterial="add" onClick={() => { setModal(modal == '' ? 'modal-in' : '') }}/>
                <Block className={`content`}>
                    <p>{content}</p>
                </Block>
            </Block>
            <Block className={`bottom-cont`}>
                <Link className="title" href={url}>{Titulo}</Link>
                <BlockFooter>
                    <p className="fecha">{fecha.format('D MMMM')}</p>
                </BlockFooter>
            </Block>
        </Block>
    );
}