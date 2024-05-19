"use client";
import React, {useState} from 'react'
import style from '@/app/ui/Dashboard/Tag/AddT/AddT.module.css';
import { MdFilterList } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { IPerson } from '@/app/types';

const AddT = ({userToAdd}: {userToAdd:String}) => {
    const handleClick = () => {
    
        window.location.href = '/Dashboard/Tag/ListUsers';
      };
      const [showModal, setShowModal] = useState(false);

    const handlModalClick = () => {
        setShowModal(true);
    };

    const handleExportClick = () => {

      //exportation
      setShowModal(false);
        
    };
    const [name, setName]= useState ("");
    const [description, setDescription]= useState ("");
    const [visibility, setVisibility] = useState<boolean>(false);
    const [users, setUsers]= useState ("");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
      const {name,value}= e.target;
      switch (name)
      {
        case "name": setName (value);
        break;
        case "description": setDescription (value);
        break;
        case "visibility": setVisibility (value ==='true');
        break;
        case "users": setUsers (value);
        break;
        default:
        break;
      }
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      const tag={
        name:name,
        description: description,
        visibility: visibility,
        users: users,
      }
      console.log(tag);
      try {
        const res = await fetch("/api/Tag", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tag),
        });
        if (res.status == 200 && res.ok) {
          console.log("the tag is added successfuly");
        }
        const result = await res.json();
        alert(result.message);
      } catch (err) {
        console.log(err);
      }
    };

    const [addedUsers, setAddedUsers] = useState<IPerson[]>([]);
  return (
    
    <div className={style.container}>
      <h1 className={style.title}> New Tag Creation Form </h1>
        <form className={style.form} onSubmit={handleSubmit}>
           <label> Name </label>
          <div className={ style.text}>
            <input type='text' placeholder='Name' required onChange={handleChange} name='name' value={name}/>
            </div>
            <label> Description </label>
          <div className={ style.text}>
             
            <input type='text' onChange={handleChange} name= 'description' value={description} /> 
            
            
            <button onClick={handlModalClick} className={style.btnC}><FaCamera /></button>
            {showModal && (
                <div className={style.modal}>
                    <button onClick={handleExportClick}>Export</button>

                </div>
            )}
            </div>
            
            
            <div className={ style.visible}>
            <label> Visibility </label>
              <div className={style.col}>
              <input
              type='radio'
              name='Visibility'
              id='Public'
              value='true'
               onChange={handleChange}
              
            /> 
            <label >Public</label>
             <div className={style.col}>
               <input
                 type='radio'
                 name='visibility'
                 id='Private'
                value='false'
                 onChange={handleChange} />
               <label >Private</label>
              </div>
              </div>
              </div>
              <label> Users </label>
             <div className={ style.text}>
             
             <input type='text'  onChange={handleChange}  value={users} name="users" />
            < button onClick={handleClick}className={style.btnL}> <MdFilterList /></button>
            </div>
            <button type="submit" className={style.btnSub} > Submit </button>
            </form>
           
        </div>
  )
}

export default AddT;