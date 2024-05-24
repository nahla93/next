"use client"
import React, { useEffect, useState } from 'react'
import Search from '@/app/ui/Dashboard/Search/Search';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@/app/ui/Dashboard/Pagination/page';
import style from '@/app/ui/Dashboard/Tag/Tag.module.css';
import { ITag } from '@/app/types';
const Tag = () => {
  
  const handleClick = () => {
    
    window.location.href = '/Dashboard/Tag/Survey';
  };
  const [tags, setTags] = useState<ITag[]>([]);

  useEffect(() => {
    const getTags = async () => {
      try {
        const response = await fetch("/api/Tag");
        if (response.ok) {
          const tagData = await response.json();
          setTags(tagData);
        } else {
          console.error('Failed to fetch tag:', response.status);
        }
      } catch (error) {
        console.error('Error fetching tag:', error);
      }
    };
    getTags();
}, []);
  return (
    <div className={ style.container}>
       <div className={ style.top}>
           <Link href="/Dashboard/Tag/AddT">
            <button className={ style.addbutton}> Add New </button>
           </Link> 
       </div>
       <table className={ style.table}>
        <thead>
            <div className={ style .btn}>
             <button className={ style .btnTag}> Tags  </button>
             <button className={ style .btnPolls} onClick={handleClick}> Survey</button>
          </div>
           
        </thead>
         
         <tbody>
            <tr>
                <td> </td> <td> Name </td> <td> Description</td> <td> Visibility</td> <td> Action </td>
            </tr>
          {tags.map ((tag)=>(
          <tr key={tag._id.toString()}> 
            <td>
              <div className={style.user}>
                <img
                  src="/tag1.png"
                  alt=""
                  width={40}
                  height={40}
                  className={style.userImage}
                />
                
              </div>
            </td>
            <td>{tag.name}</td>
            <td>{tag.description}</td>
            
            

            <td>
              <div className={style.active}>{tag.visibility ? "public" : 'private'}</div>
            </td>
            <td>
              <div className={style.buttons}>
                <Link href={`/Dashboard/Tag/${tag._id}`}>
                  <button>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </Link>
                <Link href={`/Dashboard/Tag/Modify/${tag._id}`}>
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

export default Tag;