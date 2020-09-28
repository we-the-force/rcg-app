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
        const { banner, relevante } = this.props;
        /* banner contiene los articulos del banner */
        /* relevante contiene los mas relevantes en caso de que no se complete con el banner */
        /* accedo solo a los valores que necesito */
        let banners = banner.map((val) => {
            return {
                id: val.articulo.id,
                cover: val.articulo.cover,
                categoria: val.articulo.categoria,
                url: val.articulo.url,
                Titulo: val.articulo.Titulo,
                autor: val.articulo.autor,
                fecha: val.articulo.fecha
            }
        });

        let relevantes = relevante.map((val) => {
            return {
                id: val.id,
                cover: val.cover,
                categoria: val.categoria,
                url: val.url,
                Titulo: val.Titulo,
                autor: val.autor,
                fecha: val.fecha
            }
        });
        /* concateno los arreglos */
        let articulos = banners.concat(relevantes)

        /* quito los repetidos */
        for (let i = 0; i < articulos.length; i++) {
            for (let j = i + 1; j < articulos.length; j++) {
                if (articulos[i].id === articulos[j].id) {
                    articulos.splice(j, 1)
                }
            }
        }

        /* traigo solo los primeros 10 */
        articulos = articulos.slice(0, 9);

        return (
            <Block className="masthead">
                {articulos.length > 0 &&
                    <Fragment>
                        <Block className="logo">
                            <img src={RCGlogo} alt="" />
                        </Block>
                        <Swiper pagination params={{ loop: true }}>
                            {
                                articulos.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Block className="background">
                                                <img src={`http://${window.location.hostname}:1337${item.cover.url}`} alt="" />
                                                <Block className="label">
                                                    <Link className="categoria upperscale">{item.categoria.nombre}</Link>
                                                </Block>
                                                <Block className="bottom-cont">
                                                    <Block className="label-desk">
                                                        <Link className="categoria upperscale">{item.categoria.nombre}</Link>
                                                    </Block>
                                                    <Link className="title" href={`/articulo/${item.url}/`}>{item.Titulo}</Link>
                                                    <BlockFooter>
                                                        <Link className="autor" href={'/autores'}>{item.autor.nombre}</Link>&nbsp;-&nbsp;
                                                        <p className="fecha">{item.fecha}</p>
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