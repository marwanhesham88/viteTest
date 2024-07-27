import React, { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        document.title = 'about';
      }, []);
  return (
    <div className="py-80 bg-[#1abc9c]  pt-96">
        <div className="container mx-auto">
        <div className="py-3">
            <h2 className="text-[40px] font-bold text-[#FFFFFF] mb-3 text-center ">ABOUT COMPONENT</h2>
            <div className="mb-3 flex justify-center content-center relative">
            <div className="line me-7 bg-white"></div>
            <i className="fa-solid fa-star text-white absolute top-[-7px] "></i>
            <div className="line ms-7 bg-white"></div>
            </div>
        </div>
        
       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-0 aloo">
                <div className="text-[#FFFFFF] w-fit px-16 "><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                <div className="text-[#FFFFFF] w-fit px-16 "><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            </div>
        </div>
     
        
</div>
  )
}