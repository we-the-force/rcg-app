import React from 'react';
import Nav from '../components/navbar'
import Masthead from  '../components/masthead'
import {
  Page,
  Block,
  Row,
  Col,
} from 'framework7-react';

export default () => (
  <Page name="home">
    {/* ads */}
    {/* masthead */}
    <Masthead home/>
    {/* Top Navbar */}
    <Nav/>
    {/* Page content */}
    <Block>

    </Block>
  </Page>
);