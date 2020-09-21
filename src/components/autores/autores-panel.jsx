import React, {Component} from 'react';
import NewsCard from '../news-card';
import Locutor from '@/static/imgs/locutor.png'
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default class AutoresPanel extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card className="head">
                    <CardHeader>Autores</CardHeader>
                </Card>
                {
                    this.props.autores.map((autor, key) => {
                        let autorImgUrl = autor.img != null ? `http://${window.location.hostname}:1337${autor.img.url}` : ``;
                        return (<Card key={key}>
                                    <img src={autorImgUrl}/>
                                    {/* Name */}
                                    <p>{autor.nombre}</p>
                                    <a href={`/autor/${autor.id}`}>{autor.articulos.length} noticias</a>
                                    <p>Redes</p>
                                    <Block className="display-flex">
                                        <img src="../static/icons/TW_Icon.png" alt="" />
                                        <img src="../static/icons/FB_Icon.png" alt="" />
                                        <img src="../static/icons/IG_Icon.png" alt="" />
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