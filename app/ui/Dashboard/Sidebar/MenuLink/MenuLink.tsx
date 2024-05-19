import React from 'react';
import Link from 'next/link';
import style from './MenuLink.module.css'
import { usePathname } from 'next/navigation';
interface MenuItem {
  path: string;
  icon: React.ReactNode;
  title: string;

}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
 
  return (
    
    <Link href={item.path} className={style.container}>
      
          {item.icon}
        {item.title} 
       
       
    </Link>
     
 
  )
}

export default MenuLink
