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
            <Block className="ads_cont display-flex">
                <Block className="left"></Block>
                <Block className="center">
                    <Block className="ads slim">{/* ads */}</Block>
                </Block>
                <Block className="right"></Block>
            </Block>
        );
    }
}