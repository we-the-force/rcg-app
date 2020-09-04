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
    constructor(props) {
        super(props);
        this.state = {}
        console.log("Soy un side panel");
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
                        {console.log("A punto de armar el side panel")}
                        {console.log(this.props)}
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