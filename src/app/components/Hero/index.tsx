import Link from "next/link";
import TanamanOne from "../../../../public/tanaman-1.png";
import TanamanTwo from "../../../../public/tanaman-1.png";
import { BsArrowRight } from 'react-icons/bs'
import Image from "next/image";
import CardDiscount from "./CardDiscount";
import CardOffer from "./CardOffer";

const data = [
  {
    id: 1,
    productName: 'Zamiculcas Zamiifolia ZZ Plant / Tanaman Dolar',
    productPrice: 400000,
    productDiscount: 10,
    productImage: '/tanaman-1.png'
  },
  {
    id: 2,
    productName: 'Monstera  Deliciosa / Tamaman Janda Bolong',
    productPrice: 250000,
    productDiscount: 12,
    productImage: '/tanaman-2.png'
  }
]

export default function Hero() {
  return (
    <section className="hero w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <CardOffer />

      {data.map((d, index) => (
        <CardDiscount key={index} background={index === 0 ? 'primary' : 'secondary'} url="/" data={d}/>
      ))}
    </section>
  )
}
