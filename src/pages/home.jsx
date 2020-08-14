import React from 'react';
import Nav from '../components/navbar';
import Masthead from '../components/masthead';
import LeftPanel from '../components/left-panel';
import RightPanel from '../components/right-panel';
import Footer from '../components/footer';
import {
  Page,
  Block,
  Card,
  CardHeader,
  Row,
  Col,
  PageContent,
  CardFooter,
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
      <Block className="display-flex flex-direction-co">
        <Block>
          <LeftPanel />
        </Block>
        <Block>
          <Card>
            <CardHeader>Lo Mas Relevante</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          {/* aqui va un ad */}
          <Card>
            <CardHeader>Locales</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          <Card>
            <CardHeader>Estatales</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          {/* aqui va un ad */}
          <Card>
            <CardHeader>Internacional</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          <Card>
            <CardHeader>Deportes</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          <Card>
            <CardHeader>Espectaculos</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          {/* aqui va un ad */}
          <Card>
            <CardHeader>Destacadas</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          <Card>
            <CardHeader>Fundación RCG</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          <Card>
            <CardHeader>Salud Y Cultura</CardHeader>
            <CardFooter>Mostrar mas</CardFooter>
          </Card>
          {/* aqui va un ad */}
        </Block>
        <Block>
          <RightPanel />
        </Block>
      </Block>
      <Footer />
    </PageContent>
  </Page>
);