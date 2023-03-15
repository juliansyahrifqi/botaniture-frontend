import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Botaniture - Keep Growing Keep Planting",
  description:
    "Botaniture is brand that sells botanical item such as plant, seed, vessel, fertilizers and etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
