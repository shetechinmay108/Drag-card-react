import React from 'react'

const Background = () => {
  return (
     <>
     <div className='w-full h-screen fixed z-[2]'>

     <div className='w-full py-10 flex justify-center text-zinc-200 font-semibold'>Document</div>
     <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none font-semibold text-zinc-400 tracking-tighter'>Drag.</h1>
     </div>
     </>
  )
}

export default Background