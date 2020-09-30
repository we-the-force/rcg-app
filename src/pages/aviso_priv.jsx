import React, {useEffect} from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import AvisoPrivacidadPanel from '@/components/estaticas/aviso-privacidad-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import {useQuery} from '@apollo/client';
import {AvisoPrivacidadPage} from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent,
    f7ready,
    f7
} from 'framework7-react';

export default function AvisoPrivacidad(props) {
    const {loading, error, data} = useQuery(AvisoPrivacidadPage);

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name="nosotros">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={data.tv_channels} radio_stations={data.radio_stations}/>
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations}/>
                            <LeftPanelTablet tv_channels={data.tv_channels} radio_stations={data.radio_stations} />
                        </Block>
                        <Block className="center_pan">
                            <AdsTop />
                            {/* aqui va el panel central */}
                            {/* <AboutUsPanel nosotrosInfo={data.nosotrosInfo}/> */}
                            <AvisoPrivacidadPanel avisoPriv={data.avisoPrivacidad}/>
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 