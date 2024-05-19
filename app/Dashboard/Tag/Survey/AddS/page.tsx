"use client"
import React, { useState } from 'react'
import style from '@/app/ui/Dashboard/Tag/Survey/AddS/AddS.module.css';
import { PiSubtitlesLight } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";

const AddS = () => {
   const [title, setTitle]= useState ("");
  const [description, setDescription] =useState("");
  const [date_debut, setDateDebut] =useState("");
  const [date_end, setDateEnd] =useState("");
  const [tag, setTag] =useState("");
  const [question, setQuestion] =useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement| HTMLTextAreaElement>) => {
    const {name,value}= e.target;
    switch (name)
    {
      case "title": setTitle (value);
      break;
      case "description": setDescription (value);
      break;
      case "date_debut": setDateDebut (value);
      break;
      case "date_end": setDateEnd (value);
      break;
      case "tag": setTag (value);
      break;
      case "question": setQuestion (value);
      break;

      default:
      break;
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const survey={
      title:title,
      description:description,
      date_debut:date_debut,
      date_end: date_end,
      tag:tag,
    }
    console.log(survey);
    try {
      const res = await fetch("/api/Survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(survey),
      });
      if (res.status == 200 && res.ok) {
        console.log("the survey is added successfuly");
      }
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={style.container}>
        <div className={style.header}>
         <h1 > New Survey Creation Form </h1>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.col}> 
            <div className={ style.title}> <PiSubtitlesLight className={ style.icon} /> <h4>Title </h4> </div>
               <div className={ style.input}>
    
                   <input type='text' required name="title"
                           value={title}
                          onChange={handleChange} />
                </div>
          </div>
          <div className={style.col}> 
            <div className={ style.title}> <TbFileDescription  className={ style.icon} /> <h4>Description </h4> </div>
               <div className={ style.input}>
    
                   <input type='text'  required name="description"
                           value={description}
                          onChange={handleChange}  />
                </div>
            </div>
            
            <div className={style.col}> 
               <div className={ style.title}> <FaCalendarAlt className={ style.icon} /> <h4> Start Date </h4> </div>
              <div className={ style.input}>
                  <input type='date' name="date_debut"
                           value={date_debut}
                          onChange={handleChange} />
               </div>

            </div>
            <div className={style.col}> 
               <div className={ style.title}> <FaCalendarAlt className={ style.icon}/> <h4>End Date </h4> </div>
               <div className={ style.input}>
                  <input type='date' name="date_fin"
                           value={date_end}
                          onChange={handleChange} />
                </div>
            </div>
            <div className={style.col}>
               
            
                <div className={ style.title}><FaQuestionCircle className={ style.icon} /> <h4>Question </h4></div>
                <div className={ style.input}>
                   <textarea  className={ style.textarea} name="question"
                           value={question}
                          onChange={handleChange} />
                  
                </div>
            </div>
            <button type="submit" className={style.btn} > Submit </button>
            </form>
            
        </div>
  )

    
}

export default AddS;
