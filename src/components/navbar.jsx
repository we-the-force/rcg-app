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
                <Link href="/articulo/1/" className="uppercase">locales</Link>
                <hr />
                <Link href={false} className="uppercase">estatales</Link>
                <hr />
                <Link href={false} className="uppercase">nacionales</Link>
                <hr />
                <Link href={false} className="uppercase">internacionales</Link>
                <hr />
                <Link href={false} className="uppercase">deportes</Link>
                <hr />
                <Link href={false} className="uppercase">espectáculos</Link>
                <hr />
                <Link href={false} className="uppercase">destacados</Link>
                <hr />
                <Link href={false} className="uppercase">fundación rcg</Link>
                <hr />
                <Link href={false} className="uppercase">salud y cultura</Link>
                <NavRight>
                    <img src="../static/imgs/nav_graph.png" alt="" />
                </NavRight>
            </Navbar>
        );
    }
}