import React, { Component } from 'react';
import IMG from '@/static/imgs/grayback.jpg';
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
        let DB_url = f7.methods.get_URL_DB();
        let skeleton = articulo ? '' : 'skeleton-text';
        let cover = articulo.cover ? DB_url + articulo.cover.url : IMG;
        return (
            <Link href={`/articulo/${articulo.url}/`} className="news_swiper">
                <img src={articulo ? cover : IMG} alt="" srcSet="" />
                <Block className="cont">
                    <BlockTitle className={skeleton}>{articulo.Titulo}</BlockTitle>
                    <BlockFooter className={skeleton}>{moment(articulo.fecha).format('D MMMM YYYY')}</BlockFooter>
                </Block>
            </Link>
        );
    }
}