"use client"
import React, {  useEffect, useState  } from 'react';
import { signIn, useSession } from "next-auth/react";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {LoginErrorType} from '@/app/types'
const Forget_password = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrorType>();
    
      
   
        const handleSubmit =async (event: React.FormEvent) =>{
          event.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/forgot-password", { email: email })
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status == 200) {
          toast.success(response.message, { theme: "colored" });
        } else if (response.status == 400) {
          setErrors(response.errors);
        } else if (response.status == 500) {
          toast.success(response.message, { theme: "colored" });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("The error is", err);
      });
  };

  return (
    <>
    <ToastContainer />
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
        <div className="bg-[#f2f2f2] p-8 rounded shadow-md w-96">
            <h1 className="text-4xl text-center font-semibold mb-8"> Forget Password ?</h1>
            <p>
            Don't worry it happens. just enter your email below and we will send
            an email to you.
          </p>
            <form onSubmit= {handleSubmit}>
            
                <input type ='email' className=" w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline" 
                placeholder= "Email"onChange={(event) => setEmail(event.target.value)}
                >

                </input>
                
                <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600' disabled={loading}>{loading ? "Processing" : " Register"}</button>
                
            </form>
            <div className='text-center text-gray-500 mt-4'> - OR -</div>
            <Link className='block text-center text-blue-500 hover: underline mt-2' href="/" >
                Login Here
            </Link>
        </div>
        
    </div>
    </>
  )
}

export default Forget_password;