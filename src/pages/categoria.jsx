import React from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import CategoriaPanel from '../components/categoria-panel';
import Footer from '../components/footer';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default () => (
    <Page pageContent={false} name="categoria">
        <PageContent>
            <Nav />
            <Block className="ads slim">{/* ads */}</Block>
            {/* Top Navbar */}
            <Block className="main_cont">
                <Block className="left_pan">
                    <LeftPanel />
                </Block>
                <Block className="center_pan">
                    <CategoriaPanel />
                </Block>
                <Block className="right_pan">
                    <RightPanel />
                </Block>
            </Block>
            <Footer />
        </PageContent>
    </Page>
);