
import React from 'react';
import styles from '@/app/ui/Dashboard/Card/Card.module.css';
const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total user accounts</span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}>35</span>
          <img src='/compte.jpg' width={40} className={styles.img}  />
          
        </div>
      </div>
  )
}

export default Card;
  
  
    