import ReactPlayer from "react-player";
import { Block, f7, Icon } from "framework7-react";
import React, { useEffect, useState } from "react";

export default function TVPlayerPIP(props) {
	const { url, name, play } = props;

	const [playPause, setPlayPause] = useState(false);
	let TVPlay = f7.methods.get_TVPlay();

	const handlePlayPause = () => {
		if(!playPause){
			f7.methods.set_RadioPlay(false);
		}
		setPlayPause(!playPause);
		f7.methods.set_TVPlay(!playPause);
	};

	const handleClose = () => {
		setPlayPause(false);
		f7.methods.set_TVPlay(false);
		f7.methods.set_TVActive(false);
		f7.methods.set_TVURL("");
		f7.methods.set_TVName("");
	};

	useEffect(() => {
		setPlayPause(TVPlay);
	}, [TVPlay]);

	return (
		<Block className={"player-wrapper tv-player-pip"}>
			<Block className="controls">
				<a className="anchorPlay" onClick={handlePlayPause}>
					<Icon className="play" material={playPause ? "pause" : "play_arrow"}></Icon>
				</a>
				<a className="anchorClose" onClick={handleClose}>
					<Icon className="close" material="close"></Icon>
				</a>
			</Block>
			<ReactPlayer className="player-tv" url={url} playing={playPause} pip={true} stopOnUnmount={false} />
            <Block className="info">
				{name}
			</Block>
		</Block>
	);
}
