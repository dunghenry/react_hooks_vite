import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import video from '../../assets/videos/download.mp4';

//private video
const Video = (_, ref) => {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current.play();
        },
        pause: () => {
            videoRef.current.pause();
        }
    }))
    return (
        <div>
            <video ref={videoRef} width={300} src={video} />
        </div>
    )
}

export default forwardRef(Video)

// ? public video
// const Video = forwardRef((props, ref) => (
//     <div>
//         <video ref={ref} width={300} src={video} />
//     </div>
// ))

// export default Video