import React, {Component} from 'react';
import marked from 'marked';
import {
    Block,
    Card,
    CardHeader
} from 'framework7-react';

export default class AboutUsPanel extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card>
                    <h1>DERECHO DE REPLICA</h1>
                    <br/>
                    <p>RESPONSABLE DE DERECHO DE REPLICA</p>
                    <p>NOMBRE: {this.props.contactInfo.nombre}</p>
                    <p>DIRECCION: {this.props.contactInfo.direccion}</p>
                    <p>TELEFONO: {this.props.contactInfo.telefono}</p>
                    <p>EMAIL: {this.props.contactInfo.correo}</p>
                </Card>
            </Block>
        )
    }
}