import Image from "next/image";

interface PaymentMethodItemProps {
  image: string;
}

export default function PaymentMethodItem(props: PaymentMethodItemProps) {
  const { image } = props;

  return (
    <div className="bg-white p-2 rounded-md">
      <Image alt={image} src={image} width={64} height={22}/>
    </div>
  )
}
