
"use client";
import React from 'react'
import Link from 'next/link';
import style from '@/app/ui/Dashboard/User/Admin/Admin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
const Admins = () => {
  const handleViewClick = () => {
    window.location.href = '/Dashboard/Profil';
  }
  const handleClick = () => {
    
    window.location.href = '/Dashboard/User';
  };
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
                <td>Id</td><td> Name</td> <td> date of birth </td> <td> Email</td> <td> Role </td>
                <td> Mobile </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td><td> < div className={ style.user}> 
                    <img src="/ad.jpeg" alt="" width={40} height={40} className={ style.userImage}/>
                    Alex
                    </div></td>
                    <td> 23.09.1985 </td><td> Alex@gmail.com</td> <td> CEO </td> <td> 0156568565 </td> 
                    <td>
                        <div className={style.buttons}>
                          <Link href="/Dashboard/User/Profil" >
                            <button > <FontAwesomeIcon icon={faEye} onClick={handleViewClick} /></button>
                          </Link>
                          
                        </div>
                    </td>
            </tr>
            </tbody>

    </table>
    <Pagination />

</div>
       ) }

export default Admins;