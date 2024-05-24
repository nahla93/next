"use client";
import React, {useEffect, useState} from 'react';
import style from '@/app/ui/Dashboard/Tag/Update/Update.module.css';
import { FaEyeSlash, FaEye} from 'react-icons/fa';
import Link from 'next/link';
import { ITag } from '@/app/types';
import { useRouter } from 'next/navigation';
const tagDetail = () => {
    
    const [tag, setTag] = useState<{tag:ITag}>();

    
    
    const router = useRouter ();
    const _id = location.pathname.split("/")[3];
    useEffect(() => {
      const fetchTag = async () => {
        
        try {
          const response = await fetch(`/api/Tag/${_id}`, {
            cache: "no-store",
          });
  
          if (response.ok) {
            const tagData = await response.json();
            setTag(tagData);
            
          } else {
            console.error('Failed to fetch tag:', response.status);
          }
        } catch (error) {
          console.error('Error fetching tag:', error);
        }
      };
  
      
      if (_id) {
        fetchTag();
      }
    }, [_id]);
    const [visibility, setVisibility]= useState(false );
    const handleClick = async()=>{
      const tag= {visibility:visibility, _id}
      try {
        const res = await fetch(`/api/Tag/status/${tag?._id}`
          , {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tag),
        });
        if (visibility == false){
          setVisibility (true);
        }else{
          setVisibility (false);
        };
      const result = await res.json();
    alert(result.message);
    
    } catch (err) {
      console.log(err);
    }
    };
    
    

  return (
    <div className={style.container}>
        <div className={style.left}>
        <img
                  src="/tag1.png"
                  alt=""
                  width={60}
                  height={60}
                  className={style.userImage}
                />
        <h2 className={style.title}>{tag?.tag.name} </h2>
        
        </div>
        <div className={style.right}>
            <div className={style.top} >
              <h3> Description </h3>
              <p> {tag?.tag.description}</p>
            </div>
            <div className={style.body}>
                <h3 className={style.h3}> Visibility </h3>
                
                <div className={style.list}>
                    {tag?.tag.visibility? "public": "private"}
                    
                </div>
                <button onClick={handleClick} className={style.mediaIcon} >{visibility?  <FaEye/> : <FaEyeSlash/> }  </button>
            </div>
            </div>
            <div className={style.bottom}>
            <Link href={`/Dashboard/Tag/Modify/${tag?.tag._id}`}>
            <button className= {style.btna}> Update </button>
                 </Link>   
                    
            </div>
        </div>

       
    
  )
}

export default tagDetail;