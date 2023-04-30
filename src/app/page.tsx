import { Inter } from "next/font/google";
import styles from "./page.module.css";

import Hero from "./components/Hero";
import Service from "./components/Service";
import PageSection from "./components/PageSection";
import CardProduct from "./components/CardProduct";

const products = [
  {
    id: 1,
    productName: 'Monstera Deliciosa / Tanaman Janda Bolong',
    productPrice: 125000,
    productDiscount: 0,
    productImage: '/tanaman-1.png',
    productSlug: 'montsera'
  },
  {
    id: 2,
    productName: 'Zamiculcas Zamiifolia / ZZ Plant / Tanaman Dolar',
    productPrice: 400000,
    productDiscount: 30,
    productImage: '/tanaman-2.png',
    productSlug: 'zamiculcas'
  },
  {
    id: 1,
    productName: 'Pilea Peperomioides / Chinese Money Plant / Tanaman Pilea',
    productPrice: 195000,
    productDiscount: 0,
    productImage: '/tanaman-1.png',
    productSlug: 'pilea'
  },
  {
    id: 1,
    productName: 'Cactus/ Tanaman Kaktus',
    productPrice: 87000,
    productDiscount: 0,
    productImage: '/tanaman-2.png',
    productSlug: 'cactus'
  },
]

export default function Home() {
  return (
    <main className={`px-4 md:px-12 py-10`}>
      <Hero />

      <Service />

      <PageSection title="New Arrival" link="/belanja">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <CardProduct 
              key={product.id} 
              productName={product.productName}
              productPrice={product.productPrice} 
              productDiscount={product.productDiscount} 
              productImage={product.productImage}
              productSlug={product.productSlug}
            />
          ))}
        </div>
      </PageSection>
    </main>
  );
}
