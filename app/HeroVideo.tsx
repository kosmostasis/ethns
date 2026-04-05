"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type Props = {
  src: string;
};

export default function HeroVideo({ src }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setLoadError(false);
  }, [src]);

  useEffect(() => {
    const el = ref.current;
    if (!el || loadError) return;

    const sync = () => setPlaying(!el.paused);
    el.addEventListener("play", sync);
    el.addEventListener("pause", sync);
    el.addEventListener("loadeddata", sync);
    sync();

    return () => {
      el.removeEventListener("play", sync);
      el.removeEventListener("pause", sync);
      el.removeEventListener("loadeddata", sync);
    };
  }, [loadError, src]);

  const toggle = useCallback(() => {
    const el = ref.current;
    if (!el || loadError) return;
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  }, [loadError]);

  return (
    <div className={styles.heroVideoStrip}>
      <div className={styles.heroVideoAspect}>
        <video
          ref={ref}
          className={`${styles.heroVideo}${loadError ? ` ${styles.heroVideoHidden}` : ""}`}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-label="Ethereum at Network School"
          onError={() => setLoadError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
        {loadError ? (
          <div className={styles.heroVideoError} role="alert">
            <p>Video could not be loaded. The file may be private or unavailable.</p>
            <p className={styles.heroVideoErrorHint}>
              In Vercel Blob, ensure the object is publicly readable, or set{" "}
              <code className={styles.heroVideoErrorCode}>NEXT_PUBLIC_HERO_VIDEO_URL</code> to a working MP4 URL and
              redeploy.
            </p>
          </div>
        ) : (
          <button
            type="button"
            className={styles.heroVideoToggle}
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>
    </div>
  );
}
