import React from 'react';
import Nav from '../components/general/navbar';
import LeftPanel from '../components/general/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '../components/general/footer';
import AdsTop from '../components/general/ads_top';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default () => (
    <Page pageContent={false} name="derecho_replica">
        <PageContent>
            {/* Top Navbar */}
            <Nav />
            {/* Page content */}
            <Block className="main_cont display-flex flex-direction-column justify-content-center">
                <AdsTop />
                <Block className="paneles">
                    <Block className="left_pan">
                        <LeftPanel />
                    </Block>
                    <Block className="center_pan">
                        {/* aqui va el panel central */}
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