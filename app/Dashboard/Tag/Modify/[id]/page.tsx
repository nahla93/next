"use client"
import React, { useState, useEffect } from 'react'
import  style from '@/app/ui/Dashboard/User/AddU/AddU.module.css';
import { NextRequest } from 'next/server';
import { useRouter } from 'next/navigation';
import { MdVisibility } from 'react-icons/md';
import { IPerson } from '@/app/types';
import { FaEyeSlash, FaEye} from 'react-icons/fa';
const Modify = (req:any) => {
  const [name, setName]= useState ("") ;
  const [description, setDescription] =useState('' )
  
  const router= useRouter ()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    const {name,value}= e.target;
    switch (name)
    {
      case "name": setName (value);
      break;
      
      case "description": setDescription (value);
      break;
      
      default:
      break;
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const tag={
      _id:req.params.id, 
      name:name,
      description:description,
      
    }
    console.log(tag);
    try {
      const res = await fetch(`/api/Tag/${tag?._id}`
        , {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tag),
      });
      if (res.status == 200 && res.ok) {
        console.log("the tag is updated successfuly");
        router.push ("/Dashboard/Tag");
      }
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      console.log(err);
    }
  };
 
  
  
  
  
  
  
  
  return (
    
   
        <div className={style.container}>
          
          <form className={style.form}  onSubmit={handleSubmit}>
          

          <label> Name </label>
          
              <div className={ style.text}>
              
                <input type='text' placeholder= "name"
                        name="name"
                           value={name}
                          onChange={handleChange}  />
                   </div>
              
              <label> Description </label>
              <div className={ style.text}>
                 
                <input type='text' placeholder='description'  name="description"
                           value={description}
                          onChange={handleChange}  />
              </div>
             
              
              
              
               
            <button type="submit" className={style.button}> Save</button>
          </form>
        </div>
      );
    }
    
   

export default Modify