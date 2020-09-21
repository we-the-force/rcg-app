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

export default function navMobile(props) {
    const { itemsShow, itemsPop } = props;
    const more = itemsPop.length > 0 ? 'display-flex' : 'display-none';
    return (
        <Fragment>
            <NavLeft>
                <a href="/">
                    <img src={LogoBlanco} alt="" />
                </a>
            </NavLeft>
            {itemsShow.map((val, key) => {
                let dis = (itemsShow.length - 1) == key ? 'display-none' : 'display-flex';
                return (
                    <Fragment key={key}>
                        <Link href={"/categoria/" + val.nombre} className="uppercase">{val.nombre}</Link>
                        <hr className={dis} />
                    </Fragment>
                );
            })}
            {itemsPop.length > 0 &&
                <Fragment >
                    <hr />
                    <Link popoverOpen=".popover-menu" iconMaterial="arrow_drop_down" className={'uppercase more-icon '+more}>MÁS </Link>
                </Fragment>
            }
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