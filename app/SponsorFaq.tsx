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
    question: "What's the programming for May going to be like?",
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
            . Below you can find a draft of what the month might look like.
        <div className={styles.calendarMockup}>
          <p className={styles.calendarTitle}>ETH NS Draft Calendar (WIP)</p>
          <p className={styles.calendarLegend}>
            <span className={styles.calendarWorkshop}>Workshop</span>
            <span className={styles.calendarDiscussion}>Discussion</span>
            <span className={styles.calendarSocial}>Social</span>
            <span className={styles.calendarLecture}>Lecture</span>
            <span className={styles.calendarHackathon}>Hackathon</span>
          </p>
          <table className={styles.calendarTable}>
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>
                  1<br />
                  Check-In Orientation
                </td>
                <td>
                  2<br />
                  <span className={styles.calendarSocial}>ETH NS Social</span>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  4<br />
                  <span className={styles.calendarLecture}>Balaji Opener &amp; All Hands</span>
                  <br />
                  <br />
                  <span className={styles.calendarLecture}>ETH NS Kick Off</span>
                </td>
                <td>
                  5<br />
                  <span className={styles.calendarLecture}>Intro to ETH</span>
                  <br />
                  <br />
                  <span className={styles.calendarWorkshop}>Speedrun Ethereum: Build your first dApp</span>
                </td>
                <td>
                  6<br />
                  <span className={styles.calendarWorkshop}>Intro to Decentralized Storage: Build on IPFS &amp; Swarm</span>
                </td>
                <td>
                  7<br />
                  <span className={styles.calendarLecture}>Web3 Privacy 101</span>
                </td>
                <td>
                  8<br />
                  <span className={styles.calendarLecture}>Intro to MiniPay on Celo</span>
                  <br />
                  <br />
                  <span className={styles.calendarDiscussion}>Kernel Junto NS</span>
                </td>
                <td>
                  9<br />
                  <span className={styles.calendarSocial}>Gnosis Day</span>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  11<br />
                  <span className={styles.calendarDiscussion}>TNS Book Discussion</span>
                  <br />
                  <br />
                  <span className={styles.calendarLecture}>Ethereum Protocol Studies</span>
                </td>
                <td>
                  12<br />
                  <span className={styles.calendarDiscussion}>Is Ethereum a Network State?</span>
                  <br />
                  <br />
                  <span className={styles.calendarWorkshop}>Privacy in Practice on Logos Stack</span>
                </td>
                <td>
                  13<br />
                  <span className={styles.calendarLecture}>Token Engineering Academy Session</span>
                </td>
                <td>
                  14<br />
                  <span className={styles.calendarWorkshop}>dAI: MCPs on Swarm</span>
                  <br />
                  <br />
                  <span className={styles.calendarDiscussion}>Why Local Compute Matters (FI)</span>
                </td>
                <td>
                  15<br />
                  <span className={styles.calendarDiscussion}>Foresight Institute Existential Hope Salon</span>
                  <br />
                  <br />
                  <span className={styles.calendarLecture}>Ethereum dAI</span>
                </td>
                <td>
                  16<br />
                  <span className={styles.calendarSocial}>Protocol Labs Day</span>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  18<br />
                  <span className={styles.calendarLecture}>dID on Self Protocol</span>
                </td>
                <td>
                  19<br />
                  <span className={styles.calendarLecture}>Intro to Octant</span>
                  <br />
                  <br />
                  <span className={styles.calendarLecture}>Intro to Noir on Aztec</span>
                </td>
                <td>
                  20<br />
                  <span className={styles.calendarLecture}>Intro to Base</span>
                </td>
                <td>
                  21<br />
                  <span className={styles.calendarHackathon}>Base Hackathon</span>
                </td>
                <td>
                  22<br />
                  <span className={styles.calendarHackathon}>Base Hackathon</span>
                  <br />
                  <br />
                  <span className={styles.calendarSocial}>ETHGlobal Social + NS Party</span>
                </td>
                <td>
                  23<br />
                  <span className={styles.calendarSocial}>MetaMask Builder Night</span>
                </td>
              </tr>
              <tr>
                <td>24</td>
                <td>
                  25<br />
                  <span className={styles.calendarWorkshop}>Exit AWS: Build on Arkiv 101</span>
                </td>
                <td>
                  26<br />
                  <span className={styles.calendarHackathon}>Arkiv Builder Challenge</span>
                </td>
                <td>
                  27<br />
                  <span className={styles.calendarHackathon}>Arkiv Builder Challenge</span>
                </td>
                <td>28</td>
                <td>
                  29<br />
                  <span className={styles.calendarDiscussion}>Kernel Junto NS</span>
                </td>
                <td>30</td>
              </tr>
              <tr>
                <td>
                  31<br />
                  Check-Out
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
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
