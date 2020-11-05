import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads/ads_top';
import TVPanel from '@/components/tv/tv-panel';
import NotFoundPanel from '@/components/not-found-panel';
import LoadingPanel from '@/components/loading/loading-panel';
import ErrorPanel from '@/components/error-panel';
import { f7, f7ready } from 'framework7-react';
import { useQuery } from '@apollo/client';
import { SchedulePage } from '@/graphql/queries.graphql';
import moment from 'moment';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function TV(props) {
    let { name } = props;
    let startOfWeek = moment().startOf('isoWeek').format('YYYY-MM-DD');
    const { loading, error, data } = useQuery(SchedulePage, {
        variables: { station: name, date: startOfWeek, radio_tv: true }
    });

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    let rightPanel = f7.methods.getArticulosRightPanel();
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();

    let centerPanel;

    if (loading) {
        centerPanel = <LoadingPanel />;
    } else if (error) {
        centerPanel = <ErrorPanel />;
    } else {
        let { tv, programacion } = data;
        centerPanel = tv.length > 0 ?
            <TVPanel canal={tv} canales={leftPanelTV} programacion={programacion} table_id={name} /> :
            <ErrorPanel error="No pudimos encontrar el canal que buscas" />;;
    }
    return (
        <Page pageContent={false} name="tv">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                {/* Page content */}
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
    );
}

