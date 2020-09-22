import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import Masthead from '@/components/home/masthead';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';

import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import HomePanel from '@/components/home/home-panel';
import { f7, f7ready } from 'framework7-react';
import { useQuery } from '@apollo/client';
import { CategoriasNavbar, HomePage } from '@/graphql/queries.graphql';
import {
  Page,
  Block,
  PageContent
} from 'framework7-react';

export default function Home(props) {
  //query de la pagina
  const { loading, error, data } = useQuery(HomePage);

  //efecto para quitar etiqueta roja
  useEffect(() => {
    f7ready((f7) => {
      f7.methods.handleCategoriaActual('');
    });
  }, []);

  if (loading) return 'Loading...';
  //pagina cargando
  if (error) return `Error! ${error.message}`;
  //error en la pagina 
  console.log(data);
  return (
    <Page pageContent={false} name="home">
      <PageContent>
        {/* ads */}
        {/* masthead */}
        <Masthead home articulos={data.articulosBanner} />
        {/* Top Navbar */}
        <Nav home categorias={f7.methods.getCategorias()} />
        {/* Page content */}
        <Block className="main_cont display-flex flex-direction-column justify-content-center">
          <Block className="paneles">
            <Block className="left_pan">
              <LeftPanel tv_channels={data.tv_channels} radio_stations={data.radio_stations} />
              <LeftPanelTablet />
            </Block>
            <Block className="center_pan">
              <AdsTop />
              <HomePanel newsInfo={data} />
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
  );
}