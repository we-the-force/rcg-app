import React, { useRef, useState, useEffect } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '@/components/general/footer';
import AdsTop from '@/components/general/ads_top';
import BusquedaPanel from '@/components/busqueda/busqueda-panel';

import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import { f7, f7ready } from 'framework7-react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { BusquedaPage, BusquedaTag, BusquedaTitulo, BusquedaDesc } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent,
    Card,
    CardHeader
} from 'framework7-react';

export default function Busqueda(props) {
    const values = props.params.trim().toString().split(' ');
    const limitStatic = 2;
    const [type, setType] = useState(-1);
    /* const [titulo, setTitulo] = useState(false);
    const [tag, setTag] = useState(false);
    const [desc, setDesc] = useState(false); */
    const [results, setResults] = useState([]);
    var templimit = limitStatic;
    var inicial = 0;
    const [getTitulo, valuesTitulo] = useLazyQuery(BusquedaTitulo);
    const [getTag, valuesTag] = useLazyQuery(BusquedaTag);
    const [getDesc, valuesDesc] = useLazyQuery(BusquedaDesc);

    let data = [valuesTitulo.data,valuesDesc.data,valuesTag.data];
    //efecto para quitar etiqueta roja
    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
            setType(0);
        });
    }, []);

    useEffect(() => {
        let _arguments = {
            variables:
            {
                values: values,
                inicio: inicial,
                limite: templimit
            }
        };
        switch (type) {
            case 0:
                getTitulo(_arguments);
                break;
            case 1:
                getDesc(_arguments);
                break;
            case 2:
                getTag(_arguments);
                break;
            default:
                break;
        }
    }, [type]);

    if (valuesTitulo.loading || valuesTag.loading || valuesDesc.loading) return "loading...";
    if (valuesTitulo.error || valuesTag.error || valuesDesc.error) return `Error! ${error.message}`;
    if (data[type]) {
        let length = data[type].articulos.length;
        switch (type) {
            case 0:
                console.log(results);
                if (length < templimit && length > 0) {
                    console.log('aqui tengo que bajar el limite guardar los resultados, limpiar el pool de datos, y volver a hacer el query');
                    /* templimit = templimit - length;
                    //setResults(results.concat(data[type].articulos));
                    data[type] = undefined;
                    setType(1); */

                } else if (length === 0) {
                    console.log('no hay nada, limpia el pool, deja el limite, y llama al api');
                }else{
                    console.log('ya se termino este pedo, guarda los datos, limpia el pool');
                }
                break;
            case 1:
                console.log('desc was called');
                /* if (length < templimit && length > 0) {
                    templimit = templimit - length;
                    setType(2);
                } else if (length === 0) {
                    data[type] = undefined;
                    setType(2);
                }else{
                    console.count('guardar');
                    //setResults(results.concat(data[type].articulos));
                    data[type] = undefined;
                } */
                break;
            case 2:
                /* if (length < templimit && length > 0) {
                    templimit = templimit - length;
                    console.count('guardar');
                    //setResults(results.concat(data[type].articulos));
                    data[type] = undefined;
                    setType(3);
                } else if (length === 0) {
                    data[type] = undefined;
                    setType(3);
                }else{
                    console.count('guardar');
                    //setResults(results.concat(data[type].articulos));
                    data[type] = undefined;
                } */
                break;
            default:
                console.log('jeje no habia nada');
                break;
        }
    }

    console.log(results);
    //if(!data) setTypeSearch([]);
    /* if(data == undefined){
        console.log('ahooy');
        setTypeSearch([{ title: false, tag: false, desc: true }, { limit: limitStatic }]);
    } */
    /* if (data) {
        if (typeSearch[0].title) {
            console.log(typeSearch[0].title);
            let length = data.byTitulo.length;
            console.log('length', length);
            if (length < typeSearch[1].limit && length > 0) {
                let tempLimit = typeSearch[1].limit - length;
                console.log(tempLimit);
                console.log('enviar nuevo limite');
                setTypeSearch([{ title: false, tag: false, desc: true }, { limit: limitStatic }]);
            } else if (length === 0) {
                console.log('enviar nuevo');
                //getResults({ variables: { values: values, titulo: titulo, tag: tag, desc: desc, inicial: inicial, limit: limit  } });
            }
        } else if (typeSearch[0].desc) {
            console.log('desc');
            let length = data.byDesc.length;
            if (length < limit && length > 0) {
                let tempLimit = limit - length;
                //getResults({ variables: { values: values, titulo: titulo, tag: tag, desc: desc, inicial: inicial, limit: tempLimit  } });
            } else if (length === 0) {
                //getResults({ variables: { values: values, titulo: titulo, tag: tag, desc: desc, inicial: inicial, limit: limit  } });
            }
        }
    } */

    //const { searchTag, searchTitulo, searchDesc } = data;

    //let results = searchTitulo.concat(searchDesc).concat(searchTag);
    let rightPanel = f7.methods.getArticulosRightPanel();
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="busqueda">
            <PageContent>
                {/* Top Navbar */}
                <Nav
                    categorias={f7.methods.getCategorias()}
                    tv_channels={leftPanelTV}
                    radio_stations={leftPanelRadio}
                />
                {/* <button onClick={() => {setTypeSearch([{ title: false, tag: false, desc: true }, { limit: limitStatic }])}}></button> */}
                {/* Page content */}
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel
                                tv_channels={leftPanelTV}
                                radio_stations={leftPanelRadio}
                            />
                            <LeftPanelTablet
                                tv_channels={leftPanelTV}
                                radio_stations={leftPanelRadio}
                            />
                        </Block>
                        <Block className="center_pan">
                            <AdsTop />
                            <BusquedaPanel />
                            {/* {
                                (searchResults.length === 0) &&
                                <Block className="categoria_panel center_panel">
                                    <Card className="head">
                                        <CardHeader>Resultados</CardHeader>
                                    </Card>
                                    <Card>
                                        <p>Tu busqueda no obtuvo resultados, intenta con diferentes terminos</p>
                                    </Card>
                                </Block>
                            } */}
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={rightPanel} />
                            <RightPanelTablet newsInfo={rightPanel} />
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );


}