import React, {useEffect, useState} from 'react';
import Nav from '@/components/general/navbar/navbar';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import Footer from '@/components/general/footer';
import ArticuloPanel from '@/components/articulo/articulo-panel';
import AdsTop from '@/components/general/ads_top';
import { useQuery, gql, useMutation } from '@apollo/client';
import { ArticuloPage } from '@/graphql/queries.graphql';
import {
    Page,
    Block,
    PageContent
} from 'framework7-react';

const UPDATE_VISITAS = gql`
    mutation UpdateArticulo($id: ID!, $visitas: Int) {
        updateArticulo(
            input: {
                where: {id: $id}
                data: {visitas: $visitas}
            }
        )
        {
            articulo {
                id
                visitas
            }
        }
    }
`;

export default function Articulo(props) {
    let url = props.url;
    const [NPDV, setNPDV] = useState(null);
    const { loading, error, data } = useQuery(ArticuloPage, {
        variables: { url },
        onCompleted: (data) => {
            // console.log("El data como no", data);
            setNPDV(data);
        }
    }, );

    const [updateArticulo] = useMutation(UPDATE_VISITAS);
    
    useEffect(() => {
        // console.log('Use Effect como no', NPDV);
        var addView = false;
        if (NPDV != null){
            var sourceViewedArticles = window.sessionStorage.getItem('viewedArticles');
            // console.log("Viewed articles", sourceViewedArticles);
            if (sourceViewedArticles != null)
            {
                let jsonArticles = JSON.parse(sourceViewedArticles)
                // console.log("Thing existed: ",jsonArticles);
                if (jsonArticles.includes(NPDV.articulos[0].url))
                {
                    // console.log("Ya estaba, no agregues nada pls");
                }
                else
                {
                    addView = true;
                    jsonArticles.push(NPDV.articulos[0].url);
                    window.sessionStorage.setItem('viewedArticles', JSON.stringify(jsonArticles));
                }
            }
            else
            {
                addView = true;
                // console.log("viewed articles was null, creating thing");
                sourceViewedArticles = [];
                sourceViewedArticles.push(NPDV.articulos[0].url);
                // console.log("viewedArticles after adding current one", sourceViewedArticles);
                let jsonArticles = JSON.stringify(sourceViewedArticles);
                window.sessionStorage.setItem('viewedArticles', jsonArticles);
            }
            if (addView)
            {
                const visitas = NPDV.articulos[0].visitas + 1;
                // console.log(`Las visitas ahora son: ${visitas}`);
                const id = NPDV.articulos[0].id
                // console.log(`Updating article '${id}' with ${visitas}`);
                updateArticulo({ variables: {"id": id, "visitas": visitas} });
            }
        }
    }, [NPDV]);


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Page pageContent={false} name="articulo">
            <PageContent>
                {/* ads */}
                {/* Top Navbar */}
                <Nav categorias={data.categorias}/>
                <Block className="main_cont display-flex flex-direction-column justify-content-center">
                    <AdsTop />
                    <Block className="paneles">
                        <Block className="left_pan">
                            <LeftPanel />
                        </Block>
                        <Block className="center_pan">
                            {/* <ArticuloPanel articulo={this.$f7route.context.Article}/> */}
                            <ArticuloPanel articulo={data.articulos[0]} />
                        </Block>
                        <Block className="right_pan">
                            <RightPanel newsInfo={data.articulosDestacadosRaros}/>
                        </Block>
                    </Block>
                </Block>
                <Footer />
            </PageContent>
        </Page>
    );
}