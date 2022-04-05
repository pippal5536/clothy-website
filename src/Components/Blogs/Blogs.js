import React from 'react';

const Blogs = () => {
    return (
        <div className='text-3xl font-mono text-center mt-8 mx-8'>
            <p className='mb-4 font-bold'>Q1)What is context api?</p>
            <p className='mb-4'>ANS:Context Api is a react structure that exchanges unique details and assits in solving prop dilling of an application. It can easily produce global variables. Context Api is actually an alternative to prop dilling from parent to child. However, the context api is light and easier than the traditional prop dealing.</p>
            <p className='mb-4 font-bold'>Q2)What is semantic tag?</p>
            <p className='mb-4'>ANS: Semantic tags are the tags that accurately describe the purpose of the tag as well as the content inside them. </p>
            <p className='mb-4 font-bold'>Q3)What is the difference between inline  and inline block element?</p>
            <p className='mb-4'>ANS:Inline elements can not be styled with height and width. Inline-block elemens can be styled with height and width.Top and bottom margins and paddings are not respected in inline elements. But in inline-block element, top and bottom margins and paddings are respected. </p>
        </div>
    );
};

export default Blogs;