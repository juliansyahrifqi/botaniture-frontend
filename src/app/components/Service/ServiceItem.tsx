interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceItem(props: ServiceItemProps) {
  const { icon, title, description } = props;

  return (
    <div className='flex items-center gap-3'>
      <svg width="94" height="98" viewBox="0 0 94 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.5548 16.9817C40.5216 -14.9149 12.8704 8.20509 3.04893 23.7521C0.0269413 38.0454 -1.93735 70.8447 14.3814 87.6957C30.7002 104.547 66.0071 94.7169 81.6208 87.6957C91.9459 77.4146 104.588 48.8782 72.5548 16.9817Z" fill="#A0B29B" stroke="#6B8765" stroke-width="2" />
        <image x="25" y="30" width="40" height="40" href={icon} />
      </svg>


      <div className='block'>
        <h4 className='font-roboto font-medium text-hero-primary text-lg'>{title}</h4>
        <p className='text-sm font-roboto font-medium text-hero-secondary'>{description}</p>
      </div>
    </div>
  )
}
