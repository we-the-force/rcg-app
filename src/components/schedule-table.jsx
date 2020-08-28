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

var schedule = [{
    day: 'domingo',
    horas: [
        { time: '08:00', name: 'Program 1' },
        { time: '07:30', name: 'Program 2' },
        { time: '09:00', name: 'Program 3' },
        { time: '11:00', name: 'Program 4' },
        { time: '13:30', name: 'Program 5' },
        { time: '15:00', name: 'Program 6' },
        { time: '17:30', name: 'Program 7' },
        { time: '20:00', name: 'Program 8' },
        { time: '22:30', name: 'Program 9' },
        { time: '23:00', name: 'Program 9' },
    ]
},
{
    day: 'lunes',
    horas: [
        { time: '08:00', name: 'Program 1' },
        { time: '07:30', name: 'Program 2' },
        { time: '09:00', name: 'Program 3' },
        { time: '11:00', name: 'Program 4' },
        { time: '13:30', name: 'Program 5' },
        { time: '15:00', name: 'Program 6' },
        { time: '17:30', name: 'Program 7' },
        { time: '20:00', name: 'Program 8' },
        { time: '22:30', name: 'Program 9' },
        { time: '23:00', name: 'Program 9' },
    ]
},
{
    day: 'martes',
    horas: [
        { time: '08:00', name: 'Program 1' },
        { time: '07:30', name: 'Program 2' },
        { time: '09:00', name: 'Program 3' },
        { time: '11:00', name: 'Program 4' },
        { time: '13:30', name: 'Program 5' },
        { time: '15:00', name: 'Program 6' },
        { time: '17:30', name: 'Program 7' },
        { time: '20:00', name: 'Program 8' },
        { time: '22:30', name: 'Program 9' },
        { time: '23:00', name: 'Program 9' },
    ]
},
{
    day: 'miercoles',
    horas: [
        { time: '08:00', name: 'Program 1' },
        { time: '07:30', name: 'Program 2' },
        { time: '09:00', name: 'Program 3' },
        { time: '11:00', name: 'Program 4' },
        { time: '13:30', name: 'Program 5' },
        { time: '15:00', name: 'Program 6' },
        { time: '17:30', name: 'Program 7' },
        { time: '20:00', name: 'Program 8' },
        { time: '22:30', name: 'Program 9' },
        { time: '23:00', name: 'Program 9' },
    ]
},
{
    day: 'jueves',
    horas: [
        { time: '08:00', name: 'Program 1' },
        { time: '07:30', name: 'Program 2' },
        { time: '09:00', name: 'Program 3' },
        { time: '11:00', name: 'Program 4' },
        { time: '13:30', name: 'Program 5' },
        { time: '15:00', name: 'Program 6' },
        { time: '17:30', name: 'Program 7' },
        { time: '20:00', name: 'Program 8' },
        { time: '22:30', name: 'Program 9' },
        { time: '23:00', name: 'Program 9' },
    ]
},
{
    day: 'viernes',
    horas: [
        { time: '08:00', name: 'Program 1' },
        { time: '07:30', name: 'Program 2' },
        { time: '09:00', name: 'Program 3' },
        { time: '11:00', name: 'Program 4' },
        { time: '13:30', name: 'Program 5' },
        { time: '15:00', name: 'Program 6' },
        { time: '17:30', name: 'Program 7' },
        { time: '20:00', name: 'Program 8' },
        { time: '22:30', name: 'Program 9' },
        { time: '23:00', name: 'Program 9' },
    ]
},
{
    day: 'sabado',
    horas: [
        { time: '08:00', name: 'Program 1' },
        { time: '07:30', name: 'Program 2' },
        { time: '09:00', name: 'Program 3' },
        { time: '11:00', name: 'Program 4' },
        { time: '13:30', name: 'Program 5' },
        { time: '15:00', name: 'Program 6' },
        { time: '17:30', name: 'Program 7' },
        { time: '20:00', name: 'Program 8' },
        { time: '22:30', name: 'Program 9' },
        { time: '23:00', name: 'Program 9' },
    ]
}]


export default class TVScheduleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(schedule)
        return (
            <Block className="schedule">
                {/* Columns */}
                <Toolbar tabbar className="week_toolbar">
                    {schedule.map((val, key) => {
                        let active = key === 0 ? true : false;
                        let dis = (schedule.length - 1) === key ? 'display-none' : 'display-flex';
                        return (
                            <Fragment key={key}>
                                <Link tabLink={"#" + val.day} tabLinkActive={active} >{val.day}</Link>
                                <hr className={dis} />
                            </Fragment>
                        );
                    })}
                </Toolbar>
                <Tabs className="week_tabs">
                    {schedule.map((val, key) => {
                        let active = key === 0 ? true : false;
                        return (
                            <Tab id={val.day} tabActive={active} key={key}>
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
                                                            Nombre Programa
                                                        </BlockHeader>
                                                        <p className="text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
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