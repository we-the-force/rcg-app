import React, { Component } from 'react';
import {
    Card,
    Block,
    Col,
    Row
} from 'framework7-react';

export default class NewsCard extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Card className="new_card">
                <Block className="header_cont display-flex justify-content-space-between">
                    <Block className="head display-flex justify-content-flex-start">
                        <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                    </Block>
                    <Block className="share display-flex align-items-center">
                        <p>Compartir:</p>
                        <a href="#" className="faceIcon display-flex justify-content-center align-items-center">
                            <img src="../static/icons/TW_Icon_x3.png" alt="" />
                        </a>
                        <a href="#" className="twitIcon display-flex justify-content-center align-items-center">
                            <img src="../static/icons/FB_Icon_x3.png" alt="" />
                        </a>
                    </Block>
                </Block>
                <Block className="title_cont">
                    <Block className="titulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Block>
                    <Block className="img_cont display-flex flex-direction-column">
                        <img src="../static/imgs/418464-PD8PXQ-214 1.png" alt="" />
                        <Block className="foot display-flex justify-content-flex-start align-items-center">
                            <p className="pieTitulo">Pie de foto</p> - <p className="pie">Pie de foto</p>
                        </Block>
                    </Block>
                </Block>
                <Block className="content display-flex flex-direction-column align-items-flex-start">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a href="">Ver más</a>
                </Block>
            </Card>
        );
    }
}