import React, { Component } from 'react';
import city from '@/static/imgs/city.png'
import {
    Block,
    Card,
    BlockHeader,
} from 'framework7-react';

export default class FaqPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { FAQ } = this.props.faq;
        return (
            <Block className="center_panel faq_panel">
                <Card>
                    <Block className="back">
                        <BlockHeader>
                            <h1>Preguntas Frecuentes</h1>
                        </BlockHeader>
                        <div className="content">
                            {FAQ.map((val,i) => {
                                return(
                                    <Block key={i}>
                                        <h2 className="pregunta">{val.Pregunta}</h2>
                                        <p className="respuesta">{val.Respuesta}</p>
                                    </Block>
                                );
                            })}
                            <p className="bottom_p">¿Te fueron de utilidad nuestras respuestas? ¿Aún tienes dudas acerca de nuestros servicios? <a href="/contacto">Llámanos</a> o <a href="/contacto">escríbenos</a> y con gusto te atenderemos</p>
                        </div>
                        <img className="city" src={city} alt="" />
                    </Block>                    
                </Card>
            </Block>
        )
    }
}