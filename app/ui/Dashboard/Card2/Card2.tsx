"use client";
import React, { useEffect, useState } from 'react';

import styles from './Card2.module.css';


const Card2=()=>  {
  const [totalSurveys, setTotalSurveys] = useState(0);

    useEffect(() => {
        const fetchTotalSurveys = async () => {
            try {
                const response = await fetch('/api/Survey');
                const data = await response.json();
                setTotalSurveys(data.length);
            } catch (err) {
                console.error('Failed to fetch surveys', err);
            }
        };

        fetchTotalSurveys();
    }, []);
  
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total Surveys</span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}> {totalSurveys}  </span>
          <img src='/sondages.jpg' width={100} className={styles.img}  />
        </div>
      </div>
    );
  
}

export default Card2;
