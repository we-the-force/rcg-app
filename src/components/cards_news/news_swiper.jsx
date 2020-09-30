import React, { Component } from 'react';
import IMG from '@/static/imgs/grayback.jpg'
import moment from 'moment';
import {
    Block,
    BlockTitle,
    BlockFooter,
    Link,
    f7
} from 'framework7-react';

export default class NewsSwiper extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        moment.locale('es');
        let { articulo } = this.props;
        console.log(articulo);
        let DB_url = f7.methods.get_URL_DB();
        let skeleton = articulo ? '' : 'skeleton-text';
        return (
            <Link href='/url' className="news_swiper">
                <img src={articulo ? DB_url + articulo.cover.url : IMG} alt="" srcSet="" />
                <Block className="cont">
                    <BlockTitle className={skeleton}>{articulo.Titulo}</BlockTitle>
                    <BlockFooter className={skeleton}>{moment(articulo.fecha).format('D MMMM YYYY')}</BlockFooter>
                </Block>
            </Link>
        );
    }
}