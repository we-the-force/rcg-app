import TVScheduleTable from '../components/tv/tv-schedule-table';
import NotaRecomandada from './nota-recomendada.jsx';
import ReactPlayer from 'react-player';
import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    Block,
    Swiper,
    SwiperSlide
} from 'framework7-react';

export default class TVPanel extends Component {
    constructor () {
        super();
    }
    render() {
        return (
            <Block className="tv_panel center_panel">
                <Card>
                    <Block className="justify-content-flex-start">
                        <p>RCG En Vivo</p>
                    </Block>
                    <Block>
                        {/* Aqui va el stream */}
                        <ReactPlayer url='https://www.youtube.com/watch?v=lXMskKTw3Bc' width="100%" playing="true" loop="true"/>
                    </Block>
                    <br></br>
                    <br></br>
                    <Block>
                        <b>Nombre de Programa</b>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore sed dolores quia esse veniam. Quos nobis temporibus ab, vero reiciendis animi, illum provident voluptate autem possimus nam quas a! </p>
                    </Block>
                    <br></br>
                    <br></br>
                    <Block>
                        <b className="justify-content-flex-start">Programacion:</b>
                    </Block>
                    <Block>
                        {/* La tablita de programacion ayayay */}
                        <TVScheduleTable/>
                    </Block>
                    <br></br>
                    <br></br>
                    <Block>
                        <b className="justify-content-flex-start">Mas Canales</b>
                    </Block>
                    <Block>
                        <p>Canal 1</p>
                        <p>Canal 2</p>
                    </Block>
                </Card>
                <Card>
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
                    {/* <Block>
                        <b>Te recomendamos</b> <a href="" className="">Mostrar Mas</a>
                    </Block>
                    <Block>
                        La lista de muchos cositos como no hijuesu
                    </Block> */}
                </Card>
            </Block>
        );
    }
}