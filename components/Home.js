import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllTrends } from "../reducers/trends";
import { tagSearch } from "../reducers/trends";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

function Home() {
  const userInfo = useSelector((state) => state.user.value);
  const [tweetDisplay, setTweetDisplay] = useState([]);
  const [refresh, setRefresh] = useState(0);
  let letter = "";

  const refresher = () => setRefresh(refresh + 1);

  // récupérer le nom et l'username pour la session en cours pour l'afficher au dessus du bouton logout
  const [userNameDisplay, setUserNameDisplay] = useState("");
  const [userFirstNameDisplay, setUserFirstNameDisplay] = useState("");
  console.log("test=>", userInfo.token);

  useEffect(() => {
    fetch("http://localhost:3000/users/isConnected/" + userInfo.token)
      .then((response) => response.json())
      .then((data) => {
        setUserNameDisplay(data.username);
        setUserFirstNameDisplay(data.firstname);
      });
  }, []);

  // fonction passée en props à <Tweets /> pour poster un tweet depuis le component components/Tweet.js grâce à la barre d'input
  function postTweet(textInput) {
    fetch("http://localhost:3000/tweets/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userInfo.username,
        text: textInput,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log("Tweet posted mf");
          setRefresh(refresh + 1);
        } else {
          console.log("brrr error");
        }
      });
  }

  const dispatch = useDispatch();
  const router = useRouter();
  const tag = useSelector((state) => state.trends.selectedTag);

  const extractHashtags = (text) => {
    const regex = /#[a-zA-Z0-9_]+/g;
    return text.match(regex) || [];
  };

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetDisplay(data);

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
    /*}, [dispatch]);*/
  }, [dispatch, refresh]);

  let displayTweets = tweetDisplay.map((data, i) => {
    return (
      <LastTweets
        key={i}
        username={data.user.username}
        firstname={data.user.firstname}
        text={data.text}
        date={data.date}
        id={data._id}
        token={data.user.token}
        refresher={refresher}
      />
    );
  });

  // Afficher les tweets correspondants au hashtag
  if (tag) {
    const selectedTweets = tweetDisplay.filter((tweet) =>
      tweet.text.includes(tag)
    );
    displayTweets = selectedTweets.map((data, i) => {
      return (
        <LastTweets
          key={i}
          username={data.user.username}
          firstname={data.user.firstname}
          text={data.text}
          date={data.date}
          refresher={refresher}
        />
      );
    });
  }

  function logoutBtn() {
    dispatch(logout());
    router.push("/Login");
  }

  if (userInfo.username) {
    letter = userInfo.username.charAt(0);
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.leftPartContainer}>
        <div className={styles.logoStyle}>
          <Image src="/logo_trsp.png" width={120} height={120} priority />
        </div>
        <div className={styles.userLeft}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{letter}</Avatar>
          </Stack>
          <h3>
            @{userNameDisplay} {userFirstNameDisplay}
          </h3>
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
        <Tweet postTweet={postTweet} />
      </div>
      <div className={styles.lastTweetsContainer}>{displayTweets}</div>
      <div className={styles.trendsContainer}>
        <Trends />
      </div>
    </div>
  );
}

export default Home;
