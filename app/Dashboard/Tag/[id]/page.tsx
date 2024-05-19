"use client";
import React, {useEffect, useState} from 'react';
import style from '@/app/ui/Dashboard/Tag/Update/Update.module.css';
import { IoPersonRemoveSharp } from "react-icons/io5";
import { ITag } from '@/app/types';
const tagDetail = () => {
    const handleOpen =()=>{
        window.location.href = '/Dashboard/Tag/ListUsers';
    }
    const [tag, setTag] = useState<ITag | undefined>(undefined);

  useEffect(() => {
    const getTag = async () => {
      try {
        const response = await fetch(`/api/Tag/${tag?._id}`, {
          cache: "no-store",
        });

        if (response.ok) {
          const userData = await response.json();
          setTag(userData);
        } else {
          console.error('Failed to fetch tag:', response.status);
        }
      } catch (error) {
        console.error('Error fetching tag:', error);
      }
    };

    
      getTag();
   
  }, []);

  return (
    <div className={style.container}>
        <div className={style.left}>
        <h2 className={style.title}>{tag?.name} </h2>
        
        </div>
        <div className={style.right}>
            <div className={style.top} >
              <h3> Description </h3>
              <p> {tag?.description}</p>
            </div>
            <div className={style.body}>
                <h3 className={style.h3}> Users Membership </h3>
                <div className={style.list}>
                    {tag?.users}
                    
                </div>
            </div>
            </div>
            <div className={style.bottom}>
            <button className= {style.btna} onClick={handleOpen} > Add User  </button>  
            <button className= {style.btna}> Update </button>
                    
                    
            </div>
        </div>

       
    
  )
}

export default tagDetail;