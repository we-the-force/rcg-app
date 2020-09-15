import React from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default () => (
    <Page pageContent={false} name="espectaculares">
        <PageContent>
            {/* Top Navbar */}
            <Nav /> {/* navbar espectaculares */}
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