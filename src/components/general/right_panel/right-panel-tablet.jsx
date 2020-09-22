import React, { Component } from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import {
    Popup,
    Block,
    Link,
} from 'framework7-react';

export default function RightPanelTablet(props) {
    const changeBackdropOpen = (e) => {
        console.log(e.target.getBoundingClientRect().top);
        var popup = document.getElementsByClassName("modal-in");
        popup[0].style.top = `${(e.target.getBoundingClientRect().top - 12)}px`;
        var x = document.getElementsByClassName("popup-backdrop");
        x[0].classList.add("invisible");
    }

    const changeBackdropClose = () => {
        var x = document.getElementsByClassName("popup-backdrop");
        x[0].classList.remove("invisible");
    }

    return (
        <Block className="right_panel_tablet">
            <Link popupOpen=".vistos-popup" onClick={e => { changeBackdropOpen(e) }} className="more" iconMaterial="add" icon="add"></Link>
            <Popup className="vistos-popup right-popup-tablet" onPopupClose={changeBackdropClose}>
                <Link popupClose=".vistos-popup" className="close" iconMaterial="close" icon="close"></Link>
                <h1>Destacado</h1>
                {
                    props.newsInfo != undefined ?
                        props.newsInfo.map((articulo, i) => {
                            return (<DestItem image={true} key={i} articulo={articulo} />)
                        }) : `Tienes un error en tu paginita amigo\r\nMi newsInfo esta undefined, pasamelo por props pls`
                }
            </Popup>
        </Block>
    );
}