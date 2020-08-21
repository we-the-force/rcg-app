import React, { Component } from 'react';
import {
    Block,
    Card,
    CardHeader,
    CardFooter
} from 'framework7-react';

export default class HomePanel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Block>
                <Card>
                    <CardHeader>Lo Mas Relevante</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                {/* aqui va un ad */}
                <Card>
                    <CardHeader>Locales</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Estatales</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                {/* aqui va un ad */}
                <Card>
                    <CardHeader>Internacional</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Deportes</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Espectaculos</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                {/* aqui va un ad */}
                <Card>
                    <CardHeader>Destacadas</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Fundación RCG</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Salud Y Cultura</CardHeader>
                    <CardFooter>Mostrar mas</CardFooter>
                </Card>
                {/* aqui va un ad */}
            </Block>
        );
    }
}