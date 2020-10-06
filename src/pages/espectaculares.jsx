import React, { useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import EspectacularPanel from '@/components/espectaculares/espectacular-panel';


import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';

import {useQuery} from '@apollo/client';
import {EspectacularPage} from '@/graphql/queries.graphql';

import {
    Page,
    Block,
    PageContent,
    f7ready,
    f7
} from 'framework7-react';

export default function Espectaculares(props) {
    const {loading, error, data} = useQuery(EspectacularPage);

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="espectaculares">
            <PageContent>
                {/* Top Navbar */}
                <Nav espectaculares categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio}/> {/* navbar espectaculares */}
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio}/>
                            <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                        </Block>
                        <Block className="center_pan">
                            <EspectacularPanel espectacularInfo={data.espectacularInfo} clientes={data.clientes}/>
                            {/* aqui va el panel central */}
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 