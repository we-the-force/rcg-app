import React, { Component } from 'react';
import Portada from '@/static/imgs/Espectaculares-Portada 1.png'
import {
    Block,
    Card,
    BlockHeader,
    f7
} from 'framework7-react';

export default function EspectacularPanel(props) {
    const { info, clientes } = props;
    let DB_url = f7.methods.get_URL_DB();
    return (
        <Block className="center_panel espectacular_panel">
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h2>nosotros</h2>
                    </BlockHeader>
                    <div className="content">
                        <p>{info.nosotros}</p>
                        <div className="quote">
                            <p className="text">RCG espectaculares somos una empresa líder en publicidad, por la permanencia y crecimiento continuo de nuestros clientes. Además, contamos con personal profesional cualificado para garantizar y superar sus expectativas en innovación publicitaria.</p>
                        </div>
                    </div>
                    <div className="img_cont">
                        <img src={DB_url + info.NosotrosImagen.url} alt="" />
                    </div>
                </Block>
            </Card>
            <Card>
                <Block className="back">
                    <BlockHeader>
                        <h2>¿por qué nosotros?</h2>
                    </BlockHeader>
                    <div className="content">
                        <p>{info.porque_nosotros}</p>
                    </div>
                    <div className="img_cont">
                        <img src={DB_url + info.PorqueNosotrosImagen.url} alt="" />
                    </div>
                </Block>
            </Card>
            <Card className="clientes">
                <Block className="back">
                    <BlockHeader>
                        <h2>nuestros clientes</h2>
                    </BlockHeader>
                    <Block className="content">
                        {
                            clientes.map((cliente, key) => {
                                return (
                                    <div className="img_cont" key={key}>
                                        <img src={DB_url + cliente.logo.url} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Block>
                </Block>
            </Card>
            <div className="portada_cont">
                <img src={Portada} alt="" />
            </div>
        </Block>
    )
}