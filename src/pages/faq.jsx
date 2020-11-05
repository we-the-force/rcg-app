import React, { useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads/ads_top';
import FaqPanel from '@/components/estaticas/faq-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import LoadingPanel from '@/components/loading/loading-panel';
import ErrorPanel from '@/components/error-panel';
import { useQuery } from '@apollo/client';
import { FaqPage } from '@/graphql/queries.graphql';

import {
    Page,
    Block,
    PageContent,
    f7ready,
    f7
} from 'framework7-react';

export default function Faq(props) {
    const { loading, error, data } = useQuery(FaqPage);

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    let centerPanel;
    
    if (loading) {
        centerPanel = <LoadingPanel />;
    } else if (error) {
        centerPanel = <ErrorPanel /> ;
    } else {
        const { faq } = data;
        centerPanel = <FaqPanel faq={faq} />;
    }

    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="faq">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                            <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                        </Block>
                        <Block className="center_pan wo_right_pan">
                            <AdsTop />
                            {/* aqui va el panel central */}
                            {centerPanel}
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 