import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Image from "next/image";

function Home() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.leftPartContainer}>
        <div className={styles.logoStyle}>
          <Image src="/logo_trsp.png" width={120} height={120} priority />
        </div>
        <div className={styles.userLeft}>
          <h3>John Cena</h3>
          <button className={styles.userLeftButton}>Logout</button>
        </div>
      </div>
      <div className={styles.tweetContainer}>
        <Tweet />
      </div>
      <div className={styles.lastTweetsContainer}></div>
      <div className={styles.trendsContainer}></div>
    </div>
  );
}

export default Home;
