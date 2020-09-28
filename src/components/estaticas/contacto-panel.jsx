import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Nav from '@/components/general/navbar/navbar';
import Masthead from '@/components/home/masthead';
import LeftPanel from '@/components/general/left_panel/left-panel';
import RightPanel from '@/components/general/right_panel/right-panel';
import { useQuery, gql, useMutation } from '@apollo/client';
import { f7, f7ready } from 'framework7-react';

import {
    Page,
    Block,
    Card,
    CardHeader,
    Link,
    PageContent
} from 'framework7-react';



export default function ContactoPage(props) {

    var isRequesting = false;
    async function handleContactSubmit(e) {
        if (!isRequesting){
            let requestObject = {
                name: (document.getElementById("formulario-name").value).trim(),
                address: (document.getElementById("formulario-address").value).trim(),
                subject: (document.getElementById("formulario-subject").value).trim(),
                message: (document.getElementById("formulario-message").value).trim(),
            };
            console.log("Resulting object", requestObject);
    
            let isRequestValid = validateData(requestObject);
    
            if (isRequestValid.result)
            {
                /*
                    Para el contacto
                        Es necesario el asunto?
                        El formulario se envia directo a la personita?
                        Se van a guardar un registro de intentos de contactos?
                */
               let postResponse = await f7.request({
                   url: `http://${window.location.hostname}:1337/request`,
                   method: "POST",
                   data: {
                       requestObject
                   }
               });
               console.log(`Wea asdasd: `, postResponse);
            }
            else
            {
                f7.dialog.alert(`Ocurrio un error procesando la peticion:\r\n${isRequestValid.message}`);
                console.log(`Ocurrio un error procesando la peticion:\r\n${isRequestValid.message}`);
            }
        }
    }
    function validateData(contactRequest)
    {
        let auxResponse = {
            result: true,
            message: ""
        }
        let errors = 0;

        if (contactRequest.name === "")
        {
            auxResponse.result = false;
            auxResponse.message += "Te falta el nombre";
            errors++;
        }
        if (contactRequest.address === "")
        {
            auxResponse.result = false;
            auxResponse.message += errors === 0 ? "Te falta la direccion de correo" : " y la direccion de correo";
            errors++;
        }
        if (contactRequest.subject === "")
        {
            auxResponse.result = false;
            auxResponse.message += errors === 0 ? "Te falta el asunto " : " y el asunto";
            errors++;
        }
        auxResponse.message += ".";
        return auxResponse;
    }
    return (
        <Block className="center_panel">
            <Card>
                <Block className="header_cont display-flex justify-content-space-between">
                    <CardHeader>
                        CONTACTO
                    </CardHeader>
                </Block>
                <Block>
                    {/* Aqui va un player??? */}
                    <Block className="player-wrapper">
                        {/* Aqui va el stream */}
                        <ReactPlayer className="player" controls={true} url="https://www.rcg.com.mx/wp-content/uploads/2020/07/cuenta-con-rcg-redes.mp4" playing={false} />
                    </Block>
                    {/* Iconitos */}
                    <Block className="display-flex">
                        <Block>
                            [Imagen Radio]
                            <p>Radio</p>
                        </Block>
                        <Block>
                            [Imagen TV]
                            <p>Television</p>
                        </Block>
                        <Block>
                            [Imagen Espectaculares]
                            <p>Espectaculares</p>
                        </Block>
                        <Block>
                            [Imagen Pantalla]
                            <p>Super Pantalla</p>
                        </Block>
                        <Block>
                            [Imagen Redes]
                            <p>Redes Sociales</p>
                        </Block>
                    </Block>
                    <b>Incrementa tus ventas</b>
                    <p>a traves de nuestros diferentes medios</p>
                    <h1>¡Anunciate!</h1>
                    <p>Deja tus datos en esta seccion de formulario y nos pondremos en contacto contigo o llama al telefono: <b>(844) 305-0570</b></p>
                    <b>Formulario</b>
                    {/* El formulario */}
                    <Block>
                        <input id="formulario-name" type="text" placeholder="Nombre Completo*"/>
                        <input id="formulario-address" type="text" placeholder="Direccion de Correo Completa*"/>
                        <input id="formulario-subject" type="text" placeholder="Asunto"/>
                        <input id="formulario-message" type="text" placeholder="Mensaje"/>
                        <input id="formulario-send" type="button" value="Enviar" onClick={handleContactSubmit}/>
                    </Block>
                    <p>Te ofrecemos paquetes a tu medida.</p>
                    <p>Pregunta sin compromiso, ¡Nosotros te ayudamos!</p>
                    <p><b>WhatsApp 844-277-8810</b></p>
                    <p><b>cuentacon@rcg.com.mx</b></p>
                </Block>
            </Card>
        </Block>
    )
}