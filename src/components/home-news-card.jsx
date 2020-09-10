import React, {Component} from 'react';
import img1 from '@/static/imgs/418464-PD8PXQ-214 1.png';
import img2 from '@/static/imgs/fondo-sj-e1540342434825 1.png';
import img3 from '@/static/imgs/Rcg.png';
import img4 from '@/static/imgs/Image.png';
import {
    Card,
    Block,
    BlockHeader,
    BlockFooter,
    Col,
    Row
} from 'framework7-react';

// ano natsu no, kimi ga atama ni iru

export default class HomeNewsCard extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <a href={`/articulo/${this.props.articulo.url}/`}>
                {/* Pa cuando le piques al click y te tenga que mandar a la pagina del articulo
                 href={`/articulo/${this.props.articulo.url}`} */}
                <Block className="background">
                    <img src={`http://localhost:1337${this.props.articulo.cover.url}`} alt=""/>
                </Block>
                <Block className="content">
                    <BlockHeader className="categoria uppercase">{this.props.articulo.categoria.nombre}</BlockHeader>
                    <p className="text">{this.props.articulo.Titulo}</p>
                    <BlockFooter>
                    <p className="autor">{ this.props.articulo.autor.nombre }</p> &nbsp;-&nbsp; <p className="fecha">{ this.props.articulo.fecha }</p>
                    </BlockFooter>
                </Block>
            </a>
        )
    }
}