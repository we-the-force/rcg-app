import React, { Component } from 'react';
import marked from 'marked';
import image from '@/static/imgs/av_priv.png'
import city from '@/static/imgs/city.png'
import Logo from '@/static/imgs/Logo_negro.png'
import {
    Block,
    Card,
    BlockHeader,
    BlockFooter
} from 'framework7-react';

export default class AboutUsPanel extends Component {
    constructor(props) {
        super(props);
        this.avisoPrivacidad = marked(props.avisoPriv.descripcion == null ? "" : props.avisoPriv.descripcion);
    }
    render() {
        return (
            <Block className="center_panel av_priv_panel">
                <Card>
                    <Block className="back">
                        <BlockHeader>
                            <h1>Aviso de privacidad</h1>
                            <div className="img_cont">
                                <img src={image} alt="" />
                            </div>
                        </BlockHeader>
                        <div className="content">
                            <div dangerouslySetInnerHTML={{ __html: this.avisoPrivacidad }} />
                        </div>
                        <img className="city" src={city} alt="" />
                        <div className="logo_cont">
                            <img src={Logo} alt="" />
                        </div>
                    </Block>
                </Card>
            </Block>
        )
    }
}