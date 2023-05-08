"use client"

import React from 'react'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CardProduct from '../CardProduct'
import { ProductType } from '@/app/types/productType'

export default function SwiperSlider({ products }: any) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div className='p-0'>
      <div ref={ref} className="keen-slider overflow-visible">
        {(products?.data || []).map((product: ProductType) => (
          <div key={product.product_id}>
            <CardProduct 
              key={product.product_id} 
              productName={product.product_name}
              productPrice={product.product_price} 
              productDiscount={product.product_discount} 
              productImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${product.product_image}`}
              productSlug={product.product_slug}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
