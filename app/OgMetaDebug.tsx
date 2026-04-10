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
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "7d52a3" },
        body: JSON.stringify({
          sessionId: "7d52a3",
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

    sendLog("H1-H5", "Page debug instrumentation active", {
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      ogImage: ogUrl,
      twitterImage:
        (document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null)?.content ?? null,
      hasOgImage: Boolean(ogUrl),
    });

    // Detect when the page asks the browser for permission state.
    if (typeof navigator !== "undefined" && "permissions" in navigator) {
      const permissionsApi = navigator.permissions as Permissions;
      const originalQuery = permissionsApi.query.bind(permissionsApi);
      permissionsApi.query = ((...args: Parameters<Permissions["query"]>) => {
        sendLog("H4", "navigator.permissions.query called", {
          permissionName:
            args[0] && typeof args[0] === "object" && "name" in args[0]
              ? (args[0] as PermissionDescriptor).name
              : "unknown",
        });
        return originalQuery(...args);
      }) as Permissions["query"];
    }

    const patchMethod = (
      hypothesisId: string,
      target: Record<string, unknown> | undefined,
      methodName: string,
      location: string,
    ) => {
      if (!target) return;
      const original = target[methodName];
      if (typeof original !== "function") return;
      target[methodName] = (...args: unknown[]) => {
        sendLog(hypothesisId, `${methodName} called`, {
          location,
          argsLength: args.length,
        });
        return (original as (...fnArgs: unknown[]) => unknown).apply(target, args);
      };
    };

    // Catch APIs that can trigger "other apps/services" style permission prompts.
    patchMethod("H1", navigator as unknown as Record<string, unknown>, "registerProtocolHandler", "navigator");
    patchMethod("H2", navigator as unknown as Record<string, unknown>, "share", "navigator");
    patchMethod("H3", (navigator as Navigator & { bluetooth?: unknown }).bluetooth as Record<string, unknown>, "requestDevice", "navigator.bluetooth");
    patchMethod("H3", (navigator as Navigator & { usb?: unknown }).usb as Record<string, unknown>, "requestDevice", "navigator.usb");
    patchMethod("H3", (navigator as Navigator & { serial?: unknown }).serial as Record<string, unknown>, "requestPort", "navigator.serial");
    patchMethod("H3", (navigator as Navigator & { hid?: unknown }).hid as Record<string, unknown>, "requestDevice", "navigator.hid");
    patchMethod(
      "H5",
      (navigator as Navigator & { mediaDevices?: unknown }).mediaDevices as Record<string, unknown>,
      "getDisplayMedia",
      "navigator.mediaDevices",
    );
    patchMethod(
      "H5",
      (navigator as Navigator & { mediaDevices?: unknown }).mediaDevices as Record<string, unknown>,
      "getUserMedia",
      "navigator.mediaDevices",
    );
    patchMethod(
      "H2",
      window as unknown as Record<string, unknown>,
      "open",
      "window",
    );
    patchMethod(
      "H4",
      Notification as unknown as Record<string, unknown>,
      "requestPermission",
      "Notification",
    );
    patchMethod(
      "H4",
      (navigator as Navigator & { geolocation?: unknown }).geolocation as Record<string, unknown>,
      "getCurrentPosition",
      "navigator.geolocation",
    );
    patchMethod(
      "H4",
      (navigator as Navigator & { geolocation?: unknown }).geolocation as Record<string, unknown>,
      "watchPosition",
      "navigator.geolocation",
    );

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.href;
      const isExternal = href.startsWith("http") && !href.startsWith(window.location.origin);
      sendLog("H2", "Anchor click observed", {
        href,
        target: link.target || "_self",
        rel: link.rel || "",
        isExternal,
      });
    };
    document.addEventListener("click", onDocumentClick, true);

    const onVisibilityChange = () => {
      sendLog("H2", "Visibility changed", {
        visibilityState: document.visibilityState,
      });
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

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

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}
