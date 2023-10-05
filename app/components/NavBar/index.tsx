import React from 'react'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <div className='w-full flex justify-between py-3 px-10'>
      <div className='font-bold text-2xl'><span className='text-red-500'>Collect </span>It</div>
      <div className='flex gap-5 items-center'>
        <div>Contact Us</div>
        <div>About</div>
      </div>
      <div className='bg-red-500 h-full px-4 py-1 rounded-2xl'>Login</div>
    </div>
  )
}