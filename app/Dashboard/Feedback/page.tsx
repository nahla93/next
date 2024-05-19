"use client";
import React, { useEffect, useState } from 'react'
import Search from '@/app/ui/Dashboard/Search/Search';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import style from '@/app/ui/Dashboard/Feedback/Feedback.module.css';
import { IFeedback } from '@/app/types';
const Feedback = () => {
  
      const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);

      useEffect(() => {
        const getFeedbacks = async () => {
          try {
            const response = await fetch("/api/Feedback");
            if (response.ok) {
              const feedbackData = await response.json();
              setFeedbacks(feedbackData);
            } else {
              console.error('Failed to fetch feedback:', response.status);
            }
          } catch (error) {
            console.error('Error fetching feed:', error);
          }
        };
    
        getFeedbacks();
      }, []);
      const renderFeedbackImage = (type: string) => {
            if (type === "positive") {
              return <img src='/feedback1.png' alt="" className={style.tagImg}/>;
            } else if (type === "negative") {
              return <img src='/feedback3.png' alt=" "className={style.tagImg} />;
            } else {
              return null; 
            }
          };
  return (
    <div className={ style.container}>
       <div className={ style.top}>
          <h2> Feedback Directory </h2>
          <div className={ style .btnSearch}><Search   /> </div> 
       </div>
       <table className={ style.table}>
        <thead>
           <tr>
                <td> Title  </td> <td> Source </td> <td> Date </td>  <td> Type </td>  
                <td> Action </td>
            </tr>
           
        </thead>
        <tbody>
          {feedbacks.map ((feedback)=>(
          <tr key={feedback._id.toString()}> 
            <td>
              
                {feedback.title}
              
            </td>
            <td>{feedback.source}</td>
            <td>{feedback.date}</td>
            
            
            <td>{renderFeedbackImage(feedback.type)}{feedback.type}   </td>

            
            <td>
              <div className={style.buttons}>
                <Link href={`/Dashboard/User/${feedback._id}`}>
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

export default Feedback;