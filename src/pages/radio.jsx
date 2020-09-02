import React from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import RadioPanel from '../components/radio-panel';
import Footer from '../components/footer';
import AdsTop from '../components/ads_top';
import { useQuery } from '@apollo/client';
import { CategoriasNavbar, SchedulePage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';


export default function Radio(props) {
    console.log(props);

    let station = "1";
    let tv = false;
    const {loading, error, data } = useQuery(SchedulePage, {
        // variables: props.f7route.params.name 
        variables: { station, tv },
    });

    console.log("Data del radio");
    console.log(data);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name='tv'>
            <PageContent>
                <Nav categorias={data.categorias}/>
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop/>
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel/>
                        </Block>
                        <Block className="center_pan">
                            <RadioPanel prog={data.programacionSemanas}/>
                        </Block>
                        <Block className="right_pan">
                            <RightPanel/>
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    )
}