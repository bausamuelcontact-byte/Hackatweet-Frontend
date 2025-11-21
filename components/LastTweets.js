import styles from "../styles/LastTweets.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

function LastTweets(props) {
  const [like, setLike] = useState(0);
  const [hoursAgo, setHoursAgo] = useState();
  const user = useSelector((state) => state.user.value);
  console.log(props.date);
  useEffect(() => {
    setHoursAgo(
      Math.floor(
        (new Date().getTime() - new Date(props.date).getTime()) / 3600000
      )
    );
  }, []);

  function deleteTweets() {
    if (props.token === user.token) {
      fetch(`http://localhost:3000/tweets/delete/${props.id}`, {
        method: "DELETE",
      }).then((data) => {
        console.log("suppr", data);
        props.refresher();
      });
    } else {
      console.log("mauvais user");
    }
  }

  let heart = (
    <span
      onClick={() => {
        like === 0 ? setLike(1) : setLike(0);
      }}
    >
      🤍
    </span>
  );

  let poubelle = (
    <span
      onClick={() => {
        deleteTweets();
      }}
    >
      :wastebasket:
    </span>
  );

  let letter = props.username.charAt(0);
  if (hoursAgo === undefined) {
    setHoursAgo("tkt");
  }
  if (props.token !== user.token) {
    poubelle = <></>;
  }

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.infos}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>{letter}</Avatar>
        </Stack>
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
