import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive}) => `font-semibold ${isActive ? "bg-green-900 text-white" : ""}`}> {children}</NavLink>
    );
};

export default MyNavLink;