import React, { Component } from 'react';
import {
    Block,
    Link
} from 'framework7-react';

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block>
                <Block>
                    <img src="../static/imgs/Logo_blanco.png" alt=""/>
                </Block>
                <Block>
                <Link href={false}>Derecho de replica</Link>
                <Link href={false}>Aviso de privacidad</Link>
                <Link href={false}>OPI 2017</Link>
                <Link href={false}>OPI 2018</Link>
                <Link href={false}>SEG</Link>
                <p>©2020 RCG</p>
                </Block>
            </Block>
        );
    }
}