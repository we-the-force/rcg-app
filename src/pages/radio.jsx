import React from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import RadioPanel from '@/components/radio/radio-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import { useQuery } from '@apollo/client';
import { CategoriasNavbar, SchedulePage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';


export default function Radio(props) {
    let station = props.f7route.params.name.replace("-", ".");
    let tv = false;
    // console.log(`Station: '${station}', tv: ${tv}`)
    const {loading, error, data } = useQuery(SchedulePage, {
        // variables: props.f7route.params.name 
        variables: { station, tv },
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name='tv'>
            {/* { console.log(data) } */}
            <PageContent>
                <Nav categorias={data.categorias}/>
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop/>
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel/>
                        </Block>
                        <Block className="center_pan">
                            <RadioPanel prog={data.programacionSemanas} table_id={props.name}/>
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