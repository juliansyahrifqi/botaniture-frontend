import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";
import localFont from 'next/font/local'

export const metadata = {
  title: "Botaniture - Keep Growing Keep Planting",
  description:
    "Botaniture is brand that sells botanical item such as plant, seed, vessel, fertilizers and etc",
};

const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto',  weight: ['300', '400', '500', '700']});
const sansation = localFont({ 
  src: [
    {
      path: '../../public/font/Sansation_Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../../public/font/Sansation_Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/font/Sansation_Bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-sansation',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${sansation.variable} h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
