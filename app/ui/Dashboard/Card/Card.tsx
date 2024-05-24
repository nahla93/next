"use client";
import React, { useEffect, useState } from 'react';
import styles from '@/app/ui/Dashboard/Card/Card.module.css';
const Card = () => {
  const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        const fetchTotalUsers = async () => {
            try {
                const response = await fetch('/api/User');
                const data = await response.json();
                setTotalUsers(data.length);
            } catch (err) {
                console.error('Failed to fetch users', err);
            }
        };

        fetchTotalUsers();
    }, []);
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total user accounts</span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}> {totalUsers}   </span>
          <img src='/compte.jpg' width={40} className={styles.img}  />
          
        </div>
      </div>
  )
}

export default Card;
  
  
    