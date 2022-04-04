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
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/blogs" element={<Blogs/>}/> 
      <Route path="/About" element={<About/>}/> 
      <Route path="/Dashboard" element={<Dashboard/>}/> 
      <Route path="/UserReviews" element={<UserReviews/>}/> 
      <Route path="*" element={<NotFound/>}/> 

    </Routes>
  );
}

export default App;
