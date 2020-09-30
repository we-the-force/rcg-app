import React, { Component } from 'react';
import SwiperNews from '@/components/general/swiper_news.jsx';
import marked from 'marked';
import TWIconx3 from '@/static/icons/TW_Icon_x3.png';
import FBIconx3 from '@/static/icons/FB_Icon_x3.png';
import { useMutation, gql } from '@apollo/client';
import { UpdateVisitas } from '@/graphql/queries.graphql';
import {onError} from "apollo-link-error";
import {
    Block,
    Card,
    CardHeader,
    Swiper,
    SwiperSlide
} from 'framework7-react';
// import { render } from 'stylus';




// export default function ArticuloPanel(props) {
export default class ArticuloPanel extends Component {
    constructor(props) {
        super(props);
        // var MarkdownIt = require('markdown-it');
        // this.md = new MarkdownIt();
        // this.result = this.md.render(props.articulo.description);
        this.result = marked(props.articulo.description);

        console.log("El this.result:\r\n",this.result);
    }
    componentDidMount() {
        console.log("Mounted");
        FB.XFBML.parse();
    }
    render() {
        return (
            <Block className="articulo_panel center_panel">
                <Card className="articulo">
                    <Block className="header_cont display-flex justify-content-space-between">
                        <CardHeader>
                            <a href={`/categoria/${this.props.articulo.categoria.nombre}`}>{this.props.articulo.categoria.nombre}</a>
                        </CardHeader>
                        <Block className="share display-flex align-items-center">
                            <p>Compartir:</p>
                            <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                                <img src={TWIconx3} alt="" />
                            </a>
                            <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                                <img src={FBIconx3} alt="" />
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
                            <img src={`http://${window.location.hostname}:1337${this.props.articulo.cover.url}`} alt="" />
                            <Block className="foot display-flex justify-content-flex-start align-items-center">
                                <p className="pieTitulo">Pie de foto</p> - <p className="pie">Pie de foto</p>
                            </Block>
                        </Block>
                    </Block>
                    <Block className="content display-flex align-items-flex-start">
                        <Block className="left_side">
    
                            <Block className="articulo_cont">
                                <p dangerouslySetInnerHTML={{ __html: this.result }}>
                                    {/* {console.log("La weaaaaa", this.result)} */}
                                    {/* {this.result} */}
                                    {/* {this.props.articulo.description}

                                    aaah
                                    <br/>
                                    <br/>
                                    {this.md.render(this.props.articulo.description)} */}
                                    {/* aqui va el contenido */}
                                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                                </p>
                                {/* <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                                </p> */}
                                <Block className="quotes display-flex align-items-center">
                                    {/* <p className="comillas up">&#8220;</p> */}
                                    <p className="text"> El cafe con leche es como el cafe, pero con leche</p>
                                    {/* <p className="comillas down">&#8221;</p> */}
                                </Block>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                                </p>
                            </Block>
                            <Block className="tags display-flex justify-content-flex-start align-items-flex-start">
                                <p>
                                    Tags Relacionados:
                                </p>
                                <Block className="links">
                                    <a href=""> Coahuila </a>
                                    <a href=""> Saltillo </a>
                                    <a href=""> Reporte </a>
                                    <a href=""> Alcalde </a>
                                    <a href=""> RCG </a>
                                </Block>
                            </Block>
                            <Block className="comments">
    
                            </Block>
                            <Block className="share display-flex align-items-center">
                                <p>Compartir:</p>
                                <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                                    <img src={TWIconx3} alt="" />
                                </a>
                                <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                                    <img src={FBIconx3} alt="" />
                                </a>
                            </Block>
                            <Block>
                                Comentario
                                <div className="fb-comments" data-href={`http://${window.location.hostname}:8080/articulo/${this.props.articulo.url}/`} data-numposts="" data-width=""></div>
                            </Block>
                        </Block>
    
                        <Block className="right_side">
                            <Block className="ads side">
                            </Block>
                            <Block className="ads side">
                            </Block>
                        </Block>
                    </Block>
                    <Block className="ads_cont">
                        <Block className="ads bar">
                        </Block>
                    </Block>
                    <SwiperNews articulos={[]}/>
                </Card>
            </Block>
        )
    }
    
}
// export default class ArticuloPanel extends Component {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
            
//         );
//     }
// }