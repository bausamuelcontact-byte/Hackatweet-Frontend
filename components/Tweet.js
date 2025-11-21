import styles from '../styles/Tweet.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { tagSearch } from '../reducers/trends';

function Tweet (props) {

    const [tweetLength, setTweetLenght] = useState(0);
    const [tweetContent, setTweetContent] = useState('');
    const dispatch = useDispatch();
    const [tweetPost, setTweetPost] = useState('');
    const tag = useSelector((state) => state.trends.selectedTag);
    const [tagValue, setTagValue] = useState('');
    const allTrends = useSelector((state) => state.trends.value);

    const submitTweet = () => {
        if (tweetContent.length<=280) {
        props.postTweet(tweetContent)
        }
    }
    
    useEffect(() => {
      setTagValue(tag || '');
    }, [tag]);

    const handleChange = (e)=> {
      const value = e.target.value;
      setTagValue(value)
      if(value === ''){
        dispatch(tagSearch(null));
      }else if (value.startsWith('#')){
        const matchingTag = allTrends.find(t => t.toLowerCase() === value.toLowerCase());
        if(matchingTag) {
          dispatch(tagSearch(matchingTag));
        }else{
          dispatch(tagSearch(value));
        }
      }
    }
         
    return (
        <>
        <h1 className={styles.home}>{tagValue.startsWith('#') ? 'Hashtag' : 'Home'}</h1>
        <div className={styles.tweetContainer}>
            <input className={styles.tweetInput} onChange={(e)=>{
                setTweetLenght(e.target.value.length)
                setTweetContent(e.target.value)
                }} placeholder="What's up?"/>
            <input className={styles.tweetInput} onChange={handleChange} value={tagValue} placeholder={tagValue || "What's up?"}/>
           
        </div>

        {!tagValue && (
        <div className={styles.tweetDiv}>
            <div className={styles.caracterCount}><p><span>{tweetLength}</span>/280</p></div>
            <button className={styles.tweetButton} onClick={()=>{submitTweet()}}>Tweet</button>
        </div>
        )}
        </>
    );

}

export default Tweet;