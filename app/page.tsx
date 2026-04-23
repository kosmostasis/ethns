import Image from "next/image";
import LogoMarquee from "./LogoMarquee";
import UpcomingEvents from "./UpcomingEvents";
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
  applyOnCampus: "https://ns.com/ethns/apply",
  xProfile: "https://x.com/nsethereum",
} as const;

const partnerLogosTop = [
  {
    name: "Network School",
    href: "https://ns.com",
    src: "/logo-network-school.svg",
    width: 265,
    height: 32,
  },
  {
    name: "ETHNS",
    href: "https://ns.com/ethns",
    src: "/logos-community/ethnslogo.png",
    width: 187,
    height: 325,
    showLabel: true,
  },
] as const;

const partnerLogos = [
  {
    name: "Arkiv",
    href: "https://arkiv.network/",
    src: "/logos-community/arkiv.svg",
    width: 1389,
    height: 320,
  },
  {
    name: "Base",
    href: "https://base.org",
    src: "/logo-base.svg",
    width: 88,
    height: 88,
  },
  {
    name: "CrossBar",
    href: "https://www.crossbar-inc.com/",
    src: "/logos-community/crossbar.svg",
    width: 1182,
    height: 549,
    scale: 1.6,
  },
  {
    name: "ETHPrague",
    href: "https://ethprague.com/",
    src: "/logos-community/ethprague-logo-digital-black.png",
    width: 2000,
    height: 570,
  },
  {
    name: "Logos",
    href: "https://logos.co/",
    src: "/logos-community/logos.jpg",
    width: 400,
    height: 400,
    circular: true,
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
    name: "Web3Privacy",
    href: "https://web3privacy.info/",
    src: "/logos-community/web3privacy.svg",
    width: 236,
    height: 64,
    invert: true,
  },
] as const;

const communityLogos = [
  {
    name: "AKINDO",
    href: "https://akindo.io/",
    src: "/logos-community/akindo.svg",
    width: 311,
    height: 63,
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
    name: "ContentDAO",
    href: "https://contentdao.app/",
    src: "/logos-community/contentdao-site.svg",
    width: 165,
    height: 38,
  },
  {
    name: "Devfolio",
    href: "https://devfolio.co/",
    src: "/logos-community/devfolio.svg",
    width: 619,
    height: 129,
  },
  {
    name: "ETHGlobal",
    href: "https://ethglobal.com/",
    src: "/logos-community/ethglobal.png",
    width: 1346,
    height: 301,
  },
  {
    name: "ETHKL",
    href: "https://www.ethkl.org/",
    src: "/logos-community/ethkl.png",
    width: 93,
    height: 36,
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
    name: "FIL Builders",
    href: "https://fil.builders/",
    src: "/logos-community/fil-builders.ico",
    width: 253,
    height: 256,
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
    name: "Frontier Tower",
    href: "https://frontiertower.io/",
    src: "/logos-community/frontiertower-logo-transparent.png",
    width: 464,
    height: 130,
  },
  {
    name: "Geode",
    href: "https://geode.build/",
    src: "/logos-community/geode.png",
    width: 2391,
    height: 460,
  },
  {
    name: "Hubs Network",
    href: "https://www.hubsnetwork.org/",
    src: "/logos-community/hubsnetwork.png",
    width: 1127,
    height: 349,
  },
  {
    name: "Invisible Garden",
    href: "https://invisible.garden",
    src: "/logo-invisible-garden.png",
    width: 578,
    height: 209,
  },
  {
    name: "Kernel",
    href: "https://kernel.community/",
    src: "/logos-remote/kernel-logo.svg",
    width: 392,
    height: 126,
  },
  {
    name: "Metropolis",
    href: "https://metropolisglobal.com/",
    src: "/logos-community/metropolis.png",
    width: 768,
    height: 173,
  },
  {
    name: "muShanghai",
    href: "https://mushanghai.xyz/",
    src: "/logos-community/mushanghai.png",
    width: 256,
    height: 80,
  },
  {
    name: "p2pmentor",
    href: "https://p2pmentor.com/",
    src: "/logos-community/p2pmentor.jpg",
    width: 222,
    height: 222,
    showLabel: true,
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
    name: "ProtocolCamp",
    href: "https://www.protocolcamp.com/",
    src: "https://www.protocolcamp.com/assets/figma-01-u52w3qYl.webp",
    width: 1345,
    height: 315,
  },
  {
    name: "ProtoVille",
    href: "https://protoville.xyz/",
    src: "/logos-community/protoville-mark.png",
    width: 630,
    height: 630,
    circular: true,
    showLabel: true,
  },
  {
    name: "RadicalXChange",
    href: "https://radicalxchange.org/",
    src: "/logos-community/radicalxchange-logo.png",
    width: 4070,
    height: 691,
  },
  {
    name: "RegistryChain",
    href: "https://registrychain.com/",
    src: "/logos-community/registrychain.png",
    width: 5216,
    height: 1768,
  },
  {
    name: "Seapunk",
    href: "https://seapunk.asia",
    src: "/logo-seapunk.png",
    width: 440,
    height: 260,
    scale: 1.1,
  },
  {
    name: "SocraticBot",
    href: "https://socratic.bot/",
    src: "/logos-community/socratic-bot.png",
    width: 3000,
    height: 612,
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
    name: "ZuKaş",
    href: "https://zukascity.com/",
    src: "/logos-community/zukascity.png",
    width: 128,
    height: 128,
    showLabel: true,
  },
] as const;

const upcomingEvents = [
  {
    date: "Apr 25",
    title: "Malaysia is an Ethereum Hub for Builders: Meetup with ETHKL x ETHNS",
    href: "https://luma.com/cz0cpqtn",
    location: "Kuala Lumpur",
  },
  {
    date: "Apr 28",
    title: "Beyond Software: Advancing Crypto Wallet Security Against Hacks and Hardware Backdoors",
    href: "https://luma.com/w108uqsn",
    location: "Network School",
  },
  {
    date: "Apr 28",
    title: "Ethereum Meetup",
    href: "https://luma.com/yfbgi4zy",
    location: "Network School",
  },
  {
    date: "Apr 30",
    title: "ETHGlobal Open Agents Async Hackathon Cowork & Feedback Session",
    href: "https://luma.com/owsy13c1",
  },
  {
    date: "May 2",
    title: "Network School Monthly All Hands & Ethereum Month Kick-Off",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 4",
    title: "ETHGlobal Open Agents Hackathon Deadline",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 7",
    title: "Base x Virtuals Humanoid Robot Demo Day",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 8",
    title: "Base Builder Loft @ Network School Launch Party",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 9",
    title: "Viber Hackathon",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 14",
    title: "RadicalXChange Plurality Event",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 16",
    title: "OPEN DAY: EVM Day + Arkiv Builder Challenge & Crossbar Content Challenge Kick-Off",
    href: "https://luma.com/67p1p7sv",
  },
  {
    date: "May 22",
    title: "Monthly Network School Showcase and Fancy Dinner Party",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 23",
    title: "OPEN DAY: Open Hardware Day",
    href: "https://luma.com/qsko9o3g",
  },
  {
    date: "May 24",
    title: "OPEN DAY: Logos Privacy Buildathon",
    href: "https://luma.com/175r14iy",
  },
  {
    date: "May 25",
    title: "Arkiv Builder Challenge & Crossbar Content Challenge Deadlines",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 29",
    title: "ETH Month Closing Dinner",
    href: "https://luma.com/ethns",
  },
  {
    date: "May 30",
    title: "ETHKL x ETHNS Joint Meetup in KL",
    href: "https://luma.com/ethns",
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
          <a href={links.xProfile} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <Image src="/x-icon.svg" alt="" width={20} height={20} className={styles.navIcon} />
          </a>
          <a href={links.lumaCalendar} target="_blank" rel="noopener noreferrer" aria-label="Luma">
            <Image src="/calendar-icon.svg" alt="" width={20} height={20} className={styles.navIcon} />
          </a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>May 2026: Genesis Block Month</p>
            <h1>
              Ethereum NS
              <br />
              <span className={styles.heroSubhead}>is a permanent Ethereum community node growing at Network School.</span>
            </h1>
            <p className={styles.lead}>
              We collaborate with Malaysian, Singaporean, and the wider Asian communities to share technical knowledge,
              debate cosmolocal challenges, and build techno-optimist futures together.
            </p>
            <div className={styles.ctas}>
              <a className={styles.primaryCta} href={links.applyOnCampus} target="_blank" rel="noopener noreferrer">
                Apply to NS
              </a>
              <a className={styles.secondaryCta} href={links.lumaCalendar} target="_blank" rel="noopener noreferrer">
                Events Calendar
              </a>
              <a className={styles.secondaryCta} href={links.quickSync} target="_blank" rel="noopener noreferrer">
                Book a Quick Sync
              </a>
            </div>
          </div>

          <div className={styles.heroPhotoPanel} aria-label="Latest events photos">
            <div className={styles.stripHeader}>
              <h2 className={styles.stripTitle}>Latest Events</h2>
            </div>
            <div className={styles.singlePhotoWrap}>
              <Image
                src="/eventpics/openagentskickoff.JPG"
                alt="ETHGlobal Open Agents Hackathon Kick-Off"
                fill
                className={styles.photoThumbImg}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
            <p className={styles.photoCaption}>April 23rd, 2026 · ETHGlobal Open Agents Hackathon Kick-Off</p>
          </div>
        </section>

        <div className={styles.upcomingStrip} aria-label="Upcoming events">
          <UpcomingEvents events={upcomingEvents} />
        </div>

        <div className={styles.partnerLogoStack}>
          <LogoMarquee logos={partnerLogosTop} static aria-label="Top partner logos" />
          <LogoMarquee logos={partnerLogos} static visualWeight="medium" aria-label="Partner logos" />
          <LogoMarquee
            logos={communityLogos}
            static
            visualWeight="subtle"
            aria-label="Community and ecosystem logos"
          />
        </div>

        <HeroVideo src={heroVideoSrc} />

        <section id="participation-outcomes" className={styles.section}>
          <h2>Life at Network School</h2>
          <ParticipationOutcomesTabs />
        </section>

        <section className={styles.section}>
          <h2>FAQ</h2>
          <div className={styles.faq}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>General Logistics Overview</summary>
              <p className={styles.faqAnswer}>
                Ethereum NS is a permanent Ethereum community node at Network School. May 2026 is
                our first Ethereum-focused &ldquo;genesis block&rdquo; month.
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
