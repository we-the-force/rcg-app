import React, { Component, Fragment } from 'react';
import RCGlogo from '@/static/imgs/LOGO_negro_sobre_blanco.png';
import img1 from '@/static/imgs/418464-PD8PXQ-214 1.png';
import img2 from '@/static/imgs/fondo-sj-e1540342434825 1.png';
import img3 from '@/static/imgs/Rcg.png';
import img4 from '@/static/imgs/Image.png';
import {
    Swiper,
    SwiperSlide,
    Block,
    BlockHeader,
    BlockFooter, Link
} from 'framework7-react';
export default class Masthead extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let articulos = this.props.articulos ? this.props.articulos : [''];
        return (
            <Block className="masthead">
                {articulos[0] !== '' &&
                    <Fragment>
                        <Block className="logo">
                            <img src={RCGlogo} alt="" />
                        </Block>
                        <Swiper pagination params={{ loop: true }}>
                            {
                                articulos.map((bannerItem, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Block className="background">
                                                <img src={`http://${window.location.hostname}:1337${bannerItem.articulo.cover.url}`} alt="" />
                                                <Block className="label">
                                                    <Link className="categoria upperscale">{bannerItem.articulo.categoria.nombre}</Link>
                                                </Block>
                                                <Block className="bottom-cont">
                                                    <Block className="label-desk">
                                                        <Link className="categoria upperscale">{bannerItem.articulo.categoria.nombre}</Link>
                                                    </Block>
                                                    <Link className="title" href={`/articulo/${bannerItem.articulo.url}/`}>{bannerItem.articulo.Titulo}</Link>
                                                    <BlockFooter>
                                                        <Link className="autor" href={'/autores'}>{bannerItem.articulo.autor.nombre}</Link>&nbsp;-&nbsp;
                                                        <p className="fecha">{bannerItem.articulo.fecha}</p>
                                                    </BlockFooter>
                                                </Block>
                                            </Block>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </Fragment>
                }
            </Block>
        );
    }
}