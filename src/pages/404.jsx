import React, { useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import NotFoundPanel from '@/components/not-found-panel';
import {useQuery} from '@apollo/client';
import {NotFoundPage} from '@/graphql/queries.graphql';
import { 
  Page,
  PageContent, 
  Navbar, 
  Block, 
  f7, f7ready
} from 'framework7-react';

export default function NotFound(props) {

  const {loading, error, data} = useQuery(NotFoundPage)

  useEffect(() => {
    f7ready((f7) => {
      f7.methods.handleCategoriaActual('');
    });
  }, []);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  let leftPanelTV = f7.methods.getTV();
  let leftPanelRadio = f7.methods.getRadio();
  return (
    <Page pageContent={false} name='notFound'>
      <PageContent>
        <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio}/>
        <Block className="main_cont display-flex flex-direction-column justify-content-center">
          <AdsTop/>
          <Block className="paneles">
            <Block className="left_pan">
              <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
              <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
            </Block>
            <Block className="center_pan">
              <NotFoundPanel/>
            </Block>
            <Block className="right_pan">
                <RightPanel newsInfo={data.articulosDestacadosRaros} />
                <RightPanelTablet newsInfo={data.articulosDestacadosRaros} />
            </Block>
          </Block>
        </Block>
        <Footer/>
      </PageContent>
    </Page>

    // <Page>
    //   <Navbar title="Not found" backLink="Back" />
    //   <Block strong>
    //     <p>Sorry</p>
    //     <p>Requested content not found.</p>
    //   </Block>
    // </Page>
  );
} 
