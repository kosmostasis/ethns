"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./opendays.module.css";

const YOUTUBE_VIDEO_ID = "t0Ozag90nAY";
const START_SECONDS = 344;

export default function ClosingPartyVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const src = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      loop: "1",
      playlist: YOUTUBE_VIDEO_ID,
      controls: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      start: String(START_SECONDS),
      enablejsapi: "1",
    });

    return `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?${params.toString()}`;
  }, []);

  const sendCommand = (func: "playVideo" | "pauseVideo" | "mute") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
  };

  return (
    <div className={styles.galleryStrip}>
      <div className={styles.galleryAspect}>
        <iframe
          ref={iframeRef}
          className={styles.closingPartyVideo}
          src={src}
          title="Closing Party video"
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => sendCommand("mute")}
          allowFullScreen
        />
      </div>
    </div>
  );
}
