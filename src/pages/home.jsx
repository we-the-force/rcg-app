import React from 'react';
import Nav from '../components/general/navbar';
import Masthead from '../components/masthead';
import LeftPanel from '../components/general/left-panel';
import RightPanel from '../components/general/right-panel';
import Footer from '../components/general/footer';
import AdsTop from '../components/general/ads_top';
import HomePanel from '../components/home-panel';
import { useQuery } from '@apollo/client';
import { CategoriasNavbar, HomePage } from '@/graphql/queries.graphql';
import {
  Page,
  Block,
  PageContent
} from 'framework7-react';

export default function Home() {
  // console.log(CategoriasNavbar);
  const { loading, error, data } = useQuery(HomePage);
  // console.log("Loading data");
  // console.log(data);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <Page pageContent={false} name="home">
      <PageContent>
        {/* ads */}
        {/* masthead */}
        <Masthead home articulos={data.articulosBanner}/>
        {/* Top Navbar */}
        <Nav categorias={data.categorias} />
        {/* Page content */}
        <Block className="main_cont display-flex flex-direction-column justify-content-center">
          <AdsTop />
          <Block className="paneles">
            <Block className="left_pan">
              <LeftPanel />
            </Block>
            <Block className="center_pan">
              <HomePanel newsInfo={data}/>
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