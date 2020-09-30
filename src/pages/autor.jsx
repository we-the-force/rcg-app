import React, { useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanelAutor from '@/components/autores/right-panel-autor.jsx';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import AutorPanel from '@/components/autores/autor-panel.jsx'
import Footer from '@/components/general/footer';
import { useQuery } from '@apollo/client';
import { AutorPage } from '@/graphql/queries.graphql';
import AdsTop from '@/components/general/ads_top';
import { f7, f7ready } from 'framework7-react';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function Autor(props) {
    let { url } = props
    const { loading, error, data } = useQuery(AutorPage, {
        variables: { url }
    });

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (loading) return "loading...";
    if (error) return `Error!:  ${error.message}`;

    const { autor, autores } = data;
    const articulosNum = data.autorArticulos ? data.autorArticulos.groupBy.autor[0].connection.aggregate.count : 0;
    console.log(articulosNum);
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="autor">
            <PageContent>
                {/* ads */}
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                            <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                        </Block>
                        <Block className="center_pan">
                            {/* Aqui va el deste */}
                            <AdsTop />
                            <AutorPanel autor={autor} articulosNum={articulosNum}/>
                        </Block>
                        <Block className="right_pan">
                            {/* <RightPanelAutor autores={data.autores} autorInfo={data.autorInfo[0]} /> */}
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
} 