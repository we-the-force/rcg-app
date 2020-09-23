import React, { Component } from 'react';
import HomeNewsCard from '../home-news-card.jsx';
import NewsRelevantes from '@/components/cards_news/news_relevantes.jsx';
import {
    Block,
    Card,
    CardHeader,
    CardFooter
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
                        <p className="link-more">Mostrar mas</p>
                    </CardHeader>
                    <Block id="grid1" className="grid-cont">
                        <NewsRelevantes id="item1" className="mob-large-sm2 tab-2large-sm2 desk-2large-large"/>
                    </Block>
                    <Block id="grid2" className="grid-cont">
                        <NewsRelevantes id="item1" className="mob-small tab-medium desk-medium"/>
                        <NewsRelevantes id="item2" className="mob-small tab-medium desk-medium"/>
                        <NewsRelevantes id="item3" className="mob-large-small tab-medium desk-medium"/>
                    </Block>
                    <Block id="grid3" className="grid-cont">
                        <NewsRelevantes id="item1" className="tab-large desk-large-small"/>
                        <NewsRelevantes id="item2" className="tab-large desk-small"/>
                        <NewsRelevantes id="item3" className="desk-small"/>
                        <NewsRelevantes id="item4" className="desk-large"/>
                    </Block>
                    {/* { this.props.newsInfo.articulosTop.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })} */}
                </Card>

                {/* aqui va un ad */}
                <Card>
                    <CardHeader>Locales</CardHeader>
                    { this.props.newsInfo.articulosLocal.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Estatales</CardHeader>
                    { this.props.newsInfo.articulosEstatal.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Nacionales</CardHeader>
                    { this.props.newsInfo.articulosNacional.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                {/* aqui va un ad */}
                <Card>
                    <CardHeader>Internacional</CardHeader>
                    { this.props.newsInfo.articulosInternacional.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Deportes</CardHeader>
                    { this.props.newsInfo.articulosDeporte.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Espectaculos</CardHeader>
                    { this.props.newsInfo.articulosEspectaculo.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                {/* aqui va un ad */}
                <Card>
                    <CardHeader>Destacadas</CardHeader>
                    { this.props.newsInfo.articulosDestacados.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Fundación RCG</CardHeader>
                    { this.props.newsInfo.articulosFundacion.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Salud Y Cultura</CardHeader>
                    { this.props.newsInfo.articulosSaludCultura.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                {/* aqui va un ad */}
            </Block>
        );
    }
}