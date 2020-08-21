import React, { Component } from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import ArticuloPanel from '../components/articulo-panel';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';


export default () => (
    <Page pageContent={false} name="articulo">
        <PageContent>
            {/* ads */}
            {/* Top Navbar */}
            <Nav />
            <Block className="ads slim">{/* ads */}</Block>
            {/* Page content */}
            <Block className="main_cont">
                <Block className="left_pan">
                    <LeftPanel />
                </Block>
                <Block className="center_pan">
                    <ArticuloPanel />
                </Block>
                <Block className="right_pan">
                    <RightPanel />
                </Block>
            </Block>
            <Footer />
        </PageContent>
    </Page>
);