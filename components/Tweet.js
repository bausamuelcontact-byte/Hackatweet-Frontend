import styles from '../styles/Tweet.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

function Tweet () {

    const [tweetLength, setTweetLenght] = useState(0);
    const [tweetPost, setTweetPost] = useState('');
    const tag = useSelector((state) => state.trends.selectedTag);
    const [tagValue, setTagValue] = useState('');
    
    if(tag){
        //  useEffect(() => {
        //    console.log( tagValue);
        //  }, [tagValue]);
        return (
            <>
            <h1 className={styles.home}>Hashtag</h1>
            <div className={styles.tweetContainer}>
            <input className={styles.tweetInput} onChange={(e)=>setTagValue(e.target.value)} />
        </div>
        </>
        )
    }

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