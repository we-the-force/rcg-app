import React, {Component} from 'react';

import {
    Page,
    Block,
    Card,
    CardHeader,
    Link,
    PageContent
} from 'framework7-react';

export default class EspectacularPage extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card>
                    <h2>NOSOTROS</h2>
                    <p>{this.props.espectacularInfo.nosotros}</p>
                </Card>
                <Card>
                    <h2>¿POR QUÉ NOSOTROS?</h2>
                    <p>{this.props.espectacularInfo.porque_nosotros}</p>
                </Card>
                <Card>
                    <h2>NUESTROS CLIENTES</h2>
                    <Block className="display-flex">
                        {
                            this.props.clientes.map((cliente, key) => {
                                // console.log("Clientes\r\n: ", cliente);
                                return(
                                    <Block key={key}>
                                        <img src={`http://${window.location.hostname}:1337${cliente.logo.url}`} alt="" />
                                    </Block>
                                )
                            })
                        }
                    </Block>
                </Card>
            </Block>
        )
    }
}