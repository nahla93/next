
import React from 'react';

import styles from './Card2.module.css';


const Card2=()=>  {
  
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total Surveys</span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}>4</span>
          <img src='/sondages.jpg' width={100} className={styles.img}  />
        </div>
      </div>
    );
  
}

export default Card2;
