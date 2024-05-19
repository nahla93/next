"use client"
import React, {  useEffect, useState  } from 'react';
import { signIn, useSession } from "next-auth/react";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
const Forget_password = () => {
  const [loading, setLoading] = useState(false);
    const router= useRouter ();
    const [error, setError] = useState("");
    const { data: session, status: sessionStatus } = useSession();
    useEffect(() => {
        if (sessionStatus === "authenticated") {
          router.replace("/Dashboard");
        }
      }, [sessionStatus, router]);
    
      
    const isValidEmail = (email:string)=>{
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email)
    };
        const handleSubmit =async (e:any) =>{
           e.preventDefault ();
           setLoading(true);
           const name= e.target [0].value;
           const email = e.target[1].value;
           
           if (!isValidEmail (email)){
            return
           }
           if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
          }
      
          
          try {
            const res = await fetch("/api/Forget_password", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                
              }),
            });
            if (res.status === 400) {
              setError("This email is already registered");
            }
            if (res.status === 200) {
              setError("");
              router.push("/Dashboard");
            }
          } catch (error) {
            setError("Error, try again");
            console.log(error);
          } finally {
            setLoading(false);

          }
        };
      

        
  return (
   sessionStatus!=='authenticated' && (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
        <div className="bg-[#f2f2f2] p-8 rounded shadow-md w-96">
            <h1 className="text-4xl text-center font-semibold mb-8"> Forget Password</h1>
            <form onSubmit= {handleSubmit}>
            
                <input type ='email' className=" w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline" 
                placeholder= "Email" required
                >

                </input>
                
                <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>{loading ? "Processing" : " Register"}</button>
                <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
            </form>
            <div className='text-center text-gray-500 mt-4'> - OR -</div>
            <Link className='block text-center text-blue-500 hover: underline mt-2' href="/" >
                Login Here
            </Link>
        </div>
        
    </div>)
  )
}

export default Forget_password;