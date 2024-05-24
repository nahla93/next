"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import {  useSession } from "next-auth/react";
import style from '@/app/ui/Dashboard/Profile/Profile.module.css';
import { IAdmin } from '@/app/types';
const Profile = () => {
  const handleUpdateClick = () => {
    
    window.location.href = '/Dashboard/Profile/Update';
  };
  
  const {data:session} = useSession();
  
  return (
    
    <div className= {style.wrapper}>
        <div className= {style.nav}>
        </div>
        <div className= {style.body}>
            <div className= {style.descProfil}>
               <img alt='' src='/ad.jpeg' className= {style.imgProfil}></img>  
               {session && <h2 className= {style.name}> {session?.user?.name} </h2>}
            </div>  
                
          <div className= {style.contentProfil}> 
            <table className= {style.table}>
              <tbody>
                     <tr>
                      <td>First Name</td> {session && <td> {session?.user?.name}</td>}
                      </tr>
                      
                      <tr>
                         <td>Phone number</td>{session && <td> {session?.user?.phone}</td>}
                       </tr>
                       <tr>
                          <td> Email Adress</td>{session && <td> {session?.user?.email}</td>}
                        </tr>
                        <tr>
                          <td>Adress</td> <td> {session?.user?.adresse}</td>
                        </tr>
                         
               </tbody>
              </table>
              <button className= {style.btn} onClick={handleUpdateClick}> 
                    Update 
                </button> 
          </div>
           
    
       
      </div>
    
    </div>
  )
}

export default Profile;