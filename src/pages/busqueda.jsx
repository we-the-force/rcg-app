import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import BusquedaPanel from '@/components/busqueda/busqueda-panel';

import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import { f7, f7ready } from 'framework7-react';
import { useQuery } from '@apollo/client';
import { BusquedaPage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent,
    Card,
    CardHeader
} from 'framework7-react';

export default function Busqueda(props) {
    let terms = formatParams(props.f7route.params.params);
    const { loading, error, data } = useQuery(BusquedaPage, {
        variables: {terms}
    });

    //efecto para quitar etiqueta roja
    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    function formatParams(searchTerms) {
        let auxTerms = searchTerms.trim().toString().split(" ");

        let finalParams = [];
        auxTerms.forEach((keyword) => {
            let trimmedKeyword = keyword.trim();
            if (trimmedKeyword !== "")
            {
                finalParams.push(trimmedKeyword);
            }
        });

        return finalParams;
    }

    var searchResults = []
    if (data != undefined)
    {
        data.searchTitulo.forEach((articulo) => {
            searchResults.push(articulo);
        });
        data.searchTag.forEach((articulo) => {
            if (searchResults.filter(a => a.url === articulo.url).length === 0)
            {
                searchResults.push(articulo);
            }
        });
    }

    if (loading) return "loading...";
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name="busqueda">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} />
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations} />
                            <LeftPanelTablet />
                        </Block>
                        <Block className="center_pan">
                            <AdsTop />
                            <BusquedaPanel/>
                            {/* {
                                (searchResults.length === 0) &&
                                <Block className="categoria_panel center_panel">
                                    <Card className="head">
                                        <CardHeader>Resultados</CardHeader>
                                    </Card>
                                    <Card>
                                        <p>Tu busqueda no obtuvo resultados, intenta con diferentes terminos</p>
                                    </Card>
                                </Block>
                            } */}
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
    );
}