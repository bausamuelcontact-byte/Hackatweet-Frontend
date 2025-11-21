import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { logout } from "../reducers/user";
import { useDispatch } from "react-redux";

function Home() {
  const [tweetDisplay, setTweetDisplay] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetDisplay(data);
      });
  }, []);

  console.log(tweetDisplay);

  const displayTweets = tweetDisplay.map((data, i) => {
    return (
      <LastTweets key={i} user={data.user} text={data.text} date={data.date} />
    );
  });

  function logoutBtn() {
    dispatch(logout());
    router.push("/Login");
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.leftPartContainer}>
        <div className={styles.logoStyle}>
          <Image src="/logo_trsp.png" width={120} height={120} priority />
        </div>
        <div className={styles.userLeft}>
          <h3>John Cena</h3>
          <button
            className={styles.userLeftButton}
            onClick={() => {
              logoutBtn();
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className={styles.tweetContainer}>
        <Tweet />
      </div>
      <div className={styles.lastTweetsContainer}>{displayTweets}</div>
      <div className={styles.trendsContainer}></div>
    </div>
  );
}

export default Home;
