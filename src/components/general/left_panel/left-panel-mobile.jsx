import React, { useRef, useState, useEffect } from 'react';
import {
    Panel,
    List,
    ListItem,
    View,
    f7
} from 'framework7-react';

export default function LeftPanelMobile(props) {
    const { categorias, categoria } = props;

    var navLinks = [];
    if (f7 != undefined)
    {
        // console.log("LeftPanelMobile-f7:\r\n", f7);
        let currentRoute = f7.views.main.history[f7.views.main.history.length - 1];
        let isEspectaculares = currentRoute === "/espectaculares";
        
        if (isEspectaculares)
        {
                navLinks.push(<ListItem link="/" view="#main-view" className="uppercase inicio" key="inicio-item" panelClose>inicio</ListItem>)
                navLinks.push(<ListItem link="/catalogo" view="#main-view" className="uppercase catalogo" key="catalogo-item" panelClose>catalogo</ListItem>)
                navLinks.push(<ListItem link="/contacto" view="#main-view" className="uppercase contacto" key="contacto-item" panelClose>contacto</ListItem>)
        }
        else
        {
            if (categorias.length > 0)
            {
                // console.log("LeftPanelMobile-Categorias:\r\n", categorias);
                navLinks = categorias.map((val, key) => {
                    let current = categoria === val.nombre ? 'current' : '';
                    return (
                        <ListItem link={`/categoria/${val.nombre}`} view="#main-view" key={key} className={`uppercase ${current}`} panelClose>{val.nombre}</ListItem>
                    )
                })
                navLinks.push(<ListItem link="/autores" view="#main-view" className="uppercase autores" key="autores-item" panelClose>autores</ListItem>)

            }
        }
    }
    // console.log("LeftPanelMobile:\r\n", isEspectaculares);
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