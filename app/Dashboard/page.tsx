import React from 'react'
import Card from '@/app/ui/Dashboard/Card/Card';
import Card2 from '@/app/ui/Dashboard/Card2/Card2';
import Card3 from '../ui/Dashboard/Card3/Card3';
import Transaction from '../ui/Dashboard/Rightbar/Transaction/Transaction';
import Chart from '../ui/Dashboard/Chart/Chart';
import Rightbar from '../ui/Dashboard/Rightbar/Rightbar';

import style from '@/app/ui/Dashboard/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={style.wrapper}>
      
       <div className={style.main}>
         <div className={style.cards}>
            <Card />
            <Card2 />
            <Card3 />
          </div>
          <Transaction/>
          <div className={style.cards2}>
             
             <Chart/>
          </div>
        </div>
          <div className={style.side}>
            <Rightbar/>
          </div>
        
      </div>
      
  )
}

export default Dashboard;