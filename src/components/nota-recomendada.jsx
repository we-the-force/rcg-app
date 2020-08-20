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
                <BlockTitle>Lorem ipsum dolor sit amet...</BlockTitle>
                <BlockFooter>10 agosto 2020</BlockFooter>
                <img src="" alt="" srcset=""/>
            </Block>
        );
    }
}