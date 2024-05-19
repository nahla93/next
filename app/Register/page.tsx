"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
const Register = () => {
  const [loading, setLoading] = useState(false);
    const router= useRouter ();
    const [error, setError] = useState("");
    const isValidEmail = (email:string)=>{
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email)
    };
        const handleSubmit =async (e:any) =>{
           e.preventDefault ();
           setLoading(true);
           const name= e.target [0].value;
           const email = e.target[1].value;
           const password = e.target[2].value;
           if (!isValidEmail (email)){
            return
           }
           if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
          }
      
          if (!password || password.length < 8) {
            setError("Password is invalid");
            return;
          }
          try {
            const res = await fetch("/api/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                password,
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
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
        <div className="bg-[#f2f2f2] p-8 rounded shadow-md w-96">
            <h1 className="text-4xl text-center font-semibold mb-8"> Register</h1>
            <form onSubmit= {handleSubmit}>
            <input type ='text' className=" w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline" 
                placeholder= "Name" required
                />
                <input type ='text' className=" w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline" 
                placeholder= "Email" required
                >

                </input>
                <input type ='password' className=" w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none " 
                placeholder= "Password" required
                ></input>
                <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>{loading ? "Processing" : " Register"}</button>
                <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
            </form>
            <div className='text-center text-gray-500 mt-4'> - OR -</div>
            <Link className='block text-center text-blue-500 hover: underline mt-2' href="/" >
                Login with an exist count
            </Link>
        </div>
        
    </div>
  )
}

export default Register;