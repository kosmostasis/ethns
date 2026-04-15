import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./oneday.module.css";

const links = {
  quickSync: "https://app.reclaim.ai/m/kosmostasis/flexible-meeting",
  ethereumHome: "https://ethereum.org",
  nsHome: "https://ns.com",
  nsAbout: "https://ns.com/about",
  nsEthns: "https://ns.com/ethns",
  ethereumAssets: "https://ethereum.org/assets/",
  lumaCalendar: "https://luma.com/ethns",
  lumaPlaceholderEvent: "https://luma.com/67p1p7sv",
  nsBannerTweet: "https://x.com/ns/status/2030311587870097572",
} as const;

export const metadata: Metadata = {
  title: "One-day events | Ethereum NS",
  description:
    "Production scope and ballpark sponsorship costs for a one-day Ethereum / EVM open house at Network School alongside Ethereum NS (May 2026).",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function OneDayPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandTitle}>
            <a href={links.ethereumHome} target="_blank" rel="noopener noreferrer" aria-label="Ethereum">
              <Image
                src="/logos-remote/eth-diamond-purple.svg"
                alt=""
                width={20}
                height={20}
                className={styles.brandLogo}
              />
            </a>
            <a href={links.nsHome} target="_blank" rel="noopener noreferrer" aria-label="Network School">
              <Image
                src="/logos-remote/ns-flag-logo-black.svg"
                alt=""
                width={20}
                height={20}
                className={styles.brandLogo}
              />
            </a>
            <a href={links.nsEthns} target="_blank" rel="noopener noreferrer" aria-label="Ethereum NS">
              <Image
                src="/ethns-header-mark.png"
                alt=""
                width={64}
                height={64}
                className={styles.brandTitleImage}
              />
            </a>
          </span>
        </div>
        <nav className={styles.nav} aria-label="Page">
          <Link href="/" className={styles.navHome}>
            Home
          </Link>
          <a href={links.lumaCalendar} target="_blank" rel="noopener noreferrer" aria-label="Luma calendar">
            <Image src="/calendar-icon.svg" alt="" width={20} height={20} className={styles.navIcon} />
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Ethereum NS · One-day format</p>
          <h1>
            One-day open house
            <br />
            <span className={styles.heroSubhead}>at Network School during Genesis Block Month</span>
          </h1>
          <p className={styles.lead}>
            Ethereum NS is a month-long Ethereum node at Network School in May 2026—built for workshops, hackathons,
            and builder lock-ins, rooted in Ethereum&apos;s values and self-sovereignty. A one-day satellite is a
            lightweight way to bring your ecosystem on-site for talks, demos, and community without committing to the
            full residency arc.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primaryCta} href={links.quickSync} target="_blank" rel="noopener noreferrer">
              Book a Quick Sync
            </a>
            <a
              className={styles.secondaryCta}
              href={links.lumaPlaceholderEvent}
              target="_blank"
              rel="noopener noreferrer"
            >
              Example event (Luma)
            </a>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="costs-heading">
          <h2 id="costs-heading">Ballpark production cost</h2>
          <p>
            Recent one-day NS-hosted events in this class—think the NS × Anthropic Claude Code meetup—have landed around{" "}
            <strong>roughly a third of typical market pricing</strong> for comparable venue-led production.
          </p>
          <div className={styles.costHighlight}>
            <p className={styles.costRange}>USD $3,000–5,000</p>
            <p className={styles.costNote}>
              Directional range only; final quotes depend on scope. Expect the total to move with food coverage,
              ground transport (e.g. buses from Singapore and/or Kuala Lumpur for on the order of ~200 people), audio
              / visual, and printed signage—such as an exterior vinyl banner (see the NS{" "}
              <a href={links.nsBannerTweet} target="_blank" rel="noopener noreferrer">
                reference post on X
              </a>
              ).
            </p>
          </div>
          <p>
            The placeholder listing{" "}
            <a href={links.lumaPlaceholderEvent} target="_blank" rel="noopener noreferrer">
              “EVM Day @ Network School” on Luma
            </a>{" "}
            illustrates the shape of a one-day EVM open house: NS Café venue, optional return-trip buses from KL and
            Singapore subject to availability, and an agenda announced as the date firms up—aligned with how Ethereum NS
            is positioning Ethereum Month on the ground.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="includes-heading">
          <h2 id="includes-heading">What usually moves the line item</h2>
          <ul>
            <li>Catering depth (coffee-only vs full meals, headcount assumptions)</li>
            <li>Chartered or organized buses from Singapore and/or Kuala Lumpur at ~200-person scale</li>
            <li>A/V for stage and room(s), including backup and staffing</li>
            <li>Print and environmental graphics (banners, wayfinding, exterior vinyl)</li>
          </ul>
          <div className={styles.refBlock}>
            <p>References</p>
            <ul className={styles.refList}>
              <li>
                <a href={links.nsBannerTweet} target="_blank" rel="noopener noreferrer">
                  NS post (banner / production context)
                </a>
              </li>
              <li>
                <a href={links.lumaPlaceholderEvent} target="_blank" rel="noopener noreferrer">
                  Placeholder event · Luma
                </a>
              </li>
              <li>
                <Link href="/">Ethereum NS landing page</Link>
              </li>
            </ul>
          </div>
          <p className={styles.privateNote}>
            This URL is intentionally unlisted (noindex). Share directly with sponsors and partners.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Built with ❤️ at{" "}
          <a href={links.nsHome} target="_blank" rel="noopener noreferrer" aria-label="Network School">
            <Image
              src="/logos-remote/ns-flag-logo-black.svg"
              alt=""
              width={18}
              height={18}
              className={styles.footerFlag}
            />
          </a>
        </p>
        <p>
          Sources + Attribution:{" "}
          <a href={links.nsAbout} target="_blank" rel="noopener noreferrer">
            Network School
          </a>
          {" & "}
          <a href={links.ethereumAssets} target="_blank" rel="noopener noreferrer">
            Ethereum.org
          </a>
        </p>
      </footer>
    </div>
  );
}
