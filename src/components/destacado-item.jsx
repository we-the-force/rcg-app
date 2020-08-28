import React, { Component } from 'react';
import IMG from '@/static/imgs/IMG_01.png'
import {
    Block,
    BlockHeader,
    BlockTitle,
    BlockFooter
} from 'framework7-react';

export default class DestItem extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        let bord = this.props.nobord ? 'nobord' : '';
        return (
            <Block className={"dest-item " + bord}>
                {this.props.image &&
                    <a className="img_cont">
                        <img src={IMG} alt="" />
                    </a>
                }
                <Block className="dest-cont">
                    <BlockHeader>
                        <a className="autor">Nombre Reporter@</a>&nbsp;-&nbsp;<p className="fecha">11 Agosto 2020</p>
                    </BlockHeader>
                    <BlockTitle>
                        Titulo De La Nota este si ahora si a vis si cabe
                    </BlockTitle>
                    <p className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <BlockFooter className="display-flex justify-content-space-between">
                        <p className="tag">Tag&nbsp;<a href="" className="etiqueta">Titulo</a></p>
                        <a className="more">Mostrar mas</a>
                    </BlockFooter>

                </Block>
            </Block>
        );
    }
}