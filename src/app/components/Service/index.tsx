import { ServiceType } from '@/app/types/serviceType';
import ServiceItem from './ServiceItem';

interface ServicePropsType {
  data: [
    ServiceType
  ]
}

export default function Service(props: ServicePropsType) {
  const { data } = props;
  const IMAGE_URL = `${process.env.IMAGE_URL}/service`

  return (
    <section className='service grid grid=cols-2 md:grid-cols-4 justify-center gap-4 my-8'>
      {(data || []).map((service: ServiceType) => (
        <ServiceItem key={service.service_id} title={service.service_name} description={service.service_desc} icon={`${IMAGE_URL}/${service.service_icon}`}/>
      ))}
    </section>
  )
}
