"use client"
import React, { useState } from 'react'
import {  useSession } from "next-auth/react";
import styles from './Navbar.module.css';
import { useLocation } from 'react-router-dom';



import { ImProfile } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {
  const {pathname}:any = useLocation() ; 
  const {data:session} = useSession();
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {pathname. split ("/").pop()}
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
           <div className={ styles.admin}>
              <IoIosNotifications />
              {session && <span className="text-2xl tracking-normal py-10 font-semibold">{session.user?.name}</span>}
             <img src='/admin.png' alt=''className={ styles.adminImg}/>
           </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar; 