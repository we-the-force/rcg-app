import React from 'react';
import {
    Block,
    Card
} from 'framework7-react';

export default function LoadingPanel(props) {
    return (
        <Block className="center_panel">
            <Card
                className="skeleton-text skeleton-effect-fade"
                title="Card Header"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
                footer="Card Footer"
            ></Card>
            <Card
                className="skeleton-text skeleton-effect-fade"
                title="Card Header"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
                footer="Card Footer"
            ></Card>
            <Card
                className="skeleton-text skeleton-effect-fade"
                title="Card Header"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
                footer="Card Footer"
            ></Card>
            <Card
                className="skeleton-text skeleton-effect-fade"
                title="Card Header"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
                footer="Card Footer"
            ></Card>
            <Card
                className="skeleton-text skeleton-effect-fade"
                title="Card Header"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
                footer="Card Footer"
            ></Card>
        </Block>
    )
}