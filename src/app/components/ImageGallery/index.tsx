"use client"

import Image from 'next/image'
import React, { useState } from 'react'

export default function ImageGallery({ data }: any) {
  const [primary, setPrimary] = useState(data[0]);

  const handleSetPrimary = (data: any) => {
    setPrimary(data)
  }

  return (
    <div className='flex flex-col'>
      <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product_gallery/${primary.proga_image}`} alt={primary.product_name} width={250} height={250} className="w-full max-h-96 object-cover mx-auto" />

      <div className='flex gap-2 mt-2'>
        {data.map((proga: any) => (
          <Image 
            key={proga.proga_id} 
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product_gallery/${proga.proga_image}`} alt={data.product_name} width={250} height={250} 
            className="w-full h-24 object-cover mx-auto cursor-pointer" 
            onClick={() => handleSetPrimary(proga)}  
          />
        ))}
      </div>
    </div>
  )
}
