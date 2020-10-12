import React, { useEffect, useState } from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import LeftPanelTablet from '@/components/general/left_panel/left-panel-tablet';
import RightPanelTablet from '@/components/general/right_panel/right-panel-tablet';
import Footer from '@/components/general/footer';
import ArticuloPanel from '@/components/articulo/articulo-panel';
import AdsTop from '@/components/general/ads_top';
import { f7, f7ready } from 'framework7-react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { ArticuloPage } from '@/graphql/queries.graphql';
import { UpdateArticulo } from '@/graphql/mutations.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

export default function Articulo(props) {
    const { url } = props;
    const [flag, setFlag] = useState(false);
    const [updateArticulo] = useMutation(UpdateArticulo, {
        onCompleted: (data) => {
            console.log('ahoy', data);
        }
    });

    const { loading, error, data } = useQuery(ArticuloPage, {
        variables: { url },
        onCompleted: (data) => {
            setFlag(true);
        }
    });

    const addVisitas = () => {
        let visitas = data.articulos[0].visitas + 1;
        let id = data.articulos[0].id;
        updateArticulo({ variables: { "id": id, "visitas": visitas } });
    }

    useEffect(() => {
        f7ready((f7) => {
            f7.methods.handleCategoriaActual('');
        });
    }, []);

    useEffect(() => {
        if (flag) {
            let viewedArticles = window.sessionStorage.getItem('viewedArticles');
            if (viewedArticles != null) {
                let jsonArticles = JSON.parse(viewedArticles);
                if (!jsonArticles.includes(data.articulos[0].url)) {
                    jsonArticles.push(data.articulos[0].url);
                    window.sessionStorage.setItem('viewedArticles', JSON.stringify(jsonArticles));
                    addVisitas();
                }
            }
            else {
                viewedArticles = [data.articulos[0].url];
                let jsonArticles = JSON.stringify(viewedArticles);
                window.sessionStorage.setItem('viewedArticles', jsonArticles);
                addVisitas();
            }
        }
    }, [flag]);

    let centerPanel = loading ?
        'Loading' :
        <ArticuloPanel articulo={data.articulos[0]} />;
    let rightPanel = f7.methods.getArticulosRightPanel();
    let leftPanelTV = f7.methods.getTV();
    let leftPanelRadio = f7.methods.getRadio();
    return (
        <Page pageContent={false} name="articulo">
            <PageContent>
                {/* Top Navbar */}
                <Nav categorias={f7.methods.getCategorias()} tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                            <LeftPanelTablet tv_channels={leftPanelTV} radio_stations={leftPanelRadio} />
                        </Block>
                        <Block className="center_pan">
                            <AdsTop />
                            {centerPanel}
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