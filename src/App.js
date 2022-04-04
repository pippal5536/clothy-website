import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import UserReviews from './Components/UserReviews/UserReviews';
import Dashboard from './Components/Dashboard/Dashboard';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/blogs" element={<Blogs/>}/> 
      <Route path="/About" element={<About/>}/> 
      <Route path="/Dashboard" element={<Dashboard/>}/> 
      <Route path="/UserReviews" element={<UserReviews/>}/> 

    </Routes>
  );
}

export default App;
