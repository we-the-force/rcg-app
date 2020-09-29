import React, {Component} from 'react';

import {
    Page,
    Block,
    Card,
    CardHeader,
    Link,
    PageContent
} from 'framework7-react';

export default class FaqPage extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <Block className="center_panel">
                <Card>
                    <h1>PREGUNTAS FRECUENTES</h1>
    
                    {
                        this.props.faqInfo.preguntas.map((question, key) => {
                            return(
                                <Block key={key}>
                                    <p>
                                        <b>{question.pregunta}</b>
                                        <br/>
                                        {question.respuesta}
                                    </p>
                                    <br/>
                                </Block>
                            );
                        })
                    }

                    <p>¿Te fueron de utilidad nuestras respuestas? ¿Aún tienes dudas acerca de nuestros servicios? <a href="/contacto">Llámanos</a> o <a href="/contacto">esbríbenos</a> y con gusto te atenderemos</p>
                </Card>
            </Block>
        )
    }
}