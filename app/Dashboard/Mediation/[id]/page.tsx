"use client";
import React, { useEffect, useState } from 'react'
import { styleText } from 'util'
import style from '@/app/ui/Dashboard/User/Compte/Compte.module.css';

import { useRouter } from 'next/navigation';
import { IMediation } from '@/app/types';
const mediationDetail = () => {
    const [mediation, setMediation] = useState<{mediation:IMediation}>();
    const router = useRouter ();
    const _id = location.pathname.split("/")[3];
    useEffect(() => {
      const fetchMediation = async () => {
        
        try {
          const response = await fetch(`/api/Mediation/${_id}`, {
            cache: "no-store",
          });
  
          if (response.ok) {
            const feedData = await response.json();
            setMediation(feedData);
            
          } else {
            console.error('Failed to fetch mediation', response.status);
          }
        } catch (error) {
          console.error('Error fetching mediation', error);
        }
      };
  
      
      if (_id) {
        fetchMediation();
      }
    }, [_id]);
  return (
    <div className={style .container}>
        <div className={style.content}>
        <div className={ style.top}>
                 <h2 className={ style.title}> Title</h2>
                 <table className={ style.table}>
                    <tbody>
                        
                        <tr>
                            <td> {mediation?.mediation.title}</td>
                        </tr>
                    </tbody>
                 </table>
                </div>
              <div className={ style.body}>
                 <h2 className={ style.title}> Detail</h2>
                 <table className={ style.table}>
                    <tbody>
                        <tr>
                             <td> UserID </td><td> Date </td> 
                        </tr>
                        <tr>
                            <td> {mediation?.mediation.requester}</td><td> {mediation?.mediation.date}</td> 
                        </tr>
                    </tbody>
                 </table>
                </div>
                <div className={ style.footer}>
                <h2 className={ style.title}> Chat </h2>
                    {mediation?.mediation.chat}
                </div>

        </div>

    </div>
  )
}

export default mediationDetail
