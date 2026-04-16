import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import ClosingPartyVideo from "../ClosingPartyVideo";
import styles from "../opendays.module.css";

const links = {
  quickSync: "https://app.reclaim.ai/m/kosmostasis/flexible-meeting",
  ethereumHome: "https://ethereum.org",
  nsHome: "https://ns.com",
  nsAbout: "https://ns.com/about",
  nsEthns: "https://ns.com/ethns",
  ethereumAssets: "https://ethereum.org/assets/",
  lumaCalendar: "https://luma.com/ethns",
  lumaMay16Event: "https://luma.com/67p1p7sv",
  lumaMay23Event: "https://luma.com/67p1p7sv",
  nsBannerTweet: "https://x.com/ns/status/2030311587870097572",
} as const;

export const metadata: Metadata = {
  title: "Ethereum NS | Closing Party",
  description:
    "A closing party event page for Ethereum NS Genesis Month. Content currently mirrors the May 23rd Open Day.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ClosingPartyPage() {
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
          <Link href="/" className={styles.navHome} aria-label="Home">
            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.navIcon}>
              <path
                d="M3.75 10.71 12 4.5l8.25 6.21v8.79a.75.75 0 0 1-.75.75h-5.25v-6h-4.5v6H4.5a.75.75 0 0 1-.75-.75v-8.79Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <a href={links.lumaCalendar} target="_blank" rel="noopener noreferrer" aria-label="Luma calendar">
            <Image src="/calendar-icon.svg" alt="" width={20} height={20} className={styles.navIcon} />
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.dateButtons} aria-label="Event dates">
            <Link className={styles.dateButton} href="/opendays">
              May 16th
            </Link>
            <Link className={styles.dateButton} href="/opendays/may-23">
              May 23rd
            </Link>
            <Link className={styles.dateButton} href="/opendays/closing" aria-current="page">
              Closing
            </Link>
            <Link className={styles.dateButton} href="/opendays/hackathon">
              Hackathon
            </Link>
          </div>
          <h1>
            Closing Celebration
            <br />
            <span className={styles.heroSubhead}>of ETH NS Genesis Month</span>
          </h1>
          <p className={styles.lead}>
            Our moment to pause and celebrate the end of Genesis Month at Network School.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primaryCta} href={links.quickSync} target="_blank" rel="noopener noreferrer">
              Partners Quick Sync
            </a>
            <button className={styles.secondaryCta} type="button" disabled aria-disabled="true">
              Register (TBA)
            </button>
            <a className={styles.secondaryCta} href="#event-details">
              Learn More
            </a>
          </div>
          <div className={styles.heroArt}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/opendays-art/may-16.png"
                alt="Ethereum logo held in hands illustration"
                fill
                sizes="(max-width: 900px) 100vw, 36vw"
                className={styles.heroImage}
              />
            </div>
          </div>
          <ClosingPartyVideo />
        </section>

        <section id="event-details" className={styles.section} aria-labelledby="costs-heading">
          <h2 id="costs-heading">Sponsor our Community Celebration</h2>
          <p>
            The NS celebration is the flagship monthly gathering of the Network School community, a space where
            founders, engineers, operators, and curious builders come to rest, reconnect, and build meaningful relationships.
          </p>
          <p>
            As hosts, the community co-designs the entire experience - from atmosphere and flow to signature cocktails.
            The space is open for a limited number of sponsors to become part of that experience, not just visible in it.
            Supporting brands will not simply sit on a banner, they will live in the narrative of the evening.
          </p>
          <p>
            This is a community-driven, not-for-profit initiative. All sponsorship funds go directly to the community and directed toward
            bar, drinks, and production costs. Any remaining materials roll forward into the next celebration.
          </p>
          <p className={styles.ethNsCallout}>
            ETH NS is directly supporting the existing community celebration by connecting sponsors coming to our event
            with the organizers, and we are excited to see you there!
          </p>

          <details className={styles.sponsorFaq}>
            <summary className={styles.sponsorFaqQuestion}>How can I be a sponsor?</summary>
            <div className={styles.sponsorTableWrap}>
              <table className={styles.sponsorTable}>
                <thead>
                  <tr>
                    <th>Benefits</th>
                    <th>
                      <div>🥉 Community Partner</div>
                      <div>$200</div>
                    </th>
                    <th>
                      <div>🥈 Bar Sponsor</div>
                      <div>$500</div>
                    </th>
                    <th>
                      <div>🥇 Title Sponsor</div>
                      <div>$1000</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Dedicated Cocktail Named After Your Brand 🍸</th>
                    <td>✅ Signature Cocktail</td>
                    <td>✅ Signature Cocktail</td>
                    <td>✅ Multiple</td>
                  </tr>
                  <tr>
                    <th>Sponsor Shoutout from Host</th>
                    <td>✅ Group Mention</td>
                    <td>✅ Group Mention</td>
                    <td>✅ Dedicated Shoutout</td>
                  </tr>
                  <tr>
                    <th>Logo on Event Page</th>
                    <td>✅ Sponsors Section</td>
                    <td>✅ Medium</td>
                    <td>✅ Large</td>
                  </tr>
                  <tr>
                    <th>Logo on Cocktail Menu</th>
                    <td>-</td>
                    <td>✅ Included</td>
                    <td>✅ Featured Placement</td>
                  </tr>
                  <tr>
                    <th>Roll-Up Banner Allowed</th>
                    <td>-</td>
                    <td>✅ 1x Roll-Up</td>
                    <td>✅ 3x Roll-Ups</td>
                  </tr>
                  <tr>
                    <th>On-Site Projection Screen</th>
                    <td>-</td>
                    <td>✅ Loop Display</td>
                    <td>✅ Opening + Loop</td>
                  </tr>
                  <tr>
                    <th>Drone footage &amp; SM personalized vedio</th>
                    <td>-</td>
                    <td>✅ Included</td>
                    <td>✅ Included</td>
                  </tr>
                  <tr>
                    <th>Cocktail Station</th>
                    <td>-</td>
                    <td>-</td>
                    <td>✅ Dedicated Station</td>
                  </tr>
                  <tr>
                    <th>Event Host on Luma</th>
                    <td>-</td>
                    <td>-</td>
                    <td>✅ Featured</td>
                  </tr>
                  <tr>
                    <th>3-Minute Mic Moment</th>
                    <td>-</td>
                    <td>-</td>
                    <td>✅ Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
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
