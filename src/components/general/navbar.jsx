import React, { Fragment, useEffect, useState } from 'react';
import LogoBlanco from '@/static/imgs/Logo_blanco.png'
import navGraph from '@/static/imgs/nav_graph.png'
import {
    Navbar,
    NavLeft,
    NavRight,
    Icon,
    Link,
    Popover,
    List,
    ListItem
} from 'framework7-react';

export default function Nav(props) {
    const [categ_show, categ_pop] = useData(props.categorias);
    const more = categ_pop.length > 0 ? 'display-flex' : 'display-none';
    //const refContainer = useRef(null);
    //myref.current.text('ahoy');
    return (
        <Navbar sliding noHairline noShadow>
            <NavLeft>
                <a href="/">
                    <img src={LogoBlanco} alt="" />
                </a>
                {/* <p ref={refContainer}>asdf</p> */}
            </NavLeft>
            {categ_show.map((val, key) => {
                let dis = (categ_show.length - 1) == key ? 'display-none' : 'display-flex';
                return (
                    <Fragment key={key}>
                        <Link href={"/categoria/" + val.nombre} className="uppercase">{val.nombre}</Link>
                        <hr className={dis} />
                    </Fragment>
                );
            })}
            <hr className={more} />
            <Link popoverOpen=".popover-menu" className={'uppercase ' + more}>MÁS <Icon material="arrow_drop_down"></Icon></Link>
            <NavRight>
                <img src={navGraph} alt="" />
            </NavRight>
            <Popover className="popover-menu">
                <List>
                    {categ_pop.map((val, key) => {
                        return (
                            <ListItem key={key} link="#" popoverClose className="uppercase" >{val.nombre}</ListItem>
                        );
                    })}
                </List>
            </Popover>
        </Navbar>
    );
}


function useData(data) {
    const [categ, setCateg] = useState({
        categ_show: [''],
        categ_pop: ['']
    });
    let cant = null;

    useEffect(() => {
        function handleResize() {

            let categorias = [...data];
            let w = window.innerWidth;
            if (w >= 1200) {
                cant = 9;//9 links
            } else if (w >= 1024) {
                cant = 7;//7 lnks
            } else if (w >= 768) {
                cant = 5;//6 links
            } else if (w >= 640) {
                cant = 4;//4 links
            } else {
                //usar navbar mobile
            }
            let categ_nav = categorias.splice(0, cant);
            setCateg({
                categ_show: categ_nav,
                categ_pop: categorias
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return [categ.categ_show, categ.categ_pop];
}