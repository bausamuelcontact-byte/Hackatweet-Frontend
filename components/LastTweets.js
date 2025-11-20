import styles from '../styles/LastTweets.module.css'
import { useEffect, useState } from 'react';

function LastTweets(props) {

    return (
        <div className={styles.tweetContainer}>
            <div>{props.user}<span>{props.date}</span></div>
            <div>{props.text}</div>
            <div>❤️<span>0</span></div>
        </div>
    );
}

export default LastTweets;