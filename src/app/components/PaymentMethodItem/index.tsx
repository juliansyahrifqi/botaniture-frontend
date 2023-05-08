import Image from "next/image";

interface PaymentMethodItemProps {
  image: string;
  name: string;
}

export default function PaymentMethodItem(props: PaymentMethodItemProps) {
  const { image, name } = props;

  return (
    <div className="bg-white p-2 rounded-md">
      <Image alt={name} src={`${process.env.IMAGE_URL}/payment_method/${image}`} width={64} height={22}/>
    </div>
  )
}
