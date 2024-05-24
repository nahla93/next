"use client";
import React, { useEffect, useState } from 'react'
import { styleText } from 'util'
import style from '@/app/ui/Dashboard/User/Compte/Compte.module.css';
import { IFeedback } from '@/app/types';
import { useRouter } from 'next/navigation';
const feddbackDetail = () => {
    const [feedback, setFeedback] = useState<{feedback:IFeedback}>();
    const router = useRouter ();
    const _id = location.pathname.split("/")[3];
    useEffect(() => {
      const fetchFeedback = async () => {
        
        try {
          const response = await fetch(`/api/Feedback/${_id}`, {
            cache: "no-store",
          });
  
          if (response.ok) {
            const feedData = await response.json();
            setFeedback(feedData);
            
          } else {
            console.error('Failed to fetch feedback:', response.status);
          }
        } catch (error) {
          console.error('Error fetching feedback:', error);
        }
      };
  
      
      if (_id) {
        fetchFeedback();
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
                            <td> {feedback?.feedback.title}</td>
                        </tr>
                    </tbody>
                 </table>
                </div>
              <div className={ style.body}>
                 <h2 className={ style.title}> Detail</h2>
                 <table className={ style.table}>
                    <tbody>
                        <tr>
                             <td>  Name user</td><td> Date </td> 
                        </tr>
                        <tr>
                            <td> {feedback?.feedback.source}</td><td> {feedback?.feedback.date}</td> 
                        </tr>
                    </tbody>
                 </table>
                </div>
                <div className={ style.footer}>
                <h2 className={ style.title}> Type </h2>
                    {feedback?.feedback.type}
                </div>

        </div>

    </div>
  )
}

export default feddbackDetail
