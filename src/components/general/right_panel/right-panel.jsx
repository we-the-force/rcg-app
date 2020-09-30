import React, { Component } from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import AutorCard from '@/components/autores/autor-card.jsx';
import {
    Block,
    Card,
    CardHeader,
    List,
    ListItem
} from 'framework7-react';

export default class RightPanel extends Component {
    articuloSearch = (e) => {
        console.log(e);
        if (e.key === "Enter") {
            //TODO: ToLowercase como no
            let searchValue = e.target.value.trim();
            if (searchValue !== "") {
                // console.log(encodeURI(e.target.value));
                // console.log(this.$f7.views.main.router.navigate);
                this.$f7.views.main.router.navigate(`/busqueda/${encodeURI(e.target.value)}`);
            }
            else {
                // console.log("Ta vacio que quieres que busque lmao");
            }
        }
    }
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        let { newsInfo, autores, numArticulos } = this.props;
        let cards;

        if (newsInfo != undefined) {
            cards = (
                <Card className="right_panel_down_card destacado">
                    <CardHeader>Destacado</CardHeader>
                    {
                        newsInfo.map((articulo, i) => {
                            return (<DestItem image={true} key={i} articulo={articulo} />)
                        })
                    }
                </Card>
            );

        } else if (autores != undefined) {
            cards = autores.map((autor, i) => {
                return (<AutorCard className={"right_panel_down_card"} key={i} autor={autor} numArticulos={numArticulos.find(val => val.autor === autor.id)} />);
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
                        <input placeholder="Buscar" onChange={(e) => { console.log(e) }} onKeyPress={e => this.articuloSearch(e)} />
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
}