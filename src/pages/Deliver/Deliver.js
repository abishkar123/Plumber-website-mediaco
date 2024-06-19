import React from 'react'
import './Deliver.css'
import tool from  '../../img/tool.png'
import tools from '../../img/tools.png'
import img from '../../img/background.webp'

export const Deliver = () => {
  return (
    <div className='box bg-blue-400 mt-2'>
        <div >
            <p className='text-6xl text-white hightlight-header'>What we deliver
            
            </p>
            <div className='content-hightligh'> 
            <p className=' text-sm font-normal text-white'> As a family-owned business, we take immense pride in offering a <br/>
            24/7 Service that sets us apart from the rest. With a focus on
            transparency and customer convenience, we believe in keeping
            things simple and hassle-free for our valued customers. That’s why
            we proudly offer a $0 callout, upfront pricing & Lifetime labour
            warranty, ensuring that you know exactly what to expect right from
            the start.</p>
            </div>
           
           

            <div className='  d-flex space-x-2 w-48 tool-position'>
                <img  src={tool} alt="Labour-warranty"/>
                <img src={tools} alt="licensed-insured"/>


            </div>
        
        </div>

        <aside className='position: relative'>
            <img   className='plumbing-background' src={img} alt='pluber-image'/>
            
            
        </aside>
    </div>
  )
}
