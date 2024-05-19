"use client";
import React,  { useState } from 'react';
import MenuLink from './MenuLink/MenuLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUsers,faHandshake, faCog, faBars, faSignOutAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import style from '@/app/ui/Dashboard/Sidebar/Sidebar.module.css';
import { RiSurveyFill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { ImProfile } from "react-icons/im";
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const menuItems = [
    {
        title: "Home",
        path: "/Dashboard",
        icon: <FontAwesomeIcon icon={faHome}className={style.icon}/>,
    },
    {
        title: "Profile",
        path: "/Dashboard/Profil",
        icon: <ImProfile className={style.icon} />,
    },
    {
        title: "Users",
        path: "/Dashboard/User",
        icon: <FontAwesomeIcon icon={faUsers}className={style.icon} />,
    },
    {
        title: "Tag",
        icon: <FontAwesomeIcon icon={faTag}  className={style.icon} />,
        path: "/Dashboard/Tag",
    },   
    {
        title: "Survey",
        path: "/Dashboard/Tag/Survey",
        icon: <RiSurveyFill  className={style.icon} />, 
    },
    
    
    {
        title: "Feedback",
        path: "/Dashboard/Feedback",
        icon: <VscFeedback className={style.icon} />,
    },
    {
        title: "Mediation",
        path: "/Dashboard/Mediation",
        icon: <FontAwesomeIcon icon={faHandshake}className={style.icon} />,
    },
    {
        title: "Setting",
        path: "/Dashboard/Setting",
        icon: <FontAwesomeIcon icon={faCog} className={style.icon} />,
    },
];

const Sidebar = () => {
    
    return (
     
        <div className={style.container} >
            <div className={style.company}>
                <div className={style.imgContainer}>
                    
                  <img src="/linqubit.png" alt="" width={80} height={80} />
                  <div className={style.imgBordure}></div>
                 </div>
                <div className={style.CompanyDetail}>
                    <span className={style.companyName}>LINQUBIT</span>
                </div>
            </div>    
            <ul className={style.list}>
                {menuItems.map((item) => (
                    <MenuLink item ={item} key={item.title} /> 
                ))}
            </ul>

            <button className={style.logout}><FontAwesomeIcon icon={faSignOutAlt} onClick={()=> signOut()}/>Logout</button>
        </div>
   
    );
};

export default Sidebar;
