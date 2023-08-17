import { ProductType } from "@/app/types/productType";
import CardDiscount from "./CardDiscount";
import CardOffer from "./CardOffer";

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
