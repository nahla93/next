"use client";
import React, {  useEffect, useState  } from 'react';
import style from '@/app/ui/Login/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {  faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaEyeSlash, FaEye} from 'react-icons/fa';
import type { NextRequest } from 'next/server';
import Link from 'next/link'
import { useRouter } from "next/navigation";
import admin from '@/app/model/admin';
import { signIn, useSession } from "next-auth/react";
const LoginPage = ( ) => {
  const [ showPassword, setShowPasssword] = useState (false);
  
  const togglePasswordVisibility = () => {
    setShowPasssword (! showPassword);
  } ;

  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/Dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/Dashboard");
    } else {
      setError("");
    }
  };

  
  

    return (
      sessionStatus !== "authenticated" && (
        <div className={ style.login}>
           <video autoPlay muted loop className={ style. vd} >
            <source src='/new1.mp4' />
          </video>

          <form  className={ style.loginForm} onSubmit={handleSubmit}>
            <h1 className={ style.title}> Welcome back ! </h1>
              <div className={ style.loginContent}>
                <div className={ style.loginBox}>
                  <FontAwesomeIcon icon={faUser} className={ style.loginIcon}/>
                    <div className={ style.loginBoxInput} >
                        <input className={ style.loginInput} type=' text' required placeholder=' ' 
                         />
                        <label className={ style.loginLabel}> Email</label>
                    </div>
                </div>
                <div className={ style.loginBox}>
                  <FontAwesomeIcon icon={faLock} className={ style.loginIcon}/>
                  <div className={ style.loginBoxInput} >
                    <input className={ style.loginInput} type={ showPassword ? 'text' : 'password'} placeholder=' '
                        />
                    <label className={ style.loginLabel}> Password </label>
                     <button className={ style.loginEye} onClick={ togglePasswordVisibility} > 
                        { showPassword ? <FaEye/> : <FaEyeSlash/>}
                     </button>
                  </div>
                </div>  
              </div>
              <div className={ style. loginCheck}>
                
                <a href='/Forget_password' className={ style.Forget}> Forget Password?</a>
              </div>
              <button className={ style.btn} type="submit"> Login </button>
              
              <p className={ style.text}>  sign in with </p>
              <div className={ style.media}>
                <button  className={ style.mediaIcon} onClick={()=>signIn("google")}>
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
              </div>
              <Link href='/Register'  className={ style.text}>
                 Don't have count
              </Link>
            </form>
                    
            
          </div>
      )  
    
    )
  }
export default LoginPage
