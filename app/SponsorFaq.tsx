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
      "No. NS provides a wide-scope range of programming, from AI to biotech, and you are welcome to join any events permissionlessly. Regardless, you'll make the most of the Ethereum-focused programming and related events if you are an independent builder or team committed to Ethereum-aligned development, regardless of maturity stage.",
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
        <a href="https://t.me/kosmostasis" target="_blank" rel="noopener noreferrer">
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
        <a href="mailto:koss@ethns.io">Email</a>).
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
  {
    question: "Can I partner with Ethereum NS only in May or anytime during the year?",
    answer:
      "Yes, you can partner with ETH NS anytime. We are committed to host Ethereum-related programming permanently at Network School, and we can co-organize tailored programming for your ecosystem and community.",
  },
  {
    question: "What does programming look like at Network School?",
    answerNode: (
      <>
        Confirmed events will be part of the official{" "}
        <a href="https://luma.com/ns" target="_blank" rel="noopener noreferrer">
          NS calendar
        </a>{" "}
        as well as the{" "}
        <a href="https://luma.com/ethns" target="_blank" rel="noopener noreferrer">
          ETH NS calendar
        </a>
        .
      </>
    ),
  },
  {
    question: "What are hackathons like at Network School?",
    answerNode: (
      <>
        You can review the recently hosted{" "}
        <a href="https://ns.com/zcash" target="_blank" rel="noopener noreferrer">
          Zcash Hackathon
        </a>{" "}
        for a complete overview. There are many more challenges of different scopes and types
        in any given month.
      </>
    ),
  },
];

export default function SponsorFaq() {
  return (
    <>
      {items.map((item, index) => {
        return (
          <details key={item.question} className={styles.faqItem}>
            <summary className={styles.faqQuestion}>{item.question}</summary>
            <div id={`faq-answer-${index}`} className={styles.faqAnswer}>
              {item.answerNode ?? item.answer}
            </div>
          </details>
        );
      })}
    </>
  );
}
