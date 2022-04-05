import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
   
    

    return (
        <nav className=' md:sticky md:top-0  bg-violet-900'>
            <div className='font-mono md:font-light font-bold md:text-4xl md:flex justify-center p-2 text-white  '>
                <Link className='md:mx-4 mx-8 ' to='/'>Home</Link>
                <Link className='md:mx-4 mx-8 ' to='/dashboard'>Dashboard</Link>
                <Link className='md:mx-4 mx-8 ' to='/reviews'>UserReviews</Link>
                <Link className='md:mx-4 mx-8 ' to='/blogs'>Blogs</Link>
                <Link className='md:mx-4 mx-8 ' to='/about'>About</Link>

            </div>
           
        </nav>
    );
};

export default Header;