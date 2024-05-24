import React from 'react'
import styles from './Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Pagination = () => {
  return (
    <div className={styles.container}>
      
      <ul className={styles.pagination}>
      <li><button className={styles.disabled} disabled > <FontAwesomeIcon icon={faChevronLeft} ></FontAwesomeIcon></button> 
        </li>
        
        <li className={styles.item}>
         <button className={styles.button} > <FontAwesomeIcon icon={faChevronRight} ></FontAwesomeIcon></button>    
           </li>
      </ul>
   
  </div>
    )

}

export default Pagination;