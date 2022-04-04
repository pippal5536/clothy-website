
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import UserReviews from './Components/UserReviews/UserReviews';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
   <>
   <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/blogs" element={<Blogs/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/dashboard" element={<Dashboard/>}/> 
      <Route path="/reviews" element={<UserReviews/>}/> 
      <Route path="*" element={<NotFound/>}/> 

    </Routes>
   </>
  );
}

export default App;
