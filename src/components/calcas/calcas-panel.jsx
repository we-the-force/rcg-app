import React, {useEffect, useState} from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import {
    Block,
    Card,
    CardHeader,
    Link,
    f7ready,
    f7
} from 'framework7-react';

const UPDATE_CALCA = gql`
    mutation CreateCalca($nombre: String! $dir: String! $ciudad: String! $tel: String! $serial: String!) {
        createCalca(
            input: {
            data: {
                nombre: $nombre
                direccion: $dir
                ciudad: $ciudad
                telefono: $tel
                numero_calca: $serial
            }
            }
        )
        {
            calca {
            nombre
            direccion
            ciudad
            telefono
            numero_calca
            }
        }
    }
`;


export default function CalcasPanel(props) {
    const [createCalca] = useMutation(UPDATE_CALCA);

    var isUpdating = false;
    function handleCalcaSubmit(e) {
        if (document.getElementById("calca-privacy").checked && !isUpdating)
        {
            isUpdating = true;
            let requestValue = {
                name: (document.getElementById("calca-name").value).trim(),
                address: (document.getElementById("calca-address").value).trim(),
                city: (document.getElementById("calca-city").value).trim(),
                phone: (document.getElementById("calca-phone").value).trim(),
                serial: (document.getElementById("calca-serial").value).trim()
            };
    
            let isRequestValid = validateData(requestValue);

            if (isRequestValid.result)
            {
                /*
                    Para las calcas:
                        Se pueden mas de una por nombre? Que tal por telefono?
                        El serial es alfanumerico?
                */

                let potato = createCalca({
                    variables: {
                        "nombre": requestValue.name,
                        "dir": requestValue.address,
                        "ciudad": requestValue.city,
                        "tel": requestValue.phone,
                        "serial": requestValue.serial 
                    }}).then((res) => {
                        isUpdating = false;
                        console.log("Inside promise then :D", res);
                        createPopup();
                    }).catch((err) => {
                        console.log("Error inside of createCalca", err);
                    });
            }
            else
            {
                isUpdating = false;
                // f7.methods.alert();
                // f7.methods.alert(`Ocurrio un error procesando la peticion:\r\n${isRequestValid.message}`);
                console.log(`Ocurrio un error procesando la peticion:\r\n${isRequestValid.message}`);
            }

            console.log(requestValue);
        }
        else
        {
            if (!isUpdating)
            {
                console.log("Acepta los terminos prro");
            }
            else
            {
                console.log("Esta haciendo el mutation");
            }
        }
    }
    function validateData(calcaRequest)
    {
        let auxResponse = {
            result: true,
            message: ""
        }
        let errors = 0;

        if (calcaRequest.name === "")
        {
            auxResponse.result = false;
            auxResponse.message += "Te falta el nombre";
            errors++;
        }
        if (calcaRequest.address === "")
        {
            auxResponse.result = false;
            auxResponse.message += errors === 0 ? "Te falta la direccion" : ", la direccion";
            errors++;
        }
        if (calcaRequest.city === "")
        {
            auxResponse.result = false;
            auxResponse.message += errors === 0 ? "Te falta la ciudad" : ", la ciudad";
            errors++;
        }
        if (calcaRequest.phone === "")
        {
            auxResponse.result = false;
            auxResponse.message += errors === 0 ? "Te falta el telefono" : ", el telefono";
            errors++;
        }
        if (calcaRequest.serial === "")
        {
            auxResponse.result = false;
            auxResponse.message += errors === 0 ? "Te falta el serial" : " y el serial";
            errors++;
        }

        auxResponse.message += ".";

        return auxResponse;
    }


    function createPopup() {
        console.log("Create Popup:\r\n", f7.popup.create);
        var pop = f7.popup.create({
          content: `
            <div class="popup">
              <div class="page">
                <div class="navbar">
                  <div class="navbar-bg">
                  <div class="navbar-inner">
                    <div class="title">Dynamic Popup</div>
                    <div class="right"><a href="#" class="link popup-close">Close</a></div>
                  </div>
                </div>
                <div class="page-content">
                  <div class="block">
                    <p>This popup was created dynamically</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
        });
      
      // Open it
      pop.open();
    }

    return (
        <Block className="calca_panel center_panel">
            <Card className="head">
                <CardHeader>
                    REGISTRA TU CALCA
                </CardHeader>
            </Card>
            <Block>
                <p><b>¡Registra Tu Calca De RCG!</b></p>
                <p>Y Participa En Nuestras Promociones.</p>
            </Block>
            <Card>
                <p className="categoria registro">Registro</p>
                <input id="calca-name" type="text" placeholder="Nombre Completo"/>
                <input id="calca-address" type="text" placeholder="Direccion Completa"/>
                <input id="calca-city" type="text" placeholder="Ciudad"/>
                <input id="calca-phone" type="text" placeholder="Celular (10 Digitos)"/>
                <input id="calca-serial" type="text" placeholder="Numero De Calca"/>
                <input id="calca-privacy" type="checkbox" placeholder="Acepto el Aviso de Seguridad"/> Acepto el <a href="/aviso_privacidad">Aviso de Privacidad</a>
                <input id="calca-button" type="button" value="Registrar" onClick={handleCalcaSubmit}/>
            </Card>
            <Block>
                <p>Si aun no tienes tu <b>Calca</b> acude a nuestras pegas de calcas los viernes de <b>7:00am</b> a <b>9:00pm</b> en diferentes puntos de la ciudad, no te pierdas la programacion de <b>Radio</b> y <b>Television</b> para saber donde estaremos pegando calcas</p>
            </Block>
        </Block>
    );
}