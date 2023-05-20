import Image from 'next/image'

export default function Quote({quote}: any) {
  return (
    <section className="relative flex items-center justify-around bg-hero-secondary w-full md:h-52 my-10 md:my-24 rounded-xl bg-[url('/bg-quote.png')] bg-cover md:bg-contain bg-no-repeat bg-left">
      <Image src={`${process.env.IMAGE_URL}/quote/${quote.quote_image}`} alt="Flower" height={280} width={280} className="w-28 md:w-56"/>

      <div className='flex flex-col'>
        <p className='text-sm md:text-2xl max-w-xl font-bold text-white font-roboto text-center'>
         {quote.quote_value}
        </p>

        <p className='text-xs md:text-base text-white font-bold font-roboto mt-4 text-center'>- {quote.quote_person_name} -</p>
      </div>

    </section>
  )
}
