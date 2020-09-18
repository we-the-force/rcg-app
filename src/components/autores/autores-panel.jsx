import React, {Component} from 'react';
import Locutor from '@/static/imgs/locutor.png'
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default class AutoresPanel extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card className="head">
                    <CardHeader>Autores</CardHeader>
                </Card>
                {
                    this.props.autores.map((autor, key) => {

                        return (<Card key={key}>
                                    <img src={Locutor}/>
                                    {/* Name */}
                                    <p>{autor.nombre}</p>
                                    <p>{autor.articulos.length} noticias</p>
                                    Redes
                                    <Block className="display-flex">
                                        <img src="../static/icons/TW_Icon_x3.png" alt="" />
                                        <img src="../static/icons/FB_Icon_x3.png" alt="" />
                                        <img src="../static/icons/FB_Icon_x3.png" alt="" />
                                    </Block>
                                    {/* Article count */}
                                    {/* Iconitos social media */}

                                </Card>)
                    })
                }
            </Block>
        )
    }
}