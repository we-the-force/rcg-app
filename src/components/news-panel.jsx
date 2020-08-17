import React, {Component} from 'react';
import NewsCard from './news-card';
import {
    Block,
    CardHeader
} from 'framework7-react';

export default class NewsPanel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render(){
        return (
            <Block>
                <CardHeader>Locales</CardHeader>
                {/* Lista de NewsCards */}
                <NewsCard/>
                {/* Ad */}
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </Block>
        );
    }
}