import React from 'react';
import Image from "next/image"
import styles from './Nav.module.css';
import dimond from '../../../assets/Home/nav/dimond.png'
import { FaBars } from "react-icons/fa";
import search from '../../../assets/Home/nav/search.png'
import menu from '../../../assets/Home/nav/menu.png'



const Nav = () => {

    return (
        <div className={styles.navContainer}>
            <div className="navbar">
                <div className="navbar-start py-5">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <Image src={menu} alt="" />
                            {/* <FaBars /> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Services</a></li>
                            <li><a>Booking</a></li>
                            <li><a>Contact</a></li>
                           
                        </ul>
                    </div>
                   <div>
                        <ul className='flex justify-end gap-2 pr-2'>
                            <Image src={dimond} alt="" />
                            <Image src={dimond} alt="" />
                        </ul>
                        <a className="pl-7 text-4xl">Solonnz </a>
                   </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Services<Image src={dimond} alt="" /></a> </li>
                        
                        <li><a>Booking</a></li>
                        <li><a>Contact</a></li>
                      
                    </ul>
                </div>
                <div className="navbar-end pr-7 text-xl">
                   
                    <div className='hidden lg:block'>
                        <li className='flex gap-10'>
                            <Image src={search} alt="" className={styles.search}/>
                            <Image src={menu} alt="" />
                            {/* <FaBars /> */}
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;