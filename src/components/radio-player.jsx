import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import {
    Card,
    Block,
    Row,
    Col
} from 'framework7-react';


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
        console.log(this);

        this.state = {
            url: null,
            pip: false,
            playing: false,
            controls: false,
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
            console.log(`Loading new button`, url);
            this.setState({
                url,
                played: 0,
                loaded: 0,
                pip: false
            })
        }

        this.handlePlayPause = () =>  {
            console.log("PLay play play!");
            this.setState({playing: !this.state.playing});
        }

        this.handleStop = () => {
            this.setState({url: null, playing:false});
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
            console.log('onPlay')
            this.setState({ playing: true })
        }
    
        this.handleEnablePIP = () => {
            console.log('onEnablePIP')
            this.setState({ pip: true })
        }
    
        this.handleDisablePIP = () => {
            console.log('onDisablePIP')
            this.setState({ pip: false })
        }
    
        this.handlePause = () => {
            console.log('onPause')
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
            this.player.seekTo(parseFloat(e.target.value))
        }
    
        this.handleProgress = state => {
            console.log('onProgress', state)
            // We only want to update time slider if we are not currently seeking
            if (!this.state.seeking) {
                this.setState(state)
            }
        }
    
        this.handleEnded = () => {
            console.log('onEnded')
            this.setState({ playing: this.state.loop })
        }
    
        this.handleDuration = (duration) => {
            console.log('onDuration', duration)
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

        // function 
    }

    render () {
        return (
            <Card>
                <ReactPlayer 
                    ref={this.ref}
                    url={this.state.url}
                    // url="https://www.youtube.com/watch?v=ZEy36W1xX8c"
                    pip={this.state.pip}
                    playing={this.state.playing}
                    controls={this.state.controls}
                    light={this.state.light}
                    loop={this.state.loop}
                    playbackRate={this.state.playbackRate}
                    volume={this.state.volume}
                    muted={this.state.muted}
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
                />
                <Row>
                    <Col>
                    {/* <ReactPlayer url={this.state.url} width="100%" height="100px" playing={true} loop={true}/> */}

                        imagen
                    </Col>
                    <Col>
                        <b>digital 106.5 FM</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eveniet est quidem error alias. Earum blanditiis commodi molestiae laudantium, accusamus sequi modi officia molestias atque! Error eveniet quam minus aliquam!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.renderLoadButton('https://www.youtube.com/watch?v=ZEy36W1xX8c', 'MeltyLand')}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.handlePlayPause}>{this.state.playing ? 'Pause' : 'Play'}</button>
                    </Col>
                    <Col>
                        <button onClick={this.handleStop}>Stop</button>
                    </Col>
                    <Col>
                        Skip
                    </Col>
                    <Col>
                        <input type='range' min={0} max={1} step='any' value={this.state.volume} onChange={this.handleVolumeChange}/>
                    </Col>
                </Row>
            </Card>
        )
    }
}