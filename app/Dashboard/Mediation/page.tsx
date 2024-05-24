"use client";
import React, { useEffect, useState } from 'react'
import Search from '@/app/ui/Dashboard/Search/Search';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PiChats } from "react-icons/pi";
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import style from '@/app/ui/Dashboard/Mediation/Mediation.module.css';
import { IMediation } from '@/app/types';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const Mediation = () => {
  const [mediations, setMediations] = useState<IMediation[]>([]);

  useEffect(() => {
    const getMediation = async () => {
      try {
        const response = await fetch("/api/Mediation");
        if (response.ok) {
          const usersData = await response.json();
          setMediations(usersData);
        } else {
          console.error('Failed to fetch users:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getMediation();
  }, []);
  
   
  return (
    <div className={ style.container}>
       <div className={ style.top}>
          <h2> Conflict Resolution Request Board </h2>
          <div className={ style .btnSearch}><Search  /> </div> 
       </div>
       <table className={ style.table}>
        <thead>
           <tr>
                <td> Request  </td> <td> Requester </td> <td> Submission Date </td>    
                <td> View Mediation </td>
            </tr>
           
        </thead>
        <tbody>
          {mediations.map ((mediation)=>(
          <tr key={mediation._id.toString()}> 
          <td>{mediation.title}</td>
            <td>
              <div className={style.user}>
                <img
                  src="/novatar.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={style.userImage}
                />
                {mediation.requester}
              </div>
            </td>
            
            <td>{mediation.date}</td>
            

            
            <td>
              <div className={style.buttons}>
                <Link href={`/Dashboard/Mediation/${mediation._id}`}>
                  <button>
                  <FontAwesomeIcon icon={faEye} />
                  </button>
                </Link>
                
              </div>
            </td>
          </tr>
          ))}
        </tbody>
         </table>
      <Pagination />
    </div>
    
  )
  
}

export default Mediation;