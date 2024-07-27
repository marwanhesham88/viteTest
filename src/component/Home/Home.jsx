import man from "../../assets/images/avataaars.svg"
import React, { useEffect } from 'react'

export default function Home() {
 
    useEffect(() => {
      document.title = 'home';
    }, []);
  
  return (
    <div className="py-44 bg-[#1abc9c]  pt-72">
    <div className="flex flex-col  text-center">
        <img src={man} alt="man" className="w-[250px] mx-auto mb-7"/>
        <div className="py-3">
            <h2 className="text-[40px] font-bold text-[#FFFFFF] mb-3 ">START FRAMEWORK</h2>
            <div className="mb-3 flex justify-center content-center relative">
            <div className="line me-7 bg-white"></div>
            <i className="fa-solid fa-star text-white absolute top-[-7px] "></i>
            <div className="line ms-7 bg-white"></div>
            </div>
        </div>
        <div className="text-[#FFFFFF]">Graphic Artist - Web Designer - Illustrator</div>
    </div>
    
</div>
  )
}