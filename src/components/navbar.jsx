import React, { Component } from 'react';
import {
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
    Link,
} from 'framework7-react';

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Navbar sliding noHairline noShadow>
                <NavLeft>
                    <a href="/">
                        <img src="../static/imgs/Logo_blanco.png" alt="" />
                    </a>
                </NavLeft>
                <Link href="/categoria/locales" className="uppercase">locales</Link>
                <hr />
                <Link href="/categoria/estatales" className="uppercase">estatales</Link>
                <hr />
                <Link href="/categoria/nacionales" className="uppercase">nacionales</Link>
                <hr />
                <Link href="/categoria/internacionales" className="uppercase">internacionales</Link>
                <hr />
                <Link href="/categoria/deportes" className="uppercase">deportes</Link>
                <hr />
                <Link href="/categoria/espectaculos" className="uppercase">espectáculos</Link>
                <hr />
                <Link href="/categoria/destacados" className="uppercase">destacados</Link>
                <hr />
                <Link href="/categoria/fundacion_rcg" className="uppercase">fundación rcg</Link>
                <hr />
                <Link href="/categoria/salud_y_cultura" className="uppercase">salud y cultura</Link>
                <NavRight>
                    <img src="../static/imgs/nav_graph.png" alt="" />
                </NavRight>
            </Navbar>
        );
    }
}