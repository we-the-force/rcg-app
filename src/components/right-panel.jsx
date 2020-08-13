import React, { Component } from 'react';
import {
    Block,
    Searchbar,
    Card,
    CardHeader,
} from 'framework7-react';

export default class RightPanel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block>
                <Searchbar
                ></Searchbar>
                <Card>
                    <CardHeader>
                        Destacado
                    </CardHeader>
                    <Block>
                        Noticia
                    </Block>
                    <Block>
                        Noticia
                    </Block>
                    <Block>
                        Noticia
                    </Block>
                    <Block>
                        Noticia
                    </Block>
                </Card>
                <Card>
                    <CardHeader>
                        Tags
                    </CardHeader>
                    
                </Card>
            </Block>
        );
    }
}