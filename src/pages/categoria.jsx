import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import CategoriaPanel from '@/components/categoria/categoria-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import { useQuery } from '@apollo/client';
import { CategoriaPage } from '@/graphql/queries.graphql';
import { f7,f7ready } from 'framework7-react';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';
export default function Categoria(props) {
    let categoria = props.nombre;
    const { loading, error, data } = useQuery(CategoriaPage, {
        variables: { categoria },
    });
    
    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual(categoria);
        });
    }, []);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="categoria">
            <PageContent>
                <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                {/* Top Navbar */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio}/>
                            <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                        </Block>
                        <Block className="center_pan">
                            {/* {JSON.stringify(this.$f7route.context.Articles)} */}
                            <CategoriaPanel articulos={data.articulos} categoria={categoria} />
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={data.articulosDestacadosRaros} />
                            <RightPanelTablet newsInfo={data.articulosDestacadosRaros} />
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    )
}