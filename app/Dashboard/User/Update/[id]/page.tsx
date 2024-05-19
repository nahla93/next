"use client"
import React, { useState } from 'react'
import  style from '@/app/ui/Dashboard/User/AddU/AddU.module.css';
import { NextRequest } from 'next/server';
const Update = (req: any) => {
  const [name, setName]= useState ("");
  const [cin, setCin] =useState("");
  const [email, setEmail] =useState("");
  const [phone, setPhone] =useState("");
  const [tag, setTag] =useState("");
  const [adresse, setAdresse] =useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    const {name,value}= e.target;
    switch (name)
    {
      case "name": setName (value);
      break;
      case "cin": setCin (value);
      break;
      case "email": setEmail (value);
      break;
      case "phone": setPhone (value);
      break;
      case "tag": setTag (value);
      break;
      case "adresse": setAdresse (value);
      break;
      default:
      break;
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const user={
      _id: req.params.id, 
      name:name,
      email:email,
      tag:tag,
      cin:cin,
      phone:phone,
      adresse:"oiupu"
    }
    console.log(user);
    try {
      const res = await fetch(`/api/User/${user?._id}`
        , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.status == 200 && res.ok) {
        console.log("the person is added successfuly");
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
                
                <input type='text' placeholder= {name}
                        name="name"
                           value={name}
                          onChange={handleChange}  />
                   </div>
              <label> ID card number </label>
              <div className={ style.text}>
                
                <input type='text' placeholder='ID card number'  name="cin"
                           value={cin}
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
              
              <div className={ style.text}>
                <label htmlFor='tag'> Tag</label>
                <select name='tag'  value={tag}  
                            onChange={handleChange}>
                
                    <option value="General ">General Tag </option>
                    <option value=" Administrative " >  Administrative Tag  </option>
                    <option value="Technical "> Technical & Repair Tag </option>
                    <option value="Delivery "> Delivery tag </option>
                </select>
                </div>
                <label>  Adress </label>
                <div className={ style.text}>
                <input type='text'  id="adresse"   name="adresse"
                           value={adresse}
                          onChange={handleChange}  />
               </div>

            <button type="submit"> Save</button>
          </form>
        </div>
      );
    }
    
   

export default Update