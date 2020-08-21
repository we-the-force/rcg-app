import React from 'react';
import Nav from '../components/navbar';
import Masthead from '../components/masthead';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import AdsTop from '../components/ads_top';
import HomePanel from '../components/home-panel';
import {
  Page,
  Block,
  PageContent
} from 'framework7-react';

export default () => (
  <Page pageContent={false} name="home">
    <PageContent>
      {/* ads */}
      {/* masthead */}
      <Masthead home />
      {/* Top Navbar */}
      <Nav />
      {/* Page content */}
      <Block className="main_cont display-flex flex-direction-column justify-content-center">
        <AdsTop />
        <Block className="paneles">
          <Block className="left_pan">
            <LeftPanel />
          </Block>
          <Block className="center_pan">
            <HomePanel />
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