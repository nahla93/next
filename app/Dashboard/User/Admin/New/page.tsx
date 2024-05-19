"use client";
import React , {useState} from 'react'
import Search from '@/app/ui/Dashboard/Search/Search';
import Link from 'next/link';
import style from '@/app/ui/Dashboard/User/Admin/Admin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
const New = () => {
  
  
  const handleClick = () => {
    
    window.location.href = '/Dashboard/User/Admin';
  };
  const handleViewClick = () => {
    window.location.href = '/Dashboard/Profil';
  }
  return (
    <div className={ style.container}>
     <div className={ style.top}>
         <div className={ style .btn}>
             <button className={ style .btnUsers}><div className={ style .members}> Members</div>  </button>
             <button className={ style .btnAdmin} onClick={handleClick}> Admins</button>
          </div>
          <div className={ style .btnSearch}><Search  /> </div>
      </div>
      <table className={ style.table}>
        <thead>
            <tr> <td> # </td>
                <td>Id</td><td> Name</td> <td> Mobile </td> <td> Email</td> <td> Role </td> <td> Account Status </td>
                <td> Action </td>
            </tr>
        </thead>
        <tbody>
            <tr> 
                <td ><input type='checkbox' /></td>
                <td>785</td><td> < div className={ style.user}> 
                    <img src="/avatar1.jpg" alt="" width={40} height={40} className={ style.userImage}/>
                    B
                    </div></td>
                    <td> 11122000 </td><td> B@gmail.com</td> <td> Marketing Manager </td> <td> <div className= {style.active}> Active</div> </td> 
                    <td>
                        <div className={style.buttons}>
                          <Link href="/Dashboard/Users/View" >
                            <button > <FontAwesomeIcon icon={faEye} /></button>
                          </Link>
                          
                          
                        </div>
                    </td> 
            </tr>
            <tr> <td ><input type='checkbox'  /></td>
                <td>889</td><td> < div className={ style.user}> 
                    <img src="/avatar2.jpg" alt="" width={40} height={40} className={ style.userImage}/>
                    C
                    </div></td>
                    <td> 23042002 </td><td> C@gmail.com</td> <td> Engineer </td> <td> <div className= {style.bloquer}>Bloqued</div> </td> 
                    <td>
                        <div className={style.buttons}>
                          <Link href="/Dashboard/Users/View" >
                            <button > <FontAwesomeIcon icon={faEye}  /></button>
                          </Link>
                          
                        </div>
                    </td>
            </tr>
           
        </tbody>

    </table>
    <Pagination />
    

</div>
)
}

export default New;