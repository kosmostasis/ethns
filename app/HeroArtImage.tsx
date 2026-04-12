import Image from "next/image";
import styles from "./page.module.css";

export default function HeroArtImage() {
  return (
    <div className={styles.heroImageFrame}>
      <Image
        src="/logos-remote/enterprise-eth.png"
        alt="Ethereum enterprise illustration"
        fill
        sizes="(max-width: 900px) 100vw, 36vw"
        priority
        className={styles.heroImage}
      />
    </div>
  );
}
