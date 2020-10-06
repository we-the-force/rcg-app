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
    CardHeader,
    Preloader
} from 'framework7-react';


export default function Busqueda(props) {
    const values = props.params.trim().toString().split(' ');
    const limitStatic = 5;
    const [type, setType] = useState(-1);
    const [isCalled, setIsCalled] = useState(false);
    const [results, setResults] = useState([]);
    const [limit, setLimit] = useState(limitStatic);
    const [inicial, setInicial] = useState(0);
    const [allowInfinite, setAllowInfinite] = useState(true);
    const [preloader, setPreloader] = useState(false);
    const [getTitulo, valuesTitulo] = useLazyQuery(BusquedaTitulo);
    const [getTag, valuesTag] = useLazyQuery(BusquedaTag);
    const [getDesc, valuesDesc] = useLazyQuery(BusquedaDesc);

    let data = [valuesTitulo.data, valuesDesc.data, valuesTag.data];

    const loadMore = () => {
        if (!allowInfinite) return;
        setAllowInfinite(false);
        setPreloader(true);
        console.log('loading');
        setTimeout(() => {
            console.log('loaded');
            setAllowInfinite(true);
            setPreloader(false);
        }, 1000);
    };

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
            setType(0);
        });
    }, []);

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
                limite: limit
            }
        };
        switch (type) {
            case 0:
                getTitulo(_arguments);
                setIsCalled(true);
                break;
            case 1:
                getDesc(_arguments);
                setIsCalled(true);
                break;
            case 2:
                getTag(_arguments);
                setIsCalled(true);
                break;
            default:
                break;
        }
    }, [type]);



    if (isCalled && data[type]) {
        let val = data[type].articulos
        let length = val.length;
        let underLimit = (length < limit && length > 0);
        let nothing = (length === 0);
        let done = (length === limit);
        let newType = type + 1;
        if (underLimit) setLimit(limit - length);
        if (!nothing) setResults(results.concat(val));
        if (!done) {
            setType(newType);
        } else {
            setIsCalled(false);
        }
    }
    let isLoading = (valuesTitulo.loading || valuesDesc.loading || valuesTag.loading);
    let centerPanel = isLoading ? <p>Loading</p> : <BusquedaPanel articulos={results} />;
    let rightPanel = f7.methods.getArticulosRightPanel();
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="busqueda">
            <PageContent
                infinite
                infiniteDistance={50}
                infinitePreloader={false}
                onInfinite={() => { loadMore()}}
            >
                {/* Top Navbar */}
                <Nav
                    categorias={f7.methods.getCategorias()}
                    tv_channels={leftPanelTV}
                    radio_stations={leftPanelRadio}
                />
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
                            {centerPanel}
                            {preloader &&
                                <Block className="display-flex justify-content-center align-items-center">
                                    <Preloader color="red" ></Preloader>
                                </Block>
                            }
                            {/* <BusquedaPanel articulos={results} /> */}
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
                {/* <Footer /> */}
            </PageContent>
        </Page>
    );


}