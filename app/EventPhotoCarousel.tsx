'use client'

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./page.module.css";

const photos = [
  {
    src: "/eventpics/apr26meetup.jpg",
    alt: "Ethereum Meetup in Kuala Lumpur with ETHKL & Base MY communities",
    caption: "April 25th, 2026 · Ethereum Meetup in Kuala Lumpur with ETHKL & Base MY communities",
  },
  {
    src: "/eventpics/openagentskickoff.JPG",
    alt: "ETHGlobal Open Agents Hackathon Kick-Off",
    caption: "April 23rd, 2026 · ETHGlobal Open Agents Hackathon Kick-Off",
  },
] as const;

export default function EventPhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (!playing) return;
    intervalRef.current = setInterval(next, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, next]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const photo = photos[index];

  return (
    <div
      className={styles.heroPhotoPanel}
      aria-label="Latest events photos"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.stripHeader}>
        <h2 className={styles.stripTitle}>Latest Events</h2>
        <span className={styles.carouselDots} aria-hidden>
          {photos.map((_, i) => (
            <button
              key={i}
              className={i === index ? styles.carouselDotActive : styles.carouselDot}
              onClick={() => setIndex(i)}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </span>
      </div>
      <div className={styles.singlePhotoWrap}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className={styles.photoThumbImg}
          sizes="(max-width: 900px) 100vw, 40vw"
          priority={index === 0}
        />
        <button className={styles.carouselArrowLeft} onClick={prev} aria-label="Previous photo">&#8249;</button>
        <button className={styles.carouselArrowRight} onClick={next} aria-label="Next photo">&#8250;</button>
        {hovered && (
          <button
            className={styles.carouselPlayPause}
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            {playing ? "⏸" : "▶"}
          </button>
        )}
      </div>
      <p className={styles.photoCaption}>{photo.caption}</p>
    </div>
  );
}
