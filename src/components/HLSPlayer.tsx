'use client'; // MUST be a client component

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSPlayerProps {
  src: string;
}

export default function HLSPlayer({ src }: HLSPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy(); // cleanup
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [src]);

  return <video ref={videoRef} controls autoPlay muted style={{ height: "50vh" }} />;
}

