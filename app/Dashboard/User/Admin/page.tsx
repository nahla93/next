
"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import style from '@/app/ui/Dashboard/User/Admin/Admin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import { IAdmin } from '@/app/types';
const Admins = () => {
  
  const handleClick = () => {
    
    window.location.href = '/Dashboard/User';
  };
  const [admins, setAdmins] = useState<IAdmin[]>([]);
  
  useEffect(() => {
    const getAdmins = async () => {
      try {
        const response = await fetch("/api/Admin");
        if (response.ok) {
          const usersData = await response.json();
          setAdmins(usersData);
        } else {
          console.error('Failed to fetch admins:', response.status);
        }
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    getAdmins();
  }, []);
  return (
    <div className={ style.container}>
     <div className={ style.top}>
         <div className={ style .btn}>
             <button className={ style .btnUsers}onClick={handleClick}> Members </button>
             <button className={ style .btnAdmin} ><div className={ style.admins}> Admins </div> </button>
          </div>
             <Link href="/Dashboard/User/Admin/New ">
            <button className={ style.addbutton}>  New admin </button>
           </Link>      
      </div>
      <table className={ style.table}>
        <thead>
            <tr>
                <td> Name</td> <td> Mobile </td> <td> Email</td> <td> Address </td>
                <td>  Action </td>
            </tr>
        </thead>
        <tbody>
        {admins.map ((admin)=>(
            <tr key={admin._id.toString()}>
                <td> < div className={ style.user}> 
                    <img src="/ad.jpeg" alt="" width={40} height={40} className={ style.userImage}/>
                    {admin.name}
                    </div></td>
                    <td> {admin.phone} </td><td> {admin.email}</td> <td> {admin.adresse} </td>  
                    <td>
                        <div className={style.buttons}>
                          <Link href={`/Dashboard/User/Admin/${admin._id}`} >
                            <button > <FontAwesomeIcon icon={faEye}  /></button>
                          </Link>
                          <Link href={`/Dashboard/User/Admin/Update/${admin._id}`}>
                
                             <button>
                  
                                            <FontAwesomeIcon icon={faEdit} />
                    
                  
                             </button>
                          </Link>
                        </div>
                    </td>
            </tr>
            ))}
            </tbody>

    </table>
   

</div>
       ) }

export default Admins;