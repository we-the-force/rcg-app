import React, { Component } from 'react';
import {
    Navbar,
    NavLeft,
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
                <NavLeft /* className="display-none" */>
                        <img src="../static/imgs/Logo_negro.png" alt="" />
                </NavLeft>
                <Link href={false} className="uppercase">locales</Link>
                <Link href={false} className="uppercase">estatales</Link>
                <Link href={false} className="uppercase">nacionales</Link>
                <Link href={false} className="uppercase">internacionales</Link>
                <Link href={false} className="uppercase">deportes</Link>
                <Link href={false} className="uppercase">espectáculos</Link>
                <Link href={false} className="uppercase">destacados</Link>
                <Link href={false} className="uppercase">fundación rcg</Link>
                <Link href={false} className="uppercase">salud y cultura</Link>
            </Navbar>
        );
    }
}