import React, { Component, Fragment } from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import AutorCard from '@/components/autores/autor-card.jsx';
import {
    Popup,
    Block,
    Link,
} from 'framework7-react';

export default function RightPanelTablet(props) {
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
                <h1>{title}</h1>

                <Block className="news-cont">
                    {cont}
                </Block>
            </Popup>
        </Block>
    );
}