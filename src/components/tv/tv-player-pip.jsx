import ReactPlayer from "react-player";
import { Block, Icon } from "framework7-react";
import React, { useEffect, useState } from "react";

export default function TVPlayerPIP(props) {
	const { url, name, play } = props;

	const [playPause, setPlayPause] = useState(false);

	const handlePlayPause = () => {
		setPlayPause(!playPause);
	};

	const handleClose = () => {
		console.log("close");
	};

	useEffect(() => {
		setPlayPause(play);
	}, []);

	return (
		<Block className="player-wrapper tv-player-pip">
			{/* Aqui va el stream */}
			<Block className="controls">
				<a className="anchorClose" onClick={handleClose}>
					<Icon className="close" material="close"></Icon>
				</a>
				<a className="anchorPlay" onClick={handlePlayPause}>
					<Icon className="play" material={playPause ? "pause" : "play_arrow"}></Icon>
				</a>
			</Block>
			<ReactPlayer className="player-tv" url={url} playing={playPause} pip={true} stopOnUnmount={false} />
            <Block className="info">
				<p>{name}</p>
			</Block>
		</Block>
	);
}
