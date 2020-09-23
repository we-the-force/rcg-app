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
        this.descripcion = marked(props.nosotrosInfo.descripcion);
        this.middleText = marked(props.nosotrosInfo.info_mid);
        this.bottomText = marked(props.nosotrosInfo.info_bottom);
    }
    render() {
        return (
            <Block className="center_panel">
                <Card className="head">
                    <CardHeader>Nosotros</CardHeader>
                </Card>
                <Card>
                    <div dangerouslySetInnerHTML={{ __html: this.descripcion}}/>
                </Card>
                <Card>
                    <div dangerouslySetInnerHTML={{ __html: this.middleText}}/>
                </Card>
                <Card>
                    <div dangerouslySetInnerHTML={{ __html: this.bottomText}}/>
                </Card>
            </Block>
        )
    }
}