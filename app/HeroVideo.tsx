"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type Props = {
  src: string;
};

export default function HeroVideo({ src }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
  }, []);

  const toggle = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  }, []);

  return (
    <div className={styles.heroVideoStrip}>
      <div className={styles.heroVideoAspect}>
        <video
          ref={ref}
          className={styles.heroVideo}
          src={src}
          autoPlay
          muted
          playsInline
          loop
          aria-label="Ethereum at Network School"
        />
        <button
          type="button"
          className={styles.heroVideoToggle}
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
