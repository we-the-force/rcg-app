import React from 'react';
import Nav from '../components/navbar';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import ArticuloPanel from '../components/articulo-panel';
import AdsTop from '../components/general/ads_top';
import { useQuery } from '@apollo/client';
import { ArticuloPage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function Articulo(props) {
    let url = props.url;
    const { loading, error, data } = useQuery(ArticuloPage, {
        variables: { url }
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name="articulo">
            <PageContent>
                {/* ads */}
                {/* Top Navbar */}
                <Nav categorias={data.categorias}/>
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel />
                        </Block>
                        <Block className="center_pan">
                            {/* <ArticuloPanel articulo={this.$f7route.context.Article}/> */}
                            <ArticuloPanel articulo={data.articulos[0]} />
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