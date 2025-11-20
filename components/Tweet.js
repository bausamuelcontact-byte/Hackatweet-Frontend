import styles from '../styles/Tweet.module.css';

function Tweet () {
    return (
        <>
        <h1 className={styles.home}>Home</h1>
        <div className={styles.tweetContainer}>
            <input className={styles.tweetInput} placeholder="What's up?"/>
        </div>
        <div className={styles.tweetDiv}>
            <p><span>X</span>/280</p>
            <button className={styles.tweetButton}>Tweet</button>
        </div>
        </>
    );

}

export default Tweet;