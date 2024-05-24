"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLock } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import style from '@/app/ui/Dashboard/User/Compte/Compte.module.css';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { IPerson } from '@/app/types';
import { Router } from 'react-router-dom';
const Compte =  () => {
  const [user, setUser] = useState< {user:IPerson}>();
  const [isBanned,setIsBanned]=useState(false);
  const router = useRouter ();
  const _id = location.pathname.split("/")[3];
  useEffect(() => {
    const fetchUser = async () => {
      
      try {
        const response = await fetch(`/api/User/${_id}`, {
          cache: "no-store",
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    
    if (_id) {
      fetchUser();
    }
  }, [_id]);
  const handleClick = async()=>{
    const user= {isBanned:isBanned, _id}
    try {
      const res = await fetch(`/api/User/status/${user?._id}`
        , {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (isBanned == false){
        setIsBanned (true);
      }else{
        setIsBanned (false);
      };
    const result = await res.json();
  alert(result.message);
  router.refresh ();
  } catch (err) {
    console.log(err);
  }
  };
  const handleNommed = async()=>{
    const user= { _id}
    try {
      const res = await fetch(`/api/Admin`
        , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      
    const result = await res.json();
  alert(result.message);
  router.refresh ();
  } catch (err) {
    console.log(err);
  }
  };
  
  
  
    
  return (
    <div className={ style.wrapper}>
        <div className={ style.container}>
            <div className={ style.Profil}>
                <img className={ style.img} alt='' src='/novatar.jpg'></img>
                <div className={ style.descProfil}>
                     <h3  className={ style.name}> {user?.user.name} </h3>
                     <button onClick={handleNommed} className={style.btn}> Nommed as Admin </button>
                </div>
                
                <div className={ style.media}>
                <a href='a' className={ style.mediaIcon}>
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href='a' className={ style.mediaIcon}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href='a' className={ style.mediaIcon}>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </div>
            <div className={ style. content}>
                <div className={ style.top}>
                 <h2 className={ style.title}> Official Information</h2>
                 <table className={ style.table}>
                    <tbody>
                        <tr>
                             <td> Email </td><td>ID card number</td><td>Locked Status</td>
                        </tr>
                        <tr>
                            <td> {user?.user.email}</td><td> {user?.user.cin}</td><td> {user?.user.isBanned? 'blocked':'active'}</td>
                            <button onClick={handleClick} className={style.mediaIcon} >{isBanned===true? <FaUnlock /> :<FaLock /> }  </button>
                        </tr>
                    </tbody>
                 </table>
                </div>
              <div className={ style.body}>
                 <h2 className={ style.title}> Personal Information</h2>
                 <table className={ style.table}>
                    <tbody>
                        <tr>
                             <td> Phone number </td><td> Adress </td> 
                        </tr>
                        <tr>
                            <td> {user?.user.phone}</td><td> {user?.user.adresse}</td> 
                        </tr>
                    </tbody>
                 </table>
                </div>
                <div className={ style.footer}>
                <h2 className={ style.title}> Tags </h2>
                    {user?.user.tag}
                </div>
                <Link href={`/Dashboard/User/Update/${user?.user._id}`}>
                <button type='submit' className={style.btn} > Update </button>
                
                </Link>
        </div>
        </div>
    </div>
  )
}

export default Compte