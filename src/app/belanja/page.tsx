import React from 'react'
import CardProduct from '../components/CardProduct';
import { ProductType } from '../types/productType';

async function getProducts() {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    cache: 'no-store'
  });

  return res.json();
}

export default async function Belanja() {
  const productsData = getProducts();

  const [products] = await Promise.all([productsData]);

  return (
    <main className={`px-4 md:px-12 py-10`}>
      <h1 className='text-center text-4xl uppercase font-inter font-bold text-hero-primary'>Belanja</h1>

      <div className='my-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {products.data.map((product: ProductType) => (
          <CardProduct 
            key={product.product_id} 
            productName={product.product_name}
            productPrice={product.product_price} 
            productDiscount={product.product_discount} 
            productImage={`${process.env.NEXT_PUBLIC_IMAGE_URL}/product/${product.product_image}`}
            productSlug={product.product_slug}
          />
        ))}
      </div>
    </main>
  )
}
