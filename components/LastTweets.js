import styles from "../styles/LastTweets.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function LastTweets(props) {
  const [like, setLike] = useState(0);
  const user = useSelector((state) => state.user.value);

  const hoursAgo = Math.floor(
    (new Date().getTime() - new Date(props.date).getTime()) / 3600000
  );

  function deleteTweets() {
    if (props.token === user.token) {
      fetch(`http://localhost:3000/users/delete/${props.id}`).then((data) => {
        console.log("suppr", data);
      });
    } else {
      console.log("mauvais user");
    }
  }

  let heart = <span onClick={() => setLike(like + 1)}>🤍</span>;
  let poubelle = (
    <span
      onClick={() => {
        deleteTweets();
      }}
    >
      🗑️
    </span>
  );

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
        {poubelle}
      </div>
    </div>
  );
}

export default LastTweets;
