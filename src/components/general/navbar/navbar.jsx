import React, { useEffect, useState } from 'react';
import Mobile from './nav_mobile';
import Desk from './nav_desktop';
import { ListGroup, Navbar } from 'framework7-react';

export default function Nav(props) {
    let { categorias, home } = props;
    
    if (categorias.length <= 0) return "";

    let [categ_show, categ_pop, type] = useData(categorias);

    return (
        <Navbar sliding noHairline noShadow>
            {type === 'desktop' &&
                <Desk itemsShow={categ_show} itemsPop={categ_pop} />
            }
            {type === 'mobile' &&
                <Mobile categorias={categorias} />
            }
        </Navbar>
    );
}


function useData(data) {/* recibe categorias */
    const [categ, setCateg] = useState({
        categ_show: [''],/* categorias a mostrar */
        categ_pop: [],/* categorias en el menu pop */
        type: ''
    });
    let cant = null;
    let thisType = '';
    useEffect(() => {
        function handleResize() {
            
            let categorias = [...data];
            let w = window.innerWidth;
            thisType = 'desktop';
            if (w > 1420) {
                cant = 9;
            } else if (w >= 1320) {
                cant = 8;//9 links
            } else if (w >= 1200) {
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