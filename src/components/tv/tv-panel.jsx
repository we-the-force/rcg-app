import ScheduleTable from '@/components/general/schedule-table';
import ReactPlayer from 'react-player';
import React, { Component } from 'react';
import Icon_TV from '@/static/icons/tv_dark.png';
import bk_img from '@/static/imgs/Rcg.png';
import SwiperNews from '@/components/general/swiper_news.jsx';
import moment from 'moment';
import {
    Card,
    CardHeader,
    Block,
    BlockHeader,
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
    constructor(props) {
        super(props);
        // console.log("TV-Panel props: ", props);
        if (props.prog.length > 0)
        {
            this.programacion = JSON.parse(JSON.stringify(props.prog[0]));

            // console.log('this.programacion', this.programacion.programacion.martes);
            this.programacion.programacion.domingo.sort(this.sortFunction);
            this.programacion.programacion.lunes.sort(this.sortFunction);
            this.programacion.programacion.martes.sort(this.sortFunction);
            this.programacion.programacion.miercoles.sort(this.sortFunction);
            this.programacion.programacion.jueves.sort(this.sortFunction);
            this.programacion.programacion.viernes.sort(this.sortFunction);
            this.programacion.programacion.sabado.sort(this.sortFunction);
            // console.log('this.programacion', this.programacion.programacion.martes);
        }
        else
        {
            // console.log('prog was empty');
            this.programacion = {
                programacion: {
                    domingo: [],
                    lunes: [],
                    martes: [],
                    miercoles: [],
                    jueves: [],
                    viernes: [],
                    sabado: []
                }
            };
        }
        if (props.channel != undefined)
        {
            this.moreChannels = JSON.parse(JSON.stringify(props.channel_list));
            for (let i = 0; i < this.moreChannels.length; i++)
            {
                if (this.moreChannels[i].url === props.channel.url)
                {
                    this.moreChannels.splice(i, 1);
                    break;
                }
            }
        }
        else
        {
            this.moreChannels = [];
        }
        console.log("Props:\r\n", props);
        this.urlThing = `http://${window.location.hostname}/tv/${props.channel.url}/`;
        this.encodedUrlThing = encodeURIComponent(this.urlThing);
    }
    sortFunction(a, b){
        let isBefore = moment(a.hora_inicio, 'HH:mm:ss.sss').isBefore(moment(b.hora_inicio, 'HH:mm:ss.sss'));
        return (isBefore ? -1 : 1);
    }
    render() {
        return (
            <Block className="tv_panel center_panel">
                <Card className="tv">
                    <Block className="header_cont display-flex justify-content-space-between">
                        <CardHeader>
                            {this.props.channel.nombre}
                            <Icon material="play_arrow"></Icon>
                        </CardHeader>
                        <Block className="share display-flex align-items-center">
                            <p>Compartir:</p>
                            {/* <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                                <img src="../static/icons/TW_Icon_x3.png" alt="" />
                            </a>
                            <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                                <img src="../static/icons/FB_Icon_x3.png" alt="" />
                            </a> */}
                            <a className="faceIcon display-flex justify-content-center align-items-center external" href={`https://twitter.com/intent/tweet?url=${this.urlThing}&text=La wea tweet y asi%0D%0A`} data-size="large">
                                <img src="../static/icons/TW_Icon_x3.png" alt="" />
                            </a>
                            <div className="faceIcon display-flex justify-content-center align-items-center external" data-href={this.urlThing} data-layout="button_count" data-size="small">
                                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${this.encodedUrlThing}%26src=sdkpreparse`} className="fb-xfbml-parse-ignore external">
                                <img src="../static/icons/FB_Icon_x3.png" alt="" />
                                </a>
                            </div>
                        </Block>
                    </Block>
                    <Block className="player-wrapper">
                        {/* Aqui va el stream */}
                        <ReactPlayer className="player" url={this.props.channel.source_url} playing={false} />
                    </Block>
                    {/* <Block className="info-programa">
                        <p className="titulo-programa">Nombre de Programa</p>
                        <p className="texto-programa"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore sed dolores quia esse veniam. Quos nobis temporibus ab, vero reiciendis animi, illum provident voluptate autem possimus nam quas a! </p>
                    </Block> */}
                    <Block className="tabla_programacion">
                        <BlockHeader>Programacion:</BlockHeader>
                        {/* La tablita de programacion */}
                        <ScheduleTable prog={this.programacion} table_id={this.props.table_id}/>
                    </Block>
                    {
                        (this.moreChannels.length > 0) &&
                        <Block className="mas_canales">
                            <BlockHeader>Más Canales</BlockHeader>
                            {this.moreChannels.map((channel, key) => {
                                return(
                                    <Block key={key} className="canal">
                                        <Block className="icon_tv display-flex justify-content-center align-items-center">
                                            <img src={Icon_TV} alt="" />
                                        </Block>
                                        <a href={`/tv/${channel.url}`} className="canal_content display-flex justify-content-center align-items-center">
                                            <img src={`http://${window.location.hostname}:1337${channel.logo.url}`} alt="" srcSet=""/>
                                            <h1 className="title">
                                                {channel.nombre}
                                            </h1>
                                        </a>
                                    </Block>
                                )
                            })}
                        </Block>
                    }
                    {/* <Block className="mas_canales">
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
                    </Block> */}
                </Card>
                <Card className="recomendados-card">
                    <SwiperNews articulos={[]}/>
                </Card>
            </Block>
        );
    }
}