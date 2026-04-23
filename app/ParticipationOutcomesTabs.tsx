"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import styles from "./page.module.css";

type BenefitItem = {
  icon: string;
  label?: string;
  labelNode?: ReactNode;
};

const everyoneBenefits: BenefitItem[] = [
  {
    icon: "🎟️",
    labelNode: (
      <>
        25% discounted monthly stay via{" "}
        <a href="https://ns.com/ethns/invite" target="_blank" rel="noopener noreferrer">
          ETH NS referral
        </a>
      </>
    ),
  },
  { icon: "🧠", label: "Access to all programming" },
  { icon: "💻", label: "24/7 co-working" },
  { icon: "🛠️", label: "Everything you need to host sessions and workshops" },
  { icon: "🧭", label: "Mentorship" },
  { icon: "🧩", label: "Office pods" },
  { icon: "🏋️", label: "24/7 gym and daily fitness classes" },
  { icon: "🎓", label: "Lectures" },
  { icon: "🧪", label: "Workshops" },
  { icon: "📶", label: "WiFi" },
  { icon: "🍽️", label: "Healthy meals (breakfast, lunch, and dinner)" },
  { icon: "🛏️", label: "Serviced room" },
  { icon: "🤝", label: "500+ community members" },
  { icon: "🎥", label: "Content studios" },
] as const;

const tabs = [
  {
    id: "everyone",
    label: "Everyone Joining",
    bodyNode: (
      <div className={styles.outcomesEveryone}>
        <div className={styles.benefitsCloud}>
          {everyoneBenefits.map((item, index) => (
            <div key={`${item.icon}-${index}`} className={styles.benefitItem}>
              <span className={styles.benefitChip}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  {item.icon}
                </span>
                {item.labelNode ?? item.label}
              </span>
              {index < everyoneBenefits.length - 1 ? (
                <span className={styles.benefitJoin} aria-hidden="true">
                  +
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <details className={`${styles.card} ${styles.outcomesSubCard} ${styles.outcomesDetails}`}>
          <summary className={styles.outcomesSummary}>How is life at Network School?</summary>
          <p>
            You can catch a glimpse on the video above and for more details you can explore directly on Network
            School&apos;s{" "}
            <a href="https://ns.com/" target="_blank" rel="noopener noreferrer">
              website
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/networkschool/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            , and{" "}
            <a href="https://x.com/ns" target="_blank" rel="noopener noreferrer">
              X
            </a>{" "}
            profiles.
          </p>
        </details>
      </div>
    ),
  },
  {
    id: "ecosystem",
    label: "Ecosystem Partners",
    bodyNode: (
      <>
        <div className={styles.cards}>
          <article id="sponsor" className={styles.card}>
            <h3>Sponsor Builders</h3>
            <p>Bring teams and support scholars while connecting with high-agency builders.</p>
          </article>
          <article id="teach" className={styles.card}>
            <h3>Teach Your Tech Stack</h3>
            <p>
              Host hands-on workshops, from primers to deep dives, aligned with your roadmap, and work directly with builders who are ready to ship.
            </p>
          </article>
          <article id="host" className={styles.card}>
            <h3>Host a Hackathon or Social</h3>
            <p>Run an on-site build sprint or social event with on-the-ground support and a curated community.</p>
          </article>
          <details className={`${styles.card} ${styles.outcomesSubCard} ${styles.outcomesDetails}`}>
            <summary className={styles.outcomesSummary}>
              What do we need to do to be considered a partner?
              <span className={styles.outcomesSummaryEmoji}>👇</span>
            </summary>
            <p>Any combination of the actions below can qualify your team:</p>
            <ul className={styles.list}>
              <li>Host workshops or builder lock-ins.</li>
              <li>Promote the event in your ecosystem, and sponsor builders to attend as scholars.</li>
              <li>Optionally, host a social event or sponsor a hackathon bounty.</li>
              <li>
                Have another idea? Please{" "}
                <a
                  href="https://app.reclaim.ai/m/kosmostasis/flexible-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  book a quick sync
                </a>{" "}
                with our team.
              </li>
            </ul>
          </details>
        </div>
      </>
    ),
  },
  {
    id: "community",
    label: "Community Partners",
    bodyNode: (
      <div className={styles.cards}>
        <article className={styles.card}>
          <h3>Galvanize Your Community</h3>
          <p>
            Gather at Network School for a month of building in person, explore ecosystem
            opportunities, and share the unique offer of your homebase with the local +500 strong
            community of NS.
          </p>
        </article>
        <article className={styles.card}>
          <h3>Match with Opportunities</h3>
          <p>
            Whenever possible, we&apos;ll match your community with opportunities spaning from our
            network of partners such as: scholarships, builder bounties, ecosystem showcases,
            content features, and more.
          </p>
        </article>
        <article className={styles.card}>
          <h3>Knowledge Sharing</h3>
          <p>
            Meet lifetime allies, debate best community practices, explore new models of permanent
            community living, and leave inspired to continue building your own space now with a
            bridge to Network School.
          </p>
        </article>
      </div>
    ),
  },
  {
    id: "teams",
    label: "Teams",
    bodyNode: (
      <div className={styles.cards}>
        <article className={styles.card}>
          <h3>Deep Focus Lock-In</h3>
          <p>
            Bring your startup team to Network School for focused execution. Teams building across
            AI, biotech, and crypto use NS to run high-output sprints while core logistics are handled.
          </p>
        </article>
        <article className={styles.card}>
          <h3>Host Your Own Events</h3>
          <p>Host team formats like demo days, hackathons, retreats, and workshops at Network School.</p>
        </article>
        <article className={styles.card}>
          <h3>Likeminded Community</h3>
          <p>
            Immerse yourself in a community of 500+ purpose-driven builders, with deep cultural
            diversity, and a shared founder mindset.
          </p>
        </article>
        <details className={`${styles.card} ${styles.outcomesSubCard} ${styles.outcomesDetails}`}>
          <summary className={styles.outcomesSummary}>Where can I learn more about Teams at NS?</summary>
          <p>
            Network School&apos;s website has a fully dedicated page to teams where you can learn more about the first hand experience of teams based at NS. Here's the link:{" "}
            <a href="https://ns.com/teams" target="_blank" rel="noopener noreferrer">
              ns.com/teams
            </a>
          </p>
        </details>
      </div>
    ),
  },
] as const;

export default function ParticipationOutcomesTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("ecosystem");
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div className={styles.outcomesTabs}>
      <div className={styles.outcomesTabList} role="tablist" aria-label="Participation outcomes tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active.id === tab.id}
            className={active.id === tab.id ? styles.outcomesTabActive : styles.outcomesTab}
            onMouseDown={() => setActiveTab(tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.outcomesPanel} role="tabpanel">
        {active.bodyNode as ReactNode}
      </div>
    </div>
  );
}
