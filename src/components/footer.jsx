import React, { Component } from 'react';
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
                    <img src="../static/imgs/Logo_negro.png" alt="" />
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
                        <img src="../static/icons/footer_face.png" alt=""/>
                    </a>
                    <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                        <img src="../static/icons/footer_twit.png" alt=""/>
                    </a>
                    <a href="#" className="youIcon display-flex justify-content-center align-items-center">
                        <img src="../static/icons/footer_you.png" alt=""/>
                    </a>
                    <a href="#" className="instaIcon display-flex justify-content-center align-items-center">
                        <img src="../static/icons/footer_insta.png" alt=""/>
                    </a>
                </Block>
            </Block>
        );
    }
}