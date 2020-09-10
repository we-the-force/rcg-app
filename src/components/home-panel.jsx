import React, { Component } from 'react';
import HomeNewsCard from '../components/home-news-card.jsx';
import {
    Block,
    Card,
    CardHeader,
    CardFooter
} from 'framework7-react';

export default class HomePanel extends Component {
    constructor(props) {
        super(props);
        // console.log("Props:");
        // console.log(props);
    }
    render() {
        return (
            <Block>
                <Card>
                    <CardHeader>Lo Mas Relevante</CardHeader>
                    { this.props.newsInfo.articulosTop.map((articulo, i) => {
                        return (<HomeNewsCard key={i} articulo={articulo}/>)
                    })}
                    <CardFooter>Mostrar mas</CardFooter>
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