import React,{useState, useEffect} from 'react';
import homeImage from '../../Assets/images/home.jpg';
import { Link } from 'react-router-dom';




const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('review-three.json')
        .then (res => res.json())
        .then (data => setReviews(data));
        
    },[]);
    return (
        <div className='mt-16'>
            <div className='grid md:grid-cols-2 gap-y-4'>
                <div className='my-14 mx-10 font-mono  font-bold'>
                    <h1 className='text-5xl'>Clothy! is a popular platform for best clothing reviews.</h1>
                    <h2 className='text-2xl'>we provide an extensive base of  reviews prepared by both experts and actual users so you can easily find the best cloth to buy. </h2>
                    <div className='flex justify-center'>
                        <button className='text-white bg-violet-900 p-6 rounded-full mt-4 text-3xl '>Explore!</button>
                    </div>
                </div>


                <div className='mt-12 mr-2'>
                    <img className='h-160 w-160' src={homeImage} alt="" />

                </div>


            </div>
            <div className='text-center mt-32'>
                
                <h1 className='font-mono font-bold text-5xl'>USER REVIEWS({reviews.length})</h1>
                <div>
           
               <div className='grid md:grid-cols-3 mt-8 gap-4 mx-4 font-mono '>
               {reviews.map(review => (
                    <div className='grid grid-row-3 border-8 gap-4 border-dotted border-violet-900 '>
                           <p className='mt-4 mb-4 font-bold'>{review.name}</p>
            <p className='mb-6 font-bold'>Rating:{review.rating}</p>
            <p>{review.about}</p>
                    </div>
                    ))}  
               </div>
                <button  className=' font-mono font-bold  text-white bg-violet-900 p-4 rounded-full mt-16 mb-16 '><Link to='/reviews'>See More Reviews!</Link></button>
            </div>
           
        
        
            </div>
        </div>
    );
};

export default Home;