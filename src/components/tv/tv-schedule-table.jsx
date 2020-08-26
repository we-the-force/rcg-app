import React, { Component } from 'react';
import { 
    Card, 
    Block,
    Col,
    Row 
} from 'framework7-react';

var schedule = [
    {time: '08:00', name: 'Program 1'},
    {time: '07:30', name: 'Program 2'},
    {time: '09:00', name: 'Program 3'},
    {time: '11:00', name: 'Program 4'},
    {time: '13:30', name: 'Program 5'},
    {time: '15:00', name: 'Program 6'},
    {time: '17:30', name: 'Program 7'},
    {time: '20:00', name: 'Program 8'},
    {time: '22:30', name: 'Program 9'}]

export default class TVScheduleTable extends Component { 
    constructor(props) {
        super (props);
        this.state = {}
    }
    render() {
        return (
            <Block>
                {/* Columns */}
                <Row>
                    <Col>
                        <a href="">Domingo</a>
                    </Col>
                    <Col>
                        <a href="">Lunes</a>
                    </Col>
                    <Col>
                        <a href="">Martes</a>
                    </Col>
                    <Col>
                        <a href="">Miercoles</a>
                    </Col>
                    <Col>
                        <a href="">Jueves</a>
                    </Col>
                    <Col>
                        <a href="">Viernes</a>
                    </Col>
                    <Col>
                        <a href="">Sabado</a>
                    </Col>
                </Row>
                <Row>
                    {/* Schedules */}
                    <Col>
                        { schedule.map((prog, i) => {
                            console.log("Current prog: ");
                            console.log(prog);

                            return( <Row key={i} prog={prog}>
                                        <Col>{prog.time}</Col>
                                        <Col>{prog.name}</Col>
                                    </Row> )
                        }) }
                    </Col>
                    {/* Info */}
                    <Col>
                        <Block>
                            <Card>
                                <img href="" alt=""/>
                                Nombre del locutor
                            </Card>
                            <b>Nombre Programa</b>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis at culpa totam optio blanditiis illum quisquam ullam id. Autem cum modi odit aperiam pariatur voluptatum earum aut harum neque.
                            </p>
                        </Block>
                    </Col>
                </Row>
            </Block>
        );
    }
}