"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./page.module.css";

type Event = {
  date: string;
  title: string;
  href: string;
  location?: string;
};

export default function UpcomingEvents({ events }: { events: readonly Event[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={styles.upcomingScrollWrap}>
      {canScrollLeft && (
        <div className={styles.upcomingArrowLeft} aria-hidden="true">←</div>
      )}
      <div className={styles.upcomingScroll} ref={scrollRef}>
        {events.map((event) => {
          const isOpenDay = event.title.startsWith("OPEN DAY:");
          const displayTitle = isOpenDay ? event.title.slice("OPEN DAY: ".length) : event.title;
          return (
            <a
              key={event.title}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.upcomingCard}${isOpenDay ? ` ${styles.upcomingCardOpenDay}` : ""}`}
            >
              {isOpenDay && <div className={styles.openDayBar}>OPEN DAY</div>}
              <span className={styles.eventDate}>{event.date}</span>
              <span className={styles.upcomingCardTitle}>
                {displayTitle}
                {event.location ? (
                  <span className={styles.eventLocation}> · {event.location}</span>
                ) : null}
              </span>
            </a>
          );
        })}
      </div>
      {canScrollRight && (
        <div className={styles.upcomingScrollArrow} aria-hidden="true">→</div>
      )}
    </div>
  );
}
