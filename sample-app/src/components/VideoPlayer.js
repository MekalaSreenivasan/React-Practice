import { useEffect, useRef } from "react";

export default function VideoPlayer({src, isPlaying}) {
    const ref = useRef(null);
    useEffect(() =>{
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying])

    return <video src={src} ref={ref} loop playsInline/>
}

