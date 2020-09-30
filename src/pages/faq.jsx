import React, {useEffect} from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import FaqPanel from '@/components/estaticas/faq-panel';

import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';

import {useQuery} from '@apollo/client';
import {FaqPage} from '@/graphql/queries.graphql';

import {
    Page,
    Block,
    PageContent,
    f7ready,
    f7
} from 'framework7-react';

export default function Faq(props) {
    const {loading, error, data} = useQuery(FaqPage);

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <Page pageContent={false} name="faq">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={data.tv_channels} radio_stations={data.radio_stations}/>
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations}/>
                            <LeftPanelTablet newsInfo={data.articulosDestacadosRaros} />
                        </Block>
                        <Block className="center_pan">
                            {/* aqui va el panel central */}
                            <FaqPanel faqInfo={data.faqInfo}/>
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 