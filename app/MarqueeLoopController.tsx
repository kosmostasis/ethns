"use client";

import { useEffect } from "react";

type MarqueeLoopControllerProps = {
  trackSelector: string;
  itemSelector: string;
};

export default function MarqueeLoopController({ trackSelector, itemSelector }: MarqueeLoopControllerProps) {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>(trackSelector);
    if (!track) return;

    const measureAndApply = () => {
      const items = Array.from(track.querySelectorAll<HTMLElement>(itemSelector));
      if (items.length < 2) return;
      const half = Math.floor(items.length / 2);
      const first = items[0];
      const secondSetFirst = items[half];
      if (!first || !secondSetFirst) return;

      const travelPx = secondSetFirst.offsetLeft - first.offsetLeft;
      track.style.setProperty("--marquee-travel-px", `${travelPx}px`);
      track.dataset.marqueeReady = "true";
    };

    measureAndApply();
    const resizeObserver = new ResizeObserver(() => measureAndApply());
    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, [itemSelector, trackSelector]);

  return null;
}
