"use client"
import React, { useEffect, useState } from 'react'
import style from '@/app/ui/Dashboard/User/User.module.css';
import Link from 'next/link';
import Search from '@/app/ui/Dashboard/Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import { FaLock } from "react-icons/fa6";
  import { IPerson } from '@/app/types';

const User =  () => {
  const [users, setUsers] = useState<IPerson[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("/api/User");
        if (response.ok) {
          const usersData = await response.json();
          setUsers(usersData);
        } else {
          console.error('Failed to fetch users:', response.status);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);
  

  return (

    <div className={style.container}>
      <div className={style.top}>
        <div className={style.btn}>
          <button className={style.btnUsers}>
            <div className={style.members}> Members</div>
          </button>
          <Link href ='/Dashboard/User/Admin'>
          <button  className={style.btnAdmin}>
            Admins
          </button>
          </Link>
        </div>
        <div className={style.btnSearch}>
          <Search />
        </div>
        <Link href="/Dashboard/User/AddU">
          <button className={style.addbutton}> Add New </button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>ID card number</td>
            <td>Email</td>
            <td>Mobile</td>
            <td> tag</td>
            <td>Account Status</td>
            <td>Action</td>
          </tr>
          </thead>
        <tbody>
          {users.map ((user)=>(
          <tr key={user._id.toString()}> 
            <td>
              <div className={style.user}>
                <img
                  src="/novatar.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={style.userImage}
                />
                {user.name}
              </div>
            </td>
            <td>{user.cin}</td>
            <td>{user.email}</td>
            
            <td>{user.phone}</td>
            <td>{user.tag}</td>

            <td>
              <div className={style.active}>{user.isBanned ? 'bloqued':'active'}</div>
            </td>
            <td>
              <div className={style.buttons}>
                <Link href={`/Dashboard/User/${user._id}`}>
                  <button>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </Link>
                <Link href={`/Dashboard/User/Update/${user._id}`}>
                
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
      <Pagination />
    </div>
  )
}

export default User