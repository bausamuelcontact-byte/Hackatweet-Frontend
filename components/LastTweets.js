import styles from "../styles/LastTweets.module.css";
import { useEffect, useState } from "react";

function LastTweets(props) {
  const [like, setLike] = useState(0);

  const hoursAgo = Math.floor(
    (new Date().getTime() - new Date(props.date).getTime()) / 3600000
  );

  let heart = <span onClick={() => setLike(like + 1)}>🤍</span>;

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.infos}>
        <img src="./avatar.jpg" alt="avatar" className={styles.avatar}></img>
        <div className={styles.username}>{props.username}</div>
        <div className={styles.firstname}> @{props.firstname} </div>
        <div className={styles.firstname}>- {hoursAgo} hours ago</div>
      </div>
      <div className={styles.tweet}>{props.text}</div>
      <div className={styles.like}>
        {heart} <span>{like}</span>
      </div>
    </div>
  );
}

export default LastTweets;
