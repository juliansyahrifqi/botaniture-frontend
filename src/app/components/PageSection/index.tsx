import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";

interface PageSectionProps {
  title: string;
  link: string;
  children: React.ReactNode;
}

export default function PageSection(props: PageSectionProps) {
  const { title, link, children} = props;

  return (
    <section id="section" className='my-16'>
      <div className='section-header flex justify-between my-6'>
        <h2 className='font-inter text-4xl font-bold text-hero-primary'>{title}</h2>

        <Link href={link} className='flex items-center gap-2 underline underline-offset-2 text-hero-primary font-inter font-medium hover:text-black'>
          Lihat Lainnya
          <BsArrowRight />
        </Link>
      </div>
      
      {children}
    </section>
  )
}
