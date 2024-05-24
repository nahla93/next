"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/app/ui/Dashboard/Rightbar/Transaction/Rechart4/Rechart4.module.css';

const Rechart4 = () => {
  const [totalTags, setTotalTags] = useState(0);

    useEffect(() => {
        const fetchTotalTags = async () => {
            try {
                const response = await fetch('/api/Tag');
                const data = await response.json();
                setTotalTags(data.length);
            } catch (err) {
                console.error('Failed to fetch tags', err);
            }
        };

        fetchTotalTags();
    }, []);
  return (
    
   
    <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total Count of Tags </span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}> {totalTags}  </span>
          <img src='/tags.png' width={100} className={styles.img}  />
          
        </div>
      </div>
 

    
  )
}

export default Rechart4