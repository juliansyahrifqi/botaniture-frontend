import Hero from "./components/Hero";
import Service from "./components/Service";
import PageSection from "./components/PageSection";
import Quote from "./components/Quote";
import CardCategory from "./components/CardCategory";
import CardBlog from "./components/CardBlog";
import { Suspense } from "react";
import { ProductCategoryType } from "./types/productCategoryType";
import SwiperSlider from "./components/Swiper";

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

async function getServices() {
  const res = await fetch(`${process.env.BACKEND_URL}/services`, {
    next: {
      revalidate: 10,
    }
  });

  return res.json();
}

async function getCategories() {
  const res = await fetch(`${process.env.BACKEND_URL}/product-category`, {
    next: {
      revalidate: 10,
    }
  });

  return res.json();
}

async function getProducts() {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: {
      revalidate: 10,
    }
  });

  return res.json();
}

async function getPromo() {
  const res = await fetch(`${process.env.BACKEND_URL}/promo/product`, {
    next: {
      revalidate: 60,
    }
  });

  return res.json();
}

export default async function Home() {
  const serviceData = getServices();
  const categoryData = getCategories();
  const productData = getProducts();
  const promoData = getPromo();

  const [services, categories, products, promo] = await Promise.all([serviceData, categoryData, productData, promoData]);
  
  return (
    <main className={`px-4 md:px-12 py-10`}>
      
      <Hero promo={promo} />

      <Service data={services.data} />

      <PageSection title="New Arrival" link="/belanja">
        <Suspense fallback={<div>Loading...</div>}>
          <SwiperSlider products={products} />
        </Suspense>
      </PageSection>

      <Quote />

      <PageSection title="Category" link="/category">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(categories?.data || []).map((category: ProductCategoryType) => (
              <CardCategory 
                key={category.procat_id} 
                image={`${process.env.IMAGE_URL}/product_category/${category.procat_image}`} 
                name={category.procat_name} 
                slug={category.procat_slug}
              />
            ))}
          </div>
        </Suspense>
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
