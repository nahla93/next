"use client";
import React from 'react'
import style from '@/app/ui/Dashboard/Profil/Profil.module.css';
const Profil = () => {
  const handleUpdateClick = () => {
    
    window.location.href = '/Dashboard/Profil/Update';
  };
  return (
    <div className= {style.wrapper}>
        <div className= {style.nav}>
        </div>
        <div className= {style.body}>
            <div className= {style.descProfil}>
               <img alt='' src='/ad.jpeg' className= {style.imgProfil}></img>  
               <h2 className= {style.name}> Alex </h2>
            </div>  
                
          <div className= {style.contentProfil}> 
            <table className= {style.table}>
              <tbody>
                     <tr>
                         <td>First Name</td> <td> Alex</td>
                      </tr>
                      <tr>
                          <td>Last Name</td> <td> Alex</td>
                      </tr>
                      <tr>
                         <td>Phone number</td> <td> 77152202</td>
                       </tr>
                       <tr>
                          <td> Email Adress</td> <td> Alex@gmail.com</td>
                        </tr>
                        <tr>
                          <td>City</td> <td> Paris</td>
                        </tr>
                         <tr>
                           <td>Country</td> <td> France</td>
                         </tr>
               </tbody>
              </table>
              <button className= {style.btn} onClick={handleUpdateClick}> 
                    Update 
                </button> 
          </div>
           
       
       
      </div>
    </div>
  )
}

export default Profil;