import PaymentMethodItem from "../PaymentMethodItem"

export default function PaymentMethod({ paymentMethodList }: any) {
  return (
    <div className="flex flex-wrap gap-2">
      {paymentMethodList.data.map((payment: any) => (
        <PaymentMethodItem 
          image={payment.payment_image} 
          key={payment.payment_id} 
          name={payment.payment_name} 
        />
      ))}
    </div>
  )
}
