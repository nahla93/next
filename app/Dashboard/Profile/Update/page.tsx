"use client";
import React, {useState} from 'react';
import style from '@/app/ui/Dashboard/Profil/Profil.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineUpdateDisabled } from 'react-icons/md';
const Update = () => {
  const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleExportClick = () => {

      //exportation
      setShowModal(false);
        
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
                {showModal && (
                <div className={style.modal}>
                    <button onClick={handleExportClick}>Export</button>
                </div>
            )}
               <h2 className= {style.name}> Alex </h2>

             </div>  
               
          </div>
   
          
             
          <div className= {style.contentProfil}> 
               <table className= {style.table}>
                   <tbody>
                     <tr>
                         <td>First Name</td> 
                         <td> <input type="text" className={style.input} placeholder='Alex'/> <FontAwesomeIcon icon={faEdit} className= {style.icon} />
                        </td>
                      </tr>
                      <tr>
                          <td>Last Name</td> 
                          <td> <input type="text" className={style.input} placeholder='Alex'/> <FontAwesomeIcon icon={faEdit}className= {style.icon} />
                          </td>
                      </tr>
                      <tr>
                         <td>Phone number</td>
                         <td>
                           <input type="text" className={style.input} placeholder='77152202'/> <FontAwesomeIcon icon={faEdit} className= {style.icon}/>
                            </td> 
                       </tr>
                       <tr>
                          <td> Email Adress</td> 
                          <td>
                          <input type="text" className={style.input} placeholder='Alex@gmail.com'/> <FontAwesomeIcon icon={faEdit}className= {style.icon} />
                          </td>
                        </tr>
                        <tr>
                          <td>City</td> 
                          <td>
                          <input type="text" className={style.input} placeholder='Paris'/> <FontAwesomeIcon icon={faEdit} className= {style.icon} />
                          </td>
                        </tr>
                         <tr>
                           <td>Country</td> 
                           <td>
                           <input type="text" className={style.input} placeholder='France'/> <FontAwesomeIcon icon={faEdit} className= {style.icon} />
                           </td>
                         </tr>
                     </tbody>
                 </table>
                 <div className= {style.buttons}>
                    <button className= {style.btnsave}> Save </button>
                    <button className= {style.btnupdate}> Cancel </button>
            </div>   
             </div> 
           </div>  
       </div>
  )
}

export default Update;