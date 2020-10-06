import React, { Fragment, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CreateCalca } from '@/graphql/queries.graphql';
import back_head from '@/static/imgs/card_back_6.png'
import {
    Block,
    Card,
    CardHeader,
    Input,
    Popup
} from 'framework7-react';

export default function CalcasPanel(props) {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [celular, setCelular] = useState('');
    const [numero, setNumero] = useState('');
    const [av_priv, setAvPriv] = useState(false)
    const [errorPopup, setErrorPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
    const [addCalca, { loading, error }] = useMutation(CreateCalca, {
        onCompleted: (data, err) => {
            setSuccessPopup(true);
            resetData();
        },
        onError: (err) => {
            setErrorPopup(true);
            resetData();
        }
    });

    const resetData = () => {
        setDireccion('');
        setNombre('');
        setCiudad('');
        setCelular('');
        setNumero('');
        setAvPriv(false);
    }

    const handleChange = (val, set) => {
        set(val);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (av_priv) {
            addCalca({
                variables: {
                    nombre: nombre,
                    dir: direccion,
                    ciudad: ciudad,
                    tel: celular,
                    serial: numero
                }
            });
        }
    }

    /* if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :&#40;</p>; */

    return (
        <Fragment>

            <Block className="calca_panel center_panel">
                <Card className="new_head">
                    <CardHeader>Registra tu calca</CardHeader>
                    <div className="head_logo">
                        <img src={back_head} alt="" />
                    </div>
                </Card>
                <Block>
                    <h1>¡Registra Tu Calca De RCG!</h1>
                    <p>Y Participa En Nuestras Promociones.</p>
                </Block>
                <Card>
                    <Block>
                        <p className="categoria registro">Registro</p>
                    </Block>
                    <form onSubmit={handleSubmit}>
                        <Input
                            value={nombre}
                            required
                            validate
                            validateOnBlur
                            pattern="^([a-zA-ZñÑ]+ ?)+"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="calca-name"
                            type="text"
                            placeholder="Nombre Completo"
                            onChange={(e) => { handleChange(e.target.value, setNombre) }}
                            onInputClear={() => { handleChange('', setNombre) }}
                        />
                        <Input
                            value={direccion}
                            required
                            validate
                            validateOnBlur
                            pattern="^[^ ][\w\W ]*"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="calca-address"
                            type="text"
                            placeholder="Direccion Completa"
                            onChange={(e) => { handleChange(e.target.value, setDireccion) }}
                            onInputClear={() => { handleChange('', setDireccion) }}
                        />
                        <Input
                            value={ciudad}
                            required
                            validate
                            validateOnBlur
                            pattern="^[^ ][\w\W ]*"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="calca-city"
                            type="text"
                            placeholder="Ciudad"
                            onChange={(e) => { handleChange(e.target.value, setCiudad) }}
                            onInputClear={() => { handleChange('', setCiudad) }}
                        />
                        <Input
                            value={celular}
                            required
                            validate
                            validateOnBlur
                            pattern="^[0-9]{10}$"
                            errorMessage="Ingrese un numero de telefono valido!"
                            clearButton
                            id="calca-phone"
                            type="text"
                            placeholder="Celular (10 Digitos)"
                            onChange={(e) => { handleChange(e.target.value, setCelular) }}
                            onInputClear={() => { handleChange('', setCelular) }}
                        />
                        <Input
                            value={numero}
                            required
                            validate
                            validateOnBlur
                            pattern="^[^ ][\w\W ]*[^ ]"
                            errorMessage="Porfavor llene este campo"
                            clearButton
                            id="calca-serial"
                            type="text"
                            placeholder="Numero De Calca"
                            onChange={(e) => { handleChange(e.target.value, setNumero) }}
                            onInputClear={() => { handleChange('', setNumero) }}
                        />
                        <Input
                            checked={av_priv}
                            required
                            validate
                            errorMessage="Acepte el aviso de privacidad"
                            id="calca-privacy"
                            type="checkbox"
                            onChange={(e) => { handleChange(e.target.checked, setAvPriv) }}
                        >
                            <span slot="info">Acepto el <a href="/aviso_privacidad" className="external" target="_blank">Aviso de Privacidad</a></span>
                        </Input>
                        <Input id="calca-button" type="submit" value="Registrar" style={{ marginTop: '50px' }} />
                    </form>
                </Card>
                <Block>
                    <p>Si aun no tienes tu <b>Calca</b> acude a nuestras pegas de calcas los viernes de <b>7:00am</b> a <b>9:00pm</b> en diferentes puntos de la ciudad, no te pierdas la programacion de <b>Radio</b> y <b>Television</b> para saber donde estaremos pegando calcas</p>
                </Block>
            </Block>
            <Popup className="errorPopup" opened={errorPopup} onPopupClosed={() => setErrorPopup(false)}>
                Upps an error
            </Popup>
            <Popup className="successPopup" opened={successPopup} onPopupClosed={() => setSuccessPopup(false)}>
                Your Calca is registered
            </Popup>
        </Fragment>
    );
}