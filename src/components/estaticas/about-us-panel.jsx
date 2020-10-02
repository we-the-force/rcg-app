import React, { Component } from 'react';
import marked from 'marked';
import city from '@/static/imgs/city.png'
import Logo from '@/static/imgs/Logo_negro.png'
import {
    Block,
    Card,
    CardHeader
} from 'framework7-react';

export default class AboutUsPanel extends Component {
    constructor(props) {
        super(props);
        this.descripcion = marked(props.nosotrosInfo.descripcion);
        this.middleText = marked(props.nosotrosInfo.info_mid);
        this.bottomText = marked(props.nosotrosInfo.info_bottom);
    }
    render() {
        return (
            <Block className="center_panel nosotros_panel">
                <Card className="head">
                    <CardHeader>Nosotros</CardHeader>
                </Card>
                <Card className="city">
                    <Block className="back">
                        <div className="logo_cont">
                            <img src={Logo} alt="" />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: this.descripcion }} /> {/* //change marked */}
                        <img className="cityImg" src={city} alt="" />
                    </Block>
                </Card>
                <Card className="quote">
                    <div className="text" dangerouslySetInnerHTML={{ __html: this.middleText }} /> {/* //change marked */}
                </Card>
                <Card className="bottom">
                    <Block className="back">
                        <div dangerouslySetInnerHTML={{ __html: this.bottomText }} /> {/* //change marked */}
                        <div className="logo_cont">
                            <img src={Logo} alt="" />
                        </div>
                    </Block>
                </Card>
            </Block>
        )
    }
}