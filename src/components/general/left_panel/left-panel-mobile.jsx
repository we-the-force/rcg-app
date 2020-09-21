import React, { useRef, useState, useEffect } from 'react';
import {
    Panel,
    List,
    ListItem,
    View,
    Page
} from 'framework7-react';

export default function LeftPanelMobile(props) {
    const { categorias, categoria } = props;
    return (
        <Panel left resizable className="categorias panel-left-mobile">
            <List>
                {categorias.map((val, key) => {
                    let current = categoria === val.nombre ? 'current' : '';
                    return (
                        <ListItem link={'/categoria/' + val.nombre} view="#main-view" key={key} className={"uppercase " + current} panelClose>{val.nombre}</ListItem>
                    );
                })}
                <ListItem link={`/autores`} view="#main-view" className="uppercase autores" panelClose>autores</ListItem>
            </List>
        </Panel>
    );
}