import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/Image.png';
import {
    Block,
    Link,
    Card,
} from 'framework7-react';

// ano natsu no, kimi ga atama ni iru
export default function NewsBusqueda(props) {
    const { className } = props;
    return (
        <Card className={`NewsBusqueda_cont ${className}`}>
            <Block className="background">
                <Block className="img_cont">
                    <p className="categoria upperscale">Locales</p>
                    <img src={TestImage} alt="" />
                </Block>
                <Block className='content'>
                    <Block className='info'>
                        <Link className="autor">Nombre Reporter@</Link>&nbsp;-&nbsp;
                        <p className="fecha">10 septiembre</p>
                    </Block>
                    <Link className="title" href='#'>Aqui va el titulo mas grande para probar cuanto cabe aqui</Link>
                    <p className="preview">Lorem ipsum dolor sit amet,. Ut nunc elit, imperdiet nec lorem commodo, lacinia mattis libero. Pellentesque fringilla purus nunc, ut semper nibh placerat ut. In euismod fermentum eros. Mauris nec sodales dui.Lorem ipsum dolor sit amet,. Ut nunc elit, imperdiet nec lorem commodo, lacinia mattis libero. Pellentesque fringilla purus nunc, ut semper nibh placerat ut. In euismod fermentum eros. Mauris nec sodales dui.</p>
                    <a className="more" href="/">Ver más</a>
                    {/* 
                    <a className="more-link">Ver más</a> 
                    */}
                </Block>
            </Block>
        </Card>
    );
}