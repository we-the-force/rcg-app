import React, { Component } from 'react';
import {
    Card,
    Block,
} from 'framework7-react';

export default class adsTop extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="ads_cont">
                <Block className="left"></Block>
                <Block className="center">
                    <Block className="ads">{/* ads */}</Block>
                </Block>
                <Block className="right"></Block>
            </Block>
        );
    }
}