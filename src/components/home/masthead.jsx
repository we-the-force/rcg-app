import React, { Component } from 'react';
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
    BlockFooter
} from 'framework7-react';
export default class Masthead extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Block className="masthead">
                <Block className="logo">
                    <img src={RCGlogo} alt="" />
                </Block>
                <Swiper pagination params={{ loop: true }}>
                    {
                        this.props.articulos.map((bannerItem, i) => {
                            return(
                                <SwiperSlide key={i}>
                                    <Block className="background">
                                        <img src={`http://149.28.252.152:1337${bannerItem.articulo.cover.url}`} alt=""/>
                                    </Block>
                                    <Block className="content">
                                        <BlockHeader className="categoria upperscale">{bannerItem.articulo.categoria.nombre}</BlockHeader>
                                        <a className="text" href={`/articulo/${bannerItem.articulo.url}/`}>{bannerItem.articulo.Titulo}</a>
                                        <BlockFooter>
                                            <p className="autor">{bannerItem.articulo.autor.nombre}@</p> &nbsp;-&nbsp; <p className="fecha">{bannerItem.articulo.fecha}</p>
                                        </BlockFooter>
                                    </Block>
                                </SwiperSlide>
                            )
                        })
                    }

                    {/* <SwiperSlide>
                        <Block className="background">
                            <img src={img1} alt=""/>
                        </Block>
                        <Block className="content">
                            <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <BlockFooter>
                                <p className="autor">Nombre Reporter@</p> &nbsp;-&nbsp; <p className="fecha">11 Agosto 2020</p>
                            </BlockFooter>
                        </Block>
                    </SwiperSlide> */}

                    {/* <SwiperSlide>
                        <Block className="background">
                            <img src={img2} alt=""/>
                        </Block>
                        <Block className="content">
                            <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <BlockFooter>
                                <p className="autor">Nombre Reporter@</p> &nbsp;-&nbsp; <p className="fecha">11 Agosto 2020</p>
                            </BlockFooter>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Block className="background">
                            <img src={img3} alt=""/>
                        </Block>
                        <Block className="content">
                            <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <BlockFooter>
                                <p className="autor">Nombre Reporter@</p> &nbsp;-&nbsp; <p className="fecha">11 Agosto 2020</p>
                            </BlockFooter>
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Block className="background">
                            <img src={img4} alt=""/>
                        </Block>
                        <Block className="content">
                            <BlockHeader className="categoria uppercase">estatal</BlockHeader>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <BlockFooter>
                                <p className="autor">Nombre Reporter@</p> &nbsp;-&nbsp; <p className="fecha">11 Agosto 2020</p>
                            </BlockFooter>
                        </Block>
                    </SwiperSlide> */}
                </Swiper>
            </Block>
        );
    }
}