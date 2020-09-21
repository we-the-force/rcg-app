import React, { useRef, useState, useEffect } from 'react';
import TVLight from '@/static/icons/tv_light.png'
import services from '@/static/icons/servicios.png'
import radio from '@/static/icons/microphone.png'
import twred from '@/static/icons/TW_red.png'
import contact from '@/static/icons/Contact.png'
import face from '@/static/icons/FB_Icon.png'
import tw from '@/static/icons/TW_Icon.png'
import you from '@/static/icons/YT_Icon.png'
import insta from '@/static/icons/IG_Icon.png'
import {
    Card,
    CardHeader,
    Page,
    Popup,
    Block,
    Link,
    Searchbar,
    Input
} from 'framework7-react';

export default function LeftPanelTablet(props) {

    const [input, setInput] = useState('');

    return (
        <Block className="left_panel_tablet">
            <Link popupOpen=".search-popup" className="icon-link search" iconMaterial="search" icon="search"></Link>
            <Link popupOpen=".live-popup"className="icon-link tv"><img src={TVLight} alt="" /></Link>
            <Link popupOpen=".radio-popup"className="icon-link radio_"><img src={radio} alt="" /></Link>
            <Link popupOpen=".more-popup"className="icon-link servicios"><img src={services} alt="" /></Link>
            <Link popupOpen=".redes-popup"className="icon-link redes"><img src={twred} alt="" /></Link>
            <Link popupOpen=".nosotros-popup"className="icon-link nosotros" iconMaterial="perm_contact_calendar" icon="nosotros"></Link>

            <div className="links">
                <Link className="text-link derecho-replica">Derecho de replica</Link>
                <Link className="text-link aviso-privacidad">Aviso de privacidad</Link>

                <Link className="text-link OPI-2017">OPI 2017</Link>
                <Link className="text-link OPi-2018">OPI 2018</Link>
                <Link className="text-link SEG">SEG</Link>
                <p>©2020 RCG</p>
            </div>

            <Popup className="search-popup">
                <Page>
                    <input onChange={()=>{console.log('asdsd')}} onKeyPress={() => { console.log('in') }} />
                </Page>
            </Popup>
            <Popup className="live-popup">
                <Page>
                    envivo
                </Page>
            </Popup>
            <Popup className="radio-popup">
                <Page>
                    radio
                </Page>
            </Popup>
            <Popup className="more-popup">
                <Page>
                    more
                </Page>
            </Popup>
            <Popup className="redes-popup">
                <Page>
                    redes
                </Page>
            </Popup>
            <Popup className="nosotros-popup">
                <Page>
                    nosotros
                </Page>
            </Popup>
        </Block>
    );
}