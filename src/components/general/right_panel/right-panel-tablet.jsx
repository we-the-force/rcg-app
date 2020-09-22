import React, { Component } from 'react';
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
                Detacado/mas vistos
            </Popup>
        </Block>
    );
}