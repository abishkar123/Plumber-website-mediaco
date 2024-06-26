import React from 'react';

const Testimonial = ({ name, text, location }) => {
  return (
    
        <div className='review-first'>
      <div className='space-x-3'>
        <span className='text-4xl text-blue-400'><i className="fa-solid fa-quote-right fa-xs" style={{color: '#74C0FC'}}></i></span>
      <p className='text-2xl font-semibold'>{name}</p>
      <p className='text-sm font-semibold'>{text}</p>
      <div className='text-yellow-400 text-2xl'>
        &#9733; &#9733; &#9733; &#9733; &#9733;

        <p className=' text-xl text-blue-500 font-semibold'>{location}</p>

      </div>
     
      </div>
      
    </div>

  
    
  );
};

export default Testimonial;
