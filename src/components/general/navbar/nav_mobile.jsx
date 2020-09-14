import React, { Fragment, useEffect, useState } from 'react';
import LogoBlanco from '@/static/imgs/Logo_blanco.png'
import navGraph from '@/static/imgs/nav_graph.png'
import {
    Searchbar,
    NavLeft,
    NavRight,
    Popup,
    Link,
    Page,
    View,
    Panel,
    List,
    ListItem,
    Row,
    Col,
} from 'framework7-react';

export default function navMobile(props) {
    const [popupOpened, setPopupOpened] = useState(false);
    const { categorias } = props;
    let iconRight = popupOpened ? 'close' : 'apps';
    return (
        <Fragment>
            <NavLeft>
                <Link className="categorias" panelOpen="left" iconMaterial="menu" icon="menu" color="red"></Link>
            </NavLeft>
            <a href="/">
                <img src={LogoBlanco} alt="" />
            </a>
            <NavRight>
                <Link popupClose={popupOpened} className="menuIcon" iconMaterial={iconRight} icon={iconRight} color="red" onClick={() => { setPopupOpened(!popupOpened) }}></Link>
            </NavRight>
            <Panel left resizable className="categorias">
                <View>
                    <Page>
                        <List>
                            {categorias.map((val, key) => {
                                return (
                                    <ListItem key={key} popoverClose className="uppercase" >{val.nombre}</ListItem>
                                );
                            })}
                        </List>
                    </Page>
                </View>
            </Panel>
            <Popup backdropEl="popup-backdrop" className="menuPopup" opened={popupOpened} onPopupClose={() => { setPopupOpened(false) }}>
                <Page>
                    <Row>
                        <Searchbar placeholder="Buscar" customSearch={true} disableButton={false} form={false} />
                    </Row>
                    <Row>
                        <Col>En Vivo</Col>
                        <Col>Servicios</Col>
                    </Row>
                    <Row>
                        <Col>Radio</Col>
                        <Col>Siguenos En:</Col>
                    </Row>
                    <Row>
                        <Col>RCG</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        foot
                    </Row>
                </Page>
            </Popup>
        </Fragment>
    );
}