import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import OpenDaysGallery from "../OpenDaysGallery";
import styles from "../opendays.module.css";

const links = {
  quickSync: "https://app.reclaim.ai/m/kosmostasis/flexible-meeting",
  ethereumHome: "https://ethereum.org",
  nsHome: "https://ns.com",
  nsAbout: "https://ns.com/about",
  nsEthns: "https://ns.com/ethns",
  ethereumAssets: "https://ethereum.org/assets/",
  lumaCalendar: "https://luma.com/ethns",
  hackathonEvent: "https://luma.com/hc9ec65j",
} as const;

const hackathonGalleryImages = [
  "/opendays-gallery/hackathon/01.jpg",
  "/opendays-gallery/hackathon/02.jpg",
  "/opendays-gallery/hackathon/03.jpg",
  "/opendays-gallery/hackathon/04.jpg",
] as const;

export const metadata: Metadata = {
  title: "Ethereum NS | Hackathon",
  description:
    "A hackathon event page for ETH Month at Network School. Content currently mirrors the May 23rd Open Day.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function HackathonPage() {
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
            <Link className={styles.dateButton} href="/opendays/closing">
              Closing Party
            </Link>
            <Link className={styles.dateButton} href="/opendays/hackathon" aria-current="page">
              Hackathon
            </Link>
          </div>
          <h1>
            Official Hackathon
            <br />
            <span className={styles.heroSubhead}>at ETH NS Genesis Month</span>
          </h1>
          <p className={styles.lead}>
            An opportunity to establish a longterm bond with the Network School's community of builders and founders.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primaryCta} href={links.quickSync} target="_blank" rel="noopener noreferrer">
              Partners Quick Sync
            </a>
            <a className={styles.secondaryCta} href={links.hackathonEvent} target="_blank" rel="noopener noreferrer">
              Register
            </a>
            <a className={styles.secondaryCta} href="#event-details">
              Learn More
            </a>
          </div>
          <div className={styles.heroArt}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/opendays-art/hackathon-transparent.png"
                alt="Hackathon illustration"
                fill
                sizes="(max-width: 900px) 100vw, 36vw"
                className={styles.heroImage}
              />
            </div>
          </div>
          <OpenDaysGallery images={hackathonGalleryImages} />
        </section>

        <section id="event-details" className={styles.section} aria-labelledby="costs-heading">
          <h2 id="costs-heading">Join our Official Hackathon</h2>
          <p>
            Our month of Ethereum-focused programming at Network School will open a second time on May 23rd to builders, founders,
            investors, institutions, researchers, and other leaders focused on the growing space of open hardware and DePIN.
          </p>
          <p>
            Represent your open hardware or DePIN project on stage, and join our +400 members on campus, alongside ~200 builders
            from Singapore and Kuala Lumpur. You can join us as a speaker and also be highlighted as a title sponsor for the event.
          </p>

          <details className={styles.sponsorFaq}>
            <summary className={styles.sponsorFaqQuestion}>How can I be highlighted and what does sponsorship cover?</summary>
            <div className={styles.sponsorTableWrap}>
              <p>
                You can join us as an sponsor. Sponsorship covers the costs of catering nutritious meals for attendees,
                A/V rentals, general logistics at NS, and possibly chartered ground transportation from Singapore
                and/or Kuala Lumpur.
              </p>
              <p>
                Please{" "}
                <a href={links.quickSync} target="_blank" rel="noopener noreferrer">
                  book a quick sync
                </a>{" "}
                with us to discuss sponsorship options.
              </p>
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
