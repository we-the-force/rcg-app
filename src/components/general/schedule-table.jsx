import React, { Component, Fragment } from 'react';
import Locutor from '@/static/imgs/locutor.png'
import moment from 'moment';
import {
    Toolbar,
    Block,
    BlockHeader,
    Link,
    Tabs,
    Tab
} from 'framework7-react';
/* 
var schedule = [];

function CreateScheduleObject(sourceObject)
{
    let auxSchedule = [];
    // console.log("CreateScheduleObject!", sourceObject);

    auxSchedule.push(CreateDaySchedule("domingo", sourceObject.domingo));
    auxSchedule.push(CreateDaySchedule("lunes", sourceObject.lunes));
    auxSchedule.push(CreateDaySchedule("martes", sourceObject.martes));
    auxSchedule.push(CreateDaySchedule("miercoles", sourceObject.miercoles));
    auxSchedule.push(CreateDaySchedule("jueves", sourceObject.jueves));
    auxSchedule.push(CreateDaySchedule("viernes", sourceObject.viernes));
    auxSchedule.push(CreateDaySchedule("sabado", sourceObject.sabado));

    return auxSchedule;
    // console.log("Result:",auxSchedule);
}

function CreateDaySchedule(dayName, daySchedule)
{
    let auxObject = {
        day: dayName,
        horas: []
    };
    // console.log(`${dayName} schedule:`);
    if (daySchedule.length > 0)
    {
        daySchedule.forEach(hourSchedule => {
            auxObject.horas.push({
                time: hourSchedule.hora_inicio.substring(0, 5),
                name: hourSchedule.programa.Nombre,
                desc: hourSchedule.programa.Descripcion
            })
        })
    }
    else
    {
        // console.log("AAAAH ESTA VACIO");
        for (let i = 0; i < 9; i++)
        {
            auxObject.horas.push({
                time: "--:--",
                name: "Sin programacion",
                desc: "Ayyy, se me paso poner programacion aqui lmao"
            })
        }
    }
    return auxObject;
} */

export default function ScheduleTable(props) {
    const { prog, table_id } = props;
    const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    const days_mobile = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

    const setTable = (x) => {
        let newTable = days.map((day) => {
            let value = [];

            if (x[day].length > 0) {
                value = x[day].map((program) => {
                    return {
                        day: day,
                        inicio: moment(program.hora_inicio, 'kk:mm:ss.sss').format('HH:mm'),
                        nombre: program.programa.Nombre,
                        desc: program.programa.Descripcion
                    };
                });

            }

            let numEmpty = 9 - value.length;

            if (numEmpty > 0) {
                for (let i = 0; i < numEmpty; i++) {
                    value.push({
                        day: day,
                        inicio: "--:--",
                        nombre: "Sin programacion",
                        desc: "No hay descripcion de este programa"
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
                                        return (
                                            <Tab key={key_hora} id={days[key] + "-tab-" + (key_hora + 1)} className="tab-content" tabActive={key_hora === 0 ? true : false}>
                                                <Block className="img_cont">
                                                    <img src={Locutor} alt="" />
                                                    <div>
                                                        <p>Nombre Del Locutor</p>
                                                    </div>
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