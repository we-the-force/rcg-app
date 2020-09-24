import React, {useEffect, useState} from 'react';
import {
    Block,
    Card,
    CardHeader,
    Link,
    f7ready,
    f7
} from 'framework7-react';

export default function CalcasPanel(props) {

    function handleCalcaSubmit(e) {
        if (document.getElementById("calca-privacy").checked)
        {
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

            }
            else
            {
                console.log(`Ocurrio un error procesando la peticion:\r\n${isRequestValid.message}`);
            }

            console.log(requestValue);
        }
        else
        {
            console.log("Acepta los terminos prro");
        }
    }
    function validateData(calcaRequest)
    {
        let auxResponse = {
            result: true,
            message: ""
        }
        let errors;

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