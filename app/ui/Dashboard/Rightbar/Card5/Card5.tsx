import React from 'react'
import 'react-calendar/dist/Calendar.css'; 
import Calendar from 'react-calendar';
import style from './Card5.module.css';
const Card5 = () => {
  return (
    <div className={style.container}>
       < Calendar className={style.calendrier} />
    </div>
  )
}

export default Card5;
