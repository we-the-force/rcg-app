import React, {Component} from 'react';
import NewsCard from '../news-card';
import Locutor from '@/static/imgs/locutor.png'
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default class AutorPanel extends Component {
    constructor(props){
        super(props);

        this.autorImage = props.autorInfo.img != null ? `http://${window.location.hostname}:1337${props.autorInfo.img.url}` : ``;
        // console.log(this.autorImage);
        console.log(props.autorInfo.instagram_link);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card className="head">
                    <Block>
                        <img src={this.autorImage}/>
                    </Block>
                    <Block>
                        {this.props.autorInfo.nombre}
                        <p>{this.props.autorInfo.articulos.length} Noticias</p>
                    </Block>
                    <Block className="display-flex">
                        { 
                            (this.props.autorInfo.twitter_link != null) &&
                            <a href={this.props.autorInfo.twitter_link} target="_blank"><img src="../static/icons/TW_Icon.png" alt=""/></a>
                        }
                        { 
                            (this.props.autorInfo.facebook_link != null) &&
                            <a href={this.props.autorInfo.facebook_link} target="_blank"><img src="../static/icons/FB_Icon.png" alt=""/></a>
                        }
                        { 
                            (this.props.autorInfo.instagram_link != null) &&
                            <a href={this.props.autorInfo.instagram_link} target="_blank"><img src="../static/icons/IG_Icon.png" alt=""/></a>
                        }
                    </Block>
                </Card>
                <Card>
                    {
                        this.props.autorInfo.articulos.map((articulo, key) => {
                            return (
                                  <NewsCard key={key} articulo={articulo}/>
                            );
                        })
                    }                    
                </Card>
            </Block>
        );
    }
}