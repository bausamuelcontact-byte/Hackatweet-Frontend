import styles from '../styles/LastTweets.module.css'
import { useEffect, useState } from 'react';

function LastTweets(props) {

    const [like, setLike] = useState(0);

    const hoursAgo =  Math.floor((new Date().getTime() - new Date(props.date).getTime())/3600000);

    let heart = <span onClick={()=>(like <1 && setLike(like+1))}>🤍</span>

    return (
        <div className={styles.lastTweetContainer}>
            <div>
                <span>@{props.username}  </span> <span>{props.firstname}  </span> <span>- {hoursAgo} hours ago</span>
            </div>
            <div>{props.text}</div>
            <div>{heart} <span>{like}</span></div>
        </div>
    );
}

export default LastTweets;