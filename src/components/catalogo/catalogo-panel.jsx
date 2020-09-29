import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import { f7 } from 'framework7-react';

import {
    Page,
    Block,
    Card,
    CardHeader,
    Link,
    PageContent
} from 'framework7-react';

export default class CatalogoPanel extends Component {
    listContainsCategory(category, list)
    {
        for (let i = 0; i < list.length; i++)
        {
            if (list[i].zone === category)
            {
                return true;
            }
        }
        return false;
    }
    constructor(props) {
        super(props);
        // console.log(props);

        // this.espectaculares = [];

        // props.catalogoInfo.forEach((espectacular) => {
        //     console.log(espectacular);
        //     if (this.listContainsCategory(espectacular.zona, this.espectaculares))
        //     {
        //         console.log("Si como no");
        //     }
        //     else
        //     {
        //         console.log("Chale que siempre no");
        //     }
        // });

        //searchResults.filter(a => a.url === articulo.url).length === 0


    }
    render() {
        return (
            <Block className="center_panel">
                <Card>
                    <h2>ZONA CENTRO</h2>
                    <Block className="display-flex">
                        {
                            this.props.catalogoInfo.centro.map((espectacular, key) => {
                                console.log(`Data: (${espectacular.id_espectacular})\r\n`, espectacular);
                                console.log("Cara1: ", espectacular.cara1);
                                let htmlCara1 = "";
                                let htmlCara2 = "";
                                if (espectacular.cara1 != null)
                                {
                                    htmlCara1 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 1</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara1.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara1);
                                }
                                if (espectacular.cara2 != null)
                                {
                                    htmlCara2 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 2</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara2.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara2);
                                }
                                return (
                                    <Block key={key} className="display-flex">
                                        {/* <div dangerouslySetInnerHTML={htmlCara1}/> */}
                                        {htmlCara1}
                                        {htmlCara2}
                                    </Block>
                                )
                            })
                        }
                    </Block>
                </Card>
                <Card>
                    <h2>ZONA NORTE</h2>
                    <Block className="display-flex">
                        {
                            this.props.catalogoInfo.norte.map((espectacular, key) => {
                                console.log(`Data: (${espectacular.id_espectacular})\r\n`, espectacular);
                                console.log("Cara1: ", espectacular.cara1);
                                let htmlCara1 = "";
                                let htmlCara2 = "";
                                if (espectacular.cara1 != null)
                                {
                                    htmlCara1 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 1</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara1.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara1);
                                }
                                if (espectacular.cara2 != null)
                                {
                                    htmlCara2 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 2</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara2.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara2);
                                }
                                return (
                                    <Block key={key} className="display-flex">
                                        {/* <div dangerouslySetInnerHTML={htmlCara1}/> */}
                                        {htmlCara1}
                                        {htmlCara2}
                                    </Block>
                                )
                            })
                        }
                    </Block>
                </Card>
                <Card>
                    <h2>ZONA ORIENTE</h2>
                    <Block className="display-flex">
                        {
                            this.props.catalogoInfo.oriente.map((espectacular, key) => {
                                console.log(`Data: (${espectacular.id_espectacular})\r\n`, espectacular);
                                console.log("Cara1: ", espectacular.cara1);
                                let htmlCara1 = "";
                                let htmlCara2 = "";
                                if (espectacular.cara1 != null)
                                {
                                    htmlCara1 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 1</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara1.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara1);
                                }
                                if (espectacular.cara2 != null)
                                {
                                    htmlCara2 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 2</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara2.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara2);
                                }
                                return (
                                    <Block key={key} className="display-flex">
                                        {/* <div dangerouslySetInnerHTML={htmlCara1}/> */}
                                        {htmlCara1}
                                        {htmlCara2}
                                    </Block>
                                )
                            })
                        }
                    </Block>
                </Card>
                <Card>
                    <h2>ZONA PONIENTE</h2>
                    <Block className="display-flex">
                        {
                            this.props.catalogoInfo.poniente.map((espectacular, key) => {
                                console.log(`Data: (${espectacular.id_espectacular})\r\n`, espectacular);
                                console.log("Cara1: ", espectacular.cara1);
                                let htmlCara1 = "";
                                let htmlCara2 = "";
                                if (espectacular.cara1 != null)
                                {
                                    htmlCara1 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 1</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara1.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara1);
                                }
                                if (espectacular.cara2 != null)
                                {
                                    htmlCara2 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 2</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara2.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara2);
                                }
                                return (
                                    <Block key={key} className="display-flex">
                                        {/* <div dangerouslySetInnerHTML={htmlCara1}/> */}
                                        {htmlCara1}
                                        {htmlCara2}
                                    </Block>
                                )
                            })
                        }
                    </Block>
                </Card>
                <Card>
                    <h2>ZONA SUR</h2>
                    <Block className="display-flex">
                        {
                            this.props.catalogoInfo.sur.map((espectacular, key) => {
                                console.log(`Data: (${espectacular.id_espectacular})\r\n`, espectacular);
                                console.log("Cara1: ", espectacular.cara1);
                                let htmlCara1 = "";
                                let htmlCara2 = "";
                                if (espectacular.cara1 != null)
                                {
                                    htmlCara1 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 1</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara1.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara1);
                                }
                                if (espectacular.cara2 != null)
                                {
                                    htmlCara2 = (
                                        <Block>
                                            <p>{espectacular.id_espectacular} - Cara 2</p>
                                            <img src={`http://${window.location.hostname}:1337${espectacular.cara2.url}`}/>
                                            <p>{espectacular.lugar} - Fecha</p>
                                        </Block>
                                    );
                                    console.log("Cara1 :D\r\n", htmlCara2);
                                }
                                return (
                                    <Block key={key} className="display-flex">
                                        {/* <div dangerouslySetInnerHTML={htmlCara1}/> */}
                                        {htmlCara1}
                                        {htmlCara2}
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