"use client"
import React, { useState } from 'react'
import  style from '@/app/ui/Dashboard/User/AddU/AddU.module.css';
import { NextRequest } from 'next/server';
import { useRouter } from 'next/navigation';

const UpdateAdmin = (req:any) => {
  const [name, setName]= useState ("");
  
  const [email, setEmail] =useState("");
  const [phone, setPhone] =useState("");
 
  const [adresse, setAdresse] =useState("");
  const router= useRouter ()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    const {name,value}= e.target;
    switch (name)
    {
      case "name": setName (value);
      break;
      
      case "email": setEmail (value);
      break;
      case "phone": setPhone (value);
      break;
      
      case "adresse": setAdresse (value);
      break;
      default:
      break;
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const admin={
      _id:req.params.id, 
      name:name,
      email:email,
      
      phone:phone,
      adresse:adresse,
    }
    console.log(admin);
    try {
      const res = await fetch(`/api/Admin/${admin?._id}`
        , {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      });
      if (res.status == 200 && res.ok) {
        console.log("the person is updated successfuly");
        router.push ("/Dashboard/User/Admin");
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
          

          <label> Username </label>
              <div className={ style.text}>
                
                <input type='text' placeholder= "name"
                        name="name"
                           value={name}
                          onChange={handleChange}  />
                   </div>
             
              <label> Email </label>
              <div className={ style.text}>
                 
                <input type='text' placeholder='Email'  name="email"
                           value={email}
                          onChange={handleChange}  />
              </div>
             
              <label>  Phone </label>
              <div className={ style.text}>
                
                <input type='number' placeholder='Phone Number'  name="phone"
                           value={phone}
                          onChange={handleChange} />
              </div>
              
              
                <label>  Adress </label>
                <div className={ style.text}>
                <input type='text'  id="adresse"   name="adresse"
                           value={adresse}
                          onChange={handleChange}  />
               </div>
               
            <button type="submit" className={style.button}> Save</button>
          </form>
        </div>
      );
    }
    
   

export default UpdateAdmin