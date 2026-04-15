"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./opendays.module.css";

const galleryImages = [
  "/opendays-gallery/04.png",
  "/opendays-gallery/02.png",
  "/opendays-gallery/03.png",
  "/opendays-gallery/01.png",
  "/opendays-gallery/05.png",
  "/opendays-gallery/06.png",
] as const;

const AUTO_ADVANCE_MS = 5000;

export default function OpenDaysGallery() {
  const [index, setIndex] = useState(0);
  const total = galleryImages.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [total]);

  const showPrevious = () => {
    setIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setIndex((current) => (current + 1) % total);
  };

  return (
    <div className={styles.galleryStrip} aria-label="Event photo gallery">
      <div className={styles.galleryAspect}>
        <div className={styles.galleryTrack} style={{ transform: `translateX(-${index * 100}%)` }}>
          {galleryImages.map((src, imageIndex) => (
            <div key={src} className={styles.gallerySlide}>
              <Image
                src={src}
                alt={`Event photo ${imageIndex + 1}`}
                fill
                sizes="100vw"
                className={styles.galleryImage}
                priority={imageIndex === 0}
              />
            </div>
          ))}
        </div>
        <button type="button" className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`} onClick={showPrevious} aria-label="Previous photo">
          ←
        </button>
        <button type="button" className={`${styles.galleryArrow} ${styles.galleryArrowRight}`} onClick={showNext} aria-label="Next photo">
          →
        </button>
      </div>
    </div>
  );
}
