import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Inter, Roboto } from "next/font/google";
import localFont from 'next/font/local'

export const metadata = {
  title: "Botaniture - Keep Growing Keep Planting",
  description:
    "Botaniture is brand that sells botanical item such as plant, seed, vessel, fertilizers and etc",
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter'});
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

async function getPaymentMethod() {
  const res = await fetch(`${process.env.BACKEND_URL}/payment-method`, {
    next: {
      revalidate: 60
    }
  });

  return res.json();
}

async function getContact() {
  const res = await fetch(`${process.env.BACKEND_URL}/contact`, {
    next: {
      revalidate: 60
    }
  });

  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const paymentMethodData = getPaymentMethod();
  const contactData = getContact();

  const [ paymentMethod, contactList ] = await Promise.all([ paymentMethodData, contactData ]);

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${sansation.variable} ${inter.variable} h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer paymentMethod={paymentMethod} contactList={contactList} />
      </body>
    </html>
  );
}
