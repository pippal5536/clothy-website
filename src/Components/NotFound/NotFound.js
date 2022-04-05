import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='justify-center'>
                <div className='text-center'>
                    <img className="w-50 h-80  p-8 inline" src="https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T1459A839PA3861PT28D1036679397FS1913/views/1,width=378,height=378,appearanceId=839,backgroundColor=FFFFFF,noPt=true/bored-cartoon-cat-cute-cats-design-sticker.jpg" alt="" />
                </div>
                <div className='font-mono '>
                    <h1 className='text-8xl font-extrabold  text-center'>404 </h1>
                    <h1 className='text-5xl text-center'> Page not found! </h1>
                    <h1 className=' mt-4 text-center '>The resource requested could not be found on this server!</h1>
                   <div className='text-center'>
                   <button className='border-4 p-2 text-xl mt-8 rounded-full w-40 bg-black text-white '><Link to='/'>Go To Home</Link></button>
                   </div>
                </div>


            </div>
        </div>
    );
};

export default NotFound;