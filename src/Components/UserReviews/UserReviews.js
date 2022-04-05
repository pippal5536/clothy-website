import React,{useState, useEffect} from 'react';
import UserReviewDetails from '../Userreviewdetails/UserReviewDetails';

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('review.json')
        .then (res => res.json())
        .then (data => setReviews(data));
        
    },[]);
    return (
        <div className='font-mono mt-16'>
            <h1 className='text-center text-4xl'>Our Reviews({reviews.length})</h1>
        {reviews.map(review => (
        <UserReviewDetails key={review.id} review={review}/>
        
        ))}  

        </div>
    );
};

export default UserReviews;