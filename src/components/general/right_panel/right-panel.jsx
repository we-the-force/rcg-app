import React from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import AutorCard from '@/components/autores/autor-card.jsx';
import satelite from "../../../static/imgs/sat.jpg"
import bannersearch from "../../../static/imgs/200x300_03.png"
import {
    Block,
    Card,
    CardHeader,
    Link,
    f7
} from 'framework7-react';

export default function RightPanel(props) {
    
    const articuloSearch = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.trim() !== "") {
                f7.views.main.router.navigate(`/busqueda/${e.target.value}`);
            }
        }
    }

    let { newsInfo, autores, numArticulos } = props;
    let cards;

    if (newsInfo != undefined) {
        cards = (
            <Card className="right_panel_down_card destacado">
                <CardHeader>Lo Más Visto</CardHeader>
                {
                    newsInfo.map((articulo, i) => {
                        return (
                            <DestItem
                                key={i}
                                articulo={articulo}
                                image={i === 0 || i === 1 ? true : false}
                            />
                        )
                    })
                }
            </Card>
        );
    } else if (autores != undefined) {
        cards = autores.map((autor, i) => {
            return (
                <AutorCard
                    key={i}
                    autor={autor}
                    className={"right_panel_down_card"}
                    numArticulos={numArticulos.find(val => val.autor === autor.id)}
                />
            );
        });
    } else {
        cards = (
            <Card className="right_panel_down_card destacado">
                <CardHeader>Lo Más Visto</CardHeader>
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
                    <input placeholder="Buscar" onKeyPress={e => articuloSearch(e)} />
                    <span className="material-icons icon-image-preview">
                        search
                    </span>
                </Block>
                <Link href="https://www.meteored.mx/clima_Saltillo-America+Norte-Mexico-Coahuila-MMIO-1-22377.html" external target="_blank" ><img src="https://www.meteored.mx/wimages/fotobb9883428a01a276c51ec22c33002745.png"/></Link>
                <br />
                <Link href="https://www.youtube.com/channel/UCcv1a47MEXfAbsKcxZAn9Ow" external target="_blank">
                <img  className="bannerSearch" src={bannersearch} alt="" sytle={{ width: "200px", margin: "0 10px" }}/>
                </Link>
            </Block>
            
            <Block className="right_panel_down">
                {cards}
                <img src={satelite} alt="" className="sat" />
            </Block>
        </Block>
    );
}