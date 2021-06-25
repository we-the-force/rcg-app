import React from 'react';
import {
    Panel,
    List,
    ListItem
} from 'framework7-react';

export default function LeftPanelMobile(props) {
    const { categorias, categoria } = props;
    let navLinks = [];
    navLinks = categorias.length > 0 ? categorias.map((val, key) => {
        let name = val.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let current = categoria === name ? 'current' : '';
        return (
            <ListItem link={`/categoria/${val.url}`} view="#main-view" key={key} className={`uppercase ${current}`} panelClose>{val.nombre}</ListItem>
        )
    }) : [];

    return (
        <Panel left resizable className="categorias panel-left-mobile">
            <List>
                {navLinks}
            </List>
        </Panel>
    );
}