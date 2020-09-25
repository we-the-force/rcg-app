import React, { Component } from 'react';
import IMG from '@/static/imgs/IMG_01.png'
import {
    Block,
    BlockTitle,
    BlockFooter
} from 'framework7-react';

export default class NewsSwiper extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="nota_recomend">
                <img src={IMG} alt="" srcSet="" />
                <Block className="cont">
                    <BlockTitle>Lorem ipsum dolor sit amet... </BlockTitle>
                    <BlockFooter>10 agosto 2020</BlockFooter>
                </Block>
            </Block>
        );
    }
}