import React, { Component } from 'react';
import {
    Toolbar,
    Block,
    Link,
    Tabs,
    Tab
} from 'framework7-react';

var schedule = [
    { time: '08:00', name: 'Program 1' },
    { time: '07:30', name: 'Program 2' },
    { time: '09:00', name: 'Program 3' },
    { time: '11:00', name: 'Program 4' },
    { time: '13:30', name: 'Program 5' },
    { time: '15:00', name: 'Program 6' },
    { time: '17:30', name: 'Program 7' },
    { time: '20:00', name: 'Program 8' },
    { time: '22:30', name: 'Program 9' }]

export default class TVScheduleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Block className="schedule">
                {/* Columns */}
                <Toolbar tabbar className="week_toolbar">
                    <Link tabLink="#domingo" tabLinkActive>Domingo</Link>
                    <hr />
                    <Link tabLink="#lunes">Lunes</Link>
                    <hr />
                    <Link tabLink="#martes">Martes</Link>
                    <hr />
                    <Link tabLink="#miercoles">Miercoles</Link>
                    <hr />
                    <Link tabLink="#jueves">Jueves</Link>
                    <hr />
                    <Link tabLink="#viernes">Viernes</Link>
                    <hr />
                    <Link tabLink="#sabado">Sabado</Link>
                </Toolbar>
                <Tabs className="week_tabs">
                    <Tab id="domingo" tabActive>
                        <Toolbar tabbar>
                            <Link tabLink="#domingo-tab-1" className="v1" tabLinkActive>
                                <div className="time">
                                    <p>6:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                                {/* <div className="sqr"></div> */}
                            </Link>
                            <Link tabLink="#domingo-tab-2" className="v2">
                                <div className="time">
                                    <p>7:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-3" className="v1">
                                <div className="time">
                                    <p>8:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-4" className="v2">
                                <div className="time">
                                    <p>9:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-5" className="v1">
                                <div className="time">
                                    <p>10:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-6" className="v2">
                                <div className="time">
                                    <p>11:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-7" className="v1">
                                <div className="time">
                                    <p>12:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-8" className="v2">
                                <div className="time">
                                    <p>1:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-9" className="v1">
                                <div className="time">
                                    <p>2:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-9" className="v2">
                                <div className="time">
                                    <p>3:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                            <Link tabLink="#domingo-tab-9" className="v1">
                                <div className="time">
                                    <p>4:00</p>
                                </div>
                                <p className="text">Nombre Programa</p>
                            </Link>
                        </Toolbar>
                        <Tabs>
                            <Tab id="domingo-tab-1" tabActive>cont 1</Tab>
                            <Tab id="domingo-tab-2">cont 2</Tab>
                            <Tab id="domingo-tab-3">cont 3</Tab>
                            <Tab id="domingo-tab-4">cont 4</Tab>
                            <Tab id="domingo-tab-5">cont 5</Tab>
                            <Tab id="domingo-tab-6">cont 6</Tab>
                            <Tab id="domingo-tab-7">cont 7</Tab>
                            <Tab id="domingo-tab-8">cont 8</Tab>
                            <Tab id="domingo-tab-9">cont 9</Tab>
                        </Tabs>
                    </Tab>
                    <Tab id="lunes">
                        <Toolbar tabbar>
                            <Link tabLink="#lunes-tab-1" tabLinkActive>6:00</Link>
                            <Link tabLink="#lunes-tab-2">7:00</Link>
                            <Link tabLink="#lunes-tab-3">8:00</Link>
                            <Link tabLink="#lunes-tab-4">9:00</Link>
                            <Link tabLink="#lunes-tab-5">10:00</Link>
                            <Link tabLink="#lunes-tab-6">11:00</Link>
                            <Link tabLink="#lunes-tab-7">12:00</Link>
                            <Link tabLink="#lunes-tab-8">1:00</Link>
                            <Link tabLink="#lunes-tab-9">2:00</Link>
                        </Toolbar>
                        <Tabs>
                            <Tab id="lunes-tab-1" tabActive>cont 1</Tab>
                            <Tab id="lunes-tab-2" >cont 2</Tab>
                            <Tab id="lunes-tab-3" >cont 3</Tab>
                            <Tab id="lunes-tab-4" >cont 4</Tab>
                            <Tab id="lunes-tab-5" >cont 5</Tab>
                            <Tab id="lunes-tab-6" >cont 6</Tab>
                            <Tab id="lunes-tab-7" >cont 7</Tab>
                            <Tab id="lunes-tab-8" >cont 8</Tab>
                            <Tab id="lunes-tab-9" >cont 9</Tab>
                        </Tabs>
                    </Tab>
                    <Tab id="martes">
                        <Toolbar tabbar>
                            <Link tabLink="#martes-tab-1" tabLinkActive>6:00</Link>
                            <Link tabLink="#martes-tab-2">7:00</Link>
                            <Link tabLink="#martes-tab-3">8:00</Link>
                            <Link tabLink="#martes-tab-4">9:00</Link>
                            <Link tabLink="#martes-tab-5">10:00</Link>
                            <Link tabLink="#martes-tab-6">11:00</Link>
                            <Link tabLink="#martes-tab-7">12:00</Link>
                            <Link tabLink="#martes-tab-8">1:00</Link>
                            <Link tabLink="#martes-tab-9">2:00</Link>
                        </Toolbar>
                        <Tabs>
                            <Tab id="martes-tab-1" tabActive>cont 1</Tab>
                            <Tab id="martes-tab-2" >cont 2</Tab>
                            <Tab id="martes-tab-3" >cont 3</Tab>
                            <Tab id="martes-tab-4" >cont 4</Tab>
                            <Tab id="martes-tab-5" >cont 5</Tab>
                            <Tab id="martes-tab-6" >cont 6</Tab>
                            <Tab id="martes-tab-7" >cont 7</Tab>
                            <Tab id="martes-tab-8" >cont 8</Tab>
                            <Tab id="martes-tab-9" >cont 9</Tab>
                        </Tabs>
                    </Tab>
                    <Tab id="miercoles">
                        <Toolbar tabbar>
                            <Link tabLink="#miercoles-tab-1" tabLinkActive>6:00</Link>
                            <Link tabLink="#miercoles-tab-2">7:00</Link>
                            <Link tabLink="#miercoles-tab-3">8:00</Link>
                            <Link tabLink="#miercoles-tab-4">9:00</Link>
                            <Link tabLink="#miercoles-tab-5">10:00</Link>
                            <Link tabLink="#miercoles-tab-6">11:00</Link>
                            <Link tabLink="#miercoles-tab-7">12:00</Link>
                            <Link tabLink="#miercoles-tab-8">1:00</Link>
                            <Link tabLink="#miercoles-tab-9">2:00</Link>
                        </Toolbar>
                        <Tabs>
                            <Tab id="miercoles-tab-1" tabActive>cont 1</Tab>
                            <Tab id="miercoles-tab-2" >cont 2</Tab>
                            <Tab id="miercoles-tab-3" >cont 3</Tab>
                            <Tab id="miercoles-tab-4" >cont 4</Tab>
                            <Tab id="miercoles-tab-5" >cont 5</Tab>
                            <Tab id="miercoles-tab-6" >cont 6</Tab>
                            <Tab id="miercoles-tab-7" >cont 7</Tab>
                            <Tab id="miercoles-tab-8" >cont 8</Tab>
                            <Tab id="miercoles-tab-9" >cont 9</Tab>
                        </Tabs>
                    </Tab>
                    <Tab id="jueves">
                        <Toolbar tabbar>
                            <Link tabLink="#jueves-tab-1" tabLinkActive>6:00</Link>
                            <Link tabLink="#jueves-tab-2">7:00</Link>
                            <Link tabLink="#jueves-tab-3">8:00</Link>
                            <Link tabLink="#jueves-tab-4">9:00</Link>
                            <Link tabLink="#jueves-tab-5">10:00</Link>
                            <Link tabLink="#jueves-tab-6">11:00</Link>
                            <Link tabLink="#jueves-tab-7">12:00</Link>
                            <Link tabLink="#jueves-tab-8">1:00</Link>
                            <Link tabLink="#jueves-tab-9">2:00</Link>
                        </Toolbar>
                        <Tabs>
                            <Tab id="jueves-tab-1" tabActive>cont 1</Tab>
                            <Tab id="jueves-tab-2" >cont 2</Tab>
                            <Tab id="jueves-tab-3" >cont 3</Tab>
                            <Tab id="jueves-tab-4" >cont 4</Tab>
                            <Tab id="jueves-tab-5" >cont 5</Tab>
                            <Tab id="jueves-tab-6" >cont 6</Tab>
                            <Tab id="jueves-tab-7" >cont 7</Tab>
                            <Tab id="jueves-tab-8" >cont 8</Tab>
                            <Tab id="jueves-tab-9" >cont 9</Tab>
                        </Tabs>
                    </Tab>
                    <Tab id="viernes">
                        <Toolbar tabbar>
                            <Link tabLink="#viernes-tab-1" tabLinkActive>6:00</Link>
                            <Link tabLink="#viernes-tab-2">7:00</Link>
                            <Link tabLink="#viernes-tab-3">8:00</Link>
                            <Link tabLink="#viernes-tab-4">9:00</Link>
                            <Link tabLink="#viernes-tab-5">10:00</Link>
                            <Link tabLink="#viernes-tab-6">11:00</Link>
                            <Link tabLink="#viernes-tab-7">12:00</Link>
                            <Link tabLink="#viernes-tab-8">1:00</Link>
                            <Link tabLink="#viernes-tab-9">2:00</Link>
                        </Toolbar>
                        <Tabs>
                            <Tab id="viernes-tab-1" tabActive>cont 1</Tab>
                            <Tab id="viernes-tab-2" >cont 2</Tab>
                            <Tab id="viernes-tab-3" >cont 3</Tab>
                            <Tab id="viernes-tab-4" >cont 4</Tab>
                            <Tab id="viernes-tab-5" >cont 5</Tab>
                            <Tab id="viernes-tab-6" >cont 6</Tab>
                            <Tab id="viernes-tab-7" >cont 7</Tab>
                            <Tab id="viernes-tab-8" >cont 8</Tab>
                            <Tab id="viernes-tab-9" >cont 9</Tab>
                        </Tabs>
                    </Tab>
                    <Tab id="sabado">
                        <Toolbar tabbar>
                            <Link tabLink="#sabado-tab-1" tabLinkActive>6:00</Link>
                            <Link tabLink="#sabado-tab-2">7:00</Link>
                            <Link tabLink="#sabado-tab-3">8:00</Link>
                            <Link tabLink="#sabado-tab-4">9:00</Link>
                            <Link tabLink="#sabado-tab-5">10:00</Link>
                            <Link tabLink="#sabado-tab-6">11:00</Link>
                            <Link tabLink="#sabado-tab-7">12:00</Link>
                            <Link tabLink="#sabado-tab-8">1:00</Link>
                            <Link tabLink="#sabado-tab-9">2:00</Link>
                        </Toolbar>
                        <Tabs>
                            <Tab id="sabado-tab-1" tabActive>cont 1</Tab>
                            <Tab id="sabado-tab-2" >cont 2</Tab>
                            <Tab id="sabado-tab-3" >cont 3</Tab>
                            <Tab id="sabado-tab-4" >cont 4</Tab>
                            <Tab id="sabado-tab-5" >cont 5</Tab>
                            <Tab id="sabado-tab-6" >cont 6</Tab>
                            <Tab id="sabado-tab-7" >cont 7</Tab>
                            <Tab id="sabado-tab-8" >cont 8</Tab>
                            <Tab id="sabado-tab-9" >cont 9</Tab>
                        </Tabs>
                    </Tab>
                </Tabs>
                {/* <Row>
                    <Col>
                        {schedule.map((prog, i) => {
                            console.log("Current prog: ");
                            console.log(prog);

                            return (<Row key={i} prog={prog}>
                                <Col>{prog.time}</Col>
                                <Col>{prog.name}</Col>
                            </Row>)
                        })}
                    </Col>
                    <Col>
                        <Block>
                            <Card>
                                <img href="" alt="" />
                                Nombre del locutor
                            </Card>
                            <b>Nombre Programa</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis at culpa totam optio blanditiis illum quisquam ullam id. Autem cum modi odit aperiam pariatur voluptatum earum aut harum neque.
                            </p>
                        </Block>
                    </Col>
                </Row> */}
            </Block>
        );
    }
}