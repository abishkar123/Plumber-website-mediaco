import React from 'react'
import auuamax from '../../img/Brand_img/aquamax.jpg'
import Dux from '../../img/Brand_img/DUX.jpg'
import parisi from '../../img/Brand_img/parisi.jpg'
import grohe from '../../img/Brand_img/grohe.png'
import rheem from '../../img/Brand_img/rheem.png'
import thermann from '../../img/Brand_img/thermann.png'
import vulcan from '../../img/Brand_img/vulcan.jpg'
import '../ServicePage/ServicePage.css'



export const Brand = () => {
  return (
    <div>
        <div className=' mt-5 '>
            <p className='text-2xl font-bold px-16'> We use well known brands including</p>
            <div className='line-horizental'></div>
        </div>

        <div>
            <div className='brand_icons space-x-4'>
            <img className='w-30' src={vulcan} alt='brands_name'/>
            <img src={thermann} alt='brand_name'/>
            <img src={parisi} alt='brand_naem'/>
            <img src={grohe} alt='brand_name'/>
            <img src={Dux} alt='brand_name'/>
            <img src={auuamax} alt='brand_name'/>
            <img src={rheem} alt='brand_name'/>

            </div>
            
        
        </div>

        <div>

        </div>

    </div>
  )
}
