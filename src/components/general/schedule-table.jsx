import React, { Component, Fragment } from 'react';
import Locutor from '@/static/imgs/locutor.png'
import {
    Toolbar,
    Block,
    BlockHeader,
    Link,
    Tabs,
    Tab
} from 'framework7-react';

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
        console.log("AAAAH ESTA VACIO");
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
}

export default class TVScheduleTable extends Component {
    constructor(props) {
        super(props);
        console.log("Props");
        console.log(this);
        schedule = CreateScheduleObject(props.prog[0].programacion);
        this.state = {}
    }
    render() {
        return (
            <Block className="schedule">
                {/* Columns */}
                <Toolbar tabbar className="week_toolbar">
                    {/* { console.log('Propies') }
                    { console.log(this) } */}
                    {schedule.map((val, key) => {
                        let active = key === 0 ? true : false;
                        let dis = (schedule.length - 1) === key ? 'display-none' : 'display-flex';
                        return (
                            <Fragment key={key}>
                                <Link tabLink={"#" + val.day + "-" + this.props.table_id} tabLinkActive={active} >{val.day}</Link>
                                <hr className={dis} />
                            </Fragment>
                        );
                    })}
                </Toolbar>
                <Tabs className="week_tabs">
                    {schedule.map((val, key) => {
                        let active = key === 0 ? true : false;
                        return (
                            <Tab id={val.day + "-" + this.props.table_id} tabActive={active} key={key}>
                                <Toolbar tabbar>
                                    {
                                        val.horas.map((val_2, key_2) => {
                                            let active_2 = key_2 === 0 ? true : false;
                                            return (
                                                <Link key={key_2} tabLink={"#" + val.day + "-tab-" + (key_2 + 1)} className={"v" + (key_2 % 2 + 1)} tabLinkActive={active_2}>
                                                    <div className="time">
                                                        <p>{val_2.time}</p>
                                                    </div>
                                                    <p className="text">{val_2.name}</p>
                                                </Link>
                                            );
                                        })
                                    }
                                </Toolbar>
                                <Tabs className="tabs-content">
                                    {
                                        val.horas.map((val_2, key_2) => {
                                            let active_2 = key_2 === 0 ? true : false;
                                            console.log("Creating description stuff");
                                            return (
                                                <Tab key={key_2} id={val.day + "-tab-" + (key_2 + 1)} className="tab-content" tabActive={active_2}>
                                                    <Block className="img_cont">
                                                        <img src={Locutor} alt="" />
                                                        <div>
                                                            <p>Nombre Del Locutor</p>
                                                        </div>
                                                    </Block>
                                                    <Block className="content">
                                                        <BlockHeader>
                                                            {val_2.name}
                                                            {/* Nombre Programa */}
                                                        </BlockHeader>
                                                        <p className="text">
                                                            {val_2.desc}
                                                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. */}
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
}