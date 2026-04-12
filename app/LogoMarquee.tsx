import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./LogoMarquee.module.css";

export type LogoMarqueeLogo = {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
  scale?: number;
  /** When true, inverts raster colors (e.g. white mark → dark on a light page). */
  invert?: boolean;
};

export type LogoMarqueeProps = {
  logos: readonly LogoMarqueeLogo[];
  /** Scroll direction: `"left"` moves content toward the left (standard marquee). */
  direction?: "left" | "right";
  /** When set, sets desktop/tablet base duration (CSS `--marquee-user-duration`). */
  durationSec?: number;
  /** Optional narrower breakpoint override (`--marquee-user-duration-mobile`). */
  durationMobileSec?: number;
  /** Optional tablet width override (`--marquee-user-duration-tablet`). */
  durationTabletSec?: number;
  /** When true, shows a single non-scrolling row (no duplicate belt or CSS loop). */
  static?: boolean;
  /** One-time slide-in from the right before the infinite loop (ignored when `static`). */
  entrance?: boolean;
  /** Must match CSS `--marquee-loop-delay` / entrance animation duration for clean handoff. */
  entranceDurationMs?: number;
  /** Secondary row: smaller logos, lower opacity, tighter vertical rhythm. */
  visualWeight?: "default" | "subtle";
  "aria-label"?: string;
  className?: string;
};

function renderLogoRow(
  logos: readonly LogoMarqueeLogo[],
  keyPrefix: string,
  itemClass: string,
  imageClass: string,
) {
  return logos.map((logo, index) => (
    <a
      key={`${keyPrefix}-${logo.name}-${index}`}
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={logo.name}
      className={itemClass}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className={[imageClass, logo.invert ? styles.logoMarqueeImageInvert : ""].filter(Boolean).join(" ")}
        style={{ "--logo-scale": logo.scale != null ? logo.scale : 1 } as CSSProperties}
      />
    </a>
  ));
}

export default function LogoMarquee({
  logos,
  direction = "left",
  durationSec,
  durationMobileSec,
  durationTabletSec,
  static: isStatic = false,
  entrance = false,
  entranceDurationMs = 720,
  visualWeight = "default",
  "aria-label": ariaLabel = "Partner logos",
  className,
}: LogoMarqueeProps) {
  const sectionStyle = {
    ...(durationSec != null ? { ["--marquee-user-duration" as string]: `${durationSec}s` } : {}),
    ...(durationMobileSec != null ? { ["--marquee-user-duration-mobile" as string]: `${durationMobileSec}s` } : {}),
    ...(durationTabletSec != null ? { ["--marquee-user-duration-tablet" as string]: `${durationTabletSec}s` } : {}),
    ...(entrance && !isStatic
      ? {
          ["--marquee-entrance-duration" as string]: `${entranceDurationMs}ms`,
          ["--marquee-loop-delay" as string]: `${entranceDurationMs}ms`,
        }
      : {}),
  } as CSSProperties;

  const belt = isStatic ? (
    <div className={`${styles.marqueeBelt} ${styles.marqueeBeltStatic}`}>
      {renderLogoRow(logos, "a", styles.logoMarqueeItem, styles.logoMarqueeImage)}
    </div>
  ) : (
    <div
      className={styles.marqueeBelt}
      data-direction={direction}
      data-loop-delay={entrance ? "on" : "off"}
    >
      {renderLogoRow(logos, "a", styles.logoMarqueeItem, styles.logoMarqueeImage)}
      {renderLogoRow(logos, "b", styles.logoMarqueeItem, styles.logoMarqueeImage)}
    </div>
  );

  const showEntrance = entrance && !isStatic;

  return (
    <section
      className={
        [
          styles.logoMarqueeSection,
          visualWeight === "subtle" ? styles.logoMarqueeSectionSubtle : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")
      }
      aria-label={ariaLabel}
      style={sectionStyle}
    >
      <div className={styles.marqueeMask}>
        {showEntrance ? (
          <div className={styles.marqueeEntrance} data-entrance="on">
            {belt}
          </div>
        ) : (
          belt
        )}
      </div>
    </section>
  );
}
