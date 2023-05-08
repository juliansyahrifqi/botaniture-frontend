import { ProductProps } from "@/app/types/productType";
import Image from "next/image";
import Link from "next/link";
import { formatRupiah } from "../../../../utils/formatRupiah";

export default function CardProduct(props: ProductProps) {
  const { productName, productDiscount, productImage, productPrice, productSlug } = props;
  
  const price = productPrice - (productPrice * (productDiscount / 100));

  return (
    <div className="relative product-card bg-[#F8F8F8] shadow-md rounded-xl px-4 pt-16 pb-4 flex flex-col gap-3 keen-slider__slide">
      <div className="absolute px-3 py-1 bg-hero font-roboto font-bold text-white top-3 rounded-lg text-xs">New</div>

      <div className="product-image bg-[url('/bg-product.png')] bg-no-repeat bg-center bg-[length:150px_150px]">
        <Image src={productImage} alt={productName} width={120} height={120} className="w-[120px] h-[180px] object-contain mx-auto"/>
      </div>

      <div className="flex items-center gap-3">
        <h4 className={`font-sansation font-bold ${productDiscount > 0 ? 'text-[#FF3838]': 'text-[#31462D]'} text-2xl`}>
          {formatRupiah(price)}
        </h4>

        {productDiscount > 0 && (
          <p className="text-[#31462D] text-xs font-roboto font-bold"><s>{formatRupiah(productPrice)}</s></p>
        )}
      </div>

      <p className="font-roboto font-semibold text-[#31462D]">{productName}</p>

      <Link href={`/product/${productSlug}`} className="mt-auto">
        <button className="bg-primary rounded-2xl w-full py-4 font-roboto font-bold text-white">
          Lihat Tanaman
        </button>
      </Link>
    </div>
  )
}
