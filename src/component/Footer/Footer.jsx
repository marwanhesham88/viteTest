import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='bg-[#2c3e50] py-24'>
          <div className='grid grid-cols-1 gap-16 md:gap-0 md:grid-cols-3 w-full'>
            <div className='text-center'>
              <h3 className='text-3xl text-[#FFFFFF] font-medium'>LOCATION</h3>
              <p className='py-2'>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className='text-center'>
              <h3 className='text-3xl text-[#FFFFFF] font-medium'>AROUND THE WEB</h3>
              <div className='p-3 '>
              <i className="fa-brands fa-facebook  border-white border rounded-full p-2 mx-1"></i>
              <i className="fa-brands fa-twitter  border-white border rounded-full p-2 mx-1"></i>
              <i className="fa-brands fa-linkedin-in  border-white border rounded-full p-2 mx-1"></i>
              <i className="fa-solid fa-globe  border-white border rounded-full p-2 mx-1"></i>
              </div>
            </div>
            <div className='text-center'>
              <h3 className='text-3xl text-[#FFFFFF] font-medium'>ABOUT FREELANCER</h3>
              <p className='pt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        <div className='text-center bg-[#1a252f] p-5'>
          <p>Copyright © Your Website 2021</p>
        </div>
    </>
  )
}
