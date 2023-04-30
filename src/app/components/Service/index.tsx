import ServiceItem from './ServiceItem';


const services = [
  { 
    id: 1, 
    icon: '/icon/wallet.svg', 
    title: 'Garansi Uang Kembali', 
    description: 'Uang kembali maksimal 7 hari'
  },
  { 
    id: 2, 
    icon: '/icon/discount.svg', 
    title: 'Diskon Member', 
    description: '12% Setiap Pembelian di Toko'
  },
  { 
    id: 3, 
    icon: '/icon/delivery.svg', 
    title: 'Gratis Ongkir', 
    description: 'Setiap Awal dan Akhir Bulan'
  },
  { 
    id: 4, 
    icon: '/icon/fertillizer.svg', 
    title: 'Pupuk Gratis', 
    description: 'Setiap pembelian diatas Rp. 200K'
  },

]

export default function Service() {
  return (
    <section className='service grid grid=cols-2 md:grid-cols-4 justify-center gap-4 my-8'>
      {services.map((service) => (
        <ServiceItem key={service.id} title={service.title} description={service.description} icon={service.icon}/>
      ))}
    </section>
  )
}
