import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tagSearch } from "../reducers/trends";

function Tweet(props) {
  const [tweetLength, setTweetLenght] = useState(0);
  const [tweetContent, setTweetContent] = useState("");
  const dispatch = useDispatch();
  const [tweetPost, setTweetPost] = useState("");
  const tag = useSelector((state) => state.trends.selectedTag);
  const [tagValue, setTagValue] = useState("");
  const allTrends = useSelector((state) => state.trends.value);

  const submitTweet = () => {
    if (tweetContent.length <= 280) {
      props.postTweet(tweetContent);
    }
  };

  useEffect(() => {
    setTagValue(tag || "");
  }, [tag]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTagValue(value);
    if (value === "") {
      dispatch(tagSearch(null));
      return
    } 
     if (!value.startsWith("#") ) {
      dispatch(tagSearch(null));
      return
    } 
    const matchingTag = allTrends.find((t) => t.toLowerCase() === value.toLowerCase())
    dispatch(tagSearch(matchingTag || value));
  } 
    
 const hashtagMode = tagValue.startsWith("#"); 

  return (
    <>
      <h1 className={styles.home}>
        {hashtagMode ? "Hashtag" : "Home"}
      </h1>

      <div className={styles.tweetContainer}>
        {!hashtagMode &&
        <input
          className={styles.tweetInput}
          onChange={(e) => {
<<<<<<< HEAD
            handleChange(),
              setTweetLenght(e.target.value.length),
              setTweetContent(e.target.value);
          }}
=======
            setTweetLenght(e.target.value.length);
            setTweetContent(e.target.value);
          } }
          placeholder="What's up?"
        />}
        {hashtagMode &&
        <input
          className={styles.tweetInput}
          onChange={handleChange}
>>>>>>> 3a1eafeff9ec822df54a7a74cf3f0100d9e57cba
          value={tagValue}
          placeholder={tagValue || "What's up?"}
        />}
      </div>

      {!hashtagMode && (
        <div className={styles.tweetDiv}>
          <div className={styles.caracterCount}>
            <p>
              <span>{tweetLength}</span>/280
            </p>
          </div>
          <button
            className={styles.tweetButton}
            onClick={() => {
              submitTweet();
            }}
          >
            Tweet
          </button>
        </div>
      )}
    </>
  );

}

export default Tweet;
