import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    Block
} from 'framework7-react';

export default class TVPanel extends Component {
    constructor () {
        super();
    }
    render() {
        return (
            <Block className="categoria_panel">
                <Card>
                    <Block className="justify-content-flex-start">
                        <p>RCG En Vivo</p>
                    </Block>
                    <Block>
                        {/* Aqui va el stream */}
                    </Block>
                    <br></br>
                    <br></br>
                    <Block>
                        <b>Nombre de Programa</b>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore sed dolores quia esse veniam. Quos nobis temporibus ab, vero reiciendis animi, illum provident voluptate autem possimus nam quas a! </p>
                    </Block>
                    <br></br>
                    <br></br>
                    <Block>
                        <b className="justify-content-flex-start">Programacion:</b>
                    </Block>
                    <Block>
                        {/* La tablita de programacion ayayay */}
                        La tablita de programacion ayayay
                    </Block>
                    <br></br>
                    <br></br>
                    <Block>
                        <b className="justify-content-flex-start">Mas Canales</b>
                    </Block>
                    <Block>
                        <p>Canal 1</p>
                        <p>Canal 2</p>
                    </Block>
                </Card>
                <Card>
                    <Block>
                        <b>Te recomendamos</b> <a href="" className="">Mostrar Mas</a>
                    </Block>
                    <Block>
                        La lista de muchos cositos como no hijuesu
                    </Block>
                </Card>
            </Block>
        );
    }
}