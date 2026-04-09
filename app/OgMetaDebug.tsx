"use client";

import { useEffect } from "react";

export default function OgMetaDebug() {
  useEffect(() => {
    const ogImageMeta = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    const ogUrl = ogImageMeta?.content ?? null;

    const sendLog = (hypothesisId: string, message: string, data: Record<string, unknown>) => {
      // #region agent log
      fetch("http://127.0.0.1:7564/ingest/d1058716-6819-4b0a-a31f-107b53389e97", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "817af5" },
        body: JSON.stringify({
          sessionId: "817af5",
          runId: "run1",
          hypothesisId,
          location: "app/OgMetaDebug.tsx:useEffect",
          message,
          data,
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
    };

    sendLog("H1-H3", "OG meta tags detected", {
      pageUrl: window.location.href,
      ogImage: ogUrl,
      twitterImage:
        (document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null)?.content ?? null,
      hasOgImage: Boolean(ogUrl),
    });

    if (!ogUrl) return;
    const probe = new window.Image();
    probe.onload = () => {
      sendLog("H4-H5", "OG image browser probe loaded", {
        ogImage: ogUrl,
        naturalWidth: probe.naturalWidth,
        naturalHeight: probe.naturalHeight,
      });
    };
    probe.onerror = () => {
      sendLog("H4-H5", "OG image browser probe failed", {
        ogImage: ogUrl,
      });
    };
    probe.src = ogUrl;
  }, []);

  return null;
}
