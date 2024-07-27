import React, { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404';
  }, []);
  return (
    <div className='bg-red-600 text-white flex justify-center items-center h-screen'>
        <h1 className='text-9xl'>404</h1>
    </div>
  )
}
