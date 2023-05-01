import { Inter } from "next/font/google";
import styles from "./page.module.css";

import Hero from "./components/Hero";
import Service from "./components/Service";
import PageSection from "./components/PageSection";
import CardProduct from "./components/CardProduct";
import Quote from "./components/Quote";
import CardCategory from "./components/CardCategory";
import CardBlog from "./components/CardBlog";

const products = [
  {
    id: 1,
    productName: 'Monstera Deliciosa / Tanaman Janda Bolong',
    productPrice: 125000,
    productDiscount: 0,
    productImage: '/tanaman-3.png',
    productSlug: 'montsera'
  },
  {
    id: 2,
    productName: 'Zamiculcas Zamiifolia / ZZ Plant / Tanaman Dolar',
    productPrice: 400000,
    productDiscount: 30,
    productImage: '/tanaman-4.png',
    productSlug: 'zamiculcas'
  },
  {
    id: 3,
    productName: 'Pilea Peperomioides / Chinese Money Plant / Tanaman Pilea',
    productPrice: 195000,
    productDiscount: 0,
    productImage: '/tanaman-5.png',
    productSlug: 'pilea'
  },
  {
    id: 4,
    productName: 'Cactus/ Tanaman Kaktus',
    productPrice: 87000,
    productDiscount: 0,
    productImage: '/tanaman-6.png',
    productSlug: 'cactus'
  },
]

const categories = [
  { id: 1, name: 'House Plants', slug: 'house-plant', image: '/bg-category-1.jpg'},
  { id: 2, name: 'Pots & Vessels', slug: 'pots-vessels', image: '/bg-category-2.jpg'},
  { id: 3, name: 'Home & Garden', slug: 'home-garden', image: '/bg-category-3.jpg'},
  { id: 4, name: 'Seeds & Fertilizers', slug: 'seeds-fertilizers', image: '/bg-category-4.jpg'},
]

const blogs = [
  { 
    id: 1,
    title: 'Cara Merawat Tanaman Rumah Agar Tidak Layu',
    description: 'Tulisan kali ini adalah sebuah tips dari Botaniture tentang cara merawat tanaman rumah agar tidak layu',
    date: new Date(),
    slug: 'tanaman-rumah',
    image: '/bg-blog-1.jpg'
  },
  { 
    id: 2,
    title: 'Rekomendasi Tanaman Hias Untuk Ruang/Meja Kerja',
    description: 'Ruang/Meja kerja adalah tempat yang banyak digunakan sehari-hari oleh kebanyakan orang, agar..',
    date: new Date(),
    slug: 'tanaman-hias',
    image: '/bg-blog-2.jpg'
  },
  { 
    id: 3,
    title: 'Tips Merawat Rumput Jepang Agar Tidak Kering',
    description: 'Memberikan pupuk organik merupakan salah satu cara menyuburkan rumput Jepang. Bukan tanpa ....',
    date: new Date(),
    slug: 'tanaman-rumput',
    image: '/bg-blog-3.jpg'
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

      <Quote />

      <PageSection title="Category" link="/category">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <CardCategory 
              key={category.id} 
              image={category.image} 
              name={category.name} 
              slug={category.slug}
            />
          ))}
        </div>
      </PageSection>

      <PageSection title="Blog" link="/blog">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <CardBlog 
              key={blog.id}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              slug={blog.slug}
              image={blog.image}
            />
          ))}
        </div>
      </PageSection>
    </main>
  );
}
