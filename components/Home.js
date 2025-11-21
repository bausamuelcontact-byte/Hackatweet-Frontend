import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllTrends } from "../reducers/trends";
import {tagSearch} from '../reducers/trends';

function Home() {
  const dispatch = useDispatch();
  const [tweetDisplay, setTweetDisplay] = useState([])
    
  const extractHashtags = (text) => {
    const regex = /#[a-zA-Z0-9_]+/g;
    return text.match(regex) || [];
  }
  
  useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(response=>response.json())
    .then(data=>{
      setTweetDisplay(data)
            
      const allTags = [];
      for (let i = 0; i < data.length; i++) {
        const tweet = data[i];
        const tags = extractHashtags(tweet.text);
        for (let tag of tags) {
          allTags.push(tag);
        }
      }
      dispatch(setAllTrends(allTags));
    })
    .catch((err) => {
      console.error("fetch tweets error", err);
    });
  }, [dispatch]);


  const displayTweets = tweetDisplay.map((data,i) => {return (<LastTweets
    key={i} user={data.user} text={data.text} date={data.date}/>)
  }) 

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
        <Tweet/>
      </div>
      <div className={styles.lastTweetsContainer}>
        {displayTweets}
      </div>
      <div className={styles.trendsContainer}>
        <Trends/>
      </div>
    </div>
  );
}

export default Home;
