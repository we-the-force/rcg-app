import React, { Component } from 'react';
import city from '@/static/imgs/city.png'
import {
    Block,
    Card,
    BlockHeader
} from 'framework7-react';

export default class AboutUsPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { nombre, direccion, telefono, correo } = this.props.content;
        return (
            <Block className="center_panel der_replica_panel">
                <Card>
                    <Block className="back">
                        <BlockHeader>
                            <h1>Derecho de réplica</h1>
                        </BlockHeader>
                        <div className="content">
                            <p className="uppercase">Responsable de derecho de réplica</p>
                            <div className="parrafo">Nombre:
                                <div className="info">{this.props.content.nombre}</div>
                            </div>
                            <div className="parrafo">Dirección:
                                <div className="info">{this.props.content.direccion}</div>
                            </div>
                            <div className="parrafo">Telefono:
                                <div className="info">{this.props.content.telefono}</div>
                            </div>
                            <div className="parrafo">Email:
                                <div className="info">{this.props.content.correo}</div>
                            </div>
                        </div>
                        <img className="city" src={city} alt="" />
                        <div className="logo_cont">
                            <img src={this.props.logo} alt="" />
                        </div>
                    </Block>
                </Card>
            </Block>
        )
    }
}