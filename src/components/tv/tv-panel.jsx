import ScheduleTable from '@/components/general/schedule-table';
import ReactPlayer from 'react-player';
import React, { Component, useState } from 'react';
import Icon_TV from '@/static/icons/tv_dark.png';
import bk_img from '@/static/imgs/Rcg.png';
import SwiperNews from '@/components/general/swiper_news.jsx';
import moment from 'moment';
import {
    Card,
    CardHeader,
    Block,
    BlockHeader,
    Icon,
    f7
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
    'https://www.youtube.com/watch?v=TTSer9C5SrY'
]

const RandomLink = () => {
    return placeHolderVideos[Math.floor(Math.random() * placeHolderVideos.length)];
}

export default function TVPanel(props) {
    const { canal, canales, programacion, table_id } = props;
    const [playPause, setPlayPause] = useState(false);
    const url = f7.methods.get_URL();
    const DB_url = f7.methods.get_URL_DB();
    let urlThing = url + `/tv/${canal[0].url}/`;

    const handlePlayPause = () => {
        setPlayPause(!playPause);
    }

    return (
        <Block className="tv_panel center_panel">
            <Card className="tv">
                <Block className="header_cont display-flex justify-content-space-between">
                    <CardHeader>
                        <h1>
                            {canal[0].nombre}
                        </h1>
                        <Icon material="play_arrow"></Icon>
                    </CardHeader>
                    <Block className="share display-flex align-items-center">
                        <p>Compartir:</p>
                        <a className="faceIcon display-flex justify-content-center align-items-center external" href={`https://twitter.com/intent/tweet?url=${urlThing}&text=La wea tweet y asi%0D%0A`} data-size="large">
                            <img src="../static/icons/TW_Icon_x3.png" alt="" />
                        </a>
                        <div className="faceIcon display-flex justify-content-center align-items-center external" data-href={urlThing} data-layout="button_count" data-size="small">
                            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${urlThing}%26src=sdkpreparse`} className="fb-xfbml-parse-ignore external">
                                <img src="../static/icons/FB_Icon_x3.png" alt="" />
                            </a>
                        </div>
                    </Block>
                </Block>
                <Block className="middle-cont">
                    <BlockHeader className="program-name">
                        <h2>
                            Nombre del programa
                        </h2>
                    </BlockHeader>
                    <Block className="player-wrapper">
                        {/* Aqui va el stream */}
                        <a onClick={handlePlayPause}>
                            <ReactPlayer className="player" url={canal[0].source_url} playing={playPause} />
                        </a>
                    </Block>
                    <p className="programa-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                    </p>
                </Block>
                <Block className="tabla_programacion">
                    <BlockHeader>Programacion:</BlockHeader>
                    {/* La tablita de programacion */}
                    {/* <ScheduleTable prog={programacion} table_id={table_id} /> {/* pendiente */}
                </Block>
                {
                    canales.length > 0 &&
                    <Block className="mas_canales">
                        <BlockHeader>Más Canales</BlockHeader>
                        {canales.map((channel, key) => {
                            if (channel.url === canal[0].url) {
                                return (
                                    <Block key={key} className="canal">
                                        <Block className="icon_tv display-flex justify-content-center align-items-center">
                                            <img src={Icon_TV} alt="" />
                                        </Block>
                                        <a href={`/tv/${channel.url}`} className="canal_content">
                                            <div className="image_cont">
                                                <img src={DB_url + channel.logo.url} alt="" srcSet="" />
                                            </div>
                                            <h2 className="title">
                                                {channel.nombre}
                                            </h2>
                                        </a>
                                    </Block>
                                )
                            }
                            return '';
                        })}
                    </Block>
                }
            </Card>
        </Block>
    );
}

/* constructor(props) {
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
} */