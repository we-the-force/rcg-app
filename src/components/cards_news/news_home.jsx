import React, { Fragment, useEffect, useState } from 'react';
import TestImage from '@/static/imgs/418464-PD8PXQ-214 1.png';
import {
    Block,
    Link,
    BlockFooter,
} from 'framework7-react';

// ano natsu no, kimi ga atama ni iru
export default function NewsHome(props) {
    const { className } = props;
    return (
        <Block className={`NewsHome_cont ${className}`}>
            <Block className="img_cont">
                <Link><img src={TestImage} alt="" /></Link>
            </Block>
            <Block className='img_foot'>
                <Link className="autor">Nombre Reporter@</Link>&nbsp;-&nbsp;
                <p className="fecha">10 septiembre</p>
            </Block>
            <Block className='content'>
                <Link className="title" href='#'>Aqui va el titulo mas grande para probar cuanto cabe aqui</Link>
                <p className="preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat mauris et tellus faucibus bibendum. Ut egestas aliquam facilisis. Aliquam tristique libero ut sapien consequat imperdiet. Sed ut auctor dolor. In iaculis ligula eu nisl laoreet, quis suscipit urna gravida. Ut nunc elit, imperdiet nec lorem commodo, lacinia mattis libero. Pellentesque fringilla purus nunc, ut semper nibh placerat ut. In euismod fermentum eros. Mauris nec sodales dui.</p>
            </Block>
        </Block>
    );
}