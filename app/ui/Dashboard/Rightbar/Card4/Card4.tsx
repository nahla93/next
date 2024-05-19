import React from 'react'
import styles from './Card4.module.css';
import Image from 'next/image';
const Card4 = () => {
  return (
<div className={styles.container}>
  <div className={styles.item}>
    <div className={styles.bgcontainer}>
        <Image src="/mediation1.jpg" alt=""  className={styles.bg} fill/>
    </div>
    <div className={styles.texts}>
      <span className={styles.notification}> new mediation</span>
        <h3 className={styles.title}> April 20 </h3>
       <p className={styles.desc}>
       Mr. user1 asks to mediate
       </p>
    
    </div>
        
  </div>
</div>
  )
}

export default Card4;