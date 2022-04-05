import React from 'react';

const UserReviewDetails = ({review}) => {
    return (
        <div className='font-mono'>
            <div className="ml-4 mt-4 border-4 border-violet-900 rounded border-dotted p-4">
                <p className='mt-4 mb-4 font-bold'>{review.name}</p>
            <p className='mb-6 font-bold'>Rating:{review.rating}</p>
            <p>{review.about}</p>
            
            </div>
        </div>
    );
};

export default UserReviewDetails;