import React from 'react'
import './ServicePage.css'
import discount_icon from '../../img/discount.png'
import { Cardpage } from './Cardpage'
import { Brand } from './Brand'
import { Banner } from './Banner'

export const ServicePage = () => {
  return (
    <div className='custom-body'>
    <div>
      <img  className= "service-highlight"src={discount_icon} alt='customer_disocunt'/>
      <p className='text-6xl font-bold text-hightlight'>Plumbing  {""}
        <span className='text-blue-500'>Services </span> We Offer</p>
      <p className=' service-text-hightlight text-sm font-semibold'>We are industry leaders providing quality plumbing, drainage, hot water, and roofing-related
      services to our Community of Customers.</p>
    </div>
    <div>
      <Cardpage/>
      <Brand/>
      <Banner/>
      
    </div>
      
   </div>
  )
}
