import React, { Component } from 'react';
import {
    Card,
    Block,
    Col,
    Row
} from 'framework7-react';

export default class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card className="new_card">
                <Block className="header_cont display-flex justify-content-space-between">
                    <Block className="head display-flex justify-content-flex-start">
                        <p className="autor"> {this.props.articulo.autor.nombre} </p> - <p className="fecha"> {this.props.articulo.fecha} </p>
                    </Block>
                    <Block className="share display-flex align-items-center">
                        <p>Compartir:</p>
                        <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                            <img src="../static/icons/TW_Icon_x3.png" alt="" />
                        </a>
                        <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                            <img src="../static/icons/FB_Icon_x3.png" alt="" />
                        </a>
                    </Block>
                </Block>
                <Block className="title_cont">
                    <Block className="titulo"> {this.props.articulo.Titulo} </Block>
                    <Block className="img_cont display-flex flex-direction-column">
                        <img src={`http://${window.location.hostname}:1337${this.props.articulo.cover.url}`} alt="" />
                        <Block className="foot display-flex justify-content-flex-start align-items-center">
                            <p className="pieTitulo">Pie de foto</p> - <p className="pie">Pie de foto</p>
                        </Block>
                    </Block>
                </Block>
                <Block className="content display-flex flex-direction-column align-items-flex-start">
                    <p className="text"> {this.props.articulo.description} </p>
                    <a href={`/articulo/${this.props.articulo.url}/`}>Ver más</a>
                </Block>
            </Card>
        );
    }
}