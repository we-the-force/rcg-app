import React, { Component } from 'react';
import AutorCard from '@/components/autores/autor-card.jsx';
import back_head from '@/static/imgs/card_back_6.png'
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default class AutoresPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { autores, numNoticias } = this.props;

        return (
            <Block className="autores center_panel">
                <Card className="new_head">
                    <CardHeader>Autores</CardHeader>
                    <div className="head_logo">
                        <img src={back_head} alt="" />
                    </div>
                </Card>
                <Block className="autores_cont">
                    {
                        autores.map((autor, key) => {
                            return(<AutorCard key={key} autor={autor} numArticulos={numNoticias.find(val => val.autor === autor.id)}/>);
                        })
                    }
                </Block>
            </Block>
        )
    }
}