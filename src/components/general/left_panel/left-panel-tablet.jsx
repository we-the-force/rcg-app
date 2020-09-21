import React, { useRef, useState, useEffect } from 'react';
import TVLight from '@/static/icons/tv_light.png'
import services from '@/static/icons/servicios.png'
import radio from '@/static/icons/microphone.png'
import twred from '@/static/icons/TW_red.png'
import contact from '@/static/icons/Contact.png'
import TWIcon from '@/static/icons/TW_Icon.png'
import FBIcon from '@/static/icons/FB_Icon.png'
import YTIcon from '@/static/icons/YT_Icon.png'
import IGIcon from '@/static/icons/IG_Icon.png'
import {
    Card,
    CardHeader,
    Page,
    Popup,
    Block,
    Link,
    List,
    ListItem
} from 'framework7-react';

export default function LeftPanelTablet(props) {

    const [input, setInput] = useState('');

    const changeBackdropOpen = (e) => {
        console.log(e.target.getBoundingClientRect().top);
        var popup = document.getElementsByClassName("modal-in");
        popup[0].style.top = `${e.target.getBoundingClientRect().top}px`;
        var x = document.getElementsByClassName("popup-backdrop");
        x[0].classList.add("invisible");
    }

    const changeBackdropClose = () => {
        var x = document.getElementsByClassName("popup-backdrop");
        x[0].classList.remove("invisible");
    }

    return (
        <Block className="left_panel_tablet">
            <Link popupOpen=".search-popup" onClick={e => { changeBackdropOpen(e) }} className="icon-link search" iconMaterial="search" icon="search"></Link>
            <Link popupOpen=".live-popup" onClick={changeBackdropOpen} className="icon-link tv"><img src={TVLight} alt="" /></Link>
            <Link popupOpen=".radio-popup" onClick={changeBackdropOpen} className="icon-link radio_"><img src={radio} alt="" /></Link>
            <Link popupOpen=".more-popup" onClick={changeBackdropOpen} className="icon-link servicios"><img src={services} alt="" /></Link>
            <Link popupOpen=".redes-popup" onClick={changeBackdropOpen} className="icon-link redes"><img src={twred} alt="" /></Link>
            <Link popupOpen=".nosotros-popup" onClick={changeBackdropOpen} className="icon-link nosotros" iconMaterial="perm_contact_calendar" icon="nosotros"></Link>

            <div className="links">
                <Link className="text-link derecho-replica">Derecho de replica</Link>
                <Link className="text-link aviso-privacidad">Aviso de privacidad</Link>

                <Link className="text-link OPI-2017">OPI 2017</Link>
                <Link className="text-link OPi-2018">OPI 2018</Link>
                <Link className="text-link SEG">SEG</Link>
                <p>©2020 RCG</p>
            </div>

            <Popup className="search-popup left-popup-tablet" onPopupClose={changeBackdropClose}>
                <input placeholder="Buscar" onChange={(e) => { console.log(e) }} onKeyPress={() => { console.log('in') }} />
                <span className="material-icons icon-image-preview">
                    search
                </span>
            </Popup>
            <Popup className="live-popup left-popup-tablet">
                <List>
                    <ListItem link="/tv/envivo">RCG en vivo</ListItem>
                    <ListItem link="/tv/diferido">RCG Diferido – 2</ListItem>
                    <ListItem link="/tv/8-3">RCG TV 8.3</ListItem>
                    {/* {
                        this.tv_channels.map((channel, key) => {
                            return (<ListItem key={key} link={`/tv/${channel.url}`}>{channel.nombre}</ListItem>)
                        })
                    } */}
                </List>
            </Popup>
            <Popup className="radio-popup left-popup-tablet">
                <List>
                    <ListItem link="/radio/106-5">DIGITAL 106.5 FM</ListItem>
                    <ListItem link="/radio/103-3">XHSJ 103.3 FM</ListItem>
                    {/* {
                        this.radio_stations.map((station, key) => {
                            return (<ListItem key={key} link={`/radio/${station.url}`}>{station.nombre}</ListItem>);
                        })
                    } */}
                </List>
            </Popup>
            <Popup className="more-popup left-popup-tablet">
                <List>
                    <ListItem link="#">Fundación RCG</ListItem>
                    <ListItem link="/espectaculares">Espectaculares</ListItem>
                    <ListItem link="/calca">Registra tu calca</ListItem>
                </List>
            </Popup>
            <Popup className="redes-popup left-popup-tablet">
                <Block className="social_cont display-flex justify-content-space-between align-items-center">
                    <a href="">
                        <img src={FBIcon} alt="" srcSet="" />
                    </a>
                    <a href="">
                        <img src={TWIcon} alt="" srcSet="" />
                    </a>
                    <a href="">
                        <img src={YTIcon} alt="" srcSet="" />
                    </a>
                    <a href="">
                        <img src={IGIcon} alt="" srcSet="" />
                    </a>
                </Block>
            </Popup>
            <Popup className="nosotros-popup left-popup-tablet">
                <List>
                    <ListItem link="/nosotros">Nosotros</ListItem>
                    <ListItem link="/contacto">Contacto</ListItem>
                </List>
            </Popup>
        </Block>
    );
}