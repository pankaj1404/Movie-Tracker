import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.Module.scss';

const NavBar =()=>{
    return(
    <nav className={style.navHeader}>
    <NavLink
      activeClassName={style.navbarLinkActive}
      className={style.navLink}
      to="/"
    >
     List of Movies 
    </NavLink>
  </nav>
    );
}
export default NavBar;