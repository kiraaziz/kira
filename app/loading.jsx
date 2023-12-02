import React from 'react'
import { AiOutlineLoading } from "react-icons/ai"

export default function loading() {
  return (
    <div className='w-screen h-[100svh] bg-black flex justify-center items-center'>
      <AiOutlineLoading className='text-7xl text-purple-400 animate-spin'/>
    </div>
  )
}
