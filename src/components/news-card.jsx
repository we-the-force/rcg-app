import React, { Component } from 'react';
import {
    Card,
    Block,
    Col,
    Row
} from 'framework7-react';

export default class NewsCard extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render(){
        return (
            <Card>
                <Block>
                    {/* Info de la noticia */}
                    <Row>
                        <Col>Nombre Reporter@</Col>
                        <Col>11 Agosto 2020</Col>
                        <Col>Compartir: [Iconitos]</Col>
                    </Row>
                    {/* Titulo de la noticia */}
                    <Row>
                        <Col>
                            <b style={{ fontSize: 20 + "px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</b>
                        </Col>
                    </Row>
                    {/* Imagen de la noticia */}
                    <Row>
                        <Col style={{ height: 300 + "px", border: '5px solid black' }}>
                            {/* Image */}
                            Imagen
                        </Col>
                    </Row>
                    {/* Pie de foto de la noticia */}
                    <Row>
                        <Col><b>Pie de foto</b></Col>
                        <Col>- Pie de foto</Col>
                    </Row>
                    {/* Descripcion de la noticia */}
                    <Row>
                        <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia sint nisi quidem tenetur maxime porro eaque excepturi officiis laboriosam eius quas odit a expedita accusamus, illum dolor omnis doloremque.</Col>
                    </Row>
                    {/* Ver mas */}
                    <Row>
                        <Col>Ver mas</Col>
                    </Row>
                </Block>
            </Card>
        );
    }
}