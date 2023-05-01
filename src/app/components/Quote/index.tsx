import Image from 'next/image'
import Flower from "../../../../public/quote-flower.png"

export default function Quote() {
  return (
    <section className="relative flex items-center justify-around bg-hero-secondary w-full h-52 my-24 rounded-xl bg-[url('/bg-quote.png')] bg-contain bg-no-repeat bg-left">
      <Image src={Flower} alt="Flower" height={280} width={280} />

      <div className='flex flex-col'>
        <p className='text-2xl max-w-xl font-bold text-white font-roboto text-center'>
          If I had a single flower for every time <br>
          </br>I think about you, I could walk forever in my garden.</p>

        <p className='text-white font-bold font-roboto mt-4 text-center'>- Claudia Adrienne Grandi -</p>
      </div>

    </section>
  )
}
