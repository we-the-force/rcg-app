import React from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import RadioPanel from '@/components/radio/radio-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import { useQuery } from '@apollo/client';
import { CategoriasNavbar, SchedulePage } from '@/graphql/queries.graphql';
import moment from 'moment';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';


export default function Radio(props) {
    let station = props.f7route.params.name;
    let date = moment().startOf('week').format('YYYY-MM-DD');
    // console.log(`Station: '${station}', tv: ${date}`)
    const {loading, error, data } = useQuery(SchedulePage, {
        // variables: props.f7route.params.name 
        variables: { station, date },
    });
    
    var currentStation = {};
    if (data != undefined)
    {
        currentStation = data.radio_stations.find(x => x.url === station);

    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name='tv'>
            {/* { console.log(data) } */}
            {console.log(currentStation)}
            <PageContent>
                <Nav categorias={data.categorias}/>
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop/>
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations}/>
                        </Block>
                        <Block className="center_pan">
                            <RadioPanel station={currentStation} station_list={data.radio_stations} prog={data.programacionSemanas} table_id={props.name}/>
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