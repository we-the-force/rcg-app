import React, { useEffect, useState } from 'react';
import Mobile from './nav_mobile';
import Desk from './nav_desktop';
import { Navbar } from 'framework7-react';

export default function Nav(props) {
    // console.log("props: ", props.categorias);
    // console.log("props.length: ", props.categorias.length);
    const categoria = props.categoria ? props.categoria : ''; 
    const { categorias } = props.categorias != undefined ? props : {categorias: []};
    // const { categorias } = props.categorias != undefined ? props : {categorias: [{nombre: "Error"}, {nombre: "En"}, {nombre: "Categorias"}, {nombre: ":c"}]};
    // console.log("Categorias: ", categorias);
    // console.log("Navbar-categorias: ", categorias);
    const [categ_show, categ_pop, type] = useData(categorias);
    return (
        <Navbar sliding noHairline noShadow>
            {type === 'desktop' && 
                <Desk itemsShow={categ_show} itemsPop={categ_pop.length > 0 ? categ_pop : []}/>
            }
            {type === 'mobile' &&
                <Mobile categorias={categorias} categoria={categoria}/>
            }
        </Navbar>
    );
}


function useData(data) {/* recibe categorias */
    const [categ, setCateg] = useState({
        categ_show: [''],/* categorias a mostrar */
        categ_pop: [''],/* categorias en el menu pop */
        type: ''
    });
    let cant = null;
    let thisType = '';

    useEffect(() => {
        function handleResize() {

            let categorias = [...data];
            let w = window.innerWidth;
            thisType = 'desktop';
            if (w > 1320){
                cant = 9;//9 links
            }else if (w >= 1200) {
                cant = 7;//9 links
            } else if (w >= 1024) {
                cant = 6;//7 lnks
            } else if (w >= 768) {
                cant = 4;//6 links
            } else if (w >= 640) {
                cant = 3;//4 links
            } else {
                thisType = 'mobile';
            }
            let categ_nav = categorias.splice(0, cant);
            setCateg({
                categ_show: categ_nav,
                categ_pop: categorias,
                type: thisType
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return [categ.categ_show, categ.categ_pop, categ.type];
}