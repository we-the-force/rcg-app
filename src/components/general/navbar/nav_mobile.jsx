import React, { Fragment, useRef, useState, useEffect } from 'react';
import LogoBlanco from '@/static/imgs/Logo_blanco.png'
import TVLight from '@/static/icons/tv_light.png'
import services from '@/static/icons/servicios.png'
import radio from '@/static/icons/microphone.png'
import twred from '@/static/icons/TW_red.png'
import contact from '@/static/icons/Contact.png'
import face from '@/static/icons/FB_Icon.png'
import tw from '@/static/icons/TW_Icon.png'
import you from '@/static/icons/YT_Icon.png'
import insta from '@/static/icons/IG_Icon.png'
//import LeftPanelMobile from '@/components/general/left_panel/left-panel-mobile';
import {
    Searchbar,
    NavLeft,
    NavRight,
    Popup,
    Link,
    Page,
    View,
    Icon,
    BlockHeader,
    Block,
    Navbar,
    Panel,
    List,
    ListItem,
    f7
} from 'framework7-react';

export default function navMobile(props) {
    // console.log("nav_mobile:\r\n", props);
    function articuloSearch(e) {
        // console.log(e);
        if (e.key === "Enter") {
            //TODO: ToLowercase como no
            let searchValue = e.target.value.trim();
            if (searchValue !== "") {
                // console.log(encodeURI(e.target.value));
                // console.log(this.$f7.views.main.router.navigate);
                f7.views.main.router.navigate(`/busqueda/${encodeURI(e.target.value)}`);
            }
            else {
                // console.log("Ta vacio que quieres que busque lmao");
            }
        }
    }
    return (
        <Fragment>
            <NavLeft>
                <Link className="categorias panel-open" data-panel=".panel-left-mobile" iconMaterial="menu" icon="menu" color="red"></Link>
            </NavLeft>
            <a className="logo" href="/">
                <img src={LogoBlanco} alt="" />
            </a>
            <NavRight>
                <Link className="menuIcon" popupOpen=".menuPopup" iconMaterial='apps' icon='apps' color="red"></Link>
            </NavRight>
            <Popup className="menuPopup">
                <Navbar sliding noHairline noShadow className="navPopup">
                    <NavLeft>
                        <Link className="categorias panel-open" popupClose data-panel=".panel-left-mobile" iconMaterial="menu" icon="menu" color="red"></Link>
                    </NavLeft>
                    <a className="logo" href="/">
                        <img src={LogoBlanco} alt="" />
                    </a>
                    <NavRight>
                        <Link popupClose className="menuIcon" iconMaterial='close' icon='close' color="red"></Link>
                    </NavRight>
                </Navbar>
                <Page>
                    <div className="grid">
                        {/* <Searchbar placeholder="Buscar" customSearch={true} disableButton={false} form={false} /> */}
                        <input placeholder="Buscar" onKeyPress={e => articuloSearch(e)} />
                        <div className="box live">
                            <Block>
                                <BlockHeader><img src={TVLight} alt="" /> <p>TV</p></BlockHeader>
                                {
                                    props.tv_channels.map((channel, key) => {
                                        return (<Link key={key} href={`/tv/${channel.url}`}>{channel.nombre}</Link>)
                                    })
                                }
                                {/* <Link>RCG En Vivo</Link>
                                <Link>RCG Diferido - 2</Link>
                                <Link>RCG TV 8.3</Link> */}
                            </Block>
                        </div>
                        <div className="box services">
                            <Block>
                                <BlockHeader><img src={services} alt="" /> <p>Servicios</p></BlockHeader>
                                <Link>Fundacion RCG</Link>
                                <Link href="/espectaculares">Espectaculares</Link>
                                <Link href="/calca">Registra Tu Calca</Link>
                            </Block>
                        </div>
                        <div className="box estaciones">
                            <Block>
                                <BlockHeader><img src={radio} alt="" /><p>Radio</p></BlockHeader>
                                {
                                    props.radio_stations.map((station, key) => {
                                        return (<Link key={key} href={`/radio/${station.url}`}>{station.nombre}</Link>)
                                    })
                                }
                                {/* <Link>Digital 106.5 FM</Link>
                                <Link>XHSJ 103.3 FM</Link> */}
                            </Block>
                        </div>
                        <div className="box follow">
                            <Block>
                                <BlockHeader><img src={twred} alt="" /><p>Siguenos En:</p></BlockHeader>
                                <Link className="redes"><img src={face} alt="" /></Link>
                                <Link className="redes"><img src={tw} alt="" /></Link>
                                <Link className="redes"><img src={you} alt="" /></Link>
                                <Link className="redes"><img src={insta} alt="" /></Link>
                            </Block>
                        </div>
                        <div className="box RCG">
                            <Block>
                                <BlockHeader><img src={contact} alt="" /><p>RCG</p></BlockHeader>
                                <Link href="/nosotros">Nosotros</Link>
                                <Link href="/contacto">Contacto</Link>
                            </Block>
                        </div>
                        <div className="box empty">
                            <Block>
                            </Block>
                        </div>
                        <div className="box foot">
                            <Block className="display-flex flex-direction-column justify-content-center align-items-center">
                                <div className="avisos display-flex">
                                    <Link href="/derecho_replica">Derecho de replica</Link>
                                    <Link href="/aviso_privacidad">Aviso de privacidad</Link>
                                </div>
                                <div className="opis">
                                    <Link href={false}>OPI 2017</Link>
                                    <Link href={false}>OPI 2018</Link>
                                    <Link href={false}>SEG</Link>
                                </div>
                                <p>©2020 RCG</p>
                            </Block>
                        </div>
                    </div>
                </Page>
            </Popup>
        </Fragment>
    );
}