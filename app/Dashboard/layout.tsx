"use client"
import Sidebar from '../ui/Dashboard/Sidebar/Sidebar';
import styles from '../ui/Dashboard/Dashboard.module.css';
import Navbar from '../ui/Dashboard/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const layout = ({children}:any) => 
{
    return (
        <div className={ styles.container}>
            <div className={ styles.menu}>
            <Router>
                <Sidebar/>
                </Router> 
            </div>
            <div className={ styles.content}>
               
            <Router>
                 <Navbar/>
            </Router>
                {children}
        
            </div>
       
        </div>
    )
}
export default layout; 