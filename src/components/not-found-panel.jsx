import React, {Component} from 'react';
import {
    Block,
    Card,
    CardHeader
} from 'framework7-react';

export default class NotFoundPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card className="head">
                    <CardHeader>404 Contenido no encontrado</CardHeader>
                </Card>
                <Card>
                    <h1>Gracias Usuario!</h1>
                    <h2>Pero el contenido esta en otro castillo!</h2>
                </Card>
            </Block>
        )
    }
}