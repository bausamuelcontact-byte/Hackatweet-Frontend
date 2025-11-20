import styles from '../styles/Tweet.module.css';
import { useEffect, useState } from 'react';

function Tweet () {

    const [tweetLength, setTweetLenght] = useState(0);
    const [tweetPost, setTweetPost] = useState('');

    return (
        <>
        <h1 className={styles.home}>Home</h1>
        <div className={styles.tweetContainer}>
            <input className={styles.tweetInput} onChange={(e)=>setTweetLenght(e.target.value.length)} placeholder="What's up?"/>
        </div>
        <div className={styles.tweetDiv}>
            <div className={styles.caracterCount}><p><span>{tweetLength}</span>/280</p></div>
            <button className={styles.tweetButton}>Tweet</button>
        </div>
        </>
    );

}

export default Tweet;