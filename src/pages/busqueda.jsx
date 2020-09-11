import React from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import AdsTop from '../components/general/ads_top';
import { useQuery } from '@apollo/client';
import { BusquedaPage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function Busqueda(props) {
    console.log("busqueda props:");
    console.log(props);

    const {loading, error, data} = useQuery(BusquedaPage);

    if (loading) return "loading...";
    if (error) return `Error! ${error.message}`;
    
    return  (
        <Page pageContent={false} name="busqueda">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={data.categorias}/>
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
                            <RightPanel newsInfo={data.articulosDestacadosRaros}/>
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
}