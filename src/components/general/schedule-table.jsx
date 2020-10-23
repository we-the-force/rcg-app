import React, { Component, Fragment } from 'react';
import Locutor from '@/static/imgs/locutor.png'
import moment from 'moment';
import {
    Toolbar,
    Block,
    BlockHeader,
    Link,
    Tabs,
    Tab,
    Icon,
    f7
} from 'framework7-react';

export default function ScheduleTable(props) {
    const { prog, table_id } = props;
    const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    const days_mobile = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    const DB_url = f7.methods.get_URL_DB();

    const setTable = (x) => {
        let newTable = days.map((day) => {
            let value = [];

            if (x[day].length > 0) {
                value = x[day].map((program) => {
                    return {
                        day: day,
                        inicio: moment(program.hora_inicio, 'kk:mm:ss.sss').format('HH:mm'),
                        nombre: program.programa.Nombre,
                        desc: program.programa.Descripcion,
                        url: program.programa.cover ? program.programa.cover.url : null
                    };
                });

            }

            let numEmpty = 9 - value.length;

            if (numEmpty > 0) {
                for (let i = 0; i < numEmpty; i++) {
                    value.push({
                        day: day,
                        inicio: "--:--",
                        nombre: "Sin programación",
                        desc: "No hay descripción de este programa",
                        url: null
                    })
                }
            }

            value.sort(function (a, b) {
                let isBefore = moment(a.inicio, 'kk:mm').isBefore(moment(b.inicio, 'kk:mm'));
                return (isBefore ? -1 : 1);
            });

            return value;
        });
        return newTable;
    }

    let tabla = setTable(prog);
    return (
        <Block className="schedule">
            {/* Columns */}
            <Toolbar tabbar className="week_toolbar">
                {tabla.map((val, key) => {
                    return (
                        <Fragment key={key}>
                            <Link tabLink={"#" + days[key] + "-" + table_id} tabLinkActive={key === 0 ? true : false} >
                                <div className="desk">
                                    {days[key]}
                                </div>
                                <div className="mobile">
                                    {days_mobile[key]}
                                </div>
                            </Link>
                            <hr />
                        </Fragment>
                    );
                })}
            </Toolbar>
            <Tabs className="week_tabs">
                {tabla.map((val, key) => {
                    return (
                        <Tab id={days[key] + "-" + table_id} tabActive={key === 0 ? true : false} key={key}>
                            <Toolbar tabbar>
                                {
                                    val.map((hora, key_hora) => {
                                        return (
                                            <Link key={key_hora} tabLink={"#" + days[key] + "-tab-" + (key_hora + 1)} tabLinkActive={key_hora === 0 ? true : false}>
                                                <div className="time">
                                                    <p>{hora.inicio}</p>
                                                </div>
                                                <p className="text">{hora.nombre}</p>
                                            </Link>
                                        );
                                    })
                                }
                            </Toolbar>
                            <Tabs className="tabs-content">
                                {
                                    val.map((hora, key_hora) => {
                                        let img = hora.url ? <img src={DB_url + hora.url} alt="" /> : <Icon material="image"></Icon>;
                                        return (
                                            <Tab key={key_hora} id={days[key] + "-tab-" + (key_hora + 1)} className="tab-content" tabActive={key_hora === 0 ? true : false}>
                                                <Block className="img_cont">
                                                    {img}
                                                </Block>
                                                <Block className="content">
                                                    <BlockHeader>
                                                        {hora.nombre}
                                                    </BlockHeader>
                                                    <p className="text">
                                                        {hora.desc}
                                                    </p>
                                                </Block>
                                            </Tab>
                                        );
                                    })
                                }
                            </Tabs>
                        </Tab>
                    );
                })}
            </Tabs>
        </Block>
    );
}