"use client";
import React, { useState } from 'react'
import style from '@/app/ui/Dashboard/Setting/Setting.module.css';
import {  useSession } from "next-auth/react";
import { headers } from 'next/headers';
const Setting = () => {
    
    const { data: session} = useSession();
    const [password, setPassword] = useState (session?.user?.password|| '');
     
    const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
      e.preventDefault();
      const { name, value } = e.target;
      if (name === "password") {
        setPassword(value);
      } 
    }
    const handleSubmit = async (e: React.FormEvent <HTMLFormElement>)=>{
        e.preventDefault();
        
        
      
          const user = {
            password,
            
          };
            try {
                const res = await fetch("/api/Profile/Update", {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(user),
                });
                if (res.status == 200 && res.ok) {
                  console.log("the password is updated successfuly");
                  
                  
                }
                const result = await res.json();
                alert(result.message);
              } catch (err) {
                console.log(err);
              }

            };

  return (
    <div className={style.container}>
      <h3> Change Password</h3>
            <div className={style.col}>
                <label className={style.title}>
                     Current Password
                </label>
                <div className={style.colInput}>
                    {session?.user.password} 
                </div>
            </div>
        <form className={style.from} onSubmit={handleSubmit}>
            
            <div className={style.col}>
                <div className={style.title}>
                    <h3> New Password</h3>
                </div>
                <div className={style.colInput}>
                    <input type='text'  name='password'
              value={password}
                          onChange={handleChange}/>
                </div>
            </div>
            
            <div className={style.col}>
                <div className={style.col}>
                    <button  className={style.btn} type='submit'> Save</button>
                </div>
            </div>

        </form>


    </div>
  )
}

export default Setting;