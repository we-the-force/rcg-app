import React, { Component, Fragment } from 'react';
import IMG from '@/static/imgs/IMG_01.png'
import {
    Block,
    BlockHeader,
    BlockTitle,
    BlockFooter
} from 'framework7-react';

export default class DestItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log("DestItem");
        console.log(props);
    }
    render() {
        let bord = this.props.nobord ? 'nobord' : '';
        return (
            <Block className={"dest-item " + bord}>
                {this.props.image &&
                    <a className="img_cont">
                        <img src={`http://localhost:1337${this.props.articulo.cover.url}`} alt="" />
                    </a>
                }
                <Block className="dest-cont">
                    <BlockHeader>
                        <a className="autor">{this.props.articulo.autor.nombre}</a>&nbsp;-&nbsp;<p className="fecha">{this.props.articulo.fecha}</p>
                    </BlockHeader>
                    <BlockTitle>
                        {this.props.articulo.Titulo}
                    </BlockTitle>
                    <p className="cont">{this.props.articulo.description}</p>
                    <BlockFooter className="display-flex justify-content-space-between">
                        <p className="tag">Tag&nbsp;{
                            this.props.articulo.tags.map((tag, i) => {
                                console.log(`Current tag`,tag.tag);
                                let isLastPos = !(i < (this.props.articulo.tags.length - 1));
                                if (isLastPos)
                                {
                                    return (<a href="" className="etiqueta" key={i}>{tag.tag}</a>);
                                }
                                else
                                {
                                    return (<Fragment key={i}><a href="" className="etiqueta">{tag.tag}</a>, </Fragment>);
                                }
                                // return (<DestItem image={true} key={i} articulo={articulo}/>)
                            })
                        }</p>
                        <a className="more">Mostrar mas</a>
                    </BlockFooter>

                </Block>
            </Block>
        );
    }
}