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
                <Link href="/categoria/1/" className="uppercase">locales</Link>
                <hr />
                <Link href='/categoria/2/' className="uppercase">estatales</Link>
                <hr />
                <Link href="/categoria/3/" className="uppercase">nacionales</Link>
                <hr />
                <Link href="/categoria/4/" className="uppercase">internacionales</Link>
                <hr />
                <Link href="/categoria/5/" className="uppercase">deportes</Link>
                <hr />
                <Link href="/categoria/6/" className="uppercase">espectáculos</Link>
                <hr />
                <Link href="/categoria/7/" className="uppercase">destacados</Link>
                <hr />
                <Link href="/categoria/8/" className="uppercase">fundación rcg</Link>
                <hr />
                <Link href="/categoria/9/" className="uppercase">salud y cultura</Link>
                <NavRight>
                    <img src="../static/imgs/nav_graph.png" alt="" />
                </NavRight>
            </Navbar>
        );
    }
}