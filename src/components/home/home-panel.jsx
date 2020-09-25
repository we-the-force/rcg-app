import React, { Component } from 'react';
import NewsRelevantes from '@/components/cards_news/news_relevantes.jsx';
import NewsHome from '@/components/cards_news/news_home.jsx';
import SwiperNews from '@/components/general/swiper_news.jsx';
import {
    Block,
    Card,
    CardHeader
} from 'framework7-react';

export default class HomePanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Block className="home center_panel">
                <Card className="relevantes_home">
                    <CardHeader>
                        <p className="title">Lo Mas Relevante</p>
                    </CardHeader>
                    <Block id="grid1" className="grid-cont">
                        <NewsRelevantes id="item1" className="mob-large-sm2 tab-2large-sm2 desk-2large-large" />
                    </Block>
                    <Block id="grid2" className="grid-cont">
                        <NewsRelevantes id="item1" className="mob-small tab-medium desk-medium" />
                        <NewsRelevantes id="item2" className="mob-small tab-medium desk-medium" />
                        <NewsRelevantes id="item3" className="mob-large-small tab-medium desk-medium" />
                    </Block>
                    <Block id="grid3" className="grid-cont">
                        <NewsRelevantes id="item1" className="tab-large desk-large-small" />
                        <NewsRelevantes id="item2" className="tab-large desk-small" />
                        <NewsRelevantes id="item3" className="desk-small" />
                        <NewsRelevantes id="item4" className="desk-large" />
                    </Block>
                    {/* { this.props.newsInfo.articulosTop.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })} */}
                </Card>

                {/* aqui va un ad */}
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Locales</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>

                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosLocal.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })} */}
                </Card>
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Estatales</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosEstatal.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })} */}
                </Card>
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Nacionales</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosNacional.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })} */}
                </Card>
                {/* aqui va un ad */}
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Internacional</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosInternacional.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })} */}
                </Card>
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Deportes</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosDeporte.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })}
                     */}
                </Card>
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Espectaculos</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosEspectaculo.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })} */}
                </Card>
                {/* aqui va un ad */}
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Destacadas</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosDestacados.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })}
                     */}
                </Card>
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Fundación RCG</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosFundacion.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })}
                     */}
                </Card>
                <Card className="categoria">
                    <CardHeader>
                        <p className="title">Salud Y Cultura</p>
                        <p className="link-more">Mostrar más</p>
                    </CardHeader>
                    <Block className="grid-cont">
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                        <NewsHome className="grid-item" />
                    </Block>

                    <SwiperNews wot/>
                    {/* {this.props.newsInfo.articulosSaludCultura.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo} />)
                    })}
                     */}
                </Card>
                {/* aqui va un ad */}
            </Block>
        );
    }
}