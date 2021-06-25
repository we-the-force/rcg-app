import React, { Component, Fragment } from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import bannersearch from "../../../static/imgs/200x300_03.png"
import satelite from "../../../static/imgs/sat.jpg"

import AutorCard from '@/components/autores/autor-card.jsx';
import {
    Popup,
    Block,
    Link,
} from 'framework7-react';

export default function RightPanelTablet(props) {
    const articuloSearch = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.trim() !== "") {
                f7.views.main.router.navigate(`/busqueda/${e.target.value}`);
            }
        }
    }
    const changeBackdropOpen = (e) => {
        var popup = document.getElementsByClassName("modal-in");
        popup[0].style.top = `${(e.target.getBoundingClientRect().top - 12)}px`;
        var x = document.getElementsByClassName("popup-backdrop");
        x[0].classList.add("invisible");
    }

    const changeBackdropClose = () => {
        var x = document.getElementsByClassName("popup-backdrop");
        x[0].classList.remove("invisible");
    }

    let { newsInfo, autores, numArticulos } = props;
    let cont, title = 'Lo Mas Visto';

    if (newsInfo != undefined) {
        cont = (
            newsInfo.map((articulo, i) => {
                return (<DestItem image={i === 0 || i === 1 ? true : false} key={i} articulo={articulo} />)
            })
        );

    } else if (autores != undefined) {
        title = 'Autores';
        cont = autores.map((autor, i) => {
            return (<AutorCard className={"right_panel_down_card"} key={i} autor={autor} numArticulos={numArticulos.find(val => val.autor === autor.id)} />);
        });
    } else {
        cont = (
            <p>Not found</p>
        );
    }

    return (
        <Block className="right_panel_tablet">
            <Link popupOpen=".vistos-popup" onClick={e => { changeBackdropOpen(e) }} className="more" iconMaterial="add" icon="add"></Link>
            <Popup className="vistos-popup right-popup-tablet" onPopupClose={changeBackdropClose}>
                <Link popupClose=".vistos-popup" className="close" iconMaterial="add" icon="add"></Link>
                <Block className="search_block">
                    <Block className="search_cont">
                        <input placeholder="Buscar" onKeyPress={e => articuloSearch(e)} />
                        <span className="material-icons icon-image-preview">
                            search
                        </span>
                    </Block>
                    {/* <AdsSearch/> */}
                    {/* <br /> */}
                    <Link href="https://www.meteored.mx/clima_Saltillo-America+Norte-Mexico-Coahuila-MMIO-1-22377.html" external target="_blank" ><img src="https://www.meteored.mx/wimages/fotobb9883428a01a276c51ec22c33002745.png"  /></Link>

                    <br />
                    <Link href="https://www.youtube.com/channel/UCcv1a47MEXfAbsKcxZAn9Ow" external target="_blank">
                    <img  className="bannerSearch" src={bannersearch} alt="" sytle={{ width: "200px", margin: "0 10px" }}/>

                    </Link>
                </Block>

                <h1>{title}</h1>
        
                <Block className="news-cont">
                    {cont}

                    <img src={satelite} alt="" className="sat" />

                </Block>
            </Popup>
        </Block>
    );
}