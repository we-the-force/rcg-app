import React from 'react';
import Nav from '../components/navbar';
import Masthead from '../components/masthead';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import NewsCard from '../components/news-card';
import NewsPanel from '../components/news-panel';
import {
    Page,
    CardHeader,
    Block,
    Row,
    Col,
    BlockTitle,
} from 'framework7-react';

export default() => (
    <Page name="news">
        {/* ads */}
        <Nav/>
        {/* Top Navbar */}
        <Block className="display-flex flex-direction-co">
            <Block className="w20">
                <LeftPanel/>
            </Block>
            <Block className="w50">
                <NewsPanel/>
            </Block>
            <Block className="w30">
                <RightPanel/>
            </Block>
        </Block>
    </Page>
);