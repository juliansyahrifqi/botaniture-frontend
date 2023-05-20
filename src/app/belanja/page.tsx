import React from 'react'
import CardProduct from '../components/CardProduct';
import { ProductCategoryType } from '../types/productCategoryType';
import { ProductType } from '../types/productType';

async function getProducts() {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    cache: 'no-store'
  });

  return res.json();
}

async function getProductCategory() {
  const res = await fetch(`${process.env.BACKEND_URL}/product-category`, {
    cache: 'no-store'
  });

  return res.json();
}

export default async function Belanja() {
  const productsData = getProducts();
  const productCategoryData = getProductCategory();

  const [products, productCategories] = await Promise.all([productsData, productCategoryData]);

  return (
    <main className={`px-4 md:px-12 py-10`}>
      <h1 className='text-center text-4xl uppercase font-inter font-bold text-hero-primary'>Belanja</h1>

      <div className='relative grid grid-cols-4 my-10 gap-4'>
        <div className='flex flex-col gap-4'>
          <div>
            <h1 className='text-2xl font-roboto font-bold text-primary'>Kategori</h1>
            
            <div className='flex flex-col gap-2 mt-6'>
              {productCategories.data.map((category: ProductCategoryType) => (
                <span key={category.procat_id} className="px-6 py-2 rounded-md bg-gray-50 text-gray-500 font-medium cursor-pointer">{category.procat_name}</span>
              ))}
            </div>
          </div>

          <div>
            <h1 className='text-2xl font-roboto font-bold text-primary'>Filter</h1>
            
            <div className='flex flex-col gap-2 mt-4'>
              <h2 className='text-xl font-roboto font-bold text-primary'>Harga</h2>

              <div className='form-group'>
                <input id="lowprice" className="peer/lowprice" type="radio" name="price" />
                <label htmlFor="lowprice" className="peer-checked/lowprice:text-gray-500 ml-2">Low to Highest</label>
              </div>

              <div className='form-group'>
                <input id="highprice" className="peer/highprice" type="radio" name="price" />
                <label htmlFor="highprice" className="peer-checked/highprice:text-gray-500 ml-2">High to Lowest</label>
              </div>
            </div>

            <div className='flex flex-col gap-2 mt-4'>
              <h2 className='text-xl font-roboto font-bold text-primary'>Berat</h2>

              <div className='form-group'>
                <input id="lowprice" className="peer/lowprice" type="radio" name="price" />
                <label htmlFor="lowprice" className="peer-checked/lowprice:text-gray-500 ml-2">
                  {'< 1Kg'}
                </label>
              </div>

              <div className='form-group'>
                <input id="highprice" className="peer/highprice" type="radio" name="price" />
                <label htmlFor="highprice" className="peer-checked/highprice:text-gray-500 ml-2">1 - 3Kg</label>
              </div>

              <div className='form-group'>
                <input id="highprice" className="peer/highprice" type="radio" name="price" />
                <label htmlFor="highprice" className="peer-checked/highprice:text-gray-500 ml-2">3 - 7Kg</label>
              </div>

              <div className='form-group'>
                <input id="highprice" className="peer/highprice" type="radio" name="price" />
                <label htmlFor="highprice" className="peer-checked/highprice:text-gray-500 ml-2"> {'>'} 7Kg</label>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 col-span-3'>
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
      </div>

    </main>
  )
}
