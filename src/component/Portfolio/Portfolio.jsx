import React, { useEffect, useState } from 'react'
import HomeImage from "../../assets/images/poert1.png"
import CheesCake from "../../assets/images/port2.png"
import HomeImage2 from "../../assets/images/port3.png"

export default function Portfolio() {
const [modal1, setModal1] = useState(false)
const [modal2, setModal2] = useState(false)
const [modal3, setModal3] = useState(false)

  useEffect(() => {
    document.title = 'portfolio';
  }, []);


function activeModal1() {
  setModal1(!modal1)
}

function activeModal2() {
  setModal2(!modal2)
}

function activeModal3() {
  setModal3(!modal3)
}

if (modal1 || modal2 || modal3 ) {
  document.body.classList.add("active-modal")
}else{
  document.body.classList.remove("active-modal")
}

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
           <div className='rounded-3 overflow-hidden relative group/item ' onClick={activeModal1} >
            <img src={HomeImage} alt="home" className='w-full rounded-3 alooo1'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100' >
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           {modal1 && (
            <div className='modal z-[999]'>
              <div onClick={activeModal1} className='overlay'></div>
              <div className='modal-content'>
              <img src={HomeImage} alt="home" className='w-full rounded-3 alooo1'/>
              </div>
            </div>
           )}
           <div className='rounded-3 overflow-hidden relative group/item ' onClick={activeModal2}>
            <img src={CheesCake} alt="cake" className='w-full rounded-3 alooo2'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           {modal2 && (
            <div className='modal z-[999]'>
              <div onClick={activeModal2} className='overlay'></div>
              <div className='modal-content'>
              <img src={CheesCake} alt="home" className='w-full rounded-3 alooo2'/>
              </div>
            </div>
           )}
           <div className='rounded-3 overflow-hidden relative group/item ' onClick={activeModal3}>
            <img src={HomeImage2} alt="home2" className='w-full rounded-3 alooo3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           {modal3 && (
            <div className='modal z-[999]'>
              <div onClick={activeModal3} className='overlay'></div>
              <div className='modal-content'>
              <img src={HomeImage2} alt="home" className='w-full rounded-3 alooo3'/>
              </div>
            </div>
           )}
           <div className='rounded-3 overflow-hidden relative group/item ' onClick={activeModal1}>
            <img src={HomeImage} alt="home" className='w-full rounded-3 alooo1'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item ' onClick={activeModal2}>
            <img src={CheesCake} alt="cake" className='w-full rounded-3 alooo2'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
           <div className='rounded-3 overflow-hidden relative group/item ' onClick={activeModal3}>
            <img src={HomeImage2} alt="home2" className='w-full rounded-3 alooo3'/>
            <div className='absolute start-0 top-0 w-full h-full flex justify-center content-center layer group-hover/item:opacity-100'>
            <i className="text-white fa-solid fa-plus fa-6x flex justify-center content-center"></i>
            </div>
           </div>
            </div>
      </div>
    </div>
  )
}
