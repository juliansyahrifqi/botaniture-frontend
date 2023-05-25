"use client"

import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function InputQty({ maxQty }: any) {
  const [qty, setQty] = useState(1);

  const handleAddQty = () => {
    if(qty >= maxQty) {
      return qty;
    }

    setQty(qty + 1);
  }

  const handleMinQty = () => {
    if(qty > 0) {
      setQty(qty - 1);
    } 

    return qty;
  }

  return (
    <div className='flex gap-2 items-center mt-4 w-full'>
      <button 
        className='p-2 bg-primary text-white rounded-lg text-xl' 
        onClick={handleMinQty}
      >
        <AiOutlineMinus />
      </button>

      <span className='py-2 px-6 border border-gray-300 rounded-lg'>{qty}</span>

      <button 
        className='p-2 bg-primary text-white rounded-lg text-xl' 
        onClick={handleAddQty}
      >
        <AiOutlinePlus />
      </button>
    </div>
  )
}
