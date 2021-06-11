import ReactPlayer from 'react-player';
import React from "react";
import {
    Block,
} from 'framework7-react';

export default function RadioPanelStatic(props) {
    const {url, volume, play, muted} = props;
    return (
        <Block className="display-none">
            <ReactPlayer
                url={url}
                playing={play}
                volume={volume}
                muted={muted}
                // stopOnUnmount={false}
                className="display-none radio-player"
            />
        </Block>
    );
}