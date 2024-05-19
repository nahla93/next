"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import style from '@/app/ui/Dashboard/User/Compte/Compte.module.css';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { IPerson } from '@/app/types';
const Compte =  () => {
  const [user, setUser] = useState<IPerson | undefined>(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/User/${user?._id}`, {
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

    
      fetchUser();
   
  }, []);

  
    
  return (
    <div className={ style.wrapper}>
        <div className={ style.container}>
            <div className={ style.Profil}>
                <img className={ style.img} alt='' src='/novatar.jpg'></img>
                <div className={ style.descProfil}>
                     <h3  className={ style.name}> {user?.name} </h3>
                    
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
                            <td> {user?.email}</td><td> {user?.cin}</td><td> {user?.isBanned? 'blocked':'active'}</td>
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
                            <td> {user?.phone}</td><td> {user?.adresse}</td> 
                        </tr>
                    </tbody>
                 </table>
                </div>
                <div className={ style.footer}>
                    {user?.tag}
                </div>
                <Link href={`/Dashboard/User/Update/${user?._id}`}>
                <button type='submit' className={style.btn} > Update </button>
                </Link>
        </div>
        </div>
    </div>
  )
}

export default Compte