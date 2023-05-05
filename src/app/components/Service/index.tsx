import { ServiceType } from '@/app/types/serviceType';
import ServiceItem from './ServiceItem';

async function getServices() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/services`);

  return res.json();
}


// const services = [
//   { 
//     id: 1, 
//     icon: '/icon/wallet.svg', 
//     title: 'Garansi Uang Kembali', 
//     description: 'Uang kembali maksimal 7 hari'
//   },
//   { 
//     id: 2, 
//     icon: '/icon/discount.svg', 
//     title: 'Diskon Member', 
//     description: '12% Setiap Pembelian di Toko'
//   },
//   { 
//     id: 3, 
//     icon: '/icon/delivery.svg', 
//     title: 'Gratis Ongkir', 
//     description: 'Setiap Awal dan Akhir Bulan'
//   },
//   { 
//     id: 4, 
//     icon: '/icon/fertillizer.svg', 
//     title: 'Pupuk Gratis', 
//     description: 'Setiap pembelian diatas Rp. 200K'
//   },

// ]
interface ServicePropsType {
  data: [
    ServiceType
  ]
}

export default function Service(props: ServicePropsType) {
  const { data } = props;

  return (
    <section className='service grid grid=cols-2 md:grid-cols-4 justify-center gap-4 my-8'>
      {(data || []).map((service: ServiceType) => (
        <ServiceItem key={service.service_id} title={service.service_name} description={service.service_desc} icon={service.service_icon}/>
      ))}
    </section>
  )
}
