import React, { useRef } from "react";
import "./VideoPlayer.css";
const video = "https://greatstack.in/assets/college-video-6XtGR-D3.mp4"
const VideoPlayer = ({playState, setPlayState}) => {
    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }
    return (
        <div className={`video-player ${playState?'':'hide'}`} onClick={closePlayer} ref={player}>
            <video src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
