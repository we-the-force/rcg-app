import React from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import CategoriaPanel from '@/components/categoria/categoria-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import { useQuery } from '@apollo/client';
import { CategoriaPage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';
export default function Categoria(props) {
    var categoria = props.nombre;
    // console.log(`Categoria: ${categoria}`);
    const { loading, error, data } = useQuery(CategoriaPage, {
        variables: { categoria }
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name="categoria">
            <PageContent>
                <Nav categorias={data.categorias}/>
                {/* Top Navbar */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations}/>
                        </Block>
                        <Block className="center_pan">
                            {/* {JSON.stringify(this.$f7route.context.Articles)} */}
                            <CategoriaPanel articulos={data.articulos} categoria={categoria}/>
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={data.articulosDestacadosRaros}/>
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    )
}