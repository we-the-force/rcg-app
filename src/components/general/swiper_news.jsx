import React, { Component, Fragment } from 'react';
import NewSwiper from '@/components/cards_news/news_swiper.jsx';
import {
    Block,
    Swiper,
    SwiperSlide
} from 'framework7-react';

export default class SwiperNews extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        const { wot, articulos } = this.props;
        let display = wot ? 'display-none' : '';
        return (
            <Fragment>
                <Block className={`recomendados display-flex flex-direction-column align-content-stretch ${display}`}>
                    <Block className="head display-flex justify-content-space-between align-items-center">
                        <h1>Te Recomandamos</h1>
                    </Block>
                </Block>
                <Block className="swiper_cont">
                    <Swiper
                        init
                        navigation
                        scrollbar
                        params={{ slidesPerView: 3, spaceBetween: 10}}
                    >
                        {
                            articulos.map((val, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <NewSwiper articulo={val}/>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </Block>
            </Fragment >
        );
    }
}