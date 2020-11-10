import ScheduleTable from '@/components/general/schedule-table';
import ReactPlayer from 'react-player';
import SwiperNews from '@/components/general/swiper_news.jsx';
import Icon_Radio from '@/static/icons/microphone_dark.png';
import Img_106 from '@/static/imgs/escuchadigital 1.png';
import Img_103 from '@/static/imgs/fondo-sj-e1540342434825 1.png';
import RCGlogo from '@/static/imgs/Logo_negro.png';
import moment from 'moment';
import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    Block,
    BlockHeader,
    Icon,
    Range,
    f7
} from 'framework7-react';

export default function RadioPanel(props) {
    const { estacion, estaciones, programacion, table_id } = props;
    const { descripcion, source_url, nombre, logo } = estacion[0];
    const [sourceURL, setSourceURL] = useState(source_url);
    const [playPause, setPlayPause] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const url = f7.methods.get_URL();
    const DB_url = f7.methods.get_URL_DB();
    let urlThing = url + `/radio/${estacion[0].url}/`;
    let prog = programacion[0] ? programacion[0].programacion : {
        domingo: [],
        jueves: [],
        lunes: [],
        martes: [],
        miercoles: [],
        sabado: [],
        viernes: []
    }

    const handlePlayPause = () => {
        setSourceURL(source_url);
        setPlayPause(!playPause);
    }

    const handleStop = () => {
        setSourceURL(null);
        setPlayPause(false);
    }

    const handleToggleMuted = () => {
        setMuted(!muted);
    }

    const handleVolumeChange = e => {
        setVolume(parseFloat(e));
    }

    return (
        <Block className="radio_panel center_panel">
            {/* tarjetita principal radio */}
            <Card className="radio_center_card">
                {/* header */}
                <Block className="header_cont display-flex justify-content-space-between">
                    <CardHeader>
                        <h1>
                            {nombre}
                        </h1>
                        <Icon material="play_arrow"></Icon>
                    </CardHeader>
                    <Block className="share display-flex align-items-center">
                        <p>Compartir:</p>
                        <a className="faceIcon display-flex justify-content-center align-items-center external" href={`https://twitter.com/intent/tweet?url=${urlThing}&text=%0D`} data-size="large">
                            <img src="../static/icons/TW_Icon_x3.png" alt="" />
                        </a>
                        <div className="faceIcon display-flex justify-content-center align-items-center external" data-href={urlThing} data-layout="button_count" data-size="small">
                            <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${urlThing}%26src=sdkpreparse`} className="fb-xfbml-parse-ignore external">
                                <img src="../static/icons/FB_Icon_x3.png" alt="" />
                            </a>
                        </div>
                    </Block>
                </Block>
                {/* bloque de radio*/}
                <Block className="radio-wrapper">
                    <ReactPlayer
                        url={sourceURL}
                        playing={playPause}
                        volume={volume}
                        muted={muted}
                        className="display-none"
                    />
                    <Block className="radio-ui-mobile">
                        <Block className="logo-radio">
                            <img src={DB_url + logo.url} alt="" />
                        </Block>
                        <h2 className="title">{nombre}</h2>
                        <Range
                            min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onRangeChange={handleVolumeChange}
                        ></Range>
                        <a className="play_pause_button" onClick={handlePlayPause}>
                            <Icon material={playPause ? 'pause' : 'play_arrow'} /> 
                        </a>
                    </Block>
                    <Block className="radio-ui display-flex flex-direction-column">
                        <Block className="display-flex top-wrapper">
                            <Block className="logo-radio">
                                <img src={DB_url + logo.url} alt="" />
                            </Block>
                            <Block className="content-radio">
                                <h1 className="title">{nombre}</h1>
                                <p className="text">{descripcion}</p>
                            </Block>
                        </Block>
                        <Block className="controls-wrapper display-flex justify-content-center align-items-center">
                            <Block className="controls display-flex align-items-center">
                                <a onClick={handlePlayPause}>
                                    <Icon material={playPause ? 'pause' : 'play_arrow'} /> {/* pause */}
                                </a>
                                <a onClick={handleStop}>
                                    <Icon material="stop" />
                                </a>
                                <a onClick={handleToggleMuted}>
                                    <Icon material={muted ? "volume_off" : "volume_up"} />
                                </a>
                                <Range
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={volume}
                                    onRangeChange={handleVolumeChange}
                                ></Range>
                            </Block>
                        </Block>
                        <Block className="logo-RCG">
                            <img src={props.logo} alt="" />
                        </Block>
                    </Block>
                </Block>
                {/* La tablita de programación */}
                <Block className="tabla_programacion">
                    <BlockHeader>Programación:</BlockHeader>
                    <ScheduleTable prog={prog} table_id={table_id} />
                </Block>
                {/* más canales xD */}
                {
                    estaciones.length > 1 &&
                    <Block className="mas_canales">
                        <BlockHeader>Más Canales</BlockHeader>
                        {estaciones.map((station, key) => {
                            if (station.url !== estacion[0].url) {
                                return (
                                    <Block key={key} className="canal">
                                        <Block className="icon_tv display-flex justify-content-center align-items-center">
                                            <img src={Icon_Radio} alt="" />
                                        </Block>
                                        <a href={`/radio/${station.url}`} className="canal_content">
                                            <div className="image_cont">
                                                <img src={DB_url + station.logo.url} alt="" srcSet="" />
                                            </div>

                                            <h2 className="title">
                                                {station.nombre}
                                            </h2>
                                        </a>
                                    </Block>
                                );
                            }
                            return '';
                        })}
                    </Block>
                }
            </Card>
        </Block>
    );
}

/*
constructor(props) {
    super(props);
    this.state = {
        radioURL: props.station.source_url,
        url: props.station.source_url,
        playing: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        play_pause: true,
        mute_unmute: true,
    }

    if (props.prog.length > 0) {
        this.programacion = JSON.parse(JSON.stringify(props.prog[0]));

        // console.log("Programacion rara", this.programacion.programacion);
        // console.log('this.programacion', this.programacion.programacion.martes);
        this.programacion.programacion.domingo.sort(this.sortFunction);
        this.programacion.programacion.lunes.sort(this.sortFunction);
        this.programacion.programacion.martes.sort(this.sortFunction);
        this.programacion.programacion.miercoles.sort(this.sortFunction);
        this.programacion.programacion.jueves.sort(this.sortFunction);
        this.programacion.programacion.viernes.sort(this.sortFunction);
        this.programacion.programacion.sabado.sort(this.sortFunction);
        // console.log('this.programacion', this.programacion.programacion);
    }
    else {
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
        // console.log("Empty programacion: ", this.programacion);
    }

    if (props.station != undefined) {
        this.moreStations = JSON.parse(JSON.stringify(props.station_list));
        for (let i = 0; i < this.moreStations.length; i++) {
            if (this.moreStations[i].url === props.station.url) {
                this.moreStations.splice(i, 1);
                break;
            }
        }
        // console.log(this.moreStations);
    }
    else {
        this.moreStations = [];
    }
    this.urlThing = `http://${window.location.hostname}/radio/${props.station.url}/`;
    this.encodedUrlThing = encodeURIComponent(this.urlThing);
}
sortFunction(a, b) {
    let isBefore = moment(a.hora_inicio, 'HH:mm:ss.sss').isBefore(moment(b.hora_inicio, 'HH:mm:ss.sss'));
    return (isBefore ? -1 : 1);
}
playPause = () => {
    let url = this.state.url == null ? this.state.radioURL : this.state.url;
    this.setState({
        url: url,
        playing: !this.state.playing,
        play_pause: !this.state.play_pause
    });
}

handleStop = () => {
    this.setState({
        url: null,
        playing: false,
        play_pause: true,
    });
}

handleToggleMuted = () => {
    this.setState({
        muted: !this.state.muted,
        mute_unmute: !this.state.mute_unmute
    })
}

handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e) })
}

    const { url, playing, volume, muted, play_pause, mute_unmute } = this.state */