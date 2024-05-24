"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  useSession } from "next-auth/react";
import style from '@/app/ui/Dashboard/Profile/Profile.module.css';
import { IAdmin } from '@/app/types';
const ProfilAdmin = () => {
    const [admin, setAdmin] = useState<{admin:IAdmin}>();
    

    const _id = location.pathname.split("/")[4];
    useEffect(() => {
      const fetchAdmin = async () => {
        
        try {
          const response = await fetch(`/api/Admin/${_id}`, {
            cache: "no-store",
          });
  
          if (response.ok) {
            const adminData = await response.json();
            setAdmin(adminData);
          } else {
            console.error('Failed to fetch admin:', response.status);
          }
        } catch (error) {
          console.error('Error fetching admin:', error);
        }
      };
  
      
      if (_id) {
        fetchAdmin();
      }
    }, [_id]);
  
  return (
    
    <div className= {style.wrapper}>
        <div className= {style.nav}>
        </div>
        <div className= {style.body}>
            <div className= {style.descProfil}>
               <img alt='' src='/ad.jpeg' className= {style.imgProfil}></img>  
                <h2 className= {style.name}> {admin?.admin.name} </h2>
            </div>  
                
          <div className= {style.contentProfil}> 
            <table className= {style.table}>
              <tbody>
                     <tr>
                      <td> Name</td>  <td> {admin?.admin.name}</td>
                      </tr>
                      
                      <tr>
                         <td>Phone number</td> <td> {admin?.admin.phone}</td>
                       </tr>
                       <tr>
                          <td> Email Adress</td> <td> {admin?.admin.email}</td>
                        </tr>
                        <tr>
                          <td>Adress</td> <td> { admin?.admin.adresse}</td>
                        </tr>
                         
               </tbody>
              </table>
              <Link href={`/Dashboard/User/Update/${admin?.admin._id}`}>
              <button className= {style.btn} > 
                    Update 
                </button> 
              </Link>  
          </div>
           
    
       
      </div>
    
    </div>
  )
}

export default ProfilAdmin;