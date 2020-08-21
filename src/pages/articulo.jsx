import React, { Component } from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import ArticuloPanel from '../components/articulo-panel';
import AdsTop from '../components/ads_top';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default class Articulo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Page pageContent={false} name="articulo">
                <PageContent>
                    {/* ads */}
                    {/* Top Navbar */}
                    <Nav />
                    <Block className="main_cont display-flex flex-direction-column justify-content-center">
                        <AdsTop />
                        <Block className="paneles">
                            <Block className="left_pan">
                                <LeftPanel />
                            </Block>
                            <Block className="center_pan">
                                {/* <ArticuloPanel articulo={this.$f7route.context.Article}/> */}
                                <ArticuloPanel articulo={this.$f7route.context.Article}/>
                            </Block>
                            <Block className="right_pan">
                                <RightPanel />
                            </Block>
                        </Block>
                    </Block>
                    <Footer />
                </PageContent>
            </Page>
        );
    }
}