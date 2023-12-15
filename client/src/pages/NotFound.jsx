import React from 'react'
import notFound from '../assets/Images/pageNotFound.svg'

const NotFound = () => {
  return (
    <div className='flex flex-col h-[100vh] justify-center items-center'>
        <img src={notFound} alt="notFoundImage" className='h-[500px]' />
        <p className='text-[4rem] text-brown-200'>Page Not Found</p>

    </div>
  )
}

export default NotFound