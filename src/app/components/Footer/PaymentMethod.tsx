import PaymentMethodItem from "../PaymentMethodItem"

const paymentMethodList = [
  { id: 1, image: '/bca-icon.png'},
  { id: 2, image: '/bca-icon.png'},
  { id: 3, image: '/bca-icon.png'},
  { id: 4, image: '/bca-icon.png'},
  { id: 5, image: '/bca-icon.png'},
]

export default function PaymentMethod() {
  return (
    <div className="flex flex-wrap gap-2">
      {paymentMethodList.map((payment) => (
        <PaymentMethodItem image={payment.image} key={payment.id}/>
      ))}
    </div>
  )
}
