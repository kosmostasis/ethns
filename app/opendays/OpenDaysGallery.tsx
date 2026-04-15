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
  // Start on the first real slide (index 1) because we render a clone at each end.
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const total = galleryImages.length;
  const slides = [galleryImages[total - 1], ...galleryImages, galleryImages[0]];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [total]);

  const showPrevious = () => {
    setAnimate(true);
    setIndex((current) => current - 1);
  };

  const showNext = () => {
    setAnimate(true);
    setIndex((current) => current + 1);
  };

  const handleTransitionEnd = () => {
    // Jump between cloned edge slides and their real counterparts with no animation.
    if (index === 0) {
      setAnimate(false);
      setIndex(total);
      return;
    }

    if (index === total + 1) {
      setAnimate(false);
      setIndex(1);
    }
  };

  return (
    <div className={styles.galleryStrip} aria-label="Event photo gallery">
      <div className={styles.galleryAspect}>
        <div
          className={styles.galleryTrack}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animate ? undefined : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((src, imageIndex) => (
            <div key={`${src}-${imageIndex}`} className={styles.gallerySlide}>
              <Image
                src={src}
                alt={`Event photo ${((imageIndex - 1 + total) % total) + 1}`}
                fill
                sizes="100vw"
                className={styles.galleryImage}
                priority={imageIndex === 1}
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
