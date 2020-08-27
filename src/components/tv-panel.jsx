import TVScheduleTable from '../components/tv/tv-schedule-table';
import NotaRecomandada from './nota-recomendada.jsx';
import ReactPlayer from 'react-player';
import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    Block,
    BlockHeader,
    Swiper,
    SwiperSlide,
    Icon
} from 'framework7-react';

var placeHolderVideos = [
    'https://www.youtube.com/watch?v=lXMskKTw3Bc',
    'https://www.youtube.com/watch?v=4aneAWxzOUk',
    'https://www.youtube.com/watch?v=bpszIdtcWQc',
    'https://www.youtube.com/watch?v=iWj_USKu0mI',
    'https://www.youtube.com/watch?v=ZwL-L8v-f4g',
    'https://www.youtube.com/watch?v=b7zTQ0AHiYY',
    'https://www.youtube.com/watch?v=E4av4GX7mw8',
    'https://www.youtube.com/watch?v=BFoaeZ-ptHo',
    'https://www.youtube.com/watch?v=fmTwlDG7INM',
    'https://www.youtube.com/watch?v=TTSer9C5SrY']

const RandomLink = () => {
    return placeHolderVideos[Math.floor(Math.random() * placeHolderVideos.length)];
}

// const currentLink = RandomLink();

export default class TVPanel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Block className="tv_panel center_panel">
                <Card className="tv">
                    <Block className="header_cont display-flex justify-content-space-between">
                        <CardHeader>
                            RCG En Vivo
                            <Icon material="play_arrow"></Icon>
                        </CardHeader>
                        <Block className="share display-flex align-items-center">
                            <p>Compartir:</p>
                            <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                                <img src="../static/icons/TW_Icon_x3.png" alt="" />
                            </a>
                            <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                                <img src="../static/icons/FB_Icon_x3.png" alt="" />
                            </a>
                        </Block>
                    </Block>
                    <Block className="player-wrapper">
                        {/* Aqui va el stream */}
                        <ReactPlayer className="player"  url={RandomLink()} playing={true} loop={true}/>
                    </Block>
                    <Block className="info-programa">
                        <p className="titulo-programa">Nombre de Programa</p>
                        <p className="texto-programa"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore sed dolores quia esse veniam. Quos nobis temporibus ab, vero reiciendis animi, illum provident voluptate autem possimus nam quas a! </p>
                    </Block>
                    <Block className="tabla_programacion">
                        <BlockHeader>Programacion:</BlockHeader>
                        {/* La tablita de programacion */}
                        <TVScheduleTable />
                    </Block>
                    <Block className="mas_canales">
                        <BlockHeader>Programacion:</BlockHeader>
                        <Block>Canal 1</Block>
                        <Block>Canal 2</Block>
                    </Block>
                </Card>
                <Card className="recomendados-card">
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
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NotaRecomandada />
                            </SwiperSlide>
                        </Swiper>
                    </Block>
                </Card>
            </Block>
        );
    }
}