import React from 'react';
import ReactPlayer from 'react-player';
import { f7 } from 'framework7-react';

import {
    Page,
    Block,
    Card,
    CardHeader,
    Link,
    PageContent
} from 'framework7-react';



export default function ContactoPanel(props) {
    console.log("ContactPanel.props:\r\n", props);
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
               createPopup("Correo enviado", "Su solicitud ha sido enviada");
               console.log(`Wea asdasd: `, postResponse);
            }
            else
            {
                // f7.dialog.alert(`Ocurrio un error procesando la peticion:\r\n${isRequestValid.message}`);
                console.log(`Ocurrio un error procesando la peticion:\r\n${isRequestValid.message}`);
                createPopup("Error!", `Ocurrio un error procesando la peticion: ${isRequestValid.message}`);
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

    // function createPopup(titulo, message) {
    //     // console.log("Create Popup:\r\n", f7.popup.create);
    //     var pop = f7.popup.create({
    //       content: `
    //         <div class="popup">
    //           <div class="page">
    //             <div class="navbar">
    //               <div class="navbar-bg">
    //               <div class="navbar-inner">
    //                 <div class="title">${titulo}</div>
    //               </div>
    //             </div>
    //             <div>
    //                 <p>${message}</p>
    //             </div>
    //           </div>
    //         </div>
    //       `.trim(),
    //     });
      
    //   // Open it
    //   pop.open();
    // }
    function createPopup(titulo, message) {
        // console.log("Create Popup:\r\n", f7.popup.create);
        var pop = f7.popup.create({
          content: `
            <div class="popup">
                <div class="title">${titulo}</div>
                <div>
                    <p>${message}</p>
                </div>
            </div>
          `.trim(),
        });
      
      // Open it
      pop.open();
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
                    <p>Deja tus datos en esta seccion de formulario y nos pondremos en contacto contigo o llama al telefono: <b>{props.contactInfo.telefono}</b></p>
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
                    <p><b>WhatsApp {props.contactInfo.whatsapp}</b></p>
                    <p><b>{props.contactInfo.correo}</b></p>
                </Block>
            </Card>
        </Block>
    )
}