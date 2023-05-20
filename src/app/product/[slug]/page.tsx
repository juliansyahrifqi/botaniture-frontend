import Image from 'next/image';
import React from 'react'
import { formatRupiah } from '../../../../utils/formatRupiah';
import { BsCartPlus } from 'react-icons/bs';

async function getProductDetail(slug: string) {
  const res = await fetch(`${process.env.BACKEND_URL}/product/${slug}`, {
    next: {
      revalidate: 60
    }
  });

  return res.json();
}

export default async function ProductDetail({ params }: { params: { slug: string }}) {
  const productsData = getProductDetail(params.slug);

  const [product] = await Promise.all([productsData]);

  const price = product.data.product_price - (product.data.product_price * (product.data.product_discount / 100));

  return (
    <main className={`px-4 md:px-12 py-10`}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Image src={`${process.env.IMAGE_URL}/product/${product.data.product_image}`} alt={product.data.product_name} width={250} height={250} className="w-1/2 max-h-96 object-contain mx-auto" />

        <div className='product-information flex flex-col gap-5 py-4'>
          <h1 className='text-2xl md:text-3xl font-roboto font-bold text-hero-primary'>{product.data.product_name}</h1>

          <div className="flex items-center gap-3 bg-gray-100 p-4">
            {product.data.product_discount > 0 && (
              <p className="text-[#31462D] text-sm font-roboto font-bold"><s>{formatRupiah(product.data.product_price)}</s></p>
            )}

            <h4 className={`font-sansation font-bold ${product.data.product_discount > 0 ? 'text-[#FF3838]': 'text-[#31462D]'} text-2xl md:text-3xl`}>
              {formatRupiah(price)}
            </h4>

            {product.data.product_discount > 0 && (
              <div className='bg-[#FF3838] py-1 px-2 rounded-sm'>
                <p className='text-white text-xs font-bold font-sansation'>
                  {product.data.product_discount}% OFF
                </p>
              </div>
            )}
          </div>

          <div>
            <p className='font-medium text-lg text-hero-secondary font-roboto'>Deskripsi</p>

            <p className='mt-4 text-md font-roboto font-normal'>{product.data.product_description}</p>
          </div>

          <div className='flex flex-col'>
            <p className='font-medium text-lg text-hero-secondary font-roboto'>Jumlah</p>

            <input type="number" />
          </div>

          <button className="flex gap-4 bg-primary rounded-lg p-4 font-roboto font-medium text-white mt-auto self-start">
            <BsCartPlus className='font-bold text-xl'/>
            Masukkan Keranjang
          </button>
        </div>
      </div>
    </main>
  )
}
