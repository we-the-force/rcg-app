import React, { useRef, useState, useEffect, Fragment } from 'react';
import {
    Panel,
    List,
    ListItem,
    View,
    f7
} from 'framework7-react';

export default function LeftPanelMobile(props) {
    const { categorias, categoria } = props;
    let navLinks = [];
    // if (categoria === 'espectaculares') {
    //     navLinks = [
    //         <ListItem key={"1"} link="/" view="#main-view" className="uppercase" panelClose>inicio</ListItem>,
    //         <ListItem key={"2"} link="/catalogo" view="#main-view" className="uppercase" panelClose>catalogo</ListItem>,
    //         <ListItem key={"3"} link="/contacto" view="#main-view" className="uppercase" panelClose>contacto</ListItem>
    //     ]
    // } else {
    navLinks = categorias.length > 0 ? categorias.map((val, key) => {
        let name = val.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let current = categoria === name ? 'current' : '';
        return (
            <ListItem link={`/categoria/${val.url}`} view="#main-view" key={key} className={`uppercase ${current}`} panelClose>{val.nombre}</ListItem>
        )
    }) : [];
        // navLinks.push(<ListItem link="/autores" view="#main-view" className="uppercase autores" key="autores-item" panelClose>autores</ListItem>);
    // }

    return (
        <Panel left resizable className="categorias panel-left-mobile">
            <List>
                {navLinks}
                {/* {categorias.map((val, key) => {
                    let current = categoria === val.nombre ? 'current' : '';
                    return (
                        <ListItem link={'/categoria/' + val.nombre} view="#main-view" key={key} className={"uppercase " + current} panelClose>{val.nombre}</ListItem>
                    );
                })}
                <ListItem link={`/autores`} view="#main-view" className="uppercase autores" panelClose>autores</ListItem> */}
            </List>
        </Panel>
    );
}