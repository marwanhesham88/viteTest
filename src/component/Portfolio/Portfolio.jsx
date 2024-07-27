import React, { useEffect } from 'react'
import HomeImage from "../../assets/images/poert1.png"
import CheesCake from "../../assets/images/port2.png"
import HomeImage2 from "../../assets/images/port3.png"

export default function Portfolio() {
  useEffect(() => {
    document.title = 'portfolio';
  }, []);
  return (
    <div className='pt-28 pb-20'>
      <div className="container mx-auto">
      <div className="py-3 text-center">
                <h2 className="text-[40px] font-bold text-[#2C3E50] mb-3 ">PORTFOLIO COMPONENT</h2>
                <div className="mb-3 flex justify-center content-center relative">
                <div className="line me-7 bg-[#2C3E50]"></div>
                <i className="fa-solid fa-star text-[#2C3E50] absolute top-[-7px] "></i>
                <div className="line ms-7 bg-[#2C3E50]"></div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage} alt="home" className='w-full rounded-3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={CheesCake} alt="cake" className='w-full rounded-3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage2} alt="home2" className='w-full rounded-3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage} alt="home" className='w-full rounded-3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={CheesCake} alt="cake" className='w-full rounded-3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item '>
            <img src={HomeImage2} alt="home2" className='w-full rounded-3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
            </div>
      </div>
    </div>
  )
}
