"use client";

import styles from "./page.module.css";

const items = [
  {
    question: "Do we need to be crypto-native?",
    answer:
      "No. The format is best for teams committed to Ethereum-aligned builder development, regardless of maturity stage.",
  },
  {
    question: "Is access open?",
    answer:
      "Yes. The program is designed around open participation, transparent operations, and accountable impact reporting.",
  },
  {
    question: "What do you need from us?",
    answer:
      "A workshop or build sprint, ecosystem amplification through referral, and optional scholarship or event support.",
  },
];

export default function SponsorFaq() {
  return (
    <div className={styles.faq}>
      {items.map((item, index) => {
        return (
          <details key={item.question} className={styles.faqItem}>
            <summary className={styles.faqQuestion}>{item.question}</summary>
            <p id={`faq-answer-${index}`} className={styles.faqAnswer}>
              {item.answer}
            </p>
          </details>
        );
      })}
    </div>
  );
}
