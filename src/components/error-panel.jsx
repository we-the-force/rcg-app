import React from 'react';
import {
    Block,
    Card
} from 'framework7-react';

export default function ErrorPanel(props) {
    return (
        <Block className="center_panel error_panel">
            <Card className="new_head">
                <CardHeader>Ooops!Ocurrio un Error </CardHeader>
                <div className="head_logo">
                    <img src={back_head} alt="" />
                </div>
            </Card>
            <Card className="error_card">
                <h2>Intentalo de nuevo mas tarde</h2>
                <p>{props.error}</p>
            </Card>
        </Block>
    )
}