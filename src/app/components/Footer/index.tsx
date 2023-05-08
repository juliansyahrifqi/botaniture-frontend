import Information from "./Information";
import CallUs from "./CallUs";
import PaymentMethod from "./PaymentMethod";
import FooterLogo from "./FooterLogo";
import FooterItem from "./FooterItem";

export default  function Footer({ paymentMethod, contactList }: any) {
  return (
    <footer className="bg-footer w-full">
      <div className="grid grid-cols-4 justify-center p-12">
        <FooterItem title="Information">
          <Information />
        </FooterItem>

        <FooterItem title="Hubungi Kami">
          <CallUs contactList={contactList} />
        </FooterItem>

        <FooterItem title="Metode Pembayaran">
          <PaymentMethod paymentMethodList={paymentMethod}/>
        </FooterItem>

        <FooterItem>
          <FooterLogo />
        </FooterItem>
      </div>

      <div className="bg-[#3E5338] py-1">
        <p className="text-center text-white text-sm font-roboto">Copyright 2023 Botaniture. All Rights Reserved </p>
      </div>
    </footer>
  )
}