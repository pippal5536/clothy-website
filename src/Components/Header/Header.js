import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
       <nav>
           <div>
               <Link to='/'>Home</Link>
               <Link to='/dashboard'>Dashboard</Link>
               <Link to='/reviews'>UserReviews</Link>
               <Link to='/blogs'>Blogs</Link>
               <Link to='/about'>About</Link>
               
           </div>
       </nav>
    );
};

export default Header;
