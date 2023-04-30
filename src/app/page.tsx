import { Inter } from "next/font/google";
import styles from "./page.module.css";

import Hero from "./components/Hero";
import Service from "./components/Service";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export default function Home() {
  return (
    <main className={`${inter.variable} px-4 md:px-12 py-10`}>
      <Hero />

      <Service />
    </main>
  );
}
