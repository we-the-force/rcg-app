import TVScheduleTable from './tv-schedule-table';
import NotaRecomandada from './nota-recomendada.jsx';
import ReactPlayer from 'react-player';
import React, { Component } from 'react';
import RecomendacionSwiper from '../components/recomendacionSwiper'
import Icon_TV from '@/static/icons/tv_dark.png';
import bk_img from '../static/imgs/Rcg.png';
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
                        <ReactPlayer className="player" url={RandomLink()} playing={false} loop={true} />
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
                        <BlockHeader>Más Canales</BlockHeader>
                        <Block className="canal">
                            <Block className="icon_tv display-flex justify-content-center align-items-center">
                                <img src={Icon_TV} alt="" />
                            </Block>
                            <a href="" className="canal_content display-flex justify-content-center align-items-center">
                                <img src={bk_img} alt="" srcSet="" />
                                <h1 className="title">
                                    RCG Diferido -2
                                </h1>
                            </a>
                        </Block>
                        <Block className="canal">
                            <Block className="icon_tv display-flex justify-content-center align-items-center">
                                <img src={Icon_TV} alt="" />
                            </Block>
                            <a href="" className="canal_content display-flex justify-content-center align-items-center">
                                <img src={bk_img} alt="" srcSet="" />
                                <h1 className="title">
                                    RCG tV 8.3
                                </h1>
                            </a>
                        </Block>
                    </Block>
                </Card>
                <Card className="recomendados-card">
                    <RecomendacionSwiper />
                </Card>
            </Block>
        );
    }
}