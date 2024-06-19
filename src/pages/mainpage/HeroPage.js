import React from 'react'
import './Heropage.css'
import homepageImg from '../../img/bg-im.jpg'
import banner from '../../img/technician-banner.png'
import googlerating from '../../img/rating-google.png'
import facebookrating from '../../img/rating-facebook.png'
import servicerating from '../../img/rating-services.png'


export const HeroPage = () => {
  return (
    <div  className='hero-section mt-1'>
       
        
        <div className='main-page-bg'>
        
            <img className='hero-section-img main-page-bg' src={homepageImg} alt='home_page_img'></img>
            <p className='text-7xl font-bold highlight'> YOUR LOCAL <br/> 
            <span className=' text-highlight'>HOT WATER </span>  <br/> EXPERTS</p>

            <div className='hero-features '>
                 <span className='text-2xl font-bold'>Upforont price <br/>
                   <p className='text-xs font-normal'>know the price of the job befor we start</p> </span> 

                   <span className='text-2xl font-bold'>$0 Call Out <br/>
                   <p className='text-xs font-normal'>No call out fees</p> </span> 

                   <span className='text-2xl font-bold'>$50 off for online booking <br/>
                   <p className='text-xs font-normal'>Book online to receive a discount</p> </span> 
            </div>
        </div>

        <div>
            <img  className="technician-img" src={banner} alt="technician"/>
            <div className='d-flex space-x-2 rating'>
                <img src={facebookrating} alt='Facebook_rating' />
                <img src={googlerating} alt='Google_rating' />
                <img src={servicerating} alt='Customer_rating' />

            </div>
        </div>


    </div>
  )
}
