"use client";

import { useRef, useEffect, useLayoutEffect, useState, useCallback } from "react";
import styles from "./page.module.css";

/** Malaysia / Singapore civil calendar (same offset; no DST). */
const EVENT_TIME_ZONE = "Asia/Singapore";

export type UpcomingEventItem = {
  date: string;
  /** YYYY-MM-DD for ordering and “today”; not shown in UI. */
  dateISO: string;
  title: string;
  href: string;
  location?: string;
};

function calendarDateISOInZone(now: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

function initialScrollIndex(events: readonly UpcomingEventItem[], todayISO: string): number {
  const todayIdx = events.findIndex((e) => e.dateISO === todayISO);
  if (todayIdx >= 0) return todayIdx;
  const futureIdx = events.findIndex((e) => e.dateISO > todayISO);
  if (futureIdx >= 0) return futureIdx;
  return Math.max(0, events.length - 1);
}

export default function UpcomingEvents({ events }: { events: readonly UpcomingEventItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [todayISO] = useState(() => calendarDateISOInZone(new Date(), EVENT_TIME_ZONE));

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container || events.length === 0) return;

    const idx = initialScrollIndex(events, todayISO);
    const card = cardRefs.current[idx];
    if (!card) return;

    /* Instant on load: avoids smooth-scroll “drift” and keeps the Today card out of the edge fades visually. */
    const left = Math.max(0, card.offsetLeft - 12);
    container.scrollTo({ left, behavior: "auto" });

    requestAnimationFrame(() => {
      updateArrows();
    });
  }, [events, todayISO, updateArrows]);

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
  }, [updateArrows]);

  const setCardRef = (index: number) => (el: HTMLAnchorElement | null) => {
    cardRefs.current[index] = el;
  };

  const firstTodayIndex = events.findIndex((e) => e.dateISO === todayISO);

  return (
    <div className={styles.upcomingScrollWrap}>
      {canScrollLeft && (
        <div className={styles.upcomingArrowLeft} aria-hidden="true">←</div>
      )}
      <div className={styles.upcomingScroll} ref={scrollRef}>
        {events.map((event, index) => {
          const isOpenDay = event.title.startsWith("OPEN DAY:");
          const displayTitle = isOpenDay ? event.title.slice("OPEN DAY: ".length) : event.title;
          const isPast = event.dateISO < todayISO;
          const isToday = event.dateISO === todayISO;

          const cardClass = [
            styles.upcomingCard,
            isOpenDay ? styles.upcomingCardOpenDay : "",
            isPast ? styles.upcomingCardPast : "",
            isToday ? styles.upcomingCardToday : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <a
              key={`${event.dateISO}-${event.href}`}
              ref={setCardRef(index)}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cardClass}
              aria-current={isToday && index === firstTodayIndex ? "date" : undefined}
            >
              {isOpenDay && <div className={styles.openDayBar}>OPEN DAY</div>}
              <div className={styles.upcomingCardDateRow}>
                <span className={styles.eventDate}>{event.date}</span>
                {isToday ? <span className={styles.todayChip}>Today</span> : null}
              </div>
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
