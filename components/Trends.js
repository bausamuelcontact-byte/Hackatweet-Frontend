import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import styles from '../styles/Trends.module.css';

//Afficher un Hashtag
const Hashtag = (props) => {
  return (
    <div>
      <strong>{props.tag}</strong>
      <p>{props.count} tweet(s)</p>
    </div>
  );
}

function Trends(){
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
 console.log(hashtags)
  return (
    <div >
		<h2 >Trends</h2>
		<div className={styles.hashtagsContainer}>
			{hashtags}
		</div>
	</div>
  )

}

export default Trends;
