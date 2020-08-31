import TVScheduleTable from './schedule-table';
import ReactPlayer from 'react-player';
import RecomendacionSwiper from '../components/recomendacionSwiper'
import Icon_Radio from '@/static/icons/microphone_dark.png';
import Img_106 from '@/static/imgs/escuchadigital 1.png';
import Img_103 from '@/static/imgs/fondo-sj-e1540342434825 1.png';
import RCGlogo from '../static/imgs/Logo_negro.png'
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
    constructor() {
        super();
        this.state = {
            url: "https://www.youtube.com/watch?v=ZEy36W1xX8c",
            playing: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            play_pause: true
        }
    }

    playStop(){
        this.setState({
            playing: !this.state.playing,
            play_pause: !this.state.play_pause
        });
    }

    render() {
        const { url, playing, volume, muted, play_pause } = this.state

        return (
            <Block className="tv_panel center_panel">
                <Card className="radio_center_card">
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
                                    <img src={Img_106} alt="" />
                                </Block>
                                <Block className="content-radio">
                                    <h1 className="title">digital 106.5 FM</h1>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eveniet est quidem error alias. Earum blanditiis commodi molestiae laudantium, accusamus sequi modi officia molestias atque! Error eveniet quam minus aliquam!</p>
                                </Block>
                            </Block>
                            <Block className="controls-wrapper display-flex justify-content-center align-items-center">
                                <Block className="controls display-flex align-items-center">
                                    <a onClick={this.playStop.bind(this)}>
                                        <Icon material={play_pause ? 'play_arrow' : 'pause'} /> {/* pause */}
                                    </a>
                                    <a onClick={() => { }}>
                                        <Icon material="stop" />
                                    </a>
                                    <a onClick={() => { }}>
                                        <Icon material="volume_up" />
                                    </a>
                                    <Range
                                        min={0}
                                        max={1}
                                        step={0.1}
                                        value={volume}
                                    ></Range>
                                </Block>
                            </Block>
                            <Block className="logo-RCG">
                                <img src={RCGlogo} alt="" />
                            </Block>
                        </Block>
                    </Block>
                    <Block className="info-programa">
                        <p className="titulo-programa">Nombre de Programa</p>
                        <p className="texto-programa"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore sed dolores quia esse veniam. Quos nobis temporibus ab, vero reiciendis animi, illum provident voluptate autem possimus nam quas a! </p>
                    </Block>
                    <Block className="tabla_programacion">
                        {/* La tablita de programacion */}
                        <BlockHeader>Programacion:</BlockHeader>
                        <TVScheduleTable />
                    </Block>
                    <Block className="mas_canales">
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
                    </Block>
                </Card>
                <Card className="recomendados-card">
                    <RecomendacionSwiper />
                </Card>
            </Block>
        );
    }
}