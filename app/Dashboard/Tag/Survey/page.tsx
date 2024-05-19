
"use client";
import React, { useEffect, useState } from 'react'
import Search from '@/app/ui/Dashboard/Search/Search';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import style from '@/app/ui/Dashboard/Tag/Survey/Survey.module.css';
import { ISurvey } from '@/app/types';
const Survey = () => {
  
  const handleClick = () => {
    
    window.location.href = '/Dashboard/Tag';
  };
  const [surveys, setSurveys] = useState<ISurvey[]>([]);

  useEffect(() => {
    const getSurveys = async () => {
      try {
        const response = await fetch("/api/Survey");
        if (response.ok) {
          const surveysData = await response.json();
          setSurveys(surveysData);
        } else {
          console.error('Failed to fetch surveys:', response.status);
        }
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    getSurveys();
  }, []);
  return (
      <div className={ style.container}>
        <div className={ style.top}>
           <Link href="/Dashboard/Tag/Survey/AddS">
            <button className={ style.addbutton}> New Survey </button>
           </Link>
           <button  className={ style.addbutton}> Export pdf</button>
       </div>
       <table className={ style.table}>
        <thead>
            <div className={ style .btn}>
             <button className={ style .btnTag} onClick={handleClick}> Tags  </button>
             <button className={ style .btnPolls} > Survey</button>
          </div>
           <div className={ style .btnSearch}><Search   /> </div> 
        </thead>
         <tbody>
         <tr>
                 <td> Title</td>  <td> Survey Start Date</td> <td> Survey End Date  </td> <td> Tag</td>
                <td> Action </td>
            </tr>
            {surveys.map ((survey)=>(
          <tr key={survey._id.toString()}> 
            <td>
              
                {survey.title}
             
            </td>
            
            <td>{survey.date_debut}</td>
            
            <td>{survey.date_end}</td>
            <td>{survey.tag}</td>
            <td>
              <div className={style.buttons}>
                <Link href={`/Dashboard/Tag/Survey/${survey._id}`}>
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

export default Survey;