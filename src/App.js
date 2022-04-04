import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import UserReviews from './Components/UserReviews/UserReviews';
import Dashboard from './Components/Dashboard/Dashboard';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}/> 
    </Routes>
  );
}

export default App;
