import React from 'react'
import styles from '@/app/ui/Dashboard/Rightbar/Transaction/Rechart4/Rechart4.module.css';

const Rechart4 = () => {
  return (
   
    <div className={styles.container}>
        <div className={styles.title}>
          
          <span>Total Count of Tags </span>
        </div>
        <div className={styles.content}>
          <span className={styles.number}>4 </span>
          <img src='/tags.png' width={100} className={styles.img}  />
          
        </div>
      </div>
 

    
  )
}

export default Rechart4