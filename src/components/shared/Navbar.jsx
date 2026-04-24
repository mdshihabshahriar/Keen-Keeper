import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import MyNavLink from './MyNavLink';

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <AiOutlineHome></AiOutlineHome>,
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <RiTimeLine></RiTimeLine>,
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <ImStatsDots></ImStatsDots>,
        },
    ];

    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {  
                            navItems.map((item) => <li><MyNavLink to={item.path}>{item.icon} {item.text}</MyNavLink></li>)
                        }
                    </ul>
                    </div>
                    <a className="text-xl font-semibold">Keen<span className='text-green-900'>Keeper</span></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems.map((item) => <li><MyNavLink to={item.path}>{item.icon} {item.text}</MyNavLink></li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;