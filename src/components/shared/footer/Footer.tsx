import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-10 sm:pt-12 md:pt-14 lg:pt-16'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-84 border-t-2 border-black'>
        <p className='flex justify-center py-4 gap-1'>copyright &copy; {new Date().getFullYear()} <span className='text-lightGreen border-b border-lightGreen'>Naimur Rahman</span></p>
      </div>
    </footer>
  )
}

export default Footer; 