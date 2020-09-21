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
                        let twLink = autor.twitter_link   != null ? (<a href={autor.twitter_link}   target="_blank"><img src="../static/icons/TW_Icon.png"/></a>) : ("");
                        let fbLink = autor.facebook_link  != null ? (<a href={autor.facebook_link}  target="_blank"><img src="../static/icons/FB_Icon.png"/></a>) : ("");
                        let igLink = autor.instagram_link != null ? (<a href={autor.instagram_link} ><img src="../static/icons/IG_Icon.png"/></a>) : ("");
                        console.log("autoresPanel igLink:", igLink);
                        console.log("autoresPanel igLink2:", autor.instagram_link);
                        return (<Card key={key}>
                                    <img src={autorImgUrl}/>
                                    <p>{autor.nombre}</p>
                                    <a href={`/autor/${autor.id}`}>{autor.articulos.length} noticias</a>
                                    <p>Redes:</p>
                                    <Block className="display-flex">
                                        {twLink}
                                        {fbLink}
                                        {igLink}
                                    </Block>
                                </Card>)
                    })
                }
            </Block>
        )
    }
}