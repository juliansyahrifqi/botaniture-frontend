import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-xl px-12">
      <section className="hero grid grid-cols-2">
        <div className="card rounded-xl bg-hero-40 p-8">
          <h1 className="text-hero-primary text-4xl font-bold ">
            Perindah Rumahmu Bersama Botaniture
          </h1>

          <p className="font-normal text-md mt-5">
            Kami menyediakan banyak variasi tanaman yang dapat disesuaikan
            dengan keinginan pelanggan{" "}
          </p>

          <button className="bg-primary hover:bg-hero rounded-lg text-white px-6 py-4 font-bold text-base mt-5">
            Belanja Sekarang
          </button>
        </div>
        <div className="grid-rows-2">
          <p>test</p>
          <p>test</p>
        </div>
      </section>
    </main>
  );
}
