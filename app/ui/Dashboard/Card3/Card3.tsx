
"use client"
import React, { useEffect, useState } from 'react';

import styles from './Card3.module.css';



const Card3 =()=> {
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);

    useEffect(() => {
        const fetchTotalFeedbacks = async () => {
            try {
                const response = await fetch('/api/Feedback');
                const data = await response.json();
                setTotalFeedbacks(data.length);
            } catch (err) {
                console.error('Failed to fetch feedbacks', err);
            }
        };

        fetchTotalFeedbacks();
    }, []);
  
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total Feedbacks</span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}>    { totalFeedbacks}</span>
          <img src='/feedbacks.jpeg' width={100} className={styles.img}  />
        </div>
      </div>
    );
  }


export default Card3;
