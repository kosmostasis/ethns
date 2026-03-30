import HeroArtImage from "./HeroArtImage";
import styles from "./page.module.css";

const links = {
  quickSync: "https://app.reclaim.ai/m/kosmostasis/flexible-meeting",
  applyInvite: "https://ns.com/ethns/invite",
  nsAbout: "https://ns.com/about",
  nsEthns: "https://ns.com/ethns",
  espRfp: "https://esp.ethereum.foundation/applicants/rfp/community-hubs",
  efMandateBlog: "https://blog.ethereum.org/en/2026/03/13/ef-mandate",
  efMandateCanonical:
    "https://etherscan.io/tx/0x5dd574df963a1df1f064791e0f6ff41ec972cdbba12293b7e1ece582052ba855",
  hackmdOutreach: "https://hackmd.io/@kosmostasis/ETHNSoutreach",
  ethereumAssets: "https://ethereum.org/assets/",
} as const;

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href={links.nsEthns} target="_blank" rel="noopener noreferrer">
          <span className={styles.brandTag}>Network School</span>
          <span className={styles.brandTitle}>Ethereum NS</span>
        </a>
        <nav className={styles.nav}>
          <a href="#sponsor">Sponsor</a>
          <a href="#teach">Teach</a>
          <a href="#host">Host a Hackathon</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>May 2026 at Network School</p>
            <h1>Ethereum NS: bring your ecosystem to Network School.</h1>
            <p className={styles.lead}>
              A residency for workshops, builder lock-ins, and hackathons rooted in Ethereum&apos;s
              CROPS values and user self-sovereignty.
            </p>
            <div className={styles.ctas}>
              <a className={styles.primaryCta} href={links.quickSync} target="_blank" rel="noopener noreferrer">
                Book a quick sync
              </a>
              <a className={styles.secondaryCta} href={links.applyInvite} target="_blank" rel="noopener noreferrer">
                Apply with Ethereum&apos;s link
              </a>
            </div>
          </div>
          <div className={styles.heroArt}>
            <HeroArtImage />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Partner outcomes</h2>
          <div className={styles.cards}>
            <article id="sponsor" className={styles.card}>
              <h3>Sponsor builders</h3>
              <p>Bring teams and support scholars while connecting with high-agency builders during the residency.</p>
            </article>
            <article id="teach" className={styles.card}>
              <h3>Teach your ecosystem</h3>
              <p>Host workshops aligned to your roadmap and work directly with founders who are ready to ship.</p>
            </article>
            <article id="host" className={styles.card}>
              <h3>Host a hackathon</h3>
              <p>Run an on-site build sprint with on-the-ground support and a curated residency community.</p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2>What partnering looks like</h2>
          <ul className={styles.list}>
            <li>Your team hosts workshops or builder lock-ins in May.</li>
            <li>You promote via your referral link to unlock scholarship support.</li>
            <li>Optionally sponsor scholars, host social events, or run your own hackathon.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Builder experience</h2>
          <ul className={styles.list}>
            <li>25% discounted monthly stay with referral pricing in the $1125-2250 range.</li>
            <li>Access to all programming, mentorship, and workshop infrastructure.</li>
            <li>24/7 co-working, fitness access, healthy meals, and serviced rooms.</li>
            <li>500+ community members and direct ecosystem exposure.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Why Ethereum teams choose ETHNS</h2>
          <div className={styles.credibilityGrid}>
            <article>
              <h3>Censorship resistance</h3>
              <p>Programming favors open participation and resilient builder coordination.</p>
            </article>
            <article>
              <h3>Open source values</h3>
              <p>Education and contribution paths are designed for public learning and iteration.</p>
            </article>
            <article>
              <h3>Privacy + security</h3>
              <p>Talent development emphasizes safe defaults and secure product thinking.</p>
            </article>
            <article>
              <h3>User self-sovereignty</h3>
              <p>The residency develops builders working toward user agency and ownership.</p>
            </article>
          </div>
          <p className={styles.credibilityNote}>
            The model aligns with Ethereum Community Hubs requirements around open access, safety,
            sustainable operations, and impact reporting.
          </p>
        </section>

        <section className={styles.section}>
          <h2>May 2026 logistics</h2>
          <p>
            Ethereum NS runs throughout May 2026 at Network School. Teams and builders joining
            through the referral flow receive 25% pricing support and full residency access.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Sponsor FAQ</h2>
          <div className={styles.faq}>
            <article>
              <h3>Do we need to be crypto-native?</h3>
              <p>
                No. The format is best for teams committed to Ethereum-aligned builder development,
                regardless of maturity stage.
              </p>
            </article>
            <article>
              <h3>Is access open?</h3>
              <p>
                Yes. The program is designed around open participation, transparent operations, and
                accountable impact reporting.
              </p>
            </article>
            <article>
              <h3>What do you need from us?</h3>
              <p>
                A workshop or build sprint, ecosystem amplification through referral, and optional
                scholarship or event support.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Contact: <a href="mailto:support@ns.com">support@ns.com</a></p>
        <p>
          Sources and attribution:{" "}
          <a href={links.nsAbout} target="_blank" rel="noopener noreferrer">
            Network School
          </a>
          ,{" "}
          <a href={links.ethereumAssets} target="_blank" rel="noopener noreferrer">
            ethereum.org assets
          </a>
          ,{" "}
          <a href={links.hackmdOutreach} target="_blank" rel="noopener noreferrer">
            outreach brief
          </a>
          ,{" "}
          <a href={links.espRfp} target="_blank" rel="noopener noreferrer">
            ESP hubs RFP
          </a>
          ,{" "}
          <a href={links.efMandateBlog} target="_blank" rel="noopener noreferrer">
            EF mandate blog
          </a>
          ,{" "}
          <a href={links.efMandateCanonical} target="_blank" rel="noopener noreferrer">
            canonical text
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
