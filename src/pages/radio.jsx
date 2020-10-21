import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import RadioPanel from '@/components/radio/radio-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import NotFoundPanel from '@/components/not-found-panel';
import { f7, f7ready } from 'framework7-react';
import { useQuery } from '@apollo/client';
import { SchedulePageRadio } from '@/graphql/queries.graphql';
import moment from 'moment';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';


export default function Radio(props) {
    //let station = props.f7route.params.name;
    let { name } = props;
    let startOfWeek = moment().startOf('isoWeek').format('YYYY-MM-DD');
    //let date = moment().startOf('week').format('YYYY-MM-DD');
    const { loading, error, data } = useQuery(SchedulePageRadio, {
        variables: { station: name, date: startOfWeek, radio_tv: false }
    });
    var currentStation = {};

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    if (currentStation === undefined)
    {
        f7.views.main.router.navigate('/404/');
    }

    let { radio, programacion } = data;
    let rightPanel = f7.methods.getArticulosRightPanel();
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    let centerPanel = radio.length > 0 ?
        <RadioPanel estacion={radio} estaciones={leftPanelRadio} programacion={programacion} table_id={name} /> :
        <NotFoundPanel />;
    return (
        <Page pageContent={false} name='radio'>
            <PageContent>
                <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                            <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                        </Block>
                        <Block className="center_pan">
                            <AdsTop />
                            {centerPanel}
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={rightPanel} />
                            <RightPanelTablet newsInfo={rightPanel} />
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    )
}