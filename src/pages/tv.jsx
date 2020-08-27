import React from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import AdsTop from '../components/ads_top';
import TVPanel from '../components/tv-panel';
import { useQuery } from '@apollo/client';
import { CategoriasNavbar } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function TV() {
    const { loading, error, data } = useQuery(CategoriasNavbar);
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
                            <TVPanel />
                        </Block>
                        <Block className="right_pan">
                            <RightPanel />
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
}

