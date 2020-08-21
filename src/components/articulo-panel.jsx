import React, { Component } from 'react';
import {
    Block,
    Card,
    CardHeader,
} from 'framework7-react';

export default class ArticuloPanel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Block className="articulo_panel">
                <Card className="articulo">
                    <Block className="header_cont display-flex justify-content-space-between">
                        <CardHeader>
                            <a>Locales</a>
                            <a>Estatales</a>
                        </CardHeader>
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
                        <Block className="head display-flex justify-content-flex-start">
                            <p className="autor"> {this.props.articulo.autor.nombre} </p> - <p className="fecha"> {this.props.articulo.fecha} </p>
                        </Block>
                        <Block className="titulo">{this.props.articulo.Titulo}</Block>
                        <Block className="img_cont display-flex flex-direction-column">
                            {/* <img src="../static/imgs/418464-PD8PXQ-214 1.png" alt="" /> */}
                            <img src={`http://localhost:1337${this.props.articulo.cover.url}`} alt="" />
                            <Block className="foot display-flex justify-content-flex-start align-items-center">
                                <p className="pieTitulo">Pie de foto</p> - <p className="pie">Pie de foto</p>
                            </Block>
                        </Block>
                    </Block>
                    <Block className="content display-flex align-items-flex-start">
                        <Block className="left_side">

                            <Block>
                                {this.props.articulo.description}
                                {/* aqui va el contenido */}
                            </Block>
                        </Block>

                        <Block className="right_side">
                            <Block className="ads side">
                            </Block>
                            <Block className="ads side">
                            </Block>
                        </Block>
                    </Block>
                    <Block>
                        {/* aqui van los comentarios */}
                    </Block>
                    <Block>
                        {/* share */}
                    </Block>
                    <Block>
                        {/* ads */}
                    </Block>
                    <Block>
                        <div>
                            <h1></h1>
                            <a href="">Mostrar mas</a>
                        </div>
                        {/* aqui va un swiper */}
                        {/* Recomendamos */}
                    </Block>
                </Card>
            </Block>
        );
    }
}