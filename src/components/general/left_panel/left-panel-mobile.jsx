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
    const thisPanel = useRef(null);
    return (
        <Panel left resizable className="categorias panel-left-mobile" ref={thisPanel}>
            <List>
                {categorias.map((val, key) => {
                    let current = categoria === val.nombre ? 'current' : '';
                    return (
                        <ListItem link={'/categoria/' + val.nombre} view="#main-view" key={key} className={"uppercase " + current} panelClose>{val.nombre}</ListItem>
                    );
                })}
            </List>
        </Panel>
    );
}