
import React from 'react';

import styles from './Card3.module.css';



const Card3 =()=> {
  
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total Feedbacks</span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}>4</span>
          <img src='/feedbacks.jpeg' width={100} className={styles.img}  />
        </div>
      </div>
    );
  }


export default Card3;
