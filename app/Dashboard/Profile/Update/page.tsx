"use client";
import React, {useState} from 'react';
import style from '@/app/ui/Dashboard/Profile/Profile.module.css';
import  styles from '@/app/ui/Dashboard/User/AddU/AddU.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineUpdateDisabled } from 'react-icons/md';
import {  useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
const Update = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: session, status } = useSession();
  const [name, setName] = useState(session?.user?.name || '');
  const [adresse, setAdresse] = useState(session?.user?.adresse || '');
  const [phone, setPhone] = useState(session?.user?.phone || '');
  const [email, setEmail] = useState (session?.user?.email || '');
    const router= useRouter ();
    const handleClick = () => {
        setShowModal(true);
    };

    const handleExportClick = () => {

      //exportation
      setShowModal(false);
        
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
      const {name,value}= e.target;
      switch (name)
      {
        case "name": setName (value);
        break;
        
        case "email": setEmail (value);
        break;
        case "phone": setPhone (value);
        break;
        case "adresse": setAdresse (value);
        break;
        default:
        break;
      }
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const user={
        name:name,
        email:email,
        
        phone:phone,
        adresse:adresse,
      }
      console.log(user);
      try {
        const res = await fetch("/api/Profile/Update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (res.status == 200 && res.ok) {
          console.log("the profile is updated successfuly");
          
          router.push ("/Dashboard/Profile");
        }
        const result = await res.json();
        alert(result.message);
      } catch (err) {
        console.log(err);
      }
    };

    
  return (
    <div className= {style.wrapper}>
        <div className= {style.nav}>
        </div>
        <div className= {style.body}>
          <div className= {style.profil}>
            <div className= {style.descProfil}>
               <img alt='' src='/ad.jpeg' className= {style.imgProfil}></img> 
                <button onClick={handleClick}><FontAwesomeIcon icon={faEdit}  className= {style.iconi}/> </button> 
                
               <h2 className= {style.name}> {session?.user?.name} </h2>

             </div>  
               
          </div>
   
          
             
          <div className= {style.contentProfil}> 
          <form className={styles.form}  onSubmit={handleSubmit}>
          <label> Name </label>
              <div className={ styles.text}>
                
                <input type='text' placeholder={session?.user.name}
                        name="name"
                           value={name}
                          onChange={handleChange}  />
                   </div>
              
              <label> Email </label>
              <div className={ styles.text}>
                 
                <input type='text'   name="email" placeholder={session?.user.email}
                           value={email}
                          onChange={handleChange}  />
              </div>
             
              <label>  Phone </label>
              <div className={ styles.text}>
                
                <input type='number' placeholder={session?.user.phone}  name="phone"
                           value={phone}
                          onChange={handleChange} />
              </div>
              <label>  Address </label>
              <div className={ styles.text}>
                
                <input type='text'   name="adresse"
                           value={adresse} placeholder={session?.user.adresse}
                          onChange={handleChange} />
              </div>

                 <div className= {styles.buttons}>
                    <button className= {style.btnsave} type='submit'> Save </button>
                    
                 </div>   
             </form>    
             </div> 
           </div>  
       </div>
  )
}

export default Update;