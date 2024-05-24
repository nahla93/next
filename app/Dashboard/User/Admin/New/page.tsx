"use client";
import React, { useEffect, useState } from 'react'
import { IPerson } from '@/app/types';
import Search from '@/app/ui/Dashboard/Search/Search';
import Link from 'next/link';
import style from '@/app/ui/Dashboard/User/Admin/Admin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import { useRouter } from 'next/navigation';


const New = ( {params}:any) => {
  const [selectedUser, setSelectedUser]= useState('')
  const router= useRouter()
  const handleClick = () => {
    
    window.location.href = '/Dashboard/User/Admin';
  };
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
  
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      
    try {
       
     
      const response = await fetch('/api/Admin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: selectedUser }),
      });

      if (response.ok) {
        alert('User successfully nominated as admins');
      } else {
        alert('Failed to nominate user');
      }
    } catch (error) {
      console.error('Error nominating users:', error);
      alert('An error occurred while nominating users');
    }
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
      <form onSubmit={handleSubmit }>
        
            
               
           <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} className={ style.table}>
                    <option value=""> Select a User </option>
                       {users.map((user) => (
                    <option key={user._id.toString()} value={user._id.toString()}>
                      {user.name}
                    </option>
                    ))}
            </select>
                
                 <button type='submit' className={ style.button}> Promote to admin </button> 
              
            
         
        
      </form>
   
    

</div>
)
}

export default New;