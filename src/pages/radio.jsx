import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import RadioPanel from '@/components/radio/radio-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import { f7, f7ready } from 'framework7-react';
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
    const { loading, error, data } = useQuery(SchedulePage, {
        variables: { station, date },
    });
    var currentStation = {};

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (data != undefined) {
        currentStation = data.radio_stations.find(x => x.url === station);
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    if (currentStation === undefined)
    {
        f7.views.main.router.navigate('/404/');
    }

    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name='tv'>
            {/* { console.log(data) } */}
            {/* {console.log(currentStation)} */}
            <PageContent>
                <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                            <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                        </Block>
                        <Block className="center_pan">
                            {
                                (currentStation != undefined) &&
                                <RadioPanel station={currentStation} station_list={data.radio_stations} prog={data.programacionSemanas} table_id={props.name} />
                            }
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