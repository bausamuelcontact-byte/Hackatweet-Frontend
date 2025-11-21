import styles from '../styles/Tweet.module.css';
import { useEffect, useState } from 'react';

function Tweet (props) {

    const [tweetLength, setTweetLenght] = useState(0);
    const [tweetContent, setTweetContent] = useState('');

    const submitTweet = () => {
        if (tweetContent.length<=280) {
        props.postTweet(tweetContent)
        }
    }

    return (
        <>
        <h1 className={styles.home}>Home</h1>
        <div className={styles.tweetContainer}>
            <input className={styles.tweetInput} onChange={(e)=>{
                setTweetLenght(e.target.value.length)
                setTweetContent(e.target.value)}} placeholder="What's up?"/>
        </div>
        <div className={styles.tweetDiv}>
            <div className={styles.caracterCount}><p><span>{tweetLength}</span>/280</p></div>
            <button className={styles.tweetButton} onClick={()=>{submitTweet()}}>Tweet</button>
        </div>
        </>
    );

}

export default Tweet;