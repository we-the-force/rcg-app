import ScheduleTable from '@/components/general/schedule-table';
import ReactPlayer from 'react-player';
import RecomendacionSwiper from '@/components/general/recomendacionSwiper'
import Icon_Radio from '@/static/icons/microphone_dark.png';
import Img_106 from '@/static/imgs/escuchadigital 1.png';
import Img_103 from '@/static/imgs/fondo-sj-e1540342434825 1.png';
import RCGlogo from '@/static/imgs/Logo_negro.png';
import moment from 'moment';
import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    Block,
    BlockHeader,
    Icon,
    Range
} from 'framework7-react';

export default class RadioPanel extends Component {
    
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

        if (props.prog.length > 0)
        {
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
        else
        {
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

        if (props.station != undefined)
        {
            this.moreStations = JSON.parse(JSON.stringify(props.station_list));
            for (let i = 0; i < this.moreStations.length; i++)
            {
                if (this.moreStations[i].url === props.station.url)
                {
                    this.moreStations.splice(i, 1);
                    break;
                }
            }
            // console.log(this.moreStations);
        }
        else
        {
            this.moreStations = [];
        }
    }
    sortFunction(a, b){
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

    render() {
        const { url, playing, volume, muted, play_pause, mute_unmute } = this.state

        return (
            <Block className="tv_panel center_panel">
                {/* tarjetita principal radio */}
                <Card className="radio_center_card">
                    {/* header */}
                    <Block className="header_cont display-flex justify-content-space-between">
                        <CardHeader>
                            {this.props.station.nombre}
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
                    {/* bloque de radio*/}
                    <Block className="radio-wrapper">
                        <ReactPlayer
                            url={url}
                            playing={playing}
                            volume={volume}
                            muted={muted}
                            onSeek={e => console.log('onSeek', e)}
                            onError={e => console.log('onError', e)}
                            className="display-none"
                        />
                        <Block className="radio-ui display-flex flex-direction-column">
                            <Block className="display-flex top-wrapper">
                                <Block className="logo-radio">
                                    {/* <img src={Img_106} alt="" /> */}
                                    {/* { console.log(this.props.station) } */}
                                    {/* { console.log(`http://149.28.252.152:1337${this.props.station.logo.url}`) } */}
                                    <img src={`http://${window.location.hostname}:1337${this.props.station.logo.url}`} alt="" />
                                </Block>
                                <Block className="content-radio">
                                    <h1 className="title">{this.props.station.nombre}</h1>
                                    <p className="text">{this.props.station.descripcion}</p>
                                </Block>
                            </Block>
                            <Block className="controls-wrapper display-flex justify-content-center align-items-center">
                                <Block className="controls display-flex align-items-center">
                                    <a onClick={this.playPause}>
                                        <Icon material={play_pause ? 'play_arrow' : 'pause'} /> {/* pause */}
                                    </a>
                                    <a onClick={this.handleStop}>
                                        <Icon material="stop" />
                                    </a>
                                    <a onClick={this.handleToggleMuted}>
                                        <Icon material={mute_unmute ? "volume_up" : "volume_off"} />
                                    </a>
                                    <Range
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        value={volume}
                                        onRangeChange={this.handleVolumeChange}
                                    ></Range>
                                </Block>
                            </Block>
                            <Block className="logo-RCG">
                                <img src={RCGlogo} alt="" />
                            </Block>
                        </Block>
                    </Block>
                    {/* bloque de info */}
                    {/* <Block className="info-programa">
                        <p className="titulo-programa">Nombre de Programa</p>
                        <p className="texto-programa"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore sed dolores quia esse veniam. Quos nobis temporibus ab, vero reiciendis animi, illum provident voluptate autem possimus nam quas a! </p>
                    </Block> */}
                    {/* La tablita de programacion */}
                    <Block className="tabla_programacion">
                        <BlockHeader>Programacion:</BlockHeader>
                        {/* {console.log('Schedule prog???', this.programacion)} */}
                        <ScheduleTable prog={this.programacion} table_id={this.props.table_id}/>
                    </Block>
                    {/* mas canales xD */}
                    {
                        (this.moreStations.length > 0) &&
                        <Block className="mas_canales">
                            <BlockHeader>Más Canales</BlockHeader>
                            {this.moreStations.map((station, key) => {
                                return(
                                    <Block key={key} className="canal">
                                        <Block className="icon_tv display-flex justify-content-center align-items-center">
                                            <img src={Icon_Radio} alt="" />
                                        </Block>
                                        <a href={`/radio/${station.url}`} className="canal_content display-flex justify-content-center align-items-center">
                                            <img src={`http://${window.location.hostname}:1337${station.logo.url}`} alt="" srcSet=""/>
                                            <h1 className="title">
                                                {station.nombre}
                                            </h1>
                                        </a>
                                    </Block>
                                );
                            })}
                        </Block>
                    }
                    {/* <Block className="mas_canales">
                        <BlockHeader>Más Canales</BlockHeader>

                        <Block className="canal">
                            <Block className="icon_tv display-flex justify-content-center align-items-center">
                                <img src={Icon_Radio} alt="" />
                            </Block>
                            <a href="" className="canal_content display-flex justify-content-center align-items-center">
                                <img src={Img_106} alt="" srcSet="" />
                                <h1 className="title">
                                    Digital 106.5 FM
                                </h1>
                            </a>
                        </Block>

                        <Block className="canal">
                            <Block className="icon_tv display-flex justify-content-center align-items-center">
                                <img src={Icon_Radio} alt="" />
                            </Block>
                            <a href="" className="canal_content display-flex justify-content-center align-items-center">
                                <img src={Img_103} alt="" srcSet="" />
                                <h1 className="title">
                                    XHSJ 103.3 FM
                                </h1>
                            </a>
                        </Block>
                    </Block> */}
                </Card>
                {/* tarjewtita recomendados */}
                <Card className="recomendados-card">
                    <RecomendacionSwiper />
                </Card>
            </Block>
        );
    }
}