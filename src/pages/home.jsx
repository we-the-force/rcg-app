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
import LoadingPanel from '@/components/loading/loading-panel';
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

  //if (loading) return 'Loading...';
  //pagina cargando
  //if (error) return `Error! ${error.message}`;
  //error en la pagina 
  let center, mast;
  if (loading) {
    center = <LoadingPanel />;
    mast = null;
  } else if (error) {
    center = <p>Error</p>
  } else {
    const { banner, categorias, relevante } = data;
    center = <HomePanel noticias={categorias} relevante={relevante} />;
    mast = <Masthead banner={banner} relevante={relevante} />
  }
  //const { banner, categorias, relevante } = data ;
  //let mast = banner && relevante ? <Masthead banner={banner} relevante={relevante} /> : null;
  //let center = loading ? <LoadingPanel /> : <HomePanel noticias={categorias} relevante={relevante} />;
  let rightPanel = f7.methods.getArticulosRightPanel();
  let leftPanelTV = f7.methods.getTV();
  let leftPanelRadio = f7.methods.getRadio();
  return (
    <Page pageContent={false} name="home">
      <PageContent>
        {/* ads */}
        {/* masthead */}
        {mast}
        {/* Top Navbar */}
        <Nav home categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
        {/* Page content */}
        <Block className="main_cont display-flex flex-direction-column justify-content-center">
          <Block className="paneles">
            <Block className="left_pan">
              <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
              <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
            </Block>
            <Block className="center_pan">
              <AdsTop />
              {center}
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