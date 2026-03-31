"use client";

import type { ReactNode } from "react";
import styles from "./page.module.css";

type FaqItem = {
  question: string;
  answer?: string;
  answerNode?: ReactNode;
};

const items: FaqItem[] = [
  {
    question: "Do we need to be crypto-native and building on Ethereum?",
    answer:
      "No. NS provides a wide-scope range of programming, from AI to biotech, and you are welcome to join any events permissionlessly. Regardless, you'll make the most of the Ethereum focused and related programming if you are an independent builder or team committed to Ethereum-aligned development, regardless of maturity stage.",
  },
  {
    question: "Is access open to anyone?",
    answer:
      "Upon acceptance by Network School, yes. The program is designed around open participation.",
  },
  {
    question: "How do I get to Network School?",
    answer:
      "The closest airports are Singapore (SIN) and Johor (JHB). Full instructions are given upon acceptance into NS.",
  },
  {
    question: "Can I DM a team member?",
    answerNode: (
      <>
        Yes. You can contact Koss over your preferred channel (
        <a href="http://t.me/kosmostasis" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
        ,{" "}
        <a
          href="https://signal.me/#eu/vA4V783YVOZ55G2bCZhneAigy8yeujcTcTsum7aeiYCvSLff75ZJuKi0JZFnhjCV"
          target="_blank"
          rel="noopener noreferrer"
        >
          Signal
        </a>
        ,{" "}
        <a href="https://wa.me/16505970763" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        ,{" "}
        <a href="mailto:kossmostasis@gmail.com">Email</a>).
      </>
    ),
  },
  {
    question: "Can we support the ETH NS node even if our team can't come?",
    answerNode: (
      <>
        Yes, you can. You can sponsor builders from your ecosystem, and we can help fast-track
        their application evaluation. And you can sponsor builder bounties and social events.
        Please{" "}
        <a
          href="https://app.reclaim.ai/m/kosmostasis/flexible-meeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          book a quick sync
        </a>{" "}
        for coordination.
      </>
    ),
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
              {item.answerNode ?? item.answer}
            </p>
          </details>
        );
      })}
    </div>
  );
}
