import React, { useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import CatalogoPanel from '@/components/catalogo/catalogo-panel';
import LoadingPanel from '@/components/loading/loading-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import { useQuery } from '@apollo/client';
import { CatalogoPage } from '@/graphql/queries.graphql';

import {
    Page,
    Block,
    PageContent,
    f7ready,
    f7
} from 'framework7-react';

export default function Catalogo(props) {
    const { loading, error, data } = useQuery(CatalogoPage);

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    let centerPanel = loading ? error ? 'error' :
        <LoadingPanel /> :
        <CatalogoPanel data={data} />;
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="catalogo_espectaculares">
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