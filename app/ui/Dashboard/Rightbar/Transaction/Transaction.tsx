import React from 'react'
import Rechart1 from './Rechart1/Rechart1';
import Rechart2 from './Rechart2/Rechart2';
import style from '@/app/ui/Dashboard/Rightbar/Transaction/Transaction.module.css';

const Transaction = () => {
  return (
    <div className={style.wrapper}>
      
      <Rechart1/>
      <Rechart2/>
    </div>

  )
}

export default Transaction;