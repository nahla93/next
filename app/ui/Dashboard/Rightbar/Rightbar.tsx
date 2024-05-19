import React from 'react'

import Card5 from './Card5/Card5';
import style from './Rightbar.module.css';
import Rechart4 from './Transaction/Rechart4/Rechart4';
import Rechart3 from '../Rechart3/Rechart3';
const Rightbar = () => {
  return (
    <div className={style .wrapper}>
      <Rechart4/>
      <Rechart3 />
      <Card5/>
    </div>
  )
}

export default Rightbar;