import React, { useState } from "react";
import ReactPlayer from "react-player";
import { f7 } from "framework7-react";
import radio from "@/static/imgs/Radio_contacto.png";
import tv from "@/static/imgs/TV_contacto.png";
import espect from "@/static/imgs/Espect_contacto.png";
import spantalla from "@/static/imgs/Super_pantalla_contacto.png";
import media from "@/static/imgs/Media_contacto.png";
import { Block, Card, BlockHeader, Input } from "framework7-react";

export default function ContactoPanel(props) {
    const DB_url = f7.methods.get_URL_DB();
    const [nombre, setNombre] = useState('');
    const [address, setAddress] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mssg, setMssg] = useState('');
    const [errorPopup, setErrorPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
    let { correo, direccion, telefono, video, whatsapp } = props.contactInfo;

    const handleChange = (val, set) => {
        set(val);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handeling submit');
    }

    return (
        <Block className="center_panel contacto_panel">
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h1> Contacto</h1>
                    </BlockHeader>
                    <Block className="player-wrapper">
                        <ReactPlayer
                            className="player"
                            controls={true}
                            url={DB_url + video.url}
                            playing={false}
                        />
                    </Block>
                    <Block className="icons_cont display-flex">
                        <Block id="radio" className="contacto_icon">
                            <img src={radio} alt="" />
                            <p>Radio</p>
                        </Block>
                        <Block id="tv" className="contacto_icon">
                            <img src={tv} alt="" />
                            <p>Television</p>
                        </Block>
                        <Block id="espect" className="contacto_icon">
                            <img src={espect} alt="" />
                            <p>Espectaculares</p>
                        </Block>
                        <Block id="spantalla" className="contacto_icon">
                            <img src={spantalla} alt="" />
                            <p>Super Pantalla</p>
                        </Block>
                        <Block id="media" className="contacto_icon">
                            <img src={media} alt="" />
                            <p>Redes Sociales</p>
                        </Block>
                    </Block>
                    <Block className="info">
                        <p className="titulo">Incrementa tus ventas</p>
                        <p className="text">a traves de nuestros diferentes medios</p>
                        <h1 className="warning">¡Anunciate!</h1>
                        <p className="parrafo">
                            Deja tus datos en esta seccion de formulario y nos pondremos en
                                contacto contigo o llama al telefono: <b>{telefono}</b>
                        </p>
                    </Block>
                    {/* El formulario */}
                    <form onSubmit={handleSubmit}>
                        <div className="titulo">
                            <p>formulario</p>
                        </div>
                        <Input
                            value={nombre}
                            required
                            validate
                            validateOnBlur
                            pattern="^([a-zA-ZñÑ]+ ?)+"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="formulario-name"
                            type="text"
                            placeholder="Nombre Completo"
                            onChange={(e) => { handleChange(e.target.value, setNombre) }}
                            onInputClear={() => { handleChange('', setNombre) }}
                        />
                        <Input
                            value={address}
                            required
                            validate
                            validateOnBlur
                            pattern="^[^ ][\w\W ]*"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="formulario-address"
                            type="text"
                            placeholder="Direccion de Correo Completa*"
                            onChange={(e) => { handleChange(e.target.value, setAddress) }}
                            onInputClear={() => { handleChange('', setAddress) }}
                        />
                        <Input
                            value={asunto}
                            required
                            validate
                            validateOnBlur
                            pattern="^[^ ][\w\W ]*"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="formulario-subject"
                            type="text"
                            placeholder="Asunto"
                            onChange={(e) => { handleChange(e.target.value, setAsunto) }}
                            onInputClear={() => { handleChange('', setAsunto) }}
                        />
                        <Input
                            value={mssg}
                            required
                            validate
                            validateOnBlur
                            resizable
                            pattern="^[^ ][\w\W ]*"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="formulario-message"
                            type="textarea"
                            placeholder="Mensaje"
                            onChange={(e) => { handleChange(e.target.value, setMssg) }}
                            onInputClear={() => { handleChange('', setMssg) }}
                        />
                        <Input className="enviar" id="formulario-send" type="submit" value="Enviar" />
                    </form>
                    <div className="parrafo_bottom">
                        <p>Te ofrecemos paquetes a tu medida.</p>
                        <p>Pregunta sin compromiso, ¡Nosotros te ayudamos!</p>
                    </div>
                    <p className="parrafo_red">WhatsApp {whatsapp}</p>
                    <p className="parrafo_red">{correo}</p>
                </Block>
            </Card>
        </Block>
    );
}

/* async function handleContactSubmit(e) {
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

                //    Para el contacto
                //        Es necesario el asunto?
                //        El formulario se envia directo a la personita?
                //        Se van a guardar un registro de intentos de contactos?

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
    } */
/* function validateData(contactRequest)
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
    } */

/* function createPopup(titulo, message) {
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
    } */
