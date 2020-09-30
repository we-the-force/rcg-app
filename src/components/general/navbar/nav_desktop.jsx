import React, { Fragment, useEffect, useState } from 'react';
import LogoBlanco from '@/static/imgs/Logo_blanco.png'
import navGraph from '@/static/imgs/nav_graph.png'
import {
    Navbar,
    NavLeft,
    NavRight,
    Block,
    Icon,
    Link,
    Popover,
    List,
    ListItem,
    f7
} from 'framework7-react';

export default function navMobile(props) {
    const { itemsShow, itemsPop, isEspectaculares } = props;
    // console.log(isEspectaculares);
    var navLinks = [];
    if (isEspectaculares)
    {
        navLinks.push(
            <Fragment key="inicioLink">
                <Link href="/" className="uppercase">Inicio</Link>
            </Fragment>
        );
        navLinks.push(
            <Fragment key="catalogoLink">
                <hr/>
                <Link href="/catalogo" className="uppercase">Galeria</Link>
            </Fragment>
        );
        navLinks.push(
            <Fragment key="contactoLink">
                <hr/>
                <Link href="/contacto" className="uppercase">Contacto</Link>
            </Fragment>
        );
    }
    else
    {
        navLinks = itemsShow.map((val, key) => {
            let dis = (itemsShow.length - 1) == key ? 'display-none' : 'display-flex';
            return (
                <Fragment key={key}>
                    <Link href={"/categoria/" + val.nombre} className="uppercase">{val.nombre}</Link>
                    <hr className={dis} />
                </Fragment>);
        })
        if (itemsPop.length === 0)
        {
            navLinks.push(
                <Fragment key="autoresLink">
                    <hr/>
                    <Link href="/autores" className="uppercase">autores </Link>
                </Fragment>);
        }
        if (itemsPop.length > 0)
        {
            navLinks.push(
            <Fragment key="masLink">
                <hr />
                <Link popoverOpen=".popover-menu" iconMaterial="arrow_drop_down" className={'uppercase more-icon display-flex'}>MÁS </Link>
            </Fragment>);
        }
        // console.log(navLinks);
    }
    return (
        <Fragment>
            <NavLeft>
                <a href="/">
                    <img src={LogoBlanco} alt="" />
                </a>
            </NavLeft>
            {/* {console.log("nav_desktop:\r\n", navLinks)} */}
            {navLinks}
            <NavRight>
                <img src={navGraph} alt="" />
            </NavRight>
            <Popover className="popover-menu">
                <List>
                    {itemsPop.map((val, key) => {
                        return (
                            <ListItem key={key} link={`/categoria/${val.nombre}`} popoverClose className="uppercase" >{val.nombre}</ListItem>
                        );
                    })}
                    <ListItem link="/autores" className="uppercase" popoverClose>autores</ListItem>
                </List>
            </Popover>
        </Fragment>
    );
}