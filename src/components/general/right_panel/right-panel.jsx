import React, { Component } from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import AutorCard from '@/components/autores/autor-card.jsx';
import {
    Block,
    Card,
    CardHeader,
    List,
    ListItem,
    f7
} from 'framework7-react';

export default function RightPanel(props) {

    const articuloSearch = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.trim() !== "") {
                f7.views.main.router.navigate(`/busqueda/${e.target.value}`);
            }
        }
    }

    let { newsInfo, autores, numArticulos } = props;
    let cards;

    if (newsInfo != undefined) {
        cards = (
            <Card className="right_panel_down_card destacado">
                <CardHeader>Destacado</CardHeader>
                {
                    newsInfo.map((articulo, i) => {
                        return (
                            <DestItem
                                key={i}
                                image={true}
                                articulo={articulo}
                            />
                        )
                    })
                }
            </Card>
        );

    } else if (autores != undefined) {
        cards = autores.map((autor, i) => {
            return (
                <AutorCard
                    key={i}
                    autor={autor}
                    className={"right_panel_down_card"}
                    numArticulos={numArticulos.find(val => val.autor === autor.id)}
                />
            );
        });
    } else {
        cards = (
            <Card className="right_panel_down_card destacado">
                <CardHeader>Destacado</CardHeader>
                <Block className={"dest-item"}>
                    <p>Not found</p>
                </Block>
            </Card>
        );
    }

    return (
        <Block className="right_panel_cont">
            <Block className="search_block">
                <Block className="search_cont">
                    <input placeholder="Buscar" onKeyPress={e => articuloSearch(e)} />
                    <span className="material-icons icon-image-preview">
                        search
                    </span>
                </Block>
                <Block className="ads square"></Block>
            </Block>
            <Block className="right_panel_down">
                {cards}
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