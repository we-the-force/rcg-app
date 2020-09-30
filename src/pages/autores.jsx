import React, {useEffect} from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanel from '@/components/general/right_panel/right-panel';
import AutoresPanel from '@/components/autores/autores-panel.jsx'
import Footer from '@/components/general/footer';
import { useQuery } from '@apollo/client';
import AdsTop from '@/components/general/ads_top';
import { AutoresPage } from '@/graphql/queries.graphql';
import { f7,f7ready } from 'framework7-react';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function Autores(props) {

    const {loading, error, data} = useQuery(AutoresPage);

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (loading) return "loading...";
    if (error) return `Error! ${error.message}`;

    const rightPanel = f7.methods.getArticulosRightPanel();
    const leftPanelTV = f7.methods.getTV();
    const leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="autores">
            <PageContent>
                {/* ads */}
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={data.tv_channels} radio_stations={data.radio_stations} />
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                            <LeftPanelTablet />
                        </Block>
                        <Block className="center_pan">
                            <AdsTop />
                            <AutoresPanel autores={data.autores}/>
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={rightPanel} />
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 

