import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>
        {/* Logo */}
        <Link to='/'>
        <img
            className="header__icon"
            src={require("./worth.jpg")}
            alt=""
        /> 
        </Link>
        {/* Search bar */}
        <div className='header__center'>
            <input type='text' />
            <SearchIcon />
        </div>

        {/* Other */}
        <div className='header__right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>

    </div>
  )
}

export default Header