import ReactPlayer from 'react-player';
import React, { useRef, useState, useEffect } from "react";
import {
    Block,
    f7,
    f7ready
} from 'framework7-react';

export default function RadioPanelStatic(props) {
    const {url, volume, play, muted} = props;
    console.log(url);
    console.log(volume);
    console.log(play);
    console.log(muted);
    return (
        <Block className="display-none">
            <ReactPlayer
                url={url}
                playing={play}
                volume={volume}
                muted={muted}
                stopOnUnmount={false}
                className="display-none radio-player"
            />
        </Block>
    );
}