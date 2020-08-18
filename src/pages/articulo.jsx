import React, { Component } from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import ArticuloPanel from '../components/articulo-panel';
import {
    Page,
    Block,
    BlockTitle,
    Card,
    CardHeader,
    Row,
    Col,
    PageContent,
    CardFooter,
} from 'framework7-react';


export default () => (
    <Page pageContent={false} name="articulo">
        <PageContent>
            {/* ads */}
            {/* Top Navbar */}
            <Nav />
            <Block>{/* ads */}</Block>
            {/* Page content */}
            <Block className="display-flex flex-direction-co">
                {/* <Block> */}
                <LeftPanel />
                {/* </Block> */}
                <ArticuloPanel/>
                {/* <Block> */}
                <RightPanel />
                {/* </Block> */}
            </Block>
            <Footer />
        </PageContent>
    </Page>
);