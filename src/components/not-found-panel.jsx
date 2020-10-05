import React, { Component } from 'react';
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
                <Card className="new_head">
                    <CardHeader>404 Contenido no encontrado</CardHeader>
                    <div className="head_logo">
                        <img src={back_head} alt="" />
                    </div>
                </Card>
                <Card>
                    <h1>Gracias Usuario!</h1>
                    <h2>Pero el contenido esta en otro castillo!</h2>
                </Card>
            </Block>
        )
    }
}