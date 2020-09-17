import React, { Component } from 'react';
import TWIcon from '@/static/icons/TW_Icon.png'
import FBIcon from '@/static/icons/FB_Icon.png'
import YTIcon from '@/static/icons/YT_Icon.png'
import IGIcon from '@/static/icons/IG_Icon.png'
import TVLight from '@/static/icons/tv_light.png'
import MIC from '@/static/icons/microphone.png'
import {
    Card,
    CardHeader,
    List,
    ListItem,
    Block,
    Link,
} from 'framework7-react';

export default class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        if (props.hasOwnProperty("tv_channels"))
        {
            this.tv_channels = props.tv_channels;
        }
        else
        {
            this.tv_channels = [];
        }
        if (props.hasOwnProperty("radio_stations"))
        {
            this.radio_stations = props.radio_stations;
        }
        else
        {
            this.radio_stations = [];
        }
    }
    render() {
        return (
            <Block className="left_panel_cont">
                <Card className="left_pan_card envivo">
                    <CardHeader className="justify-content-flex-start align-items-flex-end">
                        <div className="icon display-flex justify-content-flex-start align-items-flex-end">
                            <img src={TVLight} alt="" />
                        </div>
                        en vivo
                    </CardHeader>
                    <List>
                        {/* <ListItem link="/tv/envivo">RCG en vivo</ListItem>
                        <ListItem link="/tv/diferido">RCG Diferido – 2</ListItem>
                        <ListItem link="/tv/8-3">RCG TV 8.3</ListItem> */}
                        {
                            this.tv_channels.map((channel, key) => {
                                return (<ListItem key={key} link={`/tv/${channel.url}`}>{channel.nombre}</ListItem>)
                            })
                        }
                    </List>
                </Card>
                <Card className="left_pan_card radio_card">
                    <CardHeader className="justify-content-flex-start align-items-flex-end">
                        <div className="icon display-flex justify-content-center align-items-flex-end">
                            <img src={MIC} alt="" />
                        </div>
                        Radio
                    </CardHeader>
                    <List>
                        {/* <ListItem link="/radio/106-5">DIGITAL 106.5 FM</ListItem>
                        <ListItem link="/radio/103-3">XHSJ 103.3 FM</ListItem> */}
                        {
                            this.radio_stations.map((station, key) => {
                                return (<ListItem key={key} link={`/radio/${station.url}`}>{station.nombre}</ListItem>);
                            })
                        }
                    </List>
                </Card>
                <Card className="left_pan_card pages">
                    <List>
                        <ListItem link="#">Fundación RCG</ListItem>
                        <ListItem link="/espectaculares">Espectaculares</ListItem>
                        <ListItem link="/calca">Registra tu calca</ListItem>
                    </List>
                </Card>
                <Card className="left_pan_card social">
                    <CardHeader>
                        Siguenos en:
                    </CardHeader>
                    <Block className="social_cont display-flex justify-content-space-between align-items-center">
                        <a href="">
                            <img src={FBIcon} alt="" srcSet="" />
                        </a>
                        <a href="">
                            <img src={TWIcon} alt="" srcSet="" />
                        </a>
                        <a href="">
                            <img src={YTIcon} alt="" srcSet="" />
                        </a>
                        <a href="">
                            <img src={IGIcon} alt="" srcSet="" />
                        </a>
                    </Block>
                </Card>
                <Card className="left_pan_card about">
                    <List>
                        <ListItem link="/nosotros">Nosotros</ListItem>
                        <ListItem link="/contacto">Contacto</ListItem>
                    </List>
                </Card>
                <Block className="more display-flex flex-direction-column justify-content-flex-start align-items-flex-start">
                    <div className="flex_wrap display-flex justify-content-flex-start align-items-center">
                        <Link href="/derecho_replica">Derecho de replica</Link>
                        <Link href="/aviso_privacidad">Aviso de privacidad</Link>
                    </div>
                    <div className="display-flex justify-content-flex-start align-items-center">
                        <Link href={false}>OPI 2017</Link>
                        <Link href={false}>OPI 2018</Link>
                        <Link href={false}>SEG</Link>
                    </div>
                    <p>©2020 RCG</p>
                </Block>
            </Block>
        );
    }
}