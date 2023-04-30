import Information from "./Information";
import CallUs from "./CallUs";
import PaymentMethod from "./PaymentMethod";
import FooterLogo from "./FooterLogo";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <footer className="bg-primary w-full grid grid-cols-4 justify-center p-12">

      <FooterItem title="Information">
        <Information />
      </FooterItem>

      <FooterItem title="Hubungi Kami">
        <CallUs />
      </FooterItem>

      <FooterItem title="Metode Pembayaran">
        <PaymentMethod />
      </FooterItem>

      <FooterItem>
        <FooterLogo />
      </FooterItem>
    </footer>
  )
}