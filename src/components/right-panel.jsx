import React, { Component } from 'react';
import DestItem from './destacado-item';
import {
    Block,
    Searchbar,
    Card,
    CardHeader,
    List,
    ListItem
} from 'framework7-react';

export default class RightPanel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block className="right_panel_cont">
                <Block className="search_block">
                    <Searchbar placeholder="Buscar" customSearch={true} disableButton={false} form={false}/>
                    <Block className="ads square"></Block>
                </Block>
                <Block className="right_panel_down">
                    <Card className="right_panel_down_card destacado">
                        <CardHeader>
                            Destacado
                        </CardHeader>
                        <DestItem image={true} />
                        <DestItem image={true} />
                        <DestItem image={false} />
                        <DestItem image={false} />
                        <DestItem image={false} nobord/>
                    </Card>
                    <Card className="right_panel_down_card tags">
                        <CardHeader>
                            Tags
                        </CardHeader>
                        <List>
                            <ListItem link="#">Coahuila</ListItem>
                            <ListItem link="#">Saltillo</ListItem>
                            <ListItem link="#">Reporte</ListItem>
                            <ListItem link="#">Alcalde</ListItem>
                            <ListItem link="#">RCG</ListItem>
                            <ListItem link="#" className="grey">Buscar</ListItem>
                        </List>
                    </Card>
                </Block>
            </Block>
        );
    }
}