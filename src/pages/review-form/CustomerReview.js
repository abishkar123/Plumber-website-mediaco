import React from 'react'
import './ReviewForm.css'
import { Review } from './Review'

export const CustomerReview = () => {
  return (
    <div className='review-div'>
        <div>
        <p className='text-7xl font-extrabold text-center mt-11 p-6'>what our clients say.</p>

        </div>

        <div>
        <div className='first-review'>
            <p> 
            <span className='text-4xl text-blue-400 position: relative left-9'><i className="fa-solid fa-quote-right fa-xs" style={{color: '#74C0FC'}}></i></span>
             <p className='text-2xl font-semibold'>John Smith</p>
             <p className='text-sm font-semibold position: relative right-20'>This is placeholder text This is placeholder textThis is 
                <p className=' position: relative right-3'>placeholder textThis is placeholder textThis is placeholder</p>
                  
                    </p>
                <span className='text-yellow-400 text-2xl'>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p className=' text-xl text-blue-500 font-semibold'>Abbotsford</p>
            </p>
        </div>

        <div className='second-review'>
            <p> 
            <span className='text-4xl text-blue-400 position: relative left-9'><i className="fa-solid fa-quote-right fa-xs" style={{color: '#74C0FC'}}></i></span>
             <p className='text-2xl font-semibold'>John Smith</p>
             <p className='text-sm font-semibold position: relative right-20'>This is placeholder text This is placeholder textThis is 
                <p className=' position: relative right-3'>placeholder textThis is placeholder textThis is placeholder</p>
                  
                    </p>
                <span className='text-yellow-400 text-2xl'>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p className=' text-xl text-blue-500 font-semibold'>Five Dock</p>
            </p>
        </div>

        <div className='third-review'>
            <p> 
            <span className='text-4xl text-blue-400 position: relative left-9'><i className="fa-solid fa-quote-right fa-xs" style={{color: '#74C0FC'}}></i></span>
             <p className='text-2xl font-semibold'>John Smith</p>
             <p className='text-sm font-semibold position: relative right-20'>This is placeholder text This is placeholder textThis is 
                <p className=' position: relative right-3'>placeholder textThis is placeholder textThis is placeholder</p>
                  
                    </p>
                <span className='text-yellow-400 text-2xl'>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <p className=' text-xl text-blue-500 font-semibold'>Ultimo</p>
            </p>
        </div>
       
        </div>

        

    </div>
  )
}
