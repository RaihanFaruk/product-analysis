
import React from 'react';
import logo from '../../Images/honda-logo.png'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='custom-color text-white py-7 flex items-center    justify-between px-28'>
            <div className='flex items-center'>
            <img className='w-14 pr-2' src={logo} alt="" />
            <h2 className='text-2xl font-bold'>Honda</h2>
            </div>
        <div className='flex'>
        <CustomLink className='pr-10' to='/'>Home</CustomLink>
          <CustomLink className='pr-10' to='/reviews'>Reviews</CustomLink>
          <CustomLink className='pr-10' to='/dashboard'>Dashboard</CustomLink>
          <CustomLink className='pr-10' to='/blogs'>Blogs</CustomLink>
          <CustomLink to='/about'>About</CustomLink>
        </div>
        </div>
    );
};

export default Header;