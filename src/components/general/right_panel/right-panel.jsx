import React, { Component } from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import {
    Block,
    Searchbar,
    Card,
    CardHeader,
    List,
    ListItem
} from 'framework7-react';

export default class RightPanel extends Component {
    articuloSearch = (e) => {
        if (e.key === "Enter")
        {
            //TODO: ToLowercase como no
            let searchValue = e.target.value.trim();
            if (searchValue !== "")
            {
                // console.log(encodeURI(e.target.value));
                // console.log(this.$f7.views.main.router.navigate);
                this.$f7.views.main.router.navigate(`/busqueda/${encodeURI(e.target.value)}`);
            }
            else
            {
                // console.log("Ta vacio que quieres que busque lmao");
            }
        }
    }
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <Block className="right_panel_cont">
                <Block className="search_block">
                    {/* {console.log(this)} */}
                    {/* <Searchbar placeholder="Buscar" customSearch={true} disableButton={false} form={false} onSearchbarSearch={this.aaah}/> */}
                    <input id="searchBar" type="text" onKeyPress={this.articuloSearch}/>
                    <Block className="ads square"></Block>
                </Block>
                <Block className="right_panel_down">
                    <Card className="right_panel_down_card destacado">
                        <CardHeader>
                            Destacado
                        </CardHeader>
                        {
                            this.props.newsInfo != undefined ? 
                            this.props.newsInfo.map((articulo, i) => {
                                return (<DestItem image={true} key={i} articulo={articulo}/>)
                            }) : `Tienes un error en tu paginita amigo\r\nMi newsInfo esta undefined, pasamelo por props pls`
                        }
                        {/* <DestItem image={true}/> */}
                        {/* <DestItem image={true} />
                        <DestItem image={true} />
                        <DestItem image={false} />
                        <DestItem image={false} />
                        <DestItem image={false} nobord/> */}
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