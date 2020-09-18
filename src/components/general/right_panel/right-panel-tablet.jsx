import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    List,
    ListItem,
    Block,
    Link,
} from 'framework7-react';

export default function RightPanelTablet(props) {
    return (
        <Block className="right_panel_tablet">
            <Link className="more" iconMaterial="add" icon="add"></Link>
        </Block>
    );
}