import React, { useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import ContactoPanel from '@/components/estaticas/contacto-panel';
import LoadingPanel from '@/components/loading/loading-panel';
import ErrorPanel from '@/components/error-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import { useQuery } from '@apollo/client';
import { ContactPage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent,
    f7ready,
    f7
} from 'framework7-react';

export default function AboutUs(props) {
    const { loading, error, data } = useQuery(ContactPage);

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
        let { contactInfo } = data;
        centerPanel = <ContactoPanel contactInfo={contactInfo} />;
    }
    
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    let rightPanel = f7.methods.getArticulosRightPanel();
    return (
        <Page pageContent={false} name="nosotros">
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
                        <Block className="center_pan">
                            {/* aqui va el panel central */}
                            <AdsTop />
                            {centerPanel}
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={rightPanel} />
                            <RightPanelTablet newsInfo={rightPanel} />
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 