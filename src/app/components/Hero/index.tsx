import { ProductType } from "@/app/types/productType";
import CardDiscount from "./CardDiscount";
import CardOffer from "./CardOffer";

const data = [
  {
    product_id: 1,
    product_name: 'Zamiculcas Zamiifolia ZZ Plant / Tanaman Dolar',
    product_price: 400000,
    product_discount: 10,
    product_image: '/tanaman-1.png',
    product_slug: 'zamiculcas'
  },
  {
    product_id: 2,
    product_name: 'Monstera  Deliciosa / Tamaman Janda Bolong',
    product_price: 250000,
    product_discount: 12,
    product_image: '/tanaman-2.png',
    product_slug: 'montsera'
  }
]

export default function Hero(props: any) {
  const { promo } = props;

  const promoName = promo.data.promo_name;

  return (
    <section className="hero w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <CardOffer />

      {promo.data.products.map((d: ProductType, index: number) => (
        <CardDiscount key={index} background={index === 0 ? 'primary' : 'secondary'} data={d} promoName={promoName} />
      ))}
    </section>
  )
}
