"use client";
import React, { useEffect, useState } from 'react'
import Search from '@/app/ui/Dashboard/Search/Search';
import Link from 'next/link';
import style from '@/app/ui/Dashboard/Tag/ListeUsers/ListeUsers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import { IPerson } from '@/app/types';
const ListUsers = () => {
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
  

  const [userToAdd, setUserToAdd] = useState<string>("");
  const handleAddUserClick = (user: IPerson) => {
    // Pass the selected user's name to the parent component
    setUserToAdd(user.name);
  };
  
  return (
    <div className={ style.container}>
     <div className={ style.top}>
          <div className={ style .btnSearch}><Search  /> </div>
      </div>
      <table className={ style.table}>
        <thead>
            <tr> <td> # </td>
            <td>Name</td>
            <td>ID card number</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Account Status</td>
            </tr>
        </thead>
        <tbody>
            
                
                {users.map ((user)=>(
          <tr key={user._id.toString()}>
            
                <td> < div className={ style.user}> 
                    <img src="/novatar.jpg" alt="" width={40} height={40} className={ style.userImage}/>
                    {user.name}
                    </div></td>
                    <td> {user.cin} </td><td> {user.email}</td> <td> {user.phone} </td> <td> <div className= {style.active}> {user.isBanned? user.isBanned.toString() : ''}</div> </td> 
                    <td>
                        <div className={style.buttons}>
                          <Link href={`/Dashboard/User/${user._id}`}>
                  
                            <button > <FontAwesomeIcon icon={faEye} /></button>
                          </Link>
                          
                          
                        </div>
                    </td> 
                    <td ><button type='submit'  onClick={() => handleAddUserClick(user)}/> </td>
            </tr>
           ))}
        </tbody>

    </table>
    <Pagination />
    

</div>
)
}

export default ListUsers;