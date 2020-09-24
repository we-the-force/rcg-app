import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/dont-panic.jpg';
import {
    Block,
    Link,
    Icon,
    BlockFooter,
} from 'framework7-react';

// ano natsu no, kimi ga atama ni iru
export default function NewsRelevantes(props) {
    let { className, id } = props;
    const [modal, setModal] = useState('');
    return (
        <Block className={`NewsRel_Cont ${className} ${modal}`} id={id}>
            <img src={TestImage} alt="" />
            <Block className={`top-cont`}>
                <Link className="categoria upperscale">Locales</Link>
            </Block>
            <Block className={`add`} href="#">
                <Link iconMaterial="add" onClick={() => { setModal(modal == '' ? 'modal-in' : '') }}/>
                <Block className={`content`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat mauris et tellus faucibus bibendum. Ut egestas aliquam facilisis. Aliquam tristique libero ut sapien consequat imperdiet. Sed ut auctor dolor. In iaculis ligula eu nisl laoreet, quis suscipit urna gravida. Ut nunc elit, imperdiet nec lorem commodo, lacinia mattis libero. Pellentesque fringilla purus nunc, ut semper nibh placerat ut. In euismod fermentum eros. Mauris nec sodales dui.</p>
                </Block>
            </Block>
            <Block className={`bottom-cont`}>
                <Link className="title" href='#'>Aqui va el titulo mas grande para probar cuanto cabe aqui</Link>
                <BlockFooter>
                    <p className="fecha">10 septiembre</p>
                </BlockFooter>
            </Block>
        </Block>
    );
}
{/* <a href={`/articulo/${this.props.articulo.url}/`}>
    //Pa cuando le piques al click y te tenga que mandar a la pagina del articulo
        //href={`/articulo/${this.props.articulo.url}`} 
    <Block className="background">
        <img src={`http://${window.location.hostname}:1337${this.props.articulo.cover.url}`} alt="" />
    </Block>
    <Block className="content">
        <BlockHeader className="categoria uppercase">{this.props.articulo.categoria.nombre}</BlockHeader>
        <p className="text">{this.props.articulo.Titulo}</p>
        <BlockFooter>
            <p className="autor">{this.props.articulo.autor.nombre}</p> &nbsp;-&nbsp; <p className="fecha">{this.props.articulo.fecha}</p>
        </BlockFooter>
    </Block>
</a> */}