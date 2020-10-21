import React, { Component } from 'react';
import back_head from '@/static/imgs/card_back_6.png'
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
            <Block className="center_panel not_found_panel">
                <Card className="new_head">
                    <CardHeader>404 Contenido no encontrado</CardHeader>
                    <div className="head_logo">
                        <img src={back_head} alt="" />
                    </div>
                </Card>
                <Card className="not_found_card">
                    <h2>Gracias por su preferencia!</h2>
                    <p>Pero el contenido que esta buscando no ha sido encontrado</p>
                </Card>
            </Block>
        )
    }
}