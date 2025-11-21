import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import styles from '../styles/Trends.module.css';
import { useDispatch } from 'react-redux';
import {tagSearch} from '../reducers/trends';

//Afficher un Hashtag
const Hashtag = (props) => {
    const dispatch = useDispatch();
    const handleHideClick = () => {
           dispatch(tagSearch(props.tag));  
	}
  return (
    <div className={styles.hashtagPart} onClick={handleHideClick}>
      <strong>{props.tag}</strong>
      <p className={styles.tweetsCount}>{props.count} Tweet(s)</p>
    </div>
  );
};

function Trends() {
  const trends = useSelector((state) => state.trends.value);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const newCounts = {};
    for (let i = 0; i < trends.length; i++) {
      const tag = trends[i];
      if (newCounts[tag]) {
        newCounts[tag] += 1;
      } else {
        newCounts[tag] = 1;
      }
    }
    setCounts(newCounts); 
  }, [trends]);

  const hashtags = [];
  for (const tag in counts) {
    hashtags.push(<Hashtag key={tag} tag={tag} count={counts[tag]} />);
  }

  return (
    <div className={styles.trendsContainer}>
		<h2 className={styles.title}>Trends</h2>
		<div className={styles.hashtagsContainer}>
			{hashtags}
		</div>
	</div>
  )
}

export default Trends;
