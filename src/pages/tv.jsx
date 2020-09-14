import React from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import TVPanel from '@/components/tv/tv-panel';
import { useQuery } from '@apollo/client';
import { CategoriasNavbar, SchedulePage } from '@/graphql/queries.graphql';
import moment from 'moment';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function TV(props) {
    let station = props.f7route.params.name.replace("-", ".");
    let date = moment().startOf('week').format('YYYY-MM-DD');
    const { loading, error, data } = useQuery(SchedulePage,{
        variables: {station, date}
    });

    console.log('data de tv', data);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name="tv">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={data.categorias}/>
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel />
                        </Block>
                        <Block className="center_pan">
                            <TVPanel prog={data.programacionSemanas} table_id={props.name}/>
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={data.articulosDestacadosRaros}/>
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
}

