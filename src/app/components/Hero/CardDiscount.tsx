import { ProductProps } from '@/app/types/productType';
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight} from "react-icons/bs";
import { formatRupiah } from '../../../../utils/formatRupiah';

interface CardDiscountProps {
  background: 'primary' | 'secondary';
  url: string;
  data: ProductProps;
}

export default function CardDiscount(props: CardDiscountProps) {
  const { background, url, data} = props;

  const discountValue = data.productPrice - (data.productPrice * (data.productDiscount / 100));

  return (
    <div className={`relative card p-5 rounded-3xl grid grid-cols-3 items-center gap-4 ${background === 'primary' ? 'bg-primary bg-[url(/bg-right.png)]' : 'bg-hero-secondary bg-[url(/bg-right-2.png)]'} bg-no-repeat bg-contain bg-right`}>
      <Link href={url} className="absolute bg-white rounded-full p-2 right-3 top-3 bg-opacity-40 hover:bg-black hover:ring-2 hover:ring-white cursor-pointer transition-all ease-in-out duration-300">
        <BsArrowRight className="text-sm text-white font-bold"/>
      </Link>
      

      <div className="flex flex-col justify-between col-span-2 gap-10">
        <div>
          <p className="text-lg text-white font-bold font-sansation">{data.productName}</p>
        </div>

        <div>
          <p className="text-sm text-white font-semibold">Diskon Akhir Tahun</p>

          <div className="flex items-center justify-between gap-2">
            <p className="text-gold text-3xl font-bold font-sansation">{formatRupiah(discountValue)}</p> 
            <span className="text-xs text-white font-semibold font-roboto"><s>{formatRupiah(data.productPrice)}</s></span>
          </div>
        </div>
      </div>

      <Image src={props.data.productImage} alt={props.data.productName} width={200} height={250} />
    </div>
  )
}
