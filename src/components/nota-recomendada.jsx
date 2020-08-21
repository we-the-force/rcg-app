import React, { Component } from 'react';
import {
    Block,
    BlockTitle,
    BlockFooter
} from 'framework7-react';

export default class NewsCard extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="nota_recomend">
                <img src="../static/imgs/IMG_01.png" alt="" srcSet="" />
                <Block className="cont">
                    <BlockTitle>Lorem ipsum dolor sit amet... </BlockTitle>
                    <BlockFooter>10 agosto 2020</BlockFooter>
                </Block>
            </Block>
        );
    }
}