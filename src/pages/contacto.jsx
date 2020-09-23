import React, {useEffect} from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import ContactoPanel from '@/components/estaticas/contacto-panel';
import {useQuery} from '@apollo/client';
import {AboutUsPage} from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent,
    f7ready,
    f7
} from 'framework7-react';

export default function AboutUs(props) {
    const {loading, error, data} = useQuery(AboutUsPage);

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
                <Nav categorias={f7.methods.getCategorias()}/>
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations}/>
                        </Block>
                        <Block className="center_pan">
                            {/* aqui va el panel central */}
                            {/* <AboutUsPanel nosotrosInfo={data.nosotrosInfo}/> */}
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 