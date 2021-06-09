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
    const { estacion, estaciones, programacion, table_id, isOut } = props;
    const { descripcion, source_url, nombre, logo } = estacion[0];
    const [sourceURL, setSourceURL] = useState(source_url);
    const [playPause, setPlayPause] = useState(false);
    const [playWasTouched, setPlayWasTouched] = useState(false);
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

    useEffect(() => {
		f7ready((f7) => {
            if(playWasTouched){
                f7.methods.set_RadioURL(sourceURL);
                f7.methods.set_RadioName(nombre);
                f7.methods.set_RadioIMG(DB_url + logo.url);
                f7.methods.set_RadioPlay(playPause);
            }
		});
	}, [isOut]);


    const handlePlayPause = () => {
        setPlayWasTouched(true);
        setSourceURL(source_url);
        setPlayPause(!playPause);
    }

    const handleStop = () => {
        setPlayPause(false);
        setSourceURL(null);
    }

    const handleToggleMuted = () => {
        setMuted(!muted);
    }

    const handleVolumeChange = e => {
        setVolume(parseFloat(e));
    }

    const handlePIP = async (e) => {
		e.preventDefault();
		let player = document.getElementsByClassName("radio-player")[0].firstChild;
		await player.requestPictureInPicture();
	};

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
                        className="display-none radio-player"
                        pip={true}
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
                                <a onClick={(e) => {handlePIP(e)}}>
                                    <Icon className="picture_in_picture_alt" material="picture_in_picture_alt"></Icon>
                                </a>
                            </Block>
                        </Block>
                        {/* <Block className="logo-RCG">
                            <img className="light" src={props.logo} alt="" />
                            <img className="dark" src={props.logoD} alt="" />
                        </Block> */}
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