import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    List,
    ListItem,
    Block,
    Link,
} from 'framework7-react';

export default class LeftPanel extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Block>
                <Card>
                    <CardHeader>
                        En Vivo
                    </CardHeader>
                    <List>
                        <ListItem title="Link 1" link="#"></ListItem>
                        <ListItem title="Link 2" link="#"></ListItem>
                        <ListItem title="Link 3" link="#"></ListItem>
                    </List>
                </Card>
                <Card>
                    <CardHeader>
                        Radio
                    </CardHeader>
                    <List>
                        <ListItem title="Link 1" link="#"></ListItem>
                        <ListItem title="Link 2" link="#"></ListItem>
                    </List>
                </Card>
                <Card>
                    <List>
                        <ListItem title="Link 1" link="#"></ListItem>
                        <ListItem title="Link 2" link="#"></ListItem>
                        <ListItem title="Link 3" link="#"></ListItem>
                    </List>
                </Card>
                <Card>
                    <CardHeader>
                        Siguenos en:
                    </CardHeader>
                    <List>
                        <ListItem title="Link 1" link="#"></ListItem>
                        <ListItem title="Link 2" link="#"></ListItem>
                        <ListItem title="Link 3" link="#"></ListItem>
                        <ListItem title="Link 3" link="#"></ListItem>
                    </List>
                </Card>
                <Card>
                    <List>
                        <ListItem title="Link 1" link="#"></ListItem>
                        <ListItem title="Link 2" link="#"></ListItem>
                    </List>
                </Card>
                <Block>
                    <Link href={false}>Derecho de replica</Link>
                    <Link href={false}>Aviso de privacidad</Link>
                    <Link href={false}>OPI 2017</Link>
                    <Link href={false}>OPI 2018</Link>
                    <Link href={false}>SEG</Link>
                    <Link href={false}>©2020 RCG</Link>
                </Block>
            </Block>
        );
    }
}