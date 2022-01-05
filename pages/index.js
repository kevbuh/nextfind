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
          Using AI models to help you know what&apos;s next.
        </p>
        <div>
          <p className={styles.description}>Coming soon to:</p>
          <div className={styles.stores}>
            <Image
              src="/Apple_logo_black.svg"
              alt="App Store"
              width={120}
              height={50}
            />
            <Image
              src="/Android_symbol_green_RGB.png"
              alt="Play Store"
              width={120}
              height={50}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
