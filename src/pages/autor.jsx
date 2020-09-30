import React, {useEffect} from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanelAutor from '@/components/autores/right-panel-autor.jsx';
import AutorPanel from '@/components/autores/autor-panel.jsx'
import Footer from '@/components/general/footer';
import { useQuery } from '@apollo/client';
import { AutorPage } from '@/graphql/queries.graphql';
import AdsTop from '@/components/general/ads_top';
import { f7,f7ready } from 'framework7-react';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function Autor(props) {
    let autorID = props.f7route.params.autor
    const {loading, error, data} = useQuery(AutorPage, {
        variables: {autorID}
    });

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (loading) return "loading...";
    if (error) return `Error!:  ${error.message}`;

    return (
        <Page pageContent={false} name="autor">
            <PageContent>
                {/* ads */}
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={data.tv_channels} radio_stations={data.radio_stations} />
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations} />
                        </Block>
                        <Block className="center_pan">
                            {/* Aqui va el deste */}
                            <AutorPanel autorInfo={data.autorInfo[0]}/>
                        </Block>
                        <Block className="right_pan">
                            <RightPanelAutor autores={data.autores} autorInfo={data.autorInfo[0]} />
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 