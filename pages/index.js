import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NuFind</title>
        <meta name="Next Find" content="Next big thing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NuFind</h1>
        <p className={styles.description}>Find the Next Big Thing</p>

        <p className={styles.description}>
          Using AI models help you know whats next.
        </p>
        <div>
          <p className={styles.description}>Coming soon to:</p>
          <div className={styles.stores}>
            <Image
              src="/V1PC3OfGlO4-P-joYRbD7_z12dmy5UnamZW7UnF9ulc.webp"
              alt="App Store"
              width={150}
              height={75}
            />
            <Image src="/images.png" alt="Play Store" width={150} height={10} />
          </div>
        </div>
      </main>
    </div>
  );
}
