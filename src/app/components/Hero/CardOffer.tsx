import React from 'react'

export default function CardOffer() {
  return (
    <div className="card rounded-3xl bg-hero-40 p-8 cols-span-1 md:col-span-2 row-span-1 md:row-span-2 h-full bg-[url('/image.png')] bg-contain bg-no-repeat bg-right py-24">
      <h1 className="text-hero-primary text-4xl font-bold max-w-md font-roboto">
        Perindah Rumahmu Bersama Botaniture
      </h1>

      <p className="font-roboto font-normal text-base text-hero-secondary mt-5 max-w-[250px]">
        Kami menyediakan banyak variasi tanaman yang dapat disesuaikan
        dengan keinginan pelanggan{" "}
      </p>

      <button className="bg-primary hover:bg-hero rounded-lg text-white px-8 py-3 font-bold text-base mt-10 font-roboto">
        Belanja Sekarang
      </button>
    </div>
  )
}
