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
        return (
            <Fragment>
                <Block className="recomendados display-flex flex-direction-column align-content-stretch	">
                    <Block className="head display-flex justify-content-space-between align-items-center">
                        <h1>Te Recomandamos</h1>
                        <a href="">Mostrar mas</a>
                    </Block>
                </Block>
                <Block className="swiper_cont">
                    <Swiper
                        init
                        navigation
                        scrollbar
                        params={{ slidesPerView: 3, spaceBetween: 10 }}
                    >
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewSwiper />
                        </SwiperSlide>
                    </Swiper>
                </Block>
            </Fragment>
        );
    }
}