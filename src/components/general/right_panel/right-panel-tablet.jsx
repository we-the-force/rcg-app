import React from 'react';
import DestItem from '@/components/general/right_panel/destacado-item';
import bannersearch from "../../../static/imgs/136x204_03.png"
import satelite from "../../../static/imgs/sat.jpg"

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
    const bannerSearch = {
        height: '204px',
        
    }

    const changeBackdropClose = () => {
        var x = document.getElementsByClassName("popup-backdrop");
        x[0].classList.remove("invisible");
    }

    let { newsInfo, autores, numArticulos } = props;
    let cont, title = 'Lo Más Visto';

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
                <Link popupClose=".vistos-popup" className="close mobile" iconMaterial="add" icon="add"></Link>
                <h1>{title}</h1>
                <Block className="news-cont">
                    <Block className="search_block">
                        <Link href="https://www.meteored.mx/clima_Saltillo-America+Norte-Mexico-Coahuila-MMIO-1-22377.html" external target="_blank" className='linkTablet'><img src="https://www.meteored.mx/wimages/fotobb9883428a01a276c51ec22c33002745.png"  /></Link>
                        <Link href="https://www.youtube.com/channel/UCcv1a47MEXfAbsKcxZAn9Ow" external target="_blank" className='linkTablet'>
                        <img src={bannersearch} alt="" />
                        </Link>
                    </Block>
                    {cont}
                    <img src={satelite} alt="" className="sat" />
                </Block>
            </Popup>
        </Block>
    );
}