import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
   
    

    return (
        <nav className='fixed top-0 left-0 right-0 bg-violet-900'>
            <div className='font-mono font-light text-4xl flex justify-center p-2 text-white '>
                <Link className='mx-4' to='/'>Home</Link>
                <Link className='mx-4' to='/dashboard'>Dashboard</Link>
                <Link className='mx-4' to='/reviews'>UserReviews</Link>
                <Link className='mx-4' to='/blogs'>Blogs</Link>
                <Link className='mx-4' to='/about'>About</Link>

            </div>
           
        </nav>
    );
};

export default Header;