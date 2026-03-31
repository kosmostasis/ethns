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
      </div>
    ),
  },
  {
    id: "ecosystem",
    label: "Ecosystem Partners",
    bodyNode: (
      <div className={styles.cards}>
        <article id="sponsor" className={styles.card}>
          <h3>Sponsor Builders</h3>
          <p>Bring teams and support scholars while connecting with high-agency builders during our Genesis residency.</p>
        </article>
        <article id="teach" className={styles.card}>
          <h3>Teach Your Tech Stack</h3>
          <p>Host hands on workshops, from a primer to a deep dive, fully aligned to your roadmap and work directly with builders who are ready to ship.</p>
        </article>
        <article id="host" className={styles.card}>
          <h3>Host a Hackathon or Social</h3>
          <p>Run an on-site build sprint or social event with on-the-ground support and a curated community.</p>
        </article>
      </div>
    ),
  },
  {
    id: "community",
    label: "Community Partners",
    bodyNode: <p>Content for Community Partners is coming soon.</p>,
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
          <h3>Likeminded Builder Community</h3>
          <p>
            Immerse yourself in a community of 500+ purpose-driven builders, with deep cultural
            diversity, and a shared founder mindset.
          </p>
        </article>
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
