import React from 'react';
import Nav from '../components/navbar';
import Masthead from  '../components/masthead';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
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
      <Row className="w80">
        <Col width="15">
          <LeftPanel/>
        </Col>
        <Col width="65">
          <p>Todo</p>
        </Col>
        <Col width="20">
          <RightPanel/>
        </Col>
      </Row> 
    </Block>
  </Page>
);