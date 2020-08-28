import React, { Component } from 'react';
import LogoNegro from '@/static/imgs/Logo_negro.png'
import FaceFoot from '@/static/icons/footer_face.png'
import TwitFoot from '@/static/icons/footer_twit.png'
import YouFoot from '@/static/icons/footer_you.png'
import InstaFoot from '@/static/icons/footer_insta.png'
import {
    Block,
    Link
} from 'framework7-react';

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="footer display-flex justify-content-space-between">
                <a href="/" className="left">
                    <img src={LogoNegro} alt="" />
                </a>
                <Block className="center">
                    <div className="display-flex">
                        <Link href="/derecho_replica">Derecho de replica</Link>
                        <hr />
                        <Link href="/aviso_privacidad">Aviso de privacidad</Link>
                        <hr />
                        <Link href={false}>OPI 2017</Link>
                        <hr />
                        <Link href={false}>OPI 2018</Link>
                        <hr />
                        <Link href={false}>SEG</Link>
                    </div>
                    <div>
                        <p>©2020 RCG</p>
                    </div>
                </Block>
                <Block className="right display-flex justify-content-space-between align-items-center">
                    <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                        <img src={FaceFoot} alt=""/>
                    </a>
                    <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                        <img src={TwitFoot} alt=""/>
                    </a>
                    <a href="#" className="youIcon display-flex justify-content-center align-items-center">
                        <img src={YouFoot} alt=""/>
                    </a>
                    <a href="#" className="instaIcon display-flex justify-content-center align-items-center">
                        <img src={InstaFoot} alt=""/>
                    </a>
                </Block>
            </Block>
        );
    }
}