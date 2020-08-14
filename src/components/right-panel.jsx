import React, { Component } from 'react';
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
            <Block>
                <Block>
                    <Searchbar />
                    <Card style={{ height: "200px" }}>
                    </Card>
                </Block>
                <Block>
                    <Card>
                        <CardHeader>
                            Destacado
                    </CardHeader>
                        <Block>
                            <div><img src="" alt="" /></div>
                            <Block strong>
                                <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                                <h1>Titulo De La Nota</h1>
                                <p className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                <p className="Tag Titulo"></p>
                                <p>Mostrar mas</p>
                            </Block>
                        </Block>
                        <Block>
                            <div><img src="" alt="" /></div>
                            <Block strong>
                                <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                                <h1>Titulo De La Nota</h1>
                                <p className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                <p className="Tag Titulo"></p>
                                <p>Mostrar mas</p>
                            </Block>
                        </Block>
                        <Block>
                            <Block strong>
                                <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                                <h1>Titulo De La Nota</h1>
                                <p className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                <p className="Tag Titulo"></p>
                                <p>Mostrar mas</p>
                            </Block>                    </Block>
                        <Block>
                            <Block strong>
                                <p className="autor">Nombre Reporter@</p> - <p className="fecha">11 Agosto 2020</p>
                                <h1>Titulo De La Nota</h1>
                                <p className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                <p className="Tag Titulo"></p>
                                <p>Mostrar mas</p>
                            </Block>
                        </Block>
                    </Card>
                    <Card>
                        <CardHeader>
                            Tags
                    </CardHeader>
                        <List>
                            <ListItem link="#">Coahuila</ListItem>
                            <ListItem link="#">Saltillo</ListItem>
                            <ListItem link="#">Reporte</ListItem>
                            <ListItem link="#">Alcalde</ListItem>
                            <ListItem link="#">RCG</ListItem>
                            <ListItem link="#">Buscar</ListItem>
                        </List>
                    </Card>
                </Block>
            </Block>
        );
    }
}