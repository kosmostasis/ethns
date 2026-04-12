import Image from "next/image";
import HeroArtImage from "./HeroArtImage";
import LogoMarquee from "./LogoMarquee";
import HeroVideo from "./HeroVideo";
import ParticipationOutcomesTabs from "./ParticipationOutcomesTabs";
import SponsorFaq from "./SponsorFaq";
import styles from "./page.module.css";

const defaultHeroVideo =
  "https://pub-a8a14f1d39cd4a74ba46165ef523cad4.r2.dev/static/video/ETHEREUM%20NETWORK%20STATE%20FINAL%20NEW%20(2).mp4";

const links = {
  quickSync: "https://app.reclaim.ai/m/kosmostasis/flexible-meeting",
  applyInvite: "https://ns.com/ethns/invite",
  ethereumHome: "https://ethereum.org",
  nsHome: "https://ns.com",
  nsAbout: "https://ns.com/about",
  nsEthns: "https://ns.com/ethns",
  espRfp: "https://esp.ethereum.foundation/applicants/rfp/community-hubs",
  efMandateBlog: "https://blog.ethereum.org/en/2026/03/13/ef-mandate",
  efMandateCanonical:
    "https://etherscan.io/tx/0x5dd574df963a1df1f064791e0f6ff41ec972cdbba12293b7e1ece582052ba855",
  hackmdOutreach: "https://hackmd.io/@kosmostasis/ETHNSoutreach",
  ethereumAssets: "https://ethereum.org/assets/",
  lumaCalendar: "https://luma.com/ethns",
} as const;

const partnerLogos = [
  {
    name: "Network School",
    href: "https://ns.com",
    src: "/logo-network-school.svg",
    width: 265,
    height: 32,
  },
  {
    name: "Invisible Garden",
    href: "https://invisible.garden",
    src: "/logo-invisible-garden.png",
    width: 578,
    height: 209,
  },
  {
    name: "Base",
    href: "https://base.org",
    src: "/logo-base.svg",
    width: 88,
    height: 88,
  },
  {
    name: "Seapunk",
    href: "https://seapunk.asia",
    src: "/logo-seapunk.png",
    width: 440,
    height: 260,
    scale: 1.1,
  },
] as const;

const communityLogos = [
  {
    name: "Kernel",
    href: "https://kernel.community/",
    src: "/logos-remote/kernel-logo.svg",
    width: 392,
    height: 126,
  },
  {
    name: "SUCI",
    href: "https://www.suci.io/",
    src: "/logos-community/suci-logotype.png",
    width: 1024,
    height: 505,
    unoptimized: true,
  },
  {
    name: "Privote",
    href: "https://privote.live/",
    src: "/logos-community/privote.svg",
    width: 662,
    height: 662,
    showLabel: true,
  },
  {
    name: "Fracton Ventures",
    href: "https://fracton.ventures/",
    src: "/logos-community/fracton.png",
    width: 2285,
    height: 764,
  },
  {
    name: "RegistryChain",
    href: "https://registrychain.com/",
    src: "/logos-community/registrychain.png",
    width: 5216,
    height: 1768,
  },
  {
    name: "ETHKL",
    href: "https://www.ethkl.org/",
    src: "/logos-community/ethkl.png",
    width: 93,
    height: 36,
  },
  {
    name: "Metropolis",
    href: "https://metropolisglobal.com/",
    src: "/logos-community/metropolis.png",
    width: 768,
    height: 173,
  },
  {
    name: "CrossBar",
    href: "https://www.crossbar-inc.com/",
    src: "/logos-community/crossbar.svg",
    width: 1182,
    height: 549,
  },
  {
    name: "muShanghai",
    href: "https://mushanghai.xyz/",
    src: "/logos-community/mushanghai.png",
    width: 256,
    height: 80,
  },
  {
    name: "Hubs Network",
    href: "https://www.hubsnetwork.org/",
    src: "/logos-community/hubsnetwork.png",
    width: 1127,
    height: 349,
  },
  {
    name: "FIL Builders",
    href: "https://fil.builders/",
    src: "/logos-community/fil-builders.ico",
    width: 253,
    height: 256,
    showLabel: true,
  },
  {
    name: "Swarm",
    href: "https://www.ethswarm.org/",
    src: "/logos-community/swarm-horizontal.png",
    width: 1024,
    height: 270,
    unoptimized: true,
  },
  {
    name: "AyaHQ",
    href: "https://www.ayahq.com/",
    src: "/logos-community/ayahq.png",
    width: 132,
    height: 52,
    invert: true,
  },
  {
    name: "Commons Hub",
    href: "https://www.commons-hub.at/",
    src: "/logos-remote/commons-hub.ico",
    width: 2084,
    height: 2084,
    showLabel: true,
  },
  {
    name: "ETHPadThai",
    href: "https://ethpadthai.org/",
    src: "/logos-community/ethpadthai.png",
    width: 1023,
    height: 1024,
    showLabel: true,
  },
  {
    name: "Web3Privacy",
    href: "https://web3privacy.info/",
    src: "/logos-community/web3privacy.svg",
    width: 236,
    height: 64,
    invert: true,
  },
] as const;

const heroVideoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? defaultHeroVideo;

export default function Home() {
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
        <nav className={styles.nav}>
          <a href={links.lumaCalendar} target="_blank" rel="noopener noreferrer" aria-label="Luma">
            <Image src="/calendar-icon.svg" alt="" width={20} height={20} className={styles.navIcon} />
          </a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>May 2026: Genesis Block Month</p>
          <h1>
            Ethereum NS
            <br />
            <span className={styles.heroSubhead}>Summon your community from the cloud to Network School</span>
          </h1>
          <p className={styles.lead}>
            A permanent ETH node at NS. Built for talent development, hackathons, and builder lock-ins, rooted in
            Ethereum&apos;s values and self-sovereignty.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primaryCta} href={links.quickSync} target="_blank" rel="noopener noreferrer">
              Book a Quick Sync
            </a>
            <a className={styles.secondaryCta} href={links.applyInvite} target="_blank" rel="noopener noreferrer">
              Apply to Network School
            </a>
            <a className={styles.secondaryCta} href="#participation-outcomes">
              Learn More
            </a>
            <a
              className={styles.secondaryCta}
              href={links.lumaCalendar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendar
            </a>
          </div>
          <div className={styles.heroArt}>
            <HeroArtImage />
          </div>
        </section>

        <HeroVideo src={heroVideoSrc} />

        <section id="participation-outcomes" className={styles.section}>
          <h2>Participation Outcomes</h2>
          <ParticipationOutcomesTabs />
        </section>

        <div className={styles.partnerLogoStack}>
          <LogoMarquee logos={partnerLogos} static />
          <LogoMarquee
            logos={communityLogos}
            static
            visualWeight="subtle"
            aria-label="Community and ecosystem logos"
          />
        </div>

        <section className={styles.section}>
          <h2>FAQ</h2>
          <div className={styles.faq}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>General Logistics Overview</summary>
              <p className={styles.faqAnswer}>
                Ethereum NS runs throughout May 2026 at Network School. Teams and builders joining
                through the referral flow receive 25% pricing support and full residency access.
                Full details for logistics are provided by Network School directly upon acceptance.
              </p>
            </details>
            <SponsorFaq />
          </div>
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
