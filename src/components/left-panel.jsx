import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    List,
    ListItem,
    Block,
    Link,
} from 'framework7-react';

export default class LeftPanel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="left_panel_cont">
                <Card className="left_pan_card envivo">
                    <CardHeader className="justify-content-flex-start align-items-flex-end">
                        <div className="icon display-flex justify-content-flex-start align-items-flex-end">
                            <img src="../static/icons/tv_light.png" alt="" />
                        </div>
                        en vivo
                    </CardHeader>
                    <List>
                        <ListItem link="#">RCG en vivo</ListItem>
                        <ListItem link="#">RCG Diferido – 2</ListItem>
                        <ListItem link="#">RCG TV 8.3</ListItem>
                    </List>
                </Card>
                <Card className="left_pan_card radio_card">
                    <CardHeader className="justify-content-flex-start align-items-flex-end">
                        <div className="icon display-flex justify-content-center align-items-flex-end">
                            <img src="../static/icons/microphone.png" alt="" />
                        </div>
                        Radio
                    </CardHeader>
                    <List>
                        <ListItem link="#">DIGITAL 106.5 FM</ListItem>
                        <ListItem link="#">XHSJ 103.3 FM</ListItem>
                    </List>
                </Card>
                <Card className="left_pan_card pages">
                    <List>
                        <ListItem link="#">Fundación RCG</ListItem>
                        <ListItem link="#">Espectaculares</ListItem>
                        <ListItem link="#">Registra tu calca</ListItem>
                    </List>
                </Card>
                <Card className="left_pan_card social">
                    <CardHeader>
                        Siguenos en:
                    </CardHeader>
                    <Block className="social_cont display-flex justify-content-space-between align-items-center">
                        <a href="">
                            <img src="../static/icons/FB_Icon.png" alt="" srcSet="" />
                        </a>
                        <a href="">
                            <img src="../static/icons/TW_Icon.png" alt="" srcSet="" />
                        </a>
                        <a href="">
                            <img src="../static/icons/YT_Icon.png" alt="" srcSet="" />
                        </a>
                        <a href="">
                            <img src="../static/icons/IG_Icon.png" alt="" srcSet="" />
                        </a>
                    </Block>
                </Card>
                <Card className="left_pan_card about">
                    <List>
                        <ListItem link="#">Nosotros</ListItem>
                        <ListItem link="#">Contacto</ListItem>
                    </List>
                </Card>
                <Block className="more display-flex flex-direction-column justify-content-flex-start align-items-flex-start">
                    <div className="flex_wrap display-flex justify-content-flex-start align-items-center">
                        <Link href={false}>Derecho de replica</Link>
                        <Link href={false}>Aviso de privacidad</Link>
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