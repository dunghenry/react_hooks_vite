import React from 'react'
import { useRef } from 'react'
import Video from './Video'
const UseImperativeHandle = () => {
    const videoRef = useRef();
    React.useEffect(() => {
        console.log(videoRef.current)
    }, [])

    const handlePlay = () => {
        // videoRef.current.remove();
        videoRef.current.play();
    }
    const handlePause = () => {
        videoRef.current.pause();
    }
    return (
        <div>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button> &nbsp;
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default UseImperativeHandle