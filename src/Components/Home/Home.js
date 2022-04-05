import React from 'react';
import homeImage from '../../Assets/images/home.jpg';
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <div className='mt-16'>
            <div className='grid grid-cols-2 gap-y-4'>
                <div className='my-14 mx-10 font-mono text-8xl font-bold'>
                    <h1>BEST DEAL TODAY!!!</h1>
                    <h2>BUY WIHIN 18th APRIL TO GET 30% DISCOUNT!</h2>
                    <div className='flex justify-center'>
                        <button className='text-white bg-black p-6 rounded-full mt-4 text-6xl '>BUY NOW!</button>
                    </div>
                </div>


                <div className='mt-12 mr-2'>
                    <img className='h-160 w-160' src={homeImage} alt="" />

                </div>


            </div>
            <div className='text-center mt-32'>
                
                <h1 className='font-mono font-bold text-8xl'>USER REVIEWS</h1>
               
                <button  className=' font-mono font-bold  text-white bg-black p-4 rounded-full mt-16 '><Link to='/reviews'>See More Reviews!</Link></button>
            </div>
        </div>
    );
};

export default Home;