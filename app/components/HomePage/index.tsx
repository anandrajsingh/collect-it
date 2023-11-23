import React from 'react'

type Props = {}

function HomePage({}: Props) {
  return (
    <div className='pt-20 flex'>
      <div className='w-1/2 pl-20'>
        <div className="h-max w-max px-4 py-2 rounded-2xl text-gray-200 bg-zinc-700 text-xs">Simple Link Managing Tool</div>
        <div className='text-5xl font-bold py-5'><span className='text-red-500'>Create.</span> Organize.</div>
        <div className='flex gap-5'>
        <div className='text-5xl font-bold'>Share.</div>
        <div className='text-5xl font-bold text-yellow-400 rotate-13 border-2 p-2 border-yellow-400'>Links.</div>
        </div>
        <div className='py-10'>Tired of saving and forgetting links, we will help you with it.</div>
        <div className='bg-red-500 h-max w-max px-5 py-3 rounded-3xl'>Try now for free</div>
        <div className='py-10'>Lifetime free, never pay anything</div>
      </div>
      <div className='invisible sm:visible w-1/2'>
        <img className='' src="copy-link-512.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage