import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
import Img_106 from '@/static/imgs/escuchadigital 1.png';
import {
    Card,
    Block,
    Row,
    Col,
    Icon,
    Range
} from 'framework7-react';
import { disableFragmentWarnings } from 'graphql-tag';


var placeHolderVideos = [
    'https://www.youtube.com/watch?v=lXMskKTw3Bc',
    'https://www.youtube.com/watch?v=4aneAWxzOUk',
    'https://www.youtube.com/watch?v=bpszIdtcWQc',
    'https://www.youtube.com/watch?v=iWj_USKu0mI',
    'https://www.youtube.com/watch?v=ZwL-L8v-f4g',
    'https://www.youtube.com/watch?v=b7zTQ0AHiYY',
    'https://www.youtube.com/watch?v=E4av4GX7mw8',
    'https://www.youtube.com/watch?v=BFoaeZ-ptHo',
    'https://www.youtube.com/watch?v=fmTwlDG7INM',
    'https://www.youtube.com/watch?v=TTSer9C5SrY'];

const RandomLink = () => {
    return placeHolderVideos[Math.floor(Math.random() * placeHolderVideos.length)];
}

export default class RadioPlayer extends Component {
    constructor() {
        super();

        const bufferSeconds = 2;

        this.state = {
            url: null,
            pip: false,
            playing: false,
            controls: true,
            light: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        }

        this.load = url => {
            this.setState({
                url,
                playing: false,
                played: 0,
                loaded: 0,
                pip: false
            })
        }

        this.handlePlayPause = () => {
            this.setState({ playing: !this.state.playing });
        }

        this.handleStop = () => {
            this.setState({ url: null, playing: false });
        }

        this.handleToggleControls = () => {
            const url = this.state.url
            this.setState({
                controls: !this.state.controls,
                url: null
            }, () => this.load(url));
        }

        this.handleToggleLight = () => {
            this.setState({ light: !this.state.light })
        }

        this.handleToggleLoop = () => {
            this.setState({ loop: !this.state.loop })
        }

        this.handleVolumeChange = e => {
            this.setState({ volume: parseFloat(e.target.value) })
        }

        this.handleToggleMuted = () => {
            this.setState({ muted: !this.state.muted })
        }

        this.handleSetPlaybackRate = e => {
            this.setState({ playbackRate: parseFloat(e.target.value) })
        }

        this.handleTogglePIP = () => {
            this.setState({ pip: !this.state.pip })
        }

        this.handlePlay = () => {
            this.setState({ playing: true })
        }

        this.handleEnablePIP = () => {
            this.setState({ pip: true })
        }

        this.handleDisablePIP = () => {
            this.setState({ pip: false })
        }

        this.handlePause = () => {
            this.setState({ playing: false })
        }

        this.handleSeekMouseDown = e => {
            this.setState({ seeking: true })
        }

        this.handleSeekChange = e => {
            this.setState({ played: parseFloat(e.target.value) })
        }

        this.handleSeekMouseUp = e => {
            this.setState({ seeking: false })

            let progress = parseFloat(e.target.value);
            let bufferLoadedSeconds = (this.state.loadedSeconds - bufferSeconds > 0) ? this.state.loadedSeconds - bufferSeconds : 0.00001;
            let newSeconds = bufferLoadedSeconds * progress;
            //console.error(`New seconds to jump to: ${newSeconds} (out of ${this.state.loadedSeconds})`);

            //console.log(this.player);
            // this.player.seekTo(parseFloat(e.target.value))
            this.player.seekTo(newSeconds < 1 ? 1 : newSeconds);
        }

        this.handleProgress = state => {

            let currentLoadedSeconds = (state.loadedSeconds - bufferSeconds) > 0 ? state.loadedSeconds - bufferSeconds : 0.0001
            let progress = 1 / currentLoadedSeconds * state.playedSeconds;
            state.played = progress;
            //console.log('onProgress', state)

            // We only want to update time slider if we are not currently seeking
            if (!this.state.seeking) {
                this.setState(state)
            }
        }

        this.handleEnded = () => {
            //console.log('onEnded')
            this.setState({ playing: this.state.loop })
        }

        this.handleDuration = (duration) => {
            //console.log('onDuration', duration)
            this.setState({ duration })
        }

        this.handleClickFullscreen = () => {
            screenfull.request(findDOMNode(this.player))
        }

        this.renderLoadButton = (url, label) => {
            return (
                <button onClick={() => this.load(url)}>
                    {label}
                </button>
            );
        }

        this.ref = player => {
            this.player = player
        }
    }

    render() {
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
        return (
            <Fragment>
                <ReactPlayer
                    ref={this.ref}
                    url={url}
                    url="https://www.youtube.com/watch?v=ZEy36W1xX8c"
                    pip={pip}
                    playing={playing}
                    controls={controls}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onReady={() => console.log("aAAAH ESTOY READY")}
                    onStart={() => console.log("LE PIQUE A START AHAHAHAHAHHHHAAA")}
                    onPlay={this.handlePlay}
                    onEnablePIP={this.handleEnablePIP}
                    onDisablePIP={this.handleDisablePIP}
                    onPause={this.handlePause}
                    onBuffer={() => console.log("Buffer unu")}
                    onSeek={e => console.log('onSeek', e)}
                    onEnded={this.handleEnded}
                    onError={e => console.log('onError', e)}
                    onProgress={this.handleProgress}
                    onDuration={this.handleDuration}
                    width="100%"
                    height="0"
                    className="display-none"
                />
                <Block className="radio-ui display-flex flex-direction-column">
                    <Block className="display-flex top-wrapper">
                        <Block className="logo-radio">
                            <img src={Img_106} alt="" />
                        </Block>
                        <Block className="content-radio">
                            <h1 className="title">digital 106.5 FM</h1>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eveniet est quidem error alias. Earum blanditiis commodi molestiae laudantium, accusamus sequi modi officia molestias atque! Error eveniet quam minus aliquam!</p>
                        </Block>
                    </Block>
                    <Block className="controls-wrapper display-flex justify-content-center align-items-center">
                        <Block className="controls display-flex align-items-center">
                            <a onClick={() => { }}>
                                <Icon material="play_arrow" /> {/* pause */}
                            </a>
                            <a onClick={() => { }}>
                                <Icon material="stop" />
                            </a>
                            <a onClick={() => { }}>
                                <Icon material="volume_up" />
                            </a>
                            <Range
                                min={0}
                                max={1}
                                step={0.1}
                                value={volume}
                                onRangeChange={this.handleVolumeChange}
                            ></Range>
                        </Block>
                    </Block>
                    <Block className="logo-RCG">
                        <img src="" alt="" />
                    </Block>
                    {/* <Row>
                        <Col>
                            <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                        </Col>
                        <Col>
                            <button onClick={this.handleStop}>Stop</button>
                        </Col>
                        <Col>
                            <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                        </Col>
                    </Row> */}
                </Block>
            </Fragment>
        )
    }
}