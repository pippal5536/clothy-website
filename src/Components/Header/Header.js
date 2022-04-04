import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
       <nav>
           <div className='font-angel font-light text-4xl flex justify-center p-2 text-white bg-black '>
               <Link className='mx-4' to='/'>Home</Link>
               <Link className='mx-4' to='/dashboard'>Dashboard</Link>
               <Link className='mx-4' to='/reviews'>UserReviews</Link>
               <Link className='mx-4'  to='/blogs'>Blogs</Link>
               <Link className='mx-4' to='/about'>About</Link>
               
           </div>
       </nav>
    );
};

export default Header;
