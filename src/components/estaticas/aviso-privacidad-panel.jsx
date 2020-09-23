import React, {Component} from 'react';
import marked from 'marked';
import {
    Block,
    Card,
    CardHeader
} from 'framework7-react';

export default class AboutUsPanel extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.avisoPrivacidad = marked(props.avisoPriv.descripcion);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card>
                    <div dangerouslySetInnerHTML={{__html: this.avisoPrivacidad}}/>
                </Card>
            </Block>
        )
    }
}